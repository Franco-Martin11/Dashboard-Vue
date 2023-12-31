import { OptionLinkRouteArr } from '@/constants/LinkRouteData'
import { createRouter, createWebHistory } from 'vue-router'
const dataRouter = OptionLinkRouteArr.map((element) => {
  return {
    path: element.urlRoute,
    name: element.nameIcon,
    component: () => import(`../views/${element.textLabel}/${element.textLabel}View.vue`)
  }
})
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...dataRouter,
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Dashboard/DashboardView.vue')
    },

    {
      path: '/invoices/customer/:customerNamerQuery',
      name: 'customer-client',
      component: () => import('../views/Invoice/CustomerView.vue'),
      children: [
        {
          path: ':id',
          name: 'invoice-details',
          component: () => import('../views/Invoice/InvoiceDetailsView.vue')
        }
      ]
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404NotFound.vue')
    }
  ]
})

export default router
