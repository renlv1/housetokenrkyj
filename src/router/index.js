import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active', /* 设置router-link 激活样式方法1 */
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    // 首页
    {
      path: '/home',
      name: 'home',
      component: home
    },
    // HOt 页面下线 2019/4/9
    /* {
      path: '/hot',
      name: 'hot',
      component: () => import('@/page/hot/hot') // 起源
    }, */
    // 新闻
    {
      path: '/news',
      name: 'news',
      component: () => import('@/page/news/news')
    },
    // 新闻详情
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: () => import('@/page/news/newsDetail')
    },
    // 房产投资
    {
      path: '/property',
      name: 'property',
      component: resolve => require(['@/page/property/property'], resolve)
    },
    // 产品中心
    {
      path: '/product',
      name: 'product',
      component: resolve => require(['@/page/product/product'], resolve)
    },
    // 关于我们
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['@/page/about/about'], resolve)
    },
    // 帮助中心
    {
      path: '/help',
      name: 'help',
      component: resolve => require(['@/page/help/help'], resolve)
    },
    // 视频页面
    {
      path: '/video',
      name: 'video',
      component: resolve => require(['@/page/video/video'], resolve)
    },
    // 新增页面
    {
      path: '/newHot',
      name: 'newHot',
      component: resolve => require(['@/page/hot/newHot'], resolve)
    }
  ]
})
