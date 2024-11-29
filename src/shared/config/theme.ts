export const theme = {
  // 卡片基础样式
  card: {
    base: [
      'relative overflow-hidden rounded-lg',
      'bg-gradient-to-br from-black/50 to-black/30',
      'backdrop-blur-md',
      'border border-white/10',
      'transition-all duration-300'
    ].join(' '),
    hover: [
      'hover:border-blue-500/50',
      'hover:translate-y-[-2px]',
      'hover:shadow-lg hover:shadow-blue-500/10'
    ].join(' ')
  },

  // 文章卡片特定样式
  articleCard: {
    image: {
      wrapper: 'relative h-48 overflow-hidden',
      overlay: 'absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70'
    },
    content: {
      wrapper: 'relative p-6',
      title: 'text-xl font-bold text-white group-hover:text-blue-400 transition-colors truncate',
      description: 'text-gray-300 text-sm line-clamp-2 mb-4',
      meta: {
        wrapper: 'flex items-center justify-between',
        text: 'text-xs text-gray-400',
        icon: 'text-blue-400/60'
      },
      tags: {
        wrapper: 'flex flex-wrap gap-1',
        tag: 'px-1.5 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors'
      }
    }
  },

  // 侧边栏组件样式
  sidebar: {
    card: {
      base: [
        'relative overflow-hidden rounded-lg',
        'bg-gradient-to-br from-black/50 to-black/30',
        'backdrop-blur-md',
        'border border-white/10',
        'transition-all duration-300'
      ].join(' '),
      header: {
        wrapper: 'relative p-4 border-b border-white/10',
        gradient: 'absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90',
        title: 'text-lg font-bold text-white flex items-center space-x-2',
        icon: 'text-blue-400'
      },
      content: {
        wrapper: 'p-4 bg-black/30 backdrop-blur-sm'
      }
    },
    profile: {
      avatar: {
        wrapper: 'relative p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500',
        image: 'w-24 h-24 rounded-full object-cover ring-2 ring-white/20'
      },
      info: {
        wrapper: 'relative p-6 flex flex-col items-center bg-black/30 backdrop-blur-sm',
        name: 'text-2xl font-bold text-white mt-4',
        description: 'text-gray-300 mt-2'
      },
      stats: {
        wrapper: 'grid grid-cols-3 gap-4 p-6 border-t border-white/10 bg-black/30 backdrop-blur-sm',
        item: {
          count: 'text-2xl font-bold text-white group-hover:text-blue-400',
          label: 'text-sm text-gray-400 flex items-center justify-center space-x-1'
        }
      },
      social: {
        wrapper: 'px-6 pb-6 flex justify-center space-x-4 bg-black/30 backdrop-blur-sm',
        item: {
          base: [
            'w-10 h-10 rounded-full bg-white/10 flex items-center justify-center',
            'transform transition-all duration-300',
            'group-hover:bg-white/20 group-hover:scale-110 group-hover:rotate-12'
          ].join(' '),
          icon: 'text-xl text-white/80 group-hover:text-white'
        }
      }
    },
    category: {
      item: {
        base: 'flex items-center justify-between p-3 hover:bg-white/5 transition-colors group',
        icon: 'w-2 h-2 rounded-full bg-blue-400/60',
        text: 'text-gray-300 group-hover:text-white',
        count: 'text-sm text-gray-500 group-hover:text-blue-400'
      }
    },
    tags: {
      wrapper: 'flex flex-wrap gap-2 p-4',
      tag: [
        'flex items-center space-x-1 px-3 py-1.5 text-sm rounded-full',
        'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20',
        'border border-blue-500/20 hover:border-blue-500/40',
        'transition-all duration-300 hover:scale-105'
      ].join(' ')
    }
  },

  // 目录组件样式
  toc: {
    card: {
      base: [
        'relative overflow-hidden rounded-lg',
        'bg-gradient-to-br from-black/50 to-black/30',
        'backdrop-blur-md',
        'border border-white/10'
      ].join(' '),
      header: {
        wrapper: 'relative p-4 border-b border-white/10',
        gradient: 'absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90',
        title: 'text-lg font-bold text-white flex items-center space-x-2',
        icon: 'text-blue-400'
      },
      content: {
        wrapper: 'p-4 bg-black/30 max-h-[calc(100vh-20rem)] overflow-y-auto',
        link: {
          base: 'block py-1 text-sm text-gray-300 hover:text-blue-400 transition-colors',
          active: 'text-blue-400'
        }
      }
    },
    progress: {
      bar: 'h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300'
    }
  }
} 