<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useArticleStore } from '@/stores/article'
import NavBar from '../components/layout/NavBar.vue'
import ArticleCard from '../components/blog/ArticleCard.vue'
import bgImage from '../assets/images/bg.jpg'

const route = useRoute()
const articleStore = useArticleStore()
const category = computed(() => route.params.category?.toString() || '全部')

// 根据分类筛选文章
const filteredArticles = computed(() => {
  if (category.value === '全部') return articleStore.articles
  return articleStore.articles.filter(article => article.category === category.value)
})
</script>

<template>
  <div class="min-h-screen bg-fixed bg-cover bg-center relative flex flex-col"
       :style="{ backgroundImage: `url(${bgImage})` }">
    <!-- 背景遮罩 -->
    <div class="fixed inset-0 bg-gradient-overlay"></div>
    
    <NavBar />

    <!-- 内容区域 -->
    <main class="flex-1 relative z-10">
      <div class="max-w-4xl mx-auto px-4 py-8 pt-20">
        <!-- 标题区域 -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-white mb-4">{{ category }}</h1>
          <p class="text-gray-300">共 {{ filteredArticles.length }} 篇文章</p>
        </div>

        <!-- 文章列表 -->
        <div class="space-y-6">
          <ArticleCard 
            v-for="article in filteredArticles"
            :key="article.id"
            :article="article"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.bg-gradient-overlay {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  backdrop-filter: blur(8px);
}
</style> 