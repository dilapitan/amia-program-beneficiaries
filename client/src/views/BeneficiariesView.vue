<template>
  <div class="my-5 mx-10">
    <v-row>
      <v-col><h3>List of Program Beneficiaries</h3></v-col>
      <v-spacer></v-spacer>
      <v-col class="text-right">
        <v-btn v-if="$vuetify.breakpoint.smAndUp" color="primary" to="/add">
          <v-icon left>mdi-account-plus</v-icon>
          ADD BENEFICIARY
        </v-btn>

        <v-btn v-else fab small color="primary" to="/add">
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <br />

    <v-row>
      <v-col cols="4">
        <v-select
          v-model="selectedProvince"
          :items="provincesOfRegion5"
          menu-props="auto"
          label="Select a Province to filter"
          prepend-icon="mdi-filter"
          single-line
          width="100"
          clearable
        ></v-select>
      </v-col>
    </v-row>

    <br />

    <p v-if="isLoading" class="text-center">
      <v-progress-circular indeterminate color="primary" :size="50">
      </v-progress-circular>
    </p>

    <div v-else>
      <div v-if="beneficiaries.length > 0">
        <v-data-table
          :headers="headers"
          :items="beneficiaries"
          class="elevation-1"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <div class="d-flex align-baseline">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    @click="viewBeneficiary(item)"
                    small
                    class="mr-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-eye
                  </v-icon>
                </template>
                <span>View Beneficiary</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    small
                    class="mr-2"
                    @click="editBeneficiary(item)"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-pencil
                  </v-icon>
                </template>
                <span>Edit Beneficiary</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    small
                    @click="deleteItem(item)"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-delete
                  </v-icon>
                </template>
                <span>Delete Beneficiary</span>
              </v-tooltip>
            </div>
          </template>
        </v-data-table>

        <div>
          <strong>Note:</strong>
          <div>
            <p>
              <span class="ml-2 text-caption">
                <strong>*</strong>
                for the last 20-30 years</span
              >
            </p>
            <p>
              <span class="ml-2 text-caption">
                <strong>**</strong>
                Constraints/Difficulties in Changing Farming Ways</span
              >
            </p>
          </div>
        </div>
      </div>

      <p v-else>No records found.</p>
    </div>

    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h6">
          Are you sure you want to delete Survey No:
          {{ deletedItem.surveyNo }}?
        </v-card-title>

        <br />

        <v-card-subtitle>
          Deleting this removes the beneficiary from the list.
        </v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="error" @click="deleteItemConfirm">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <SnackbarLayout />
  </div>
</template>

<script>
import SnackbarLayout from '@/components/SnackbarLayout.vue'

import { getProvincesOfRegion5 } from '@/helpers/locations'

import { getBeneficiaries } from '@/firebase/firebaseServices'

export default {
  components: {
    SnackbarLayout,
  },

  data: () => ({
    headers: [
      { text: 'Actions', value: 'actions', sortable: false },
      {
        text: 'Survey No.',
        value: 'surveyNo',
        align: 'center',
        width: '110px',
      },
      { text: 'Date', sortable: false, value: 'date', align: 'center' },
      {
        text: 'Interview Start',
        sortable: false,
        width: '120px',
        align: 'center',
        value: 'interviewStart',
      },
      {
        text: 'Interview End',
        sortable: false,
        width: '120px',
        align: 'center',
        value: 'interviewEnd',
      },
      {
        text: 'Name of Interviewer',
        sortable: false,
        value: 'nameOfInterviewer',
        width: '200px',
        align: 'center',
      },

      // 1. Farmer's Basic Information
      {
        text: '(1.1) Province',
        sortable: false,
        value: 'province',
        width: '200px',
        align: 'center',
      },
      {
        text: '(1.2) City/Municipality',
        sortable: false,
        value: 'cityOrMunicipality',
        width: '200px',
        align: 'center',
      },
      {
        text: '(1.3) Barangay',
        sortable: false,
        width: '120px',
        align: 'center',
        value: 'barangay',
      },
      {
        text: '(1.4) Name of Farmer',
        sortable: false,
        width: '150px',
        align: 'center',
        value: 'nameOfFarmer',
      },
      {
        text: '(1.5) Contact No.',
        sortable: false,
        width: '130px',
        align: 'center',
        value: 'contactNo',
      },
      {
        text: `(1.6) Farmer's Code No.`,
        sortable: false,
        value: 'farmersCodeNo',
        width: '200px',
        align: 'center',
      },

      // 2. Socio-Demographic Information
      {
        text: '(2.1) Age',
        sortable: false,
        value: 'age',
        width: '90px',
        align: 'center',
      },
      {
        text: '(2.2) Gender',
        sortable: false,
        value: 'gender',
        width: '100px',
        align: 'center',
      },
      {
        text: '(2.3) Civil Status',
        sortable: false,
        value: 'civilStatus',
        width: '130px',
        align: 'center',
      },
      {
        text: '(2.4) Religion',
        sortable: false,
        value: 'religion',
        width: '120px',
        align: 'center',
      },
      {
        text: '(2.5) Beloning To',
        sortable: false,
        value: 'belongingTo',
        width: '130px',
        align: 'center',
      },
      {
        text: '(2.6) Household Members (farmer not included)',
        sortable: false,
        value: 'householdMembers',
        width: '350px',
        align: 'center',
      },
      {
        text: '(2.7) Years of Farming Experience',
        sortable: false,
        value: 'yearsOfFarmingExperience',
        width: '300px',
        align: 'center',
      },
      {
        text: '(2.8) Highest Educational Attainment',
        sortable: false,
        value: 'highestEducationalAttainment',
        width: '200px',
        align: 'center',
      },
      {
        text: '(2.9) Languages/Dialects spoken',
        sortable: false,
        value: 'languagesOrDialectsSpoken',
        width: '200px',
        align: 'center',
      },
      {
        text: '(2.10) Main Source of Income',
        sortable: false,
        value: 'mainSourceOfIncome',
        width: '200px',
        align: 'center',
      },
      {
        text: '(2.11) Other Sources of Income',
        sortable: false,
        value: 'otherSourcesOfIncome',
        width: '200px',
        align: 'center',
      },
      {
        text: '(2.12) Average Gross Monthly Income of Household (PhP)',
        sortable: false,
        value: 'averageGrossMonthlyIncomeOfHousehold',
        width: '200px',
        align: 'center',
      },
      {
        text: '(2.13) Average Gross Monthly Farm Income (PhP)',
        sortable: false,
        value: 'averageGrossMonthlyFarmIncome',
        width: '200px',
        align: 'center',
      },
      {
        text: '(2.14) Membership In A Farmer Group/Association/Organization',
        sortable: false,
        value: 'membershipInAFarmerGroupOrAssociationOrOrganization',
        width: '200px',
        align: 'center',
      },
      {
        text: '(2.15) Enrolled in Registry System for Basic Sectors In Agriculture (RSBSA)',
        sortable: false,
        value: 'enrolledInRegistrySystemForBasicSectorsInAgriculture',
        width: '200px',
        align: 'center',
      },

      // 3. Farm Description
      {
        text: '(3.1) Total Area of Agricultural Land (ha)',
        sortable: false,
        value: 'totalAreaOfAgriculturalLand',
        width: '200px',
        align: 'center',
      },
      {
        text: '(3.2) Total Area of Forestry Land (ha)',
        sortable: false,
        value: 'totalAreaOfForestryLand',
        width: '200px',
        align: 'center',
      },
      {
        text: '(3.3) Total Cultivated Area (ha)',
        sortable: false,
        value: 'totalCultivatedArea',
        width: '200px',
        align: 'center',
      },
      {
        text: '(3.4) Distance from Home to Farm (km)',
        sortable: false,
        value: 'distanceFromHomeToFarm',
        width: '200px',
        align: 'center',
      },
      {
        text: '(3.5) Distance from Land to Water Source (km)',
        sortable: false,
        value: 'distanceFromLandToWaterSource',
        width: '200px',
        align: 'center',
      },
      {
        text: '(3.6) Distance from Market Nearest Paved (concrete/asphalt) road (km)',
        sortable: false,
        value: 'distanceFromMarketNearestPavedRoad',
        width: '200px',
        align: 'center',
      },
      {
        text: '(3.7) Distance from Market/Trading Post (km)',
        sortable: false,
        value: 'distanceFromMarketOrTradingPost',
        width: '200px',
        align: 'center',
      },
      {
        text: '(3.8) Irrigation Source',
        sortable: false,
        value: 'irrigationSource',
        width: '200px',
        align: 'center',
      },
      {
        text: '(3.9) Months Without Rain',
        sortable: false,
        value: 'monthsWithoutRain',
        width: '200px',
        align: 'center',
      },
      {
        text: '(3.10) Position in the Landscape',
        sortable: false,
        value: 'positionInTheLandscape',
        width: '200px',
        align: 'center',
      },
      {
        text: '(3.11) Location of Farm',
        sortable: false,
        value: 'locationOfFarm',
        width: '200px',
        align: 'center',
      },
      {
        text: '(3.12) Land Tenure',
        sortable: false,
        value: 'landTenure',
        width: '200px',
        align: 'center',
      },
      {
        text: '(3.13) Tenancy',
        sortable: false,
        value: 'tenancy',
        width: '200px',
        align: 'center',
      },
      {
        text: '(3.14) Land Holding',
        sortable: false,
        value: 'landHolding',
        width: '200px',
        align: 'center',
      },

      // 4. Farm Activities
      {
        text: '(4.1) Agricultural Activities',
        sortable: false,
        value: 'agriculturalActivities',
        width: '200px',
        align: 'center',
      },
      {
        text: '(4.2) Crops Produced',
        sortable: false,
        value: 'cropsProduced',
        width: '200px',
        align: 'center',
      },
      {
        text: '(4.3) Land Area Devoted For Crop Production (ha)',
        sortable: false,
        value: 'landAreaDevotedForCropProduction',
        width: '200px',
        align: 'center',
      },
      {
        text: '(4.4) Livestock Raised/Produced',
        sortable: false,
        value: 'livestockRaisedOrProduced',
        width: '200px',
        align: 'center',
      },
      {
        text: '(4.5) Land Area Devoted For Livestock Production (ha)',
        sortable: false,
        value: 'landAreaDevotedForLivestockProduction',
        width: '200px',
        align: 'center',
      },
      {
        text: '(4.6) Species grown for Aquaculture',
        sortable: false,
        value: 'speciesGrownForAquaculture',
        width: '200px',
        align: 'center',
      },
      {
        text: '(4.7) Land Area Devoted for Aquaculture (ha)',
        sortable: false,
        value: 'landAreaDevotedForAquaculture',
        width: '200px',
        align: 'center',
      },
      {
        text: '(4.8) Source of Water for Aquaculture',
        sortable: false,
        value: 'sourceOfWaterForAquaculture',
        width: '200px',
        align: 'center',
      },
      {
        text: '(4.9) Cropping Pattern',
        sortable: false,
        value: 'croppingPattern',
        width: '200px',
        align: 'center',
      },
      {
        text: '(4.10) Crop Calendar (Wet Season) - Land Preparation',
        sortable: false,
        value: 'cropCalendarWetSeasonLandPreparation',
        width: '350px',
        align: 'center',
      },
      {
        text: '(4.10) Crop Calendar (Wet Season) - Planting',
        sortable: false,
        value: 'cropCalendarWetSeasonPlanting',
        width: '350px',
        align: 'center',
      },
      {
        text: '(4.10) Crop Calendar (Wet Season) - Growing',
        sortable: false,
        value: 'cropCalendarWetSeasonGrowing',
        width: '350px',
        align: 'center',
      },
      {
        text: '(4.10) Crop Calendar (Wet Season) - Harvesting',
        sortable: false,
        value: 'cropCalendarWetSeasonHarvesting',
        width: '350px',
        align: 'center',
      },
      {
        text: '(4.10) Crop Calendar (Dry Season) - Land Preparation',
        sortable: false,
        value: 'cropCalendarDrySeasonLandPreparation',
        width: '350px',
        align: 'center',
      },
      {
        text: '(4.10) Crop Calendar (Dry Season) - Planting',
        sortable: false,
        value: 'cropCalendarDrySeasonPlanting',
        width: '350px',
        align: 'center',
      },
      {
        text: '(4.10) Crop Calendar (Dry Season) - Growing',
        sortable: false,
        value: 'cropCalendarDrySeasonGrowing',
        width: '350px',
        align: 'center',
      },
      {
        text: '(4.10) Crop Calendar (Dry Season) - Harvesting',
        sortable: false,
        value: 'cropCalendarDrySeasonHarvesting',
        width: '350px',
        align: 'center',
      },
      {
        text: '(4.11) Estimated Gross Income Per Cropping (PhP) - 1st Cropping',
        sortable: false,
        value: 'estimatedGrossIncomePerCroppingFirstCropping',
        width: '200px',
        align: 'center',
      },
      {
        text: '(4.11) Estimated Gross Income Per Cropping (PhP) - 2nd Cropping',
        sortable: false,
        value: 'estimatedGrossIncomePerCroppingSecondCropping',
        width: '200px',
        align: 'center',
      },

      // 5. Technical Knowledge/Perception of Climate Change and Its Impacts
      {
        text: '(5.1) Attended Agricultural-related Trainings',
        sortable: false,
        value: 'attendedAgriculturalRelatedTrainings',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.2) Total Number of Trainings Attended',
        sortable: false,
        value: 'totalNumberOfTrainingsAttended',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.3) Source of Information Related to Improving Agricultural Production',
        sortable: false,
        value: 'sourceOfInformationRelatedToImprovingAgriculturalProduction',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.4) Source of Information Related to Improving Agricultural Product Processing',
        sortable: false,
        value:
          'sourceOfInformationRelatedToImprovingAgriculturalProductProcessing',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.5) Source of Climate and Weather Information',
        sortable: false,
        value: 'sourceOfClimateAndWeatherInformation',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.6) Observed Any Long-term Changes in Climate (temperature/rainfall) *',
        sortable: false,
        value: 'observedAnyLongTermChangesInClimate',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.7.1) Long-term Changes in Climate for Temperature *',
        sortable: false,
        value: 'changesInClimateForTemperature',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.7.2) Long-term Changes in Climate for Amount of Rainfaill *',
        sortable: false,
        value: 'changesInClimateForAmountOfRainfaill',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.7.3) Long-term Changes in Climate for Rainfall Timing *',
        sortable: false,
        value: 'changesInClimateForRainfallTiming',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.7.4) Long-term Changes in Climate for Rainful Intensity *',
        sortable: false,
        value: 'changesInClimateForRainfulIntensity',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.7.5) Long-term Changes in Climate for Rainfall Duration *',
        sortable: false,
        value: 'changesInClimateForRainfallDuration',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.7.6) Long-term Changes in Climate for Number of Weather Events *',
        sortable: false,
        value: 'changesInClimateForNumberOfWeatherEvents',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.7.7) Long-term Changes in Climate for Number of Hot Days *',
        sortable: false,
        value: 'changesInClimateForNumberOfHotDays',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.7.8) Long-term Changes in Climate for Number of Rainy Days *',
        sortable: false,
        value: 'changesInClimateForNumberOfRainyDays',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.7.9) Long-term Changes in Climate for Occurence of Pests And Diseases in Crops *',
        sortable: false,
        value: 'changesInClimateForOccurenceOfPestsAndDiseasesInCrops',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.7.10) Long-term Changes in Climate for Occurence of Pests And Diseases in Livestock *',
        sortable: false,
        value: 'changesInClimateForOccurenceOfPestsAndDiseasesInLivestock',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.7.11) Observed any change in the Onset of Dry Season',
        sortable: false,
        value: 'observedAnyChangeInTheOnsetOfDrySeason',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.7.12) Observed any change in the Onset of Wet Season',
        sortable: false,
        value: 'observedAnyChangeInTheOnsetOfWetSeason',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.8.1) Description of Change in Temperature',
        sortable: false,
        value: 'descriptionOfChangeInTemperature',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.8.2) Description of Change in Rainfall Duration',
        sortable: false,
        value: 'descriptionOfChangeInRainfallDuration',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.8.3) Description of Change in Rainfall Timing',
        sortable: false,
        value: 'descriptionOfChangeInRainfallTiming',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.8.4) Description of Change in Rainfall Intensity',
        sortable: false,
        value: 'descriptionOfChangeInRainfallIntensity',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.8.5) Description of Change in Number of Weather Events',
        sortable: false,
        value: 'descriptionOfChangeInNumberOfWeatherEvents',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.1) Perceived Effects/Impacts of: Change in Timing of Rains',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfChangeInTimingOfRains',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.2) Perceived Effects/Impacts of: Abrupt Change in Seasons/Changes in Growing Season',
        sortable: false,
        value:
          'perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.3) Perceived Effects/Impacts of: Reduced Cropping (Growing) Season',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfReducedCroppingSeason',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.4) Perceived Effects/Impacts of: Increased Frequency Of Drought and Crop Failure',
        sortable: false,
        value:
          'perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.5) Perceived Effects/Impacts of: Increased Frequency Of Floods and Farm Destructions',
        sortable: false,
        value:
          'perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.6) Perceived Effects/Impacts of: Postharvest Losses',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfPostharvestLosses',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.7) Perceived Effects/Impacts of: Pest Invasion',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfPestInvasion',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.8) Perceived Effects/Impacts of: Prevalence of Pests and Diseases',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.9) Perceived Effects/Impacts of: Poverty and Food Shortages',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfPovertyAndFoodShortages',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.10) Perceived Effects/Impacts of: Lack of Potable Water (Drinking)',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfLackOfPotableWater',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.11) Perceived Effects/Impacts of: Reduced Volume Of Irrigation Water',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfReducedVolumeOfIrrigationWater',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.12) Perceived Effects/Impacts of: Erosions',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfErosions',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.13) Perceived Effects/Impacts of: Extinction of Fishes and Aquatic Life',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.14) Perceived Effects/Impacts of: ExtinctionOfSomeCropsAndCropVarieties',
        sortable: false,
        value:
          'perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.15) Perceived Effects/Impacts of: Death of Livestock',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfDeathOfLivestock',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.16) Perceived Effects/Impacts of: Decreased Livestock Production',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfDecreasedLivestockProduction',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.17) Perceived Effects/Impacts of: Rising Cost of Farming and Fishing',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.18) Perceived Effects/Impacts of: Destruction of Farm Roads and Homes',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.19) Perceived Effects/Impacts of: Rural-Urban Migration',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfRuralUrbanMigration',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.20) Perceived Effects/Impacts of: Siltation of Water Bodies',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfSiltationOfWaterBodies',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.21) Perceived Effects/Impacts of: Disappearance of Vegetation Cover',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.9.22) Perceived Effects/Impacts of: Others',
        sortable: false,
        value: 'perceivedEffectsOrImpactsOfOthers',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.10) Observed Main Opportunities (Positive Effects/Impacts) of These Long-term Changes in Climate *',
        sortable: false,
        value: 'observedMainOpportunitiesOfLongTermChangesInClimate',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.11.1) Drivers of Change and Vulnerability of: Land Degradation (Soil Nutrient Depletion)',
        sortable: false,
        value: 'driversOfChangeAndVulnerabilityOfLandDegredation',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.11.2) Drivers of Change and Vulnerability of: Unexpexcted Changes in Input Prices',
        sortable: false,
        value:
          'driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.11.3) Drivers of Change and Vulnerability of: Unexpected Changes in Product Prices',
        sortable: false,
        value:
          'driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices',
        width: '200px',
        align: 'center',
      },
      {
        text: '(5.11.4) Drivers of Change and Vulnerability of: Risks for Diseases and Pests Affecting Crops and Animals',
        sortable: false,
        value:
          'driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals',
        width: '400px',
        align: 'center',
      },
      {
        text: '(5.11.5) Drivers of Change and Vulnerability of: Others',
        sortable: false,
        value: 'driversOfChangeAndVulnerabilityOfOthers',
        width: '200px',
        align: 'center',
      },

      // 6. Farmer's Adaptation Practices
      {
        text: '(6.1) Made adjustments in Livelihood in Response to the Perceived Changes in Rainfall and Temperature over the last 10 years',
        sortable: false,
        value:
          'madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years',
        width: '450px',
        align: 'center',
      },
      {
        text: '(6.2) Changes/Adjustments Made In Farming in Response to Long-term shifts in Temperature and Rainfall',
        sortable: false,
        value:
          'changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall',
        width: '400px',
        align: 'center',
      },
      {
        text: '(6.3) Additional Adaptation Measures Being Considered in the Future',
        sortable: false,
        value: 'additionalAdaptationMeasuresBeingConsideredInTheFuture',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.4) Receive Any External Support for Adaptation Measures',
        sortable: false,
        value: 'receivedAnyExternalSupportForAdaptationMeasures',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.5.1) Form of Financial Support received',
        sortable: false,
        value: 'formOfFinancialSupportReceived',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.5.2) Form of Material Support received',
        sortable: false,
        value: 'formOfMaterialSupportReceived',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.5.3) Form of Extension Services Support received',
        sortable: false,
        value: 'formOfExtensionServicesSupportReceived',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.5.4) Form of Farming Fishing Advisories Based On Weather and Climate Support received',
        sortable: false,
        value:
          'FarmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.5.5) Form of Infrastructure Support received',
        sortable: false,
        value: 'formOfInfrastructureSupportReceived',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.5.6) Form of Other Support received',
        sortable: false,
        value: 'formOfOtherSupportReceived',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.6) Most Beneficial Support Services',
        sortable: false,
        value: 'mostBeneficialSupportServices',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.1) Low Education Level Constraint **',
        sortable: false,
        value: 'lowEducationLevelConstraint',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.2) Limited Access to Information Constraint **',
        sortable: false,
        value: 'limitedAccessToInformationConstraint',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.3) Lack of Extension Services Constraint **',
        sortable: false,
        value: 'lackOfExtensionServicesConstraint',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.4) CRA Options Not Compatible With Community Norms and Values Constraint **',
        sortable: false,
        value: 'craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.5) Inadequate Capital Constraint **',
        sortable: false,
        value: 'inadequateCapitalConstraint',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.6) No Access to Water for Irrigation Constraint **',
        sortable: false,
        value: 'noAccessToWaterForIrrigationConstraint',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.7) No Access to Credit Constraint **',
        sortable: false,
        value: 'noAccessToCreditConstraintConstraint',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.8) Longer Time Required to See Results Constraint **',
        sortable: false,
        value: 'longerTimeRequiredToSeeResultsConstraint',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.9) Old Age Constraint **',
        sortable: false,
        value: 'oldAgeConstraint',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.10) Land Tenure/Land Ownership Issues Constraint **',
        sortable: false,
        value: 'landTenureOrLandOwnershipIssuesConstraint',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.11) Land Topography Not Suitable Constraint **',
        sortable: false,
        value: 'landTopographyNotSuitableConstraint',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.12) Labor Intensive/Non-availability of Labor Constraint **',
        sortable: false,
        value: 'laborIntensiveOrNonAvailabilityOfLaborConstraint',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.13) Infertile Soil Constraint **',
        sortable: false,
        value: 'infertileSoilConstraint',
        width: '150px',
        align: 'center',
      },
      {
        text: '(6.7.14) Other Constraint **',
        sortable: false,
        value: 'otherConstraint',
        width: '150px',
        align: 'center',
      },

      // 7. Institutional Characteristics
      {
        text: '(7.1): Access to Agirculture/Fisheries R&D Institutions',
        sortable: false,
        value: 'accessToAgricultureOrFisheriesRnDInstitutions',
        width: '150px',
        align: 'center',
      },
      {
        text: '(7.2): Access to Credit',
        sortable: false,
        value: 'accessToCredit',
        width: '150px',
        align: 'center',
      },
      {
        text: '(7.3): Laboratory Facilities',
        sortable: false,
        value: 'laboratoryFacilities',
        width: '150px',
        align: 'center',
      },
      {
        text: '(7.4): Education and Health Facilities',
        sortable: false,
        value: 'educationAndHealthFacilities',
        width: '150px',
        align: 'center',
      },
      {
        text: `(7.5): Farmers' Groups, Associations, Cooperatives; Non-Government Organizations; Irrigator's Associations`,
        sortable: false,
        value:
          'farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations',
        width: '150px',
        align: 'center',
      },
      {
        text: '(7.6): Marketing System',
        sortable: false,
        value: 'marketingSystem',
        width: '150px',
        align: 'center',
      },
      {
        text: '(7.7): Presence of Agricultural Processing Facilities',
        sortable: false,
        value: 'presenceOfAgriculturalProcessingFacilities',
        width: '150px',
        align: 'center',
      },
      {
        text: '(7.8): Irrigation',
        sortable: false,
        value: 'irrigation',
        width: '150px',
        align: 'center',
      },
      {
        text: '(7.9): Farming Equipment',
        sortable: false,
        value: 'farmingEquipment',
        width: '150px',
        align: 'center',
      },
      {
        text: '(7.10): Others',
        sortable: false,
        value: 'others',
        width: '150px',
        align: 'center',
      },

      // 8. Issues/Concerns/Problems in Farming
      {
        text: '(8) Issues/Concerns/Problems in Farming',
        sortable: false,
        value: 'issuesOrConcernsOrProblemsInFarming',
        width: '150px',
        align: 'center',
      },
    ],
    dialogDelete: false,
    deletedIndex: -1,
    deletedItem: {},
    isLoading: true,
    updatedBeneficiariesPerProvince: [],
    selectedProvince: null,
  }),

  computed: {
    beneficiaries() {
      return this.$store.state.beneficiaries
    },

    provincesOfRegion5() {
      return getProvincesOfRegion5()
    },
  },

  created() {
    this.initialize(null)
  },

  watch: {
    dialogDelete(val) {
      val || this.closeDelete()
    },

    selectedProvince() {
      this.initialize(this.selectedProvince)
    },
  },

  methods: {
    async initialize(province) {
      try {
        this.isLoading = true
        const beneficiaries = await getBeneficiaries(province)
        this.$store.dispatch('setBeneficiariesAction', beneficiaries)
      } catch (error) {
        this.$store.dispatch('setSnackbarAction', true)
        this.$store.dispatch('setSnackbarDetailsAction', {
          color: 'error',
          text: 'Failed to load data! Please contact admin.',
        })
        this.$store.dispatch('setBeneficiariesAction', [])
      }
      this.isLoading = false
    },

    viewBeneficiary(beneficiary) {
      this.$router.push({
        name: 'ViewBeneficiaryView',
        params: {
          content: beneficiary,
          mode: 'VIEW',
          surveyNo: beneficiary.surveyNo,
        },
      })
    },

    editBeneficiary(beneficiary) {
      this.$router.push({
        name: 'EditBeneficiaryView',
        params: {
          content: beneficiary,
          mode: 'EDIT',
          surveyNo: beneficiary.surveyNo,
        },
      })
    },

    deleteItem(item) {
      // console.log('item:', item)
      this.deletedIndex = this.beneficiaries.indexOf(item)
      this.deletedItem = Object.assign({}, item)

      const provinceWithBeneficiaries =
        this.$store.state.beneficiariesPerProvince.find(
          (provinceWithBeneficiary) =>
            provinceWithBeneficiary.province === item.province
        )

      const filteredBeneficiaries =
        provinceWithBeneficiaries.beneficiaries.filter((beneficiary) => {
          if (beneficiary.surveyNo !== item.surveyNo) return beneficiary
        })

      const _updatedBeneficiariesPerProvince =
        this.$store.state.beneficiariesPerProvince.map(
          (provinceWithBeneficiary) => {
            if (provinceWithBeneficiary.province === item.province) {
              provinceWithBeneficiary.beneficiaries = filteredBeneficiaries
            }
            return provinceWithBeneficiary
          }
        )

      this.updatedBeneficiariesPerProvince = _updatedBeneficiariesPerProvince

      this.dialogDelete = true
    },

    deleteItemConfirm() {
      try {
        const updatedBeneficiaries = this.beneficiaries.splice(
          this.deletedIndex,
          1
        )
        this.$store.dispatch('setBeneficiariesAction', updatedBeneficiaries)
        this.$store.dispatch(
          'setBeneficiaryPerProvinceAction',
          this.updatedBeneficiariesPerProvince
        )

        this.$store.dispatch('setSnackbarAction', true)
        this.$store.dispatch('setSnackbarDetailsAction', {
          color: 'success',
          text: 'Successfully deleted beneficiary!',
        })

        this.closeDelete()
      } catch (error) {
        this.$store.dispatch('setSnackbarAction', true)
        this.$store.dispatch('setSnackbarDetailsAction', {
          color: 'error',
          text: 'Failed deleting a beneficiary! Please contact admin.',
        })
        this.closeDelete()
        throw new Error(error)
      }
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.deletedItem = Object.assign({}, {})
        this.deletedIndex = -1
        this.updatedBeneficiariesPerProvince = []
      })
    },
  },
}
</script>
