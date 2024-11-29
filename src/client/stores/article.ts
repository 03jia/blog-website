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
  if (match) {
    return parseInt(match[1])
  }
  // 如果没有找到 ID，使用时间戳作为 ID
  return Date.now()
}

export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: [] as Article[],
    selectedTags: [] as string[],
    selectedCategory: null as string | null,
    categories: [] as string[] // 存储所有分类
  }),

  getters: {
    visibleArticles: (state) => {
      return state.articles
        .filter(article => article.visible !== false)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    },

    // 添加获取推荐文章的 getter
    recommendedArticles: (state) => {
      return state.articles
        .filter(article => article.recommended && article.visible !== false)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }
  },

  actions: {
    // 获取所有分类（文件夹）
    async fetchCategories() {
      try {
        console.log('开始获取分类列表...')
        console.log('请求URL:', `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/?access_token=${ACCESS_TOKEN}`)
        
        const response = await fetch(
          `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/?access_token=${ACCESS_TOKEN}`
        )
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        console.log('获取到的仓库内容:', data)
        
        if (!Array.isArray(data)) {
          throw new Error('返回数据格式错误')
        }
        
        this.categories = data
          .filter(item => item.type === 'dir')
          .map(dir => dir.name)
        
        console.log('解析出的分类列表:', this.categories)
      } catch (error) {
        console.error('获取分类失败:', error)
        throw error
      }
    },

    // 从 Gitee 获取文章列表
    async fetchArticles() {
      try {
        console.log('开始获取文章列表...')
        await this.fetchCategories()
        const articles: Article[] = []

        for (const category of this.categories) {
          console.log(`正在获取 ${category} 分类的文件列表...`)
          const filesUrl = `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${category}?access_token=${ACCESS_TOKEN}`
          
          const response = await fetch(filesUrl)
          if (!response.ok) {
            console.error(`获取 ${category} 分类失败:`, response.statusText)
            continue
          }

          const files = await response.json() as GiteeFile[]
          const mdFiles = files.filter(file => file.name.endsWith('.md'))
          
          for (const file of mdFiles) {
            try {
              const contentResponse = await fetch(
                `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${file.path}?access_token=${ACCESS_TOKEN}`
              )
              
              if (!contentResponse.ok) {
                console.error(`获取文件 ${file.path} 失败:`, contentResponse.statusText)
                continue
              }

              const contentData = await contentResponse.json()
              const content = atob(contentData.content)

              const article = this.parseArticleContent(content, {
                id: extractIdFromFilename(file.name),
                category,
                filename: file.name,
                path: file.path,
                sha: file.sha
              })

              articles.push(article)
              console.log(`成功解析文章: ${article.title} (ID: ${article.id})`)
            } catch (error) {
              console.error(`处理文件 ${file.path} 失败:`, error)
            }
          }
        }

        this.articles = articles
        this.saveArticles()
      } catch (error) {
        console.error('获取文章列表失败:', error)
        throw error
      }
    },

    // 解析文章内容和元数据
    parseArticleContent(content: string, fileInfo: { 
      id: number, 
      category: string, 
      filename: string,
      path: string,
      sha: string 
    }): Article {
      // 分离元数据和内容
      const [, frontMatter = '', articleContent = ''] = content.split('---')

      // 解析元数据
      const meta = frontMatter.split('\n').reduce((acc, line) => {
        const [key, ...values] = line.split(':')
        if (key && values.length) {
          acc[key.trim()] = values.join(':').trim()
        }
        return acc
      }, {} as Record<string, string>)

      return {
        id: fileInfo.id,
        title: meta.title || fileInfo.filename.replace('.md', ''),
        description: meta.description || '',
        content: articleContent.trim(),
        category: fileInfo.category,
        tags: (meta.tags || '').split(',').map(tag => tag.trim()).filter(Boolean),
        createdAt: meta.date || new Date().toISOString(),
        updatedAt: meta.updated || new Date().toISOString(),
        views: parseInt(meta.views || '0'),
        likes: parseInt(meta.likes || '0'),
        comments: parseInt(meta.comments || '0'),
        status: (meta.status as 'draft' | 'published') || 'published',
        visible: meta.visible !== 'false',
        filename: fileInfo.filename,
        path: fileInfo.path,
        sha: fileInfo.sha
      }
    },

    // 保存文章
    async saveArticle(article: Article, content: string) {
      try {
        const frontMatter = [
          '---',
          `title: ${article.title}`,
          `description: ${article.description}`,
          `date: ${article.createdAt}`,
          `updated: ${new Date().toISOString()}`,
          `tags: ${article.tags.join(',')}`,
          `views: ${article.views}`,
          `likes: ${article.likes}`,
          `comments: ${article.comments}`,
          `status: ${article.status}`,
          `visible: ${article.visible}`,
          '---',
          '',
          content
        ].join('\n')

        // 确保文件名和路径存在
        if (!article.filename || !article.path) {
          article.filename = `${article.id}-${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`
          article.path = `${article.category}/${article.filename}`
        }

        // 更新文件
        await this.updateGiteeFile(
          article.path,
          frontMatter,
          `Update article: ${article.title}`
        )

        // 更新本地数据
        const index = this.articles.findIndex(a => a.id === article.id)
        if (index === -1) {
          this.articles.push(article)
        } else {
          this.articles[index] = article
        }

        this.saveArticles()
        return true
      } catch (error) {
        console.error('保存文章失败:', error)
        return false
      }
    },

    // 从本地存储加载文章
    loadArticles() {
      const savedArticles = localStorage.getItem('articles')
      if (savedArticles) {
        this.articles = JSON.parse(savedArticles)
      }
    },

    // 保存文章到本地存储
    saveArticles() {
      localStorage.setItem('articles', JSON.stringify(this.articles))
    },

    // 初始化文章列表
    async initializeArticles() {
      const apiAccessible = await this.testGiteeAccess()
      if (!apiAccessible) {
        console.error('无法访问 Gitee API，请检查配置')
        return
      }
      try {
        await this.fetchArticles()
      } catch (error) {
        console.error('Failed to initialize articles:', error)
        // 如果获取失败，创建默认文章
        if (this.articles.length === 0) {
          this.articles = [
            {
              id: 1,
              title: '示例文章',
              description: '这是一篇示例文章',
              content: '# 示例文章\n\n这是文章内容...',
              category: '默认分类',
              tags: ['示例', '默认'],
              createdAt: new Date().toISOString(),
              views: 0,
              likes: 0,
              comments: 0,
              status: 'published',
              visible: true
            }
          ]
          this.saveArticles()
        }
      }
    },

    // 获取文章内容
    async fetchArticleContent(id: number) {
      try {
        const article = this.articles.find((a: Article) => a.id === id)
        if (!article) return null

        const response = await fetch(
          `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/articles/${article.filename}?access_token=${ACCESS_TOKEN}`
        )
        const data = await response.json()
        return atob(data.content)
      } catch (error) {
        console.error('Failed to fetch article content:', error)
        return null
      }
    },

    // 删除文章
    async deleteArticle(id: number) {
      const article = this.articles.find((a: Article) => a.id === id)
      if (!article) return

      try {
        // 删除文章文件
        await this.deleteGiteeFile(
          `articles/${article.filename}`,
          `Delete article: ${article.title}`
        )

        // 更新元数据
        this.articles = this.articles.filter((a: Article) => a.id !== id)
        await this.updateGiteeFile(
          'meta.json',
          JSON.stringify(this.articles, null, 2),
          `Update meta after deleting: ${article.title}`
        )

        this.saveArticles()
      } catch (error) {
        console.error('Failed to delete article:', error)
        throw error
      }
    },

    // 切换文章可见性
    async toggleArticleVisibility(id: number) {
      const article = this.articles.find((a: Article) => a.id === id)
      if (!article) return

      article.visible = !article.visible
      await this.saveArticle(article, article.content || '')
    },

    // 更新 Gitee 文件
    async updateGiteeFile(path: string, content: string, message: string) {
      try {
        // 1. 先获取默认分支
        const repoResponse = await fetch(
          `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}?access_token=${ACCESS_TOKEN}`
        )
        const repoData = await repoResponse.json()
        const defaultBranch = repoData.default_branch || 'master'

        // 2. 获取文件的 SHA
        const url = `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${encodeURIComponent(path)}`
        const fileResponse = await fetch(`${url}?access_token=${ACCESS_TOKEN}&ref=${defaultBranch}`)
        
        if (!fileResponse.ok) {
          // 如果文件不存在，创建新文件
          const createResponse = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              access_token: ACCESS_TOKEN,
              content: btoa(unescape(encodeURIComponent(content))),
              message,
              branch: defaultBranch
            })
          })

          if (!createResponse.ok) {
            const errorData = await createResponse.json()
            throw new Error(`创建文件失败: ${errorData.message}`)
          }
          return await createResponse.json()
        }

        // 3. 如果文件存在，更新文件
        const fileData = await fileResponse.json()
        const updateResponse = await fetch(url, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_token: ACCESS_TOKEN,
            content: btoa(unescape(encodeURIComponent(content))),
            message,
            sha: fileData.sha,
            branch: defaultBranch
          })
        })

        if (!updateResponse.ok) {
          const errorData = await updateResponse.json()
          throw new Error(`更新文件失败: ${errorData.message}`)
        }

        return await updateResponse.json()
      } catch (error) {
        console.error('文件操作失败:', error)
        throw error
      }
    },

    // 删除 Gitee 文件
    async deleteGiteeFile(path: string, message: string) {
      try {
        // 1. 获取默认分支
        const repoResponse = await fetch(
          `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}?access_token=${ACCESS_TOKEN}`
        )
        const repoData = await repoResponse.json()
        const defaultBranch = repoData.default_branch || 'master'

        // 2. 获取文件的 SHA
        const url = `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${encodeURIComponent(path)}`
        const response = await fetch(`${url}?access_token=${ACCESS_TOKEN}&ref=${defaultBranch}`)
        
        if (!response.ok) {
          throw new Error('文件不存在')
        }

        const data = await response.json()
        const deleteResponse = await fetch(url, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_token: ACCESS_TOKEN,
            message,
            sha: data.sha,
            branch: defaultBranch
          })
        })

        if (!deleteResponse.ok) {
          const errorData = await deleteResponse.json()
          throw new Error(`删除文件失败: ${errorData.message}`)
        }

        return await deleteResponse.json()
      } catch (error) {
        console.error('删除文件失败:', error)
        throw error
      }
    },

    // 测试 Gitee API 访问
    async testGiteeAccess() {
      try {
        console.log('测试 Gitee API 访问...')
        console.log('Token:', ACCESS_TOKEN)
        console.log('仓库信息:', `${REPO_OWNER}/${REPO_NAME}`)
        
        const response = await fetch(
          `${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}?access_token=${ACCESS_TOKEN}`
        )
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        console.log('仓库信息:', data)
        return true
      } catch (error) {
        console.error('Gitee API 访问测试失败:', error)
        return false
      }
    }
  }
}) 