<script setup lang="ts">
import { computed } from 'vue'
import type { Article } from '@/types/article'

interface Props {
  articles: Article[]
}

const props = defineProps<Props>()

const categoryGroupedArticles = computed(() => {
  const groups = new Map<string, Article[]>()
  
  props.articles.forEach(article => {
    const category = article.category || '未分类'
    if (!groups.has(category)) {
      groups.set(category, [])
    }
    groups.get(category)?.push(article)
  })
  
  return Array.from(groups.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div
      v-for="[category, articles] in categoryGroupedArticles"
      :key="category"
      class="card-border p-6 rounded-lg"
    >
      <h2 class="text-xl font-bold text-white mb-4 flex items-center justify-between">
        <span>{{ category }}</span>
        <span class="text-sm text-gray-400 bg-white/10 px-2 py-1 rounded-full">
          {{ articles.length }} 篇
        </span>
      </h2>
      <ul class="space-y-3">
        <li v-for="article in articles" :key="article.id" class="group">
          <a 
            href="#" 
            class="text-gray-300 group-hover:text-blue-400 transition-colors text-sm flex items-center"
          >
            <span class="w-24 text-gray-500 text-xs">{{ article.date }}</span>
            <span>{{ article.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template> 