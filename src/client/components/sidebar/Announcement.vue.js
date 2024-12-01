/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { theme } from '@/shared/config/theme';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const announcements = {
    title: 'Announcement',
    subtitle: '公告 📢',
    welcome: '欢迎来到我的个人博客 ✨',
    features: [
        {
            title: '网站功能改进 ✨',
            items: [
                {
                    label: '搜索功能',
                    description: '可以通过搜索栏快速找到你感兴趣的文章'
                },
                {
                    label: '夜间模式',
                    description: '切换按钮可以开启夜间模式，保护眼睛'
                },
                {
                    label: '评论系统',
                    description: '每篇文章下面都可以留言，欢迎分享你的想法'
                }
            ]
        }
    ],
    contact: {
        title: '感谢你的支持 🙌',
        email: 'your@email.com',
        github: 'https://github.com/yourusername'
    }
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.announcement.card.base)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.announcement.card.header.gradient)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.announcement.card.header.wrapper)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ((__VLS_ctx.theme.announcement.card.header.title)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ((__VLS_ctx.theme.announcement.card.header.icon)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.announcements.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-600") }, });
    (__VLS_ctx.announcements.subtitle);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.announcement.card.content.wrapper)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-lg text-gray-800 mb-4") }, });
    (__VLS_ctx.announcements.welcome);
    for (const [section] of __VLS_getVForSourceType((__VLS_ctx.announcements.features))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((section.title)), ...{ class: ("mb-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-blue-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (section.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("space-y-4") }, });
        for (const [item] of __VLS_getVForSourceType((section.items))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((item.label)), ...{ class: ((__VLS_ctx.theme.announcement.card.content.item.base)) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-shrink-0 w-1 h-1 rounded-full bg-blue-400/60 mt-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("text-gray-800 font-medium hover:text-blue-500 transition-colors") }, });
            (item.label);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
            (item.description);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-6 pt-6 border-t border-gray-200/80") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-lg font-semibold text-gray-800 mb-4") }, });
    (__VLS_ctx.announcements.contact.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex space-x-4") }, });
    for (const [item] of __VLS_getVForSourceType(([
        { icon: '✉️', href: `mailto:${__VLS_ctx.announcements.contact.email}` },
        { icon: '🐱', href: __VLS_ctx.announcements.contact.github }
    ]))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ key: ((item.href)), href: ((item.href)), target: ("_blank"), ...{ class: ("group") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("\u0077\u002d\u0031\u0030\u0020\u0068\u002d\u0031\u0030\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0066\u0075\u006c\u006c\u0020\u0062\u0067\u002d\u0062\u006c\u0075\u0065\u002d\u0035\u0030\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0062\u006c\u0075\u0065\u002d\u0032\u0030\u0030\u002f\u0035\u0030\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0066\u006c\u0065\u0078\u0020\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0062\u0067\u002d\u0062\u006c\u0075\u0065\u002d\u0031\u0030\u0030\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0072\u0061\u006e\u0073\u0066\u006f\u0072\u006d\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0061\u006c\u006c\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0033\u0030\u0030\u0020\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0073\u0063\u0061\u006c\u0065\u002d\u0031\u0031\u0030\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0072\u006f\u0074\u0061\u0074\u0065\u002d\u0031\u0032") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xl") }, });
        (item.icon);
    }
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-gray-800'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-gray-800'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['text-blue-500'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['flex-shrink-0'];
    __VLS_styleScopedClasses['w-1'];
    __VLS_styleScopedClasses['h-1'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['bg-blue-400/60'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-gray-800'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['hover:text-blue-500'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['mt-6'];
    __VLS_styleScopedClasses['pt-6'];
    __VLS_styleScopedClasses['border-t'];
    __VLS_styleScopedClasses['border-gray-200/80'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-gray-800'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['w-10'];
    __VLS_styleScopedClasses['h-10'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['bg-blue-50'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-blue-200/50'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['hover:bg-blue-100'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['hover:scale-110'];
    __VLS_styleScopedClasses['hover:rotate-12'];
    __VLS_styleScopedClasses['text-xl'];
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
            announcements: announcements,
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
//# sourceMappingURL=Announcement.vue.js.map