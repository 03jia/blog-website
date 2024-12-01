import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true
});
// 自定义标题渲染
md.renderer.rules.heading_open = (tokens, idx) => {
    const token = tokens[idx];
    const level = token.tag; // h1, h2, etc.
    return `<${level} class="heading">`;
};
export default md;
//# sourceMappingURL=markdown.js.map