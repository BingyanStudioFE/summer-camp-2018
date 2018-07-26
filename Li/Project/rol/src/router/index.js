import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      component: Home,
      redirect: '/Home/Welcome',
      children: [
        {
          path: 'Welcome',
          name: 'Welcome',
          component: () => import('@/components/Welcome'),
          meta: {title: 'Ai伊川'}
        },
        {
          path: 'Nav',
          name: 'Nav',
          component: () => import('@/components/Nav'),
          meta: {title: '你想找的，应有尽有'}
        }, {
          path: 'Collections',
          name: 'Collections',
          component: () => import('@/components/Collections'),
          meta: {title: '随便逛逛'}
        }
      ]
    }
  ]
})
