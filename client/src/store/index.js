import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from '@/firebase/firebaseConfig'
import { signOut } from 'firebase/auth'

Vue.use(Vuex)

import {
  SET_GLOBAL_LOADER,
  SET_LOGIN,
  SET_USER,
  SET_BENEFICIARIES,
  SET_PROVINCE_WITH_THEIR_BENEFICIARIES,
  SET_SNACKBAR,
  SET_SNACKBAR_DETAILS,
} from './mutation-types'

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
    beneficiaries: [],
    provinceWithTheirBeneficiaries: [],
    isLoading: false,
    snackbar: false,
    snackbarDetails: null,

    // UI data variables
    fivePointScale: [
      'Very Severe [Disastrous]',
      'Severe [Critical]',
      'Significant',
      'Somewhat Significant',
      'Irrelevant',
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

  getters: {
    beneficiariesPerProvince: (state) => (province) => {
      if (!province) return state.beneficiaries

      return state.beneficiaries.filter((item) => item.province === province)
    },
  },

  mutations: {
    [SET_GLOBAL_LOADER](state, value) {
      state.isLoading = value
    },

    [SET_LOGIN](state, value) {
      state.user.loggedIn = value
    },

    [SET_USER](state, payload) {
      state.user.data = payload
    },

    [SET_BENEFICIARIES](state, beneficiaries) {
      state.beneficiaries = beneficiaries
    },

    [SET_PROVINCE_WITH_THEIR_BENEFICIARIES](
      state,
      provinceWithTheirBeneficiaries
    ) {
      state.provinceWithTheirBeneficiaries = provinceWithTheirBeneficiaries
    },

    [SET_SNACKBAR](state, flag) {
      state.snackbar = flag
    },

    [SET_SNACKBAR_DETAILS](state, snackbarDetails) {
      state.snackbarDetails = snackbarDetails
    },
  },
  actions: {
    setBeneficiariesAction({ commit }, payload) {
      console.log('payload:', payload)
      commit('SET_BENEFICIARIES', payload)
    },

    setProvinceWithTheirBeneficiariesAction({ commit }, payload) {
      commit('SET_PROVINCE_WITH_THEIR_BENEFICIARIES', payload)
    },

    setGlobalLoaderAction({ commit }, payload) {
      commit('SET_GLOBAL_LOADER', payload)
    },

    async setLoginAction({ commit }, user) {
      commit('SET_LOGIN', user)
    },

    async setLogoutAction({ commit }) {
      await signOut(auth)
      commit('SET_LOGIN', null)
      commit('SET_USER', null)
    },

    async setUserAction({ commit }, user) {
      commit('SET_LOGIN', user !== null)

      if (user) {
        commit('SET_USER', {
          email: user.email,
          userId: user.uid,
        })
      } else {
        commit('SET_USER', null)
      }
    },

    setSnackbarAction({ commit }, payload) {
      commit('SET_SNACKBAR', payload)
    },

    setSnackbarDetailsAction({ commit }, payload) {
      commit('SET_SNACKBAR_DETAILS', payload)
    },
  },
  modules: {},
})
