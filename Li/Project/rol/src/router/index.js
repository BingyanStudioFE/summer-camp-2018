import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('@/components/Welcome')
    }, {
      path: '/Home',
      component: Home,
      redirect: '/Home/Nav',
      children: [
        {
          path: 'Nav',
          name: 'Nav',
          component: () => import('@/components/Nav')
        }, {
          path: 'Collections',
          name: 'Collections',
          component: () => import('@/components/Collections')
        }
      ]
    }
  ]
})
