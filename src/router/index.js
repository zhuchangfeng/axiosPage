import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from "@/components/Test"
import InputFocus from '@/components/InputFocus'
import NotFound from '@/components/404Found'
Vue.use(Router)

export default new Router({
  linkExactActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/InputFocus',
      name: 'InputFocus',
      component: InputFocus
    },
    {
      path:'*',
      name:'404Found',
      component:NotFound
    }
  ]
})
