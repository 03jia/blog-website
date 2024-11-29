<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useArticleStore } from '@/client/stores/article'
import type { Article } from '@/shared/types/article'
import { theme } from '@/shared/config/theme'

const articleStore = useArticleStore()
const articles = computed(() => articleStore.visibleArticles)

// 处理图片加载失败
const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/src/shared/assets/images/default-cover.jpg'
}

onMounted(async () => {
  if (articleStore.articles.length === 0) {
    await articleStore.fetchArticles()
  }
})
</script>

<template>
  <div class="grid grid-cols-2 gap-6">
    <RouterLink
      v-for="(article, index) in articles"
      :key="article.id"
      :to="`/article/${article.id}`"
      class="block group"
    >
      <article :class="[theme.card.base, theme.card.hover, 'cursor-pointer']">
        <!-- 图片区域 -->
        <div :class="theme.articleCard.image.wrapper">
          <img 
            :src="`/src/shared/assets/images/test/test${(index % 5) + 1}.jpg`"
            :alt="article.title"
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            @error="handleImageError"
          />
          <div :class="theme.articleCard.image.overlay"></div>
        </div>

        <!-- 内容区域 -->
        <div :class="theme.articleCard.content.wrapper">
          <h2 :class="theme.articleCard.content.title">
            {{ article.title }}
          </h2>
          
          <p :class="theme.articleCard.content.description">
            {{ article.description }}
          </p>
          
          <div :class="theme.articleCard.content.meta.wrapper">
            <div class="flex items-center space-x-4" :class="theme.articleCard.content.meta.text">
              <span class="flex items-center">
                <i class="ri-calendar-line mr-1.5" :class="theme.articleCard.content.meta.icon"></i>
                {{ article.date }}
              </span>
              <span class="flex items-center">
                <i class="ri-eye-line mr-1.5" :class="theme.articleCard.content.meta.icon"></i>
                {{ article.views }} 阅读
              </span>
            </div>
            
            <!-- 标签 -->
            <div :class="theme.articleCard.content.tags.wrapper">
              <span 
                v-for="tag in article.tags" 
                :key="tag"
                :class="theme.articleCard.content.tags.tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </article>
    </RouterLink>
  </div>
</template>

<style scoped>
img {
  will-change: transform;
  backface-visibility: hidden;
}
</style>

<script lang="ts">
export default {
  name: 'ArticleList'
}
</script> 