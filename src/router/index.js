import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from "../plugins/vuetify";

import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:  Layout,
    redirect: '/documents',
  },
  {
    path: '/documents',
    component:  Layout,
    redirect: '/documents/123',
    meta:{},
    children: [
      {
        path:'/documents/123',
        component: () => import('@/views/documents'),
        name: 'documents',
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

