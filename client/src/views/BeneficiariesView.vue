<template>
  <div class="my-5 mx-10">
    <h3>List of Program Beneficiaries</h3>
    <br />
    <v-data-table :headers="headers" :items="beneficiaries" class="elevation-1">
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { text: 'Actions', value: 'actions', sortable: false },

      {
        text: 'Survey No.',
        value: 'surveyNo0',
      },
      { text: 'Date', sortable: false, value: 'date' },
      { text: 'Interview Start', sortable: false, value: 'interviewStart' },
      { text: 'Interview End', sortable: false, value: 'interviewEnd' },
      {
        text: 'Name of Interviewer',
        sortable: false,
        value: 'nameOfInterviewer',
      },

      // 1. Farmer's Basic Information

      {
        text: '(1.1) Region/Province',
        sortable: false,
        value: 'regionOrProvince',
      },
      {
        text: '(1.2) City/Municipality',
        sortable: false,
        value: 'cityOrMunicipality',
      },
      { text: '(1.3) Barangay', sortable: false, value: 'barangay' },
      { text: '(1.4) Name of Farmer', sortable: false, value: 'nameOfFarmer' },
      { text: '(1.5) Contact No.', sortable: false, value: 'contactNo' },
      {
        text: `(1.6) Farmer's Code No.`,
        sortable: false,
        value: 'farmersCodeNo',
      },

      // 2. Socio-Demographic Information

      { text: '(2.1) Age', sortable: false, value: 'age' },
      { text: '(2.2) Gender', sortable: false, value: 'gender' },
      { text: '(2.3) Civil Status', sortable: false, value: 'civilStatus' },
      { text: '(2.4) Religion', sortable: false, value: 'religion' },
      { text: '(2.5) Beloning To', sortable: false, value: 'belongingTo' },
      {
        text: '(2.6) Household Members (farmer not included)',
        sortable: false,
        value: 'householdMembers',
      },
      {
        text: '(2.7) Years of Farming Experience',
        sortable: false,
        value: 'yearsOfFarmingExperience',
      },
      {
        text: '(2.8) Highest Educational Attainment',
        sortable: false,
        value: 'highestEducationalAttainment',
      },
      {
        text: '(2.9) Languages/Dialects spoken',
        sortable: false,
        value: 'languagesOrDialectsSpoken',
      },
      {
        text: '(2.10) Main Source of Income',
        sortable: false,
        value: 'mainSourceOfIncome',
      },
      {
        text: '(2.11) Other Sources of Income',
        sortable: false,
        value: 'otherSourcesOfIncome',
      },
      {
        text: '(2.12) Average Gross Monthly Income of Household (PhP)',
        sortable: false,
        value: 'averageGrossMonthlyIncomeOfHousehold',
      },
      {
        text: '(2.13) Average Gross Monthly Farm Income (PhP)',
        sortable: false,
        value: 'averageGrossMonthlyFarmIncome',
      },
      {
        text: '(2.14) Membership In A Farmer Group/Association/Organization',
        sortable: false,
        value: 'membershipInAFarmerGroupOrAssociationOrOrganization',
      },
      {
        text: '(2.15) Enrolled in Registry System for Basic Sectors In Agriculture (RSBSA)',
        sortable: false,
        value: 'enrolledInRegistrySystemForBasicSectorsInAgriculture',
      },
    ],
    beneficiaries: [],
  }),

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.beneficiaries = [
        {
          surveyNo0: 1,
          date: new Date().toLocaleDateString(),
          interviewStart: new Date().toLocaleDateString(),
          interviewEnd: new Date().toLocaleDateString(),
          nameOfInterviewer: 'John Doe',
          regionOrProvince: 'Region IV-B',
          cityOrMunicipality: 'Palawan',
          barangay: 'Barangay I',
          nameOfFarmer: 'Rosch V. Aum',
          contactNo: '09112223333',
          farmersCodeNo: 111,
          age: 29,
          gender: 'Male',
          civilStatus: 'Single',
          religion: 'Christian',
          belongingTo: '4Ps beneficiariy',
          householdMembers: 'Rezalea Aum,25,Female,Sister',
          yearsOfFarmingExperience: 5,
          highestEducationalAttainment: 'College graduate',
          languagesOrDialectsSpoken: 'Tagalog, English',
          mainSourceOfIncome: 'Farming',
          otherSourcesOfIncome: 'Trading',
          averageGrossMonthlyIncomeOfHousehold: '20,001-30,000',
          averageGrossMonthlyFarmIncome: '20,001-30,000',
          membershipInAFarmerGroupOrAssociationOrOrganization: 'No',
          enrolledInRegistrySystemForBasicSectorsInAgriculture: 'Yes',
        },
      ]
    },

    editItem(item) {
      console.log('item:', item)
    },

    deleteItem(item) {
      console.log('item:', item)
    },

    deleteItemConfirm() {
      this.closeDelete()
    },

    close() {},

    closeDelete() {},
  },
}
</script>
