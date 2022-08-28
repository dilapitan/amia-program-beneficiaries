<template>
  <div class="about">
    <h1 class="text-center">This is the Login</h1>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>
                  Please enter your credentials
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    name="Login"
                    prepend-icon="mdi-account"
                    type="email"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    @click:append="show = !show"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passwordRules"
                    :type="show ? 'text' : 'password'"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  @click="login()"
                  color="primary"
                  :disabled="loading"
                  :loading="loading"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'LoginView',

  data: () => ({
    show: false,
    valid: false,
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [(v) => !!v || 'Password is required'],
    loading: false,
  }),

  methods: {
    login() {
      this.loading = true

      // TODO: LoginService
      setTimeout(() => {
        this.$store.dispatch('setLoginAction', {
          email: this.email,
          password: this.password,
        })

        this.email = ''
        this.password = ''
        this.loading = false
        this.$router.push('/')
      }, 1000)
    },
  },
}
</script>
