<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useArticleStore } from '@/client/stores/article'
import { theme } from '@/shared/config/theme'
import ArticleCard from '@/client/components/blog/ArticleCard.vue'
import NavBar from '@/client/components/layout/ClientNavBar.vue'

const route = useRoute()
const articleStore = useArticleStore()

// 获取分类参数
const category = computed(() => route.query.category?.toString())

// 根据分类筛选文章
const filteredArticles = computed(() => {
  if (category.value) {
    return articleStore.articles.filter(
      article => article.category === category.value
    ).map((article, index) => ({
      ...article,
      cover: `/assets/images/test/test${(index % 5) + 1}.jpg`
    }))
  }
  return articleStore.articles
})
</script>

<template>
  <div :class="theme.archive.wrapper">
    <NavBar />
    
    <main :class="theme.archive.content.wrapper">
      <div :class="theme.archive.content.container">
        <!-- 分类标题 -->
        <div v-if="category" class="mb-8">
          <h1 class="flex items-center space-x-3 text-3xl font-bold">
            <i class="ri-folder-2-line text-blue-500"></i>
            <span class="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              {{ category }}
            </span>
          </h1>
          <p class="mt-2 flex items-center space-x-2 text-blue-500">
            <i class="ri-article-line"></i>
            <span>共 {{ filteredArticles.length }} 篇文章</span>
          </p>
        </div>

        <!-- 文章列表 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <template v-if="filteredArticles.length">
            <ArticleCard 
              v-for="article in filteredArticles"
              :key="article.id"
              :article="article"
            />
          </template>
          <div 
            v-else 
            class="col-span-full text-center py-12 bg-white/90 rounded-lg border border-gray-100/80"
          >
            <div class="text-gray-400 flex flex-col items-center">
              <i class="ri-inbox-2-line text-4xl mb-2"></i>
              <span>暂无文章</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ArticleCategoryList'
}
</script> 