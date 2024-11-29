import { defineStore } from 'pinia'
import type { Article } from '@/shared/types/article'
import { GiteeService } from '@/shared/services/gitee'
import { decodeContent, parseArticleContent } from '@/shared/utils/article-parser'
import { getArticleState, toggleArticleVisibility, toggleArticleRecommended } from '@/shared/utils/kv'

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

    async toggleVisibility(article: Article) {
      const visible = !article.visible
      await toggleArticleVisibility(article.id, visible)
      article.visible = visible
    },

    async toggleRecommended(article: Article) {
      const recommended = !article.recommended
      await toggleArticleRecommended(article.id, recommended)
      article.recommended = recommended
    }
  }
}) 