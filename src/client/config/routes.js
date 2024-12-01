export const ARTICLE_ROUTES = {
    getArticleUrl: (id) => `/article/${id}`,
    getArticlesByCategory: (category) => `/category/${category}`,
    getArticlesByTag: (tag) => `/tag/${tag}`
};
export const CATEGORY_MAP = {
    '前端开发': 'frontend',
    '后端开发': 'backend',
    'DevOps': 'devops',
    'CSS': 'css'
};
export const TAG_MAP = {
    'Vue': 'vue',
    'TypeScript': 'typescript',
    'Node.js': 'nodejs',
    'Docker': 'docker',
    '前端': 'frontend',
    '后端': 'backend',
    '最佳实践': 'best-practices',
    '教程': 'tutorials',
    '容器化': 'containerization',
    'CSS': 'css',
    'Tailwind': 'tailwind'
};
//# sourceMappingURL=routes.js.map