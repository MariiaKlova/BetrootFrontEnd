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
  },
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
  // },

  // = Далі ↓ сторінка блогу в якому будуть окремі статті всередині
  //* Blog - батьківський
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/blog/List.vue'),
    // children: [{
    //   path: ':id',
    //   name: 'BlogOne',
    //   component: () => import('../views/blog/One.vue')
    // }]
  }, 
  //* BlogOne - дочірній єлемент в секредені Blog.
  { 
    path: '/blog/:id',  //* треба передавати id дочірньої сторінки
    name: 'BlogOne',
    component: () => import('../views/blog/One.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router