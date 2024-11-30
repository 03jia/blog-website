<script setup lang="ts">
import type { Article } from '@/shared/types/article'
import { theme } from '@/shared/config/theme'
import { ref } from 'vue'

interface Props {
  article: Article
}

const props = defineProps<Props>()

// 获取随机图片
const getRandomImage = () => {
  const index = Math.floor(Math.random() * 12) + 1 // 假设有12张图片
  return `/src/shared/assets/images/covers/${index}.jpg`
}

const coverImage = ref(props.article.cover || getRandomImage())

// 处理图片加载失败
const handleImageError = () => {
  coverImage.value = '/src/shared/assets/images/default-cover.jpg'
}
</script>

<template>
  <RouterLink 
    :to="`/article/${article.id}`"
    class="block group"
  >
    <article :class="[theme.card.base, theme.card.hover]">
      <!-- 图片区域 -->
      <div :class="theme.articleCard.image.wrapper">
        <img 
          :src="coverImage"
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
        
        <!-- 元信息 -->
        <div :class="theme.articleCard.content.meta.wrapper">
          <div class="flex items-center space-x-3" :class="theme.articleCard.content.meta.text">
            <span class="flex items-center">
              <i class="ri-calendar-line mr-1.5" :class="theme.articleCard.content.meta.icon"></i>
              {{ article.createdAt }}
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
</template>

<script lang="ts">
export default {
  name: 'ArticleCard'
}
</script> 