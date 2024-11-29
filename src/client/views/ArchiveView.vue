<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useArticleStore } from "@/client/stores/article";
import NavBar from "../components/layout/NavBar.vue";
import TimelineView from "../components/archive/TimelineView.vue";
import CategoryView from "../components/archive/CategoryView.vue";
import TagView from "../components/archive/TagView.vue";
import bgImage from "@/shared/assets/images/bg.jpg";

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
  <div
    class="min-h-screen bg-fixed bg-cover bg-center relative flex flex-col"
  >
    <NavBar />

    <!-- 内容区域 -->
    <main class="flex-1 relative z-10 pt-20">
      <div class="max-w-4xl mx-auto px-4 py-8">
        <!-- 标题 -->
        <div class="mb-8">
          <h1 class="text-2xl font-bold text-white">归档</h1>
        </div>

        <!-- 标签页切换 -->
        <div class="flex space-x-6 mb-8">
          <button
            v-for="tab in ['time', 'category', 'tag']"
            :key="tab"
            @click="switchTab(tab)"
            class="relative px-8 py-3 rounded-lg text-base font-medium transition-all duration-300 
                   overflow-hidden group backdrop-blur-sm"
            :class="[
              activeTab === tab
                ? 'text-white shadow-glow'
                : 'text-gray-300 hover:text-white',
            ]"
          >
            <!-- 背景效果 -->
            <div
              class="absolute inset-0 transition-all duration-300"
              :class="[
                activeTab === tab
                  ? 'bg-gradient animate-gradient opacity-90'
                  : 'bg-white/5 group-hover:bg-white/10 opacity-60'
              ]"
            ></div>

            <!-- 流光效果 -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300"
            >
              <div class="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] 
                          bg-gradient-to-r from-transparent via-white/10 to-transparent
                          transition-transform duration-1000 ease-in-out">
              </div>
            </div>

            <!-- 内容 -->
            <span class="relative flex items-center space-x-2">
              <i
                class="text-lg transition-transform duration-300 group-hover:scale-110"
                :class="[
                  tab === 'time'
                    ? 'ri-history-line'
                    : tab === 'category'
                    ? 'ri-folder-2-line'
                    : 'ri-price-tag-3-line',
                ]"
              ></i>
              <span>{{ tab === "time" ? "时间线" : tab === "category" ? "分类" : "标签" }}</span>
            </span>

            <!-- 底部装饰线 -->
            <div
              class="absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 
                     bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-blue-500/0"
              :class="[
                activeTab === tab
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-60'
              ]"
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
/* 渐变背景动画 */
.bg-gradient {
  background: linear-gradient(120deg, 
    rgba(59, 130, 246, 0.2), 
    rgba(139, 92, 246, 0.2), 
    rgba(59, 130, 246, 0.2)
  );
  background-size: 200% 100%;
}

.animate-gradient {
  animation: gradientMove 4s ease infinite;
}

@keyframes gradientMove {
  0% {
    background-position: 100% 0;
  }
  50% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}

/* 发光效果 */
.shadow-glow {
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.15);
}

/* 按钮悬停动画 */
.group:hover {
  transform: translateY(-1px);
}

/* 确保内容区域占满整个视口高度 */
.min-h-screen {
  min-height: 100vh;
}

/* 移除body的默认背景色 */
:global(body) {
  background: transparent;
}

/* 标签切换动画 */
.tab-item {
  @apply transition-all duration-150;
}

/* 下划线动画 */
.tab-indicator {
  @apply absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0
        transition-all duration-150;
}

/* 标签内容切换动画 */
.tab-content-enter-active,
.tab-content-leave-active {
  transition: opacity 0.15s ease-out;
}

.tab-content-enter-from,
.tab-content-leave-to {
  opacity: 0;
}

/* 标签悬停效果 */
.tab-hover {
  @apply transition-colors duration-150;
}

/* 标签文字动画 */
.tab-text {
  @apply transition-colors duration-150;
}
</style> 