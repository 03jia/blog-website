import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getAllArticles } from '@/client/config/articles-meta';
export const useArticleStore = defineStore('article', () => {
    const articles = ref(getAllArticles());
    const toggleTag = (tag) => {
        // 标签筛选逻辑
    };
    return {
        articles,
        toggleTag
    };
});
//# sourceMappingURL=article.js.map