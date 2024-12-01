/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, onMounted, nextTick } from 'vue';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItHighlightjs from 'markdown-it-highlightjs';
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const props = defineProps();
    // 配置 markdown-it
    const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        breaks: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, { language: lang }).value;
                }
                catch (__) { }
            }
            return '';
        }
    });
    md.use(markdownItAttrs);
    md.use(markdownItHighlightjs);
    // 渲染后的内容
    const renderedContent = ref('');
    onMounted(() => {
        // 渲染 markdown 内容
        renderedContent.value = md.render(props.content);
        console.log('Rendered content:', renderedContent.value);
        // 等待 DOM 更新
        nextTick(() => {
            const article = document.querySelector('.article-content');
            const headings = article?.querySelectorAll('h1, h2, h3');
            console.log('Found headings in ArticleContent:', headings?.length);
        });
        // 为代码块添加复制按钮
        const codeBlocks = document.querySelectorAll('.prose pre');
        codeBlocks.forEach(block => {
            const code = block.textContent || '';
            const button = document.createElement('button');
            button.className = 'copy-button';
            button.innerHTML = `
      <svg viewBox="0 0 24 24" width="14" height="14">
        <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/>
      </svg>
    `;
            button.addEventListener('click', () => copyCode(code, button));
            block.appendChild(button);
        });
    });
    // 复制代码功能
    const copyCode = (code, button) => {
        navigator.clipboard.writeText(code).then(() => {
            button.innerHTML = `
      <svg viewBox="0 0 24 24" width="14" height="14">
        <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
      </svg>
    `;
            setTimeout(() => {
                button.innerHTML = `
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/>
        </svg>
      `;
            }, 2000);
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
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['copy-button'];
        // CSS variable injection 
        // CSS variable injection end 
        let __VLS_resolvedLocalAndGlobalComponents;
        __VLS_elementAsFunction(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({ ...{ class: ("article") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("\u0062\u0067\u002d\u0077\u0068\u0069\u0074\u0065\u002f\u0039\u0035\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u006c\u0067\u0020\u0070\u002d\u0038\u0020\u006d\u0062\u002d\u0038\u0020\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0067\u0072\u0061\u0079\u002d\u0031\u0030\u0030\u002f\u0038\u0030\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0062\u006c\u0075\u0065\u002d\u0032\u0030\u0030\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0061\u006c\u006c\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0033\u0030\u0030\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u0073\u006d") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-3xl font-bold text-gray-800 mb-4") }, });
        (__VLS_ctx.article.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center space-x-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.time, __VLS_intrinsicElements.time)({ datetime: ((__VLS_ctx.article.createdAt)), });
        (__VLS_ctx.article.createdAt);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("ri-eye-line mr-1.5") }, });
        (__VLS_ctx.article.views);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap gap-2") }, });
        for (const [tag] of __VLS_getVForSourceType((__VLS_ctx.article.tags))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((tag)), ...{ class: ("px-2 py-1 text-sm rounded-full bg-blue-50 text-blue-500") }, });
            (tag);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("\u0070\u0072\u006f\u0073\u0065\u0020\u006d\u0061\u0078\u002d\u0077\u002d\u006e\u006f\u006e\u0065\u0020\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u0067\u002d\u0077\u0068\u0069\u0074\u0065\u002f\u0039\u0035\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u006c\u0067\u0020\u0070\u002d\u0038\u0020\u0061\u0072\u0074\u0069\u0063\u006c\u0065\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u0020\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0067\u0072\u0061\u0079\u002d\u0031\u0030\u0030\u002f\u0038\u0030\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0062\u006c\u0075\u0065\u002d\u0032\u0030\u0030\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0061\u006c\u006c\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0033\u0030\u0030\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u0073\u006d") }, });
        __VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (__VLS_ctx.renderedContent) }, null, null);
        __VLS_styleScopedClasses['article'];
        __VLS_styleScopedClasses['bg-white/95'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['p-8'];
        __VLS_styleScopedClasses['mb-8'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-100/80'];
        __VLS_styleScopedClasses['hover:border-blue-200'];
        __VLS_styleScopedClasses['transition-all'];
        __VLS_styleScopedClasses['duration-300'];
        __VLS_styleScopedClasses['shadow-sm'];
        __VLS_styleScopedClasses['text-3xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-gray-800'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['text-gray-500'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['space-x-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ri-eye-line'];
        __VLS_styleScopedClasses['mr-1.5'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['bg-blue-50'];
        __VLS_styleScopedClasses['text-blue-500'];
        __VLS_styleScopedClasses['prose'];
        __VLS_styleScopedClasses['max-w-none'];
        __VLS_styleScopedClasses['bg-white/95'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['p-8'];
        __VLS_styleScopedClasses['article-content'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-100/80'];
        __VLS_styleScopedClasses['hover:border-blue-200'];
        __VLS_styleScopedClasses['transition-all'];
        __VLS_styleScopedClasses['duration-300'];
        __VLS_styleScopedClasses['shadow-sm'];
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
                renderedContent: renderedContent,
            };
        },
        __typeProps: {},
        name: 'ArticleContent'
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        __typeProps: {},
        name: 'ArticleContent',
        __typeEl: {},
    });
})(); /* PartiallyEnd: #3632/script.vue */
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ArticleContent.vue.js.map