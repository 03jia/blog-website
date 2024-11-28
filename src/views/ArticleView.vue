<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useArticleStore } from '@/stores/article'
import { loadArticleContent } from '@/utils/content-loader'
import NavBar from '../components/layout/NavBar.vue'
import bgImage from '../assets/images/bg.jpg'

const route = useRoute()
const articleStore = useArticleStore()
const content = ref('')
const article = ref(articleStore.articles.find(a => a.id === Number(route.params.id)))

onMounted(async () => {
  try {
    if (article.value) {
      content.value = await loadArticleContent(article.value.id)
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
    <div class="fixed inset-0 bg-gradient-overlay"></div>
    
    <!-- 导航栏 -->
    <NavBar />
    
    <!-- 内容区域 - 使用绝对定位并设置具体的 top 值 -->
    <main class="absolute inset-x-0 top-16 bottom-0 overflow-y-auto z-10">
      <div class="container mx-auto px-4 py-8">
        <article v-if="article" class="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
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
              <div class="flex flex-wrap gap-2">
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
      </div>
    </main>
  </div>
</template>

<style scoped>
.bg-gradient-overlay {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  backdrop-filter: blur(8px);
}

/* 调整滚动条样式 */
main::-webkit-scrollbar {
  @apply w-2;
}

main::-webkit-scrollbar-track {
  @apply bg-transparent;
}

main::-webkit-scrollbar-thumb {
  @apply bg-white/10 rounded-full hover:bg-white/20;
}

/* 文章内容样式 */
:deep(.prose) {
  @apply text-gray-300;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  @apply text-white mt-8 mb-4;
}

:deep(.prose a) {
  @apply text-blue-400 hover:text-blue-300;
}

:deep(.prose strong) {
  @apply text-white;
}

:deep(.prose ul) {
  @apply list-disc list-inside my-4;
}

:deep(.prose ol) {
  @apply list-decimal list-inside my-4;
}

:deep(.prose li) {
  @apply my-2;
}

:deep(.prose img) {
  @apply rounded-lg shadow-lg mx-auto;
}

:deep(.prose pre) {
  @apply bg-gray-800/50 border border-gray-700/50 p-4 rounded-lg my-4;
}

:deep(.prose code) {
  @apply bg-gray-800/50 px-1.5 py-0.5 rounded text-blue-300;
}

:deep(.prose blockquote) {
  @apply border-l-4 border-blue-500/50 bg-white/5 px-4 py-2 my-4;
}
</style> 