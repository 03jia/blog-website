/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useArticleStore } from "@/client/stores/article";
import NavBar from "@/client/components/layout/ClientNavBar.vue";
import TimelineView from "@/client/components/archive/TimelineView.vue";
import CategoryView from "@/client/components/archive/CategoryView.vue";
import TagView from "@/client/components/archive/TagView.vue";
import { theme } from '@/shared/config/theme';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const articleStore = useArticleStore();
// 从路由参数获取当前标签页
const activeTab = ref(route.query.tab?.toString() || "time");
// 监听路由参数变化
watch(() => route.query.tab, (newTab) => {
    activeTab.value = newTab?.toString() || "time";
});
// 切换标签页时更新路由
const switchTab = (tab) => {
    activeTab.value = tab;
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.wrapper)) }, });
    // @ts-ignore
    [NavBar,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(NavBar, new NavBar({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ((__VLS_ctx.theme.archive.content.wrapper)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((__VLS_ctx.theme.archive.content.container)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-3xl font-bold text-gray-800") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 flex space-x-4") }, });
    for (const [tab] of __VLS_getVForSourceType((['time', 'category', 'tag']))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.switchTab(tab);
                } }, key: ((tab)), ...{ class: (([
                    'px-4 py-2 rounded-full text-sm transition-colors',
                    __VLS_ctx.activeTab === tab
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/90 text-gray-600 hover:bg-blue-50'
                ])) }, });
        (tab === 'time' ? '时间线' : tab === 'category' ? '分类' : '标签');
    }
    const __VLS_5 = ((__VLS_ctx.activeTab === 'time' ? __VLS_ctx.TimelineView : __VLS_ctx.activeTab === 'category' ? __VLS_ctx.CategoryView : __VLS_ctx.TagView));
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ articles: ((__VLS_ctx.articleStore.articles)), }));
    const __VLS_7 = __VLS_6({ articles: ((__VLS_ctx.articleStore.articles)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-gray-800'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['transition-colors'];
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
            TimelineView: TimelineView,
            CategoryView: CategoryView,
            TagView: TagView,
            theme: theme,
            articleStore: articleStore,
            activeTab: activeTab,
            switchTab: switchTab,
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
//# sourceMappingURL=ArchiveView.vue.js.map