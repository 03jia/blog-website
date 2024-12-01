/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useArticleStore } from '@/client/stores/article';
import Button from '../components/ui/Button.vue';
import TagInput from '../components/ui/TagInput.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const articleStore = useArticleStore();
const loading = ref(false);
const article = ref({
    id: Date.now(),
    title: '',
    description: '',
    content: '',
    category: '',
    tags: [],
    createdAt: new Date().toISOString(),
    views: 0,
    likes: 0,
    comments: 0,
    status: 'draft',
    visible: true
});
// 如果是编辑模式，加载文章数据
onMounted(async () => {
    const id = route.params.id;
    if (id) {
        const existingArticle = articleStore.articles.find(a => a.id === Number(id));
        if (existingArticle) {
            article.value = { ...existingArticle };
        }
    }
});
const handleSubmit = async () => {
    try {
        loading.value = true;
        const index = articleStore.articles.findIndex(a => a.id === article.value.id);
        if (index !== -1) {
            articleStore.articles[index] = { ...article.value };
        }
        else {
            articleStore.articles.push({ ...article.value });
        }
        router.push('/admin/articles');
    }
    catch (error) {
        console.error('保存文章失败:', error);
        alert('保存失败');
    }
    finally {
        loading.value = false;
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl font-bold") }, });
    (__VLS_ctx.route.params.id ? '编辑文章' : '新建文章');
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, ...{ class: ("space-y-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-sm font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ value: ((__VLS_ctx.article.title)), type: ("text"), required: (true), ...{ class: ("form-input w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-sm font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.article.category)), required: (true), ...{ class: ("form-select w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), });
    for (const [category] of __VLS_getVForSourceType((__VLS_ctx.articleStore.categories))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((category)), });
        (category);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-sm font-medium") }, });
    // @ts-ignore
    [TagInput,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TagInput, new TagInput({ modelValue: ((__VLS_ctx.article.tags)), }));
    const __VLS_1 = __VLS_0({ modelValue: ((__VLS_ctx.article.tags)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-sm font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea)({ value: ((__VLS_ctx.article.description)), rows: ("3"), ...{ class: ("form-textarea w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-sm font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea)({ value: ((__VLS_ctx.article.content)), rows: ("20"), ...{ class: ("form-textarea w-full font-mono") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("radio"), value: ("draft"), name: ("status"), ...{ class: ("form-radio") }, });
    (__VLS_ctx.article.status);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("radio"), value: ("published"), name: ("status"), ...{ class: ("form-radio") }, });
    (__VLS_ctx.article.status);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("checkbox"), ...{ class: ("form-checkbox") }, });
    (__VLS_ctx.article.visible);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-end gap-4") }, });
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(Button, new Button({ ...{ 'onClick': {} }, type: ("default"), }));
    const __VLS_6 = __VLS_5({ ...{ 'onClick': {} }, type: ("default"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    let __VLS_10;
    const __VLS_11 = {
        onClick: (...[$event]) => {
            __VLS_ctx.router.back();
        }
    };
    let __VLS_7;
    let __VLS_8;
    __VLS_nonNullable(__VLS_9.slots).default;
    var __VLS_9;
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(Button, new Button({ type: ("primary"), loading: ((__VLS_ctx.loading)), }));
    const __VLS_13 = __VLS_12({ type: ("primary"), loading: ((__VLS_ctx.loading)), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    __VLS_nonNullable(__VLS_16.slots).default;
    var __VLS_16;
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['form-input'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['form-select'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['form-textarea'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['space-y-2'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['form-textarea'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['font-mono'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['form-radio'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['form-radio'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['form-checkbox'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-end'];
    __VLS_styleScopedClasses['gap-4'];
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
            Button: Button,
            TagInput: TagInput,
            route: route,
            router: router,
            articleStore: articleStore,
            loading: loading,
            article: article,
            handleSubmit: handleSubmit,
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
//# sourceMappingURL=ArticleEdit.vue.js.map