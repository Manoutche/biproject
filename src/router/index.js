import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/ShopView.vue')
  },
  {  
    path: '/:pathMatch(.*)*',
    name: 'error-404',
    component: () => import('../views/Error404View.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
