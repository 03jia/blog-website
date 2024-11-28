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

// 生成唯一的锚点ID
const generateAnchorId = (text: string) => {
  return `heading-${text.toLowerCase().replace(/\s+/g, '-')}-${Math.random().toString(36).slice(2, 8)}`
}

// 解析文章内容，生成目录
const generateToc = () => {
  const article = document.querySelector('.article-content')
  if (!article) return

  const headings = article.querySelectorAll('h1, h2, h3')
  toc.value = Array.from(headings).map(heading => {
    // 为每个标题生成唯一的锚点ID
    const id = generateAnchorId(heading.textContent || '')
    heading.id = id
    
    return {
      id,
      title: heading.textContent || '',
      level: Number(heading.tagName[1])
    }
  })
}

// 点击目录项滚动到对应位置
const scrollToHeading = (id: string) => {
  const heading = document.getElementById(id)
  if (heading) {
    const offset = heading.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }
}

// 更新阅读进度和当前位置
const updateProgress = () => {
  const article = document.querySelector('.article-content')
  if (!article) return

  // 计算阅读进度
  const totalHeight = (article as HTMLElement).scrollHeight
  const viewportHeight = window.innerHeight
  const scrolled = window.scrollY + viewportHeight - (article as HTMLElement).offsetTop
  const progress = (scrolled / totalHeight) * 100
  readingProgress.value = Math.min(Math.max(progress, 0), 100)

  // 更新当前活动标题
  const headings = Array.from(document.querySelectorAll('.article-content h1, .article-content h2, .article-content h3'))
  const currentHeading = headings
    .reverse()
    .find(heading => {
      const rect = heading.getBoundingClientRect()
      return rect.top <= 120 && rect.top > -50 // 调整检测范围
    })

  if (currentHeading) {
    activeId.value = currentHeading.id
  }
}

onMounted(() => {
  // 等待内容渲染完成后再生成目录
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
  <div class="sticky top-8">
    <div class="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all">
      <!-- 目录标题和进度条 -->
      <div class="p-4 border-b border-white/10">
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
          class="block py-2 px-3 text-sm rounded transition-all duration-200"
          :class="[
            activeId === item.id
              ? 'text-blue-400 bg-blue-500/10'
              : 'text-gray-300 hover:bg-white/5 hover:text-white',
            `ml-${(item.level - 1) * 4}`
          ]"
          @click.prevent="scrollToHeading(item.id)"
        >
          {{ item.title }}
        </a>
      </nav>
    </div>
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