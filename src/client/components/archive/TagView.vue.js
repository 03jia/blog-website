/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, computed } from 'vue';
import { theme } from '@/client/config/theme';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const selectedTag = ref('');
// 获取所有标签
const tags = computed(() => {
    const tagSet = new Set();
    props.articles.forEach(article => {
        article.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet);
});
// 按选中的标签筛选文章
const filteredArticles = computed(() => {
    if (!selectedTag.value)
        return [];
    return props.articles
        .filter(article => article.tags.includes(selectedTag.value))
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
});
const selectTag = (tag) => {
    selectedTag.value = tag === selectedTag.value ? '' : tag;
}; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.tags.wrapper)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.tags.header.wrapper)) }, });
    for (const [tag] of __VLS_getVForSourceType((__VLS_ctx.tags))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.selectTag(tag);
                } }, key: ((tag)), ...{ class: (([
                    __VLS_ctx.theme.archive.tags.header.tag,
                    __VLS_ctx.selectedTag === tag ? __VLS_ctx.theme.archive.tags.header.active : ''
                ])) }, });
        (tag);
    }
    if (__VLS_ctx.selectedTag) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.tags.content.wrapper)) }, });
        for (const [article] of __VLS_getVForSourceType((__VLS_ctx.filteredArticles))) {
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
            /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((article.id)), to: ((`/article/${encodeURIComponent(article.title)}`)), ...{ class: ("group") }, ...{ class: ((__VLS_ctx.theme.archive.tags.content.article.wrapper)) }, }));
            const __VLS_2 = __VLS_1({ key: ((article.id)), to: ((`/article/${encodeURIComponent(article.title)}`)), ...{ class: ("group") }, ...{ class: ((__VLS_ctx.theme.archive.tags.content.article.wrapper)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ((__VLS_ctx.theme.archive.tags.content.article.title)) }, });
            (article.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.tags.content.article.meta)) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.time, __VLS_intrinsicElements.time)({ datetime: ((article.createdAt)), });
            (article.createdAt);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex items-center") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-eye-line mr-1.5 text-blue-400") }, });
            (article.views);
            __VLS_nonNullable(__VLS_5.slots).default;
            var __VLS_5;
        }
    }
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['ri-eye-line'];
    __VLS_styleScopedClasses['mr-1.5'];
    __VLS_styleScopedClasses['text-blue-400'];
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
            selectedTag: selectedTag,
            tags: tags,
            filteredArticles: filteredArticles,
            selectTag: selectTag,
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
//# sourceMappingURL=TagView.vue.js.map