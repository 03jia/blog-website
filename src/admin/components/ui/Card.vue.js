/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const __VLS_props = defineProps(); /* PartiallyEnd: #3632/scriptSetup.vue */
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
        if (__VLS_ctx.title) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("card-title") }, });
            (__VLS_ctx.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-actions") }, });
            var __VLS_0 = {};
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((['card-body', { 'card-loading': __VLS_ctx.loading }])) }, });
        if (__VLS_ctx.loading) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-loading-spinner") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.i)({ ...{ class: ("ri-loader-4-line animate-spin text-2xl") }, });
        }
        var __VLS_1 = {};
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['card-header'];
        __VLS_styleScopedClasses['card-title'];
        __VLS_styleScopedClasses['card-actions'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['card-loading'];
        __VLS_styleScopedClasses['card-loading-spinner'];
        __VLS_styleScopedClasses['ri-loader-4-line'];
        __VLS_styleScopedClasses['animate-spin'];
        __VLS_styleScopedClasses['text-2xl'];
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
            return {};
        },
        __typeProps: {},
        name: 'Card'
    });
    const __VLS_component = (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        __typeProps: {},
        name: 'Card',
        __typeEl: {},
    });
    return {};
})(); /* PartiallyEnd: #3632/script.vue */
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Card.vue.js.map