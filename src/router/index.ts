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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/prueba',
      name: 'Prueba',
      // route level code-splitting
      // this generates a separate chunk (Prueba.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PruebaView.vue')
    },
    {
      path: '/invoices',
      name: 'Invoices',
      // route level code-splitting
      // this generates a separate chunk (Prueba.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PruebaTeleport.vue')
    },
    {
      path: '/balance/:id',
      name: 'balance',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PruebaView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue')
    }
  ]
})

export default router
