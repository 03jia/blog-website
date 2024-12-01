/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed } from 'vue';
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const props = withDefaults(defineProps(), {
        type: 'primary',
        size: 'md',
        loading: false,
        disabled: false
    });
    const buttonClasses = computed(() => ({
        'btn': true,
        'btn-primary': props.type === 'primary',
        'btn-secondary': props.type === 'secondary',
        'btn-danger': props.type === 'danger',
        'btn-sm': props.size === 'sm',
        'btn-md': props.size === 'md',
        'btn-lg': props.size === 'lg',
        'btn-loading': props.loading,
        'btn-disabled': props.disabled
    })); /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_withDefaultsArg = (function (t) { return t; })({
        type: 'primary',
        size: 'md',
        loading: false,
        disabled: false
    });
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ((__VLS_ctx.buttonClasses)) }, disabled: ((__VLS_ctx.disabled || __VLS_ctx.loading)), });
        if (__VLS_ctx.loading) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("mr-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.i)({ ...{ class: ("ri-loader-4-line animate-spin") }, });
        }
        var __VLS_0 = {};
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['ri-loader-4-line'];
        __VLS_styleScopedClasses['animate-spin'];
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
                buttonClasses: buttonClasses,
            };
        },
        __typeProps: {},
        props: {},
        name: 'Button'
    });
    const __VLS_component = (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        __typeProps: {},
        props: {},
        name: 'Button',
        __typeEl: {},
    });
    return {};
})(); /* PartiallyEnd: #3632/script.vue */
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Button.vue.js.map