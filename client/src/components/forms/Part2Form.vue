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
            :rules="requiredRule"
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
            :rules="requiredRule"
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
            :rules="requiredRule"
          ></v-select>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(2.4) Religion:</div>

        <div>
          <v-text-field
            dense
            clearable
            v-model="religion"
            :rules="requiredRule"
          ></v-text-field>
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
            :rules="requiredRule"
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
              :rules="requiredRule"
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
                :rules="requiredRule"
              ></v-text-field
            ></v-col>
            <v-col cols="12" sm="2">
              <v-text-field
                class="mr-4 small-number-input"
                dense
                clearable
                v-model="householdMember.age"
                label="Age"
                :rules="requiredRule"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <v-text-field
                class="mr-4"
                dense
                clearable
                v-model="householdMember.gender"
                label="Gender"
                :rules="requiredRule"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field
                class="long-input"
                dense
                clearable
                v-model="householdMember.relationToTheRespondent"
                label="Relation to Respondent"
                :rules="requiredRule"
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
        <v-btn
          :disabled="!checkLastElementIfNull(householdMembersList)"
          @click="addHouseholdMember()"
          color="primary"
          small
          outlined
        >
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
            :rules="requiredRule"
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
            :rules="requiredRule"
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
              :rules="requiredRule"
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
            :rules="requiredRule"
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
            :rules="requiredRule"
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
              :rules="requiredRule"
              label="Please specify"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="4" md="2" class="mr-2 text-body-2">
          (2.11) Other Sources of Income:
        </v-col>

        <v-col cols="12" sm="6">
          <v-combobox
            v-model="otherSourcesOfIncome"
            :rules="[requiredRuleVComboBox]"
            :items="otherSourcesOfIncomeList"
            label="Select options"
            multiple
            dense
          ></v-combobox>
        </v-col>
      </v-row>

      <div
        :class="{
          'ml-5': $vuetify.breakpoint.xsOnly,
          'ml-10': $vuetify.breakpoint.smAndUp,
        }"
      >
        <v-row v-if="otherSourcesOfIncome.includes('Regular Job')">
          <v-col cols="12" sm="4">
            <v-text-field
              dense
              clearable
              v-model="otherSourcesOfIncomeRegularJobSpecify"
              :rules="requiredRule"
              label="Please specify Regular Job"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row v-if="otherSourcesOfIncome.includes('Own Business')">
          <v-col cols="12" sm="4">
            <v-text-field
              dense
              clearable
              v-model="otherSourcesOfIncomeOwnBusinessSpecify"
              :rules="requiredRule"
              label="Please specify Own Business"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row v-if="otherSourcesOfIncome.includes('Others')">
          <v-col cols="12" sm="4">
            <v-text-field
              dense
              clearable
              v-model="otherSourcesOfIncomeOthersSpecify"
              :rules="requiredRule"
              label="Please specify Other source of income"
            ></v-text-field>
          </v-col>
        </v-row>
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
            :rules="requiredRule"
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
            :rules="requiredRule"
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
import {
  checkLastElementIfNull,
  parenthesize,
  stringSplitToObject,
} from '@/helpers'

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

    otherSourcesOfIncomeList: [
      'Farming',
      'Trading',
      'Housekeeping',
      'Regular Job',
      'Non-farm Work',
      'Own Business',
      'OFW Remittances',
      'Others',
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

  props: ['mode', 'part2FormData', 'requiredRule', 'requiredRuleVComboBox'],

  created() {
    if (this.part2FormData !== null) {
      this.setPart2FormData(this.part2FormData)
    }
  },

  methods: {
    addHouseholdMember() {
      this.householdMembersList.push({
        name: null,
        age: null,
        gender: null,
        relationToTheRespondent: null,
      })
    },

    checkLastElementIfNull: checkLastElementIfNull,

    removeHouseholdMember(index) {
      this.householdMembersList.splice(index, 1)
    },

    setPart2FormData(part2FormData) {
      const { age, householdMembers } = part2FormData

      this.age = age
      this.householdMembersList = stringSplitToObject(householdMembers, [
        'name',
        'age',
        'gender',
        'relationToTheRespondent',
      ])
    },

    stringifyArray(array) {
      let stringified = ''

      array.map((source, index) => {
        stringified = stringified.concat(source)

        if (source === 'Regular Job') {
          stringified = stringified.concat(
            parenthesize(this.otherSourcesOfIncomeRegularJobSpecify)
          )
        } else if (source === 'Own Business') {
          stringified = stringified.concat(
            parenthesize(this.otherSourcesOfIncomeOwnBusinessSpecify)
          )
        } else if (source === 'Others') {
          stringified = stringified.concat(
            parenthesize(this.otherSourcesOfIncomeOthersSpecify)
          )
        }

        if (index < array.length - 1) {
          stringified = stringified.concat(', ')
        }
      })

      return stringified
    },

    passForm2Data() {
      // Added dynamic fields
      if (this.belongingToSpecify) {
        this.belongingTo = `${this.belongingTo} (${this.belongingToSpecify})`
      }

      if (this.highestEducationalAttainmentSpecify) {
        this.highestEducationalAttainment = `${this.highestEducationalAttainment} (${this.highestEducationalAttainmentSpecify})`
      }

      if (this.mainSourceOfIncomeSpecify) {
        this.mainSourceOfIncome = `${this.mainSourceOfIncome} (${this.mainSourceOfIncomeSpecify})`
      }

      if (this.membershipInAFarmerGroupOrAssociationOrOrganizationSpecify) {
        this.membershipInAFarmerGroupOrAssociationOrOrganization = `${this.membershipInAFarmerGroupOrAssociationOrOrganization} (${this.membershipInAFarmerGroupOrAssociationOrOrganizationSpecify})`
      }

      const part2Data = {
        age: this.age,
        gender: this.gender,
        civilStatus: this.civilStatus,
        religion: this.religion,
        belongingTo: this.belongingTo,
        householdMembers: this.stringifyHouseholdMembers(
          this.householdMembersList
        ),
        yearsOfFarmingExperience: this.yearsOfFarmingExperience,
        highestEducationalAttainment: this.highestEducationalAttainment,
        languagesOrDialectsSpoken: this.languagesOrDialectsSpoken,
        mainSourceOfIncome: this.mainSourceOfIncome,
        otherSourcesOfIncome: this.stringifyArray(this.otherSourcesOfIncome),
        averageGrossMonthlyIncomeOfHousehold:
          this.averageGrossMonthlyIncomeOfHousehold,
        averageGrossMonthlyFarmIncome: this.averageGrossMonthlyFarmIncome,
        membershipInAFarmerGroupOrAssociationOrOrganization:
          this.membershipInAFarmerGroupOrAssociationOrOrganization,
        enrolledInRegistrySystemForBasicSectorsInAgriculture:
          this.enrolledInRegistrySystemForBasicSectorsInAgriculture,
      }

      return part2Data
    },

    stringifyHouseholdMembers(array) {
      console.log('array:', array)
      let stringified = ''

      // Trim list to only capture filled up data
      const filtered = array.filter((member) => {
        if (
          member.name &&
          member.age &&
          member.gender &&
          member.relationToTheRespondent
        ) {
          return member
        }
      })

      filtered.map((member, index) => {
        const { name, age, gender, relationToTheRespondent } = member
        const stringifiedMember = `${name}, ${age}, ${gender}, ${relationToTheRespondent}`

        stringified = stringified.concat(stringifiedMember)

        if (index < filtered.length - 1) {
          stringified = stringified.concat('; ')
        }
      })

      return stringified
    },

    stringifyOtherSourcesOfIncome() {
      let stringified = ''
      this.otherSourcesOfIncome.map((source, index) => {
        if (source.id === 'Regular Job') {
          stringified = stringified
            .concat(source.id)
            .concat(parenthesize(this.otherSourcesOfIncomeRegularJobSpecify))
        } else if (source.id === 'Own Business') {
          stringified = stringified
            .concat(source.id)
            .concat(parenthesize(this.otherSourcesOfIncomeOwnBusinessSpecify))
        } else if (source.id === 'Others') {
          stringified = stringified
            .concat(source.id)
            .concat(parenthesize(this.otherSourcesOfIncomeOwnBusinessSpecify))
        } else {
          stringified = stringified.concat(source.id)
        }

        if (index < this.otherSourcesOfIncome.length - 1) {
          stringified = stringified.concat(', ')
        }
      })

      return stringified
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

    otherSourcesOfIncome() {
      if (!this.otherSourcesOfIncome.includes('Regular Job')) {
        this.otherSourcesOfIncomeRegularJobSpecify = null
      }

      if (!this.otherSourcesOfIncome.includes('Own Business')) {
        this.otherSourcesOfIncomeOwnBusinessSpecify = null
      }

      if (!this.otherSourcesOfIncome.includes('Others')) {
        this.otherSourcesOfIncomeOthersSpecify = null
      }
    },
  },
}
</script>

<style scoped>
.multiple-checkbox-error {
  border: 1px solid #b71c1c;
}
</style>
