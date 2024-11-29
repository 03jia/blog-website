import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from "@/client/router"
import { useArticleStore } from '@/client/stores/article'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// 预加载文章数据
const articleStore = useArticleStore()
await articleStore.fetchArticles()

app.mount('#app')
