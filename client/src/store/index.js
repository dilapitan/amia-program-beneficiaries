import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { SET_LOGIN, SET_BENEFICIARIES } from './mutation-types'

export default new Vuex.Store({
  state: {
    user: null,
    beneficiaries: [
      {
        surveyNo: 1,
        date: new Date().toLocaleDateString(),
        interviewStart: new Date().toLocaleDateString(),
        interviewEnd: new Date().toLocaleDateString(),
        nameOfInterviewer: 'Troy Bolton',
        province: 'ALBAY',
        cityOrMunicipality: 'Bacacay',
        barangay: 'Brgy 1',
        nameOfFarmer: 'Juan Magsasaka',
      },
      {
        surveyNo: 2,
        date: new Date().toLocaleDateString(),
        interviewStart: new Date().toLocaleDateString(),
        interviewEnd: new Date().toLocaleDateString(),
        nameOfInterviewer: 'Gabriella Montez',
        province: 'ALBAY',
        cityOrMunicipality: 'Bacacay',
        barangay: 'Brgy 3',
        nameOfFarmer: 'Sisa Magsasaka',
      },
      {
        surveyNo: 3,
        date: new Date().toLocaleDateString(),
        interviewStart: new Date().toLocaleDateString(),
        interviewEnd: new Date().toLocaleDateString(),
        nameOfInterviewer: 'Sharpay Evans',
        province: 'CAMARINES NORTE',
        cityOrMunicipality: 'Capalonga',
        barangay: 'Brgy 1',
        nameOfFarmer: 'Pedro Magsasaka',
      },
      {
        surveyNo: 4,
        date: new Date().toLocaleDateString(),
        interviewStart: new Date().toLocaleDateString(),
        interviewEnd: new Date().toLocaleDateString(),
        nameOfInterviewer: 'Ryan Evans',
        province: 'CAMARINES SUR',
        cityOrMunicipality: 'Bombon',
        barangay: 'Brgy 2',
        nameOfFarmer: 'Florantina Magsasaka',
      },
      {
        surveyNo: 5,
        date: new Date().toLocaleDateString(),
        interviewStart: new Date().toLocaleDateString(),
        interviewEnd: new Date().toLocaleDateString(),
        nameOfInterviewer: 'Chad Danforth',
        province: 'CATANDUANES',
        cityOrMunicipality: 'Masbate City',
        barangay: 'Brgy 2',
        nameOfFarmer: 'Berto Magsasaka',
      },
      {
        surveyNo: 6,
        date: new Date().toLocaleDateString(),
        interviewStart: new Date().toLocaleDateString(),
        interviewEnd: new Date().toLocaleDateString(),
        nameOfInterviewer: 'Taylor McKessie',
        province: 'MASBATE',
        cityOrMunicipality: 'Panganiban',
        barangay: 'Brgy 5',
        nameOfFarmer: 'Lusiang Magsasaka',
      },
    ],
    beneficiariesPerProvince: [
      {
        province: 'ALBAY',
        beneficiaries: [
          {
            count: 1,
            province: 'ALBAY',
            cityOrMunicipality: 'Bacacay',
            barangay: 'Brgy 1',
            nameOfFarmer: 'Juan Magsasaka',
          },
          {
            count: 2,
            province: 'ALBAY',
            cityOrMunicipality: 'Bacacay',
            barangay: 'Brgy 3',
            nameOfFarmer: 'Sisa Magsasaka',
          },
        ],
      },
      {
        province: 'CAMARINES NORTE',
        beneficiaries: [
          {
            count: 1,
            province: 'CAMARINES NORTE',
            cityOrMunicipality: 'Capalonga',
            barangay: 'Brgy 1',
            nameOfFarmer: 'Pedro Magsasaka',
          },
        ],
      },
      {
        province: 'CAMARINES SUR',
        beneficiaries: [
          {
            count: 1,
            province: 'CAMARINES SUR',
            cityOrMunicipality: 'Bombon',
            barangay: 'Brgy 2',
            nameOfFarmer: 'Florantina Magsasaka',
          },
        ],
      },
      {
        province: 'CATANDUANES',
        beneficiaries: [
          {
            count: 1,
            province: 'CATANDUANES',
            cityOrMunicipality: 'Masbate City',
            barangay: 'Brgy 2',
            nameOfFarmer: 'Berto Magsasaka',
          },
        ],
      },
      {
        province: 'MASBATE',
        beneficiaries: [
          {
            count: 1,
            province: 'MASBATE',
            cityOrMunicipality: 'Panganiban',
            barangay: 'Brgy 5',
            nameOfFarmer: 'Lusiang Magsasaka',
          },
        ],
      },
      {
        province: 'SORSOGON',
        beneficiaries: [],
      },
    ],

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
