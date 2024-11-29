<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'md',
  loading: false,
  disabled: false
})

const buttonClasses = computed(() => ({
  'btn': true,
  'btn-primary': props.type === 'primary',
  'btn-secondary': props.type === 'secondary', 
  'btn-danger': props.type === 'danger',
  'btn-sm': props.size === 'sm',
  'btn-md': props.size === 'md',
  'btn-lg': props.size === 'lg',
  'btn-loading': props.loading,
  'btn-disabled': props.disabled
}))
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="mr-2">
      <i class="ri-loader-4-line animate-spin" />
    </span>
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button'
}
</script>

<style scoped>
.btn {
  @apply inline-flex items-center justify-center px-4 py-2 border border-transparent
         rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2
         transition-colors duration-200 ease-in-out;
}

.btn-primary {
  @apply text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500;
}

.btn-secondary {
  @apply text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500
         dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600;
}

.btn-danger {
  @apply text-white bg-red-600 hover:bg-red-700 focus:ring-red-500;
}

.btn-sm {
  @apply px-3 py-1.5 text-sm;
}

.btn-md {
  @apply px-4 py-2 text-base;
}

.btn-lg {
  @apply px-6 py-3 text-lg;
}

.btn-disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style> 