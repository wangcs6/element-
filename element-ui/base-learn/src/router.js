import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Parent.vue'),
      redirect: '/form'
    },
    {
      path: '/home/:id',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [{
        path: '/child',
        component: () => import('./views/Child.vue')
      }]
    },
    {
      path: '/layout',
      component: () => import('./views/element/Layout.vue')
    },
    {
      path: '/pop',
      component: () => import('./views/element/Pop.vue')
    },
    {
      path: '/table',
      component: () => import('./views/element/Table.vue')
    },
    {
      path: '/form',
      component: () => import('./views/element/Form.vue')
    },
  ]
})
