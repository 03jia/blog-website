<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from '@/client/composables/theme/useTheme'

const { isDark, toggleTheme, initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div :class="{ 'dark': isDark }">
    <button @click="toggleTheme">
      <i :class="isDark ? 'ri-sun-line' : 'ri-moon-line'" />
    </button>
    <slot />
  </div>
</template> 