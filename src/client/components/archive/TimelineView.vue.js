/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed } from 'vue';
import { CalendarIcon, DocumentTextIcon, ClockIcon, TagIcon } from '@heroicons/vue/24/outline';
import { RouterLink } from 'vue-router';
import { theme } from '@/shared/config/theme';
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const props = defineProps();
    // 按年份分组
    const groupedArticles = computed(() => {
        const groups = new Map();
        if (!props.articles)
            return [];
        props.articles
            .filter(article => article && article.createdAt)
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .forEach(article => {
            const year = new Date(article.createdAt).getFullYear().toString();
            if (!groups.has(year)) {
                groups.set(year, []);
            }
            groups.get(year)?.push(article);
        });
        return Array.from(groups.entries());
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.wrapper)) }, });
        for (const [[year, articles]] of __VLS_getVForSourceType((__VLS_ctx.groupedArticles))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((year)), ...{ class: ((__VLS_ctx.theme.archive.timeline.yearSection.wrapper)) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.yearSection.header.wrapper)) }, });
            const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.CalendarIcon;
            /** @type { [typeof __VLS_components.CalendarIcon, ] } */
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ((__VLS_ctx.theme.archive.timeline.yearSection.header.icon)) }, }));
            const __VLS_2 = __VLS_1({ ...{ class: ((__VLS_ctx.theme.archive.timeline.yearSection.header.icon)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.yearSection.header.title)) }, });
            (year);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.yearSection.content)) }, });
            for (const [article] of __VLS_getVForSourceType((articles))) {
                const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
                /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
                // @ts-ignore
                const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((article.id)), to: ((`/article/${article.id}`)), ...{ class: ((__VLS_ctx.theme.archive.timeline.article.wrapper)) }, }));
                const __VLS_8 = __VLS_7({ key: ((article.id)), to: ((`/article/${article.id}`)), ...{ class: ((__VLS_ctx.theme.archive.timeline.article.wrapper)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.line.wrapper)) }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.line.dot)) }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.wrapper)) }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.header.wrapper)) }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.header.title.wrapper)) }, });
                const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.DocumentTextIcon;
                /** @type { [typeof __VLS_components.DocumentTextIcon, ] } */
                // @ts-ignore
                const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.header.title.icon)) }, }));
                const __VLS_14 = __VLS_13({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.header.title.icon)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
                __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.header.title.text)) }, });
                (article.title);
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.header.date.wrapper)) }, });
                const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ClockIcon;
                /** @type { [typeof __VLS_components.ClockIcon, ] } */
                // @ts-ignore
                const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.header.date.icon)) }, }));
                const __VLS_20 = __VLS_19({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.header.date.icon)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
                __VLS_elementAsFunction(__VLS_intrinsicElements.time, __VLS_intrinsicElements.time)({ datetime: ((article.createdAt)), });
                (article.createdAt);
                __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.description)) }, });
                (article.description);
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.tags.wrapper)) }, });
                const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.TagIcon;
                /** @type { [typeof __VLS_components.TagIcon, ] } */
                // @ts-ignore
                const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.tags.icon)) }, }));
                const __VLS_26 = __VLS_25({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.tags.icon)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.tags.list)) }, });
                for (const [tag] of __VLS_getVForSourceType((article.tags))) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((tag)), ...{ class: ((__VLS_ctx.theme.archive.timeline.article.card.tags.tag)) }, });
                    (tag);
                }
                __VLS_nonNullable(__VLS_11.slots).default;
                var __VLS_11;
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
                CalendarIcon: CalendarIcon,
                DocumentTextIcon: DocumentTextIcon,
                ClockIcon: ClockIcon,
                TagIcon: TagIcon,
                RouterLink: RouterLink,
                theme: theme,
                groupedArticles: groupedArticles,
            };
        },
        __typeProps: {},
        name: 'TimelineView'
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        __typeProps: {},
        name: 'TimelineView',
        __typeEl: {},
    });
})(); /* PartiallyEnd: #3632/script.vue */
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=TimelineView.vue.js.map