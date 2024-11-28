<script setup lang="ts">
import { computed } from 'vue'
import type { Article } from '@/types/article'

interface Props {
  articles: Article[]
}

const props = defineProps<Props>()

const timeGroupedArticles = computed(() => {
  const groups = new Map<string, Article[]>()
  
  props.articles.forEach(article => {
    const year = article.date.split('-')[0]
    if (!groups.has(year)) {
      groups.set(year, [])
    }
    groups.get(year)?.push(article)
  })
  
  return Array.from(groups.entries())
    .sort((a, b) => b[0].localeCompare(a[0]))
})
</script>

<template>
  <div class="space-y-8">
    <div 
      v-for="[year, articles] in timeGroupedArticles" 
      :key="year"
      class="card-border p-6 rounded-lg"
    >
      <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
        <span class="mr-3">{{ year }}</span>
        <div class="h-px flex-grow bg-white/10"></div>
      </h2>
      <div class="space-y-6">
        <div
          v-for="article in articles"
          :key="article.id"
          class="flex items-center space-x-4 group"
        >
          <div class="text-gray-400 w-24 text-sm">
            {{ article.date.split('-').slice(1).join('-') }}
          </div>
          <div class="flex-1">
            <a 
              href="#" 
              class="text-gray-200 group-hover:text-blue-400 transition-colors"
            >
              {{ article.title }}
            </a>
          </div>
          <div class="flex space-x-2">
            <span 
              v-for="tag in article.tags"
              :key="tag"
              class="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 