<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useArticleStore } from "@/client/stores/article";
import NavBar from "@/client/components/layout/ClientNavBar.vue";
import TimelineView from "@/client/components/archive/TimelineView.vue";
import CategoryView from "@/client/components/archive/CategoryView.vue";
import TagView from "@/client/components/archive/TagView.vue";
import { theme } from '@/shared/config/theme'

const route = useRoute();
const articleStore = useArticleStore();

// 从路由参数获取当前标签页
const activeTab = ref(route.query.tab?.toString() || "time");

// 监听路由参数变化
watch(
  () => route.query.tab,
  (newTab) => {
    activeTab.value = newTab?.toString() || "time";
  }
);

// 切换标签页时更新路由
const switchTab = (tab: string) => {
  activeTab.value = tab;
};
</script>

<template>
  <div :class="theme.archive.wrapper">
    <NavBar />

    <!-- 内容区域 -->
    <main :class="theme.archive.content.wrapper">
      <div :class="theme.archive.content.container">
        <!-- 标题 -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-800">文章归档</h1>
          <div class="mt-4 flex space-x-4">
            <button
              v-for="tab in ['time', 'category', 'tag']"
              :key="tab"
              :class="[
                'px-4 py-2 rounded-full text-sm transition-colors',
                activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/90 text-gray-600 hover:bg-blue-50'
              ]"
              @click="switchTab(tab)"
            >
              {{ tab === 'time' ? '时间线' : tab === 'category' ? '分类' : '标签' }}
            </button>
          </div>
        </div>

        <!-- 内容区域 -->
        <component
          :is="activeTab === 'time' ? TimelineView : activeTab === 'category' ? CategoryView : TagView"
          :articles="articleStore.articles"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* 可以删除大部分样式，因为已经移到theme配置中 */
/* 保留一些特殊的动画效果 */
.tab-content-enter-active,
.tab-content-leave-active {
  transition: opacity 0.15s ease-out;
}

.tab-content-enter-from,
.tab-content-leave-to {
  opacity: 0;
}
</style> 