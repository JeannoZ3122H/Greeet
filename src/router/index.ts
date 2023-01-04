import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Decouvrir',
      name: 'Infos',
      component: () => import('../views/FindOut.vue'),
    },
    {
      path: '/Pourquoi',
      name: 'What?',
      component: () => import('../views/WhatbeHere.vue'),
    },
    {
      path: '/Register',
      name: 'Register/Login',
      component: () => import('../views/Register_Log.vue'),
    },
  ]
})

export default router