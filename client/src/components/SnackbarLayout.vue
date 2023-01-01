<template>
  <v-snackbar :color="snackbarDetails?.color" v-model="snackbar">
    {{ snackbarDetails?.text }}
    <template v-slot:action="{ attrs }">
      <v-btn icon color="white" v-bind="attrs" @click="closeSnackbar()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'SnackbarLayout',

  computed: {
    snackbar: {
      get() {
        return this.$store.state.snackbar
      },

      set() {},
    },

    snackbarDetails() {
      return this.$store.state.snackbarDetails
    },
  },

  methods: {
    closeSnackbar() {
      this.$store.dispatch('setSnackbarAction', false)
      this.$store.dispatch('setSnackbarDetailsAction', null)
    },
  },
}
</script>
