import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {
  SET_LOGIN,
  SET_BENEFICIARIES,
  SET_BENEFICIARY_PER_PROVINCE,
} from './mutation-types'

export default new Vuex.Store({
  state: {
    user: null,
    beneficiaries: [
      // {
      //   surveyNo: 1,
      //   date: new Date().toLocaleDateString(),
      //   interviewStart: new Date().toLocaleDateString(),
      //   interviewEnd: new Date().toLocaleDateString(),
      //   nameOfInterviewer: 'Troy Bolton',
      //   province: 'ALBAY',
      //   cityOrMunicipality: 'Bacacay',
      //   barangay: 'Brgy 1',
      //   nameOfFarmer: 'Juan Magsasaka',
      // },
      // {
      //   surveyNo: 2,
      //   date: new Date().toLocaleDateString(),
      //   interviewStart: new Date().toLocaleDateString(),
      //   interviewEnd: new Date().toLocaleDateString(),
      //   nameOfInterviewer: 'Gabriella Montez',
      //   province: 'ALBAY',
      //   cityOrMunicipality: 'Bacacay',
      //   barangay: 'Brgy 3',
      //   nameOfFarmer: 'Sisa Magsasaka',
      // },
      // {
      //   surveyNo: 3,
      //   date: new Date().toLocaleDateString(),
      //   interviewStart: new Date().toLocaleDateString(),
      //   interviewEnd: new Date().toLocaleDateString(),
      //   nameOfInterviewer: 'Sharpay Evans',
      //   province: 'CAMARINES NORTE',
      //   cityOrMunicipality: 'Capalonga',
      //   barangay: 'Brgy 1',
      //   nameOfFarmer: 'Pedro Magsasaka',
      // },
      // {
      //   surveyNo: 4,
      //   date: new Date().toLocaleDateString(),
      //   interviewStart: new Date().toLocaleDateString(),
      //   interviewEnd: new Date().toLocaleDateString(),
      //   nameOfInterviewer: 'Ryan Evans',
      //   province: 'CAMARINES SUR',
      //   cityOrMunicipality: 'Bombon',
      //   barangay: 'Brgy 2',
      //   nameOfFarmer: 'Florantina Magsasaka',
      // },
      // {
      //   surveyNo: 5,
      //   date: new Date().toLocaleDateString(),
      //   interviewStart: new Date().toLocaleDateString(),
      //   interviewEnd: new Date().toLocaleDateString(),
      //   nameOfInterviewer: 'Chad Danforth',
      //   province: 'CATANDUANES',
      //   cityOrMunicipality: 'Masbate City',
      //   barangay: 'Brgy 2',
      //   nameOfFarmer: 'Berto Magsasaka',
      // },
      // {
      //   surveyNo: 6,
      //   date: new Date().toLocaleDateString(),
      //   interviewStart: new Date().toLocaleDateString(),
      //   interviewEnd: new Date().toLocaleDateString(),
      //   nameOfInterviewer: 'Taylor McKessie',
      //   province: 'MASBATE',
      //   cityOrMunicipality: 'Panganiban',
      //   barangay: 'Brgy 5',
      //   nameOfFarmer: 'Lusiang Magsasaka',
      // },
      {
        // Part 0
        surveyNo: 7,
        date: '2022-11-10',
        interviewStart: '10:30',
        interviewEnd: '11:00',
        nameOfInterviewer: 'John Doe',

        // Part 1
        province: 'ALBAY',
        cityOrMunicipality: 'Bacacay',
        barangay: 'Baranggay',
        nameOfFarmer: 'Ani Magsika',
        contactNo: '091234123',
        farmersCodeNo: '1234',

        // Part 2
        age: '50',
        gender: 'Male',
        civilStatus: 'Married',
        religion: 'Roman Catholic',
        belongingTo: 'Indigenous People (Sample IP)',
        householdMembers:
          'Yusa Magsika, 49, Female, Wife; Sashimi Magsika, 10, Male, Kid',
        yearsOfFarmingExperience: '40',
        highestEducationalAttainment: 'High School Graduate',
        languagesOrDialectsSpoken: 'Tagalog',
        mainSourceOfIncome: 'Farming',
        otherSourcesOfIncome: 'Own Business (Bigasan)',
        averageGrossMonthlyIncomeOfHousehold: '30,001 - 40,000',
        averageGrossMonthlyFarmIncome: '40,001 - 50,000',
        membershipInAFarmerGroupOrAssociationOrOrganization:
          'true (Magsika Assoc)',
        enrolledInRegistrySystemForBasicSectorsInAgriculture: false,

        // Part 3
        totalAreaOfAgriculturalLand: '10',
        totalAreaOfForestryLand: '5',
        totalCultivatedArea: '8',
        distanceFromHomeToFarm: '3',
        distanceFromLandToWaterSource: '1',
        distanceFromMarketNearestPavedRoad: '1',
        distanceFromMarketOrTradingPost: '1',
        irrigationSource: 'Rainfall',
        monthsWithoutRain: 'February, March, April',
        positionInTheLandscape: 'Top slope',
        locationOfFarm: 'Upland',
        landTenure: 'Private Ownership',
        tenancy: 'Cash tenancy',
        landHolding: 'Small, sometimes fragmented (1-2 ha)',

        // Part 4
        agriculturalActivities:
          'Crop Production, Livestock Production, Aquaculture, Agri-based Product Development(Pinya planting)',
        cropsProduced: 'Palay',
        landAreaDevotedForCropProduction: '1',
        livestockRaisedOrProduced: 'Pigs',
        landAreaDevotedForLivestockProduction: '1',
        speciesGrownForAquaculture: 'Tilapia',
        landAreaDevotedForAquaculture: '1',
        sourceOfWaterForAquaculture: 'Irrigation',
        croppingPattern: 'Inter-cropping',
        estimatedGrossIncomePerCroppingFirstCropping: '100000',
        estimatedGrossIncomePerCroppingSecondCropping: '100000',
        cropCalendarWetSeasonLandPreparation: 'January, February',
        cropCalendarWetSeasonPlanting: 'March, April',
        cropCalendarWetSeasonGrowing: 'April, May',
        cropCalendarWetSeasonHarvesting: 'June, July',
        cropCalendarDrySeasonLandPreparation: 'January, March',
        cropCalendarDrySeasonPlanting: 'February, March',
        cropCalendarDrySeasonGrowing: 'March, April',
        cropCalendarDrySeasonHarvesting: 'June, November',

        // Part 5
        attendedAgriculturalRelatedTrainings: true,
        totalNumberOfTrainingsAttended: '5',
        sourceOfInformationRelatedToImprovingAgriculturalProduction:
          'Internet, Social Media, TV, Radio',
        sourceOfInformationRelatedToImprovingAgriculturalProductProcessing:
          'TV, Radio, Internet, Social Media',
        sourceOfClimateAndWeatherInformation: 'Others(Facebook, Twitter)',
        observedAnyLongTermChangesInClimate: 'Yes',
        changesInClimateForTemperature: 'Increase',
        changesInClimateForAmountOfRainfaill: 'Increase',
        changesInClimateForRainfallTiming: 'Decrease',
        changesInClimateForRainfulIntensity: 'Increase',
        changesInClimateForRainfallDuration: 'Decrease',
        changesInClimateForNumberOfWeatherEvents: 'Increase',
        changesInClimateForNumberOfHotDays: 'Decrease',
        changesInClimateForNumberOfRainyDays: 'Decrease',
        changesInClimateForOccurenceOfPestsAndDiseasesInCrops: 'Decrease',
        changesInClimateForOccurenceOfPestsAndDiseasesInLivestock: 'Decrease',
        observedAnyChangeInTheOnsetOfDrySeason: 'No',
        observedAnyChangeInTheOnsetOfWetSeason: "I don't know",
        descriptionOfChangeInTemperature: 'Limited',
        descriptionOfChangeInRainfallDuration: 'Limited',
        descriptionOfChangeInRainfallTiming: 'Limited',
        descriptionOfChangeInRainfallIntensity: 'Extreme',
        descriptionOfChangeInNumberOfWeatherEvents: 'Very Limited/Few',
        perceivedEffectsOrImpactsOfChangeInTimingOfRains: 'Significant',
        perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason:
          null,
        perceivedEffectsOrImpactsOfReducedCroppingSeason: null,
        perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions:
          'Irrelevant',
        perceivedEffectsOrImpactsOfPostharvestLosses: null,
        perceivedEffectsOrImpactsOfPestInvasion: null,
        perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases: null,
        perceivedEffectsOrImpactsOfPovertyAndFoodShortages: null,
        perceivedEffectsOrImpactsOfLackOfPotableWater: null,
        perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWater: null,
        perceivedEffectsOrImpactsOfErosions: null,
        perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife: null,
        perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties: null,
        perceivedEffectsOrImpactsOfDeathOfLivestock: null,
        perceivedEffectsOrImpactsOfDecreasedLivestockProduction:
          'Very Severe [Disastrous]',
        perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing:
          'Very Severe [Disastrous]',
        perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes: null,
        perceivedEffectsOrImpactsOfRuralUrbanMigration: null,
        perceivedEffectsOrImpactsOfSiltationOfWaterBodies: null,
        perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover: null,
        perceivedEffectsOrImpactsOfOthers: '',
        observedMainOpportunitiesOfLongTermChangesInClimate:
          'Wala namang nakita',
        driversOfChangeAndVulnerabilityOfLandDegredation: 'Severe [Critical]',
        driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices: null,
        driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices: null,
        driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals:
          'Irrelevant',
        driversOfChangeAndVulnerabilityOfOthers:
          'Pest (Very Severe [Disastrous]), Lack of Fertilizer (Very Severe [Disastrous])',

        // Part 6
        madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years:
          'Yes',
        changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall:
          'Use of drip irrigation, Use of alternate wetting and drying irrigation, Implementation of pasture management techniques, Hydroponics',
        additionalAdaptationMeasuresBeingConsideredInTheFuture:
          'Wala namang dagdag',
        receivedAnyExternalSupportForAdaptationMeasures: 'Yes',
        formOfFinancialSupportReceived: 'Coop',
        formOfMaterialSupportReceived: 'Pesticide',
        formOfExtensionServicesSupportReceived: null,
        farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived: null,
        formOfInfrastructureSupportReceived: null,
        formOfOtherSupportReceived: null,
        mostBeneficialSupportServices: 'Capital (Para simulan lahat)',
        lowEducationLevelConstraint: '1 - Very Important',
        limitedAccessToInformationConstraint: null,
        lackOfExtensionServicesConstraint: null,
        craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint: null,
        inadequateCapitalConstraint: '1 - Very Important',
        noAccessToWaterForIrrigationConstraint: null,
        noAccessToCreditConstraintConstraint: null,
        longerTimeRequiredToSeeResultsConstraint: null,
        oldAgeConstraint: null,
        landTenureOrLandOwnershipIssuesConstraint: null,
        landTopographyNotSuitableConstraint: null,
        laborIntensiveOrNonAvailabilityOfLaborConstraint: null,
        infertileSoilConstraint: null,
        otherConstraint: 'Problema sa pamilya (1 - Very Important)',

        // Part 7
        accessToAgricultureOrFisheriesRnDInstitutions: 'Maganda',
        accessToCredit: null,
        laboratoryFacilities: null,
        educationAndHealthFacilities: null,
        farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations:
          null,
        marketingSystem: '',
        presenceOfAgriculturalProcessingFacilities: null,
        irrigation: null,
        farmingEquipment: 'Tracktor',
        others: null,

        // Part 8
        issuesOrConcernsOrProblemsInFarming:
          'Soil erosion, Soil siltation, Low crop production**(Palay)',
      },
    ],
    beneficiariesPerProvince: [
      {
        province: 'ALBAY',
        beneficiaries: [
          {
            province: 'ALBAY',
            cityOrMunicipality: 'Bacacay',
            barangay: 'Brgy 1',
            nameOfFarmer: 'Juan Magsasaka',
          },
          {
            province: 'ALBAY',
            cityOrMunicipality: 'Bacacay',
            barangay: 'Brgy 3',
            nameOfFarmer: 'Sisa Magsasaka',
          },
        ],
      },
      {
        province: 'CAMARINES NORTE',
        beneficiaries: [
          {
            province: 'CAMARINES NORTE',
            cityOrMunicipality: 'Capalonga',
            barangay: 'Brgy 1',
            nameOfFarmer: 'Pedro Magsasaka',
          },
        ],
      },
      {
        province: 'CAMARINES SUR',
        beneficiaries: [
          {
            province: 'CAMARINES SUR',
            cityOrMunicipality: 'Bombon',
            barangay: 'Brgy 2',
            nameOfFarmer: 'Florantina Magsasaka',
          },
        ],
      },
      {
        province: 'CATANDUANES',
        beneficiaries: [
          {
            province: 'CATANDUANES',
            cityOrMunicipality: 'Masbate City',
            barangay: 'Brgy 2',
            nameOfFarmer: 'Berto Magsasaka',
          },
        ],
      },
      {
        province: 'MASBATE',
        beneficiaries: [
          {
            province: 'MASBATE',
            cityOrMunicipality: 'Panganiban',
            barangay: 'Brgy 5',
            nameOfFarmer: 'Lusiang Magsasaka',
          },
        ],
      },
      {
        province: 'SORSOGON',
        beneficiaries: [],
      },
    ],

    // UI data variables
    fivePointScale: [
      'Very Severe [Disastrous]',
      'Severe [Critical]',
      'Significant',
      'Somewhat Significant',
      'Irrelevant',
    ],
    generalThreeChoice: ['Yes', 'No', `I don't know`],
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    seasonList: ['Wet', 'Dry', 'Both'],
    sourceOfInformationOptions: [
      'TV',
      'Radio',
      'Internet',
      'Flyers',
      'Social Media',
      'Newspaper',
      'Agricultural Technicians (LGU)',
      'Seed Companies',
      'Traders',
      `Cooperatives and Farmers' Association`,
      'Co-Farmers',
      'Brgy. Officials',
      'Friends and Relatives',
      'Agrichemical Suppliers',
      'Others',
    ],
    threePointScale: [
      '1 - Very Important',
      '2 - Important',
      '3 - Not Important',
    ],
  },

  mutations: {
    [SET_LOGIN](state, credentials) {
      state.user = credentials
    },

    [SET_BENEFICIARIES](state, beneficiaries) {
      state.beneficiaries = beneficiaries
    },

    [SET_BENEFICIARY_PER_PROVINCE](state, beneficiaryPerProvince) {
      const beneficiariesPerProvince = state.beneficiariesPerProvince

      beneficiariesPerProvince.filter((_beneficiaryPerProvince) => {
        if (
          _beneficiaryPerProvince.province === beneficiaryPerProvince.province
        ) {
          _beneficiaryPerProvince.beneficiaries.push(beneficiaryPerProvince)
        }
      })
    },
  },
  actions: {
    setBeneficiariesAction({ commit }, payload) {
      commit('SET_BENEFICIARIES', payload)
    },

    setBeneficiaryPerProvinceAction({ commit }, payload) {
      commit('SET_BENEFICIARY_PER_PROVINCE', payload)
    },

    setLoginAction({ commit }, payload) {
      commit('SET_LOGIN', payload)
    },
  },
  modules: {},
})
