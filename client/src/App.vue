<template>
  <v-app>
    <v-navigation-drawer
      v-if="isLoggedIn || $vuetify.breakpoint.xsOnly"
      color="background"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list :style="{ padding: 0 }" dense>
        <v-list-item v-if="isLoggedIn" to="/beneficiaries">
          <v-icon class="mr-2">mdi-account-group</v-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span class="text-button"> VIEW BENEFICIARIES </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <div v-if="$vuetify.breakpoint.xsOnly">
          <br />

          <v-list-item v-if="isLoggedIn" @click="logout()" to="#">
            <v-list-item-content>
              <v-list-item-title>
                <span class="text-button">LOGOUT</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-else to="/login">
            <v-list-item-content>
              <v-list-item-title>
                <span class="text-button">ADMIN</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-content>
              <v-list-item-title>
                <span class="text-button">ABOUT</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="toggleTheme()">
            <v-list-item-content>
              <v-list-item-title>
                <span v-if="!$vuetify.theme.dark" class="text-button">
                  GO DARK THEME
                </span>
                <span v-else class="text-button">GO LIGHT THEME</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="primary"
      elevation="1"
      app
    >
      <v-app-bar-nav-icon
        v-if="isLoggedIn || $vuetify.breakpoint.xsOnly"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>

      <v-app-bar-nav-icon>
        <v-img
          max-height="50"
          max-width="50"
          src="./assets/da-amia.png"
        ></v-img>
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-btn text @click="goHome()">
          <h1 class="white--text">AMIA</h1>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div v-if="$vuetify.breakpoint.smAndUp">
        <v-btn color="white" text>ABOUT</v-btn>

        <v-btn
          v-if="isLoggedIn"
          @click="logout()"
          class="mr-5"
          color="white"
          text
        >
          LOGOUT
        </v-btn>
        <v-btn v-else class="mr-5" color="white" text to="/login">ADMIN</v-btn>

        <v-btn
          @click="toggleTheme()"
          v-if="!$vuetify.theme.dark"
          bottom
          color="white"
          outlined
        >
          GO DARK THEME
        </v-btn>

        <v-btn @click="toggleTheme()" v-else color="white" outlined>
          GO LIGHT THEME
        </v-btn>
      </div>
    </v-app-bar>

    <v-card color="background" flat height="100%">
      <v-main>
        <router-view />
      </v-main>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-card>
  </v-app>
</template>

<script>
import { auth } from '@/firebase/firebaseConfig'

export default {
  name: 'App',

  data: () => ({
    drawer: null,
    fab: false,
  }),

  created() {
    const theme = localStorage.getItem('dark_theme')
    this.$vuetify.theme.dark = theme === 'true' ? true : false

    // Set the drawer Opened for Large screens immediately, Closed for medium and below.
    if (this.$vuetify.breakpoint.lgAndUp) this.drawer = true
    else this.drawer = false

    auth.onAuthStateChanged((user) =>
      this.$store.dispatch('setUserAction', user)
    )
  },

  computed: {
    isLoggedIn() {
      return Boolean(this.$store.state.user.loggedIn)
    },
  },

  methods: {
    goHome() {
      this.$router.push('/')
    },

    goToLogin() {
      this.$router.push('/login')
    },

    logout() {
      this.$store.dispatch('setLogoutAction', null)
      this.$router.push('/').catch(() => {})
    },

    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString())
    },

    // Got this from: https://codepen.io/carlos-henreis/pen/vzXKBJ
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },

    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>

<style>
.small-number-input {
  width: 70px;
}
.long-input {
  width: 200px;
}

.middle-length-select {
  width: 200px;
}
</style>
