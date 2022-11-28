import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './i18n'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//  import {EventBus} from '@/components/core/EventBus';


//  export const EventBus = new EventBus;

Vue.config.productionTip = false

Vue.use(VueSweetalert2);

router.beforeEach((to,from,next)=>{
  let language = to.params.lang;
  if(!language){
    language = 'en';
  }

  i18n.locale = language;
  next();
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
