<script setup lang="ts">
import { computed } from 'vue'
import { useArticleStore } from '@/stores/article'

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
  <div class="card-border rounded-lg p-6">
    <h3 class="text-lg font-bold text-white mb-4">标签云</h3>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="tag in allTags"
        :key="tag"
        @click="articleStore.toggleTag(tag)"
        class="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 transition-colors"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template> 