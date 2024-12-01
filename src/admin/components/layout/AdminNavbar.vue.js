/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const emit = defineEmits();
const handleLogout = () => {
    localStorage.removeItem('admin-token');
    router.push('/admin/login');
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("navbar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navbar-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.$emit('toggle-sidebar');
            } }, ...{ class: ("nav-icon-btn") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i)({ ...{ class: ("ri-menu-line text-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i)({ ...{ class: ("ri-code-box-line text-2xl text-blue-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("nav-icon-btn indicator") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i)({ ...{ class: ("ri-notification-3-line text-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span)({ ...{ class: ("indicator-dot") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("nav-icon-btn") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i)({ ...{ class: ("ri-sun-line text-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.handleLogout) }, ...{ class: ("user-btn") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("avatar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i)({ ...{ class: ("ri-user-line") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i)({ ...{ class: ("ri-logout-box-r-line ml-2") }, });
    __VLS_styleScopedClasses['navbar'];
    __VLS_styleScopedClasses['navbar-container'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['nav-icon-btn'];
    __VLS_styleScopedClasses['ri-menu-line'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['ri-code-box-line'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['text-blue-500'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['bg-gradient-to-r'];
    __VLS_styleScopedClasses['from-blue-500'];
    __VLS_styleScopedClasses['to-purple-500'];
    __VLS_styleScopedClasses['bg-clip-text'];
    __VLS_styleScopedClasses['text-transparent'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-3'];
    __VLS_styleScopedClasses['nav-icon-btn'];
    __VLS_styleScopedClasses['indicator'];
    __VLS_styleScopedClasses['ri-notification-3-line'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['indicator-dot'];
    __VLS_styleScopedClasses['nav-icon-btn'];
    __VLS_styleScopedClasses['ri-sun-line'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['user-btn'];
    __VLS_styleScopedClasses['avatar'];
    __VLS_styleScopedClasses['ri-user-line'];
    __VLS_styleScopedClasses['ml-2'];
    __VLS_styleScopedClasses['ri-logout-box-r-line'];
    __VLS_styleScopedClasses['ml-2'];
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
            handleLogout: handleLogout,
        };
    },
    __typeEmits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AdminNavbar.vue.js.map