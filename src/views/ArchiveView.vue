<script setup lang="ts">
import { ref } from 'vue'
import { useArticleStore } from '@/stores/article'
import NavBar from '../components/layout/NavBar.vue'
import TimelineView from '../components/archive/TimelineView.vue'
import CategoryView from '../components/archive/CategoryView.vue'
import TagView from '../components/archive/TagView.vue'
import { DEFAULT_BG_IMAGE } from '@/config/constants'

const articleStore = useArticleStore()
const activeTab = ref<'time' | 'category' | 'tag'>('time')
const bgImage = DEFAULT_BG_IMAGE
</script>

<template>
  <div 
    class="min-h-screen bg-fixed bg-cover bg-center relative"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <!-- 背景遮罩 -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-900/95 backdrop-blur-sm"></div>
    
    <NavBar />
    
    <main class="relative z-10 max-w-4xl mx-auto px-4 py-24">
      <!-- 标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-white mb-4">文章归档</h1>
        <p class="text-gray-300">按标签浏览全部文章</p>
      </div>

      <!-- 切换按钮 -->
      <div class="flex justify-center mb-12 space-x-4">
        <button
          v-for="tab in ['time', 'category', 'tag']"
          :key="tab"
          @click="activeTab = tab"
          class="px-6 py-2 rounded-full text-sm font-medium transition-colors"
          :class="[
            activeTab === tab
              ? 'bg-blue-500/80 text-white backdrop-blur-sm'
              : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20'
          ]"
        >
          {{ tab === 'time' ? '时间线' : tab === 'category' ? '分类' : '标签' }}
        </button>
      </div>

      <!-- 内容视图 -->
      <TimelineView 
        v-if="activeTab === 'time'" 
        :articles="articleStore.articles" 
      />
      <CategoryView 
        v-else-if="activeTab === 'category'" 
        :articles="articleStore.articles" 
      />
      <TagView 
        v-else 
        :articles="articleStore.articles" 
      />
    </main>
  </div>
</template>

<style scoped>
.card-border {
  @apply bg-white/10 backdrop-blur-sm;
  transition: transform 0.3s ease;
}

.card-border:hover {
  transform: translateY(-2px);
}
</style> 