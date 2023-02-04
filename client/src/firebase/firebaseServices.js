import { db } from '@/firebase/firebaseConfig'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'

export const addBeneficiary = async (beneficiary) => {
  try {
    const docRef = await addDoc(collection(db, 'beneficiaries'), beneficiary)
    if (docRef) {
      return docRef
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

export const editBeneficiary = async (beneficiary) => {
  try {
    const { part0, part1, part2, part3, part4, part5, part6 } = beneficiary

    const beneficiaryRef = doc(db, 'beneficiaries', beneficiary.beneficiaryId)
    const docRef = await updateDoc(beneficiaryRef, {
      createdAt: beneficiary.createdAt,
      part0: {
        date: part0.date,
        interviewStart: part0.interviewStart,
        interviewEnd: part0.interviewEnd,
        nameOfInterviewer: part0.nameOfInterviewer,
        surveyNo: part0.surveyNo,
      },
      part1: {
        barangay: part1.barangay,
        cityOrMunicipality: part1.cityOrMunicipality,
        contactNo: part1.contactNo,
        farmersCodeNo: part1.farmersCodeNo,
        nameOfFarmer: part1.nameOfFarmer,
        province: part1.province,
      },
      part2: {
        age: part2.age,
        gender: part2.gender,
        civilStatus: part2.civilStatus,
        religion: part2.religion,
        belongingTo: part2.belongingTo,
        householdMembers: part2.householdMembers,
        yearsOfFarmingExperience: part2.yearsOfFarmingExperience,
        highestEducationalAttainment: part2.highestEducationalAttainment,
        languagesOrDialectsSpoken: part2.languagesOrDialectsSpoken,
        mainSourceOfIncome: part2.mainSourceOfIncome,
        otherSourcesOfIncome: part2.otherSourcesOfIncome,
        averageGrossMonthlyIncomeOfHousehold:
          part2.averageGrossMonthlyIncomeOfHousehold,
        averageGrossMonthlyFarmIncome: part2.averageGrossMonthlyFarmIncome,
        membershipInAFarmerGroupOrAssociationOrOrganization:
          part2.membershipInAFarmerGroupOrAssociationOrOrganization,
        enrolledInRegistrySystemForBasicSectorsInAgriculture:
          part2.enrolledInRegistrySystemForBasicSectorsInAgriculture,
      },
      part3: {
        totalAreaOfAgriculturalLand: part3.totalAreaOfAgriculturalLand,
        totalAreaOfForestryLand: part3.totalAreaOfForestryLand,
        totalCultivatedArea: part3.totalCultivatedArea,
        distanceFromHomeToFarm: part3.distanceFromHomeToFarm,
        distanceFromLandToWaterSource: part3.distanceFromLandToWaterSource,
        distanceFromMarketNearestPavedRoad:
          part3.distanceFromMarketNearestPavedRoad,
        distanceFromMarketOrTradingPost: part3.distanceFromMarketOrTradingPost,
        irrigationSource: part3.irrigationSource,
        monthsWithoutRain: part3.monthsWithoutRain,
        positionInTheLandscape: part3.positionInTheLandscape,
        locationOfFarm: part3.locationOfFarm,
        landTenure: part3.landTenure,
        tenancy: part3.tenancy,
        landHolding: part3.landHolding,
      },
      part4: {
        agriculturalActivities: part4.agriculturalActivities,
        cropsProduced: part4.cropsProduced,
        landAreaDevotedForCropProduction:
          part4.landAreaDevotedForCropProduction,
        livestockRaisedOrProduced: part4.livestockRaisedOrProduced,
        landAreaDevotedForLivestockProduction:
          part4.landAreaDevotedForLivestockProduction,
        speciesGrownForAquaculture: part4.speciesGrownForAquaculture,
        landAreaDevotedForAquaculture: part4.landAreaDevotedForAquaculture,
        sourceOfWaterForAquaculture: part4.sourceOfWaterForAquaculture,
        croppingPattern: part4.croppingPattern,
        estimatedGrossIncomePerCroppingFirstCropping:
          part4.estimatedGrossIncomePerCroppingFirstCropping,
        estimatedGrossIncomePerCroppingSecondCropping:
          part4.estimatedGrossIncomePerCroppingSecondCropping,
        cropCalendarWetSeasonLandPreparation:
          part4.cropCalendarWetSeasonLandPreparation,
        cropCalendarWetSeasonPlanting: part4.cropCalendarWetSeasonPlanting,
        cropCalendarWetSeasonGrowing: part4.cropCalendarWetSeasonGrowing,
        cropCalendarWetSeasonHarvesting: part4.cropCalendarWetSeasonHarvesting,
        cropCalendarDrySeasonLandPreparation:
          part4.cropCalendarDrySeasonLandPreparation,
        cropCalendarDrySeasonPlanting: part4.cropCalendarDrySeasonPlanting,
        cropCalendarDrySeasonGrowing: part4.cropCalendarDrySeasonGrowing,
        cropCalendarDrySeasonHarvesting: part4.cropCalendarDrySeasonHarvesting,
      },
      part5: {
        attendedAgriculturalRelatedTrainings:
          part5.attendedAgriculturalRelatedTrainings,
        totalNumberOfTrainingsAttended: part5.totalNumberOfTrainingsAttended,
        sourceOfInformationRelatedToImprovingAgriculturalProduction:
          part5.sourceOfInformationRelatedToImprovingAgriculturalProduction,
        sourceOfInformationRelatedToImprovingAgriculturalProductProcessing:
          part5.sourceOfInformationRelatedToImprovingAgriculturalProductProcessing,
        sourceOfClimateAndWeatherInformation:
          part5.sourceOfClimateAndWeatherInformation,
        observedAnyLongTermChangesInClimate:
          part5.observedAnyLongTermChangesInClimate,
        changesInClimateForTemperature: part5.changesInClimateForTemperature,
        changesInClimateForAmountOfRainfaill:
          part5.changesInClimateForAmountOfRainfaill,
        changesInClimateForRainfallTiming:
          part5.changesInClimateForRainfallTiming,
        changesInClimateForRainfulIntensity:
          part5.changesInClimateForRainfulIntensity,
        changesInClimateForRainfallDuration:
          part5.changesInClimateForRainfallDuration,
        changesInClimateForNumberOfWeatherEvents:
          part5.changesInClimateForNumberOfWeatherEvents,
        changesInClimateForNumberOfHotDays:
          part5.changesInClimateForNumberOfHotDays,
        changesInClimateForNumberOfRainyDays:
          part5.changesInClimateForNumberOfRainyDays,
        changesInClimateForOccurenceOfPestsAndDiseasesInCrops:
          part5.changesInClimateForOccurenceOfPestsAndDiseasesInCrops,
        changesInClimateForOccurenceOfPestsAndDiseasesInLivestock:
          part5.changesInClimateForOccurenceOfPestsAndDiseasesInLivestock,
        observedAnyChangeInTheOnsetOfDrySeason:
          part5.observedAnyChangeInTheOnsetOfDrySeason,
        observedAnyChangeInTheOnsetOfWetSeason:
          part5.observedAnyChangeInTheOnsetOfWetSeason,
        descriptionOfChangeInTemperature:
          part5.descriptionOfChangeInTemperature,
        descriptionOfChangeInRainfallDuration:
          part5.descriptionOfChangeInRainfallDuration,
        descriptionOfChangeInRainfallTiming:
          part5.descriptionOfChangeInRainfallTiming,
        descriptionOfChangeInRainfallIntensity:
          part5.descriptionOfChangeInRainfallIntensity,
        descriptionOfChangeInNumberOfWeatherEvents:
          part5.descriptionOfChangeInNumberOfWeatherEvents,
        perceivedEffectsOrImpactsOfChangeInTimingOfRains:
          part5.perceivedEffectsOrImpactsOfChangeInTimingOfRains,
        perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason:
          part5.perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason,
        perceivedEffectsOrImpactsOfReducedCroppingSeason:
          part5.perceivedEffectsOrImpactsOfReducedCroppingSeason,
        perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure:
          part5.perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure,
        perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions:
          part5.perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions,
        perceivedEffectsOrImpactsOfPostharvestLosses:
          part5.perceivedEffectsOrImpactsOfPostharvestLosses,
        perceivedEffectsOrImpactsOfPestInvasion:
          part5.perceivedEffectsOrImpactsOfPestInvasion,
        perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases:
          part5.perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases,
        perceivedEffectsOrImpactsOfPovertyAndFoodShortages:
          part5.perceivedEffectsOrImpactsOfPovertyAndFoodShortages,
        perceivedEffectsOrImpactsOfLackOfPotableWater:
          part5.perceivedEffectsOrImpactsOfLackOfPotableWater,
        perceivedEffectsOrImpactsOfReducedVolumeOfIrrigationWater:
          part5.perceivedEffectsOrImpactsOfReducedVolumeOfIrrigationWater,
        perceivedEffectsOrImpactsOfErosions:
          part5.perceivedEffectsOrImpactsOfErosions,
        perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife:
          part5.perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife,
        perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties:
          part5.perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties,
        perceivedEffectsOrImpactsOfDeathOfLivestock:
          part5.perceivedEffectsOrImpactsOfDeathOfLivestock,
        perceivedEffectsOrImpactsOfDecreasedLivestockProduction:
          part5.perceivedEffectsOrImpactsOfDecreasedLivestockProduction,
        perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing:
          part5.perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing,
        perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes:
          part5.perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes,
        perceivedEffectsOrImpactsOfRuralUrbanMigration:
          part5.perceivedEffectsOrImpactsOfRuralUrbanMigration,
        perceivedEffectsOrImpactsOfSiltationOfWaterBodies:
          part5.perceivedEffectsOrImpactsOfSiltationOfWaterBodies,
        perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover:
          part5.perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover,
        perceivedEffectsOrImpactsOfOthers:
          part5.perceivedEffectsOrImpactsOfOthers,
        observedMainOpportunitiesOfLongTermChangesInClimate:
          part5.observedMainOpportunitiesOfLongTermChangesInClimate,
        driversOfChangeAndVulnerabilityOfLandDegredation:
          part5.driversOfChangeAndVulnerabilityOfLandDegredation,
        driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices:
          part5.driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices,
        driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices:
          part5.driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices,
        driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals:
          part5.driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals,
        driversOfChangeAndVulnerabilityOfOthers:
          part5.driversOfChangeAndVulnerabilityOfOthers,
      },
      part6: {
        madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years:
          part6.madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years,
        changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall:
          part6.changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall,
        additionalAdaptationMeasuresBeingConsideredInTheFuture:
          part6.additionalAdaptationMeasuresBeingConsideredInTheFuture,
        receivedAnyExternalSupportForAdaptationMeasures:
          part6.receivedAnyExternalSupportForAdaptationMeasures,
        formOfFinancialSupportReceived: part6.formOfFinancialSupportReceived,
        formOfMaterialSupportReceived: part6.formOfMaterialSupportReceived,
        formOfExtensionServicesSupportReceived:
          part6.formOfExtensionServicesSupportReceived,
        farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived:
          part6.farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived,
        formOfInfrastructureSupportReceived:
          part6.formOfInfrastructureSupportReceived,
        formOfOtherSupportReceived: part6.formOfOtherSupportReceived,
        mostBeneficialSupportServices: part6.mostBeneficialSupportServices,
        lowEducationLevelConstraint: part6.lowEducationLevelConstraint,
        limitedAccessToInformationConstraint:
          part6.limitedAccessToInformationConstraint,
        lackOfExtensionServicesConstraint:
          part6.lackOfExtensionServicesConstraint,
        craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint:
          part6.craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint,
        inadequateCapitalConstraint: part6.inadequateCapitalConstraint,
        noAccessToWaterForIrrigationConstraint:
          part6.noAccessToWaterForIrrigationConstraint,
        noAccessToCreditConstraintConstraint:
          part6.noAccessToCreditConstraintConstraint,
        longerTimeRequiredToSeeResultsConstraint:
          part6.longerTimeRequiredToSeeResultsConstraint,
        oldAgeConstraint: part6.oldAgeConstraint,
        landTenureOrLandOwnershipIssuesConstraint:
          part6.landTenureOrLandOwnershipIssuesConstraint,
        landTopographyNotSuitableConstraint:
          part6.landTopographyNotSuitableConstraint,
        laborIntensiveOrNonAvailabilityOfLaborConstraint:
          part6.laborIntensiveOrNonAvailabilityOfLaborConstraint,
        infertileSoilConstraint: part6.infertileSoilConstraint,
        otherConstraint: part6.otherConstraint,
      },
      userId: beneficiary.userId,
    })
    if (docRef) {
      return docRef
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

export const deleteBeneficiary = async (beneficiary) => {
  try {
    return await deleteDoc(doc(db, 'beneficiaries', beneficiary.beneficiaryId))
  } catch (error) {
    console.error(error)
    return null
  }
}
