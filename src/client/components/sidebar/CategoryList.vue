<template>
  <div class="card-border rounded-xl overflow-hidden">
    <!-- 标题栏 -->
    <div class="p-4 border-b border-white/10 flex items-center justify-between">
      <h3 class="text-lg font-bold text-white flex items-center space-x-2">
        <i class="ri-folder-2-line text-blue-400"></i>
        <span>分类</span>
      </h3>
    </div>

    <!-- 分类列表 -->
    <div class="divide-y divide-white/5">
      <RouterLink
        v-for="category in categories"
        :key="category.name"
        :to="`/archive?tab=category&name=${category.name}`"
        class="flex items-center justify-between p-4 hover:bg-white/5 group"
      >
        <div class="flex items-center space-x-3">
          <div class="w-2 h-2 rounded-full bg-blue-400"></div>
          <span class="text-gray-300 group-hover:text-white">
            {{ category.name }}
          </span>
        </div>
        
        <!-- 文章数量标签 -->
        <span class="px-2 py-0.5 text-sm rounded-full bg-white/5 text-gray-400 group-hover:bg-blue-500/10 group-hover:text-blue-400">
          {{ category.count }}
        </span>
      </RouterLink>
    </div>

    <!-- 空状态 -->
    <div 
      v-if="categories.length === 0" 
      class="p-4 text-center text-gray-400"
    >
      暂无分类
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useArticleStore } from '@/client/stores/article'

const articleStore = useArticleStore()

// 计算分类及其文章数量
const categories = computed(() => {
  const categoryMap = new Map()
  
  articleStore.articles.forEach(article => {
    const count = categoryMap.get(article.category) || 0
    categoryMap.set(article.category, count + 1)
  })
  
  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    count
  })).sort((a, b) => b.count - a.count)
})
</script>

<style scoped>
.card-border {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}

/* 美化滚动条 */
.divide-y {
  max-height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
}

.divide-y::-webkit-scrollbar {
  width: 4px;
}

.divide-y::-webkit-scrollbar-track {
  background: transparent;
}

.divide-y::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.divide-y::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style> 