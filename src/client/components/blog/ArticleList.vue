<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useArticleStore } from '@/client/stores/article'
import ArticleCard from './ArticleCard.vue'
import type { Article } from '@/shared/types/article'

const articleStore = useArticleStore()
const articles = computed(() => articleStore.visibleArticles)

onMounted(async () => {
  if (articleStore.articles.length === 0) {
    await articleStore.loadArticles()
    if (articleStore.articles.length === 0) {
      await articleStore.initializeArticles()
    }
  }
})
</script>

<template>
  <div class="space-y-6">
    <div v-if="articles.length === 0" class="text-center text-gray-400">
      暂无文章
    </div>
    <ArticleCard 
      v-else
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ArticleList'
}
</script> 