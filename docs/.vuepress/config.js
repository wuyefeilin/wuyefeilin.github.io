module.exports = {
    title: '乘舟游人',//网站名称
    description: '用心写代码，不辜负程序员之名',//网站描述
    //head标签
    head: [
        ['link', { rel: 'stylesheet', href: '/img/logo.ico' }],//注意"/"就是public资源目录。标签的logo
    ],
    themeConfig: {
        author:'tinger',
        headImg:'https://yating.online/res/img/gege.jpg',//头像
        //导航栏
        nav: [
            { text: '魚兒', link: '/' },
            { text: '目次',link:'/config/catalog'},
            { text: '遨游太空', link: '/config/' },
            { text: 'Github',type:'url', link: 'https://github.com/wuyefeilin' },
        ],
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        pageNum:10,//目录每页显示条数
        //gitalk留言设置
        gitalk:{
            clientID: '45efb9848719393f0980',
            clientSecret: '8eb79539516c00288270e06d090ea5c6c0642c44',
            githubName:'wuyefeilin'
        },
        footer:'粤ICP备案号：18150247号'
    },
theme:'ting',
}