/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed } from 'vue';
import { useArticleStore } from '@/client/stores/article';
import avatar from '/assets/images/avatar.png';
import { theme } from '@/shared/config/theme';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const articleStore = useArticleStore();
const profile = {
    name: 'xiaoYu',
    avatar: avatar,
    description: 'A computer enthusiast',
    social: [
        { name: 'GitHub', link: 'https://github.com', icon: 'i-carbon-logo-github' },
        { name: 'Email', link: 'mailto:your@email.com', icon: 'i-carbon-email' }
    ]
};
// 计算统计数据
const stats = computed(() => {
    const articles = articleStore.articles;
    const categories = new Set(articles.map(article => article.category)).size;
    const tags = new Set(articles.flatMap(article => article.tags)).size;
    return [
        { label: 'Article', count: articles.length },
        { label: 'Category', count: categories },
        { label: 'Tags', count: tags }
    ];
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
    __VLS_styleScopedClasses['card-border'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.card.base)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.card.header.gradient)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.profile.info.wrapper)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.profile.avatar.wrapper)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.profile.avatar)), alt: ("avatar"), ...{ class: ((__VLS_ctx.theme.sidebar.profile.avatar.image)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ((__VLS_ctx.theme.sidebar.profile.info.name)) }, });
    (__VLS_ctx.profile.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ((__VLS_ctx.theme.sidebar.profile.info.description)) }, });
    (__VLS_ctx.profile.description);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.profile.stats.wrapper)) }, });
    for (const [stat] of __VLS_getVForSourceType((__VLS_ctx.stats))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((stat.label)), ...{ class: ("text-center group") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.profile.stats.item.count)) }, });
        (stat.count);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.profile.stats.item.label)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ((stat.icon)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (stat.label);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.profile.social.wrapper)) }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.profile.social))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ key: ((item.name)), href: ((item.link)), target: ("_blank"), ...{ class: ("group") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.sidebar.profile.social.item.base)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: (([
                    item.name === 'GitHub' ? 'ri-github-fill' : 'ri-mail-fill',
                    __VLS_ctx.theme.sidebar.profile.social.item.icon
                ])) }, });
    }
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['group'];
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
            profile: profile,
            stats: stats,
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
//# sourceMappingURL=ProfileCard.vue.js.map