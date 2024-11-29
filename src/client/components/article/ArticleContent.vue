<script setup lang="ts">
import type { Article } from '@/shared/types/article'

defineProps<{
  article: Article
  content: string
}>()
</script>

<template>
  <article>
    <!-- 文章头部信息 -->
    <header class="bg-white/5 backdrop-blur-sm rounded-lg p-8 mb-8 border border-white/10 hover:bg-white/10 transition-all">
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
      class="prose prose-invert prose-lg max-w-none bg-white/5 backdrop-blur-sm rounded-lg p-8 article-content border border-white/10 hover:bg-white/10 transition-all"
      v-html="content"
    ></div>
  </article>
</template>

<style scoped>
:deep(.prose) {
  @apply text-gray-300;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  @apply text-white mt-8 mb-4 scroll-mt-24 relative;
  scroll-margin-top: 6rem;
}

/* 标题锚点样式 */
:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3) {
  @apply pl-6;
  
  &::before {
    content: '#';
    @apply absolute left-0 text-blue-400 opacity-0 transition-opacity;
  }
  
  &:hover::before {
    @apply opacity-100;
  }
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