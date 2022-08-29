<template>
  <v-container>
    <div :class="`text-overline text-sm-h5`">
      <span class="error--text font-weight-bold">ERROR</span>
      You are not authorized to access this page.
    </div>

    <br />

    <v-btn color="primary" outlined to="/"> Go Home </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'UnauthorizedPage',
}
</script>
