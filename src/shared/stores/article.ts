import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Article } from '@/shared/types/article'
import { getAllArticles } from '@/client/config/articles-meta'

export const useArticleStore = defineStore('article', () => {
  const articles = ref<Article[]>(getAllArticles())
  
  const toggleTag = (tag: string) => {
    // 标签筛选逻辑
  }
  
  return {
    articles,
    toggleTag
  }
}) 