import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state";
import * as getters from './getters';
import * as mutations from "./mutations";
import * as actions from "./actions";
import flashnightModule from './modules/flashnight';
import productsModule from './modules/product/index';

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,

  modules: {
    flashnight: flashnightModule,
    prod : productsModule,
  }
  
})

export default store;
