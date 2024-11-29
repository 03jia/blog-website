<script setup lang="ts">
interface Props {
  type?: string
  placeholder?: string
  modelValue: string
  error?: string
}

defineProps<Props>()
defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      class="input"
      :class="{ 'input-error': error }"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
    <p v-if="error" class="error-message">
      {{ error }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Input'
}
</script>

<style scoped>
.input-wrapper {
  @apply relative;
}

.input {
  @apply appearance-none block w-full px-3 py-2 border border-gray-300 
         rounded-md shadow-sm placeholder-gray-400 
         focus:outline-none focus:ring-blue-500 focus:border-blue-500
         dark:bg-gray-800 dark:border-gray-600 dark:text-white
         transition duration-150 ease-in-out;
}

.input-error {
  @apply border-red-500 focus:ring-red-500 focus:border-red-500;
}

.error-message {
  @apply mt-1 text-sm text-red-500;
}
</style> 