<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  ListBulletIcon,
  ChevronRightIcon,
  BookOpenIcon,
  ArrowUpCircleIcon,
  BoltIcon
} from '@heroicons/vue/24/outline'
import { theme } from '@/shared/config/theme'

interface TocItem {
  id: string
  text: string
  level: number
  children: TocItem[]
}

const tocItems = ref<TocItem[]>([])
const activeId = ref('')
const progress = ref(0)
let scrollTimer: number | null = null

// 生成目录结构
const generateToc = () => {
  const article = document.querySelector('.article-content')
  if (!article) return

  const headings = article.querySelectorAll('.prose h1, .prose h2, .prose h3')
  const items: TocItem[] = []
  const stack: TocItem[][] = [items]
  let prevLevel = 0

  headings.forEach((heading, index) => {
    const level = Number(heading.tagName[1])
    const id = `toc-heading-${index}`
    heading.id = id
    
    const item: TocItem = {
      id,
      text: heading.textContent?.trim() || '',
      level,
      children: []
    }

    // 如果是第一个标题，直接添加到根级别
    if (stack.length === 1 && items.length === 0) {
      items.push(item)
      prevLevel = level
      return
    }

    // 根据层级关系构建树形结构
    if (level > prevLevel) {
      // 当前标题是子标题
      const parent = stack[stack.length - 1][stack[stack.length - 1].length - 1]
      if (parent) {
        parent.children.push(item)
        stack.push(parent.children)
      }
    } else if (level < prevLevel) {
      // 当前标题层级比前一个浅
      const popCount = prevLevel - level
      for (let i = 0; i < popCount; i++) {
        stack.pop()
      }
      stack[stack.length - 1].push(item)
    } else {
      // 同级标题
      stack[stack.length - 1].push(item)
    }

    prevLevel = level
  })

  tocItems.value = items
}

// 滚动到指定标题
const scrollToHeading = (id: string) => {
  const heading = document.querySelector(`#${id}`)
  if (heading) {
    const navHeight = 80
    const offset = 24
    
    // 计算目标滚动位置
    const elementPosition = (heading as HTMLElement).getBoundingClientRect().top + window.scrollY
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
  progress.value = calculateProgress()

  // 使用 requestAnimationFrame 优化性能
  if (scrollTimer) {
    cancelAnimationFrame(scrollTimer)
  }

  scrollTimer = requestAnimationFrame(() => {
    const navHeight = 80
    const scrollPosition = window.scrollY + navHeight
    let currentHeading = null
    let minDistance = Infinity

    // 遍历所有标题，找到最接近视口顶部的标题
    const headings = document.querySelectorAll('.prose h1, .prose h2, .prose h3')
    headings.forEach(heading => {
      if (heading) {
        const rect = heading.getBoundingClientRect()
        // 计算标题到视口顶部的距离
        const distance = Math.abs(rect.top - navHeight)
        
        // 如果标题在视口上方且距离更近
        if (rect.top <= navHeight && distance < minDistance) {
          minDistance = distance
          currentHeading = heading
        }
      }
    })

    // 更新激活的标题
    if (currentHeading) {
      activeId.value = currentHeading.id
    } else if (scrollPosition <= navHeight && tocItems.value.length > 0) {
      // 如果在页面顶部，激活第一个标题
      activeId.value = tocItems.value[0].id
    }
  })
}

onMounted(() => {
  generateToc()
  window.addEventListener('scroll', updateActiveHeading, { passive: true })
  // 初始化激活状态
  updateActiveHeading()
})

onUnmounted(() => {
  if (scrollTimer) {
    cancelAnimationFrame(scrollTimer)
  }
  window.removeEventListener('scroll', updateActiveHeading)
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
    <div :class="theme.toc.card.base">
      <!-- 标题区域 -->
      <div class="relative">
        <div :class="theme.toc.card.header.gradient"></div>
        <div :class="theme.toc.card.header.wrapper">
          <div class="flex items-center space-x-2">
            <ListBulletIcon class="w-5 h-5" :class="theme.toc.card.header.icon" />
            <h3 :class="theme.toc.card.header.title">目录</h3>
          </div>
        </div>
      </div>

      <!-- 目录内容 -->
      <div :class="theme.toc.card.content.wrapper">
        <!-- 目录列表 -->
        <div class="p-4 space-y-1 overflow-y-auto max-h-[60vh]">
          <template v-if="tocItems.length">
            <div 
              v-for="item in tocItems" 
              :key="item.id"
              class="w-full"
            >
              <button
                @click="scrollToHeading(item.id)"
                :class="[
                  'w-full text-left rounded px-2 py-1.5 flex items-center toc-item',
                  activeId === item.id 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400' 
                    : 'text-gray-400'
                ]"
              >
                <ChevronRightIcon 
                  :class="[
                    'w-4 h-4 mr-2',
                    activeId === item.id ? 'text-blue-400 rotate-90' : 'text-gray-500'
                  ]"
                />
                <span class="truncate">{{ item.text }}</span>
              </button>

              <!-- 二级标题 -->
              <template v-if="item.children.length">
                <div 
                  v-for="child in item.children"
                  :key="child.id"
                  class="w-full"
                >
                  <button
                    @click="scrollToHeading(child.id)"
                    :class="[
                      'w-full text-left rounded px-2 py-1.5 flex items-center pl-8 toc-item',
                      activeId === child.id 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400' 
                        : 'text-gray-400'
                    ]"
                  >
                    <ChevronRightIcon 
                      :class="[
                        'w-4 h-4 mr-2',
                        activeId === child.id ? 'text-blue-400 rotate-90' : 'text-gray-500'
                      ]"
                    />
                    <span class="truncate">{{ child.text }}</span>
                  </button>

                  <!-- 三级标题 -->
                  <template v-if="child.children.length">
                    <button
                      v-for="subChild in child.children"
                      :key="subChild.id"
                      @click="scrollToHeading(subChild.id)"
                      :class="[
                        'w-full text-left rounded px-2 py-1.5 flex items-center pl-12 toc-item',
                        activeId === subChild.id 
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400' 
                          : 'text-gray-400'
                      ]"
                    >
                      <ChevronRightIcon 
                        :class="[
                          'w-4 h-4 mr-2',
                          activeId === subChild.id ? 'text-blue-400 rotate-90' : 'text-gray-500'
                        ]"
                      />
                      <span class="truncate">{{ subChild.text }}</span>
                    </button>
                  </template>
                </div>
              </template>
            </div>
          </template>
          <div v-else class="text-center text-gray-400">
            暂无目录
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.card-border {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
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
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
}

@keyframes shine {
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
}

.animate-shine {
  animation: shine 2s infinite;
}

/* 闪电图标动画 */
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.95); }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* 目录项样式 */
.toc-item {
  @apply text-gray-400;
  /* 移除过渡效果 */
  transition: none;
}

.toc-item:hover {
  @apply bg-white/10 text-white;
}

/* 移除所有过渡效果 */
.card-border,
.copy-button,
.toc-item * {
  transition: none !important;
}
</style>