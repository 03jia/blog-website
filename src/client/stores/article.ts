import { defineStore } from 'pinia'
import type { Article } from '@/shared/types/article'
import { GiteeService } from '@/shared/services/gitee'
import { decodeContent, parseArticleContent } from '@/shared/utils/article-parser'
import { getArticleState, toggleArticleVisibility, toggleArticleRecommended } from '@/shared/utils/kv'
import { LocalCache } from '@/client/utils/cache'

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
    async fetchCategories() {
      try {
        this.categories = await GiteeService.getDirectories()
      } catch (error) {
        console.error('获取分类失败:', error)
        throw error
      }
    },

    async fetchArticles() {
      try {
        // 先检查缓存
        const cachedArticles = LocalCache.get('articles')
        if (cachedArticles) {
          this.articles = cachedArticles
          return
        }

        // 如果没有缓存，则从 Gitee 获取
        await this.fetchCategories()
        const articles: Article[] = []

        for (const category of this.categories) {
          const files = await GiteeService.getFiles(category)
          
          for (const file of files) {
            try {
              const content = await GiteeService.getFileContent(file.path)
              if (!content) continue

              const decodedContent = decodeContent(content)
              const article = parseArticleContent(
                decodedContent,
                category,
                file.name,
                file.path,
                file.sha
              )

              const state = await getArticleState(article.id)
              if (state) {
                Object.assign(article, state)
              }
              
              articles.push(article)
            } catch (error) {
              console.error(`解析文章失败: ${file.path}`, error)
            }
          }
        }

        // 更新缓存
        LocalCache.set('articles', articles)
        this.articles = articles
      } catch (error) {
        console.error('获取文章列表失败:', error)
        throw error
      }
    },

    async toggleVisibility(article: Article) {
      const visible = !article.visible
      await toggleArticleVisibility(article.id, visible)
      article.visible = visible
    },

    async toggleRecommended(article: Article) {
      const recommended = !article.recommended
      await toggleArticleRecommended(article.id, recommended)
      article.recommended = recommended
    },

    // 更新文章内容
    updateArticleContent(id: number, content: string) {
      const article = this.articles.find(a => a.id === id)
      if (article) {
        article.content = content
      }
    }
  },

  persist: true
}) 