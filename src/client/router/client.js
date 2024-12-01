export const clientRoutes = [
    {
        path: '/',
        component: () => import('@/client/views/Home.vue'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/article/:id',
        component: () => import('@/client/views/Article.vue'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/archive',
        component: () => import('@/client/views/Archive.vue'),
        meta: {
            layout: 'default'
        }
    }
];
//# sourceMappingURL=client.js.map