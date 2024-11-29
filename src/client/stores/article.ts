import { defineStore } from 'pinia'
import type { Article } from '@/shared/types/article'

const GITEE_API_BASE = 'https://gitee.com/api/v5'
const REPO_OWNER = 'JIA_03'
const REPO_NAME = 'blog-content'
const ACCESS_TOKEN = import.meta.env.VITE_GITEE_TOKEN

interface GiteeFile {
  name: string
  path: string
  sha: string
  type: 'file' | 'dir'
  content?: string
}

// 从文件名中提取 ID
function extractIdFromFilename(filename: string): number {
  const match = filename.match(/^(\d+)-/)
  return match ? parseInt(match[1]) : Date.now()
}

// 添加解码函数
function decodeContent(base64Content: string): string {
  try {
    // 1. 先进行 Base64 解码
    const decoded = atob(base64Content)
    // 2. 将解码后的二进制数据转换为 UTF-8 字符串
    const bytes = new Uint8Array(decoded.length)
    for (let i = 0; i < decoded.length; i++) {
      bytes[i] = decoded.charCodeAt(i)
    }
    return new TextDecoder('utf-8').decode(bytes)
  } catch (e) {
    console.error('解码失败:', e)
    return base64Content
  }
}

export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: [] as Article[],
    selectedTags: [] as string[],
    selectedCategory: null as string | null,
    categories: [] as string[]
  }),

  getters: {
    visibleArticles: (state) => {
      return state.articles
        .filter(article => article.visible !== false)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    },

    recommendedArticles: (state) => {
      return state.articles
        .filter(article => article.recommended && article.visible !== false)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }
  },

  actions: {
    // 获取所有分类
    async fetchCategories() {
      try {
        const response = await fetch(
          `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/?access_token=${ACCESS_TOKEN}`
        )
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        this.categories = data
          .filter((item: GiteeFile) => item.type === 'dir')
          .map((dir: GiteeFile) => dir.name)
      } catch (error) {
        console.error('获取分类失败:', error)
        throw error
      }
    },

    // 获取文章列表
    async fetchArticles() {
      try {
        await this.fetchCategories()
        const articles: Article[] = []

        for (const category of this.categories) {
          const response = await fetch(
            `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${category}?access_token=${ACCESS_TOKEN}`
          )

          if (!response.ok) continue

          const files = await response.json()
          const mdFiles = files.filter((file: GiteeFile) => file.name.endsWith('.md'))

          for (const file of mdFiles) {
            try {
              const contentResponse = await fetch(
                `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${file.path}?access_token=${ACCESS_TOKEN}`
              )

              if (!contentResponse.ok) continue

              const data = await contentResponse.json()
              const content = decodeContent(data.content)

              const [, frontMatter = '', articleContent = ''] = content.split('---')

              // 解析 front matter
              const meta = frontMatter.split('\n').reduce((acc, line) => {
                const [key, ...values] = line.split(':')
                if (key && values.length) {
                  acc[key.trim()] = values.join(':').trim()
                }
                return acc
              }, {} as Record<string, string>)

              const article: Article = {
                id: extractIdFromFilename(file.name),
                title: meta.title || file.name.replace('.md', ''),
                description: meta.description || '',
                content: articleContent.trim(),
                category,
                tags: (meta.tags || '').split(',').map(tag => tag.trim()).filter(Boolean),
                createdAt: meta.date || new Date().toISOString(),
                updatedAt: meta.updated || new Date().toISOString(),
                views: parseInt(meta.views || '0'),
                likes: parseInt(meta.likes || '0'),
                comments: parseInt(meta.comments || '0'),
                status: (meta.status as 'draft' | 'published') || 'published',
                visible: meta.visible !== 'false',
                filename: file.name,
                path: file.path,
                sha: file.sha
              }

              articles.push(article)
            } catch (error) {
              console.error(`处理文件 ${file.path} 失败:`, error)
            }
          }
        }

        this.articles = articles
      } catch (error) {
        console.error('获取文章列表失败:', error)
        throw error
      }
    },

    // 初始化文章列表
    async initializeArticles() {
      try {
        await this.fetchArticles()
      } catch (error) {
        console.error('初始化文章失败:', error)
      }
    }
  }
}) 