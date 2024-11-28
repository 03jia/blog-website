<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useArticleStore } from '@/stores/article'
import { loadArticleContent } from '@/utils/content-loader'
import ArticleCard from './ArticleCard.vue'

const articleStore = useArticleStore()
const articles = ref(articleStore.articles)
const currentContent = ref('')

async function loadArticle(id: number) {
  currentContent.value = await loadArticleContent(id)
}
</script>

<template>
  <div class="space-y-6">
    <ArticleCard 
      v-for="article in articles"
      :key="article.id"
      :article="article"
      @click="loadArticle(article.id)"
    />
  </div>
</template> 