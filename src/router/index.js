import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsCategory from '@/views/ProductsCategory.vue'
import ProductDetails from '@/views/ProductDetails.vue';
import CartPage from '@/views/CartPage.vue';
import CheckOut from '@/views/CheckOut.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(){
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products_category',
      component: ProductsCategory,
    },
    {
      path: '/products/product-details/:productId',
      name: 'product_details',
      component: ProductDetails,
    },
    {
      path: '/cart-page',
      name: 'cart-page',
      component: CartPage,
    },
    {
      path: '/checkout',
      name: 'check-out',
      component: CheckOut,
    },
  ],
})

export default router
