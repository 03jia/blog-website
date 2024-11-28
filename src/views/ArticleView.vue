<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useArticleStore } from '@/stores/article'
import { loadArticleContent } from '@/utils/content-loader'
import NavBar from '../components/layout/NavBar.vue'
import { DEFAULT_BG_IMAGE } from '@/config/constants'

const route = useRoute()
const articleStore = useArticleStore()
const content = ref('')
const article = ref(articleStore.articles.find(a => a.id === Number(route.params.id)))
const bgImage = DEFAULT_BG_IMAGE

onMounted(async () => {
  try {
    if (article.value) {
      content.value = await loadArticleContent(article.value.id)
      console.log('Loaded content:', content.value) // 调试用
    }
  } catch (error) {
    console.error('Error loading article content:', error)
    content.value = '文章加载失败'
  }
})
</script>

<template>
  <div 
    class="min-h-screen bg-fixed bg-cover bg-center relative"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <!-- 背景遮罩 -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-900/95 backdrop-blur-sm"></div>
    
    <NavBar />
    
    <main class="relative z-10 max-w-4xl mx-auto px-4 py-24">
      <article v-if="article" class="card-border p-8 rounded-lg">
        <!-- 文章头部信息 -->
        <header class="mb-8">
          <h1 class="text-3xl font-bold text-white mb-4">
            {{ article.title }}
          </h1>
          <div class="flex items-center justify-between text-gray-400">
            <div class="flex items-center space-x-4">
              <time :datetime="article.date">{{ article.date }}</time>
              <span>{{ article.readTime }}</span>
            </div>
            <div class="flex space-x-2">
              <span 
                v-for="tag in article.tags" 
                :key="tag"
                class="px-2 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </header>

        <!-- 文章内容 -->
        <div 
          class="prose prose-invert prose-lg max-w-none"
          v-html="content"
        ></div>
      </article>
      <div v-else class="text-center text-gray-400">
        文章不存在
      </div>
    </main>
  </div>
</template>

<style scoped>
.card-border {
  @apply bg-white/10 backdrop-blur-sm;
}

:deep(.prose) {
  @apply text-gray-300;
}

:deep(.prose h1, .prose h2, .prose h3) {
  @apply text-white;
}

:deep(.prose strong) {
  @apply text-white;
}

:deep(.prose a) {
  @apply text-blue-400 no-underline hover:text-blue-300;
}

:deep(.prose code) {
  @apply bg-gray-800 px-1 py-0.5 rounded text-pink-400;
}

:deep(.prose pre) {
  @apply bg-gray-800 border border-gray-700;
}

:deep(.prose ul) {
  @apply list-disc list-inside;
}

:deep(.prose ol) {
  @apply list-decimal list-inside;
}

:deep(.prose li) {
  @apply my-2;
}

:deep(.prose img) {
  @apply rounded-lg shadow-lg mx-auto;
}
</style> 