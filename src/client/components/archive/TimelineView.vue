<script setup lang="ts">
import { computed } from 'vue'
import type { Article } from '@/shared/types/article'
import { 
  CalendarIcon, 
  DocumentTextIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
import { theme } from '@/shared/config/theme'

interface Props {
  articles: Article[]
}

const props = defineProps<Props>()

// 按年份分组
const groupedArticles = computed(() => {
  const groups = new Map<string, Article[]>()
  
  if (!props.articles) return []

  props.articles
    .filter(article => article && article.createdAt)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .forEach(article => {
      const year = new Date(article.createdAt).getFullYear().toString()
      if (!groups.has(year)) {
        groups.set(year, [])
      }
      groups.get(year)?.push(article)
    })
  
  return Array.from(groups.entries())
})
</script>

<template>
  <div :class="theme.archive.timeline.wrapper">
    <div 
      v-for="[year, articles] in groupedArticles" 
      :key="year"
      :class="theme.archive.timeline.yearSection.wrapper"
    >
      <!-- 年份标题 -->
      <div :class="theme.archive.timeline.yearSection.header.wrapper">
        <CalendarIcon :class="theme.archive.timeline.yearSection.header.icon" />
        <h2 :class="theme.archive.timeline.yearSection.header.title">
          {{ year }}
        </h2>
      </div>
      
      <!-- 文章列表 -->
      <div :class="theme.archive.timeline.yearSection.content">
        <RouterLink 
          v-for="article in articles" 
          :key="article.id"
          :to="`/article/${article.id}`"
          :class="theme.archive.timeline.article.wrapper"
        >
          <!-- 时间线装饰 -->
          <div :class="theme.archive.timeline.article.line.wrapper"></div>
          <div :class="theme.archive.timeline.article.line.dot"></div>
          
          <!-- 文章卡片 -->
          <div :class="theme.archive.timeline.article.card.wrapper">
            <!-- 标题和日期 -->
            <div :class="theme.archive.timeline.article.card.header.wrapper">
              <div :class="theme.archive.timeline.article.card.header.title.wrapper">
                <DocumentTextIcon :class="theme.archive.timeline.article.card.header.title.icon" />
                <h3 :class="theme.archive.timeline.article.card.header.title.text">
                  {{ article.title }}
                </h3>
              </div>
              <div :class="theme.archive.timeline.article.card.header.date.wrapper">
                <ClockIcon :class="theme.archive.timeline.article.card.header.date.icon" />
                <time :datetime="article.createdAt">{{ article.createdAt }}</time>
              </div>
            </div>
            
            <!-- 描述 -->
            <p :class="theme.archive.timeline.article.card.description">
              {{ article.description }}
            </p>
            
            <!-- 标签 -->
            <div :class="theme.archive.timeline.article.card.tags.wrapper">
              <TagIcon :class="theme.archive.timeline.article.card.tags.icon" />
              <div :class="theme.archive.timeline.article.card.tags.list">
                <span 
                  v-for="tag in article.tags" 
                  :key="tag"
                  :class="theme.archive.timeline.article.card.tags.tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

<script lang="ts">
export default {
  name: 'TimelineView'
}
</script> 