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

      <br />
      <p>Part 4</p>
      <v-data-table
        :headers="headers"
        :items="part4FormData"
        disable-filtering
        disable-pagination
        disable-sort
        hide-default-footer
        dense
      ></v-data-table>

      <br />
      <p>Part 5</p>
      <v-data-table
        :headers="headers"
        :items="part5FormData"
        disable-filtering
        disable-pagination
        disable-sort
        hide-default-footer
        dense
      ></v-data-table>

      <br />
      <p>Part 6</p>
      <v-data-table
        :headers="headers"
        :items="part6FormData"
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
    part4FormData: null,
    part5FormData: null,
    part6FormData: null,
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

        // Part 4
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

        // Part 5
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
        perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure,
        perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions,
        perceivedEffectsOrImpactsOfPostharvestLosses,
        perceivedEffectsOrImpactsOfPestInvasion,
        perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases,
        perceivedEffectsOrImpactsOfPovertyAndFoodShortages,
        perceivedEffectsOrImpactsOfLackOfPotableWater,
        perceivedEffectsOrImpactsOfReducedVolumeOfIrrigationWater,
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

        // Part 6
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

      this.part4FormData = [
        {
          label: '(4.1) Agricultural Activities',
          value: agriculturalActivities,
        },
        { label: '(4.2) Crops Produced', value: cropsProduced },
        {
          label: '(4.3) Land Area Devoted For Crop Production (ha)',
          value: landAreaDevotedForCropProduction,
        },
        {
          label: '(4.4) Livestock Raised/Produced',
          value: livestockRaisedOrProduced,
        },
        {
          label: '(4.5) Land Area Devoted For Livestock Production (ha)',
          value: landAreaDevotedForLivestockProduction,
        },
        {
          label: '(4.6) Species grown for Aquaculture',
          value: speciesGrownForAquaculture,
        },
        {
          label: '(4.7) Land Area Devoted for Aquaculture (ha)',
          value: landAreaDevotedForAquaculture,
        },
        {
          label: '(4.8) Source of Water for Aquaculture',
          value: sourceOfWaterForAquaculture,
        },
        { label: '(4.9) Cropping Pattern', value: croppingPattern },
        {
          label: '(4.10) Crop Calendar (Wet Season) - Land Preparation',
          value: cropCalendarWetSeasonLandPreparation,
        },
        {
          label: '(4.10) Crop Calendar (Wet Season) - Planting',
          value: cropCalendarWetSeasonPlanting,
        },
        {
          label: '(4.10) Crop Calendar (Wet Season) - Growing',
          value: cropCalendarWetSeasonGrowing,
        },
        {
          label: '(4.10) Crop Calendar (Wet Season) - Harvesting',
          value: cropCalendarWetSeasonHarvesting,
        },
        {
          label: '(4.10) Crop Calendar (Dry Season) - Land Preparation',
          value: cropCalendarDrySeasonLandPreparation,
        },
        {
          label: '(4.10) Crop Calendar (Dry Season) - Planting',
          value: cropCalendarDrySeasonPlanting,
        },
        {
          label: '(4.10) Crop Calendar (Dry Season) - Growing',
          value: cropCalendarDrySeasonGrowing,
        },
        {
          label: '(4.10) Crop Calendar (Dry Season) - Harvesting',
          value: cropCalendarDrySeasonHarvesting,
        },
        {
          label:
            '(4.11) Estimated Gross Income Per Cropping (PhP) - 1st Cropping',
          value: estimatedGrossIncomePerCroppingFirstCropping,
        },
        {
          label:
            '(4.11) Estimated Gross Income Per Cropping (PhP) - 2nd Cropping',
          value: estimatedGrossIncomePerCroppingSecondCropping,
        },
      ]

      this.part5FormData = [
        {
          label: '(5.1) Attended Agricultural-related Trainings',
          value: attendedAgriculturalRelatedTrainings,
        },
        {
          label: '(5.2) Total Number of Trainings Attended',
          value: totalNumberOfTrainingsAttended,
        },
        {
          label:
            '(5.3) Source of Information Related to Improving Agricultural Production',
          value: sourceOfInformationRelatedToImprovingAgriculturalProduction,
        },
        {
          label:
            '(5.4) Source of Information Related to Improving Agricultural Product Processing',
          value:
            sourceOfInformationRelatedToImprovingAgriculturalProductProcessing,
        },
        {
          label: '(5.5) Source of Climate and Weather Information',
          value: sourceOfClimateAndWeatherInformation,
        },
        {
          label:
            '(5.6) Observed Any Long-term Changes in Climate (temperature/rainfall) *',
          value: observedAnyLongTermChangesInClimate,
        },
        {
          label: '(5.7.1) Long-term Changes in Climate for Temperature *',
          value: changesInClimateForTemperature,
        },
        {
          label:
            '(5.7.2) Long-term Changes in Climate for Amount of Rainfaill *',
          value: changesInClimateForAmountOfRainfaill,
        },
        {
          label: '(5.7.3) Long-term Changes in Climate for Rainfall Timing *',
          value: changesInClimateForRainfallTiming,
        },
        {
          label: '(5.7.4) Long-term Changes in Climate for Rainful Intensity *',
          value: changesInClimateForRainfulIntensity,
        },
        {
          label: '(5.7.5) Long-term Changes in Climate for Rainfall Duration *',
          value: changesInClimateForRainfallDuration,
        },
        {
          label:
            '(5.7.6) Long-term Changes in Climate for Number of Weather Events *',
          value: changesInClimateForNumberOfWeatherEvents,
        },
        {
          label:
            '(5.7.7) Long-term Changes in Climate for Number of Hot Days *',
          value: changesInClimateForNumberOfHotDays,
        },
        {
          label:
            '(5.7.8) Long-term Changes in Climate for Number of Rainy Days *',
          value: changesInClimateForNumberOfRainyDays,
        },
        {
          label:
            '(5.7.9) Long-term Changes in Climate for Occurence of Pests And Diseases in Crops *',
          value: changesInClimateForOccurenceOfPestsAndDiseasesInCrops,
        },
        {
          label:
            '(5.7.10) Long-term Changes in Climate for Occurence of Pests And Diseases in Livestock *',
          value: changesInClimateForOccurenceOfPestsAndDiseasesInLivestock,
        },
        {
          label: '(5.7.11) Observed any change in the Onset of Dry Season',
          value: observedAnyChangeInTheOnsetOfDrySeason,
        },
        {
          label: '(5.7.12) Observed any change in the Onset of Wet Season',
          value: observedAnyChangeInTheOnsetOfWetSeason,
        },
        {
          label: '(5.8.1) Description of Change in Temperature',
          value: descriptionOfChangeInTemperature,
        },
        {
          label: '(5.8.2) Description of Change in Rainfall Duration',
          value: descriptionOfChangeInRainfallDuration,
        },
        {
          label: '(5.8.3) Description of Change in Rainfall Timing',
          value: descriptionOfChangeInRainfallTiming,
        },
        {
          label: '(5.8.4) Description of Change in Rainfall Intensity',
          value: descriptionOfChangeInRainfallIntensity,
        },
        {
          label: '(5.8.5) Description of Change in Number of Weather Events',
          value: descriptionOfChangeInNumberOfWeatherEvents,
        },
        {
          label:
            '(5.9.1) Perceived Effects/Impacts of: Change in Timing of Rains',
          value: perceivedEffectsOrImpactsOfChangeInTimingOfRains,
        },
        {
          label:
            '(5.9.2) Perceived Effects/Impacts of: Abrupt Change in Seasons/Changes in Growing Season',
          value:
            perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason,
        },
        {
          label:
            '(5.9.3) Perceived Effects/Impacts of: Reduced Cropping (Growing) Season',
          value: perceivedEffectsOrImpactsOfReducedCroppingSeason,
        },
        {
          label:
            '(5.9.4) Perceived Effects/Impacts of: Increased Frequency Of Drought and Crop Failure',
          value:
            perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure,
        },
        {
          label:
            '(5.9.5) Perceived Effects/Impacts of: Increased Frequency Of Floods and Farm Destructions',
          value:
            perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions,
        },
        {
          label: '(5.9.6) Perceived Effects/Impacts of: Postharvest Losses',
          value: perceivedEffectsOrImpactsOfPostharvestLosses,
        },
        {
          label: '(5.9.7) Perceived Effects/Impacts of: Pest Invasion',
          value: perceivedEffectsOrImpactsOfPestInvasion,
        },
        {
          label:
            '(5.9.8) Perceived Effects/Impacts of: Prevalence of Pests and Diseases',
          value: perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases,
        },
        {
          label:
            '(5.9.9) Perceived Effects/Impacts of: Poverty and Food Shortages',
          value: perceivedEffectsOrImpactsOfPovertyAndFoodShortages,
        },
        {
          label:
            '(5.9.10) Perceived Effects/Impacts of: Lack of Potable Water (Drinking)',
          value: perceivedEffectsOrImpactsOfLackOfPotableWater,
        },
        {
          label:
            '(5.9.11) Perceived Effects/Impacts of: Reduced Volume Of Irrigation Water',
          value: perceivedEffectsOrImpactsOfReducedVolumeOfIrrigationWater,
        },
        {
          label: '(5.9.12) Perceived Effects/Impacts of: Erosions',
          value: perceivedEffectsOrImpactsOfErosions,
        },
        {
          label:
            '(5.9.13) Perceived Effects/Impacts of: Extinction of Fishes and Aquatic Life',
          value: perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife,
        },
        {
          label:
            '(5.9.14) Perceived Effects/Impacts of: ExtinctionOfSomeCropsAndCropVarieties',
          value:
            perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties,
        },
        {
          label: '(5.9.15) Perceived Effects/Impacts of: Death of Livestock',
          value: perceivedEffectsOrImpactsOfDeathOfLivestock,
        },
        {
          label:
            '(5.9.16) Perceived Effects/Impacts of: Decreased Livestock Production',
          value: perceivedEffectsOrImpactsOfDecreasedLivestockProduction,
        },
        {
          label:
            '(5.9.17) Perceived Effects/Impacts of: Rising Cost of Farming and Fishing',
          value: perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing,
        },
        {
          label:
            '(5.9.18) Perceived Effects/Impacts of: Destruction of Farm Roads and Homes',
          value: perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes,
        },
        {
          label: '(5.9.19) Perceived Effects/Impacts of: Rural-Urban Migration',
          value: perceivedEffectsOrImpactsOfRuralUrbanMigration,
        },
        {
          label:
            '(5.9.20) Perceived Effects/Impacts of: Siltation of Water Bodies',
          value: perceivedEffectsOrImpactsOfSiltationOfWaterBodies,
        },
        {
          label:
            '(5.9.21) Perceived Effects/Impacts of: Disappearance of Vegetation Cover',
          value: perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover,
        },
        {
          label: '(5.9.22) Perceived Effects/Impacts of: Others',
          value: perceivedEffectsOrImpactsOfOthers,
        },
        {
          label:
            '(5.10) Observed Main Opportunities (Positive Effects/Impacts) of These Long-term Changes in Climate *',
          value: observedMainOpportunitiesOfLongTermChangesInClimate,
        },
        {
          label:
            '(5.11.1) Drivers of Change and Vulnerability of: Land Degradation (Soil Nutrient Depletion)',
          value: driversOfChangeAndVulnerabilityOfLandDegredation,
        },
        {
          label:
            '(5.11.2) Drivers of Change and Vulnerability of: Unexpexcted Changes in Input Prices',
          value:
            driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices,
        },
        {
          label:
            '(5.11.3) Drivers of Change and Vulnerability of: Unexpected Changes in Product Prices',
          value:
            driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices,
        },
        {
          label:
            '(5.11.4) Drivers of Change and Vulnerability of: Risks for Diseases and Pests Affecting Crops and Animals',
          value:
            driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals,
        },
        {
          label: '(5.11.5) Drivers of Change and Vulnerability of: Others',
          value: driversOfChangeAndVulnerabilityOfOthers,
        },
      ]

      this.part6FormData = [
        {
          label:
            '(6.1) Made adjustments in Livelihood in Response to the Perceived Changes in Rainfall and Temperature over the last 10 years',
          value:
            madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years,
        },
        {
          label:
            '(6.2) Changes/Adjustments Made In Farming in Response to Long-term shifts in Temperature and Rainfall',
          value:
            changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall,
        },
        {
          label:
            '(6.3) Additional Adaptation Measures Being Considered in the Future',
          value: additionalAdaptationMeasuresBeingConsideredInTheFuture,
        },
        {
          label: '(6.4) Receive Any External Support for Adaptation Measures',
          value: receivedAnyExternalSupportForAdaptationMeasures,
        },
        {
          label: '(6.5.1) Form of Financial Support received',
          value: formOfFinancialSupportReceived,
        },
        {
          label: '(6.5.2) Form of Material Support received',
          value: formOfMaterialSupportReceived,
        },
        {
          label: '(6.5.3) Form of Extension Services Support received',
          value: formOfExtensionServicesSupportReceived,
        },
        {
          label:
            '(6.5.4) Form of Farming Fishing Advisories Based On Weather and Climate Support received',
          value:
            farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived,
        },
        {
          label: '(6.5.5) Form of Infrastructure Support received',
          value: formOfInfrastructureSupportReceived,
        },
        {
          label: '(6.5.6) Form of Other Support received',
          value: formOfOtherSupportReceived,
        },
        {
          label: '(6.6) Most Beneficial Support Services',
          value: mostBeneficialSupportServices,
        },
        {
          label: '(6.7.1) Low Education Level Constraint **',
          value: lowEducationLevelConstraint,
        },
        {
          label: '(6.7.2) Limited Access to Information Constraint **',
          value: limitedAccessToInformationConstraint,
        },
        {
          label: '(6.7.3) Lack of Extension Services Constraint **',
          value: lackOfExtensionServicesConstraint,
        },
        {
          label:
            '(6.7.4) CRA Options Not Compatible With Community Norms and Values Constraint **',
          value: craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint,
        },
        {
          label: '(6.7.5) Inadequate Capital Constraint **',
          value: inadequateCapitalConstraint,
        },
        {
          label: '(6.7.6) No Access to Water for Irrigation Constraint **',
          value: noAccessToWaterForIrrigationConstraint,
        },
        {
          label: '(6.7.7) No Access to Credit Constraint **',
          value: noAccessToCreditConstraintConstraint,
        },
        {
          label: '(6.7.8) Longer Time Required to See Results Constraint **',
          value: longerTimeRequiredToSeeResultsConstraint,
        },
        { label: '(6.7.9) Old Age Constraint **', value: oldAgeConstraint },
        {
          label: '(6.7.10) Land Tenure/Land Ownership Issues Constraint **',
          value: landTenureOrLandOwnershipIssuesConstraint,
        },
        {
          label: '(6.7.11) Land Topography Not Suitable Constraint **',
          value: landTopographyNotSuitableConstraint,
        },
        {
          label:
            '(6.7.12) Labor Intensive/Non-availability of Labor Constraint **',
          value: laborIntensiveOrNonAvailabilityOfLaborConstraint,
        },
        {
          label: '(6.7.13) Infertile Soil Constraint **',
          value: infertileSoilConstraint,
        },
        { label: '(6.7.14) Other Constraint **', value: otherConstraint },
      ]
    },
  },
}
</script>
