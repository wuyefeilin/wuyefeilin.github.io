module.exports = {
    //head标签
    head: [
        ['link', {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/img/logo.ico'
        }], //注意"/"就是public资源目录。标签的logo
        ['script', {
            src: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.js'
        }]
    ],
    themeConfig: {
        author: {
            name: 'tinger',
            headImg: '', //头像
            description: '用心写代码，不辜负程序员之名', //网站描述

        },
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        // live2dModel: '/hijiki/hijiki.model.json', //live2d模型路径
    },
    theme: 'ting',
}