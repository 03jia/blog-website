/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed, onMounted } from 'vue';
import { useArticleStore } from '@/client/stores/article';
import { theme } from '@/shared/config/theme';
import { IMAGE_PATHS } from '@/shared/config/assets';
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const articleStore = useArticleStore();
    // 使用 computed 对文章进行排序
    const articles = computed(() => {
        return [...articleStore.articles]
            .filter(article => article.visible !== false)
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    });
    // 处理图片加载失败
    const handleImageError = (e) => {
        const img = e.target;
        img.src = IMAGE_PATHS.defaultCover;
    };
    onMounted(async () => {
        if (articleStore.articles.length === 0) {
            await articleStore.fetchArticles();
        }
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
        // CSS variable injection 
        // CSS variable injection end 
        let __VLS_resolvedLocalAndGlobalComponents;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-2 gap-6") }, });
        for (const [article, index] of __VLS_getVForSourceType((__VLS_ctx.articles))) {
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
            /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((article.id)), to: ((`/article/${encodeURIComponent(article.title)}`)), ...{ class: ("block group") }, }));
            const __VLS_2 = __VLS_1({ key: ((article.id)), to: ((`/article/${encodeURIComponent(article.title)}`)), ...{ class: ("block group") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            __VLS_elementAsFunction(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({ ...{ class: (([__VLS_ctx.theme.card.base, __VLS_ctx.theme.card.hover, 'cursor-pointer'])) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.articleCard.image.wrapper)) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onError: (__VLS_ctx.handleImageError) }, src: ((__VLS_ctx.IMAGE_PATHS.testImages((index % 5) + 1))), alt: ((article.title)), ...{ class: ("w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.articleCard.image.overlay)) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.articleCard.content.wrapper)) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ((__VLS_ctx.theme.articleCard.content.title)) }, });
            (article.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ((__VLS_ctx.theme.articleCard.content.description)) }, });
            (article.description);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.articleCard.content.meta.wrapper)) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-4") }, ...{ class: ((__VLS_ctx.theme.articleCard.content.meta.text)) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex items-center") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-calendar-line mr-1.5") }, ...{ class: ((__VLS_ctx.theme.articleCard.content.meta.icon)) }, });
            (article.date);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex items-center") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-eye-line mr-1.5") }, ...{ class: ((__VLS_ctx.theme.articleCard.content.meta.icon)) }, });
            (article.views);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.articleCard.content.tags.wrapper)) }, });
            for (const [tag] of __VLS_getVForSourceType((article.tags))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((tag)), ...{ class: ((__VLS_ctx.theme.articleCard.content.tags.tag)) }, });
                (tag);
            }
            __VLS_nonNullable(__VLS_5.slots).default;
            var __VLS_5;
        }
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-2'];
        __VLS_styleScopedClasses['gap-6'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['group'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['transform'];
        __VLS_styleScopedClasses['group-hover:scale-105'];
        __VLS_styleScopedClasses['transition-transform'];
        __VLS_styleScopedClasses['duration-500'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['space-x-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ri-calendar-line'];
        __VLS_styleScopedClasses['mr-1.5'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ri-eye-line'];
        __VLS_styleScopedClasses['mr-1.5'];
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
                IMAGE_PATHS: IMAGE_PATHS,
                articles: articles,
                handleImageError: handleImageError,
            };
        },
        name: 'ArticleList'
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        name: 'ArticleList',
        __typeEl: {},
    });
})(); /* PartiallyEnd: #3632/script.vue */
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ArticleList.vue.js.map