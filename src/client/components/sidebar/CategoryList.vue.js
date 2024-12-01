/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed } from 'vue';
import { useArticleStore } from '@/client/stores/article';
import { theme } from '@/shared/config/theme';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const articleStore = useArticleStore();
// 计算分类及其文章数量
const categories = computed(() => {
    const categoryMap = new Map();
    articleStore.articles.forEach(article => {
        const count = categoryMap.get(article.category) || 0;
        categoryMap.set(article.category, count + 1);
    });
    return Array.from(categoryMap.entries()).map(([name, count]) => ({
        name,
        count
    })).sort((a, b) => b.count - a.count);
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
    __VLS_styleScopedClasses['divide-y'];
    __VLS_styleScopedClasses['divide-y'];
    __VLS_styleScopedClasses['divide-y'];
    __VLS_styleScopedClasses['divide-y'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.card.base)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.card.header.gradient)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.card.header.wrapper)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ((__VLS_ctx.theme.sidebar.card.header.title)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-folder-2-line") }, ...{ class: ((__VLS_ctx.theme.sidebar.card.header.icon)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.card.content.wrapper)) }, });
    for (const [category] of __VLS_getVForSourceType((__VLS_ctx.categories))) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((category.name)), to: ((`/articles?category=${category.name}`)), ...{ class: ((__VLS_ctx.theme.sidebar.category.item.base)) }, }));
        const __VLS_2 = __VLS_1({ key: ((category.name)), to: ((`/articles?category=${category.name}`)), ...{ class: ((__VLS_ctx.theme.sidebar.category.item.base)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center flex-1 min-w-0") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.category.item.icon)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ((__VLS_ctx.theme.sidebar.category.item.text)) }, ...{ class: ("truncate") }, });
        (category.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ((__VLS_ctx.theme.sidebar.category.item.count)) }, });
        (category.count);
        __VLS_nonNullable(__VLS_5.slots).default;
        var __VLS_5;
    }
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['ri-folder-2-line'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['min-w-0'];
    __VLS_styleScopedClasses['truncate'];
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
            categories: categories,
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
//# sourceMappingURL=CategoryList.vue.js.map