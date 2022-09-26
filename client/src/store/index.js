import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { SET_LOGIN, SET_BENEFICIARIES } from './mutation-types'

export default new Vuex.Store({
  state: {
    user: null,
    beneficiaries: [
      {
        surveyNo0: 1,
        date: new Date().toLocaleDateString(),
        interviewStart: new Date().toLocaleDateString(),
        interviewEnd: new Date().toLocaleDateString(),
        nameOfInterviewer: 'Troy Bolton',
      },
      {
        surveyNo0: 2,
        date: new Date().toLocaleDateString(),
        interviewStart: new Date().toLocaleDateString(),
        interviewEnd: new Date().toLocaleDateString(),
        nameOfInterviewer: 'Gabriella Montez',
      },
      {
        surveyNo0: 3,
        date: new Date().toLocaleDateString(),
        interviewStart: new Date().toLocaleDateString(),
        interviewEnd: new Date().toLocaleDateString(),
        nameOfInterviewer: 'Sharpay Evans',
      },
      {
        surveyNo0: 4,
        date: new Date().toLocaleDateString(),
        interviewStart: new Date().toLocaleDateString(),
        interviewEnd: new Date().toLocaleDateString(),
        nameOfInterviewer: 'Ryan Evans',
      },
      {
        surveyNo0: 5,
        date: new Date().toLocaleDateString(),
        interviewStart: new Date().toLocaleDateString(),
        interviewEnd: new Date().toLocaleDateString(),
        nameOfInterviewer: 'Chad Danforth',
      },
      {
        surveyNo0: 6,
        date: new Date().toLocaleDateString(),
        interviewStart: new Date().toLocaleDateString(),
        interviewEnd: new Date().toLocaleDateString(),
        nameOfInterviewer: 'Taylor McKessie',
      },
    ],

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

    [SET_BENEFICIARIES](state, beneficiaries) {
      state.beneficiaries = beneficiaries
    },
  },
  actions: {
    setBeneficiariesAction({ commit }, payload) {
      commit('SET_BENEFICIARIES', payload)
    },

    setLoginAction({ commit }, payload) {
      commit('SET_LOGIN', payload)
    },
  },
  modules: {},
})
