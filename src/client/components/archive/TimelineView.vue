<script setup lang="ts">
import { computed } from 'vue'
import type { Article } from '@/shared/types/article'
import { 
  CalendarIcon, 
  DocumentTextIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'

interface Props {
  articles: Article[]
}

const props = defineProps<Props>()

// 按年份和月份分组
const groupedArticles = computed(() => {
  const groups = new Map<string, Article[]>()
  
  props.articles
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .forEach(article => {
      const year = article.createdAt.split('-')[0]
      if (!groups.has(year)) {
        groups.set(year, [])
      }
      groups.get(year)?.push(article)
    })
  
  return Array.from(groups.entries())
})
</script>

<template>
  <div class="space-y-16">
    <div 
      v-for="[year, articles] in groupedArticles" 
      :key="year"
      class="relative"
    >
      <!-- 年份标题 -->
      <div class="flex items-center space-x-3 mb-8">
        <CalendarIcon class="w-6 h-6 text-blue-400" />
        <h2 class="text-2xl font-bold text-white">{{ year }}</h2>
      </div>
      
      <!-- 时间线 -->
      <div class="space-y-6">
        <RouterLink 
          v-for="article in articles" 
          :key="article.id"
          :to="`/article/${article.id}`"
          class="relative pl-8 block group"
        >
          <!-- 时间线装饰 -->
          <div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>
          <div class="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300"></div>
          
          <!-- 文章卡片 -->
          <div class="card-border rounded-lg p-4 transition-all duration-300 group-hover:translate-x-2">
            <!-- 标题和日期 -->
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center space-x-2">
                <DocumentTextIcon class="w-5 h-5 text-blue-400" />
                <h3 class="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                  {{ article.title }}
                </h3>
              </div>
              <div class="flex items-center space-x-2 text-sm text-gray-400">
                <ClockIcon class="w-4 h-4" />
                <time :datetime="article.createdAt">{{ article.createdAt }}</time>
              </div>
            </div>
            
            <!-- 描述 -->
            <p class="text-sm text-gray-300 mb-3 line-clamp-2">{{ article.description }}</p>
            
            <!-- 标签 -->
            <div class="flex items-center space-x-2">
              <TagIcon class="w-4 h-4 text-blue-400/70" />
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in article.tags" 
                  :key="tag"
                  class="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-border {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 时间线渐变动画 */
.group:hover .bg-gradient-to-b {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  opacity: 1;
}
</style>

<script lang="ts">
export default {
  name: 'TimelineView'
}
</script> 