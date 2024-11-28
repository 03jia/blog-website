<script setup lang="ts">
import { computed, ref } from 'vue'
import { useArticleStore } from '@/stores/article'
import NavBar from '../layout/NavBar.vue'

const articleStore = useArticleStore()
const viewMode = ref<'time' | 'category' | 'tag'>('time')

// 按时间分组
const timeGroupedArticles = computed(() => {
  const groups = new Map<string, typeof articleStore.articles.value>()
  
  articleStore.articles.value.forEach(article => {
    const year = article.date.split('-')[0]
    if (!groups.has(year)) {
      groups.set(year, [])
    }
    groups.get(year)?.push(article)
  })
  
  return Array.from(groups.entries()).sort((a, b) => b[0].localeCompare(a[0]))
})

// 按分类分组
const categoryGroupedArticles = computed(() => {
  const groups = new Map<string, typeof articleStore.articles.value>()
  
  articleStore.articles.value.forEach(article => {
    const category = article.category || '未分类'
    if (!groups.has(category)) {
      groups.set(category, [])
    }
    groups.get(category)?.push(article)
  })
  
  return Array.from(groups.entries()).sort((a, b) => a[0].localeCompare(b[0]))
})

// 按标签分组
const tagGroupedArticles = computed(() => {
  const groups = new Map<string, typeof articleStore.articles.value>()
  
  articleStore.articles.value.forEach(article => {
    article.tags.forEach(tag => {
      if (!groups.has(tag)) {
        groups.set(tag, [])
      }
      groups.get(tag)?.push(article)
    })
  })
  
  return Array.from(groups.entries()).sort((a, b) => a[0].localeCompare(b[0]))
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <NavBar />
    
    <main class="max-w-7xl mx-auto px-4 py-8">
      <!-- 视图切换按钮 -->
      <div class="flex space-x-4 mb-8">
        <button
          v-for="mode in [
            { key: 'time', text: '时间归档' },
            { key: 'category', text: '分类归档' },
            { key: 'tag', text: '标签归档' }
          ]"
          :key="mode.key"
          @click="viewMode = mode.key as 'time' | 'category' | 'tag'"
          :class="[
            'px-4 py-2 rounded-lg font-medium',
            viewMode === mode.key
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
          ]"
        >
          {{ mode.text }}
        </button>
      </div>

      <!-- 时间归档视图 -->
      <div v-if="viewMode === 'time'" class="space-y-12">
        <div v-for="[year, articles] in timeGroupedArticles" :key="year">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {{ year }}
          </h2>
          <div class="space-y-6">
            <div
              v-for="article in articles"
              :key="article.id"
              class="flex items-start space-x-4"
            >
              <div class="flex-shrink-0 w-24 text-gray-500 dark:text-gray-400">
                {{ article.date.split('-').slice(1).join('-') }}
              </div>
              <div class="flex-grow">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                  {{ article.title }}
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-300">
                  {{ article.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 分类归档视图 -->
      <div v-else-if="viewMode === 'category'" class="space-y-12">
        <div v-for="[category, articles] in categoryGroupedArticles" :key="category">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            {{ category }}
            <span class="ml-3 text-sm text-gray-500 dark:text-gray-400">
              ({{ articles.length }}篇)
            </span>
          </h2>
          <div class="space-y-6">
            <div
              v-for="article in articles"
              :key="article.id"
              class="flex items-start space-x-4"
            >
              <div class="flex-shrink-0 w-24 text-gray-500 dark:text-gray-400">
                {{ article.date }}
              </div>
              <div class="flex-grow">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                  {{ article.title }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 标签归档视图 -->
      <div v-else class="space-y-12">
        <div v-for="[tag, articles] in tagGroupedArticles" :key="tag">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            {{ tag }}
            <span class="ml-3 text-sm text-gray-500 dark:text-gray-400">
              ({{ articles.length }}篇)
            </span>
          </h2>
          <div class="space-y-6">
            <div
              v-for="article in articles"
              :key="article.id"
              class="flex items-start space-x-4"
            >
              <div class="flex-shrink-0 w-24 text-gray-500 dark:text-gray-400">
                {{ article.date }}
              </div>
              <div class="flex-grow">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                  {{ article.title }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template> 