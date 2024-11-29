<script setup lang="ts">
import { computed } from 'vue'
import { useArticleStore } from '@/client/stores/article'
import { TagIcon } from '@heroicons/vue/24/outline'
import { theme } from '@/shared/config/theme'

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
  <div :class="theme.sidebar.card.base">
    <!-- 标题区域 -->
    <div class="relative">
      <div :class="theme.sidebar.card.header.gradient"></div>
      <div :class="theme.sidebar.card.header.wrapper">
        <div class="flex items-center space-x-2">
          <TagIcon class="w-5 h-5" :class="theme.sidebar.card.header.icon" />
          <h3 :class="theme.sidebar.card.header.title">标签云</h3>
        </div>
      </div>
    </div>

    <!-- 标签列表 -->
    <div :class="theme.sidebar.card.content.wrapper">
      <div :class="theme.sidebar.tags.wrapper">
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="articleStore.toggleTag(tag)"
          :class="theme.sidebar.tags.tag"
        >
          <TagIcon class="w-3 h-3 group-hover:rotate-12 transition-transform" />
          <span>{{ tag }}</span>
        </button>
      </div>
    </div>
  </div>
</template> 