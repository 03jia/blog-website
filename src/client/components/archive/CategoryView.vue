<script setup lang="ts">
import { computed } from 'vue'
import type { Article } from '@/shared/types/article'
import { theme } from '@/shared/config/theme'
import { FolderIcon, DocumentTextIcon } from '@heroicons/vue/24/outline'

interface Props {
  articles: Article[]
}

const props = defineProps<Props>()

// 按分类分组文章
const categories = computed(() => {
  const groups = new Map<string, Article[]>()
  props.articles.forEach(article => {
    if (!groups.has(article.category)) {
      groups.set(article.category, [])
    }
    groups.get(article.category)?.push(article)
  })
  return Array.from(groups.entries()).map(([name, articles]) => ({
    name,
    articles: articles.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  }))
})
</script>

<template>
  <div :class="theme.archive.category.wrapper">
    <div
      v-for="category in categories"
      :key="category.name"
      :class="theme.archive.category.card.wrapper"
    >
      <!-- 分类标题 -->
      <div :class="theme.archive.category.card.header.wrapper">
        <div :class="theme.archive.category.card.header.title.wrapper">
          <FolderIcon :class="theme.archive.category.card.header.title.icon" />
          <h3 :class="theme.archive.category.card.header.title.text">
            {{ category.name }}
          </h3>
        </div>
        <span :class="theme.archive.category.card.header.count">
          {{ category.articles.length }} 篇文章
        </span>
      </div>

      <!-- 文章列表 -->
      <div :class="theme.archive.category.card.list.wrapper">
        <RouterLink
          v-for="article in category.articles"
          :key="article.id"
          :to="`/article/${article.id}`"
          :class="theme.archive.category.card.list.item.wrapper"
        >
          <div :class="theme.archive.category.card.list.item.title.wrapper">
            <DocumentTextIcon :class="theme.archive.category.card.list.item.title.icon" />
            <span :class="theme.archive.category.card.list.item.title.text">
              {{ article.title }}
            </span>
          </div>
          <time 
            :datetime="article.createdAt"
            :class="theme.archive.category.card.list.item.date"
          >
            {{ article.createdAt }}
          </time>
        </RouterLink>
      </div>
    </div>
  </div>
</template> 