<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useArticleStore } from '@/client/stores/article'
import ArticleCard from './ArticleCard.vue'
import type { Article } from '@/shared/types/article'

const articleStore = useArticleStore()
const articles = computed(() => articleStore.visibleArticles)

onMounted(async () => {
  if (articleStore.articles.length === 0) {
    await articleStore.fetchArticles()
  }
})
</script>

<template>
  <div class="space-y-6">
    <RouterLink
      v-for="article in articles"
      :key="article.id"
      :to="`/article/${article.id}`"
      class="block group"
    >
      <article 
       class="relative overflow-hidden rounded-lg p-6 cursor-pointer
              bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-md
              border border-white/10 hover:border-blue-500/50
              transition-all duration-300"
      >
       <!-- 发光效果 -->
       <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
       
        <h2 
         class="relative text-xl font-bold text-white mb-2 
                group-hover:text-blue-400 transition-colors"
        >
          {{ article.title }}
        </h2>
        
        <div class="flex items-center space-x-4 text-sm text-gray-400 mb-3">
          <span class="flex items-center">
            <i class="ri-calendar-line mr-1"></i>
            {{ article.date }}
          </span>
          <span class="flex items-center">
            <i class="ri-eye-line mr-1"></i>
            {{ article.views }} 阅读
          </span>
        </div>

        <p 
         class="relative text-gray-300 text-sm line-clamp-2
                group-hover:text-gray-200 transition-colors"
        >
          {{ article.description }}
        </p>
      </article>
    </RouterLink>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ArticleList'
}
</script> 