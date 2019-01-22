import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import comment from '@/components/comment'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      redirect: '/HelloWorld',
      component: HelloWorld
    },//重定向
    {
      path: '/login',
      component: login
    },//component必须是一个组件模板对象，不能是一个组件的引用名称
    {
      path: '/register',
      component: register
    },
    {
      path: '/comment',
      component: comment
    }
  ]
})
