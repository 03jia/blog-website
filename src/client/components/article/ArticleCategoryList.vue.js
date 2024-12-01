/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useArticleStore } from '@/client/stores/article';
import { theme } from '@/shared/config/theme';
import ArticleCard from '@/client/components/blog/ArticleCard.vue';
import NavBar from '@/client/components/layout/ClientNavBar.vue';
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const route = useRoute();
    const articleStore = useArticleStore();
    // 获取分类参数
    const category = computed(() => route.query.category?.toString());
    // 根据分类筛选文章
    const filteredArticles = computed(() => {
        if (category.value) {
            return articleStore.articles.filter(article => article.category === category.value).map((article, index) => ({
                ...article,
                cover: `/assets/images/test/test${(index % 5) + 1}.jpg`
            }));
        }
        return articleStore.articles;
    }); /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_fnComponent = (await import('vue')).defineComponent({});
    ;
    let __VLS_functionalComponentProps;
    function __VLS_template() {
        const __VLS_ctx = {};
        const __VLS_localComponents = {
            ...{},
            ...{},
            ...__VLS_ctx,
        };
        let __VLS_components;
        const __VLS_localDirectives = {
            ...{},
            ...__VLS_ctx,
        };
        let __VLS_directives;
        let __VLS_styleScopedClasses;
        let __VLS_resolvedLocalAndGlobalComponents;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.wrapper)) }, });
        // @ts-ignore
        [NavBar,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(NavBar, new NavBar({}));
        const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
        __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ((__VLS_ctx.theme.archive.content.wrapper)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.content.container)) }, });
        if (__VLS_ctx.category) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-8") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("flex items-center space-x-3 text-3xl font-bold") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-folder-2-line text-blue-500") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent") }, });
            (__VLS_ctx.category);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-2 flex items-center space-x-2 text-blue-500") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-article-line") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.filteredArticles.length);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6") }, });
        if (__VLS_ctx.filteredArticles.length) {
            for (const [article] of __VLS_getVForSourceType((__VLS_ctx.filteredArticles))) {
                // @ts-ignore
                [ArticleCard,];
                // @ts-ignore
                const __VLS_5 = __VLS_asFunctionalComponent(ArticleCard, new ArticleCard({ key: ((article.id)), article: ((article)), }));
                const __VLS_6 = __VLS_5({ key: ((article.id)), article: ((article)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
            }
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-span-full text-center py-12 bg-white/90 rounded-lg border border-gray-100/80") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-gray-400 flex flex-col items-center") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-inbox-2-line text-4xl mb-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        }
        __VLS_styleScopedClasses['mb-8'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['space-x-3'];
        __VLS_styleScopedClasses['text-3xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['ri-folder-2-line'];
        __VLS_styleScopedClasses['text-blue-500'];
        __VLS_styleScopedClasses['bg-gradient-to-r'];
        __VLS_styleScopedClasses['from-blue-500'];
        __VLS_styleScopedClasses['to-blue-600'];
        __VLS_styleScopedClasses['bg-clip-text'];
        __VLS_styleScopedClasses['text-transparent'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['space-x-2'];
        __VLS_styleScopedClasses['text-blue-500'];
        __VLS_styleScopedClasses['ri-article-line'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-1'];
        __VLS_styleScopedClasses['md:grid-cols-2'];
        __VLS_styleScopedClasses['lg:grid-cols-3'];
        __VLS_styleScopedClasses['gap-6'];
        __VLS_styleScopedClasses['col-span-full'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['py-12'];
        __VLS_styleScopedClasses['bg-white/90'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-100/80'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ri-inbox-2-line'];
        __VLS_styleScopedClasses['text-4xl'];
        __VLS_styleScopedClasses['mb-2'];
        var __VLS_slots;
        var __VLS_inheritedAttrs;
        const __VLS_refs = {};
        var $refs;
        var $el;
        return {
            attrs: {},
            slots: __VLS_slots,
            refs: $refs,
            rootEl: $el,
        };
    }
    ;
    const __VLS_self = (await import('vue')).defineComponent({
        setup() {
            return {
                theme: theme,
                ArticleCard: ArticleCard,
                NavBar: NavBar,
                category: category,
                filteredArticles: filteredArticles,
            };
        },
        name: 'ArticleCategoryList'
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        name: 'ArticleCategoryList',
        __typeEl: {},
    });
})(); /* PartiallyEnd: #3632/script.vue */
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ArticleCategoryList.vue.js.map