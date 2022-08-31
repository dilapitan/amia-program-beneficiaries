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

    <div>
      <p>
        <strong>Note:</strong>
        <span class="ml-2 text-caption">* for the last 20-30 years</span>
      </p>
    </div>
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

      // 4. Farm Activities
      {
        text: '(4.1) Agricultural Activities',
        sortable: false,
        value: 'agriculturalActivities',
      },
      {
        text: '(4.2) Crops Produced',
        sortable: false,
        value: 'cropsProduced',
      },
      {
        text: '(4.3) Land Area Devoted For Crop Production (ha)',
        sortable: false,
        value: 'landAreaDevotedForCropProduction',
      },
      {
        text: '(4.4) Livestock Raised/Produced',
        sortable: false,
        value: 'livestockRaisedOrProduced',
      },
      {
        text: '(4.5) Land Area Devoted For Livestock Production (ha)',
        sortable: false,
        value: 'landAreaDevotedForLivestockProduction',
      },
      {
        text: '(4.6) Species grown for Aquaculture',
        sortable: false,
        value: 'speciesGrownForAquaculture',
      },
      {
        text: '(4.7) Land Area Devoted for Aquaculture (ha)',
        sortable: false,
        value: 'landAreaDevotedForAquaculture',
      },
      {
        text: '(4.8) Source of Water for Aquaculture',
        sortable: false,
        value: 'sourceOfWaterForAquaculture',
      },
      {
        text: '(4.9) Cropping Pattern',
        sortable: false,
        value: 'croppingPattern',
      },
      {
        text: '(4.10) Crop Calendar - Jan',
        sortable: false,
        value: 'cropCalendarJan',
      },
      {
        text: '(4.10) Crop Calendar - Feb',
        sortable: false,
        value: 'cropCalendarFeb',
      },
      {
        text: '(4.10) Crop Calendar - Mar',
        sortable: false,
        value: 'cropCalendarMar',
      },
      {
        text: '(4.10) Crop Calendar - Apr',
        sortable: false,
        value: 'cropCalendarApr',
      },
      {
        text: '(4.10) Crop Calendar - May',
        sortable: false,
        value: 'cropCalendarMay',
      },
      {
        text: '(4.10) Crop Calendar - Jun',
        sortable: false,
        value: 'cropCalendarJun',
      },
      {
        text: '(4.10) Crop Calendar - Jul',
        sortable: false,
        value: 'cropCalendarJul',
      },
      {
        text: '(4.10) Crop Calendar - Aug',
        sortable: false,
        value: 'cropCalendarAug',
      },
      {
        text: '(4.10) Crop Calendar - Sep',
        sortable: false,
        value: 'cropCalendarSep',
      },
      {
        text: '(4.10) Crop Calendar - Oct',
        sortable: false,
        value: 'cropCalendarOct',
      },
      {
        text: '(4.10) Crop Calendar - Nov',
        sortable: false,
        value: 'cropCalendarNov',
      },
      {
        text: '(4.10) Crop Calendar - Dec',
        sortable: false,
        value: 'cropCalendarDec',
      },
      {
        text: '(4.11) Estimated Gross Income Per Cropping (PhP)',
        sortable: false,
        value: 'estimatedGrossIncomePerCropping',
      },

      // 5. Technical Knowledge/Perception of Climate Change and Its Impacts
      {
        text: '(5.1) Attended Agricultural-related Trainings',
        sortable: false,
        value: 'attendedAgriculturalRelatedTrainings',
      },
      {
        text: '(5.2) Total Number of Trainings Attended',
        sortable: false,
        value: 'totalNumberOfTrainingsAttended',
      },
      {
        text: '(5.3) Source of Information Related to Improving Agricultural Production',
        sortable: false,
        value: 'sourceOfInformationRelatedToImprovingAgriculturalProduction',
      },
      {
        text: '(5.4) Source of Information Related to Improving Agricultural Product Processing',
        sortable: false,
        value:
          'sourceOfInformationRelatedToImprovingAgriculturalProductProcessing',
      },
      {
        text: '(5.5) Source of Climate and Weather Information',
        sortable: false,
        value: 'sourceOfClimateAndWeatherInformation',
      },
      {
        text: '(5.6) Observed Any Long-term Changes in Climate (temperature/rainfall) *',
        sortable: false,
        value: 'observedAnyLongTermChangesInClimate',
      },
      {
        text: '(5.7.1) Long-term Changes in Climate for Temperature *',
        sortable: false,
        value: 'longtermChangesInClimateForTemperature',
      },
      {
        text: '(5.7.2) Long-term Changes in Climate for Amount of Rainfaill *',
        sortable: false,
        value: 'longtermChangesInClimateForAmountOfRainfaill',
      },
      {
        text: '(5.7.3) Long-term Changes in Climate for Rainfall Timing *',
        sortable: false,
        value: 'longtermChangesInClimateForRainfallTiming',
      },
      {
        text: '(5.7.4) Long-term Changes in Climate for Rainful Intensity *',
        sortable: false,
        value: 'longtermChangesInClimateForRainfulIntensity',
      },
      {
        text: '(5.7.5) Long-term Changes in Climate for Rainfall Duration *',
        sortable: false,
        value: 'longtermChangesInClimateForRainfallDuration',
      },
      {
        text: '(5.7.6) Long-term Changes in Climate for Number of Weather Events *',
        sortable: false,
        value: 'longtermChangesInClimateForNumberOfWeatherEvents',
      },
      {
        text: '(5.7.7) Long-term Changes in Climate for Number of Hot Days *',
        sortable: false,
        value: 'longtermChangesInClimateForNumberOfHotDays',
      },
      {
        text: '(5.7.8) Long-term Changes in Climate for Number of Rainy Days *',
        sortable: false,
        value: 'longtermChangesInClimateForNumberOfRainyDays',
      },
      {
        text: '(5.7.9) Long-term Changes in Climate for Occurence of Pests And Diseases in Crops *',
        sortable: false,
        value: 'longtermChangesInClimateForOccurenceOfPestsAndDiseasesInCrops',
      },
      {
        text: '(5.7.10) Long-term Changes in Climate for Occurence of Pests And Diseases in Livestock *',
        sortable: false,
        value:
          'longtermChangesInClimateForOccurenceOfPestsAndDiseasesInLivestock',
      },
      {
        text: '(5.7.11) Observed any change in the Onset of Dry Season',
        sortable: false,
        value: 'observedAnyChangeInTheOnsetOfDrySeason',
      },
      {
        text: '(5.7.12) Observed any change in the Onset of Wet Season',
        sortable: false,
        value: 'observedAnyChangeInTheOnsetOfWetSeason',
      },
      {
        text: '(5.8.1) Description of Change in Temperature',
        sortable: false,
        value: 'descriptionOfChangeInTemperature',
      },
      {
        text: '(5.8.2) Description of Change in Rainfall Duration',
        sortable: false,
        value: 'descriptionOfChangeInRainfallDuration',
      },
      {
        text: '(5.8.3) Description of Change in Number of Weather Events',
        sortable: false,
        value: 'descriptionOfChangeInNumberOfWeatherEvents',
      },
      {
        text: '(5.8.4) Description of Change in Rainfall Intensity',
        sortable: false,
        value: 'descriptionOfChangeInRainfallIntensity',
      },
      {
        text: '(5.8.5) Description of Change in Rainfall Duration',
        sortable: false,
        value: 'descriptionOfChangeInRainfallDuration',
      },
      {
        text: '(5.9) Observed Main Effects/Impacts (Negative) of Long-term Changes in Climate - I',
        sortable: false,
        value: 'observedMainEffectsOrImpactsOfLongTermChangesInClimate1',
      },
      {
        text: '(5.9) Observed Main Effects/Impacts (Negative) of Long-term Changes in Climate - II',
        sortable: false,
        value: 'observedMainEffectsOrImpactsOfLongTermChangesInClimate2',
      },
      {
        text: '(5.10) Observed Main Opportunities (Positive Effects/Impacts) of These Long-term Changes in Climate over the last 20-30 years',
        sortable: false,
        value:
          'observedMainOpportunitiesOfLongTermChangesInClimateOverTheLast20To30Years',
      },
      {
        text: '(5.11) Other Changes that seriously affect faming and overall livelihood',
        sortable: false,
        value: 'otherChangesThatSeriouslyAffectFarmingAndOverallLivelihood',
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
