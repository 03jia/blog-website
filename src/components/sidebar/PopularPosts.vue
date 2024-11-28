<script setup lang="ts">
import { computed } from 'vue'
import { useArticleStore } from '@/stores/article'

const articleStore = useArticleStore()

const popularArticles = computed(() => {
  return articleStore.articles.slice(0, 5) // 假设前5篇是最受欢迎的
})
</script>

<template>
  <div class="card-border rounded-lg p-6">
    <h3 class="text-lg font-bold text-white mb-4">热门文章</h3>
    <div class="space-y-4">
      <a
        v-for="article in popularArticles"
        :key="article.id"
        href="#"
        class="block hover:bg-white/5 dark:hover:bg-gray-700/20 p-2 rounded transition-colors"
      >
        <h4 class="text-gray-200 font-medium">
          {{ article.title }}
        </h4>
        <p class="text-sm text-gray-400 mt-1">
          {{ article.date }}
        </p>
      </a>
    </div>
  </div>
</template> 