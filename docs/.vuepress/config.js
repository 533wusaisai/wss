module.exports = {
    title: '前端技术架构',             // 设置网站标题
    description: 'Hello 前端小伙伴',                  // 网站描述
    base: '/wss/',                    // 默认根目录 / 需要根据github上创建的项目name
    dest: 'dist',                     // 设置输出目录
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
                { text: '开发指南',  link: '/development/' },
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
                            title: "项目规范",
                            path: 'kfgf/gf'
                        },
                        {
                            title: "提交规范",
                            path: 'dmtj/tj'
                        },
                        {
                            title: "Git版本规范化",
                            path: 'git/v1'
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