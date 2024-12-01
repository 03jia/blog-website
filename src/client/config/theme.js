export const theme = {
    // 添加过渡和动画时间配置
    transition: {
        // 基础过渡时间
        duration: {
            base: 'duration-300', // 300ms, 适用于大多数过渡效果
            fast: 'duration-200', // 200ms, 适用于小型UI元素
            slow: 'duration-500' // 500ms, 适用于大型动画
        },
        // 过渡曲线
        timing: {
            default: 'ease-in-out',
            bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // 弹跳效果
            smooth: 'cubic-bezier(0.4, 0, 0.2, 1)' // 平滑效果
        },
        // 常用组合
        common: {
            all: 'transition-all duration-300 ease-in-out',
            transform: 'transition-transform duration-300 ease-in-out',
            colors: 'transition-colors duration-300 ease-in-out',
            opacity: 'transition-opacity duration-300 ease-in-out'
        }
    },
    // 卡片基础样式
    card: {
        base: [
            'relative overflow-hidden rounded-lg',
            'bg-white/90',
            'border border-gray-100/80',
            'transition-all duration-300',
            'shadow-sm'
        ].join(' '),
        hover: [
            'hover:border-blue-200',
            'hover:translate-y-[-2px]',
            'hover:shadow-md hover:shadow-blue-100/50',
            'hover:bg-white/95'
        ].join(' ')
    },
    // 文章卡片样式
    articleCard: {
        image: {
            wrapper: [
                'relative h-40 overflow-hidden rounded-t-lg',
                'transition-all duration-300'
            ].join(' '),
            overlay: [
                'absolute inset-0',
                'bg-gradient-to-b from-transparent via-black/5 to-black/30',
                'group-hover:to-black/40 transition-colors duration-300'
            ].join(' ')
        },
        content: {
            wrapper: [
                'relative p-5',
                'bg-white/95 backdrop-blur-sm',
                'border-t border-gray-100/80'
            ].join(' '),
            title: [
                'text-lg font-bold text-gray-800',
                'line-clamp-1 mb-2',
                'group-hover:text-blue-500 transition-colors duration-300'
            ].join(' '),
            description: [
                'text-gray-600 text-sm',
                'line-clamp-2 mb-3',
                'leading-relaxed',
                'group-hover:text-gray-700 transition-colors duration-300'
            ].join(' '),
            meta: {
                wrapper: [
                    'flex items-center justify-between',
                    'text-sm text-gray-500'
                ].join(' '),
                text: 'flex items-center space-x-3',
                icon: 'text-blue-400'
            },
            tags: {
                wrapper: 'flex flex-wrap gap-1.5 mt-3',
                tag: [
                    'px-2 py-0.5 text-xs rounded-full',
                    'bg-blue-50 text-blue-500',
                    'border border-blue-100',
                    'hover:bg-blue-100 hover:border-blue-200',
                    'transition-all duration-300'
                ].join(' ')
            }
        }
    },
    // 边栏样式
    sidebar: {
        card: {
            base: [
                'relative overflow-hidden rounded-lg',
                'bg-white/90',
                'border border-gray-100/80',
                'transition-all duration-300',
                'shadow-sm'
            ].join(' '),
            header: {
                wrapper: 'relative p-4 border-b border-gray-100/80',
                gradient: 'absolute inset-0 bg-blue-50/30',
                title: 'text-lg font-bold text-gray-800 flex items-center space-x-2',
                icon: 'text-blue-500'
            },
            content: {
                wrapper: 'p-4 bg-white/95'
            }
        },
        profile: {
            avatar: {
                wrapper: 'relative p-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-500',
                image: 'w-24 h-24 rounded-full object-cover ring-2 ring-white'
            },
            info: {
                wrapper: 'relative p-6 flex flex-col items-center bg-white',
                name: 'text-2xl font-bold text-gray-800 mt-4',
                description: 'text-gray-600 mt-2'
            },
            stats: {
                wrapper: 'grid grid-cols-3 gap-4 p-6 border-t border-gray-100 bg-white',
                item: {
                    count: 'text-2xl font-bold text-gray-800 group-hover:text-blue-500',
                    label: 'text-sm text-gray-500 flex items-center justify-center space-x-1'
                }
            },
            social: {
                wrapper: 'px-6 pb-6 flex justify-center space-x-4 bg-white',
                item: {
                    base: [
                        'w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center',
                        'transform transition-all duration-300',
                        'group-hover:bg-blue-100 group-hover:scale-110 group-hover:rotate-12'
                    ].join(' '),
                    icon: 'text-xl text-blue-500'
                }
            }
        },
        category: {
            wrapper: 'space-y-1 p-4',
            item: {
                base: [
                    'flex items-center justify-between p-3 rounded-lg',
                    'group relative overflow-hidden',
                    'hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent',
                    'transition-all duration-300'
                ].join(' '),
                icon: [
                    'w-2 h-2 rounded-full',
                    'bg-gradient-to-br from-blue-400 to-blue-500',
                    'group-hover:scale-110 transition-transform duration-300',
                    'shadow-sm shadow-blue-200/50'
                ].join(' '),
                text: [
                    'text-gray-600 font-medium',
                    'group-hover:text-blue-500',
                    'transition-colors duration-300',
                    'flex-1 ml-3'
                ].join(' '),
                count: [
                    'text-sm text-gray-400',
                    'bg-gray-50 rounded-full px-2 py-0.5',
                    'group-hover:bg-blue-50 group-hover:text-blue-500',
                    'transition-all duration-300',
                    'border border-gray-100 group-hover:border-blue-100'
                ].join(' ')
            }
        },
        tags: {
            wrapper: 'flex flex-wrap gap-2 p-4',
            tag: [
                'flex items-center space-x-1 px-3 py-1.5 text-sm rounded-full',
                'bg-blue-50 text-blue-500 hover:bg-blue-100',
                'border border-blue-200 hover:border-blue-300',
                'transition-all duration-300 hover:scale-105'
            ].join(' ')
        }
    },
    // 新增公告栏样式
    announcement: {
        card: {
            base: [
                'relative overflow-hidden rounded-lg',
                'bg-white/90',
                'border border-gray-100/80',
                'transition-all duration-300',
                'shadow-sm'
            ].join(' '),
            header: {
                wrapper: 'relative p-4 border-b border-gray-100/80',
                gradient: 'absolute inset-0 bg-blue-50/30',
                title: 'text-lg font-bold text-gray-800 flex items-center space-x-2',
                icon: 'text-blue-500'
            },
            content: {
                wrapper: 'p-4 bg-white/95',
                item: {
                    base: 'flex items-center space-x-2 py-2 text-gray-600 hover:text-blue-500 transition-colors',
                    icon: 'text-blue-400',
                    text: 'text-sm'
                }
            }
        }
    },
    // 目录样式
    toc: {
        card: {
            base: [
                'relative overflow-hidden rounded-lg',
                'bg-white/90',
                'border border-gray-100/80',
                'shadow-sm'
            ].join(' '),
            header: {
                wrapper: 'relative p-4 border-b border-gray-100/80',
                gradient: 'absolute inset-0 bg-blue-50/30',
                title: 'text-lg font-bold text-gray-800 flex items-center space-x-2',
                icon: 'text-blue-500'
            },
            content: {
                wrapper: 'p-4 max-h-[calc(100vh-20rem)] overflow-y-auto bg-white/95',
                link: {
                    base: [
                        'block py-2',
                        'text-sm text-gray-600',
                        'hover:pl-4 hover:text-blue-500',
                        'transition-all duration-300',
                        'border-l-2 border-transparent',
                    ].join(' '),
                    active: [
                        'text-blue-500 font-medium',
                        'pl-4',
                        'border-l-2 border-blue-500',
                        'bg-blue-50/50'
                    ].join(' ')
                }
            }
        },
        progress: {
            bar: [
                'h-1.5',
                'bg-gradient-to-r from-blue-500 to-blue-400',
                'transition-all duration-300',
                'rounded-full'
            ].join(' ')
        }
    },
    // 归档页面主题
    archive: {
        wrapper: 'min-h-screen bg-fixed bg-cover bg-center relative flex flex-col',
        content: {
            wrapper: 'flex-1 relative z-10 pt-20',
            container: 'max-w-4xl mx-auto px-4 py-8',
            title: [
                'text-3xl font-bold mb-8',
                'bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent',
                'hover:from-blue-600 hover:to-blue-400 transition-all duration-300'
            ].join(' ')
        },
        tabs: {
            wrapper: 'flex space-x-6 mb-8',
            tab: {
                base: [
                    'relative px-8 py-3 rounded-lg text-base font-medium',
                    'transition-all duration-300 overflow-hidden group',
                    'backdrop-blur-sm'
                ].join(' '),
                active: 'text-blue-500 shadow-md shadow-blue-100',
                inactive: 'text-gray-600 hover:text-blue-500',
                background: {
                    base: 'absolute inset-0 transition-all duration-300',
                    active: 'bg-white/90',
                    inactive: 'bg-white/80 group-hover:bg-white/90'
                },
                content: {
                    wrapper: 'relative flex items-center space-x-2',
                    icon: 'text-lg transition-transform duration-300 group-hover:scale-110'
                },
                indicator: [
                    'absolute bottom-0 left-0 right-0 h-[2px]',
                    'bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0',
                    'transition-opacity duration-300'
                ].join(' ')
            }
        },
        // 时间图
        timeline: {
            wrapper: 'space-y-16',
            yearSection: {
                wrapper: 'relative',
                header: {
                    wrapper: [
                        'flex items-center space-x-4 mb-8',
                        'relative pb-4',
                        'after:absolute after:left-0 after:right-0 after:-bottom-1',
                        'after:h-[2px]',
                        'after:bg-gradient-to-r after:from-blue-200 after:via-blue-100 after:to-transparent',
                    ].join(' '),
                    icon: [
                        'w-12 h-12 p-2.5 rounded-xl',
                        'bg-gradient-to-br from-blue-500 to-blue-600',
                        'text-white shadow-md shadow-blue-200',
                        'transform hover:scale-110 transition-transform',
                        'relative z-10'
                    ].join(' '),
                    title: [
                        'text-3xl font-bold',
                        'bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent',
                        'hover:from-blue-600 hover:to-blue-400 transition-all duration-300',
                        'relative z-10'
                    ].join(' ')
                },
                content: [
                    'space-y-6 relative pl-4',
                    'mt-6',
                    'before:absolute before:left-[5px] before:top-2 before:bottom-2',
                    'before:w-[2px]',
                    'before:bg-gradient-to-b before:from-blue-200 before:via-blue-100 before:to-transparent'
                ].join(' ')
            },
            article: {
                wrapper: 'relative pl-8 block group',
                line: {
                    wrapper: '',
                    dot: [
                        'absolute left-[1px] top-1/2 -translate-y-1/2',
                        'w-[10px] h-[10px] rounded-full',
                        'bg-gradient-to-br from-blue-500 to-blue-600',
                        'ring-4 ring-blue-100/50 group-hover:ring-blue-200',
                        'transition-all duration-300',
                        'group-hover:scale-110'
                    ].join(' ')
                },
                card: {
                    wrapper: [
                        'relative',
                        'bg-white/90 rounded-lg p-6',
                        'border border-gray-100/80',
                        'hover:border-blue-200 transition-all duration-300',
                        'shadow-sm hover:shadow-md hover:shadow-blue-100/50',
                        'group-hover:translate-x-2'
                    ].join(' '),
                    header: {
                        wrapper: 'flex items-center justify-between mb-3',
                        title: {
                            wrapper: 'flex items-center space-x-2',
                            icon: 'w-5 h-5 text-blue-400',
                            text: 'text-lg font-medium text-gray-800 group-hover:text-blue-500 transition-colors'
                        },
                        date: {
                            wrapper: 'flex items-center space-x-2 text-sm text-gray-500',
                            icon: 'w-4 h-4'
                        }
                    },
                    description: 'text-gray-600 text-sm mb-3 line-clamp-2',
                    tags: {
                        wrapper: 'flex items-center space-x-2',
                        icon: 'w-4 h-4 text-blue-400/70',
                        list: 'flex flex-wrap gap-2',
                        tag: 'px-2 py-0.5 text-xs rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors'
                    }
                }
            }
        },
        // 分类视图
        category: {
            wrapper: 'grid grid-cols-1 md:grid-cols-2 gap-6',
            card: {
                wrapper: [
                    'group bg-gradient-to-br from-white/95 to-white/90 rounded-lg overflow-hidden',
                    'border border-gray-100',
                    'hover:border-blue-200 transition-all duration-300',
                    'hover:shadow-lg hover:shadow-blue-100/50',
                    'hover:translate-y-[-2px]',
                    'relative'
                ].join(' '),
                header: {
                    wrapper: [
                        'relative p-6 flex items-center justify-between',
                        'border-b border-gray-100/80',
                        'bg-gradient-to-r from-blue-50/50 via-blue-50/30 to-transparent',
                        'after:absolute after:inset-x-0 after:bottom-0 after:h-[1px]',
                        'after:bg-gradient-to-r after:from-transparent after:via-blue-200/50 after:to-transparent'
                    ].join(' '),
                    title: {
                        wrapper: 'flex items-center space-x-3',
                        icon: [
                            'w-8 h-8 p-1.5 rounded-lg',
                            'bg-gradient-to-br from-blue-500 to-blue-600 text-white',
                            'group-hover:scale-110 transition-transform',
                            'shadow-sm shadow-blue-200'
                        ].join(' '),
                        text: 'text-lg font-bold text-gray-800 group-hover:text-blue-500 transition-colors'
                    },
                    count: [
                        'px-3 py-1 text-sm font-medium',
                        'bg-gradient-to-r from-blue-500/10 to-blue-500/5',
                        'text-blue-500 rounded-full',
                        'border border-blue-100'
                    ].join(' ')
                },
                list: {
                    wrapper: [
                        'relative',
                        'before:absolute before:inset-y-0 before:left-6 before:w-[1px]',
                        'before:bg-gradient-to-b before:from-blue-100 before:to-transparent'
                    ].join(' '),
                    item: {
                        wrapper: [
                            'relative flex items-center justify-between p-4 group/item',
                            'hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent',
                            'transition-all duration-300',
                            'before:absolute before:left-6 before:top-1/2 before:-translate-y-1/2',
                            'before:w-1.5 before:h-1.5 before:rounded-full',
                            'before:bg-blue-200 hover:before:bg-blue-400',
                            'before:transition-colors before:duration-300'
                        ].join(' '),
                        title: {
                            wrapper: 'flex items-center space-x-3 flex-1 min-w-0 pl-6',
                            icon: 'w-4 h-4 text-blue-400 group-hover/item:text-blue-500 transition-colors',
                            text: 'text-gray-700 group-hover/item:text-blue-500 transition-colors truncate'
                        },
                        date: 'text-sm text-gray-500 ml-4 shrink-0 group-hover/item:text-blue-400 transition-colors'
                    }
                }
            }
        },
        // 标签视图
        tags: {
            wrapper: 'space-y-8',
            header: {
                wrapper: 'flex flex-wrap gap-3 mb-8',
                tag: [
                    'px-4 py-2 rounded-full text-sm',
                    'bg-white/90 border border-gray-100/80',
                    'hover:border-blue-200 hover:text-blue-500',
                    'transition-all duration-200'
                ].join(' '),
                active: 'border-blue-200 text-blue-500 bg-blue-50/80'
            },
            content: {
                wrapper: 'grid gap-4 grid-cols-1 md:grid-cols-2',
                article: {
                    wrapper: [
                        'bg-white/90 rounded-lg p-6',
                        'border border-gray-100/80',
                        'hover:border-blue-200 transition-all duration-300',
                        'shadow-sm hover:shadow-md hover:shadow-blue-100/50'
                    ].join(' '),
                    title: 'text-gray-800 group-hover:text-blue-500 transition-colors',
                    meta: 'flex items-center space-x-4 mt-2 text-sm text-gray-500'
                }
            }
        }
    },
    // 在 theme 配置中添加文章内容的样式
    article: {
        content: {
            prose: {
                // 加粗文本
                strong: [
                    'font-bold text-gray-900',
                    'bg-yellow-50/50 px-1 rounded',
                    'border-b-2 border-yellow-200/50'
                ].join(' '),
                // 行内代码
                inlineCode: [
                    'px-1.5 py-0.5 rounded text-sm font-mono',
                    'bg-blue-50 text-blue-600',
                    'border border-blue-100',
                    'before:content-["`"] after:content-["`"]'
                ].join(' '),
                // 代码块
                codeBlock: {
                    wrapper: [
                        'relative my-6 rounded-lg overflow-hidden',
                        'bg-gray-900 text-gray-200',
                        'border border-gray-800'
                    ].join(' '),
                    header: [
                        'flex items-center justify-between px-4 py-2',
                        'bg-gray-800/50 border-b border-gray-700'
                    ].join(' '),
                    content: 'p-4 overflow-x-auto'
                }
            }
        }
    },
    // 导航栏样式
    navbar: {
        link: {
            base: [
                'flex items-center space-x-2 px-3 py-2 rounded-lg',
                'text-gray-600 relative',
                'hover:text-blue-500',
                'transition-all duration-300'
            ].join(' '),
            active: [
                'text-blue-500',
                'before:absolute before:inset-0',
                'before:bg-blue-50/50 before:rounded-lg',
                'before:transition-all before:duration-300'
            ].join(' '),
            icon: [
                'text-lg',
                'transition-transform duration-300',
                'group-hover:scale-110'
            ].join(' ')
        },
        dropdown: {
            wrapper: [
                'absolute top-full left-0 mt-1 w-40',
                'bg-white/90 backdrop-blur-sm',
                'border border-gray-100/80 rounded-lg shadow-lg',
                'transform transition-all duration-300',
                'origin-top scale-95 opacity-0',
                'group-hover:scale-100 group-hover:opacity-100'
            ].join(' '),
            item: [
                'block w-full px-4 py-2',
                'text-gray-600 hover:text-blue-500',
                'hover:bg-blue-50/50',
                'transition-all duration-300'
            ].join(' ')
        }
    },
    // 文章列表页面主题
    articleList: {
        wrapper: 'flex-1 relative z-10 pt-20 max-w-4xl mx-auto px-4 py-8',
        header: {
            wrapper: 'mb-8',
            title: [
                'text-3xl font-bold',
                'bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent',
                'hover:from-blue-600 hover:to-blue-400 transition-all duration-300'
            ].join(' '),
            subtitle: 'mt-2 text-gray-600'
        },
        content: {
            wrapper: 'space-y-6',
            empty: 'text-center text-gray-500 py-12'
        }
    }
};
//# sourceMappingURL=theme.js.map