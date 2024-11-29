import { defineStore } from 'pinia'
import type { Article } from '@/shared/types/article'
import { articlesMeta } from '@/shared/config/articles-meta'

export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: [] as Article[],
    selectedTags: [] as string[],
    selectedCategory: null as string | null
  }),

  getters: {
    visibleArticles: (state) => {
      return state.articles.filter(article => article.visible !== false)
    },

    filteredArticles: (state) => {
      let filtered = state.articles

      if (state.selectedCategory) {
        filtered = filtered.filter(article => article.category === state.selectedCategory)
      }

      if (state.selectedTags.length > 0) {
        filtered = filtered.filter(article => 
          state.selectedTags.every(tag => article.tags.includes(tag))
        )
      }

      return filtered
    }
  },

  actions: {
    async fetchArticles() {
      this.articles = articlesMeta.map(meta => ({
        ...meta,
        content: '',
        views: 0,
        likes: 0,
        comments: 0,
        status: 'published' as const,
        visible: true,
        updatedAt: meta.createdAt
      }))
    },

    toggleTag(tag: string) {
      const index = this.selectedTags.indexOf(tag)
      if (index === -1) {
        this.selectedTags.push(tag)
      } else {
        this.selectedTags.splice(index, 1)
      }
    },

    setCategory(category: string | null) {
      this.selectedCategory = category
    },

    toggleArticleVisibility(id: number) {
      const article = this.articles.find(a => a.id === id)
      if (article) {
        article.visible = !article.visible
      }
    }
  }
}) 