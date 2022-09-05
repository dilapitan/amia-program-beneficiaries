<template>
  <div class="my-5 mx-10">
    <h3>Add Beneficiary</h3>
    <p class="mt-2 text-body-2">
      This is where you can add a new beneficiary to the list.
    </p>
    <br />
    <v-card class="pa-2" color="middleground" flat height="100%">
      <!-- 0 General -->
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
              v-model="surveyNo"
            ></v-text-field>
          </div>
        </v-col>

        <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
          <div class="mr-2">
            <strong>DATE:</strong>
          </div>

          <div>
            <v-menu
              ref="dateMenu"
              v-model="dateMenu"
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
                <v-btn text color="primary" @click="dateMenu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dateMenu.save(date)">
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
              v-model="interviewStart"
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
              v-model="interviewEnd"
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
            <v-text-field
              dense
              clearable
              v-model="nameOfInterviewer"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 1 Farmer's Basic Information -->

      <h3>I. FARMER'S BASIC INFORMATION</h3>

      <br />

      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.1) Region/Province:</div>

        <div>
          <v-text-field
            dense
            clearable
            v-model="regionOrProvince"
          ></v-text-field>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.2) City/Municipality:</div>

        <div>
          <v-text-field
            dense
            clearable
            v-model="cityOrMunicipality"
          ></v-text-field>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.3) Barangay:</div>

        <div>
          <v-text-field dense clearable v-model="barangay"></v-text-field>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.4) Name of Farmer:</div>

        <div>
          <v-text-field dense clearable v-model="nameOfFarmer"></v-text-field>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.5) Contact No:</div>

        <div>
          <v-text-field dense clearable v-model="contactNo"></v-text-field>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.6) Farmer's Code No:</div>

        <div>
          <v-text-field dense clearable v-model="farmersCodeNo"></v-text-field>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AddBeneficiaryView',

  data: () => ({
    // 0. General Info - data variables
    surveyNo: null,
    date: null,
    interviewStart: null,
    interviewEnd: null,
    nameOfInterviewer: null,

    // 0. General Info - UI variables
    dateMenu: false,

    // 1. Farmer's Basic Information
    regionOrProvince: null,
    cityOrMunicipality: null,
    barangay: null,
    nameOfFarmer: null,
    contactNo: null,
    farmersCodeNo: null,
  }),
}
</script>
