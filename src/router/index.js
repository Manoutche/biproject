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
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContatView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/SingIn.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/ForgotPassword.vue')
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('../views/ResetPassword.vue')
  },{
    path: '/sing-up',
    name: 'sing-up',
    component: () => import('../views/SingUp.vue')
  },{
    path: '/wishlist',
    name: 'wishlist',
    component: () => import('../views/WishlistView.vue')
  },
  {
    path: '/single-product',
    name: 'single-product',
    component: () => import('../views/SingleProduct.vue')
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
