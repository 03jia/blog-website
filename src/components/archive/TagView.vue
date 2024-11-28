<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Article } from '@/types/article'

interface Props {
  articles: Article[]
}

const props = defineProps<Props>()
const selectedTag = ref<string | null>(null)

const tagGroupedArticles = computed(() => {
  const groups = new Map<string, Article[]>()
  
  props.articles.forEach(article => {
    article.tags.forEach(tag => {
      if (!groups.has(tag)) {
        groups.set(tag, [])
      }
      groups.get(tag)?.push(article)
    })
  })
  
  return Array.from(groups.entries())
    .sort((a, b) => b[1].length - a[1].length)
})

const filteredArticles = computed(() => {
  if (!selectedTag.value) return []
  return tagGroupedArticles.value.find(([tag]) => tag === selectedTag.value)?.[1] || []
})
</script>

<template>
  <div class="space-y-8">
    <!-- 标签云 -->
    <div class="card-border p-6 rounded-lg">
      <div class="flex flex-wrap gap-3">
        <button
          v-for="[tag, articles] in tagGroupedArticles"
          :key="tag"
          @click="selectedTag = selectedTag === tag ? null : tag"
          class="group inline-flex items-center px-3 py-1.5 rounded-full transition-colors"
          :class="[
            selectedTag === tag 
              ? 'bg-blue-500/20 text-blue-400' 
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          ]"
        >
          <span class="text-blue-400 text-sm mr-2">#</span>
          <span class="text-sm">{{ tag }}</span>
          <span 
            class="ml-2 px-1.5 py-0.5 text-xs rounded-full" 
            :class="[
              selectedTag === tag 
                ? 'bg-blue-500/20 text-blue-400' 
                : 'bg-white/10 text-gray-400'
            ]"
          >
            {{ articles.length }}
          </span>
        </button>
      </div>
    </div>

    <!-- 分割线 -->
    <div v-if="selectedTag" class="flex items-center gap-4">
      <span class="text-blue-400 text-lg">#{{ selectedTag }}</span>
      <div class="h-px flex-grow bg-white/10"></div>
    </div>

    <!-- 文章列表 -->
    <div v-if="selectedTag" class="space-y-4 animate-fadeIn">
      <div 
        v-for="article in filteredArticles"
        :key="article.id"
        class="card-border p-4 rounded-lg hover:bg-white/5 transition-all group"
      >
        <div class="flex items-center gap-6">
          <span class="text-gray-500 text-sm w-24">{{ article.date }}</span>
          <a 
            href="#" 
            class="text-gray-300 group-hover:text-blue-400 transition-colors flex-1"
          >
            {{ article.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 