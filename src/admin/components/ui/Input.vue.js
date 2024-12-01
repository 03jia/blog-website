/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const __VLS_props = defineProps();
    const __VLS_emit = defineEmits(); /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_fnComponent = (await import('vue')).defineComponent({
        __typeEmits: {},
    });
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-wrapper") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ ...{ onInput: (...[$event]) => {
                    __VLS_ctx.$emit('update:modelValue', $event.target.value);
                } }, type: ((__VLS_ctx.type)), value: ((__VLS_ctx.modelValue)), placeholder: ((__VLS_ctx.placeholder)), ...{ class: ("input") }, ...{ class: (({ 'input-error': __VLS_ctx.error })) }, });
        if (__VLS_ctx.error) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("error-message") }, });
            (__VLS_ctx.error);
        }
        __VLS_styleScopedClasses['input-wrapper'];
        __VLS_styleScopedClasses['input'];
        __VLS_styleScopedClasses['input-error'];
        __VLS_styleScopedClasses['error-message'];
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
        __typeEmits: {},
        __typeProps: {},
        name: 'Input'
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        __typeEmits: {},
        __typeProps: {},
        name: 'Input',
        __typeEl: {},
    });
})(); /* PartiallyEnd: #3632/script.vue */
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Input.vue.js.map