<script setup lang="ts">
import { computed } from 'vue'
import { useArticleStore } from '@/client/stores/article'
import avatar from '/assets/images/avatar.png'
import { theme } from '@/shared/config/theme'

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
  <div :class="theme.sidebar.card.base">
    <!-- 头像和基本信息 -->
    <div class="relative">
      <div :class="theme.sidebar.card.header.gradient"></div>
      <div :class="theme.sidebar.profile.info.wrapper">
        <!-- 头像容器 -->
        <div :class="theme.sidebar.profile.avatar.wrapper">
          <img 
            :src="profile.avatar" 
            alt="avatar"
            :class="theme.sidebar.profile.avatar.image"
          >
        </div>

        <!-- 名字和描述 -->
        <h2 :class="theme.sidebar.profile.info.name">{{ profile.name }}</h2>
        <p :class="theme.sidebar.profile.info.description">{{ profile.description }}</p>
      </div>
    </div>

    <!-- 统计数据 -->
    <div :class="theme.sidebar.profile.stats.wrapper">
      <div 
        v-for="stat in stats" 
        :key="stat.label"
        class="text-center group"
      >
        <div :class="theme.sidebar.profile.stats.item.count">
          {{ stat.count }}
        </div>
        <div :class="theme.sidebar.profile.stats.item.label">
          <i :class="stat.icon"></i>
          <span>{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <!-- 社交链接 -->
    <div :class="theme.sidebar.profile.social.wrapper">
      <a 
        v-for="item in profile.social"
        :key="item.name"
        :href="item.link"
        target="_blank"
        class="group"
      >
        <div :class="theme.sidebar.profile.social.item.base">
          <i :class="[
            item.name === 'GitHub' ? 'ri-github-fill' : 'ri-mail-fill',
            theme.sidebar.profile.social.item.icon
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