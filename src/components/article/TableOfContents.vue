<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface TocItem {
  id: string
  title: string
  level: number
}

const toc = ref<TocItem[]>([])
const activeId = ref('')
const readingProgress = ref(0)

// 解析文章内容，生成目录
const generateToc = () => {
  const article = document.querySelector('.article-content')
  if (!article) return

  const headings = article.querySelectorAll('h1, h2, h3')
  toc.value = Array.from(headings).map(heading => {
    // 确保每个标题都有 id
    if (!heading.id) {
      heading.id = heading.textContent?.toLowerCase().replace(/\s+/g, '-') || ''
    }
    return {
      id: heading.id,
      title: heading.textContent || '',
      level: Number(heading.tagName[1])
    }
  })
}

// 更新阅读进度和当前位置
const updateProgress = () => {
  const article = document.querySelector('.article-content')
  if (!article) return

  // 计算阅读进度
  const totalHeight = article.scrollHeight
  const viewportHeight = window.innerHeight
  const scrolled = window.scrollY + viewportHeight - article.offsetTop
  const progress = (scrolled / totalHeight) * 100
  readingProgress.value = Math.min(Math.max(progress, 0), 100)

  // 更新当前活动标题
  const headings = document.querySelectorAll('.article-content h1, .article-content h2, .article-content h3')
  for (let i = headings.length - 1; i >= 0; i--) {
    const heading = headings[i]
    const rect = heading.getBoundingClientRect()
    if (rect.top <= 100) {
      activeId.value = heading.id
      break
    }
  }
}

// 点击目录项滚动到对应位置
const scrollToHeading = (id: string) => {
  const heading = document.getElementById(id)
  if (heading) {
    heading.scrollIntoView({ behavior: 'smooth' })
    // 补偿导航栏高度
    window.scrollBy(0, -80)
  }
}

onMounted(() => {
  setTimeout(() => {
    generateToc()
    updateProgress()
    window.addEventListener('scroll', updateProgress)
  }, 300)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <div class="bg-black/30 backdrop-blur-sm rounded-lg">
    <!-- 目录标题和进度条 -->
    <div class="p-4 border-b border-gray-700/50">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-lg font-bold text-white">目录</h3>
        <span class="text-sm text-gray-400">{{ Math.round(readingProgress) }}%</span>
      </div>
      <div class="h-1 bg-gray-700/50 rounded-full overflow-hidden">
        <div
          class="h-full bg-blue-500 rounded-full transition-all duration-200"
          :style="{ width: `${readingProgress}%` }"
        ></div>
      </div>
    </div>
    
    <!-- 目录列表 -->
    <nav class="p-4 space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto">
      <a
        v-for="item in toc"
        :key="item.id"
        :href="`#${item.id}`"
        class="block py-1.5 text-sm transition-colors duration-200"
        :class="[
          activeId === item.id
            ? 'text-blue-400'
            : 'text-gray-300 hover:text-white',
          `pl-${(item.level - 1) * 4}`
        ]"
        @click.prevent="scrollToHeading(item.id)"
      >
        {{ item.title }}
      </a>
    </nav>
  </div>
</template>

<style scoped>
nav::-webkit-scrollbar {
  @apply w-1;
}

nav::-webkit-scrollbar-track {
  @apply bg-transparent rounded-full;
}

nav::-webkit-scrollbar-thumb {
  @apply bg-white/10 rounded-full hover:bg-white/20;
}

/* 添加滚动指示渐变 */
nav {
  mask-image: linear-gradient(to bottom, transparent, black 10px, black 90%, transparent);
}
</style> 