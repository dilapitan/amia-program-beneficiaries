<template>
  <div class="my-5 mx-10">
    <h3>Add Beneficiary</h3>
    <p class="mt-2 text-body-2">
      This is where you can add a new beneficiary to the list.
    </p>
    <br />
    <v-card class="pa-2" color="middleground" flat height="100%">
      <v-row>
        <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
          <div class="mr-2">
            <strong>SURVEY NO:</strong>
          </div>

          <div>
            <v-text-field
              :style="{ width: '70px' }"
              dense
              clearable
            ></v-text-field>
          </div>
        </v-col>

        <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
          <div class="mr-2">
            <strong>DATE:</strong>
          </div>

          <div>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  dense
                  v-model="date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </div>
        </v-col>

        <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
          <div class="mr-2">
            <strong>INTERVIEW START:</strong>
          </div>

          <div>
            <v-text-field
              :style="{ width: '70px' }"
              dense
              clearable
            ></v-text-field>
          </div>
        </v-col>

        <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
          <div class="mr-2">
            <strong>INTERVIEW END:</strong>
          </div>

          <div>
            <v-text-field
              :style="{ width: '70px' }"
              dense
              clearable
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex align-baseline" cols="12" sm="5">
          <div class="mr-2">
            <strong>NAME OF INTERVIEWER:</strong>
          </div>

          <div>
            <v-text-field dense clearable></v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AddBeneficiaryView',

  data: () => ({
    date: null,
    menu: false,
    modal: false,
    menu2: false,
  }),
}
</script>
