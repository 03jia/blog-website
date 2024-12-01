// 使用 localStorage 在开发环境中模拟 KV 存储
class LocalKVStore {
    getKey(id) {
        return `article:${id}`;
    }
    async hgetall(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
    async hset(key, field) {
        const existing = await this.hgetall(key) || {};
        const newData = { ...existing, ...field };
        localStorage.setItem(key, JSON.stringify(newData));
    }
    async hincrby(key, field, increment) {
        const data = await this.hgetall(key) || { views: 0, likes: 0 };
        data[field] = (data[field] || 0) + increment;
        localStorage.setItem(key, JSON.stringify(data));
    }
}
const kvStore = import.meta.env.PROD ? null : new LocalKVStore();
export async function getArticleState(id) {
    if (!kvStore)
        return null;
    return await kvStore.hgetall(`article:${id}`);
}
export async function setArticleState(id, state) {
    if (!kvStore)
        return;
    await kvStore.hset(`article:${id}`, state);
}
export async function incrementArticleViews(id) {
    if (!kvStore)
        return;
    await kvStore.hincrby(`article:${id}`, 'views', 1);
}
export async function toggleArticleLike(id, liked) {
    if (!kvStore)
        return;
    await kvStore.hincrby(`article:${id}`, 'likes', liked ? 1 : -1);
}
export async function toggleArticleVisibility(id, visible) {
    if (!kvStore)
        return;
    await kvStore.hset(`article:${id}`, { visible });
}
export async function toggleArticleRecommended(id, recommended) {
    if (!kvStore)
        return;
    await kvStore.hset(`article:${id}`, { recommended });
}
//# sourceMappingURL=kv.js.map