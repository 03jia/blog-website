<script setup lang="ts">
import { computed } from 'vue'
import type { Article } from '@/types/article'
import { FolderIcon, ArrowRightIcon, DocumentTextIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'

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
  <div class="space-y-8">
    <RouterLink
      v-for="[category, articles] in categoryGroupedArticles"
      :key="category"
      :to="`/category/${category}`"
      class="block card-border rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300"
    >
      <!-- 分类标题 -->
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:opacity-75 transition-opacity"></div>
        <div class="relative p-4 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <FolderIcon class="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
            <h2 class="text-lg font-bold text-white">{{ category }}</h2>
          </div>
          <span class="px-2.5 py-1 text-sm bg-white/10 text-gray-300 rounded-full">
            {{ articles.length }} 篇
          </span>
        </div>
      </div>

      <!-- 文章列表 -->
      <div class="divide-y divide-white/10">
        <div
          v-for="article in articles.slice(0, 3)"
          :key="article.id"
          class="flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
        >
          <div class="flex items-center space-x-2">
            <DocumentTextIcon class="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
            <h3 class="text-gray-300 group-hover:text-blue-400 transition-colors">
              {{ article.title }}
            </h3>
          </div>
          <span class="text-sm text-gray-500">{{ article.date }}</span>
        </div>

        <!-- 查看更多提示 -->
        <div class="p-4 flex items-center justify-between text-sm text-gray-400 group-hover:text-blue-400 transition-colors">
          <span>查看此分类的所有文章</span>
          <ArrowRightIcon class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      <!-- 激活条 -->
      <div class="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </RouterLink>
  </div>
</template>

<style scoped>
.card-border {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

/* 添加鼠标悬停时的提示效果 */
.card-border::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(120deg, #3b82f6, #8b5cf6);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-border:hover::after {
  opacity: 1;
}
</style> 