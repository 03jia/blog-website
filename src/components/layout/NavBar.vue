<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ThemeToggle from '../common/ThemeToggle.vue'
import logo from '@/assets/logo.svg'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Archive', path: '/archive' },
  { name: 'About', path: '/about' }
]

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 监听滚动事件，控制导航栏样式
onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 0
  })
})
</script>

<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20' 
        : 'bg-black/20 backdrop-blur-sm border-b border-white/10'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/">
            <img 
              class="h-8 w-auto" 
              :src="logo" 
              alt="Logo"
              :class="{ 'filter dark:invert': !isScrolled }"
            >
          </router-link>
        </div>

        <!-- 导航菜单 -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="transition-colors"
            :class="[
              isScrolled
                ? 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                : 'text-white hover:text-blue-300'
            ]"
            active-class="text-blue-600 dark:text-blue-400"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- 搜索框 -->
        <div class="flex items-center">
          <input
            type="text"
            placeholder="搜索文章..."
            class="px-4 py-1 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            :class="[
              isScrolled
                ? 'bg-white dark:bg-gray-700 dark:border-gray-600'
                : 'bg-white/10 border-transparent placeholder-gray-300 text-white'
            ]"
          >
        </div>

        <!-- 主题切换 -->
        <ThemeToggle />
      </div>
    </div>
  </nav>
</template> 