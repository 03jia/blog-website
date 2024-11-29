<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useArticleStore } from '@/client/stores/article'
import Card from '../components/ui/Card.vue'

const articleStore = useArticleStore()

// 统计数据
const stats = computed(() => [
  { 
    title: '文章总数', 
    value: articleStore.articles.length,
    icon: 'ri-article-line',
    color: 'blue'
  },
  { 
    title: '分类总数', 
    value: getUniqueCategories.value.length,
    icon: 'ri-folder-line',
    color: 'green'
  },
  { 
    title: '总访问量', 
    value: getTotalViews.value,
    icon: 'ri-eye-line',
    color: 'purple'
  },
  { 
    title: '总评论数', 
    value: getTotalComments.value,
    icon: 'ri-chat-1-line',
    color: 'orange'
  }
])

// 获取唯一分类列表
const getUniqueCategories = computed(() => {
  const categories = new Set(articleStore.articles.map(article => article.category))
  return Array.from(categories)
})

// 计算总访问量
const getTotalViews = computed(() => {
  return articleStore.articles.reduce((total, article) => total + article.views, 0)
})

// 计算总评论数
const getTotalComments = computed(() => {
  return articleStore.articles.reduce((total, article) => total + article.comments, 0)
})

// 最近文章列表
const recentArticles = computed(() => {
  return [...articleStore.articles]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5)
})

onMounted(async () => {
  if (articleStore.articles.length === 0) {
    await articleStore.fetchArticles()
  }
})
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
        仪表盘
      </h1>
      <div class="text-sm text-gray-500 dark:text-gray-400">
        最后更新时间: {{ new Date().toLocaleString() }}
      </div>
    </div>
    
    <!-- 统计卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
        v-for="item in stats"
        :key="item.title"
        class="relative overflow-hidden"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ item.title }}
            </p>
            <p class="mt-2 text-3xl font-semibold" :class="`text-${item.color}-500`">
              {{ item.value }}
            </p>
          </div>
          <div :class="`p-3 bg-${item.color}-500/10 rounded-lg`">
            <i :class="[item.icon, `text-2xl text-${item.color}-500`]" />
          </div>
        </div>
        <!-- 装饰背景 -->
        <div 
          :class="`absolute -right-4 -bottom-4 w-24 h-24 rounded-full 
                  bg-${item.color}-500/5 blur-xl pointer-events-none`"
        />
      </Card>
    </div>

    <!-- 最近文章 -->
    <Card title="最近文章">
      <div class="divide-y divide-gray-200 dark:divide-gray-700">
        <div 
          v-for="article in recentArticles" 
          :key="article.id"
          class="py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 px-4 -mx-4"
        >
          <div class="flex-1 min-w-0">
            <h3 class="text-sm font-medium text-gray-900 dark:text-white truncate">
              {{ article.title }}
            </h3>
            <div class="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-4">
              <span>{{ article.category }}</span>
              <span>{{ article.views }} 阅读</span>
              <span>{{ article.comments }} 评论</span>
            </div>
          </div>
          <div class="ml-4 flex-shrink-0">
            <span class="text-xs text-gray-500 dark:text-gray-400">
              {{ new Date(article.createdAt).toLocaleDateString() }}
            </span>
          </div>
        </div>
      </div>
    </Card>

    <!-- 分类统计 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="分类统计">
        <div class="space-y-4">
          <div 
            v-for="category in getUniqueCategories" 
            :key="category"
            class="flex items-center justify-between"
          >
            <span class="text-sm text-gray-600 dark:text-gray-300">{{ category }}</span>
            <span class="text-sm font-medium text-gray-900 dark:text-white">
              {{ articleStore.articles.filter(a => a.category === category).length }} 篇
            </span>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.card-gradient {
  @apply bg-gradient-to-br;
}
</style> 