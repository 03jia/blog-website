<template>
  <div :class="theme.sidebar.card.base">
    <!-- 标题栏 -->
    <div class="relative">
      <div :class="theme.sidebar.card.header.gradient"></div>
      <div :class="theme.sidebar.card.header.wrapper">
        <h3 :class="theme.sidebar.card.header.title">
          <i class="ri-folder-2-line" :class="theme.sidebar.card.header.icon"></i>
          <span>分类</span>
        </h3>
      </div>
    </div>

    <!-- 分类列表 -->
    <div :class="theme.sidebar.card.content.wrapper">
      <RouterLink
        v-for="category in categories"
        :key="category.name"
        :to="`/articles?category=${category.name}`"
        :class="theme.sidebar.category.item.base"
      >
        <div class="flex items-center flex-1 min-w-0">
          <div :class="theme.sidebar.category.item.icon"></div>
          <span :class="theme.sidebar.category.item.text" class="truncate">
            {{ category.name }}
          </span>
        </div>
        <span :class="theme.sidebar.category.item.count">
          {{ category.count }}
        </span>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useArticleStore } from '@/client/stores/article'
import { theme } from '@/shared/config/theme'

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
/* 自定义滚动条 */
.divide-y {
  max-height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(59, 130, 246, 0.2) transparent;
}

.divide-y::-webkit-scrollbar {
  width: 4px;
}

.divide-y::-webkit-scrollbar-track {
  background: transparent;
}

.divide-y::-webkit-scrollbar-thumb {
  background-color: rgba(59, 130, 246, 0.2);
  border-radius: 2px;
}

.divide-y::-webkit-scrollbar-thumb:hover {
  background-color: rgba(59, 130, 246, 0.3);
}
</style> 