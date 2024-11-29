import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./client/router"
import { useArticleStore } from './client/stores/article'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// 预加载文章数据
const articleStore = useArticleStore()
console.log('开始初始化文章存储...')

// 尝试获取文章
try {
  await articleStore.fetchArticles()
} catch (error) {
  console.error('获取文章失败:', error)
}

app.mount('#app')
