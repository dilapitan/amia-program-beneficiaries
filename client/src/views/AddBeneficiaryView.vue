<template>
  <div class="my-5 mx-10">
    <h3>Add Beneficiary</h3>
    <p class="mt-2 text-body-2">
      This is where you can add a new beneficiary to the list.
    </p>
    <br />
    <v-card class="pa-5" color="middleground" flat height="100%">
      <!-- 0 General -->
      <v-row>
        <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
          <div class="mr-2">
            <strong>SURVEY NO:</strong>
          </div>

          <div>
            <v-text-field
              class="small-number-input"
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
              class="small-number-input"
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
              class="small-number-input"
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

      <div>
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
            <v-text-field
              dense
              clearable
              v-model="farmersCodeNo"
            ></v-text-field>
          </div>
        </div>
      </div>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 2 Socio-demographic Information -->

      <h3>II. SOCIO-DEMOGRAPHIC INFORMATION</h3>

      <br />

      <div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(2.1) Age:</div>

          <div>
            <v-text-field
              class="small-number-input"
              dense
              clearable
              v-model="age"
            ></v-text-field>
          </div>
        </div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(2.2) Gender:</div>

          <div>
            <v-select
              class="middle-length-select"
              :items="genderOptions"
              label="Select option"
            ></v-select>
          </div>
        </div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(2.3) Civil Status:</div>

          <div>
            <v-select
              class="middle-length-select"
              :items="civilStatusOptions"
              label="Select option"
            ></v-select>
          </div>
        </div>
        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(2.4) Religion:</div>

          <div>
            <v-text-field dense clearable v-model="religion"></v-text-field>
          </div>
        </div>
        <div class="d-flex align-baseline" cols="12" sm="12" md="6">
          <div class="mr-2 text-body-2">
            (2.5) Belongs to the following sector:
          </div>

          <div>
            <v-select
              :items="belongingToOptions"
              label="Select option"
              v-model="belongingTo"
            ></v-select>
          </div>
        </div>

        <v-row
          v-if="belongingTo === 'Indigenous People'"
          class="ml-3"
          :class="{ 'mt-2': $vuetify.breakpoint.xsOnly }"
        >
          <v-col cols="12" sm="6" md="3">
            <div>
              <v-text-field
                dense
                clearable
                v-model="belongingToSpecify"
                label="Please specify"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
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

    // 1. Farmer's Basic Information - data variables
    regionOrProvince: null,
    cityOrMunicipality: null,
    barangay: null,
    nameOfFarmer: null,
    contactNo: null,
    farmersCodeNo: null,

    // 2. Socio-demographic Information - data variables
    age: null,
    gender: null,
    civilStatus: null,
    religion: null,
    belongingTo: null,
    belongingToSpecify: null,

    // 2. Socio-demographic Information - UI variables
    genderOptions: ['Female', 'Male', 'LGBTQ+', 'Prefer not to say'],
    civilStatusOptions: ['Single', 'Married', 'Widow/Widower', 'Separated'],
    belongingToOptions: [
      'Senior Citizen',
      'Person with Disability',
      'Indigenous People',
      '4Ps beneficiary (including household members)',
    ],
  }),
}
</script>

<style scoped>
.small-number-input {
  width: 70px;
}

.middle-length-select {
  width: 200px;
}
</style>
