/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed, ref } from 'vue';
import { useArticleStore } from '@/client/stores/article';
import NavBar from '../layout/NavBar.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const articleStore = useArticleStore();
const viewMode = ref('time');
// 按时间分组
const timeGroupedArticles = computed(() => {
    const groups = new Map();
    articleStore.articles.value.forEach(article => {
        const year = article.date.split('-')[0];
        if (!groups.has(year)) {
            groups.set(year, []);
        }
        groups.get(year)?.push(article);
    });
    return Array.from(groups.entries()).sort((a, b) => b[0].localeCompare(a[0]));
});
// 按分类分组
const categoryGroupedArticles = computed(() => {
    const groups = new Map();
    articleStore.articles.value.forEach(article => {
        const category = article.category || '未分类';
        if (!groups.has(category)) {
            groups.set(category, []);
        }
        groups.get(category)?.push(article);
    });
    return Array.from(groups.entries()).sort((a, b) => a[0].localeCompare(b[0]));
});
// 按标签分组
const tagGroupedArticles = computed(() => {
    const groups = new Map();
    articleStore.articles.value.forEach(article => {
        article.tags.forEach(tag => {
            if (!groups.has(tag)) {
                groups.set(tag, []);
            }
            groups.get(tag)?.push(article);
        });
    });
    return Array.from(groups.entries()).sort((a, b) => a[0].localeCompare(b[0]));
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-screen bg-gray-50 dark:bg-gray-900") }, });
    // @ts-ignore
    [NavBar,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(NavBar, new NavBar({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("max-w-7xl mx-auto px-4 py-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex space-x-4 mb-8") }, });
    for (const [mode] of __VLS_getVForSourceType(([
        { key: 'time', text: '时间归档' },
        { key: 'category', text: '分类归档' },
        { key: 'tag', text: '标签归档' }
    ]))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.viewMode = mode.key;
                } }, key: ((mode.key)), ...{ class: (([
                    'px-4 py-2 rounded-lg font-medium',
                    __VLS_ctx.viewMode === mode.key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
                ])) }, });
        (mode.text);
    }
    if (__VLS_ctx.viewMode === 'time') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-12") }, });
        for (const [[year, articles]] of __VLS_getVForSourceType((__VLS_ctx.timeGroupedArticles))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((year)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-bold text-gray-900 dark:text-white mb-6") }, });
            (year);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-6") }, });
            for (const [article] of __VLS_getVForSourceType((articles))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((article.id)), ...{ class: ("flex items-start space-x-4") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-shrink-0 w-24 text-gray-500 dark:text-gray-400") }, });
                (article.date.split('-').slice(1).join('-'));
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-grow") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-lg font-medium text-gray-900 dark:text-white") }, });
                (article.title);
                __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-1 text-gray-600 dark:text-gray-300") }, });
                (article.description);
            }
        }
    }
    else if (__VLS_ctx.viewMode === 'category') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-12") }, });
        for (const [[category, articles]] of __VLS_getVForSourceType((__VLS_ctx.categoryGroupedArticles))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((category)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center") }, });
            (category);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-3 text-sm text-gray-500 dark:text-gray-400") }, });
            (articles.length);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-6") }, });
            for (const [article] of __VLS_getVForSourceType((articles))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((article.id)), ...{ class: ("flex items-start space-x-4") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-shrink-0 w-24 text-gray-500 dark:text-gray-400") }, });
                (article.date);
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-grow") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-lg font-medium text-gray-900 dark:text-white") }, });
                (article.title);
            }
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-12") }, });
        for (const [[tag, articles]] of __VLS_getVForSourceType((__VLS_ctx.tagGroupedArticles))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((tag)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center") }, });
            (tag);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-3 text-sm text-gray-500 dark:text-gray-400") }, });
            (articles.length);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-6") }, });
            for (const [article] of __VLS_getVForSourceType((articles))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((article.id)), ...{ class: ("flex items-start space-x-4") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-shrink-0 w-24 text-gray-500 dark:text-gray-400") }, });
                (article.date);
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-grow") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-lg font-medium text-gray-900 dark:text-white") }, });
                (article.title);
            }
        }
    }
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['dark:bg-gray-900'];
    __VLS_styleScopedClasses['max-w-7xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-8'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['space-y-12'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['dark:text-white'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['w-24'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['dark:text-gray-400'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['dark:text-white'];
    __VLS_styleScopedClasses['mt-1'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['dark:text-gray-300'];
    __VLS_styleScopedClasses['space-y-12'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['dark:text-white'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['ml-3'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['dark:text-gray-400'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['w-24'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['dark:text-gray-400'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['dark:text-white'];
    __VLS_styleScopedClasses['space-y-12'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['dark:text-white'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['ml-3'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['dark:text-gray-400'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['w-24'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['dark:text-gray-400'];
    __VLS_styleScopedClasses['flex-grow'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['dark:text-white'];
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
            NavBar: NavBar,
            viewMode: viewMode,
            timeGroupedArticles: timeGroupedArticles,
            categoryGroupedArticles: categoryGroupedArticles,
            tagGroupedArticles: tagGroupedArticles,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Timeline.vue.js.map