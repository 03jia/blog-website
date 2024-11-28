<script setup lang="ts">
import { computed } from 'vue'
import { useArticleStore } from '@/stores/article'
import { TagIcon } from '@heroicons/vue/24/outline'

const articleStore = useArticleStore()

const allTags = computed(() => {
  const tags = new Set<string>()
  articleStore.articles.forEach(article => {
    article.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})
</script>

<template>
  <div class="card-border rounded-lg overflow-hidden">
    <!-- 标题区域 -->
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
      <div class="relative p-6">
        <div class="flex items-center space-x-2">
          <TagIcon class="w-5 h-5 text-green-400" />
          <h3 class="text-lg font-bold text-white">标签云</h3>
        </div>
      </div>
    </div>

    <!-- 标签列表 -->
    <div class="p-6 border-t border-white/10">
      <div class="flex flex-wrap gap-2">
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="articleStore.toggleTag(tag)"
          class="group flex items-center space-x-1 px-3 py-1.5 text-sm rounded-full 
                 bg-green-500/10 text-green-300 hover:bg-green-500/20 
                 transition-all duration-300 hover:scale-105"
        >
          <TagIcon class="w-3 h-3 group-hover:rotate-12 transition-transform" />
          <span>{{ tag }}</span>
        </button>
      </div>
    </div>
  </div>
</template> 