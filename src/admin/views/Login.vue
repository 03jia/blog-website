<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Button from '../components/ui/Button.vue'
import Input from '../components/ui/Input.vue'

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  if (!username.value || !password.value) {
    error.value = '请输入用户名和密码'
    return
  }

  loading.value = true
  error.value = ''

  try {
    // 模拟登录请求
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (username.value === 'admin' && password.value === 'admin') {
      localStorage.setItem('admin-token', 'dummy-token')
      const redirect = route.query.redirect as string || '/admin/dashboard'
      router.push(redirect)
    } else {
      error.value = '用户名或密码错误'
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div class="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <div>
        <h2 class="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          博客后台管理
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          请登录以继续
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-4">
          <Input
            v-model="username"
            type="text"
            placeholder="用户名"
            :error="error"
          />
          <Input
            v-model="password"
            type="password"
            placeholder="密码"
          />
        </div>

        <Button
          type="primary"
          :loading="loading"
          class="w-full"
        >
          {{ loading ? '登录中...' : '登录' }}
        </Button>
      </form>
    </div>
  </div>
</template> 