export const adminRoutes = [
    {
        path: '/admin/login',
        name: 'AdminLogin',
        component: () => import('@/admin/views/Login.vue'),
        meta: {
            title: '登录后台',
            public: true
        }
    },
    {
        path: '/admin',
        component: () => import('@/admin/components/layout/AdminLayout.vue'),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                redirect: '/admin/dashboard'
            },
            {
                path: 'dashboard',
                component: () => import('@/admin/views/Dashboard.vue')
            },
            {
                path: 'articles',
                component: () => import('@/admin/views/ArticleManager.vue')
            },
            {
                path: 'categories',
                component: () => import('@/admin/views/CategoryManager.vue')
            },
            {
                path: 'media',
                component: () => import('@/admin/views/MediaManager.vue')
            }
        ]
    }
];
//# sourceMappingURL=admin.js.map