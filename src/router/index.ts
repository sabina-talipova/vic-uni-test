import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/WebApp/views/RandomUsers.vue'),
    },
    {
      path: '/our-students',
      name: 'Our students',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/RandomUsers.vue'),
      component: () => import('../components/WebApp/views/RandomUsers.vue'),
    },
    {
      path: '/our-tutors',
      name: 'Our tutors',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/RandomUsers.vue'),
      component: HomeView,
    },
    {
      path: '/settings',
      name: 'Settings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/RandomUsers.vue'),
      component: HomeView,
    },
  ],
})

export default router
