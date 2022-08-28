<template>
  <v-container>
    <div :class="`text-overline text-sm-h5`">
      <span class="error--text font-weight-bold">ERROR 404.</span>
      Page not found.
    </div>

    <br />

    <v-btn color="primary" outlined to="/"> Go Home </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'PageNotFound',
}
</script>
