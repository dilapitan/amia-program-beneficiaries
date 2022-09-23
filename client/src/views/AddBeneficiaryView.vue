<template>
  <div class="my-5 mx-10">
    <h3>Add Beneficiary</h3>
    <p class="mt-2 text-body-2">
      This is where you can add a new beneficiary to the list.
    </p>
    <br />
    <v-card class="pa-5" color="middleground" flat height="100%">
      <!-- 0 General -->
      <!-- <Part0Form /> -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 1 Farmer's Basic Information -->
      <!-- <Part1Form /> -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 2 Socio-demographic Information -->
      <!-- <Part2Form /> -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 3 Farm Description -->
      <!-- <Part3Form /> -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 4 Farm Activities -->
      <!-- <Part4Form /> -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 5 Technical Knowledge/Perception of Climate Change and its Impacts -->
      <Part5Form />

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 6 Farmer's Adaptation Practices -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 7 Institutional Characteristics -->

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 8 Issues/Concerns/Problems in Farming -->
    </v-card>
  </div>
</template>

<script>
// import Part0Form from '@/components/forms/Part0Form.vue'
// import Part1Form from '@/components/forms/Part1Form.vue'
// import Part2Form from '@/components/forms/Part2Form.vue'
// import Part3Form from '@/components/forms/Part3Form.vue'
// import Part4Form from '@/components/forms/Part4Form.vue'
import Part5Form from '@/components/forms/Part5Form.vue'
// import Part6Form from '@/components/forms/Part6Form.vue'
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
    Part5Form,
    // Part6Form,
    // Part7Form,
    // Part8Form,
  },

  data: () => ({}),

  methods: {
    addOtherConstraint() {
      this.otherConstraintList.push({
        mainConstraintsOrDifficulties: null,
        rate: null,
      })
    },

    addMostBeneficialSupportServices() {
      this.mostBeneficialSupportServicesList.push({
        mostBeneficialSupportService: null,
        reasonWhyMostBeneficialSupportService: null,
      })
    },

    addSourceOfInformationRelatedToImprovingAgriculturalProduction(source) {
      if (source.selected) {
        this.sourceOfInformationRelatedToImprovingAgriculturalProduction.push(
          source
        )
      }
    },

    removeMostBeneficialSupportServices(index) {
      this.mostBeneficialSupportServicesList.splice(index, 1)
    },

    removeOtherConstraint(index) {
      this.otherConstraintList.splice(index, 1)
    },
  },

  watch: {
    changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall() {
      if (
        !this.changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall.includes(
          'Others'
        )
      )
        this.changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfallSpecify =
          null
    },

    perceivedEffectsOrImpactsOfChangeInTimingOfRainsBool() {
      this.perceivedEffectsOrImpactsOfChangeInTimingOfRains = null
    },

    perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeasonBool() {
      this.perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason =
        null
    },

    perceivedEffectsOrImpactsOfReducedCroppingSeasonBool() {
      this.perceivedEffectsOrImpactsOfReducedCroppingSeason = null
    },

    perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailureBool() {
      this.perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure =
        null
    },

    perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructionsBool() {
      this.perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions =
        null
    },

    perceivedEffectsOrImpactsOfPostharvestLossesBool() {
      this.perceivedEffectsOrImpactsOfPostharvestLosses = null
    },

    perceivedEffectsOrImpactsOfPestInvasionBool() {
      this.perceivedEffectsOrImpactsOfPestInvasion = null
    },

    perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseasesBool() {
      this.perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases = null
    },

    perceivedEffectsOrImpactsOfPovertyAndFoodShortagesBool() {
      this.perceivedEffectsOrImpactsOfPovertyAndFoodShortages = null
    },

    perceivedEffectsOrImpactsOfLackOfPotableWaterBool() {
      this.perceivedEffectsOrImpactsOfLackOfPotableWater = null
    },

    perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWaterBool() {
      this.perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWater = null
    },

    perceivedEffectsOrImpactsOfErosionsBool() {
      this.perceivedEffectsOrImpactsOfErosions = null
    },

    perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLifeBool() {
      this.perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife = null
    },

    perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarietiesBool() {
      this.perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties =
        null
    },

    perceivedEffectsOrImpactsOfDeathOfLivestockBool() {
      this.perceivedEffectsOrImpactsOfDeathOfLivestock = null
    },

    perceivedEffectsOrImpactsOfDecreasedLivestockProductionBool() {
      this.perceivedEffectsOrImpactsOfDecreasedLivestockProduction = null
    },

    perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishingBool() {
      this.perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing = null
    },

    perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomesBool() {
      this.perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes = null
    },

    perceivedEffectsOrImpactsOfRuralUrbanMigrationBool() {
      this.perceivedEffectsOrImpactsOfRuralUrbanMigration = null
    },

    perceivedEffectsOrImpactsOfSiltationOfWaterBodiesBool() {
      this.perceivedEffectsOrImpactsOfSiltationOfWaterBodies = null
    },

    perceivedEffectsOrImpactsOfDisappearanceOfVegetationCoverBool() {
      this.perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover = null
    },

    perceivedEffectsOrImpactsOfOthersBool() {
      this.perceivedEffectsOrImpactsOfOthers = null
      this.perceivedEffectsOrImpactsOfOthersList = [
        {
          effectsOrImpact: null,
          rate: null,
        },
      ]
    },

    lowEducationLevelConstraintBool() {
      this.lowEducationLevelConstraint = null
    },
    limitedAccessToInformationConstraintBool() {
      this.limitedAccessToInformationConstraint = null
    },
    lackOfExtensionServicesConstraintBool() {
      this.lackOfExtensionServicesConstraint = null
    },
    craOptionsNotCompatibleWithCommunityNormsAndValuesConstraintBool() {
      this.craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint = null
    },
    inadequateCapitalConstraintBool() {
      this.inadequateCapitalConstraint = null
    },
    noAccessToWaterForIrrigationConstraintBool() {
      this.noAccessToWaterForIrrigationConstraint = null
    },
    noAccessToCreditConstraintConstraintBool() {
      this.noAccessToCreditConstraintConstraint = null
    },
    longerTimeRequiredToSeeResultsConstraintBool() {
      this.longerTimeRequiredToSeeResultsConstraint = null
    },
    oldAgeConstraintBool() {
      this.oldAgeConstraint = null
    },
    landTenureOrLandOwnershipIssuesConstraintBool() {
      this.landTenureOrLandOwnershipIssuesConstraint = null
    },
    landTopographyNotSuitableConstraintBool() {
      this.landTopographyNotSuitableConstraint = null
    },
    laborIntensiveOrNonAvailabilityOfLaborConstraintBool() {
      this.laborIntensiveOrNonAvailabilityOfLaborConstraint = null
    },
    infertileSoilConstraintBool() {
      this.infertileSoilConstraint = null
    },
    otherConstraintBool() {
      this.otherConstraint = null
      this.otherConstraintList = [
        {
          mainConstraintsOrDifficulties: null,
          rate: null,
        },
      ]
    },

    driversOfChangeAndVulnerabilityOfOthersBool() {
      this.driversOfChangeAndVulnerabilityOfOthers = null
      this.driversOfChangeAndVulnerabilityOfOthersList = [
        {
          effectsOrImpact: null,
          rate: null,
        },
      ]
    },

    perceivedEffectsOrImpactsOfOthersList() {
      this.perceivedEffectsOrImpactsOfOthers =
        this.perceivedEffectsOrImpactsOfOthersList
    },

    driversOfChangeAndVulnerabilityOfOthersList() {
      this.driversOfChangeAndVulnerabilityOfOthers =
        this.driversOfChangeAndVulnerabilityOfOthersList
    },

    driversOfChangeAndVulnerabilityOfLandDegredationBool() {
      this.driversOfChangeAndVulnerabilityOfLandDegredation = null
    },
    driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPricesBool() {
      this.driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices =
        null
    },
    driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPricesBool() {
      this.driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices =
        null
    },
    driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimalsBool() {
      this.driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals =
        null
    },

    receivedAnyExternalSupportForAdaptationMeasures() {
      if (!this.receivedAnyExternalSupportForAdaptationMeasures) {
        this.formOfFinancialSupportReceived = null
        this.formOfMaterialSupportReceived = null
        this.formOfExtensionServicesSupportReceived = null
        this.FarmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived =
          null
        this.formOfInfrastructureSupportReceived = null
        this.formOfOtherSupportReceived = null
      }
    },

    accessToAgricultureOrFisheriesRnDInstitutionsBool() {
      this.accessToAgricultureOrFisheriesRnDInstitutions = null
    },
    accessToCreditBool() {
      this.accessToCredit = null
    },
    laboratoryFacilitiesBool() {
      this.laboratoryFacilities = null
    },
    educationAndHealthFacilitiesBool() {
      this.educationAndHealthFacilities = null
    },
    farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociationsBool() {
      this.farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations =
        null
    },
    marketingSystemBool() {
      this.marketingSystem = []
      this.marketingSystemSpecify = null
    },
    marketingSystem() {
      if (!this.marketingSystem.includes('Others')) {
        this.marketingSystemSpecify = null
      }
    },
    presenceOfAgriculturalProcessingFacilitiesBool() {
      this.presenceOfAgriculturalProcessingFacilities = null
    },
    irrigationBool() {
      this.irrigation = null
    },
    farmingEquipmentBool() {
      this.farmingEquipment = null
    },
    othersBool() {
      this.others = null
    },

    issuesOrConcernsOrProblemsInFarming() {
      if (!this.issuesOrConcernsOrProblemsInFarming.includes('Others')) {
        this.issuesOrConcernsOrProblemsInFarmingOthersSpecify = null
      }

      if (
        !this.issuesOrConcernsOrProblemsInFarming.includes(
          'Low crop production**'
        )
      ) {
        this.issuesOrConcernsOrProblemsInFarmingLowCropProductionSpecify = null
      }

      if (
        !this.issuesOrConcernsOrProblemsInFarming.includes(
          'Low livestock production**'
        )
      ) {
        this.issuesOrConcernsOrProblemsInFarmingLowLivestockProductionSpecify =
          null
      }

      if (
        !this.issuesOrConcernsOrProblemsInFarming.includes(
          'Drought or lack of moisture in the soil'
        )
      ) {
        this.issuesOrConcernsOrProblemsInFarmingDroughtOrLackOfMoistureSpecify =
          null
      }
    },
  },
}
</script>
