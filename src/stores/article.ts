import { defineStore } from 'pinia'
import { getAllArticles } from '@/config/articles-meta'
import type { Article } from '@/types/article'

export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: getAllArticles(),
    currentArticle: null as Article | null
  }),
  
  actions: {
    async loadArticle(id: number) {
      const article = this.articles.find(a => a.id === id)
      if (article) {
        this.currentArticle = article
      }
    }
  }
}) 