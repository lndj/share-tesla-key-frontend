import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/components/LoginForm'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: HelloWorld
    },
    {
      path: '/create',
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/key/:code',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      name: '404',
      component: HelloWorld
    }
  ]
})
