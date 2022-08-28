<template>
  <v-app>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="primary"
      elevation="1"
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-app-bar-nav-icon>
        <v-img
          max-height="50"
          max-width="50"
          src="./assets/da-amia.png"
        ></v-img>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="ml-2">
        <h2 class="white--text">AMIA</h2>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="white" text>VIEW BENEFICIARIES</v-btn>
      <v-btn class="mr-5" color="white" text>ABOUT</v-btn>

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
    </v-app-bar>

    <v-card color="background" flat height="100%">
      <v-main>
        <router-view />
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: null,
  }),

  created() {
    const theme = localStorage.getItem('dark_theme')
    this.$vuetify.theme.dark = theme === 'true' ? true : false

    // Set the drawer Opened for Large screens immediately, Closed for medium and below.
    if (this.$vuetify.breakpoint.lgAndUp) this.drawer = true
    else this.drawer = false
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString())
    },
  },
}
</script>
