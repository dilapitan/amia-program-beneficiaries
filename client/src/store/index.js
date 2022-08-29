import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { SET_LOGIN } from './mutation-types'

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {},
  mutations: {
    [SET_LOGIN](state, credentials) {
      state.user = credentials
    },
  },
  actions: {
    setLoginAction({ commit }, payload) {
      commit('SET_LOGIN', payload)
    },
  },
  modules: {},
})
