import {
  createRouter,
  createWebHistory
} from 'vue-router'

import HomeView from '../views/HomeView.vue' //* <--1 варіант додавання компоненту

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView //* <--1 варіант додавання компоненту
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('../views/Features.vue') //! <-- 2 варіант додавання компоненту
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue')
  }
  // {
  //   path: '/teams',
  //   name: 'Our Team',
  //   component: () => import('../views/OurTeam.vue')
  // },
  // {
  //   path: '/testimonials',
  //   name: 'Testimonials',
  //   component: () => import('../views/Testimonials.vue')
  // },
  // {
  //   path: '/download',
  //   name: 'Download',
  //   component: () => import('../views/Download.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router