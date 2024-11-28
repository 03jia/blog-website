<script setup lang="ts">
import { computed } from 'vue'
import { useArticleStore } from '@/stores/article'
import { RouterLink } from 'vue-router'

const articleStore = useArticleStore()

const categoryGroups = computed(() => {
  const groups = new Map<string, number>()
  
  articleStore.articles.forEach(article => {
    const category = article.category || '未分类'
    groups.set(category, (groups.get(category) || 0) + 1)
  })
  
  return Array.from(groups.entries())
    .sort((a, b) => b[1] - a[1])
})
</script>

<template>
  <div class="card-border rounded-lg overflow-hidden">
    <!-- 标题区域 -->
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
      <div class="relative p-6">
        <div class="flex items-center space-x-2">
          <!-- 分类图标 -->
          <svg class="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6C3 4.34315 4.34315 3 6 3H8C9.65685 3 11 4.34315 11 6V8C11 9.65685 9.65685 11 8 11H6C4.34315 11 3 9.65685 3 8V6Z" fill="currentColor"/>
            <path d="M13 6C13 4.34315 14.3431 3 16 3H18C19.6569 3 21 4.34315 21 6V8C21 9.65685 19.6569 11 18 11H16C14.3431 11 13 9.65685 13 8V6Z" fill="currentColor"/>
            <path d="M3 16C3 14.3431 4.34315 13 6 13H8C9.65685 13 11 14.3431 11 16V18C11 19.6569 9.65685 21 8 21H6C4.34315 21 3 19.6569 3 18V16Z" fill="currentColor"/>
            <path d="M13 16C13 14.3431 14.3431 13 16 13H18C19.6569 13 21 14.3431 21 16V18C21 19.6569 19.6569 21 18 21H16C14.3431 21 13 19.6569 13 18V16Z" fill="currentColor"/>
          </svg>
          <h3 class="text-lg font-bold text-white">分类</h3>
        </div>
      </div>
    </div>

    <!-- 分类列表 -->
    <div class="p-4 space-y-2 border-t border-white/10">
      <RouterLink
        v-for="[category, count] in categoryGroups"
        :key="category"
        :to="`/category/${category}`"
        class="flex items-center justify-between group px-4 py-2.5 rounded-lg hover:bg-white/5 transition-all duration-300"
      >
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-blue-400 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4C4 3.44772 4.44772 3 5 3H9.4C9.95228 3 10.4 3.44772 10.4 4V9.4C10.4 9.95228 9.95228 10.4 9.4 10.4H5C4.44772 10.4 4 9.95228 4 9.4V4Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-300 group-hover:text-white transition-colors">
            {{ category }}
          </span>
        </div>

        <span class="px-2 py-0.5 text-xs rounded-full bg-white/10 text-gray-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all">
          {{ count }}
        </span>
      </RouterLink>
    </div>
  </div>
</template> 