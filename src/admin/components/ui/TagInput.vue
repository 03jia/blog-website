<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

const inputValue = ref('')
const tags = ref<string[]>(props.modelValue)

// 监听 props 变化
watch(() => props.modelValue, (newValue) => {
  tags.value = newValue
})

// 监听标签变化并触发更新
watch(tags, (newValue) => {
  emit('update:modelValue', newValue)
})

const addTag = () => {
  const value = inputValue.value.trim()
  if (value && !tags.value.includes(value)) {
    tags.value = [...tags.value, value]
    inputValue.value = ''
  }
}

const removeTag = (index: number) => {
  tags.value = tags.value.filter((_, i) => i !== index)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    addTag()
  } else if (e.key === 'Backspace' && !inputValue.value && tags.value.length > 0) {
    tags.value = tags.value.slice(0, -1)
  }
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-2 p-2 border rounded-lg 
              focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500
              bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700
              transition-all duration-200">
    <!-- 已添加的标签 -->
    <span
      v-for="(tag, index) in tags"
      :key="index"
      class="flex items-center gap-1 px-2 py-1 text-sm 
             bg-gradient-to-r from-blue-500/10 to-purple-500/10 
             text-blue-600 dark:text-blue-400
             rounded-full group transition-all duration-200
             hover:from-blue-500/20 hover:to-purple-500/20"
    >
      {{ tag }}
      <button
        type="button"
        class="opacity-0 group-hover:opacity-100 hover:text-red-500 transition-all"
        @click="removeTag(index)"
      >
        <i class="ri-close-line" />
      </button>
    </span>

    <!-- 输入框 -->
    <input
      v-model="inputValue"
      type="text"
      placeholder="输入标签后按回车添加"
      class="flex-1 min-w-[120px] outline-none bg-transparent text-sm
             text-gray-700 dark:text-gray-300 placeholder-gray-400
             dark:placeholder-gray-500"
      @keydown="handleKeydown"
    >
  </div>
</template> 