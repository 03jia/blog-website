/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed } from 'vue';
import { theme } from '@/shared/config/theme';
import { FolderIcon, DocumentTextIcon } from '@heroicons/vue/24/outline';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
// 按分类分组文章
const categories = computed(() => {
    const groups = new Map();
    props.articles.forEach(article => {
        if (!groups.has(article.category)) {
            groups.set(article.category, []);
        }
        groups.get(article.category)?.push(article);
    });
    return Array.from(groups.entries()).map(([name, articles]) => ({
        name,
        articles: articles.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }));
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.category.wrapper)) }, });
    for (const [category] of __VLS_getVForSourceType((__VLS_ctx.categories))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((category.name)), ...{ class: ((__VLS_ctx.theme.archive.category.card.wrapper)) }, });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ((`/articles?category=${category.name}`)), ...{ class: ((__VLS_ctx.theme.archive.category.card.header.wrapper)) }, }));
        const __VLS_2 = __VLS_1({ to: ((`/articles?category=${category.name}`)), ...{ class: ((__VLS_ctx.theme.archive.category.card.header.wrapper)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.category.card.header.title.wrapper)) }, });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.FolderIcon;
        /** @type { [typeof __VLS_components.FolderIcon, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ((__VLS_ctx.theme.archive.category.card.header.title.icon)) }, }));
        const __VLS_8 = __VLS_7({ ...{ class: ((__VLS_ctx.theme.archive.category.card.header.title.icon)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ((__VLS_ctx.theme.archive.category.card.header.title.text)) }, });
        (category.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ((__VLS_ctx.theme.archive.category.card.header.count)) }, });
        (category.articles.length);
        __VLS_nonNullable(__VLS_5.slots).default;
        var __VLS_5;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.category.card.list.wrapper)) }, });
        for (const [article] of __VLS_getVForSourceType((category.articles))) {
            const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
            /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
            // @ts-ignore
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ key: ((article.id)), to: ((`/article/${article.id}`)), ...{ class: ((__VLS_ctx.theme.archive.category.card.list.item.wrapper)) }, }));
            const __VLS_14 = __VLS_13({ key: ((article.id)), to: ((`/article/${article.id}`)), ...{ class: ((__VLS_ctx.theme.archive.category.card.list.item.wrapper)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.category.card.list.item.title.wrapper)) }, });
            const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.DocumentTextIcon;
            /** @type { [typeof __VLS_components.DocumentTextIcon, ] } */
            // @ts-ignore
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ((__VLS_ctx.theme.archive.category.card.list.item.title.icon)) }, }));
            const __VLS_20 = __VLS_19({ ...{ class: ((__VLS_ctx.theme.archive.category.card.list.item.title.icon)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ((__VLS_ctx.theme.archive.category.card.list.item.title.text)) }, });
            (article.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.time, __VLS_intrinsicElements.time)({ datetime: ((article.createdAt)), ...{ class: ((__VLS_ctx.theme.archive.category.card.list.item.date)) }, });
            (article.createdAt);
            __VLS_nonNullable(__VLS_17.slots).default;
            var __VLS_17;
        }
    }
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
            FolderIcon: FolderIcon,
            DocumentTextIcon: DocumentTextIcon,
            categories: categories,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=CategoryView.vue.js.map