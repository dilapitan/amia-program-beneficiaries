<template>
  <div class="my-5 mx-10">
    <h3>Add Beneficiary</h3>
    <p class="mt-2 text-body-2">
      This is where you can add a new beneficiary to the list.
    </p>
    <br />
    <v-card class="pa-5" color="middleground" flat height="100%">
      <!-- <v-form ref="form" v-model="valid" lazy-validation> -->
      <!-- 0 General -->
      <!-- <Part0Form ref="part0Form" /> -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 1 Farmer's Basic Information -->
      <!-- <Part1Form ref="part1Form" /> -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 2 Socio-demographic Information -->
      <!-- <Part2Form ref="part2Form" /> -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 3 Farm Description -->
      <!-- <Part3Form ref="part3Form" /> -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 4 Farm Activities -->
      <!-- <Part4Form ref="part4Form" /> -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 5 Technical Knowledge/Perception of Climate Change and its Impacts -->
      <!-- <Part5Form ref="part5Form" /> -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 6 Farmer's Adaptation Practices -->
      <Part6Form ref="part6Form" />

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 7 Institutional Characteristics -->
      <!-- <Part7Form /> -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 8 Issues/Concerns/Problems in Farming -->
      <!-- <Part8Form /> -->

      <br />
      <v-divider></v-divider>
      <br />

      <v-overlay :value="loading"></v-overlay>
      <div class="d-flex align-end flex-column">
        <v-btn
          :disabled="loading"
          :loading="loading"
          @click="addBeneficiary()"
          color="primary"
        >
          SUBMIT
        </v-btn>
      </div>
      <!-- </v-form> -->
    </v-card>
  </div>
</template>

<script>
// import Part0Form from '@/components/forms/Part0Form.vue'
// import Part1Form from '@/components/forms/Part1Form.vue'
// import Part2Form from '@/components/forms/Part2Form.vue'
// import Part3Form from '@/components/forms/Part3Form.vue'
// import Part4Form from '@/components/forms/Part4Form.vue'
// import Part5Form from '@/components/forms/Part5Form.vue'
import Part6Form from '@/components/forms/Part6Form.vue'
// import Part7Form from '@/components/forms/Part7Form.vue'
// import Part8Form from '@/components/forms/Part8Form.vue'

export default {
  name: 'AddBeneficiaryView',

  components: {
    // Part0Form,
    // Part1Form,
    // Part2Form,
    // Part3Form,
    // Part4Form,
    // Part5Form,
    Part6Form,
    // Part7Form,
    // Part8Form,
  },

  data: () => ({
    // valid: true,
    loading: false,
    // requiredRule: [(v) => !!v || 'Required'],
  }),

  computed: {
    beneficiaries() {
      return this.$store.state.beneficiaries
    },
  },

  methods: {
    addBeneficiary() {
      // const part0FormData = this.getPart0FormData()
      // const part1FormData = this.getPart1FormData()
      // const part2FormData = this.getPart2FormData()
      // const part3FormData = this.getPart3FormData()
      // const part4FormData = this.getPart4FormData()
      // const part5FormData = this.getPart5FormData()
      const part6FormData = this.getPart6FormData()
      console.log('part6FormData:', part6FormData)
      // TODO: reflect how merge/override this with "valid"/validation
      // if (part0FormData && part1FormData) {
      // Part 0
      // const { date, interviewStart, interviewEnd, nameOfInterviewer } =
      //   part0FormData

      // Part 1
      // const {
      //   regionOrProvince,
      //   cityOrMunicipality,
      //   barangay,
      //   nameOfFarmer,
      //   contactNo,
      //   farmersCodeNo,
      // } = part1FormData

      // Part 2
      // const {
      //   age,
      //   gender,
      //   civilStatus,
      //   religion,
      //   belongingTo,
      //   householdMembers,
      //   yearsOfFarmingExperience,
      //   highestEducationalAttainment,
      //   languagesOrDialectsSpoken,
      //   mainSourceOfIncome,
      //   otherSourcesOfIncome,
      //   averageGrossMonthlyIncomeOfHousehold,
      //   averageGrossMonthlyFarmIncome,
      //   membershipInAFarmerGroupOrAssociationOrOrganization,
      //   enrolledInRegistrySystemForBasicSectorsInAgriculture,
      // } = part2FormData

      // Part 3
      // const {
      //   totalAreaOfAgriculturalLand,
      //   totalAreaOfForestryLand,
      //   totalCultivatedArea,
      //   distanceFromHomeToFarm,
      //   distanceFromLandToWaterSource,
      //   distanceFromMarketNearestPavedRoad,
      //   distanceFromMarketOrTradingPost,
      //   irrigationSource,
      //   monthsWithoutRain,
      //   positionInTheLandscape,
      //   locationOfFarm,
      //   landTenure,
      //   tenancy,
      //   landHolding,
      // } = part3FormData

      // Part 4
      // const {
      //   agriculturalActivities,
      //   cropsProduced,
      //   landAreaDevotedForCropProduction,
      //   livestockRaisedOrProduced,
      //   landAreaDevotedForLivestockProduction,
      //   speciesGrownForAquaculture,
      //   landAreaDevotedForAquaculture,
      //   sourceOfWaterForAquaculture,
      //   croppingPattern,
      //   estimatedGrossIncomePerCroppingFirstCropping,
      //   estimatedGrossIncomePerCroppingSecondCropping,
      //   cropCalendarWetSeasonLandPreparation,
      //   cropCalendarWetSeasonPlanting,
      //   cropCalendarWetSeasonGrowing,
      //   cropCalendarWetSeasonHarvesting,
      //   cropCalendarDrySeasonLandPreparation,
      //   cropCalendarDrySeasonPlanting,
      //   cropCalendarDrySeasonGrowing,
      //   cropCalendarDrySeasonHarvesting,
      // } = part4FormData

      // Part 5
      // const {
      //   attendedAgriculturalRelatedTrainings,
      //   totalNumberOfTrainingsAttended,
      //   sourceOfInformationRelatedToImprovingAgriculturalProduction,
      //   sourceOfInformationRelatedToImprovingAgriculturalProductProcessing,
      //   sourceOfClimateAndWeatherInformation,
      //   observedAnyLongTermChangesInClimate,
      //   changesInClimateForTemperature,
      //   changesInClimateForAmountOfRainfaill,
      //   changesInClimateForRainfallTiming,
      //   changesInClimateForRainfulIntensity,
      //   changesInClimateForRainfallDuration,
      //   changesInClimateForNumberOfWeatherEvents,
      //   changesInClimateForNumberOfHotDays,
      //   changesInClimateForNumberOfRainyDays,
      //   changesInClimateForOccurenceOfPestsAndDiseasesInCrops,
      //   changesInClimateForOccurenceOfPestsAndDiseasesInLivestock,
      //   observedAnyChangeInTheOnsetOfDrySeason,
      //   observedAnyChangeInTheOnsetOfWetSeason,
      //   descriptionOfChangeInTemperature,
      //   descriptionOfChangeInRainfallDuration,
      //   descriptionOfChangeInRainfallTiming,
      //   descriptionOfChangeInRainfallIntensity,
      //   descriptionOfChangeInNumberOfWeatherEvents,
      //   perceivedEffectsOrImpactsOfChangeInTimingOfRains,
      //   perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason,
      //   perceivedEffectsOrImpactsOfReducedCroppingSeason,
      //   perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions,
      //   perceivedEffectsOrImpactsOfPostharvestLosses,
      //   perceivedEffectsOrImpactsOfPestInvasion,
      //   perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases,
      //   perceivedEffectsOrImpactsOfPovertyAndFoodShortages,
      //   perceivedEffectsOrImpactsOfLackOfPotableWater,
      //   perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWater,
      //   perceivedEffectsOrImpactsOfErosions,
      //   perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife,
      //   perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties,
      //   perceivedEffectsOrImpactsOfDeathOfLivestock,
      //   perceivedEffectsOrImpactsOfDecreasedLivestockProduction,
      //   perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing,
      //   perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes,
      //   perceivedEffectsOrImpactsOfRuralUrbanMigration,
      //   perceivedEffectsOrImpactsOfSiltationOfWaterBodies,
      //   perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover,
      //   perceivedEffectsOrImpactsOfOthers,
      //   observedMainOpportunitiesOfLongTermChangesInClimate,
      //   driversOfChangeAndVulnerabilityOfLandDegredation,
      //   driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices,
      //   driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices,
      //   driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals,
      //   driversOfChangeAndVulnerabilityOfOthers,
      // } = part5FormData

      const newBeneficiaries = [...this.beneficiaries]

      newBeneficiaries.push({
        // // Part 0
        // surveyNo: this.beneficiaries.length + 1,
        // date,
        // interviewStart,
        // interviewEnd,
        // nameOfInterviewer,
        //
        // // Part 1
        // regionOrProvince,
        // cityOrMunicipality,
        // barangay,
        // nameOfFarmer,
        // contactNo,
        // farmersCodeNo,
        //
        // Part 2
        // age,
        // gender,
        // civilStatus,
        // religion,
        // belongingTo,
        // householdMembers,
        // yearsOfFarmingExperience,
        // highestEducationalAttainment,
        // languagesOrDialectsSpoken,
        // mainSourceOfIncome,
        // otherSourcesOfIncome,
        // averageGrossMonthlyIncomeOfHousehold,
        // averageGrossMonthlyFarmIncome,
        // membershipInAFarmerGroupOrAssociationOrOrganization,
        // enrolledInRegistrySystemForBasicSectorsInAgriculture,
        //
        // Part 3
        // totalAreaOfAgriculturalLand,
        // totalAreaOfForestryLand,
        // totalCultivatedArea,
        // distanceFromHomeToFarm,
        // distanceFromLandToWaterSource,
        // distanceFromMarketNearestPavedRoad,
        // distanceFromMarketOrTradingPost,
        // irrigationSource,
        // monthsWithoutRain,
        // positionInTheLandscape,
        // locationOfFarm,
        // landTenure,
        // tenancy,
        // landHolding,
        //
        // Part 4
        // agriculturalActivities,
        // cropsProduced,
        // landAreaDevotedForCropProduction,
        // livestockRaisedOrProduced,
        // landAreaDevotedForLivestockProduction,
        // speciesGrownForAquaculture,
        // landAreaDevotedForAquaculture,
        // sourceOfWaterForAquaculture,
        // croppingPattern,
        // estimatedGrossIncomePerCroppingFirstCropping,
        // estimatedGrossIncomePerCroppingSecondCropping,
        // cropCalendarWetSeasonLandPreparation,
        // cropCalendarWetSeasonPlanting,
        // cropCalendarWetSeasonGrowing,
        // cropCalendarWetSeasonHarvesting,
        // cropCalendarDrySeasonLandPreparation,
        // cropCalendarDrySeasonPlanting,
        // cropCalendarDrySeasonGrowing,
        // cropCalendarDrySeasonHarvesting,
        //
        // Part 5
        // attendedAgriculturalRelatedTrainings,
        // totalNumberOfTrainingsAttended,
        // sourceOfInformationRelatedToImprovingAgriculturalProduction,
        // sourceOfInformationRelatedToImprovingAgriculturalProductProcessing,
        // sourceOfClimateAndWeatherInformation,
        // observedAnyLongTermChangesInClimate,
        // changesInClimateForTemperature,
        // changesInClimateForAmountOfRainfaill,
        // changesInClimateForRainfallTiming,
        // changesInClimateForRainfulIntensity,
        // changesInClimateForRainfallDuration,
        // changesInClimateForNumberOfWeatherEvents,
        // changesInClimateForNumberOfHotDays,
        // changesInClimateForNumberOfRainyDays,
        // changesInClimateForOccurenceOfPestsAndDiseasesInCrops,
        // changesInClimateForOccurenceOfPestsAndDiseasesInLivestock,
        // observedAnyChangeInTheOnsetOfDrySeason,
        // observedAnyChangeInTheOnsetOfWetSeason,
        // descriptionOfChangeInTemperature,
        // descriptionOfChangeInRainfallDuration,
        // descriptionOfChangeInRainfallTiming,
        // descriptionOfChangeInRainfallIntensity,
        // descriptionOfChangeInNumberOfWeatherEvents,
        // perceivedEffectsOrImpactsOfChangeInTimingOfRains,
        // perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason,
        // perceivedEffectsOrImpactsOfReducedCroppingSeason,
        // perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions,
        // perceivedEffectsOrImpactsOfPostharvestLosses,
        // perceivedEffectsOrImpactsOfPestInvasion,
        // perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases,
        // perceivedEffectsOrImpactsOfPovertyAndFoodShortages,
        // perceivedEffectsOrImpactsOfLackOfPotableWater,
        // perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWater,
        // perceivedEffectsOrImpactsOfErosions,
        // perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife,
        // perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties,
        // perceivedEffectsOrImpactsOfDeathOfLivestock,
        // perceivedEffectsOrImpactsOfDecreasedLivestockProduction,
        // perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing,
        // perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes,
        // perceivedEffectsOrImpactsOfRuralUrbanMigration,
        // perceivedEffectsOrImpactsOfSiltationOfWaterBodies,
        // perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover,
        // perceivedEffectsOrImpactsOfOthers,
        // observedMainOpportunitiesOfLongTermChangesInClimate,
        // driversOfChangeAndVulnerabilityOfLandDegredation,
        // driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices,
        // driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices,
        // driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals,
        // driversOfChangeAndVulnerabilityOfOthers,
      })

      // this.$store.dispatch('setBeneficiariesAction', newBeneficiaries)
      // this.loading = true
      // setTimeout(() => {
      //   this.$router.push('/')
      // }, 500)
      // }

      // This is for adding the validation
      // const valid = this.$refs.form.validate()

      // if (valid) {
      //   console.log('value:', value)
      //   // API Services
      //   this.loading = true
      //   this.$router.push('/')
      // } else {
      //   console.log('AAAA')
      //   this.toAddBeneficiary = false
      // }
    },

    // getPart0FormData() {
    //   const part0FormData = this.$refs.part0Form.passForm0Data()
    //   return part0FormData
    // },

    // getPart1FormData() {
    //   const part1FormData = this.$refs.part1Form.passForm1Data()
    //   return part1FormData
    // },

    // getPart2FormData() {
    //   const part2FormData = this.$refs.part2Form.passForm2Data()
    //   return part2FormData
    // },

    // getPart3FormData() {
    //   const part3FormData = this.$refs.part3Form.passForm3Data()
    //   return part3FormData
    // },

    // getPart4FormData() {
    //   const part4FormData = this.$refs.part4Form.passForm4Data()
    //   return part4FormData
    // },

    // getPart5FormData() {
    //   const part5FormData = this.$refs.part5Form.passForm5Data()
    //   return part5FormData
    // },

    getPart6FormData() {
      const part6FormData = this.$refs.part6Form.passForm6Data()
      return part6FormData
    },
  },

  watch: {},
}
</script>
