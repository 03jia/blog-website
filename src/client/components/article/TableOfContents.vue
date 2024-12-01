<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { theme } from '@/shared/config/theme'
import { 
  ListBulletIcon,
  ChevronRightIcon,
  BookOpenIcon,
  BoltIcon
} from '@heroicons/vue/24/outline'

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
const tocContainer = ref<HTMLElement | null>(null)

// 生成目录结构
const generateToc = () => {
  const article = document.querySelector('.article-content')
  console.log('Found article element:', article)

  const headings = article?.querySelectorAll('.prose h1, .prose h2, .prose h3')
  console.log('Found headings:', headings?.length)

  if (!headings?.length) {
    console.log('No headings found, trying without .prose selector')
    const allHeadings = article?.querySelectorAll('h1, h2, h3')
    console.log('Found headings without .prose:', allHeadings?.length)
    return
  }

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
    console.log('Processing heading:', item)

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
  console.log('Generated TOC items:', items)
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

// 滚动目录到激活的标题
const scrollTocToActiveItem = () => {
  if (!tocContainer.value) return
  
  const activeButton = tocContainer.value.querySelector(`button[data-id="${activeId.value}"]`)
  if (activeButton) {
    const containerRect = tocContainer.value.getBoundingClientRect()
    const buttonRect = activeButton.getBoundingClientRect()
    
    // 检查按钮是否在可视区域内
    const isInView = (
      buttonRect.top >= containerRect.top &&
      buttonRect.bottom <= containerRect.bottom
    )
    
    if (!isInView) {
      // 计算滚动位置，使按钮位于容器中间
      const scrollTop = activeButton.offsetTop - (containerRect.height / 2) + (buttonRect.height / 2)
      tocContainer.value.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      })
    }
  }
}

// 监听激活标题的变化
watch(() => activeId.value, () => {
  scrollTocToActiveItem()
})

onMounted(() => {
  // 等待内容渲染完成
  nextTick(() => {
    setTimeout(() => {
      generateToc()
      window.addEventListener('scroll', updateActiveHeading, { passive: true })
      updateActiveHeading()
    }, 100)
  })
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
        <div class="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-blue-100/20"></div>
        <div class="relative flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <BookOpenIcon class="w-5 h-5 text-blue-500" />
            <span class="text-sm font-medium text-gray-700">阅读进度</span>
          </div>
          <div class="flex items-center space-x-2">
            <BoltIcon 
              class="w-4 h-4 text-yellow-400 animate-pulse"
              :class="progress > 0 ? 'opacity-100' : 'opacity-0'"
            />
            <span class="text-blue-500 font-bold">{{ Math.round(progress) }}%</span>
          </div>
        </div>
        <!-- 进度条 -->
        <div class="relative mt-2 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            class="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 rounded-full"
            :style="{ width: `${progress}%` }"
          >
            <div class="absolute inset-0 bg-shine animate-shine"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 目录卡片 -->
    <div class="card-border rounded-lg overflow-hidden">
      <div class="relative">
        <div class="absolute inset-0 bg-blue-50/30"></div>
        <div class="relative p-4 border-b border-gray-100/80">
          <div class="flex items-center space-x-2">
            <ListBulletIcon class="w-5 h-5 text-blue-500" />
            <h3 class="text-lg font-bold text-gray-800">目录</h3>
          </div>
        </div>
      </div>

      <!-- 目录内容 -->
      <div 
        ref="tocContainer"
        class="p-4 space-y-1 overflow-y-auto max-h-[60vh]"
      >
        <template v-if="tocItems.length">
          <div 
            v-for="item in tocItems" 
            :key="item.id"
            class="w-full"
          >
            <button
              :data-id="item.id"
              @click="scrollToHeading(item.id)"
              class="w-full text-left rounded px-2 py-1.5 flex items-center transition-all duration-300"
              :class="[
                activeId === item.id 
                  ? 'bg-blue-50 text-blue-500' 
                  : 'text-gray-600 hover:bg-blue-50/50 hover:text-blue-500'
              ]"
            >
              <ChevronRightIcon 
                class="w-4 h-4 mr-2 transition-transform duration-300"
                :class="[
                  activeId === item.id ? 'text-blue-500 rotate-90' : 'text-gray-400'
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
                  :data-id="child.id"
                  @click="scrollToHeading(child.id)"
                  class="w-full text-left rounded px-2 py-1.5 flex items-center pl-8 transition-all duration-300"
                  :class="[
                    activeId === child.id 
                      ? 'bg-blue-50 text-blue-500' 
                      : 'text-gray-600 hover:bg-blue-50/50 hover:text-blue-500'
                  ]"
                >
                  <ChevronRightIcon 
                    class="w-4 h-4 mr-2 transition-transform duration-300"
                    :class="[
                      activeId === child.id ? 'text-blue-500 rotate-90' : 'text-gray-400'
                    ]"
                  />
                  <span class="truncate">{{ child.text }}</span>
                </button>

                <!-- 三级标题 -->
                <template v-if="child.children.length">
                  <button
                    v-for="subChild in child.children"
                    :key="subChild.id"
                    :data-id="subChild.id"
                    @click="scrollToHeading(subChild.id)"
                    class="w-full text-left rounded px-2 py-1.5 flex items-center pl-12 transition-all duration-300"
                    :class="[
                      activeId === subChild.id 
                        ? 'bg-blue-50 text-blue-500' 
                        : 'text-gray-600 hover:bg-blue-50/50 hover:text-blue-500'
                    ]"
                  >
                    <ChevronRightIcon 
                      class="w-4 h-4 mr-2 transition-transform duration-300"
                      :class="[
                        activeId === subChild.id ? 'text-blue-500 rotate-90' : 'text-gray-400'
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
          暂无目录 ({{ tocItems.length }})
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.card-border {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(229, 231, 235, 0.8);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

/* 自定义滚动条样式 */
.overflow-y-auto::-webkit-scrollbar {
  width: 3px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  @apply bg-blue-200 rounded;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  @apply bg-blue-300;
}

/* 进度条闪光动画 */
.bg-shine {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
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
</style>