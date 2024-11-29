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
  <article>
    <!-- 文章头部信息 -->
    <header 
      class="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-lg 
             rounded-lg p-8 mb-8 border border-white/10
             hover:border-blue-500/30 transition-all duration-300"
    >
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
      class="prose prose-invert prose-lg max-w-none 
             bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-lg 
             rounded-lg p-8 article-content border border-white/10
             hover:border-blue-500/30 transition-all duration-300"
      v-html="content"
    ></div>
  </article>
</template>

<style scoped>
/* 基础文本样式 */
:deep(.prose) {
  @apply text-gray-300 leading-relaxed max-w-none;
  font-size: 16px;
  line-height: 1.75;
}

/* 标题样式 */
:deep(.prose h1) {
  @apply text-2xl font-bold text-white mt-8 mb-6 pb-2 border-b border-white/10;
}

:deep(.prose h2) {
  @apply text-xl font-bold text-white mt-6 mb-4 pb-2 border-b border-white/10;
}

:deep(.prose h3) {
  @apply text-lg font-bold text-white mt-4 mb-3;
}

:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  @apply font-bold text-white mt-3 mb-2;
}

/* 段落样式 */
:deep(.prose p) {
  @apply my-4 leading-7;
}

/* 列表样式 */
:deep(.prose ul),
:deep(.prose ol) {
  @apply my-4 pl-6 space-y-2;
}

:deep(.prose ul) {
  @apply list-disc;
  li::marker {
    @apply text-blue-400;
  }
}

:deep(.prose ol) {
  @apply list-decimal;
  li::marker {
    @apply text-purple-400;
  }
}

/* 加粗文本样式优化 */
:deep(.prose strong) {
  @apply text-white font-bold;
  font-weight: 600;
  color: #e2e8f0;
}

/* 代码块样式优化 */
:deep(.prose pre) {
  @apply my-6 p-4 rounded-lg bg-gray-900/90 relative;
  
  /* 复制按钮 */
  .copy-button {
    @apply absolute top-2 right-2 p-1 rounded;
    @apply bg-gray-800/50 text-gray-400;
    @apply opacity-0;
    @apply hover:bg-gray-700/50 hover:text-white;
    font-size: 0;  /* 隐藏可能的文本内容 */
    line-height: 1;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover .copy-button {
    @apply opacity-100;
  }

  /* 移除所有默认边框和背景 */
  &::before,
  &::after {
    display: none !important;
  }
}

/* 行内代码样式优化 */
:deep(.prose :not(pre) > code) {
  @apply px-1.5 py-0.5 rounded text-sm font-mono;
  @apply bg-gray-800/80 text-pink-400 whitespace-nowrap;
  font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', monospace;
  &::before,
  &::after {
    display: none !important;
    content: none !important;
  }
}

/* 全局移除代码元素的默认样式 */
:deep(.prose) {
  *:not(pre) > code::before,
  *:not(pre) > code::after,
  pre::before,
  pre::after {
    content: none !important;
  }
}

/* 代码高亮颜色 */
:deep(.prose .hljs) {
  @apply text-gray-300;

  &-comment,
  &-quote {
    @apply text-gray-500 italic;
  }

  &-keyword,
  &-selector-tag {
    @apply text-purple-400;
  }

  &-string,
  &-number,
  &-template-variable,
  &-variable {
    @apply text-green-400;
  }

  &-title,
  &-section,
  &-selector-id {
    @apply text-blue-400;
  }

  &-type,
  &-class {
    @apply text-yellow-400;
  }

  &-function {
    @apply text-blue-400;
  }

  &-symbol,
  &-bullet {
    @apply text-pink-400;
  }
}

/* 引用块样式 */
:deep(.prose blockquote) {
  @apply my-6 pl-4 border-l-4 border-blue-500/50 bg-white/5 py-2 rounded-r;
  p {
    @apply text-gray-400 italic m-0;
  }
}

/* 表格样式 */
:deep(.prose table) {
  @apply w-full my-6 text-sm;
  
  th, td {
    @apply px-4 py-2 border border-white/10;
  }
  
  thead {
    @apply bg-white/5;
    th {
      @apply font-bold text-white;
    }
  }
  
  tbody {
    tr:nth-child(even) {
      @apply bg-white/[0.02];
    }
  }
}

/* 图片样式 */
:deep(.prose img) {
  @apply max-w-full rounded-lg my-6 mx-auto
         border border-white/10 bg-white/5 p-1;
}

/* 水平分割线 */
:deep(.prose hr) {
  @apply my-8 border-t-2 border-white/10;
}

/* 链接样式 */
:deep(.prose a) {
  @apply text-blue-400 hover:text-blue-300 
         border-b border-blue-400/30 hover:border-blue-300
         transition-colors duration-200;
}

/* 选中文本样式 */
:deep(.prose ::selection) {
  @apply bg-blue-500/30 text-white;
}
</style> 