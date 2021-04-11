import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from "../plugins/vuetify";

import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:  Layout,
    redirect: '/admin',
  },
  {
    path: '/admin',
    component:  Layout,
    redirect: '/documents',
    meta:{},
    children: [
      {
        path:'/recent-edit',
        component: () => import('@/views/recent-edit'),
        name: 'page-recent-edit',
      },
      {
        path:'/documents',
        component: () => import('@/views/documents'),
        name: 'page-documents',
      },
      {
        path:'/documents/:name',
        component: () => import('@/views/documents'),
        name: 'page-documents',
      },
      {
        path:'/article-tag',
        component: () => import('@/views/tag'),
        name: 'page-tag',
      },
      {
        path:'/article-recycle',
        component: () => import('@/views/recycle'),
        name: 'page-recycle',
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

