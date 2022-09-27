<template>
  <div>
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
            v-model="gender"
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
            v-model="civilStatus"
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
          v-for="(householdMember, index) in householdMembersList"
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
              membershipInAFarmerGroupOrAssociationOrOrganization ? 'Yes' : 'No'
            "
          ></v-switch>
          <v-text-field
            class="ma-0 pa-0 mb-2"
            v-if="membershipInAFarmerGroupOrAssociationOrOrganization"
            dense
            clearable
            v-model="membershipInAFarmerGroupOrAssociationOrOrganizationSpecify"
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
  </div>
</template>

<script>
export default {
  data: () => ({
    // 2. Socio-demographic Information - data variables
    age: null,
    gender: null,
    civilStatus: null,
    religion: null,
    belongingTo: null,
    belongingToSpecify: null,
    householdMembers: '',
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
    householdMembersList: [
      {
        name: null,
        age: null,
        gender: null,
        relationToTheRespondent: null,
      },
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
  }),

  methods: {
    addHouseholdMember() {
      this.householdMembersList.push({
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
      this.householdMembersList.splice(index, 1)
    },

    passForm2Data() {
      // Added dynamic fields
      if (this.belongingToSpecify) {
        this.belongingTo = `${this.belongingTo} - ${this.belongingToSpecify}`
      }

      if (this.householdMembersList.length) {
        let _householdMembers = ''
        this.householdMembersList.map((member, index) => {
          let string = ''
          Object.values(member).map((value, index) => {
            string = string.concat(value)

            if (index < Object.values(member).length - 1) {
              string = string.concat(',')
            }
          })

          _householdMembers = _householdMembers.concat(string)
          if (index < this.householdMembersList.length - 1) {
            _householdMembers = _householdMembers.concat('; ')
          }
        })

        this.householdMembers = _householdMembers
      }

      const part2Data = {
        age: this.age,
        gender: this.gender,
        civilStatus: this.civilStatus,
        religion: this.religion,
        belongingTo: this.belongingTo,
        householdMembers: this.householdMembers,
      }

      return part2Data
    },
  },
  watch: {
    highestEducationalAttainment() {
      if (this.highestEducationalAttainment !== 'Others') {
        this.highestEducationalAttainmentSpecify = null
      }
    },

    mainSourceOfIncome() {
      if (
        this.mainSourceOfIncome === 'Regular Job' ||
        this.mainSourceOfIncome === 'Own Business' ||
        this.mainSourceOfIncome === 'Others'
      ) {
        this.mainSourceOfIncomeSpecify = null
      }
    },

    membershipInAFarmerGroupOrAssociationOrOrganization() {
      if (this.membershipInAFarmerGroupOrAssociationOrOrganization === false) {
        this.membershipInAFarmerGroupOrAssociationOrOrganizationSpecify = null
      }
    },
  },
}
</script>
