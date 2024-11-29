<script setup lang="ts">
import { computed } from 'vue'
import { useArticleStore } from '@/client/stores/article'
import avatar from '@/shared/assets/images/avatar.png'

const articleStore = useArticleStore()

const profile = {
  name: 'xiaoYu',
  avatar: avatar,
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
  <div class="card-border rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
    <!-- 头像和基本信息 -->
    <div class="relative">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
      
      <div class="relative p-6 flex flex-col items-center">
        <!-- 头像容器 -->
        <div class="relative">
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md"></div>
          <div class="relative p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
            <img 
              :src="profile.avatar" 
              alt="avatar"
              class="w-24 h-24 rounded-full object-cover ring-2 ring-white/20"
            >
          </div>
        </div>
        
        <!-- 名字和描述 -->
        <h2 class="text-2xl font-bold text-white mt-4 flex items-center space-x-2">
          <i class="ri-user-smile-line"></i>
          <span>{{ profile.name }}</span>
        </h2>
        <p class="text-gray-300 mt-2 flex items-center space-x-2">
          <i class="ri-code-box-line"></i>
          <span>{{ profile.description }}</span>
        </p>
      </div>
    </div>

    <!-- 统计数据 -->
    <div class="grid grid-cols-3 gap-4 p-6 border-t border-white/10">
      <div 
        v-for="stat in stats" 
        :key="stat.label"
        class="text-center group hover:transform hover:scale-105 transition-all duration-300"
      >
        <div class="text-2xl font-bold text-white group-hover:text-blue-400">
          {{ stat.count }}
        </div>
        <div class="text-sm text-gray-400 flex items-center justify-center space-x-1">
          <i :class="[
            stat.label === 'Article' ? 'ri-article-line' :
            stat.label === 'Category' ? 'ri-folder-2-line' :
            'ri-price-tag-3-line'
          ]"></i>
          <span>{{ stat.label }}</span>
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
        class="group"
      >
        <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                    transform transition-all duration-300 
                    group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-12">
          <i :class="[
            item.name === 'GitHub' ? 'ri-github-fill' : 'ri-mail-fill',
            'text-xl text-white/80 group-hover:text-white'
          ]"></i>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.card-border {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4));
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.card-border:hover {
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
}
</style> 