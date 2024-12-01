/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import ProfileCard from '@/client/components/sidebar/ProfileCard.vue';
import CategoryList from '@/client/components/sidebar/CategoryList.vue';
import TagCloud from '@/client/components/sidebar/TagCloud.vue';
import Announcement from '@/client/components/sidebar/Announcement.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-6") }, });
    // @ts-ignore
    [ProfileCard,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ProfileCard, new ProfileCard({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [Announcement,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(Announcement, new Announcement({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    [CategoryList,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(CategoryList, new CategoryList({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    // @ts-ignore
    [TagCloud,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(TagCloud, new TagCloud({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
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
            ProfileCard: ProfileCard,
            CategoryList: CategoryList,
            TagCloud: TagCloud,
            Announcement: Announcement,
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
//# sourceMappingURL=Sidebar.vue.js.map