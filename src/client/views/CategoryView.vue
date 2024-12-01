<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useArticleStore } from '@/client/stores/article'
import NavBar from '@/client/components/layout/ClientNavBar.vue'
import ArticleCard from '@/client/components/blog/ArticleCard.vue'

const route = useRoute()
const articleStore = useArticleStore()

onMounted(async () => {
  if (articleStore.articles.length === 0) {
    await articleStore.fetchArticles()
  }
})

const category = computed(() => decodeURIComponent(route.params.category as string))
const filteredArticles = computed(() => 
  articleStore.articles.filter(article => article.category === category.value)
)
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    
    <main class="max-w-4xl mx-auto px-4 py-8 pt-20">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-white mb-4">{{ category }}</h1>
        <p class="text-gray-300">共 {{ filteredArticles.length }} 篇文章</p>
      </div>

      <div class="space-y-6">
        <ArticleCard 
          v-for="article in filteredArticles"
          :key="article.id"
          :article="article"
        />
      </div>
    </main>
  </div>
</template> 