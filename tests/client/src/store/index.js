import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import ticketManagment from '@/store/ticketManagment.store.js';

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tm: ticketManagment
  }
})
