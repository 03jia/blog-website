<script setup lang="ts">
import avatar from '../../assets/images/avatar.png'
</script>

<template>
  <div class="card-border p-6 rounded-lg">
    <div class="flex items-center space-x-4">
      <img 
        :src="avatar" 
        alt="Avatar"
        class="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h3 class="text-lg font-bold text-white">xiaoYu</h3>
        <p class="text-sm text-gray-400">前端开发工程师</p>
      </div>
    </div>
  </div>
</template> 