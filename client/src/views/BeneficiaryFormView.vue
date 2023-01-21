<template>
  <div class="my-5 mx-10">
    <h3>{{ setHeader(getMode()).header }}</h3>
    <p class="mt-2 text-body-2">{{ setHeader(getMode()).subHeader }}</p>
    <br />

    <div
      v-if="!currentBeneficiary && this.$route.name !== 'AddBeneficiaryView'"
    >
      <p>
        <strong>No data found.</strong>
        To View/Edit a Beneficiary, please go to the List of Beneficiaries to
        click the Action buttons.
      </p>
    </div>

    <v-card v-else class="pa-5" color="middleground" flat height="100%">
      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- 0 General -->
        <Part0Form
          ref="part0Form"
          :mode="mode"
          :requiredRule="requiredRule"
          :part0FormData="part0FormData"
        />

        <br />
        <v-divider></v-divider>
        <br />

        <!-- 1 Farmer's Basic Information -->
        <Part1Form
          ref="part1Form"
          :mode="mode"
          :requiredRule="requiredRule"
          :part1FormData="part1FormData"
        />

        <br />
        <v-divider></v-divider>
        <br />

        <!-- 2 Socio-demographic Information -->
        <!-- <Part2Form
          ref="part2Form"
          :requiredRule="requiredRule"
          :requiredRuleVComboBox="requiredRuleVComboBox"
          :mode="mode"
          :part2FormData="part2FormData"
        /> -->

        <br />
        <v-divider></v-divider>
        <br />

        <!-- 3 Farm Description -->
        <!-- <Part3Form
          ref="part3Form"
          :requiredRule="requiredRule"
          :requiredRuleVComboBox="requiredRuleVComboBox"
          :mode="mode"
          :part3FormData="part3FormData"
        /> -->

        <br />
        <v-divider></v-divider>
        <br />

        <!-- 4 Farm Activities -->
        <!-- <Part4Form
          ref="part4Form"
          :requiredRule="requiredRule"
          :requiredRuleVComboBox="requiredRuleVComboBox"
          :mode="mode"
          :part4FormData="part4FormData"
        /> -->

        <br />
        <v-divider></v-divider>
        <br />

        <!-- 5 Technical Knowledge/Perception of Climate Change and its Impacts -->
        <!-- <Part5Form
          ref="part5Form"
          :requiredRule="requiredRule"
          :requiredRuleVComboBox="requiredRuleVComboBox"
          :mode="mode"
          :part5FormData="part5FormData"
        /> -->

        <br />
        <v-divider></v-divider>
        <br />

        <!-- 6 Farmer's Adaptation Practices -->
        <!-- <Part6Form
          ref="part6Form"
          :requiredRule="requiredRule"
          :requiredRuleVComboBox="requiredRuleVComboBox"
          :mode="mode"
          :part6FormData="part6FormData"
        /> -->

        <br />
        <v-divider></v-divider>
        <br />

        <!-- 7 Institutional Characteristics -->
        <!-- <Part7Form
          ref="part7Form"
          :requiredRule="requiredRule"
          :requiredRuleVComboBox="requiredRuleVComboBox"
          :mode="mode"
          :part7FormData="part7FormData"
        /> -->

        <br />
        <v-divider></v-divider>
        <br />

        <!-- 8 Issues/Concerns/Problems in Farming -->
        <!-- <Part8Form
          ref="part8Form"
          :requiredRule="requiredRule"
          :requiredRuleVComboBox="requiredRuleVComboBox"
          :mode="mode"
          :part8FormData="part8FormData"
        /> -->

        <br />
        <v-divider></v-divider>
        <br />

        <v-overlay :value="loading"></v-overlay>
        <div class="d-flex align-end flex-column">
          <v-btn
            v-if="mode !== 'VIEW'"
            :disabled="loading"
            :loading="loading"
            @click.stop="confirmAddOrUpdateBeneficiary()"
            color="primary"
          >
            {{ mode === 'EDIT' ? 'UPDATE' : 'SUBMIT' }}
          </v-btn>
          <v-btn v-else to="/beneficiaries" color="primary">
            BACK TO LIST
          </v-btn>
        </div>
      </v-form>

      <v-dialog v-model="dialog" width="800" scrollable persistent>
        <v-card>
          <v-card-title> Preview of Beneficiary Details </v-card-title>

          <v-card-text>
            <PreviewTableOfBeneficiaryDetails
              :key="dialog"
              :beneficiaryDetails="newBeneficiary"
            />
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="closeAddOfUpdateBeneficiaryModal()"
            >
              CLOSE
            </v-btn>
            <v-btn
              color="primary"
              @click="
                mode === 'EDIT'
                  ? updateBeneficiary(currentBeneficiary)
                  : addBeneficiary()
              "
            >
              <v-icon left v-if="mode === 'EDIT'"> mdi-pencil </v-icon>
              <v-icon left v-else> mdi-account-plus </v-icon>
              CONFIRM {{ mode === 'EDIT' ? 'EDIT' : 'ADD' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>

<script>
import Part0Form from '@/components/forms/Part0Form.vue'
import Part1Form from '@/components/forms/Part1Form.vue'
// import Part2Form from '@/components/forms/Part2Form.vue'
// import Part3Form from '@/components/forms/Part3Form.vue'
// import Part4Form from '@/components/forms/Part4Form.vue'
// import Part5Form from '@/components/forms/Part5Form.vue'
// import Part6Form from '@/components/forms/Part6Form.vue'
// import Part7Form from '@/components/forms/Part7Form.vue'
// import Part8Form from '@/components/forms/Part8Form.vue'

import PreviewTableOfBeneficiaryDetails from '@/components/PreviewTableOfBeneficiaryDetails.vue'

export default {
  name: 'AddBeneficiaryView',

  components: {
    Part0Form,
    Part1Form,
    // Part2Form,
    // Part3Form,
    // Part4Form,
    // Part5Form,
    // Part6Form,
    // Part7Form,
    // Part8Form,
    PreviewTableOfBeneficiaryDetails,
  },

  data: () => ({
    valid: true,
    loading: false,
    requiredRule: [(v) => !!v || 'Required'],
    requiredRuleVComboBox: (v) => {
      return !!v.length || 'Required'
    },

    dialog: false,
    newBeneficiary: null,
    validArrayOfCheckboxes: true,
    currentBeneficiary: null,
    currentBeneficiaryIndex: -1,
    part0FormData: null,
    part1FormData: null,
    part2FormData: null,
    part3FormData: null,
    part4FormData: null,
    part5FormData: null,
    part6FormData: null,
    part7FormData: null,
    part8FormData: null,
    mode: null,
  }),

  mounted() {
    this.setBeneficiary(this.$route.params.surveyNo)
    this.setMode(this.$route.name)
  },

  computed: {
    beneficiaries() {
      return this.$store.state.beneficiaries
    },
  },

  methods: {
    confirmAddOrUpdateBeneficiary() {
      const newBeneficiary = this.getFormData(this.newBeneficiary)
      console.log('newBeneficiary:', newBeneficiary)
      if (!newBeneficiary) return

      this.dialog = true
      this.newBeneficiary = newBeneficiary
    },

    closeAddOfUpdateBeneficiaryModal() {
      this.dialog = false
    },

    addBeneficiary() {
      try {
        this.dialog = false
        const newBeneficiaries = [...this.beneficiaries]

        if (+process.env.VUE_APP_USE_FIREBASE) {
          // Firebase service
        } else {
          const { part0, part1 } = this.newBeneficiary
          const beneficiaryForLocal = {
            // Part 0
            date: part0.date,
            interviewStart: part0.interviewStart,
            interviewEnd: part0.interviewEnd,
            nameOfInterviewer: part0.nameOfInterviewer,

            // Part 1
            province: part1.province,
            cityOrMunicipality: part1.cityOrMunicipality,
            barangay: part1.barangay,
            nameOfFarmer: part1.nameOfFarmer,
            contactNo: part1.contactNo,
            farmersCodeNo: part1.farmersCodeNo,
            // the Rest
            ...this.newBeneficiary,
          }

          newBeneficiaries.push(beneficiaryForLocal)
          this.$store.dispatch('setBeneficiariesAction', newBeneficiaries)
        }

        this.loading = true
        setTimeout(() => {
          this.$router.push('/beneficiaries')
          this.$store.dispatch('setSnackbarAction', true)
          this.$store.dispatch('setSnackbarDetailsAction', {
            color: 'success',
            text: 'Successfully added a new beneficiary!',
          })
        }, 500)
      } catch (error) {
        this.$store.dispatch('setSnackbarAction', true)
        this.$store.dispatch('setSnackbarDetailsAction', {
          color: 'error',
          text: 'Failed adding a new beneficiary! Please contact admin.',
        })
        this.$router.push('/beneficiaries')
        throw new Error(error)
      }
    },

    updateBeneficiary() {
      // TODO: reset current Beneficiary upon Confirmation modal used later

      try {
        if (+process.env.VUE_APP_USE_FIREBASE) {
          // Firebase Service
        } else {
          this.currentBeneficiaryIndex = this.beneficiaries.indexOf(
            this.currentBeneficiary
          )

          if (this.currentBeneficiaryIndex > -1) {
            const { part0, part1 } = this.newBeneficiary
            const beneficiaryForLocal = {
              // Part 0
              date: part0.date,
              interviewStart: part0.interviewStart,
              interviewEnd: part0.interviewEnd,
              nameOfInterviewer: part0.nameOfInterviewer,

              // Part 1
              province: part1.province,
              cityOrMunicipality: part1.cityOrMunicipality,
              barangay: part1.barangay,
              nameOfFarmer: part1.nameOfFarmer,
              contactNo: part1.contactNo,
              farmersCodeNo: part1.farmersCodeNo,
              // the Rest
              ...this.newBeneficiary,
            }

            Object.assign(
              this.beneficiaries[this.currentBeneficiaryIndex],
              beneficiaryForLocal
            )

            this.$store.dispatch('setBeneficiariesAction', this.beneficiaries)
          } else {
            this.beneficiaries.push(this.newBeneficiary)
            this.$store.dispatch('setBeneficiariesAction', this.beneficiaries)
          }
        }

        this.$store.dispatch('setSnackbarAction', true)
        this.$store.dispatch('setSnackbarDetailsAction', {
          color: 'success',
          text: 'Successfully edited a beneficiary!',
        })

        this.$router.push('/beneficiaries')
      } catch (error) {
        this.$store.dispatch('setSnackbarAction', true)
        this.$store.dispatch('setSnackbarDetailsAction', {
          color: 'error',
          text: 'Failed to edit beneficiary. Please contact admin.',
        })
        this.$router.push('/beneficiaries')
        throw new Error(error)
      }
    },

    setBeneficiary(surveyNo) {
      try {
        // TODO: change surveyNo to the id/uuid of the Beneficiary from Firestore
        const currentBeneficiary = this.$store.state.beneficiaries.find(
          (beneficiary) => beneficiary.surveyNo === surveyNo
        )

        this.currentBeneficiary = currentBeneficiary

        if (this.currentBeneficiary !== undefined) {
          this.setPart0FormData(this.currentBeneficiary)
          this.setPart1FormData(this.currentBeneficiary)
          // this.setPart2FormData(this.currentBeneficiary)
          // this.setPart3FormData(this.currentBeneficiary)
          // this.setPart4FormData(this.currentBeneficiary)
          // this.setPart5FormData(this.currentBeneficiary)
          // this.setPart6FormData(this.currentBeneficiary)
          // this.setPart7FormData(this.currentBeneficiary)
          // this.setPart8FormData(this.currentBeneficiary)
        }
      } catch (error) {
        this.$store.dispatch('setSnackbarAction', true)
        this.$store.dispatch('setSnackbarDetailsAction', {
          color: 'error',
          text: 'Failed to load beneficiary details. Please contact admin.',
        })
        this.$router.push('/beneficiaries')
        throw new Error(error)
      }
    },

    setMode(name) {
      switch (name) {
        case 'ViewBeneficiaryView':
          this.mode = 'VIEW'
          break
        case 'EditBeneficiaryView':
          this.mode = 'EDIT'
          break
        default:
          return
      }
    },

    getMode() {
      return this.$route.name
    },

    setHeader(mode) {
      switch (mode) {
        case 'ViewBeneficiaryView':
          return {
            header: 'View Beneficiary',
            subHeader:
              'This is where you can see the details of a Beneficiary.',
          }
        case 'AddBeneficiaryView':
          return {
            header: 'Add Beneficiary',
            subHeader:
              'This is where you can add a new beneficiary to the list.',
          }
        case 'EditBeneficiaryView':
          return {
            header: 'Edit Beneficiary',
            subHeader: 'This is where you update the details of a Beneficiary.',
          }
        default:
          return {
            header: '',
            subHeader: '',
          }
      }
    },

    setPart0FormData(beneficiary) {
      const {
        surveyNo,
        date,
        interviewStart,
        interviewEnd,
        nameOfInterviewer,
      } = beneficiary

      const _part0FormData = {
        surveyNo,
        date,
        interviewStart,
        interviewEnd,
        nameOfInterviewer,
      }

      this.part0FormData = _part0FormData
    },

    setPart1FormData(beneficiary) {
      const {
        province,
        cityOrMunicipality,
        barangay,
        nameOfFarmer,
        contactNo,
        farmersCodeNo,
      } = beneficiary

      const _part1FormData = {
        province,
        cityOrMunicipality,
        barangay,
        nameOfFarmer,
        contactNo,
        farmersCodeNo,
      }

      this.part1FormData = _part1FormData
    },

    setPart2FormData(beneficiary) {
      const {
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
      } = beneficiary

      const _part2FormData = {
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
      }

      this.part2FormData = _part2FormData
    },

    setPart3FormData(beneficiary) {
      const {
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
      } = beneficiary

      const _part3FormData = {
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
      }

      this.part3FormData = _part3FormData
    },

    setPart4FormData(beneficiary) {
      const {
        agriculturalActivities,
        cropsProduced,
        landAreaDevotedForCropProduction,
        livestockRaisedOrProduced,
        landAreaDevotedForLivestockProduction,
        speciesGrownForAquaculture,
        landAreaDevotedForAquaculture,
        sourceOfWaterForAquaculture,
        croppingPattern,
        estimatedGrossIncomePerCroppingFirstCropping,
        estimatedGrossIncomePerCroppingSecondCropping,
        cropCalendarWetSeasonLandPreparation,
        cropCalendarWetSeasonPlanting,
        cropCalendarWetSeasonGrowing,
        cropCalendarWetSeasonHarvesting,
        cropCalendarDrySeasonLandPreparation,
        cropCalendarDrySeasonPlanting,
        cropCalendarDrySeasonGrowing,
        cropCalendarDrySeasonHarvesting,
      } = beneficiary

      this.part4FormData = {
        agriculturalActivities,
        cropsProduced,
        landAreaDevotedForCropProduction,
        livestockRaisedOrProduced,
        landAreaDevotedForLivestockProduction,
        speciesGrownForAquaculture,
        landAreaDevotedForAquaculture,
        sourceOfWaterForAquaculture,
        croppingPattern,
        estimatedGrossIncomePerCroppingFirstCropping,
        estimatedGrossIncomePerCroppingSecondCropping,
        cropCalendarWetSeasonLandPreparation,
        cropCalendarWetSeasonPlanting,
        cropCalendarWetSeasonGrowing,
        cropCalendarWetSeasonHarvesting,
        cropCalendarDrySeasonLandPreparation,
        cropCalendarDrySeasonPlanting,
        cropCalendarDrySeasonGrowing,
        cropCalendarDrySeasonHarvesting,
      }
    },

    setPart5FormData(beneficiary) {
      const {
        attendedAgriculturalRelatedTrainings,
        totalNumberOfTrainingsAttended,
        sourceOfInformationRelatedToImprovingAgriculturalProduction,
        sourceOfInformationRelatedToImprovingAgriculturalProductProcessing,
        sourceOfClimateAndWeatherInformation,
        observedAnyLongTermChangesInClimate,
        changesInClimateForTemperature,
        changesInClimateForAmountOfRainfaill,
        changesInClimateForRainfallTiming,
        changesInClimateForRainfulIntensity,
        changesInClimateForRainfallDuration,
        changesInClimateForNumberOfWeatherEvents,
        changesInClimateForNumberOfHotDays,
        changesInClimateForNumberOfRainyDays,
        changesInClimateForOccurenceOfPestsAndDiseasesInCrops,
        changesInClimateForOccurenceOfPestsAndDiseasesInLivestock,
        observedAnyChangeInTheOnsetOfDrySeason,
        observedAnyChangeInTheOnsetOfWetSeason,
        descriptionOfChangeInTemperature,
        descriptionOfChangeInRainfallDuration,
        descriptionOfChangeInRainfallTiming,
        descriptionOfChangeInRainfallIntensity,
        descriptionOfChangeInNumberOfWeatherEvents,
        perceivedEffectsOrImpactsOfChangeInTimingOfRains,
        perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason,
        perceivedEffectsOrImpactsOfReducedCroppingSeason,
        perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions,
        perceivedEffectsOrImpactsOfPostharvestLosses,
        perceivedEffectsOrImpactsOfPestInvasion,
        perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases,
        perceivedEffectsOrImpactsOfPovertyAndFoodShortages,
        perceivedEffectsOrImpactsOfLackOfPotableWater,
        perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWater,
        perceivedEffectsOrImpactsOfErosions,
        perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife,
        perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties,
        perceivedEffectsOrImpactsOfDeathOfLivestock,
        perceivedEffectsOrImpactsOfDecreasedLivestockProduction,
        perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing,
        perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes,
        perceivedEffectsOrImpactsOfRuralUrbanMigration,
        perceivedEffectsOrImpactsOfSiltationOfWaterBodies,
        perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover,
        perceivedEffectsOrImpactsOfOthers,
        observedMainOpportunitiesOfLongTermChangesInClimate,
        driversOfChangeAndVulnerabilityOfLandDegredation,
        driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices,
        driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices,
        driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals,
        driversOfChangeAndVulnerabilityOfOthers,
      } = beneficiary

      this.part5FormData = {
        attendedAgriculturalRelatedTrainings,
        totalNumberOfTrainingsAttended,
        sourceOfInformationRelatedToImprovingAgriculturalProduction,
        sourceOfInformationRelatedToImprovingAgriculturalProductProcessing,
        sourceOfClimateAndWeatherInformation,
        observedAnyLongTermChangesInClimate,
        changesInClimateForTemperature,
        changesInClimateForAmountOfRainfaill,
        changesInClimateForRainfallTiming,
        changesInClimateForRainfulIntensity,
        changesInClimateForRainfallDuration,
        changesInClimateForNumberOfWeatherEvents,
        changesInClimateForNumberOfHotDays,
        changesInClimateForNumberOfRainyDays,
        changesInClimateForOccurenceOfPestsAndDiseasesInCrops,
        changesInClimateForOccurenceOfPestsAndDiseasesInLivestock,
        observedAnyChangeInTheOnsetOfDrySeason,
        observedAnyChangeInTheOnsetOfWetSeason,
        descriptionOfChangeInTemperature,
        descriptionOfChangeInRainfallDuration,
        descriptionOfChangeInRainfallTiming,
        descriptionOfChangeInRainfallIntensity,
        descriptionOfChangeInNumberOfWeatherEvents,
        perceivedEffectsOrImpactsOfChangeInTimingOfRains,
        perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason,
        perceivedEffectsOrImpactsOfReducedCroppingSeason,
        perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions,
        perceivedEffectsOrImpactsOfPostharvestLosses,
        perceivedEffectsOrImpactsOfPestInvasion,
        perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases,
        perceivedEffectsOrImpactsOfPovertyAndFoodShortages,
        perceivedEffectsOrImpactsOfLackOfPotableWater,
        perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWater,
        perceivedEffectsOrImpactsOfErosions,
        perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife,
        perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties,
        perceivedEffectsOrImpactsOfDeathOfLivestock,
        perceivedEffectsOrImpactsOfDecreasedLivestockProduction,
        perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing,
        perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes,
        perceivedEffectsOrImpactsOfRuralUrbanMigration,
        perceivedEffectsOrImpactsOfSiltationOfWaterBodies,
        perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover,
        perceivedEffectsOrImpactsOfOthers,
        observedMainOpportunitiesOfLongTermChangesInClimate,
        driversOfChangeAndVulnerabilityOfLandDegredation,
        driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices,
        driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices,
        driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals,
        driversOfChangeAndVulnerabilityOfOthers,
      }
    },

    setPart6FormData(beneficiary) {
      const {
        madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years,
        changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall,
        additionalAdaptationMeasuresBeingConsideredInTheFuture,
        receivedAnyExternalSupportForAdaptationMeasures,
        formOfFinancialSupportReceived,
        formOfMaterialSupportReceived,
        formOfExtensionServicesSupportReceived,
        farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived,
        formOfInfrastructureSupportReceived,
        formOfOtherSupportReceived,
        mostBeneficialSupportServices,
        lowEducationLevelConstraint,
        limitedAccessToInformationConstraint,
        lackOfExtensionServicesConstraint,
        craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint,
        inadequateCapitalConstraint,
        noAccessToWaterForIrrigationConstraint,
        noAccessToCreditConstraintConstraint,
        longerTimeRequiredToSeeResultsConstraint,
        oldAgeConstraint,
        landTenureOrLandOwnershipIssuesConstraint,
        landTopographyNotSuitableConstraint,
        laborIntensiveOrNonAvailabilityOfLaborConstraint,
        infertileSoilConstraint,
        otherConstraint,
      } = beneficiary

      this.part6FormData = {
        madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years,
        changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall,
        additionalAdaptationMeasuresBeingConsideredInTheFuture,
        receivedAnyExternalSupportForAdaptationMeasures,
        formOfFinancialSupportReceived,
        formOfMaterialSupportReceived,
        formOfExtensionServicesSupportReceived,
        farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived,
        formOfInfrastructureSupportReceived,
        formOfOtherSupportReceived,
        mostBeneficialSupportServices,
        lowEducationLevelConstraint,
        limitedAccessToInformationConstraint,
        lackOfExtensionServicesConstraint,
        craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint,
        inadequateCapitalConstraint,
        noAccessToWaterForIrrigationConstraint,
        noAccessToCreditConstraintConstraint,
        longerTimeRequiredToSeeResultsConstraint,
        oldAgeConstraint,
        landTenureOrLandOwnershipIssuesConstraint,
        landTopographyNotSuitableConstraint,
        laborIntensiveOrNonAvailabilityOfLaborConstraint,
        infertileSoilConstraint,
        otherConstraint,
      }
    },

    setPart7FormData(beneficiary) {
      const {
        accessToAgricultureOrFisheriesRnDInstitutions,
        accessToCredit,
        laboratoryFacilities,
        educationAndHealthFacilities,
        farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations,
        marketingSystem,
        presenceOfAgriculturalProcessingFacilities,
        irrigation,
        farmingEquipment,
        others,
      } = beneficiary

      this.part7FormData = {
        accessToAgricultureOrFisheriesRnDInstitutions,
        accessToCredit,
        laboratoryFacilities,
        educationAndHealthFacilities,
        farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations,
        marketingSystem,
        presenceOfAgriculturalProcessingFacilities,
        irrigation,
        farmingEquipment,
        others,
      }
    },

    setPart8FormData(beneficiary) {
      const { issuesOrConcernsOrProblemsInFarming } = beneficiary

      this.part8FormData = { issuesOrConcernsOrProblemsInFarming }
    },

    getFormData(toUpdatebeneficiary) {
      // This is for adding the validation
      const valid = this.$refs.form.validate()
      const part0FormData = this.getPart0FormData()
      const part1FormData = this.getPart1FormData()
      // const part2FormData = this.getPart2FormData()
      // const part3FormData = this.getPart3FormData()
      // const part4FormData = this.getPart4FormData()
      // const part5FormData = this.getPart5FormData()
      // const part6FormData = this.getPart6FormData()
      // const part7FormData = this.getPart7FormData()
      // const part8FormData = this.getPart8FormData()

      // console.log('part8FormData:', part8FormData)
      if (valid) {
        // Part 0
        const { date, interviewStart, interviewEnd, nameOfInterviewer } =
          part0FormData

        // Part 1
        const {
          province,
          cityOrMunicipality,
          barangay,
          nameOfFarmer,
          contactNo,
          farmersCodeNo,
        } = part1FormData

        // // Part 2
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

        // // Part 3
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

        // // Part 4
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

        // // Part 5
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
        //   perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure,
        //   perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions,
        //   perceivedEffectsOrImpactsOfPostharvestLosses,
        //   perceivedEffectsOrImpactsOfPestInvasion,
        //   perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases,
        //   perceivedEffectsOrImpactsOfPovertyAndFoodShortages,
        //   perceivedEffectsOrImpactsOfLackOfPotableWater,
        //   perceivedEffectsOrImpactsOfReducedVolumeOfIrrigationWater,
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

        // // Part 6
        // const {
        //   madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years,
        //   changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall,
        //   additionalAdaptationMeasuresBeingConsideredInTheFuture,
        //   receivedAnyExternalSupportForAdaptationMeasures,
        //   formOfFinancialSupportReceived,
        //   formOfMaterialSupportReceived,
        //   formOfExtensionServicesSupportReceived,
        //   farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived,
        //   formOfInfrastructureSupportReceived,
        //   formOfOtherSupportReceived,
        //   mostBeneficialSupportServices,
        //   lowEducationLevelConstraint,
        //   limitedAccessToInformationConstraint,
        //   lackOfExtensionServicesConstraint,
        //   craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint,
        //   inadequateCapitalConstraint,
        //   noAccessToWaterForIrrigationConstraint,
        //   noAccessToCreditConstraintConstraint,
        //   longerTimeRequiredToSeeResultsConstraint,
        //   oldAgeConstraint,
        //   landTenureOrLandOwnershipIssuesConstraint,
        //   landTopographyNotSuitableConstraint,
        //   laborIntensiveOrNonAvailabilityOfLaborConstraint,
        //   infertileSoilConstraint,
        //   otherConstraint,
        // } = part6FormData

        // // Part 7
        // const {
        //   accessToAgricultureOrFisheriesRnDInstitutions,
        //   accessToCredit,
        //   laboratoryFacilities,
        //   educationAndHealthFacilities,
        //   farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations,
        //   marketingSystem,
        //   presenceOfAgriculturalProcessingFacilities,
        //   irrigation,
        //   farmingEquipment,
        //   others,
        // } = part7FormData

        // const { issuesOrConcernsOrProblemsInFarming } = part8FormData

        const newBeneficiary = {
          userId: this.$store.state.user.data?.userId || null,
          createdAt: new Date(), // also updatedAt for Edit?

          // Part 0
          part0: {
            surveyNo: toUpdatebeneficiary
              ? toUpdatebeneficiary.surveyNo
              : this.beneficiaries.length + 1,
            date,
            interviewStart,
            interviewEnd,
            nameOfInterviewer,
          },

          // Part 1
          part1: {
            province,
            cityOrMunicipality,
            barangay,
            nameOfFarmer,
            contactNo,
            farmersCodeNo,
          },

          // // Part 2
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

          // // Part 3
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

          // // Part 4
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

          // // Part 5
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
          // perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure,
          // perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions,
          // perceivedEffectsOrImpactsOfPostharvestLosses,
          // perceivedEffectsOrImpactsOfPestInvasion,
          // perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases,
          // perceivedEffectsOrImpactsOfPovertyAndFoodShortages,
          // perceivedEffectsOrImpactsOfLackOfPotableWater,
          // perceivedEffectsOrImpactsOfReducedVolumeOfIrrigationWater,
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

          // // Part 6
          // madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years,
          // changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall,
          // additionalAdaptationMeasuresBeingConsideredInTheFuture,
          // receivedAnyExternalSupportForAdaptationMeasures,
          // formOfFinancialSupportReceived,
          // formOfMaterialSupportReceived,
          // formOfExtensionServicesSupportReceived,
          // farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived,
          // formOfInfrastructureSupportReceived,
          // formOfOtherSupportReceived,
          // mostBeneficialSupportServices,
          // lowEducationLevelConstraint,
          // limitedAccessToInformationConstraint,
          // lackOfExtensionServicesConstraint,
          // craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint,
          // inadequateCapitalConstraint,
          // noAccessToWaterForIrrigationConstraint,
          // noAccessToCreditConstraintConstraint,
          // longerTimeRequiredToSeeResultsConstraint,
          // oldAgeConstraint,
          // landTenureOrLandOwnershipIssuesConstraint,
          // landTopographyNotSuitableConstraint,
          // laborIntensiveOrNonAvailabilityOfLaborConstraint,
          // infertileSoilConstraint,
          // otherConstraint,

          // // Part 7
          // accessToAgricultureOrFisheriesRnDInstitutions,
          // accessToCredit,
          // laboratoryFacilities,
          // educationAndHealthFacilities,
          // farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations,
          // marketingSystem,
          // presenceOfAgriculturalProcessingFacilities,
          // irrigation,
          // farmingEquipment,
          // others,

          // // Part 8
          // issuesOrConcernsOrProblemsInFarming,
        }

        return newBeneficiary
      } else return null
    },

    getPart0FormData() {
      const part0FormData = this.$refs.part0Form.passForm0Data()
      return part0FormData
    },

    getPart1FormData() {
      const part1FormData = this.$refs.part1Form.passForm1Data()
      return part1FormData
    },

    getPart2FormData() {
      const part2FormData = this.$refs.part2Form.passForm2Data()
      return part2FormData
    },

    getPart3FormData() {
      const part3FormData = this.$refs.part3Form.passForm3Data()
      return part3FormData
    },

    getPart4FormData() {
      const part4FormData = this.$refs.part4Form.passForm4Data()
      return part4FormData
    },

    getPart5FormData() {
      const part5FormData = this.$refs.part5Form.passForm5Data()
      return part5FormData
    },

    getPart6FormData() {
      const part6FormData = this.$refs.part6Form.passForm6Data()
      return part6FormData
    },

    getPart7FormData() {
      const part7FormData = this.$refs.part7Form.passForm7Data()
      return part7FormData
    },

    getPart8FormData() {
      const part8FormData = this.$refs.part8Form.passForm8Data()
      return part8FormData
    },
  },
}
</script>
