<script setup lang="ts">
import { computed } from 'vue'
import type { Article } from '@/types/article'

interface Props {
  articles: Article[]
}

const props = defineProps<Props>()

// 按年份和月份分组
const groupedArticles = computed(() => {
  const groups = new Map<string, Article[]>()
  
  props.articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .forEach(article => {
      const year = article.date.split('-')[0]
      if (!groups.has(year)) {
        groups.set(year, [])
      }
      groups.get(year)?.push(article)
    })
  
  return Array.from(groups.entries())
})
</script>

<template>
  <div class="space-y-12">
    <div 
      v-for="[year, articles] in groupedArticles" 
      :key="year"
      class="relative"
    >
      <!-- 年份标题 -->
      <h2 class="text-2xl font-bold text-white mb-6">{{ year }}</h2>
      
      <!-- 时间线 -->
      <div class="space-y-8">
        <div 
          v-for="article in articles" 
          :key="article.id"
          class="relative pl-8 group"
        >
          <!-- 时间线装饰 -->
          <div class="absolute left-0 top-0 bottom-0 w-px bg-white/20"></div>
          <div class="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors"></div>
          
          <!-- 文章卡片 -->
          <router-link 
            :to="`/article/${article.id}`"
            class="block bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg p-4 transition-all duration-300"
          >
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                {{ article.title }}
              </h3>
              <time class="text-sm text-gray-400">{{ article.date }}</time>
            </div>
            
            <p class="text-sm text-gray-300 mb-3">{{ article.description }}</p>
            
            <div class="flex items-center space-x-2">
              <span 
                v-for="tag in article.tags" 
                :key="tag"
                class="px-2 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-400"
              >
                {{ tag }}
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group:hover .bg-white\/5 {
  transform: translateX(4px);
}
</style> 