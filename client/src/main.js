import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import { auth } from '@/firebase/firebaseConfig'

Vue.config.productionTip = false

if (+process.env.VUE_APP_USE_FIREBASE) {
  let app
  auth.onAuthStateChanged((user) => {
    store.dispatch('setUserAction', user).then(() => {
      if (!app) {
        app = new Vue({
          router,
          store,
          vuetify,
          render: (h) => h(App),
        }).$mount('#app')
      }
    })
  })
} else {
  console.log('Using dummy data for ease of development.')
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app')
}
