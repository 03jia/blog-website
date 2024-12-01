/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useArticleStore } from '@/client/stores/article';
import NavBar from '@/client/components/layout/ClientNavBar.vue';
import ArticleCard from '@/client/components/blog/ArticleCard.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const articleStore = useArticleStore();
onMounted(async () => {
    if (articleStore.articles.length === 0) {
        await articleStore.fetchArticles();
    }
});
const category = computed(() => decodeURIComponent(route.params.category));
const filteredArticles = computed(() => articleStore.articles.filter(article => article.category === category.value)); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-screen") }, });
    // @ts-ignore
    [NavBar,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(NavBar, new NavBar({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("max-w-4xl mx-auto px-4 py-8 pt-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center mb-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-4xl font-bold text-white mb-4") }, });
    (__VLS_ctx.category);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-300") }, });
    (__VLS_ctx.filteredArticles.length);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-6") }, });
    for (const [article] of __VLS_getVForSourceType((__VLS_ctx.filteredArticles))) {
        // @ts-ignore
        [ArticleCard,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(ArticleCard, new ArticleCard({ key: ((article.id)), article: ((article)), }));
        const __VLS_6 = __VLS_5({ key: ((article.id)), article: ((article)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    }
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['max-w-4xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-8'];
    __VLS_styleScopedClasses['pt-20'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-12'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-gray-300'];
    __VLS_styleScopedClasses['space-y-6'];
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
            ArticleCard: ArticleCard,
            category: category,
            filteredArticles: filteredArticles,
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
//# sourceMappingURL=CategoryView.vue.js.map