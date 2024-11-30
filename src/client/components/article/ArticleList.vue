<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useArticleStore } from '@/client/stores/article'
import { theme } from '@/shared/config/theme'
import ArticleCard from '../blog/ArticleCard.vue'

const route = useRoute()
const articleStore = useArticleStore()

// 获取分类参数
const category = computed(() => route.query.category?.toString())

// 根据分类筛选文章
const filteredArticles = computed(() => {
  if (category.value) {
    return articleStore.visibleArticles.filter(
      article => article.category === category.value
    )
  }
  return articleStore.visibleArticles
})
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    
    <main class="max-w-4xl mx-auto px-4 py-8 pt-20">
      <!-- 分类标题 -->
      <div v-if="category" class="mb-8">
        <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
          {{ category }}
        </h1>
        <p class="mt-2 text-gray-600">
          共 {{ filteredArticles.length }} 篇文章
        </p>
      </div>

      <!-- 文章列表 -->
      <div :class="theme.articleList.content.wrapper">
        <template v-if="filteredArticles.length">
          <ArticleCard 
            v-for="article in filteredArticles"
            :key="article.id"
            :article="article"
          />
        </template>
        <div v-else :class="theme.articleList.content.empty">
          暂无文章
        </div>
      </div>
    </main>
  </div>
</template> 