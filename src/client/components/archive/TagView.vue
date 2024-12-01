<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Article } from '@/shared/types/article'
import { theme } from '@/client/config/theme'

interface Props {
  articles: Article[]
}

const props = defineProps<Props>()
const selectedTag = ref('')

// 获取所有标签
const tags = computed(() => {
  const tagSet = new Set<string>()
  props.articles.forEach(article => {
    article.tags.forEach(tag => tagSet.add(tag))
  })
  return Array.from(tagSet)
})

// 按选中的标签筛选文章
const filteredArticles = computed(() => {
  if (!selectedTag.value) return []
  return props.articles
    .filter(article => article.tags.includes(selectedTag.value))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
})

const selectTag = (tag: string) => {
  selectedTag.value = tag === selectedTag.value ? '' : tag
}
</script>

<template>
  <div :class="theme.archive.tags.wrapper">
    <!-- 标签选择器 -->
    <div :class="theme.archive.tags.header.wrapper">
      <button
        v-for="tag in tags"
        :key="tag"
        :class="[
          theme.archive.tags.header.tag,
          selectedTag === tag ? theme.archive.tags.header.active : ''
        ]"
        @click="selectTag(tag)"
      >
        {{ tag }}
      </button>
    </div>

    <!-- 文章列表 -->
    <div v-if="selectedTag" :class="theme.archive.tags.content.wrapper">
      <RouterLink
        v-for="article in filteredArticles"
        :key="article.id"
        :to="`/article/${encodeURIComponent(article.title)}`"
        class="group"
        :class="theme.archive.tags.content.article.wrapper"
      >
        <h3 :class="theme.archive.tags.content.article.title">
          {{ article.title }}
        </h3>
        <div :class="theme.archive.tags.content.article.meta">
          <time :datetime="article.createdAt">{{ article.createdAt }}</time>
          <span class="flex items-center">
            <i class="ri-eye-line mr-1.5 text-blue-400"></i>
            {{ article.views }} 阅读
          </span>
        </div>
      </RouterLink>
    </div>
  </div>
</template> 