module.exports = {
    title: '前端技术架构',             // 设置网站标题
    description: '',                  // 网站描述
    base: './',                        // 设置站点根路径   上传github 使用
    dest: './root',                   // 设置输出目录
    head: [
        [
            'link', 
            { 
                rel: 'icon', href: '/images/vue.webp' 
            }
        ]
    ],                                // 图标
    plugins: [],                      
    themeConfig: {                    // 添加导航栏
        //repo: 'zyqq/wheel',         // 默认是 false, 设置为 true 来启用，右上角会出现 github 跳转链接
        logo: '/images/vue.webp',
        nav: [
                { text: '首页',      link: '/' },
                { text: '开发指南',  link: '/development/xmjs/xm' },
                // { text: '项目配置',   link: '/devNew/webpack/webpack'
                //     // items: [
                //     //     { text: 'javascript相关', link: '/javascript/js/' },
                //     //     { text: 'css/css3相关',   link: '/css/css/' },
                //     //     { text: 'webpack相关',   link: '/devNew/webpack/' }
                //     // ]
                // }
            ],
        sidebar: {
            '/development/': [
                { 
                    title: '',
                    collapsable: false,
                    children: [
                        {
                            title: "项目介绍",
                            path: 'xmjs/xm'
                        },
                        {
                            title: "开发规范",
                            path: 'kfgf/gf'
                        },
                        {
                            title: "代码提交规范",
                            path: 'dmtj/tj'
                        }
                    ]
                }
            ],
        },
        sidebarDepth: 2,
        lastUpdated: '更新时间',
    },
    markdown: {
        lineNumbers: true
    }
}