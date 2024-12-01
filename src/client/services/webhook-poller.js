import { useArticleStore } from '../stores/article';
export class WebhookPoller {
    static interval = null;
    static POLL_INTERVAL = 60000; // 1分钟检查一次
    static start() {
        if (this.interval)
            return;
        this.interval = window.setInterval(async () => {
            try {
                const response = await fetch('/api/webhook/status');
                const data = await response.json();
                if (data.lastPushTimestamp) {
                    const articleStore = useArticleStore();
                    if (data.lastPushTimestamp > articleStore.lastFetchTime) {
                        await articleStore.fetchArticles(true);
                    }
                }
            }
            catch (error) {
                console.error('轮询更新检查失败:', error);
            }
        }, this.POLL_INTERVAL);
    }
    static stop() {
        if (this.interval) {
            window.clearInterval(this.interval);
            this.interval = null;
        }
    }
}
//# sourceMappingURL=webhook-poller.js.map