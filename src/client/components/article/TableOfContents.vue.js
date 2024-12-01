/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { ListBulletIcon, ChevronRightIcon, BookOpenIcon, BoltIcon } from '@heroicons/vue/24/outline';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tocItems = ref([]);
const activeId = ref('');
const progress = ref(0);
let scrollTimer = null;
const tocContainer = ref(null);
// 生成目录结构
const generateToc = () => {
    const article = document.querySelector('.article-content');
    console.log('Found article element:', article);
    const headings = article?.querySelectorAll('.prose h1, .prose h2, .prose h3');
    console.log('Found headings:', headings?.length);
    if (!headings?.length) {
        console.log('No headings found, trying without .prose selector');
        const allHeadings = article?.querySelectorAll('h1, h2, h3');
        console.log('Found headings without .prose:', allHeadings?.length);
        return;
    }
    const items = [];
    const stack = [items];
    let prevLevel = 0;
    headings.forEach((heading, index) => {
        const level = Number(heading.tagName[1]);
        const id = `toc-heading-${index}`;
        heading.id = id;
        const item = {
            id,
            text: heading.textContent?.trim() || '',
            level,
            children: []
        };
        console.log('Processing heading:', item);
        // 如果是第一个标题，直接添加到根级别
        if (stack.length === 1 && items.length === 0) {
            items.push(item);
            prevLevel = level;
            return;
        }
        // 根据层级关系构建树形结构
        if (level > prevLevel) {
            // 当前标题是子标题
            const parent = stack[stack.length - 1][stack[stack.length - 1].length - 1];
            if (parent) {
                parent.children.push(item);
                stack.push(parent.children);
            }
        }
        else if (level < prevLevel) {
            // 当前标题层级比前一个浅
            const popCount = prevLevel - level;
            for (let i = 0; i < popCount; i++) {
                stack.pop();
            }
            stack[stack.length - 1].push(item);
        }
        else {
            // 同级标题
            stack[stack.length - 1].push(item);
        }
        prevLevel = level;
    });
    tocItems.value = items;
    console.log('Generated TOC items:', items);
};
// 滚动到指定标题
const scrollToHeading = (id) => {
    const heading = document.querySelector(`#${id}`);
    if (heading) {
        const navHeight = 80;
        const offset = 24;
        // 计算目标滚动位置
        const elementPosition = heading.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight - offset;
        // 设置活动标题
        activeId.value = id;
        // 平滑滚动到目标位置
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};
// 计算阅读进度
const calculateProgress = () => {
    const article = document.querySelector('.article-content');
    if (!article)
        return 0;
    const contentHeight = article.clientHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;
    const articleTop = article.offsetTop;
    // 考虑窗口高度的阅读进度计算
    const readableHeight = contentHeight - windowHeight;
    const currentProgress = (scrollTop - articleTop + windowHeight) / contentHeight * 100;
    return Math.min(Math.max(currentProgress, 0), 100);
};
// 更新当前阅读位置和进度
const updateActiveHeading = () => {
    progress.value = calculateProgress();
    // 使用 requestAnimationFrame 优化性能
    if (scrollTimer) {
        cancelAnimationFrame(scrollTimer);
    }
    scrollTimer = requestAnimationFrame(() => {
        const navHeight = 80;
        const scrollPosition = window.scrollY + navHeight;
        let currentHeading = null;
        let minDistance = Infinity;
        // 遍历所有标题，找到最接近视口顶部的标题
        const headings = document.querySelectorAll('.prose h1, .prose h2, .prose h3');
        headings.forEach(heading => {
            if (heading) {
                const rect = heading.getBoundingClientRect();
                // 计算标题到视口顶部的距离
                const distance = Math.abs(rect.top - navHeight);
                // 如果标题在视口上方且距离更近
                if (rect.top <= navHeight && distance < minDistance) {
                    minDistance = distance;
                    currentHeading = heading;
                }
            }
        });
        // 更新激活的标题
        if (currentHeading) {
            activeId.value = currentHeading.id;
        }
        else if (scrollPosition <= navHeight && tocItems.value.length > 0) {
            // 如果在页面顶部，激活第一个标题
            activeId.value = tocItems.value[0].id;
        }
    });
};
// 滚动目录到激活的标题
const scrollTocToActiveItem = () => {
    if (!tocContainer.value)
        return;
    const activeButton = tocContainer.value.querySelector(`button[data-id="${activeId.value}"]`);
    if (activeButton) {
        const containerRect = tocContainer.value.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        // 检查按钮是否在可视区域内
        const isInView = (buttonRect.top >= containerRect.top &&
            buttonRect.bottom <= containerRect.bottom);
        if (!isInView) {
            // 计算滚动位置，使按钮位于容器中间
            const scrollTop = activeButton.offsetTop - (containerRect.height / 2) + (buttonRect.height / 2);
            tocContainer.value.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
            });
        }
    }
};
// 监听激活标题的变化
watch(() => activeId.value, () => {
    scrollTocToActiveItem();
});
onMounted(() => {
    // 等待内容渲染完成
    nextTick(() => {
        setTimeout(() => {
            generateToc();
            window.addEventListener('scroll', updateActiveHeading, { passive: true });
            updateActiveHeading();
        }, 100);
    });
});
onUnmounted(() => {
    if (scrollTimer) {
        cancelAnimationFrame(scrollTimer);
    }
    window.removeEventListener('scroll', updateActiveHeading);
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
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("sticky top-24 space-y-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-border rounded-lg overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0 bg-gradient-to-r from-blue-50/30 to-blue-100/20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative flex items-center justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-2") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.BookOpenIcon;
    /** @type { [typeof __VLS_components.BookOpenIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-5 h-5 text-blue-500") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("w-5 h-5 text-blue-500") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm font-medium text-gray-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-2") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.BoltIcon;
    /** @type { [typeof __VLS_components.BoltIcon, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("w-4 h-4 text-yellow-400 animate-pulse") }, ...{ class: ((__VLS_ctx.progress > 0 ? 'opacity-100' : 'opacity-0')) }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("w-4 h-4 text-yellow-400 animate-pulse") }, ...{ class: ((__VLS_ctx.progress > 0 ? 'opacity-100' : 'opacity-0')) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-blue-500 font-bold") }, });
    (Math.round(__VLS_ctx.progress));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative mt-2 w-full h-2 bg-gray-100 rounded-full overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 rounded-full") }, ...{ style: (({ width: `${__VLS_ctx.progress}%` })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0 bg-shine animate-shine") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-border rounded-lg overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0 bg-blue-50/30") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative p-4 border-b border-gray-100/80") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-2") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.ListBulletIcon;
    /** @type { [typeof __VLS_components.ListBulletIcon, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("w-5 h-5 text-blue-500") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("w-5 h-5 text-blue-500") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-lg font-bold text-gray-800") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("tocContainer"), ...{ class: ("p-4 space-y-1 overflow-y-auto max-h-[60vh]") }, });
    // @ts-ignore navigation for `const tocContainer = ref()`
    __VLS_ctx.tocContainer;
    if (__VLS_ctx.tocItems.length) {
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.tocItems))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((item.id)), ...{ class: ("w-full") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.tocItems.length)))
                            return;
                        __VLS_ctx.scrollToHeading(item.id);
                    } }, "data-id": ((item.id)), ...{ class: ("w-full text-left rounded px-2 py-1.5 flex items-center transition-all duration-300") }, ...{ class: (([
                        __VLS_ctx.activeId === item.id
                            ? 'bg-blue-50 text-blue-500'
                            : 'text-gray-600 hover:bg-blue-50/50 hover:text-blue-500'
                    ])) }, });
            const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.ChevronRightIcon;
            /** @type { [typeof __VLS_components.ChevronRightIcon, ] } */
            // @ts-ignore
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("w-4 h-4 mr-2 transition-transform duration-300") }, ...{ class: (([
                        __VLS_ctx.activeId === item.id ? 'text-blue-500 rotate-90' : 'text-gray-400'
                    ])) }, }));
            const __VLS_20 = __VLS_19({ ...{ class: ("w-4 h-4 mr-2 transition-transform duration-300") }, ...{ class: (([
                        __VLS_ctx.activeId === item.id ? 'text-blue-500 rotate-90' : 'text-gray-400'
                    ])) }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("truncate") }, });
            (item.text);
            if (item.children.length) {
                for (const [child] of __VLS_getVForSourceType((item.children))) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((child.id)), ...{ class: ("w-full") }, });
                    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                                if (!((__VLS_ctx.tocItems.length)))
                                    return;
                                if (!((item.children.length)))
                                    return;
                                __VLS_ctx.scrollToHeading(child.id);
                            } }, "data-id": ((child.id)), ...{ class: ("w-full text-left rounded px-2 py-1.5 flex items-center pl-8 transition-all duration-300") }, ...{ class: (([
                                __VLS_ctx.activeId === child.id
                                    ? 'bg-blue-50 text-blue-500'
                                    : 'text-gray-600 hover:bg-blue-50/50 hover:text-blue-500'
                            ])) }, });
                    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.ChevronRightIcon;
                    /** @type { [typeof __VLS_components.ChevronRightIcon, ] } */
                    // @ts-ignore
                    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("w-4 h-4 mr-2 transition-transform duration-300") }, ...{ class: (([
                                __VLS_ctx.activeId === child.id ? 'text-blue-500 rotate-90' : 'text-gray-400'
                            ])) }, }));
                    const __VLS_26 = __VLS_25({ ...{ class: ("w-4 h-4 mr-2 transition-transform duration-300") }, ...{ class: (([
                                __VLS_ctx.activeId === child.id ? 'text-blue-500 rotate-90' : 'text-gray-400'
                            ])) }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("truncate") }, });
                    (child.text);
                    if (child.children.length) {
                        for (const [subChild] of __VLS_getVForSourceType((child.children))) {
                            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                                        if (!((__VLS_ctx.tocItems.length)))
                                            return;
                                        if (!((item.children.length)))
                                            return;
                                        if (!((child.children.length)))
                                            return;
                                        __VLS_ctx.scrollToHeading(subChild.id);
                                    } }, key: ((subChild.id)), "data-id": ((subChild.id)), ...{ class: ("w-full text-left rounded px-2 py-1.5 flex items-center pl-12 transition-all duration-300") }, ...{ class: (([
                                        __VLS_ctx.activeId === subChild.id
                                            ? 'bg-blue-50 text-blue-500'
                                            : 'text-gray-600 hover:bg-blue-50/50 hover:text-blue-500'
                                    ])) }, });
                            const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.ChevronRightIcon;
                            /** @type { [typeof __VLS_components.ChevronRightIcon, ] } */
                            // @ts-ignore
                            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("w-4 h-4 mr-2 transition-transform duration-300") }, ...{ class: (([
                                        __VLS_ctx.activeId === subChild.id ? 'text-blue-500 rotate-90' : 'text-gray-400'
                                    ])) }, }));
                            const __VLS_32 = __VLS_31({ ...{ class: ("w-4 h-4 mr-2 transition-transform duration-300") }, ...{ class: (([
                                        __VLS_ctx.activeId === subChild.id ? 'text-blue-500 rotate-90' : 'text-gray-400'
                                    ])) }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("truncate") }, });
                            (subChild.text);
                        }
                    }
                }
            }
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center text-gray-400") }, });
        (__VLS_ctx.tocItems.length);
    }
    __VLS_styleScopedClasses['sticky'];
    __VLS_styleScopedClasses['top-24'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['card-border'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['bg-gradient-to-r'];
    __VLS_styleScopedClasses['from-blue-50/30'];
    __VLS_styleScopedClasses['to-blue-100/20'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['text-blue-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['text-yellow-400'];
    __VLS_styleScopedClasses['animate-pulse'];
    __VLS_styleScopedClasses['text-blue-500'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-2'];
    __VLS_styleScopedClasses['bg-gray-100'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-y-0'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['bg-gradient-to-r'];
    __VLS_styleScopedClasses['from-blue-500'];
    __VLS_styleScopedClasses['to-blue-400'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['bg-shine'];
    __VLS_styleScopedClasses['animate-shine'];
    __VLS_styleScopedClasses['card-border'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['bg-blue-50/30'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-gray-100/80'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['text-blue-500'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-gray-800'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['space-y-1'];
    __VLS_styleScopedClasses['overflow-y-auto'];
    __VLS_styleScopedClasses['max-h-[60vh]'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1.5'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['transition-transform'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['truncate'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1.5'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['pl-8'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['transition-transform'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['truncate'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['py-1.5'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['pl-12'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['w-4'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['mr-2'];
    __VLS_styleScopedClasses['transition-transform'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['truncate'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-gray-400'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "tocContainer": __VLS_nativeElements['div'],
    };
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
            ListBulletIcon: ListBulletIcon,
            ChevronRightIcon: ChevronRightIcon,
            BookOpenIcon: BookOpenIcon,
            BoltIcon: BoltIcon,
            tocItems: tocItems,
            activeId: activeId,
            progress: progress,
            tocContainer: tocContainer,
            scrollToHeading: scrollToHeading,
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
//# sourceMappingURL=TableOfContents.vue.js.map