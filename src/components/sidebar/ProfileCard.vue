<script setup lang="ts">
import { computed } from 'vue'
import { useArticleStore } from '@/stores/article'

const articleStore = useArticleStore()

const profile = {
  name: 'xiaoYu',
  avatar: '/cat-avatar.jpg', // 使用戴眼镜的猫咪头像
  description: 'A computer enthusiast',
  social: [
    { name: 'GitHub', link: 'https://github.com', icon: 'i-carbon-logo-github' },
    { name: 'Email', link: 'mailto:your@email.com', icon: 'i-carbon-email' }
  ]
}

// 计算统计数据
const stats = computed(() => {
  const articles = articleStore.articles
  const categories = new Set(articles.map(article => article.category)).size
  const tags = new Set(articles.flatMap(article => article.tags)).size
  
  return [
    { label: 'Article', count: articles.length },
    { label: 'Category', count: categories },
    { label: 'Tags', count: tags }
  ]
})
</script>

<template>
  <div class="card-border rounded-lg overflow-hidden">
    <!-- 头像和基本信息 -->
    <div class="relative">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20"></div>
      
      <div class="relative p-6 flex flex-col items-center">
        <!-- 头像 -->
        <img 
          :src="profile.avatar" 
          alt="avatar"
          class="w-24 h-24 rounded-full border-4 border-white/20 shadow-lg"
        >
        
        <!-- 名字和描述 -->
        <h2 class="text-2xl font-bold text-white mt-4">
          {{ profile.name }}
        </h2>
        <p class="text-gray-300 mt-2">
          {{ profile.description }}
        </p>
      </div>
    </div>

    <!-- 统计数据 -->
    <div class="grid grid-cols-3 gap-4 p-6 border-t border-white/10">
      <div 
        v-for="stat in stats" 
        :key="stat.label"
        class="text-center"
      >
        <div class="text-2xl font-bold text-white">
          {{ stat.count }}
        </div>
        <div class="text-sm text-gray-400">
          {{ stat.label }}
        </div>
      </div>
    </div>

    <!-- 社交链接 -->
    <div class="px-6 pb-6 flex justify-center space-x-4">
      <a 
        v-for="item in profile.social"
        :key="item.name"
        :href="item.link"
        target="_blank"
        class="text-gray-400 hover:text-white transition-colors"
      >
        <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
          <i :class="item.icon" class="text-xl"></i>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
/* 可以添加一些微妙的动画效果 */
.card-border img {
  transition: transform 0.3s ease;
}

.card-border:hover img {
  transform: scale(1.05);
}
</style> 