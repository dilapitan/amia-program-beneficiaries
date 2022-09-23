import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { SET_LOGIN } from './mutation-types'

export default new Vuex.Store({
  state: {
    user: null,

    // UI data variables
    fivePointScale: [
      '1 - Very Severe [Disastrous]',
      '2 - Severe [Critical]',
      '3 - Significant',
      '4 - Somewhat Significant',
      '5 - Irrelevant',
    ],
    generalThreeChoice: ['Yes', 'No', `I don't know`],
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    seasonList: ['Wet', 'Dry', 'Both'],
    sourceOfInformationOptions: [
      'TV',
      'Radio',
      'Internet',
      'Flyers',
      'Social Media',
      'Newspaper',
      'Agricultural Technicians (LGU)',
      'Seed Companies',
      'Traders',
      `Cooperatives and Farmers' Association`,
      'Co-Farmers',
      'Brgy. Officials',
      'Friends and Relatives',
      'Agrichemical Suppliers',
      'Others',
    ],
    threePointScale: [
      '1 - Very Important',
      '2 - Important',
      '3 - Not Important',
    ],
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
