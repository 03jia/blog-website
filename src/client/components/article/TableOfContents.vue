<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  ListBulletIcon,
  ChevronRightIcon,
  BookOpenIcon,
  ArrowUpCircleIcon,
  BoltIcon
} from '@heroicons/vue/24/outline'

const tocItems = ref<{ id: string; text: string; level: number }[]>([])
const activeId = ref('')
const progress = ref(0)

// 生成目录
const generateToc = () => {
  const article = document.querySelector('.article-content')
  if (!article) return

  // 只选择文章内容中的标题
  const headings = article.querySelectorAll('.prose h1, .prose h2, .prose h3')
  tocItems.value = Array.from(headings).map((heading, index) => {
    // 使用索引生成唯一ID
    const id = `toc-heading-${index}`
    heading.id = id
    
    // 移除所有 # 符号并清理空格
    const text = heading.textContent?.replace(/#/g, '').trim() || ''
    
    return {
      id,
      text,
      level: Number(heading.tagName[1])
    }
  })
}

// 滚动到指定标题
const scrollToHeading = (id: string) => {
  const heading = document.querySelector(`#${id}`)
  if (heading) {
    const navHeight = 80 // 导航栏高度
    const offset = 24 // 额外偏移量
    
    // 计算目标滚动位置
    const elementPosition = (heading as HTMLElement).getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navHeight - offset

    // 设置活动标题
    activeId.value = id

    // 平滑滚动到目标位置
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// 计算阅读进度
const calculateProgress = () => {
  const article = document.querySelector('.article-content')
  if (!article) return 0
  
  const contentHeight = (article as HTMLElement).clientHeight
  const windowHeight = window.innerHeight
  const scrollTop = window.pageYOffset
  const articleTop = (article as HTMLElement).offsetTop
  
  // 考虑窗口高度的阅读进度计算
  const readableHeight = contentHeight - windowHeight
  const currentProgress = (scrollTop - articleTop + windowHeight) / contentHeight * 100
  
  return Math.min(Math.max(currentProgress, 0), 100)
}

// 更新当前阅读位置和进度
const updateActiveHeading = () => {
  const navHeight = 80 // 导航栏高度
  const scrollPosition = window.pageYOffset
  
  // 更新阅读进度
  progress.value = calculateProgress()

  // 遍历所有标题，找到当前应该高亮的标题
  for (let i = 0; i < tocItems.value.length; i++) {
    const heading = document.querySelector(`#${tocItems.value[i].id}`)
    if (heading && heading instanceof HTMLElement) {
      const headingTop = heading.getBoundingClientRect().top + window.pageYOffset
      const headingBottom = headingTop + heading.offsetHeight
      
      // 判断当前滚动位置是否在这个标题的区域内
      if (scrollPosition + navHeight + 24 >= headingTop && 
          (i === tocItems.value.length - 1 || 
           scrollPosition + navHeight + 24 < headingBottom)) {
        activeId.value = tocItems.value[i].id
        break
      }
    }
  }

  // 如果滚动到顶部，高亮第一个标题
  if (scrollPosition < navHeight && tocItems.value.length > 0) {
    activeId.value = tocItems.value[0].id
  }
}

// 使用防抖优化滚动事件处理
let scrollTimer: number | null = null
const handleScroll = () => {
  if (scrollTimer) window.clearTimeout(scrollTimer)
  scrollTimer = window.setTimeout(updateActiveHeading, 100)
}

// 返回顶部
const scrollToTop = () => {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth' 
  })
  
  // 如果有标题，设置第一个为活动标题
  if (tocItems.value.length > 0) {
    activeId.value = tocItems.value[0].id
  }
}

onMounted(() => {
  generateToc()
  window.addEventListener('scroll', handleScroll)
  // 初始化进度和激活状态
  updateActiveHeading()
})

onUnmounted(() => {
  if (scrollTimer) window.clearTimeout(scrollTimer)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="sticky top-24 space-y-4">
    <!-- 阅读进度卡片 -->
    <div class="card-border rounded-lg overflow-hidden">
      <div class="relative p-4">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div class="relative flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <BookOpenIcon class="w-5 h-5 text-blue-400" />
            <span class="text-sm font-medium text-gray-300">阅读进度</span>
          </div>
          <div class="flex items-center space-x-2">
            <BoltIcon 
              class="w-4 h-4 text-yellow-400 animate-pulse"
              :class="progress > 0 ? 'opacity-100' : 'opacity-0'"
            />
            <span class="text-blue-400 font-bold">{{ Math.round(progress) }}%</span>
          </div>
        </div>
        <!-- 进度条 -->
        <div class="relative mt-2 w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
          <div 
            class="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out rounded-full"
            :style="{ width: `${progress}%` }"
          >
            <div class="absolute inset-0 bg-shine animate-shine"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 目录卡片 -->
    <div class="card-border rounded-lg overflow-hidden flex flex-col">
      <!-- 标题区域 -->
      <div class="relative flex-shrink-0">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
        <div class="relative p-4 flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <ListBulletIcon class="w-5 h-5 text-blue-400" />
            <h3 class="text-lg font-bold text-white">目录</h3>
          </div>
          <button 
            @click="scrollToTop"
            class="p-1 rounded-lg hover:bg-white/10 transition-colors group"
            title="返回顶部"
          >
            <ArrowUpCircleIcon class="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
          </button>
        </div>
      </div>

      <!-- 目录列表 -->
      <div class="p-4 space-y-1 overflow-y-auto" style="max-height: 60vh">
        <button
          v-for="{ id, text, level } in tocItems"
          :key="id"
          @click="scrollToHeading(id)"
          class="group flex items-center w-full text-left transition-all duration-100 rounded-lg px-2 py-1.5"
          :class="[
            'pl-' + (level * 4),
            activeId === id 
              ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400' 
              : 'text-gray-400 hover:bg-white/5 hover:text-white',
          ]"
        >
          <ChevronRightIcon 
            class="w-4 h-4 mr-2 transition-transform duration-100"
            :class="activeId === id ? 'text-blue-400 rotate-90' : 'text-gray-500 group-hover:text-white'"
          />
          <span class="truncate transition-colors duration-100">{{ text }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.card-border {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* 自定义滚动条样式 */
.overflow-y-auto::-webkit-scrollbar {
  width: 3px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* 进度条闪光动画 */
.bg-shine {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
}

@keyframes shine {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}

.animate-shine {
  animation: shine 2s infinite;
}

/* 闪电图标动画 */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.95);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>