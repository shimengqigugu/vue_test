import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import list from '@/components/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/hi/:who',
      name: 'hi',
      component: Hi
    },
    {
      path:'/list',
      name:'list',
      component:list
    }
  ]
})
