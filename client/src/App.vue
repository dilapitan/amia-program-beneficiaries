<template>
  <v-app>
    <template v-if="isUnderConstruction">
      <UnderConstruction />
    </template>

    <template v-else>
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

        <v-app-bar-nav-icon disabled>
          <v-img
            max-height="50"
            max-width="50"
            src="./assets/da-amia.png"
          ></v-img>
        </v-app-bar-nav-icon>

        <v-toolbar-title>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text @click="goHome()" v-bind="attrs" v-on="on">
                <h1 class="white--text">AMIA</h1>
              </v-btn>
            </template>
            <span>Go to Home Page</span>
          </v-tooltip>
        </v-toolbar-title>

        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-chip
              v-if="isLoggedIn"
              color="white"
              small
              outlined
              v-bind="attrs"
              v-on="on"
            >
              <strong>ADMIN</strong>
            </v-chip>
          </template>
          <span>Logged as Admin</span>
        </v-tooltip>

        <v-spacer></v-spacer>

        <v-btn v-if="isIronMan" icon color="white" @click="downloadData()">
          <v-icon>mdi-cloud-download</v-icon>
        </v-btn>

        <div v-if="$vuetify.breakpoint.smAndUp">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon color="white" v-bind="attrs" v-on="on" to="/about">
                <v-icon>mdi-help-circle-outline</v-icon>
              </v-btn>
            </template>
            <span>About Baseline</span>
          </v-tooltip>

          <span class="mr-5">
            <v-tooltip bottom v-if="!$vuetify.theme.dark">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  @click="toggleTheme()"
                  icon
                  color="white"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-lightbulb-off</v-icon>
                </v-btn>
              </template>
              <span>Use Dark Theme</span>
            </v-tooltip>

            <v-tooltip bottom v-else>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  @click="toggleTheme()"
                  color="white"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-lightbulb-on-10</v-icon>
                </v-btn>
              </template>
              <span>Use Light Theme</span>
            </v-tooltip>
          </span>

          <v-tooltip v-if="isLoggedIn" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                @click="logout()"
                class="mr-5"
                color="white"
                text
              >
                LOGOUT
              </v-btn>
            </template>
            <span>Logout as Admin</span>
          </v-tooltip>

          <v-tooltip bottom v-else>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                class="mr-5"
                color="white"
                to="/login"
                outlined
              >
                ADMIN
              </v-btn>
            </template>
            <span>Login as an Admin</span>
          </v-tooltip>
        </div>
      </v-app-bar>

      <v-card color="background" flat height="100%">
        <v-main>
          <p v-if="isLoading" class="text-center mt-10">
            <v-progress-circular indeterminate color="primary" :size="50">
            </v-progress-circular>
          </p>
          <router-view v-else />
        </v-main>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
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
          </template>
          <span>Go to Top of Page</span>
        </v-tooltip>
      </v-card>
    </template>
  </v-app>
</template>

<script>
import { db } from '@/firebase/firebaseConfig'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

import UnderConstruction from '@/components/UnderConstruction.vue'

export default {
  name: 'App',

  components: {
    UnderConstruction,
  },

  data: () => ({
    drawer: null,
    fab: false,
    isUnderConstruction: false,
  }),

  created() {
    if (!+process.env.VUE_APP_UNDER_CONSTRUCTION) {
      this.setTheme()
      this.setDrawer()
      this.initialize()
    } else {
      this.isUnderConstruction = true
    }
  },

  computed: {
    isIronMan() {
      /**
       * This is for only me, the creator of this app, so I can download the data manually
       * and create a backup.
       */
      return this.$store.state.user.data?.email === 'domlapitan@gmail.com'
    },

    isLoggedIn() {
      return Boolean(this.$store.state.user.loggedIn)
    },

    isLoading() {
      return this.$store.state.isLoading
    },
  },

  methods: {
    downloadData() {
      console.log(this.$store.state.beneficiaries)
    },

    goHome() {
      this.$router.push('/').catch(() => {})
    },

    goToLogin() {
      this.$router.push('/login')
    },

    initialize() {
      this.$store.dispatch('setGlobalLoaderAction', true)

      try {
        const q = query(
          collection(db, 'beneficiaries'),
          orderBy('createdAt', 'desc')
        )

        onSnapshot(q, (querySnapshot) => {
          let beneficiaries = []

          querySnapshot.forEach((doc) => {
            const {
              part0,
              part1,
              part2,
              part3,
              part4,
              part5,
              part6,
              part7,
              part8,
              createdAt,
              userId,
              id,
            } = doc.data()

            const item = {
              ...part0,
              ...part1,
              ...part2,
              ...part3,
              ...part4,
              ...part5,
              ...part6,
              ...part7,
              ...part8,
              createdAt,
              userId,
              id,
              beneficiaryId: doc.id,
            }

            beneficiaries.push(item)
          })

          this.$store.dispatch('setBeneficiariesAction', beneficiaries)
          this.setProvincesWithTheirBeneficiaries(beneficiaries)
        })
      } catch (error) {
        this.$store.dispatch('setSnackbarAction', true)
        this.$store.dispatch('setSnackbarDetailsAction', {
          color: 'error',
          text: 'Failed to load data! Please contact admin.',
        })
        this.$store.dispatch('setBeneficiariesAction', [])
      }
      this.$store.dispatch('setGlobalLoaderAction', false)
    },

    logout() {
      this.$store.dispatch('setLogoutAction', null)
      this.$router.push('/').catch(() => {})
    },

    setDrawer() {
      // Set the drawer Opened for Large screens immediately, Closed for medium and below.
      if (this.$vuetify.breakpoint.lgAndUp) this.drawer = true
      else this.drawer = false
    },

    setProvincesWithTheirBeneficiaries(beneficiaies) {
      const ALBAY_INDEX = 0
      const CAMARINES_NORTE_INDEX = 1
      const CAMARINES_SUR_INDEX = 2
      const CATANDUANES_INDEX = 3
      const MASBATE_INDEX = 4
      const SORSOGON_INDEX = 5
      let PROVINCES_WITH_THEIR_BENEFICIARIES = [
        {
          province: 'Albay',
          beneficiaries: [],
        },
        {
          province: 'Camarines Norte',
          beneficiaries: [],
        },
        {
          province: 'Camarines Sur',
          beneficiaries: [],
        },
        {
          province: 'Catanduanes',
          beneficiaries: [],
        },
        {
          province: 'Masbate',
          beneficiaries: [],
        },
        {
          province: 'Sorsogon',
          beneficiaries: [],
        },
      ]

      beneficiaies.forEach((item) => {
        if (item.province === 'ALBAY') {
          PROVINCES_WITH_THEIR_BENEFICIARIES[ALBAY_INDEX].beneficiaries.push(
            item
          )
        } else if (item.province === 'CAMARINES NORTE') {
          PROVINCES_WITH_THEIR_BENEFICIARIES[
            CAMARINES_NORTE_INDEX
          ].beneficiaries.push(item)
        } else if (item.province === 'CAMARINES SUR') {
          PROVINCES_WITH_THEIR_BENEFICIARIES[
            CAMARINES_SUR_INDEX
          ].beneficiaries.push(item)
        } else if (item.province === 'CATANDUANES') {
          PROVINCES_WITH_THEIR_BENEFICIARIES[
            CATANDUANES_INDEX
          ].beneficiaries.push(item)
        } else if (item.province === 'MASBATE') {
          PROVINCES_WITH_THEIR_BENEFICIARIES[MASBATE_INDEX].beneficiaries.push(
            item
          )
        } else if (item.province === 'SORSOGON') {
          PROVINCES_WITH_THEIR_BENEFICIARIES[SORSOGON_INDEX].beneficiaries.push(
            item
          )
        }
      })

      this.$store.dispatch(
        'setProvinceWithTheirBeneficiariesAction',
        PROVINCES_WITH_THEIR_BENEFICIARIES
      )
    },

    setTheme() {
      const theme = localStorage.getItem('dark_theme')
      this.$vuetify.theme.dark = theme === 'true' ? true : false
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
