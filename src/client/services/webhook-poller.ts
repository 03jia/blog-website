import { useArticleStore } from '../stores/article'
import type { Store } from 'pinia'
import type { Article } from '@/shared/types/article'

interface ArticleStore extends Store {
  lastFetchTime: number
  fetchArticles: (forceRefresh?: boolean) => Promise<void>
}

export class WebhookPoller {
  private static interval: number | null = null
  private static readonly POLL_INTERVAL = 60000 // 1分钟检查一次

  static start() {
    if (this.interval) return

    this.interval = window.setInterval(async () => {
      try {
        const response = await fetch('/api/webhook/status')
        const data = await response.json()
        
        if (data.lastPushTimestamp) {
          const articleStore = useArticleStore() as ArticleStore
          if (data.lastPushTimestamp > articleStore.lastFetchTime) {
            await articleStore.fetchArticles(true)
          }
        }
      } catch (error) {
        console.error('轮询更新检查失败:', error)
      }
    }, this.POLL_INTERVAL)
  }

  static stop() {
    if (this.interval) {
      window.clearInterval(this.interval)
      this.interval = null
    }
  }
} 