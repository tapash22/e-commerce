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
        path: 'productlist',
        name: 'productlist',
        component: () => import(/* webpackChunkName: "productlist" */ '../views/ProductList.vue')
      },
      {
        path: 'productdetail/:id',
        name: 'productdetail',
        props:'id',
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
