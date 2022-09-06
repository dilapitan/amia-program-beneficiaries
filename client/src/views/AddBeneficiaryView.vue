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

        <div class="d-flex align-baseline" cols="12" sm="12" md="12">
          <div class="mr-2 text-body-2">
            (2.6) Household Members (farmer not included):
          </div>
        </div>

        <div class="mt-3 ml-5">
          <div
            v-for="(householdMember, index) in householdMembers"
            :key="index"
          >
            <v-row class="d-flex align-baseline">
              <v-col cols="12" sm="1">{{ index + 1 }}</v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  class="mr-4"
                  dense
                  clearable
                  v-model="householdMember.name"
                  label="Name"
                ></v-text-field
              ></v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  class="mr-4 small-number-input"
                  dense
                  clearable
                  v-model="householdMember.age"
                  label="Age"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  class="mr-4"
                  dense
                  clearable
                  v-model="householdMember.gender"
                  label="Gender"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  class="long-input"
                  dense
                  clearable
                  v-model="householdMember.relationToTheRespondent"
                  label="Relation to Respondent"
                ></v-text-field>
              </v-col>
              <v-col v-if="index !== 0" cols="12" sm="1">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      @click="removeHouseholdMember(index)"
                      color="primary"
                      v-bind="attrs"
                      v-on="on"
                    >
                      mdi-cancel
                    </v-icon>
                  </template>
                  <span>Remove Household Member</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </div>
          <br />
          <v-btn @click="addHouseholdMember()" color="primary" small>
            ADD MORE MEMBER
          </v-btn>
        </div>

        <br />

        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(2.7) Years of Farming Experience:</div>

          <div>
            <v-text-field
              dense
              clearable
              v-model="yearsOfFarmingExperience"
            ></v-text-field>
          </div>
        </div>

        <div class="d-flex align-baseline" cols="12" sm="12" md="6">
          <div class="mr-2 text-body-2">
            (2.8) Highest Educational Attainment:
          </div>

          <div>
            <v-select
              :items="highestEducationalAttainmentOptions"
              label="Select option"
              v-model="highestEducationalAttainment"
            ></v-select>
          </div>
        </div>

        <v-row
          v-if="highestEducationalAttainment === 'Others'"
          class="ml-3"
          :class="{ 'mt-2': $vuetify.breakpoint.xsOnly }"
        >
          <v-col cols="12" sm="6" md="3">
            <div>
              <v-text-field
                dense
                clearable
                v-model="highestEducationalAttainmentSpecify"
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
    householdMembers: [
      {
        name: null,
        age: null,
        gender: null,
        relationToTheRespondent: null,
      },
    ],
    yearsOfFarmingExperience: null,
    highestEducationalAttainment: null,
    highestEducationalAttainmentSpecify: null,

    // 2. Socio-demographic Information - UI variables
    genderOptions: ['Female', 'Male', 'LGBTQ+', 'Prefer not to say'],
    civilStatusOptions: ['Single', 'Married', 'Widow/Widower', 'Separated'],
    belongingToOptions: [
      'Senior Citizen',
      'Person with Disability',
      'Indigenous People',
      '4Ps beneficiary (including household members)',
    ],
    highestEducationalAttainmentOptions: [
      'Elementary Graduate',
      'High School Graduate',
      'College Graduate',
      'Vocational Course Graduate',
      'Others',
    ],
  }),

  methods: {
    addHouseholdMember() {
      this.householdMembers.push({
        name: null,
        age: null,
        gender: null,
        relationToTheRespondent: null,
      })
    },
    removeHouseholdMember(index) {
      this.householdMembers.splice(index, 1)
    },
  },
}
</script>

<style scoped>
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
