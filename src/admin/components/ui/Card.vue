<script setup lang="ts">
interface Props {
  title?: string
  loading?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <div v-if="title" class="card-header">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-actions">
        <slot name="actions" />
      </div>
    </div>
    
    <div :class="['card-body', { 'card-loading': loading }]">
      <div v-if="loading" class="card-loading-spinner">
        <i class="ri-loader-4-line animate-spin text-2xl" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Card'
}
</script>

<style scoped>
.card {
  @apply bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden;
}

.card-header {
  @apply px-6 py-4 border-b border-gray-200 dark:border-gray-700
         flex items-center justify-between;
}

.card-title {
  @apply text-lg font-medium text-gray-900 dark:text-white;
}

.card-body {
  @apply p-6 relative;
}

.card-loading {
  @apply min-h-[200px];
}

.card-loading-spinner {
  @apply absolute inset-0 flex items-center justify-center
         bg-white/50 dark:bg-gray-800/50;
}
</style> 