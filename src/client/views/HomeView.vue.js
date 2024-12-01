/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, nextTick } from 'vue';
import NavBar from '@/client/components/layout/ClientNavBar.vue';
import ArticleList from '@/client/components/blog/ArticleList.vue';
import Sidebar from '@/client/components/sidebar/Sidebar.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const showContent = ref(false);
const startReading = () => {
    // 先显示内容
    showContent.value = true;
    // 使用 nextTick 等待 DOM 更新后再滚动
    nextTick(() => {
        const contentElement = document.querySelector('#content');
        if (contentElement) {
            contentElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
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
    __VLS_styleScopedClasses['card-border'];
    __VLS_styleScopedClasses['card-border'];
    __VLS_styleScopedClasses['card-border'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-screen") }, });
    // @ts-ignore
    [NavBar,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(NavBar, new NavBar({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("hero-section min-h-screen relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0 bg-black/50 backdrop-blur-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 pt-24") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative mb-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative w-32 h-32") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-[3px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-[2px] hover:scale-105 transition-transform duration-200") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/assets/images/avatar.png"), alt: ("Avatar"), ...{ class: ("w-full h-full rounded-full object-cover will-change-transform") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-6xl md:text-7xl font-bold mb-4 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xl md:text-2xl text-gray-300 mb-12 text-center flex items-center justify-center space-x-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-code-line text-blue-400 text-3xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.startReading) }, href: ("#content"), ...{ class: ("card-border rounded-xl group relative overflow-hidden hover:bg-white/10 transition-all duration-200") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-4 mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-lightbulb-flash-line text-3xl text-yellow-400 transition-transform duration-200 group-hover:scale-105") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-2xl font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-300 flex items-center space-x-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-shield-check-line text-green-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("\u0072\u0069\u002d\u0061\u0072\u0072\u006f\u0077\u002d\u0072\u0069\u0067\u0068\u0074\u002d\u006c\u0069\u006e\u0065\u0020\u0061\u0062\u0073\u006f\u006c\u0075\u0074\u0065\u0020\u0062\u006f\u0074\u0074\u006f\u006d\u002d\u0036\u0020\u0072\u0069\u0067\u0068\u0074\u002d\u0036\u0020\u0074\u0065\u0078\u0074\u002d\u0078\u006c\u0020\u006f\u0070\u0061\u0063\u0069\u0074\u0079\u002d\u0030\u0020\u0067\u0072\u006f\u0075\u0070\u002d\u0068\u006f\u0076\u0065\u0072\u003a\u006f\u0070\u0061\u0063\u0069\u0074\u0079\u002d\u0031\u0030\u0030\u0020\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0072\u0061\u006e\u0073\u0066\u006f\u0072\u006d\u0020\u0074\u0072\u0061\u006e\u0073\u006c\u0061\u0074\u0065\u002d\u0078\u002d\u0032\u0020\u0067\u0072\u006f\u0075\u0070\u002d\u0068\u006f\u0076\u0065\u0072\u003a\u0074\u0072\u0061\u006e\u0073\u006c\u0061\u0074\u0065\u002d\u0078\u002d\u0030\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0061\u006c\u006c\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0032\u0030\u0030") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.startReading) }, href: ("#content"), ...{ class: ("card-border rounded-xl group relative overflow-hidden hover:bg-white/20 transition-all duration-300") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-4 mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-book-read-line text-3xl text-purple-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-2xl font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-300 flex items-center space-x-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-bookmark-line text-blue-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("\u0072\u0069\u002d\u0061\u0072\u0072\u006f\u0077\u002d\u0072\u0069\u0067\u0068\u0074\u002d\u006c\u0069\u006e\u0065\u0020\u0061\u0062\u0073\u006f\u006c\u0075\u0074\u0065\u0020\u0062\u006f\u0074\u0074\u006f\u006d\u002d\u0036\u0020\u0072\u0069\u0067\u0068\u0074\u002d\u0036\u0020\u0074\u0065\u0078\u0074\u002d\u0078\u006c\u0020\u006f\u0070\u0061\u0063\u0069\u0074\u0079\u002d\u0030\u0020\u0067\u0072\u006f\u0075\u0070\u002d\u0068\u006f\u0076\u0065\u0072\u003a\u006f\u0070\u0061\u0063\u0069\u0074\u0079\u002d\u0031\u0030\u0030\u0020\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0072\u0061\u006e\u0073\u0066\u006f\u0072\u006d\u0020\u0074\u0072\u0061\u006e\u0073\u006c\u0061\u0074\u0065\u002d\u0078\u002d\u0033\u0020\u0067\u0072\u006f\u0075\u0070\u002d\u0068\u006f\u0076\u0065\u0072\u003a\u0074\u0072\u0061\u006e\u0073\u006c\u0061\u0074\u0065\u002d\u0078\u002d\u0030\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0061\u006c\u006c\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0033\u0030\u0030") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.startReading) }, ...{ class: ("flex flex-col items-center text-gray-400 hover:text-white group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("mb-2 flex items-center space-x-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-mouse-line text-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-arrow-down-line text-2xl animate-bounce") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("content"), ...{ class: ("relative z-10 bg-transparent") }, });
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (__VLS_ctx.showContent) }, null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("max-w-7xl mx-auto px-4 py-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col lg:flex-row justify-center gap-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lg:w-[800px] flex-shrink-0") }, });
    // @ts-ignore
    [ArticleList,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(ArticleList, new ArticleList({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lg:w-[320px] flex-shrink-0") }, });
    // @ts-ignore
    [Sidebar,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(Sidebar, new Sidebar({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['hero-section'];
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['bg-black/50'];
    __VLS_styleScopedClasses['backdrop-blur-sm'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['z-10'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['pt-24'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['mb-12'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['w-32'];
    __VLS_styleScopedClasses['h-32'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['bg-gradient-to-r'];
    __VLS_styleScopedClasses['from-blue-500'];
    __VLS_styleScopedClasses['to-purple-500'];
    __VLS_styleScopedClasses['opacity-75'];
    __VLS_styleScopedClasses['blur-md'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-[3px]'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['bg-gradient-to-r'];
    __VLS_styleScopedClasses['from-blue-600'];
    __VLS_styleScopedClasses['to-purple-600'];
    __VLS_styleScopedClasses['p-[2px]'];
    __VLS_styleScopedClasses['hover:scale-105'];
    __VLS_styleScopedClasses['transition-transform'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['will-change-transform'];
    __VLS_styleScopedClasses['text-6xl'];
    __VLS_styleScopedClasses['md:text-7xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['md:text-2xl'];
    __VLS_styleScopedClasses['text-gray-300'];
    __VLS_styleScopedClasses['mb-12'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['ri-code-line'];
    __VLS_styleScopedClasses['text-blue-400'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['md:grid-cols-2'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['max-w-4xl'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['card-border'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['hover:bg-white/10'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['p-8'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['ri-lightbulb-flash-line'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['text-yellow-400'];
    __VLS_styleScopedClasses['transition-transform'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['group-hover:scale-105'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-gray-300'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['ri-shield-check-line'];
    __VLS_styleScopedClasses['text-green-400'];
    __VLS_styleScopedClasses['ri-arrow-right-line'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-6'];
    __VLS_styleScopedClasses['right-6'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['opacity-0'];
    __VLS_styleScopedClasses['group-hover:opacity-100'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['translate-x-2'];
    __VLS_styleScopedClasses['group-hover:translate-x-0'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['card-border'];
    __VLS_styleScopedClasses['rounded-xl'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['hover:bg-white/20'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['p-8'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['ri-book-read-line'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['text-purple-400'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-gray-300'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['ri-bookmark-line'];
    __VLS_styleScopedClasses['text-blue-400'];
    __VLS_styleScopedClasses['ri-arrow-right-line'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-6'];
    __VLS_styleScopedClasses['right-6'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['opacity-0'];
    __VLS_styleScopedClasses['group-hover:opacity-100'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['translate-x-3'];
    __VLS_styleScopedClasses['group-hover:translate-x-0'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['mt-16'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['text-gray-400'];
    __VLS_styleScopedClasses['hover:text-white'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['ri-mouse-line'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['ri-arrow-down-line'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['animate-bounce'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['z-10'];
    __VLS_styleScopedClasses['bg-transparent'];
    __VLS_styleScopedClasses['max-w-7xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-16'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['lg:flex-row'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['lg:w-[800px]'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['lg:w-[320px]'];
    __VLS_styleScopedClasses['flex-shrink-0'];
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
            NavBar: NavBar,
            ArticleList: ArticleList,
            Sidebar: Sidebar,
            showContent: showContent,
            startReading: startReading,
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
//# sourceMappingURL=HomeView.vue.js.map