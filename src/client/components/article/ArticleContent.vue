<script setup lang="ts">
import type { Article } from '@/shared/types/article'
import { ref, onMounted } from 'vue'

defineProps<{
  article: Article
  content: string
}>()

// 复制代码功能
const copyCode = (code: string, button: HTMLButtonElement) => {
  navigator.clipboard.writeText(code).then(() => {
    // 显示复制成功提示
    button.innerHTML = `
      <svg viewBox="0 0 24 24" width="14" height="14">
        <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
      </svg>
    `
    
    // 2秒后恢复原始图标
    setTimeout(() => {
      button.innerHTML = `
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/>
        </svg>
      `
    }, 2000)
  })
}

onMounted(() => {
  // 为代码块添加复制按钮
  const codeBlocks = document.querySelectorAll('.prose pre')
  codeBlocks.forEach(block => {
    const code = block.textContent || ''
    const button = document.createElement('button')
    button.className = 'copy-button'
    button.innerHTML = `
      <svg viewBox="0 0 24 24" width="14" height="14">
        <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/>
      </svg>
    `
    button.addEventListener('click', () => copyCode(code, button))
    block.appendChild(button)
  })
})
</script>

<template>
  <article class="article">
    <!-- 文章头部信息 -->
    <header 
      class="bg-white/95 rounded-lg p-8 mb-8 
             border border-gray-100/80
             hover:border-blue-200 transition-all duration-300
             shadow-sm"
    >
      <h1 class="text-3xl font-bold text-gray-800 mb-4">
        {{ article.title }}
      </h1>
      <div class="flex items-center justify-between text-gray-500">
        <div class="flex items-center space-x-4">
          <time :datetime="article.date">{{ article.date }}</time>
          <span>{{ article.readTime }}</span>
        </div>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in article.tags" 
            :key="tag"
            class="px-2 py-1 text-sm rounded-full bg-blue-50 text-blue-500"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </header>

    <!-- 文章内容 -->
    <div 
      class="prose max-w-none 
             bg-white/95
             rounded-lg p-8 article-content 
             border border-gray-100/80
             hover:border-blue-200 transition-all duration-300
             shadow-sm"
      v-html="content"
    ></div>
  </article>
</template>

<style scoped>
/* 基础文本样式 */
:deep(.prose) {
  @apply text-gray-600 leading-relaxed max-w-none;
  font-size: 16px;
  line-height: 1.75;
}

/* 标题样式 */
:deep(.prose h1) {
  @apply text-2xl font-bold text-gray-800 mt-8 mb-6 pb-2 border-b border-gray-200/80;
}

:deep(.prose h2) {
  @apply text-xl font-bold text-gray-800 mt-6 mb-4 pb-2 border-b border-gray-200/80;
}

:deep(.prose h3) {
  @apply text-lg font-bold text-gray-800 mt-4 mb-3;
}

:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  @apply font-bold text-gray-800 mt-3 mb-2;
}

/* 段落样式 */
:deep(.prose p) {
  @apply my-4 leading-7 text-gray-600;
}

/* 列表样式 */
:deep(.prose ul),
:deep(.prose ol) {
  @apply my-4 pl-6 space-y-2;
}

:deep(.prose ul) {
  @apply list-disc;
}

:deep(.prose ul li::marker) {
  @apply text-blue-500;
}

:deep(.prose ol) {
  @apply list-decimal;
}

:deep(.prose ol li::marker) {
  @apply text-blue-500;
}

/* 加粗文本样式 */
:deep(.prose strong) {
  @apply font-bold text-gray-900;
  @apply bg-yellow-50/50 px-1 rounded;
  @apply border-b-2 border-yellow-200/50;
}

/* 代码块样式优化 */
:deep(.prose pre) {
  @apply my-6 p-4 rounded-lg bg-gray-50 relative;
}

/* 行内代码样式优化 */
:deep(.prose :not(pre) > code) {
  @apply px-1.5 py-0.5 rounded text-sm font-mono;
  @apply bg-blue-50 text-blue-600;
  @apply border border-blue-100;
}

/* 确保反引号正确显示 */
:deep(.prose :not(pre) > code::before),
:deep(.prose :not(pre) > code::after) {
  content: '`';
  @apply text-blue-400;
}

/* 引用块样式 */
:deep(.prose blockquote) {
  @apply my-6 pl-4 border-l-4 border-blue-200 bg-blue-50/30 py-2 rounded-r;
}

:deep(.prose blockquote p) {
  @apply text-gray-600 italic m-0;
}

/* 表格样式 */
:deep(.prose table) {
  @apply w-full my-6 text-sm;
}

:deep(.prose table th),
:deep(.prose table td) {
  @apply px-4 py-2 border border-gray-200/80;
}

:deep(.prose table thead) {
  @apply bg-gray-50;
}

:deep(.prose table thead th) {
  @apply font-bold text-gray-800;
}

:deep(.prose table tbody tr:nth-child(even)) {
  @apply bg-gray-50/50;
}

/* 图片样式 */
:deep(.prose img) {
  @apply max-w-full rounded-lg my-6 mx-auto
         border border-gray-100/80 bg-white p-1;
}

/* 水平分割线 */
:deep(.prose hr) {
  @apply my-8 border-t border-gray-200/80;
}

/* 链接样式 */
:deep(.prose a) {
  @apply text-blue-500 hover:text-blue-600 
         border-b border-blue-200 hover:border-blue-300
         transition-colors duration-200;
}

/* 选中文本样式 */
:deep(.prose ::selection) {
  @apply bg-blue-100 text-blue-900;
}
</style> 