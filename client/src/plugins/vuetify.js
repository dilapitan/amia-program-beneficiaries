import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#5B821A',
        accent: '#FFAD00',
        background: '#EFEFEF',
        middleground: '#FFFFFF',
        warning: '#FF9800',
        error: '#B71C1C',
      },
      dark: {
        primary: '#5B821A',
        accent: '#FFAD00',
        background: '#15202b',
        middleground: '#202934',
        warning: '#FF9800',
        error: '#B71C1C',
      },
    },
  },
})
