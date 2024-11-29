<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-wrapper">
    <!-- 背景层 -->
    <div class="fixed-background">
      <div class="bg-image"></div>
    </div>
    
    <!-- 内容层 -->
    <RouterView v-slot="{ Component }">
      <transition 
        name="fade" 
        mode="out-in"
        @before-leave="beforeLeave"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <component :is="Component" class="content-layer" />
      </transition>
    </RouterView>
  </div>
</template>

<script lang="ts">
const beforeLeave = (el: Element) => {
  const scrollPosition = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.width = '100%'
  document.body.style.top = `-${scrollPosition}px`
}

const enter = () => {
  window.scrollTo(0, 0)
}

const afterEnter = () => {
  const scrollPosition = document.body.style.top
  document.body.style.position = ''
  document.body.style.width = ''
  document.body.style.top = ''
  if (scrollPosition) {
    window.scrollTo(0, parseInt(scrollPosition || '0') * -1)
  }
}
</script>

<style>
@import '@/shared/assets/styles/global.css';

.app-wrapper {
  min-height: 100vh;
  width: 100%;
  position: relative;
}

/* 固定背景层 */
.fixed-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
}

/* 背景图片 */
.bg-image {
  position: absolute;
  inset: 0;
  background-image: url('@/shared/assets/images/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.02); /* 稍微放大一点防止边缘露白 */
  will-change: transform;
}

/* 内容层 */
.content-layer {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
