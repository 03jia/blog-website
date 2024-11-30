<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useArticleStore } from "@/client/stores/article";
import NavBar from "../components/layout/NavBar.vue";
import TimelineView from "../components/archive/TimelineView.vue";
import CategoryView from "../components/archive/CategoryView.vue";
import TagView from "../components/archive/TagView.vue";
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
        <h1 class="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
          归档
        </h1>

        <!-- 标签页切换 -->
        <div :class="theme.archive.tabs.wrapper">
          <button
            v-for="tab in ['time', 'category', 'tag']"
            :key="tab"
            @click="switchTab(tab)"
            :class="[
              theme.archive.tabs.tab.base,
              activeTab === tab 
                ? theme.archive.tabs.tab.active 
                : theme.archive.tabs.tab.inactive
            ]"
          >
            <!-- 背景效果 -->
            <div
              :class="[
                theme.archive.tabs.tab.background.base,
                activeTab === tab 
                  ? theme.archive.tabs.tab.background.active
                  : theme.archive.tabs.tab.background.inactive
              ]"
            ></div>

            <!-- 内容 -->
            <span :class="theme.archive.tabs.tab.content.wrapper">
              <i
                :class="[
                  theme.archive.tabs.tab.content.icon,
                  tab === 'time'
                    ? 'ri-history-line'
                    : tab === 'category'
                    ? 'ri-folder-2-line'
                    : 'ri-price-tag-3-line'
                ]"
              ></i>
              <span>{{ tab === "time" ? "时间线" : tab === "category" ? "分类" : "标签" }}</span>
            </span>

            <!-- 底部指示器 -->
            <div
              :class="theme.archive.tabs.tab.indicator"
              :style="{ opacity: activeTab === tab ? 1 : 0 }"
            ></div>
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
        <TagView v-else :articles="articleStore.articles" />
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