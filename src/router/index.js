import i18n from '@/i18n'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:`${i18n.locale}`
  },
  {
    path:'/:lang',
    component:{
      render(c) {return c('router-view')}
    },
    children:[
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: 'flashnight',
        name: 'flashnight',
        component: () => import(/* webpackChunkName: "flashnight" */ '../views/FlashNight.vue')
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import(/* webpackChunkName: "checkout" */ '../views/CheckOut.vue')
      },
      {
        path: 'chat',
        name: 'chat',
        component: () => import(/* webpackChunkName: "chat" */ '../views/chat/ChatContainer.vue')
      },
      {
        path: 'category',
        name: 'category',
        component: () => import(/* webpackChunkName: "category" */ '../views/add/AddCategory.vue')
      },
      {
        path: 'category/:id',
        name: 'editcategory',
        component: () => import(/* webpackChunkName: "editcategory" */ '../views/add/EditCategory.vue')
      },
      {
        path: 'wishlist',
        name: 'wishlist',
        component: () => import(/* webpackChunkName: "wishlist" */ '../views/WishList.vue')
      },
  
      {
        path: 'productlist',
        name: 'productlist',
        component: () => import(/* webpackChunkName: "productlist" */ '../views/ProductList.vue')
      },
      {
        path: 'productlist/:id',
        name: 'productdetail',
        component: () => import(/* webpackChunkName: "productdetail" */ '../views/ProductDetail.vue')
      },
    ]
  }

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
