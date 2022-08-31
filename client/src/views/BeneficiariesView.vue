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

      // 3. Farm Description
      {
        text: '(3.1) Total Area of Agricultural Land (ha)',
        sortable: false,
        value: 'totalAreaOfAgriculturalLand',
      },
      {
        text: '(3.2) Total Area of Forestry Land (ha)',
        sortable: false,
        value: 'totalAreaOfForestryLand',
      },
      {
        text: '(3.3) Total Cultivated Area (ha)',
        sortable: false,
        value: 'totalCultivatedArea',
      },
      {
        text: '(3.4) Distance from Home to Farm (km)',
        sortable: false,
        value: 'distanceFromHomeToFarm',
      },
      {
        text: '(3.5) Distance from Land to Water Source (km)',
        sortable: false,
        value: 'distanceFromLandToWaterSource',
      },
      {
        text: '(3.6) Distance from Market Nearest Paved (concrete/asphalt) road (km)',
        sortable: false,
        value: 'distanceFromMarketNearestPavedRoad',
      },
      {
        text: '(3.7) Distance from Market/Trading Post (km)',
        sortable: false,
        value: 'distanceFromMarketOrTradingPost',
      },
      {
        text: '(3.8) Irrigation Source',
        sortable: false,
        value: 'irrigationSource',
      },
      {
        text: '(3.9) Months Without Rain',
        sortable: false,
        value: 'monthsWithoutRain',
      },
      {
        text: '(3.10) Position in the Landscape',
        sortable: false,
        value: 'positionInTheLandscape',
      },
      {
        text: '(3.11) Location of Farm',
        sortable: false,
        value: 'locationOfFarm',
      },
      {
        text: '(3.12) Land Tenure',
        sortable: false,
        value: 'landTenure',
      },
      {
        text: '(3.13) Tenancy',
        sortable: false,
        value: 'tenancy',
      },
      {
        text: '(3.14) Land Holding',
        sortable: false,
        value: 'landHolding',
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
          nameOfInterviewer: 'Troy Bolton',
        },
        {
          surveyNo0: 2,
          date: new Date().toLocaleDateString(),
          interviewStart: new Date().toLocaleDateString(),
          interviewEnd: new Date().toLocaleDateString(),
          nameOfInterviewer: 'Gabriella Montez',
        },
        {
          surveyNo0: 3,
          date: new Date().toLocaleDateString(),
          interviewStart: new Date().toLocaleDateString(),
          interviewEnd: new Date().toLocaleDateString(),
          nameOfInterviewer: 'Sharpay Evans',
        },
        {
          surveyNo0: 4,
          date: new Date().toLocaleDateString(),
          interviewStart: new Date().toLocaleDateString(),
          interviewEnd: new Date().toLocaleDateString(),
          nameOfInterviewer: 'Ryan Evans',
        },
        {
          surveyNo0: 5,
          date: new Date().toLocaleDateString(),
          interviewStart: new Date().toLocaleDateString(),
          interviewEnd: new Date().toLocaleDateString(),
          nameOfInterviewer: 'Chad Danforth',
        },
        {
          surveyNo0: 6,
          date: new Date().toLocaleDateString(),
          interviewStart: new Date().toLocaleDateString(),
          interviewEnd: new Date().toLocaleDateString(),
          nameOfInterviewer: 'Taylor McKessie',
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
