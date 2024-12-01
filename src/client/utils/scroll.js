// 重置滚动位置
export const resetScroll = () => {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
            resolve();
        });
    });
};
//# sourceMappingURL=scroll.js.map