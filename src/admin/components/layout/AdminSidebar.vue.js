/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const emit = defineEmits();
const props = defineProps();
const toggleCollapse = () => {
    emit('update:collapsed', !props.collapsed);
};
// 菜单配置
const menus = [
    {
        title: '仪表盘',
        icon: 'ri-dashboard-line',
        path: '/admin/dashboard'
    },
    {
        title: '文章管理',
        icon: 'ri-article-line',
        path: '/admin/articles'
    },
    {
        title: '分类管理',
        icon: 'ri-folder-line',
        path: '/admin/categories'
    },
    {
        title: '媒体管理',
        icon: 'ri-image-line',
        path: '/admin/media'
    }
];
// 添加路由链接点击处理
const handleMenuClick = () => {
    // 点击菜单项后自动收起侧边栏
    emit('update:collapsed', true);
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
    __VLS_styleScopedClasses['collapse-btn'];
    __VLS_styleScopedClasses['menu-item'];
    __VLS_styleScopedClasses['sidebar-nav'];
    __VLS_styleScopedClasses['sidebar-nav'];
    __VLS_styleScopedClasses['sidebar-nav'];
    __VLS_styleScopedClasses['sidebar-nav'];
    __VLS_styleScopedClasses['sidebar-nav'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)({ ...{ class: ("sidebar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sidebar-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-lg font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleCollapse) }, ...{ class: ("collapse-btn") }, title: ((__VLS_ctx.collapsed ? '展开菜单' : '收起菜单')), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i)({ ...{ class: ("ri-arrow-left-s-line text-xl transition-transform duration-300") }, ...{ class: (({ 'rotate-180': __VLS_ctx.collapsed })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("sidebar-nav") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("space-y-1") }, });
    for (const [menu] of __VLS_getVForSourceType((__VLS_ctx.menus))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((menu.path)), });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, to: ((menu.path)), ...{ class: ("menu-item") }, ...{ class: (({ active: __VLS_ctx.route.path === menu.path })) }, }));
        const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, to: ((menu.path)), ...{ class: ("menu-item") }, ...{ class: (({ active: __VLS_ctx.route.path === menu.path })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        let __VLS_6;
        const __VLS_7 = {
            onClick: (__VLS_ctx.handleMenuClick)
        };
        let __VLS_3;
        let __VLS_4;
        __VLS_elementAsFunction(__VLS_intrinsicElements.i)({ ...{ class: ((menu.icon)) }, ...{ class: ("menu-icon") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("menu-text") }, });
        (menu.title);
        __VLS_nonNullable(__VLS_5.slots).default;
        var __VLS_5;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sidebar-footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-xs text-gray-500 dark:text-gray-400") }, });
    __VLS_styleScopedClasses['sidebar'];
    __VLS_styleScopedClasses['sidebar-header'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['collapse-btn'];
    __VLS_styleScopedClasses['ri-arrow-left-s-line'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['transition-transform'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['rotate-180'];
    __VLS_styleScopedClasses['sidebar-nav'];
    __VLS_styleScopedClasses['space-y-1'];
    __VLS_styleScopedClasses['menu-item'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['menu-icon'];
    __VLS_styleScopedClasses['menu-text'];
    __VLS_styleScopedClasses['sidebar-footer'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['dark:text-gray-400'];
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
            route: route,
            toggleCollapse: toggleCollapse,
            menus: menus,
            handleMenuClick: handleMenuClick,
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
//# sourceMappingURL=AdminSidebar.vue.js.map