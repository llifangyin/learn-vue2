import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/component'
  },
  {
    path: '/component',
    name: 'component',
    component: () => import('../views/component.vue')
  },
  {
    path: '/eventCompo',
    name: 'eventCompo',
    component: () => import('../views/eventCompo.vue')
  },
  {
    path: '/template',
    name: 'template',
    component: () => import('../views/template.vue')
  },
  {
    path: '/transition',
    name: 'transition',
    component: () => import('../views/transition.vue')
  },
  {
    path: '/status-transition',
    name: 'status-transition',
    component: () => import('../views/status-transition.vue')
  },
  {
    path: '/mixin',
    name: 'mixin',
    component: () => import('../views/mixin.vue')
  },
  {
    path: '/directive-comp',
    name: 'directive-comp',
    component: () => import('../views/directiveComp.vue')
  },
  {
    path: '/render',
    name: 'render',
    component: () => import('../views/render.vue')
  },
  {
    path: '/filter',
    name: 'filter',
    component: () => import('../views/filter.vue')
  },
  
  // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = new VueRouter({
  routes
})

export default router
