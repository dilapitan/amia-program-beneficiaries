<template>
  <div>
    <div v-if="loadedData">
      <v-data-table
        :headers="headers"
        :items="part0FormData"
        disable-filtering
        disable-pagination
        disable-sort
        hide-default-footer
        dense
      ></v-data-table>

      <br />
      <p>Part 1</p>
      <v-data-table
        :headers="headers"
        :items="part1FormData"
        disable-filtering
        disable-pagination
        disable-sort
        hide-default-footer
        dense
      ></v-data-table>

      <br />
      <p>Part 2</p>
      <v-data-table
        :headers="headers"
        :items="part2FormData"
        disable-filtering
        disable-pagination
        disable-sort
        hide-default-footer
        dense
      ></v-data-table>

      <br />
      <p>Part 3</p>
      <v-data-table
        :headers="headers"
        :items="part3FormData"
        disable-filtering
        disable-pagination
        disable-sort
        hide-default-footer
        dense
      ></v-data-table>
    </div>

    <p v-else>Loading data...</p>
  </div>
</template>

<script>
export default {
  name: 'PreviewTableOfBeneficiaryDetails',

  data: () => ({
    part0FormData: null,
    part1FormData: null,
    part2FormData: null,
    part3FormData: null,
    headers: [
      { text: 'Label', value: 'label', width: '50%' },
      { text: 'Value', value: 'value', width: '50%' },
    ],
  }),

  props: ['beneficiaryDetails'],

  mounted() {
    if (this.beneficiaryDetails) {
      this.setData(this.beneficiaryDetails)
    }
  },

  computed: {
    loadedData() {
      return Boolean(
        this.part0FormData && this.part1FormData && this.part2FormData
      )
    },
  },

  methods: {
    setData(beneficiaryDetails) {
      const {
        // Part 0
        surveyNo,
        date,
        interviewStart,
        interviewEnd,
        nameOfInterviewer,

        // Part 1
        province,
        cityOrMunicipality,
        barangay,
        nameOfFarmer,
        contactNo,
        farmersCodeNo,

        // Part 2
        age,
        gender,
        civilStatus,
        religion,
        belongingTo,
        householdMembers,
        yearsOfFarmingExperience,
        highestEducationalAttainment,
        languagesOrDialectsSpoken,
        mainSourceOfIncome,
        otherSourcesOfIncome,
        averageGrossMonthlyIncomeOfHousehold,
        averageGrossMonthlyFarmIncome,
        membershipInAFarmerGroupOrAssociationOrOrganization,
        enrolledInRegistrySystemForBasicSectorsInAgriculture,

        // Part 3
        totalAreaOfAgriculturalLand,
        totalAreaOfForestryLand,
        totalCultivatedArea,
        distanceFromHomeToFarm,
        distanceFromLandToWaterSource,
        distanceFromMarketNearestPavedRoad,
        distanceFromMarketOrTradingPost,
        irrigationSource,
        monthsWithoutRain,
        positionInTheLandscape,
        locationOfFarm,
        landTenure,
        tenancy,
        landHolding,
      } = beneficiaryDetails

      this.part0FormData = [
        { label: 'Survey Number', value: surveyNo },
        { label: 'Date', value: date },
        { label: 'Interview Start', value: interviewStart },
        { label: 'Interview End', value: interviewEnd },
        { label: 'Name of Interviewer', value: nameOfInterviewer },
      ]

      this.part1FormData = [
        { label: '(1.1) Province', value: province },
        { label: '(1.2) City/Municipality', value: cityOrMunicipality },
        { label: '(1.3) Barangay', value: barangay },
        { label: '(1.4) Name of Farmer', value: nameOfFarmer },
        { label: '(1.5) Contact No.', value: contactNo },
        { label: `(1.6) Farmer's Code No.`, value: farmersCodeNo },
      ]

      this.part2FormData = [
        { label: '(2.1) Age', value: age },
        { label: '(2.2) Gender', value: gender },
        { label: '(2.3) Civil Status', value: civilStatus },
        { label: '(2.4) Religion', value: religion },
        { label: '(2.5) Beloning To', value: belongingTo },
        {
          label: '(2.6) Household Members (farmer not included)',
          value: householdMembers,
        },
        {
          label: '(2.7) Years of Farming Experience',
          value: yearsOfFarmingExperience,
        },
        {
          label: '(2.8) Highest Educational Attainment',
          value: highestEducationalAttainment,
        },
        {
          label: '(2.9) Languages/Dialects spoken',
          value: languagesOrDialectsSpoken,
        },
        { label: '(2.10) Main Source of Income', value: mainSourceOfIncome },
        {
          label: '(2.11) Other Sources of Income',
          value: otherSourcesOfIncome,
        },
        {
          label: '(2.12) Average Gross Monthly Income of Household (PhP)',
          value: averageGrossMonthlyIncomeOfHousehold,
        },
        {
          label: '(2.13) Average Gross Monthly Farm Income (PhP)',
          value: averageGrossMonthlyFarmIncome,
        },
        {
          label: '(2.14) Membership In A Farmer Group/Association/Organization',
          value: membershipInAFarmerGroupOrAssociationOrOrganization,
        },
        {
          label:
            '(2.15) Enrolled in Registry System for Basic Sectors In Agriculture (RSBSA)',
          value: enrolledInRegistrySystemForBasicSectorsInAgriculture,
        },
      ]

      this.part3FormData = [
        {
          label: '(3.1) Total Area of Agricultural Land (ha)',
          value: totalAreaOfAgriculturalLand,
        },
        {
          label: '(3.2) Total Area of Forestry Land (ha)',
          value: totalAreaOfForestryLand,
        },
        {
          label: '(3.3) Total Cultivated Area (ha)',
          value: totalCultivatedArea,
        },
        {
          label: '(3.4) Distance from Home to Farm (km)',
          value: distanceFromHomeToFarm,
        },
        {
          label: '(3.5) Distance from Land to Water Source (km)',
          value: distanceFromLandToWaterSource,
        },
        {
          label:
            '(3.6) Distance from Market Nearest Paved (concrete/asphalt) road (km)',
          value: distanceFromMarketNearestPavedRoad,
        },
        {
          label: '(3.7) Distance from Market/Trading Post (km)',
          value: distanceFromMarketOrTradingPost,
        },
        { label: '(3.8) Irrigation Source', value: irrigationSource },
        { label: '(3.9) Months Without Rain', value: monthsWithoutRain },
        {
          label: '(3.10) Position in the Landscape',
          value: positionInTheLandscape,
        },
        { label: '(3.11) Location of Farm', value: locationOfFarm },
        { label: '(3.12) Land Tenure', value: landTenure },
        { label: '(3.13) Tenancy', value: tenancy },
        { label: '(3.14) Land Holding', value: landHolding },
      ]
    },
  },
}
</script>
