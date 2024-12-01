/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, onMounted, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useArticleStore } from '@/client/stores/article';
import NavBar from '../components/layout/ClientNavBar.vue';
import ArticleContent from '@/client/components/article/ArticleContent.vue';
import TableOfContents from '@/client/components/article/TableOfContents.vue';
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const route = useRoute();
    const router = useRouter();
    const articleStore = useArticleStore();
    const article = ref(null);
    onMounted(async () => {
        try {
            const title = decodeURIComponent(route.params.title);
            article.value = articleStore.articles.find(a => a.title === title);
            if (!article.value) {
                throw new Error('Article not found');
            }
            // 等待 DOM 更新后再滚动到顶部
            await nextTick();
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        }
        catch (error) {
            console.error('Error loading article:', error);
            router.push('/404');
        }
    }); /* PartiallyEnd: #3632/scriptSetup.vue */
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-screen bg-fixed bg-cover bg-center relative flex flex-col") }, });
        // @ts-ignore
        [NavBar,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(NavBar, new NavBar({}));
        const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
        __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("flex-1 relative z-10 pt-20") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container max-w-7xl mx-auto px-4 py-8") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-[minmax(0,1fr)_280px] gap-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-w-0") }, });
        if (__VLS_ctx.article) {
            // @ts-ignore
            [ArticleContent,];
            // @ts-ignore
            const __VLS_5 = __VLS_asFunctionalComponent(ArticleContent, new ArticleContent({ article: ((__VLS_ctx.article)), content: ((__VLS_ctx.article.content)), }));
            const __VLS_6 = __VLS_5({ article: ((__VLS_ctx.article)), content: ((__VLS_ctx.article.content)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center text-gray-400") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fixed w-[280px]") }, });
        if (__VLS_ctx.article) {
            // @ts-ignore
            [TableOfContents,];
            // @ts-ignore
            const __VLS_10 = __VLS_asFunctionalComponent(TableOfContents, new TableOfContents({ content: ((__VLS_ctx.article.content)), }));
            const __VLS_11 = __VLS_10({ content: ((__VLS_ctx.article.content)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        }
        __VLS_styleScopedClasses['min-h-screen'];
        __VLS_styleScopedClasses['bg-fixed'];
        __VLS_styleScopedClasses['bg-cover'];
        __VLS_styleScopedClasses['bg-center'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['z-10'];
        __VLS_styleScopedClasses['pt-20'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['max-w-7xl'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-8'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-[minmax(0,1fr)_280px]'];
        __VLS_styleScopedClasses['gap-6'];
        __VLS_styleScopedClasses['min-w-0'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['w-[280px]'];
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
                ArticleContent: ArticleContent,
                TableOfContents: TableOfContents,
                article: article,
            };
        },
        name: 'ArticleView'
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        name: 'ArticleView',
        __typeEl: {},
    });
})(); /* PartiallyEnd: #3632/script.vue */
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ArticleView.vue.js.map