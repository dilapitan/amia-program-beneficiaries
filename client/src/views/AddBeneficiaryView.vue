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
          <v-btn @click="addHouseholdMember()" color="primary" small outlined>
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

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="2" class="mr-2 text-body-2">
            (2.8) Highest Educational Attainment:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-select
              :items="highestEducationalAttainmentOptions"
              label="Select option"
              v-model="highestEducationalAttainment"
            ></v-select>
          </v-col>
        </v-row>

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

        <div class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(2.9) Languages/Dialects Spoken:</div>

          <div>
            <v-text-field
              dense
              clearable
              v-model="languagesOrDialectsSpoken"
            ></v-text-field>
          </div>
        </div>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="4" md="2" class="mr-2 text-body-2">
            (2.10) Main Source of Income:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-select
              :items="mainSourceOfIncomeOptions"
              label="Select option"
              v-model="mainSourceOfIncome"
            ></v-select>
          </v-col>
        </v-row>

        <v-row
          v-if="
            mainSourceOfIncome === 'Regular Job' ||
            mainSourceOfIncome === 'Own Business' ||
            mainSourceOfIncome === 'Others'
          "
          class="ml-3"
          :class="{ 'mt-2': $vuetify.breakpoint.xsOnly }"
        >
          <v-col cols="12" sm="6" md="3">
            <div>
              <v-text-field
                dense
                clearable
                v-model="mainSourceOfIncomeSpecify"
                label="Please specify"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="4" md="2" class="mr-2 text-body-2">
            (2.11) Other Sources of Income:
          </v-col>
        </v-row>

        <div>
          <div
            :class="{ 'ml-3': $vuetify.breakpoint.smAndUp }"
            v-for="(otherSource, index) in otherSourcesOfIncomeOptions"
            :key="index"
          >
            <div class="d-flex">
              <v-checkbox
                class="mr-2 ma-0 pa-0"
                @click="addOtherSourceOfIncome(otherSource, index)"
                v-model="otherSource.selected"
                :label="otherSource.id"
              ></v-checkbox>
              <v-text-field
                class="ma-0 pa-0 mb-2"
                v-if="otherSource.selected && otherSource.id === 'Regular Job'"
                dense
                clearable
                v-model="otherSourcesOfIncomeRegularJobSpecify"
                label="Please specify"
              ></v-text-field>
              <v-text-field
                class="ma-0 pa-0 mb-2"
                v-if="otherSource.selected && otherSource.id === 'Own Business'"
                dense
                clearable
                v-model="otherSourcesOfIncomeOwnBusinessSpecify"
                label="Please specify"
              ></v-text-field>
              <v-text-field
                class="ma-0 pa-0 mb-2"
                v-if="otherSource.selected && otherSource.id === 'Others'"
                dense
                clearable
                v-model="otherSourcesOfIncomeOthersSpecify"
                label="Please specify"
              ></v-text-field>
            </div>
          </div>
        </div>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="2" class="mr-2 text-body-2">
            (2.12) Average Gross Monthly Income of Household (PhP):
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-select
              :items="averageGrossMonthlyIncomeOfHouseholdOptions"
              label="Select option"
              v-model="averageGrossMonthlyIncomeOfHousehold"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="2" class="mr-2 text-body-2">
            (2.13) Average Gross Monthly Farm Income (PhP):
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-select
              :items="averageGrossMonthlyFarmIncomeOptions"
              label="Select option"
              v-model="averageGrossMonthlyFarmIncome"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="2" class="mr-2 text-body-2">
            (2.14) Membership in a Farmer Group/Association/Organization:
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="membershipInAFarmerGroupOrAssociationOrOrganization"
              :label="
                membershipInAFarmerGroupOrAssociationOrOrganization
                  ? 'Yes'
                  : 'No'
              "
            ></v-switch>
            <v-text-field
              class="ma-0 pa-0 mb-2"
              v-if="membershipInAFarmerGroupOrAssociationOrOrganization"
              dense
              clearable
              v-model="
                membershipInAFarmerGroupOrAssociationOrOrganizationSpecify
              "
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
          <v-col cols="12" sm="5" md="2" class="mr-2 text-body-2">
            (2.15) Enrolled in Registry System for Basic Sectors In Agriculture
            (RSBSA):
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-switch
              v-model="enrolledInRegistrySystemForBasicSectorsInAgriculture"
              :label="
                enrolledInRegistrySystemForBasicSectorsInAgriculture
                  ? 'Yes'
                  : 'No'
              "
            ></v-switch>
          </v-col>
        </v-row>
      </div>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 3 Farm Description -->

      <h3>III. FARM DESCRIPTION</h3>

      <br />

      <div>
        <v-row>
          <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
            <div class="mr-2 text-body-2">
              (3.1) Total Area of Agricultural Land (ha):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="totalAreaOfAgriculturalLand"
              ></v-text-field>
            </div>
          </v-col>

          <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
            <div class="mr-2 text-body-2">
              (3.2) Total Area of Forestry Land (ha):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="totalAreaOfForestryLand"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
            <div class="mr-2 text-body-2">
              (3.3) Total Cultivated Area (ha):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="totalCultivatedArea"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
            <div class="mr-2 text-body-2">
              (3.4) Distance from Home to Farm (km):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="distanceFromHomeToFarm"
              ></v-text-field>
            </div>
          </v-col>

          <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
            <div class="mr-2 text-body-2">
              (3.5) Distance from Land to Water Source (km):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="distanceFromLandToWaterSource"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex align-baseline" cols="12" sm="6" md="8">
            <div class="mr-2 text-body-2">
              (3.6) Distance from Market Nearest Paved (concrete/asphalt) road
              (km):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="distanceFromMarketNearestPavedRoad"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
            <div class="mr-2 text-body-2">
              (3.7) Distance from Market/Trading Post (km):
            </div>

            <div>
              <v-text-field
                class="small-number-input"
                dense
                clearable
                v-model="distanceFromMarketOrTradingPost"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <div class="d-flex align-baseline" cols="12" sm="12" md="6">
          <div class="mr-2 text-body-2">(3.8) Irrigation Source:</div>

          <div>
            <v-select
              :items="irrigationSourceOptions"
              label="Select option"
              v-model="irrigationSource"
            ></v-select>
          </div>
        </div>

        <v-row
          v-if="irrigationSource === 'Others'"
          class="ml-3"
          :class="{ 'mt-2': $vuetify.breakpoint.xsOnly }"
        >
          <v-col cols="12" sm="6" md="3">
            <div>
              <v-text-field
                dense
                clearable
                v-model="irrigationSourceOthersSpecify"
                label="Please specify"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <div class="d-flex align-baseline" cols="12" sm="12" md="6">
          <div class="mr-2 text-body-2">(3.9) Months Without Rain:</div>

          <div>
            <v-combobox
              v-model="monthsWithoutRain"
              :items="months"
              label="Select options"
              multiple
              outlined
              dense
            ></v-combobox>
          </div>
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
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],

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
    languagesOrDialectsSpoken: null,
    mainSourceOfIncome: null,
    mainSourceOfIncomeSpecify: null,
    otherSourcesOfIncome: [],
    otherSourcesOfIncomeRegularJobSpecify: null,
    otherSourcesOfIncomeOwnBusinessSpecify: null,
    otherSourcesOfIncomeOthersSpecify: null,
    averageGrossMonthlyIncomeOfHousehold: null,
    averageGrossMonthlyFarmIncome: null,
    membershipInAFarmerGroupOrAssociationOrOrganization: false,
    membershipInAFarmerGroupOrAssociationOrOrganizationSpecify: null,
    enrolledInRegistrySystemForBasicSectorsInAgriculture: false,

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
    mainSourceOfIncomeOptions: [
      'Farming',
      'Trading',
      'Housekeeping',
      'Regular Job',
      'Non-farm Work (Seasonal/Contractual, e.g. Construction)',
      'Own Business',
      'OFW Remittances',
      'Others',
    ],
    otherSourcesOfIncomeOptions: [
      {
        id: 'Farming',
        selected: false,
      },
      {
        id: 'Trading',
        selected: false,
      },
      {
        id: 'Housekeeping',
        selected: false,
      },
      {
        id: 'Regular Job',
        selected: false,
      },
      {
        id: 'Non-farm Work',
        selected: false,
      },
      {
        id: 'Own Business',
        selected: false,
      },
      {
        id: 'OFW Remittances',
        selected: false,
      },
      {
        id: 'Others',
        selected: false,
      },
    ],
    averageGrossMonthlyIncomeOfHouseholdOptions: [
      '≤ 10,000',
      '10,001 - 20,000',
      '20,001 - 30,000',
      '30,001 - 40,000',
      '40,001 - 50,000',
      '50,001 - 60,000',
      '> 60,000',
    ],
    averageGrossMonthlyFarmIncomeOptions: [
      '≤ 10,000',
      '10,001 - 20,000',
      '20,001 - 30,000',
      '30,001 - 40,000',
      '40,001 - 50,000',
      '50,001 - 60,000',
      '> 60,000',
    ],

    // 3. Farm Description - data variables
    totalAreaOfAgriculturalLand: null,
    totalAreaOfForestryLand: null,
    totalCultivatedArea: null,
    distanceFromHomeToFarm: null,
    distanceFromLandToWaterSource: null,
    distanceFromMarketNearestPavedRoad: null,
    distanceFromMarketOrTradingPost: null,
    irrigationSource: null,
    irrigationSourceOthersSpecify: null,
    monthsWithoutRain: [],

    // 3. Farm Description - UI variables
    irrigationSourceOptions: [
      'NIA (National Irrigation Administration)',
      `CIA (Communal Irrigator's Association)`,
      'Spring',
      'SWIP (Small Wter Impounding Projects)',
      'STW (Shallow Tube Well)',
      'SFR (Small Farm Reservoir)',
      'Rainfall',
      'Electric Pump',
      'Diversion of Water from Dams',
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

    addOtherSourceOfIncome(otherSourceOfIncome, index) {
      if (otherSourceOfIncome.selected)
        this.otherSourcesOfIncome.push(otherSourceOfIncome)
      else {
        this.otherSourcesOfIncome.splice(index, 1)

        if (otherSourceOfIncome.id === 'Regular Job') {
          this.otherSourcesOfIncomeRegularJobSpecify = null
        } else if (otherSourceOfIncome.id === 'Own Business') {
          this.otherSourcesOfIncomeOwnBusinessSpecify = null
        } else if (otherSourceOfIncome.id === 'Others') {
          this.otherSourcesOfIncomeOthersSpecify = null
        }
      }
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
