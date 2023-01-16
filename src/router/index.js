import i18n from '@/i18n'
import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientPage from '../views/client/ClientPage.vue';
import AdminPage from '../views/admin/AdminPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render(c) { return c('router-view') }
    },
    children: [
      {
        path: '/',
        name: 'clientpage',
        component: ClientPage,
        redirect: "/home",
        children: [
          {
            path: 'home',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '../views/client/view/HomeView.vue')
          },
          {
            path: 'womentrend',
            name: 'women-trends',
            component: () => import(/* webpackChunkName: "women-trends" */ '../views/client/view/WomenTrends.vue')
          },
          {
            path: 'babytrend',
            name: 'baby-trends',
            component: () => import(/* webpackChunkName: "baby-trends" */ '../views/client/view/BabyTrends.vue')
          },
          {
            path: 'mantrend',
            name: 'man-trends',
            component: () => import(/* webpackChunkName: "man-trends" */ '../views/client/view/ManTrends.vue')
          },
          {
            path: 'flashnight',
            name: 'flashnight',
            component: () => import(/* webpackChunkName: "flashnight" */ '../views/client/view/FlashNight.vue')
          },
          {
            path: 'checkout',
            name: 'checkout',
            component: () => import(/* webpackChunkName: "checkout" */ '../views/client/view/CheckOut.vue')
          },
          {
            path: 'wishlist',
            name: 'wishlist',
            component: () => import(/* webpackChunkName: "wishlist" */ '../views/client/view/WishList.vue')
          },

          {
            path: 'productlist',
            name: 'productlist',
            component: () => import(/* webpackChunkName: "productlist" */ '../views/client/view/ProductList.vue')
          },
          {
            path: 'productlist/:id',
            name: 'productdetail',
            // meta: { authOnly: true },
            component: () => import(/* webpackChunkName: "productdetail" */ '../views/client/view/ProductDetail.vue')
          },
          // {                 unused
          //   path: 'chat',
          //   name: 'chat',
          //   component: () => import(/* webpackChunkName: "chat" */ '../views/chat/ChatContainer.vue')
          // },
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
            path: 'formfield',
            name: 'formfield',
            component: () => import(/* webpackChunkName: "formfield" */ '../views/client/view/FormField.vue')
          },

        ],
      },
      {
        path: '/admin',
        name: 'adminpage',
        component: AdminPage,
        redirect: "/admin/dashboard",
        meta: { authOnly: true },
        children: [
          {
            path: 'dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "dashboard" */ '@/views/admin/DashBoard.vue')
          },
          {

            name: 'Email',
            path: '/admin/email',
            component: () => import(/* webpackChunkName: "email" */ '@/views/admin/EmailView.vue'),

            children: [

              {
                name: 'InboxView',
                path: 'inbox',
                component: () => import(/* webpackChunkName: "inbox" */ '@/views/admin/mails/InboxView.vue')
              },
              {
                name: 'EmailCompose',
                path: 'email-compose',
                component: () => import(/* webpackChunkName: "email-compose" */ '@/views/admin/mails/EmailCompose.vue')
              },
              {
                name: 'Sent',
                path: 'sent',
                component: () => import(/* webpackChunkName: "sent" */ '@/views/admin/mails/SentMessage.vue')
              },
              {
                name: 'Starred',
                path: 'starred',
                component: () => import(/* webpackChunkName: "starred" */ '@/views/admin/mails/StarredMessage.vue')
              },
              {
                name: 'Draft',
                path: 'draft',
                component: () => import(/* webpackChunkName: "draft" */ '@/views/admin/mails/DraftMessage.vue')
              },
              {
                name: 'Delete',
                path: 'delete',
                component: () => import(/* webpackChunkName: "delete" */ '@/views/admin/mails/DeleteMessage.vue')
              },
            ]
          },

          {
            name: 'Page',
            path: '/admin/page',
            component: () => import(/* webpackChunkName: "page" */ '@/views/admin/PageView.vue'),
            children: [
              {
                name: 'Pricing',
                path: 'pricing',
                component: () => import(/* webpackChunkName: "invoice" */ '@/views/admin/pages/PricingView.vue')
              },
              {
                name: 'Chart',
                path: 'chart',
                component: () => import(/* webpackChunkName: "chart" */ '@/views/admin/pages/ChartView.vue')
              },
              {
                name: 'Receipet',
                path: 'receipt',
                component: () => import(/* webpackChunkName: "receipet" */ '@/views/admin/pages/ReceipetView.vue')
              },
            ]
          },
          {
            name: 'Calender',
            path: '/calender',
            component: () => import(/* webpackChunkName: "calender" */ '@/views/admin/CalenderView.vue')
          },
          {
            name: 'Forms',
            path: '/admin/forms',
            component: () => import(/* webpackChunkName: "forms" */ '@/views/admin/FormView.vue'),
            children: [

              {
                name: 'TailwindStyle',
                path: 'tailwindstyle',
                component: () => import(/* webpackChunkName: "tailwindstyle" */ '@/views/admin/forms/TailwindStyle.vue')
              },
              {
                name: 'TableForm',
                path: 'tableform',
                component: () => import(/* webpackChunkName: "tableform" */ '@/views/admin/forms/TableForm.vue')
              },
              {
                name: 'ItemList',
                path: 'itemlist',
                icon: 'mdi-receipt-text',
                component: () => import(/* webpackChunkName: "itemlist" */ '@/views/admin/forms/ItemList.vue')
              },
              {
                name: 'RegisterForm',
                path: 'registerform',
                component: () => import(/* webpackChunkName: "registerform" */ '@/views/admin/forms/RegisterForm.vue')
              },
              {
                name: 'UploadForm',
                path: 'uploadform',
                component: () => import(/* webpackChunkName: "uploadform" */ '@/views/admin/forms/UploadForm.vue')
              },
            ]
          },
          {
            name: 'profile',
            path: 'profile',
            component: () => import(/* webpackChunkName: "profile" */ '@/views/admin/ProfileView.vue')
          },
        ]
      }

      //admin route



    ]
  }


];



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function isLoggedIn() {
  return localStorage.getItem("token");
}



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: "/admin",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});


export default router
