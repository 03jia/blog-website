/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, watch } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const emit = defineEmits();
const inputValue = ref('');
const tags = ref(props.modelValue);
// 监听 props 变化
watch(() => props.modelValue, (newValue) => {
    tags.value = newValue;
});
// 监听标签变化并触发更新
watch(tags, (newValue) => {
    emit('update:modelValue', newValue);
});
const addTag = () => {
    const value = inputValue.value.trim();
    if (value && !tags.value.includes(value)) {
        tags.value = [...tags.value, value];
        inputValue.value = '';
    }
};
const removeTag = (index) => {
    tags.value = tags.value.filter((_, i) => i !== index);
};
const handleKeydown = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTag();
    }
    else if (e.key === 'Backspace' && !inputValue.value && tags.value.length > 0) {
        tags.value = tags.value.slice(0, -1);
    }
}; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("\u0066\u006c\u0065\u0078\u0020\u0066\u006c\u0065\u0078\u002d\u0077\u0072\u0061\u0070\u0020\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u0067\u0061\u0070\u002d\u0032\u0020\u0070\u002d\u0032\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u006c\u0067\u0020\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0066\u006f\u0063\u0075\u0073\u002d\u0077\u0069\u0074\u0068\u0069\u006e\u003a\u0072\u0069\u006e\u0067\u002d\u0032\u0020\u0066\u006f\u0063\u0075\u0073\u002d\u0077\u0069\u0074\u0068\u0069\u006e\u003a\u0072\u0069\u006e\u0067\u002d\u0062\u006c\u0075\u0065\u002d\u0035\u0030\u0030\u0020\u0066\u006f\u0063\u0075\u0073\u002d\u0077\u0069\u0074\u0068\u0069\u006e\u003a\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0062\u006c\u0075\u0065\u002d\u0035\u0030\u0030\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u0067\u002d\u0077\u0068\u0069\u0074\u0065\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0038\u0030\u0030\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0067\u0072\u0061\u0079\u002d\u0032\u0030\u0030\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0067\u0072\u0061\u0079\u002d\u0037\u0030\u0030\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0061\u006c\u006c\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0032\u0030\u0030") }, });
    for (const [tag, index] of __VLS_getVForSourceType((__VLS_ctx.tags))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((index)), ...{ class: ("\u0066\u006c\u0065\u0078\u0020\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u0067\u0061\u0070\u002d\u0031\u0020\u0070\u0078\u002d\u0032\u0020\u0070\u0079\u002d\u0031\u0020\u0074\u0065\u0078\u0074\u002d\u0073\u006d\u0020\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u0067\u002d\u0067\u0072\u0061\u0064\u0069\u0065\u006e\u0074\u002d\u0074\u006f\u002d\u0072\u0020\u0066\u0072\u006f\u006d\u002d\u0062\u006c\u0075\u0065\u002d\u0035\u0030\u0030\u002f\u0031\u0030\u0020\u0074\u006f\u002d\u0070\u0075\u0072\u0070\u006c\u0065\u002d\u0035\u0030\u0030\u002f\u0031\u0030\u0020\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0065\u0078\u0074\u002d\u0062\u006c\u0075\u0065\u002d\u0036\u0030\u0030\u0020\u0064\u0061\u0072\u006b\u003a\u0074\u0065\u0078\u0074\u002d\u0062\u006c\u0075\u0065\u002d\u0034\u0030\u0030\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0066\u0075\u006c\u006c\u0020\u0067\u0072\u006f\u0075\u0070\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0061\u006c\u006c\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0032\u0030\u0030\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0066\u0072\u006f\u006d\u002d\u0062\u006c\u0075\u0065\u002d\u0035\u0030\u0030\u002f\u0032\u0030\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0074\u006f\u002d\u0070\u0075\u0072\u0070\u006c\u0065\u002d\u0035\u0030\u0030\u002f\u0032\u0030") }, });
        (tag);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.removeTag(index);
                } }, type: ("button"), ...{ class: ("opacity-0 group-hover:opacity-100 hover:text-red-500 transition-all") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i)({ ...{ class: ("ri-close-line") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ ...{ onKeydown: (__VLS_ctx.handleKeydown) }, value: ((__VLS_ctx.inputValue)), type: ("text"), placeholder: ("输入标签后按回车添加"), ...{ class: ("\u0066\u006c\u0065\u0078\u002d\u0031\u0020\u006d\u0069\u006e\u002d\u0077\u002d\u005b\u0031\u0032\u0030\u0070\u0078\u005d\u0020\u006f\u0075\u0074\u006c\u0069\u006e\u0065\u002d\u006e\u006f\u006e\u0065\u0020\u0062\u0067\u002d\u0074\u0072\u0061\u006e\u0073\u0070\u0061\u0072\u0065\u006e\u0074\u0020\u0074\u0065\u0078\u0074\u002d\u0073\u006d\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0037\u0030\u0030\u0020\u0064\u0061\u0072\u006b\u003a\u0074\u0065\u0078\u0074\u002d\u0067\u0072\u0061\u0079\u002d\u0033\u0030\u0030\u0020\u0070\u006c\u0061\u0063\u0065\u0068\u006f\u006c\u0064\u0065\u0072\u002d\u0067\u0072\u0061\u0079\u002d\u0034\u0030\u0030\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0064\u0061\u0072\u006b\u003a\u0070\u006c\u0061\u0063\u0065\u0068\u006f\u006c\u0064\u0065\u0072\u002d\u0067\u0072\u0061\u0079\u002d\u0035\u0030\u0030") }, });
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['focus-within:ring-2'];
    __VLS_styleScopedClasses['focus-within:ring-blue-500'];
    __VLS_styleScopedClasses['focus-within:border-blue-500'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['dark:bg-gray-800'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['dark:border-gray-700'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-1'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['bg-gradient-to-r'];
    __VLS_styleScopedClasses['from-blue-500/10'];
    __VLS_styleScopedClasses['to-purple-500/10'];
    __VLS_styleScopedClasses['text-blue-600'];
    __VLS_styleScopedClasses['dark:text-blue-400'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['hover:from-blue-500/20'];
    __VLS_styleScopedClasses['hover:to-purple-500/20'];
    __VLS_styleScopedClasses['opacity-0'];
    __VLS_styleScopedClasses['group-hover:opacity-100'];
    __VLS_styleScopedClasses['hover:text-red-500'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['ri-close-line'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['min-w-[120px]'];
    __VLS_styleScopedClasses['outline-none'];
    __VLS_styleScopedClasses['bg-transparent'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['dark:text-gray-300'];
    __VLS_styleScopedClasses['placeholder-gray-400'];
    __VLS_styleScopedClasses['dark:placeholder-gray-500'];
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
            inputValue: inputValue,
            tags: tags,
            removeTag: removeTag,
            handleKeydown: handleKeydown,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=TagInput.vue.js.map