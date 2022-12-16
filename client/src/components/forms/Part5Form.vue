<template>
  <div>
    <h3>V. TECHNICAL KNOWLEDGE/PERCEPTION OF CLIMATE CHANGE AND ITS IMPACTS</h3>

    <br />

    <div>
      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.1) Attended Agricultural-related Trainings:
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-switch
            v-model="attendedAgriculturalRelatedTrainings"
            :label="attendedAgriculturalRelatedTrainings ? 'Yes' : 'No'"
          ></v-switch>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.2) Total Number of Trainings Attended:
        </v-col>

        <v-col cols="12" sm="2" md="4">
          <v-text-field
            class="small-number-input"
            dense
            clearable
            v-model="totalNumberOfTrainingsAttended"
            :rules="requiredRule"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.3) Source of Information Related to Improving Agricultural
          Production:
        </v-col>
        <v-col class="ma-0 pa-0" cols="12" sm="4">
          <v-combobox
            v-model="
              sourceOfInformationRelatedToImprovingAgriculturalProduction
            "
            :rules="[requiredRuleVComboBox]"
            :items="sourceOfInformationOptions"
            label="Select options"
            multiple
            dense
          ></v-combobox>
        </v-col>
      </v-row>

      <v-row :class="{ 'ml-5': $vuetify.breakpoint.smAndUp }">
        <v-col cols="12" sm="4">
          <v-text-field
            v-if="
              sourceOfInformationRelatedToImprovingAgriculturalProduction.includes(
                'Others'
              )
            "
            dense
            clearable
            v-model="
              sourceOfInformationRelatedToImprovingAgriculturalProductionSpecify
            "
            :rules="requiredRule"
            label="Please specify"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.4) Source of Information Related to Improving Agricultural Product
          Processing:
        </v-col>

        <v-col class="ma-0 pa-0" cols="12" sm="4">
          <v-combobox
            v-model="
              sourceOfInformationRelatedToImprovingAgriculturalProductProcessing
            "
            :rules="[requiredRuleVComboBox]"
            :items="sourceOfInformationOptions"
            label="Select options"
            multiple
            dense
          ></v-combobox>
        </v-col>
      </v-row>

      <v-row :class="{ 'ml-5': $vuetify.breakpoint.smAndUp }">
        <v-col cols="12" sm="4">
          <v-text-field
            v-if="
              sourceOfInformationRelatedToImprovingAgriculturalProductProcessing.includes(
                'Others'
              )
            "
            dense
            clearable
            v-model="
              sourceOfInformationRelatedToImprovingAgriculturalProductProcessingSpecify
            "
            :rules="requiredRule"
            label="Please specify"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.5) Source of Climate and Weather Information:
        </v-col>

        <v-col class="ma-0 pa-0" cols="12" sm="4">
          <v-combobox
            v-model="sourceOfClimateAndWeatherInformation"
            :rules="[requiredRuleVComboBox]"
            :items="sourceOfInformationOptions"
            label="Select options"
            multiple
            dense
          ></v-combobox>
        </v-col>
      </v-row>

      <v-row :class="{ 'ml-5': $vuetify.breakpoint.smAndUp }">
        <v-col cols="12" sm="4">
          <v-text-field
            v-if="sourceOfClimateAndWeatherInformation.includes('Others')"
            dense
            clearable
            v-model="sourceOfClimateAndWeatherInformationSpecify"
            :rules="requiredRule"
            label="Please specify"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.6) Observed Any Long-term Changes in Climate
          (temperature/rainfall):
        </v-col>

        <v-col cols="12" sm="2">
          <v-select
            :items="generalThreeChoice"
            label="Select option"
            v-model="observedAnyLongTermChangesInClimate"
            :rules="requiredRule"
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.7.1) Changes in Climate for Temperature *:
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-switch
            v-model="changesInClimateForTemperature"
            :label="changesInClimateForTemperature ? 'Increase' : 'Decrease'"
          ></v-switch>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.7.2) Changes in Climate for Amount of Rainfaill *:
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-switch
            v-model="changesInClimateForAmountOfRainfaill"
            :label="
              changesInClimateForAmountOfRainfaill ? 'Increase' : 'Decrease'
            "
          ></v-switch>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.7.3) Changes in Climate for Rainfall Timing *:
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-switch
            v-model="changesInClimateForRainfallTiming"
            :label="changesInClimateForRainfallTiming ? 'Increase' : 'Decrease'"
          ></v-switch>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.7.4) Changes in Climate for Rainful Intensity *:
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-switch
            v-model="changesInClimateForRainfulIntensity"
            :label="
              changesInClimateForRainfulIntensity ? 'Increase' : 'Decrease'
            "
          ></v-switch>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.7.5) Changes in Climate for Rainfall Duration *:
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-switch
            v-model="changesInClimateForRainfallDuration"
            :label="
              changesInClimateForRainfallDuration ? 'Increase' : 'Decrease'
            "
          ></v-switch>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.7.6) Changes in Climate for Number of Weather Events *:
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-switch
            v-model="changesInClimateForNumberOfWeatherEvents"
            :label="
              changesInClimateForNumberOfWeatherEvents ? 'Increase' : 'Decrease'
            "
          ></v-switch>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.7.7) Changes in Climate for Number of Hot Days *:
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-switch
            v-model="changesInClimateForNumberOfHotDays"
            :label="
              changesInClimateForNumberOfHotDays ? 'Increase' : 'Decrease'
            "
          ></v-switch>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.7.8) Changes in Climate for Number of Rainy Days *:
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-switch
            v-model="changesInClimateForNumberOfRainyDays"
            :label="
              changesInClimateForNumberOfRainyDays ? 'Increase' : 'Decrease'
            "
          ></v-switch>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.7.9) Changes in Climate for Occurence of Pests And Diseases in
          Crops *:
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-switch
            v-model="changesInClimateForOccurenceOfPestsAndDiseasesInCrops"
            :label="
              changesInClimateForOccurenceOfPestsAndDiseasesInCrops
                ? 'Increase'
                : 'Decrease'
            "
          ></v-switch>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.7.10) Changes in Climate for Occurence of Pests And Diseases in
          Livestock *:
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-switch
            v-model="changesInClimateForOccurenceOfPestsAndDiseasesInLivestock"
            :label="
              changesInClimateForOccurenceOfPestsAndDiseasesInLivestock
                ? 'Increase'
                : 'Decrease'
            "
          ></v-switch>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.7.11) Observed any change in the Onset of Dry Season:
        </v-col>

        <v-col cols="12" sm="2">
          <v-select
            :items="generalThreeChoice"
            label="Select option"
            v-model="observedAnyChangeInTheOnsetOfDrySeason"
            :rules="requiredRule"
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.7.12) Observed any change in the Onset of Wet Season:
        </v-col>

        <v-col cols="12" sm="2">
          <v-select
            :items="generalThreeChoice"
            label="Select option"
            v-model="observedAnyChangeInTheOnsetOfWetSeason"
            :rules="requiredRule"
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.8.1) Description of Change in Temperature:
        </v-col>

        <v-col cols="12" sm="3">
          <v-select
            :items="descriptionOfChangesInClimateOptions"
            label="Select option"
            v-model="descriptionOfChangeInTemperature"
            :rules="requiredRule"
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.8.2) Description of Change in Rainfall Duration:
        </v-col>

        <v-col cols="12" sm="3">
          <v-select
            :items="descriptionOfChangesInClimateOptions"
            label="Select option"
            v-model="descriptionOfChangeInRainfallDuration"
            :rules="requiredRule"
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.8.3) Description of Change in Rainfall Timing:
        </v-col>

        <v-col cols="12" sm="3">
          <v-select
            :items="descriptionOfChangesInClimateOptions"
            label="Select option"
            v-model="descriptionOfChangeInRainfallTiming"
            :rules="requiredRule"
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.8.4) Description of Change in Rainfall Intensity:
        </v-col>

        <v-col cols="12" sm="3">
          <v-select
            :items="descriptionOfChangesInClimateOptions"
            label="Select option"
            v-model="descriptionOfChangeInRainfallIntensity"
            :rules="requiredRule"
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (5.8.5) Description of Change in Number of Weather Events:
        </v-col>

        <v-col cols="12" sm="3">
          <v-select
            :items="descriptionOfChangesInClimateOptions"
            label="Select option"
            v-model="descriptionOfChangeInNumberOfWeatherEvents"
            :rules="requiredRule"
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" class="mr-2 text-body-2">
          (5.9) Perceived Effects/Impacts of Long-term Changes in Climate:
        </v-col>
      </v-row>

      <div
        :class="{
          'ml-5': $vuetify.breakpoint.xsOnly,
          'ml-10': $vuetify.breakpoint.smAndUp,
        }"
      >
        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="perceivedEffectsOrImpactsOfChangeInTimingOfRainsBool"
              label="(5.9.1) Change in timing of rains"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="perceivedEffectsOrImpactsOfChangeInTimingOfRainsBool"
              dense
              v-model="perceivedEffectsOrImpactsOfChangeInTimingOfRains"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeasonBool
              "
              label="(5.9.2) Abrupt Change in Seasons/Changes in Growing Season"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="
                perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeasonBool
              "
              dense
              v-model="
                perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason
              "
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="perceivedEffectsOrImpactsOfReducedCroppingSeasonBool"
              label="(5.9.3) Reduced Cropping (Growing) Season"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="perceivedEffectsOrImpactsOfReducedCroppingSeasonBool"
              dense
              v-model="perceivedEffectsOrImpactsOfReducedCroppingSeason"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailureBool
              "
              label="(5.9.4) Increased Frequency Of Drought and Crop Failure"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="
                perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailureBool
              "
              dense
              v-model="
                perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure
              "
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructionsBool
              "
              label="(5.9.5) Increased Frequency Of Floods and Farm Destructions"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="
                perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructionsBool
              "
              dense
              v-model="
                perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions
              "
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="perceivedEffectsOrImpactsOfPostharvestLossesBool"
              label="(5.9.6) Postharvest Losses"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="perceivedEffectsOrImpactsOfPostharvestLossesBool"
              dense
              v-model="perceivedEffectsOrImpactsOfPostharvestLosses"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="perceivedEffectsOrImpactsOfPestInvasionBool"
              label="(5.9.7) Pest Invasion"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="perceivedEffectsOrImpactsOfPestInvasionBool"
              dense
              v-model="perceivedEffectsOrImpactsOfPestInvasion"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseasesBool
              "
              label="(5.9.8) Prevalence of Pests and Diseases"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseasesBool"
              dense
              v-model="perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="perceivedEffectsOrImpactsOfPovertyAndFoodShortagesBool"
              label="(5.9.9) Poverty and Food Shortages"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="perceivedEffectsOrImpactsOfPovertyAndFoodShortagesBool"
              dense
              v-model="perceivedEffectsOrImpactsOfPovertyAndFoodShortages"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="perceivedEffectsOrImpactsOfLackOfPotableWaterBool"
              label="(5.9.10) Lack of Potable Water (Drinking)"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="perceivedEffectsOrImpactsOfLackOfPotableWaterBool"
              dense
              v-model="perceivedEffectsOrImpactsOfLackOfPotableWater"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWaterBool
              "
              label="(5.9.11) ReducedVolumeOfIrrigationWater"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="
                perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWaterBool
              "
              dense
              v-model="
                perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWater
              "
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="perceivedEffectsOrImpactsOfErosionsBool"
              label="(5.9.12) Erosions"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="perceivedEffectsOrImpactsOfErosionsBool"
              dense
              v-model="perceivedEffectsOrImpactsOfErosions"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLifeBool
              "
              label="(5.9.13) Extinction of Fishes and Aquatic Life"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="
                perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLifeBool
              "
              dense
              v-model="
                perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife
              "
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarietiesBool
              "
              label="(5.9.14) Extinction Of Some Crops And Crop Varieties"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="
                perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarietiesBool
              "
              dense
              v-model="
                perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties
              "
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="perceivedEffectsOrImpactsOfDeathOfLivestockBool"
              label="(5.9.15) Death of Livestock"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="perceivedEffectsOrImpactsOfDeathOfLivestockBool"
              dense
              v-model="perceivedEffectsOrImpactsOfDeathOfLivestock"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                perceivedEffectsOrImpactsOfDecreasedLivestockProductionBool
              "
              label="(5.9.16) Decreased Livestock Production"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="perceivedEffectsOrImpactsOfDecreasedLivestockProductionBool"
              dense
              v-model="perceivedEffectsOrImpactsOfDecreasedLivestockProduction"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishingBool
              "
              label="(5.9.17) Rising Cost of Farming and Fishing"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="
                perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishingBool
              "
              dense
              v-model="perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomesBool
              "
              label="(5.9.18) Destruction of Farm Roads and Homes"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="
                perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomesBool
              "
              dense
              v-model="
                perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes
              "
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="perceivedEffectsOrImpactsOfRuralUrbanMigrationBool"
              label="(5.9.19) Rural-Urban Migration"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="perceivedEffectsOrImpactsOfRuralUrbanMigrationBool"
              dense
              v-model="perceivedEffectsOrImpactsOfRuralUrbanMigration"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="perceivedEffectsOrImpactsOfSiltationOfWaterBodiesBool"
              label="(5.9.20) Siltation of Water Bodies"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="perceivedEffectsOrImpactsOfSiltationOfWaterBodiesBool"
              dense
              v-model="perceivedEffectsOrImpactsOfSiltationOfWaterBodies"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                perceivedEffectsOrImpactsOfDisappearanceOfVegetationCoverBool
              "
              label="(5.9.21) Disappearance of Vegetation Cover"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="
                perceivedEffectsOrImpactsOfDisappearanceOfVegetationCoverBool
              "
              dense
              v-model="
                perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover
              "
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="perceivedEffectsOrImpactsOfOthersBool"
              label="(5.9.22) Others"
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row v-if="perceivedEffectsOrImpactsOfOthersBool">
          <v-col cols="12">
            <div
              v-for="(item, index) in perceivedEffectsOrImpactsOfOthersList"
              :key="index"
            >
              <v-row class="d-flex align-baseline">
                <v-col cols="12" sm="1">{{ index + 1 }}</v-col>
                <v-col cols="12" sm="3">
                  <v-text-field
                    class="mr-4"
                    dense
                    clearable
                    v-model="item.effectsOrImpact"
                    :rules="requiredRule"
                    label="Effect or Impact"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="2">
                  <v-select
                    :items="fivePointScale"
                    dense
                    v-model="item.rate"
                    :rules="requiredRule"
                    label="Rate"
                  ></v-select>
                </v-col>
                <v-col v-if="index !== 0" cols="12" sm="1">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        @click="removePerceivedEffectsOrImpactsOfOthers(index)"
                        color="primary"
                        v-bind="attrs"
                        v-on="on"
                      >
                        mdi-cancel
                      </v-icon>
                    </template>
                    <span>Remove</span>
                  </v-tooltip>
                </v-col>
              </v-row>
            </div>
            <br />
            <v-btn
              :disabled="
                !checkLastElementIfNull(perceivedEffectsOrImpactsOfOthersList)
              "
              @click="addPerceivedEffectsOrImpactsOfOthers()"
              color="primary"
              small
              outlined
            >
              ADD
            </v-btn>
          </v-col>
        </v-row>
      </div>

      <v-row cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" class="mr-2 text-body-2">
          (5.10) Observed Main Opportunities (Positive Effects/Impacts) of These
          Long-term Changes in Climate *:
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-textarea
            filled
            clearable
            v-model="observedMainOpportunitiesOfLongTermChangesInClimate"
            :rules="requiredRule"
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" class="mr-2 text-body-2">
          (5.11) Drivers of Change and Vulnerability:
        </v-col>
      </v-row>

      <div
        :class="{
          'ml-5': $vuetify.breakpoint.xsOnly,
          'ml-10': $vuetify.breakpoint.smAndUp,
        }"
      >
        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="driversOfChangeAndVulnerabilityOfLandDegredationBool"
              label="(5.11.1) Land Degradation (Soil Nutrient Depletion)"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="driversOfChangeAndVulnerabilityOfLandDegredationBool"
              dense
              v-model="driversOfChangeAndVulnerabilityOfLandDegredation"
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPricesBool
              "
              label="(5.11.2) Unexpexcted Changes in Input Prices"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="
                driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPricesBool
              "
              dense
              v-model="
                driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices
              "
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPricesBool
              "
              label="(5.11.3) Unexpected Changes in Product Prices"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="
                driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPricesBool
              "
              dense
              v-model="
                driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices
              "
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimalsBool
              "
              label="(5.11.4) Risks for Diseases and Pests Affecting Crops and Animals"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="fivePointScale"
              v-if="
                driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimalsBool
              "
              dense
              v-model="
                driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals
              "
              :rules="requiredRule"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="driversOfChangeAndVulnerabilityOfOthersBool"
              label="(5.11.5) Others"
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row v-if="driversOfChangeAndVulnerabilityOfOthersBool">
          <v-col cols="12">
            <div
              v-for="(
                item, index
              ) in driversOfChangeAndVulnerabilityOfOthersList"
              :key="index"
            >
              <v-row class="d-flex align-baseline">
                <v-col cols="12" sm="1">{{ index + 1 }}</v-col>
                <v-col cols="12" sm="3">
                  <v-text-field
                    class="mr-4"
                    dense
                    clearable
                    v-model="item.effectsOrImpact"
                    :rules="requiredRule"
                    label="Effect or Impact"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="2">
                  <v-select
                    :items="fivePointScale"
                    dense
                    v-model="item.rate"
                    :rules="requiredRule"
                    label="Rate"
                  ></v-select>
                </v-col>
                <v-col v-if="index !== 0" cols="12" sm="1">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        @click="
                          removeDriversOfChangeAndVulnerabilityOfOthers(index)
                        "
                        color="primary"
                        v-bind="attrs"
                        v-on="on"
                      >
                        mdi-cancel
                      </v-icon>
                    </template>
                    <span>Remove</span>
                  </v-tooltip>
                </v-col>
              </v-row>
            </div>
            <br />
            <v-btn
              :disabled="
                !checkLastElementIfNull(
                  driversOfChangeAndVulnerabilityOfOthersList
                )
              "
              @click="addDriversOfChangeAndVulnerabilityOfOthers()"
              color="primary"
              small
              outlined
            >
              ADD
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { checkLastElementIfNull, stringifyArray } from '@/helpers'

export default {
  data: () => ({
    // 5. Technical Knowledge/Perception of Climate Change and Its Impacts - data variables
    attendedAgriculturalRelatedTrainings: false,
    totalNumberOfTrainingsAttended: null,
    sourceOfInformationRelatedToImprovingAgriculturalProduction: [],
    sourceOfInformationRelatedToImprovingAgriculturalProductionSpecify: null,
    sourceOfInformationRelatedToImprovingAgriculturalProductProcessing: [],
    sourceOfInformationRelatedToImprovingAgriculturalProductProcessingSpecify:
      null,
    sourceOfClimateAndWeatherInformation: [],
    sourceOfClimateAndWeatherInformationSpecify: null,
    observedAnyLongTermChangesInClimate: null,
    changesInClimateForTemperature: false,
    changesInClimateForAmountOfRainfaill: false,
    changesInClimateForRainfallTiming: false,
    changesInClimateForRainfulIntensity: false,
    changesInClimateForRainfallDuration: false,
    changesInClimateForNumberOfWeatherEvents: false,
    changesInClimateForNumberOfHotDays: false,
    changesInClimateForNumberOfRainyDays: false,
    changesInClimateForOccurenceOfPestsAndDiseasesInCrops: false,
    changesInClimateForOccurenceOfPestsAndDiseasesInLivestock: false,
    observedAnyChangeInTheOnsetOfDrySeason: null,
    observedAnyChangeInTheOnsetOfWetSeason: null,
    descriptionOfChangeInTemperature: null,
    descriptionOfChangeInRainfallDuration: null,
    descriptionOfChangeInRainfallTiming: null,
    descriptionOfChangeInRainfallIntensity: null,
    descriptionOfChangeInNumberOfWeatherEvents: null,
    perceivedEffectsOrImpactsOfChangeInTimingOfRains: null,
    perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason:
      null,
    perceivedEffectsOrImpactsOfReducedCroppingSeason: null,
    perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure: null,
    perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions:
      null,
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
    perceivedEffectsOrImpactsOfDecreasedLivestockProduction: null,
    perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing: null,
    perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes: null,
    perceivedEffectsOrImpactsOfRuralUrbanMigration: null,
    perceivedEffectsOrImpactsOfSiltationOfWaterBodies: null,
    perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover: null,
    perceivedEffectsOrImpactsOfOthers: '',
    observedMainOpportunitiesOfLongTermChangesInClimate: null,
    driversOfChangeAndVulnerabilityOfLandDegredation: null,
    driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices: null,
    driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices: null,
    driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals:
      null,
    driversOfChangeAndVulnerabilityOfOthers: '',

    // 5. Technical Knowledge/Perception of Climate Change and Its Impacts - UI variables
    descriptionOfChangesInClimateOptions: [
      'Extreme',
      'Many',
      'Limited',
      'Very Limited/Few',
    ],
    perceivedEffectsOrImpactsOfChangeInTimingOfRainsBool: false,
    perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeasonBool: false,
    perceivedEffectsOrImpactsOfReducedCroppingSeasonBool: false,
    perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailureBool: false,
    perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructionsBool: false,
    perceivedEffectsOrImpactsOfPostharvestLossesBool: false,
    perceivedEffectsOrImpactsOfPestInvasionBool: false,
    perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseasesBool: false,
    perceivedEffectsOrImpactsOfPovertyAndFoodShortagesBool: false,
    perceivedEffectsOrImpactsOfLackOfPotableWaterBool: false,
    perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWaterBool: false,
    perceivedEffectsOrImpactsOfErosionsBool: false,
    perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLifeBool: false,
    perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarietiesBool: false,
    perceivedEffectsOrImpactsOfDeathOfLivestockBool: false,
    perceivedEffectsOrImpactsOfDecreasedLivestockProductionBool: false,
    perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishingBool: false,
    perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomesBool: false,
    perceivedEffectsOrImpactsOfRuralUrbanMigrationBool: false,
    perceivedEffectsOrImpactsOfSiltationOfWaterBodiesBool: false,
    perceivedEffectsOrImpactsOfDisappearanceOfVegetationCoverBool: false,
    perceivedEffectsOrImpactsOfOthersBool: false,
    perceivedEffectsOrImpactsOfOthersList: [
      {
        effectsOrImpact: null,
        rate: null,
      },
    ],
    driversOfChangeAndVulnerabilityOfLandDegredationBool: false,
    driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPricesBool: false,
    driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPricesBool: false,
    driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimalsBool: false,
    driversOfChangeAndVulnerabilityOfOthersBool: false,
    driversOfChangeAndVulnerabilityOfOthersList: [
      {
        effectsOrImpact: null,
        rate: null,
      },
    ],
  }),

  props: ['mode', 'part5FormData', 'requiredRule', 'requiredRuleVComboBox'],

  created() {
    if (this.part5FormData !== null) {
      this.setPart5FormData(this.part5FormData)
    }
  },

  computed: {
    fivePointScale() {
      return this.$store.state.fivePointScale
    },

    generalThreeChoice() {
      return this.$store.state.generalThreeChoice
    },

    sourceOfInformationOptions() {
      return this.$store.state.sourceOfInformationOptions
    },
  },

  methods: {
    addDriversOfChangeAndVulnerabilityOfOthers() {
      this.driversOfChangeAndVulnerabilityOfOthersList.push({
        effectsOrImpact: null,
        rate: null,
      })
    },

    addPerceivedEffectsOrImpactsOfOthers() {
      this.perceivedEffectsOrImpactsOfOthersList.push({
        effectsOrImpact: null,
        rate: null,
      })
    },

    checkLastElementIfNull: checkLastElementIfNull,

    // TODO refactor these remove methods into one
    removeDriversOfChangeAndVulnerabilityOfOthers(index) {
      this.driversOfChangeAndVulnerabilityOfOthersList.splice(index, 1)
    },

    removePerceivedEffectsOrImpactsOfOthers(index) {
      this.perceivedEffectsOrImpactsOfOthersList.splice(index, 1)
    },

    stringifyArrayOthers(array) {
      let stringified = ''

      // Trim list to only capture filled up data
      const filtered = array.filter((driver) => {
        if (driver.effectsOrImpact && driver.rate) {
          return driver
        }
      })

      filtered.map((driver, index) => {
        const { effectsOrImpact, rate } = driver
        const stringifiedDriver = `${effectsOrImpact} (${rate})`

        stringified = stringified.concat(stringifiedDriver)

        if (index < filtered.length - 1) {
          stringified = stringified.concat(', ')
        }
      })

      return stringified
    },

    passForm5Data() {
      const part5Data = {
        attendedAgriculturalRelatedTrainings:
          this.attendedAgriculturalRelatedTrainings,
        totalNumberOfTrainingsAttended: this.totalNumberOfTrainingsAttended,
        sourceOfInformationRelatedToImprovingAgriculturalProduction:
          stringifyArray(
            this.sourceOfInformationRelatedToImprovingAgriculturalProduction,
            this
              .sourceOfInformationRelatedToImprovingAgriculturalProductionSpecify
          ),
        sourceOfInformationRelatedToImprovingAgriculturalProductProcessing:
          stringifyArray(
            this
              .sourceOfInformationRelatedToImprovingAgriculturalProductProcessing,
            this
              .sourceOfInformationRelatedToImprovingAgriculturalProductProcessingSpecify
          ),
        sourceOfClimateAndWeatherInformation: stringifyArray(
          this.sourceOfClimateAndWeatherInformation,
          this.sourceOfClimateAndWeatherInformationSpecify
        ),
        observedAnyLongTermChangesInClimate:
          this.observedAnyLongTermChangesInClimate,
        changesInClimateForTemperature: this.changesInClimateForTemperature
          ? 'Increase'
          : 'Decrease',
        changesInClimateForAmountOfRainfaill: this
          .changesInClimateForAmountOfRainfaill
          ? 'Increase'
          : 'Decrease',
        changesInClimateForRainfallTiming: this
          .changesInClimateForRainfallTiming
          ? 'Increase'
          : 'Decrease',
        changesInClimateForRainfulIntensity: this
          .changesInClimateForRainfulIntensity
          ? 'Increase'
          : 'Decrease',
        changesInClimateForRainfallDuration: this
          .changesInClimateForRainfallDuration
          ? 'Increase'
          : 'Decrease',
        changesInClimateForNumberOfWeatherEvents: this
          .changesInClimateForNumberOfWeatherEvents
          ? 'Increase'
          : 'Decrease',
        changesInClimateForNumberOfHotDays: this
          .changesInClimateForNumberOfHotDays
          ? 'Increase'
          : 'Decrease',
        changesInClimateForNumberOfRainyDays: this
          .changesInClimateForNumberOfRainyDays
          ? 'Increase'
          : 'Decrease',
        changesInClimateForOccurenceOfPestsAndDiseasesInCrops: this
          .changesInClimateForOccurenceOfPestsAndDiseasesInCrops
          ? 'Increase'
          : 'Decrease',
        changesInClimateForOccurenceOfPestsAndDiseasesInLivestock: this
          .changesInClimateForOccurenceOfPestsAndDiseasesInLivestock
          ? 'Increase'
          : 'Decrease',
        observedAnyChangeInTheOnsetOfDrySeason:
          this.observedAnyChangeInTheOnsetOfDrySeason,
        observedAnyChangeInTheOnsetOfWetSeason:
          this.observedAnyChangeInTheOnsetOfWetSeason,
        descriptionOfChangeInTemperature: this.descriptionOfChangeInTemperature,
        descriptionOfChangeInRainfallDuration:
          this.descriptionOfChangeInRainfallDuration,
        descriptionOfChangeInRainfallTiming:
          this.descriptionOfChangeInRainfallTiming,
        descriptionOfChangeInRainfallIntensity:
          this.descriptionOfChangeInRainfallIntensity,
        descriptionOfChangeInNumberOfWeatherEvents:
          this.descriptionOfChangeInNumberOfWeatherEvents,
        perceivedEffectsOrImpactsOfChangeInTimingOfRains:
          this.perceivedEffectsOrImpactsOfChangeInTimingOfRains,
        perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason:
          this
            .perceivedEffectsOrImpactsOfAbruptChangeInSeasonsOrChangesInGrowingSeason,
        perceivedEffectsOrImpactsOfReducedCroppingSeason:
          this.perceivedEffectsOrImpactsOfReducedCroppingSeason,
        perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure:
          this
            .perceivedEffectsOrImpactsOfIncreasedFrequencyOfDroughtAndCropFailure,
        perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions:
          this
            .perceivedEffectsOrImpactsOfIncreasedFrequencyOfFloodsAndFarmDestructions,
        perceivedEffectsOrImpactsOfPostharvestLosses:
          this.perceivedEffectsOrImpactsOfPostharvestLosses,
        perceivedEffectsOrImpactsOfPestInvasion:
          this.perceivedEffectsOrImpactsOfPestInvasion,
        perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases:
          this.perceivedEffectsOrImpactsOfPrevalenceOfPestsAndDiseases,
        perceivedEffectsOrImpactsOfPovertyAndFoodShortages:
          this.perceivedEffectsOrImpactsOfPovertyAndFoodShortages,
        perceivedEffectsOrImpactsOfLackOfPotableWater:
          this.perceivedEffectsOrImpactsOfLackOfPotableWater,
        perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWater:
          this.perceivedEffectsOrImpactsOfReducedVolumeOfIrricationWater,
        perceivedEffectsOrImpactsOfErosions:
          this.perceivedEffectsOrImpactsOfErosions,
        perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife:
          this.perceivedEffectsOrImpactsOfExtinctionOfFishesAndAquaticLife,
        perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties:
          this.perceivedEffectsOrImpactsOfExtinctionOfSomeCropsAndCropVarieties,
        perceivedEffectsOrImpactsOfDeathOfLivestock:
          this.perceivedEffectsOrImpactsOfDeathOfLivestock,
        perceivedEffectsOrImpactsOfDecreasedLivestockProduction:
          this.perceivedEffectsOrImpactsOfDecreasedLivestockProduction,
        perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing:
          this.perceivedEffectsOrImpactsOfRisingCostOfFarmingAndFishing,
        perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes:
          this.perceivedEffectsOrImpactsOfDestructionOfFarmRoadsAndHomes,
        perceivedEffectsOrImpactsOfRuralUrbanMigration:
          this.perceivedEffectsOrImpactsOfRuralUrbanMigration,
        perceivedEffectsOrImpactsOfSiltationOfWaterBodies:
          this.perceivedEffectsOrImpactsOfSiltationOfWaterBodies,
        perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover:
          this.perceivedEffectsOrImpactsOfDisappearanceOfVegetationCover,
        perceivedEffectsOrImpactsOfOthers: this.stringifyArrayOthers(
          this.perceivedEffectsOrImpactsOfOthersList
        ),
        observedMainOpportunitiesOfLongTermChangesInClimate:
          this.observedMainOpportunitiesOfLongTermChangesInClimate,
        driversOfChangeAndVulnerabilityOfLandDegredation:
          this.driversOfChangeAndVulnerabilityOfLandDegredation,
        driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices:
          this.driversOfChangeAndVulnerabilityOfUnexpectedChangesInInputPrices,
        driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices:
          this
            .driversOfChangeAndVulnerabilityOfUnexpectedChangesInProductPrices,
        driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals:
          this
            .driversOfChangeAndVulnerabilityOfRisksForDiseasesAndPestsAffectingCropAndAnimals,
        driversOfChangeAndVulnerabilityOfOthers: this.stringifyArrayOthers(
          this.driversOfChangeAndVulnerabilityOfOthersList
        ),
      }

      return part5Data
    },

    setPart5FormData(setPart5FormData) {
      const {
        attendedAgriculturalRelatedTrainings,
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
      } = setPart5FormData

      console.log(
        'attendedAgriculturalRelatedTrainings:',
        attendedAgriculturalRelatedTrainings
      )
    },
  },
  watch: {
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

    driversOfChangeAndVulnerabilityOfOthersBool() {
      this.driversOfChangeAndVulnerabilityOfOthers = null
      this.driversOfChangeAndVulnerabilityOfOthersList = [
        {
          effectsOrImpact: null,
          rate: null,
        },
      ]
    },

    driversOfChangeAndVulnerabilityOfOthersList() {
      this.driversOfChangeAndVulnerabilityOfOthers =
        this.driversOfChangeAndVulnerabilityOfOthersList
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

    perceivedEffectsOrImpactsOfOthersList() {
      this.perceivedEffectsOrImpactsOfOthers =
        this.perceivedEffectsOrImpactsOfOthersList
    },

    sourceOfInformationRelatedToImprovingAgriculturalProduction() {
      if (
        !this.sourceOfInformationRelatedToImprovingAgriculturalProduction.includes(
          'Others'
        )
      )
        this.sourceOfInformationRelatedToImprovingAgriculturalProductionSpecify =
          null
    },

    sourceOfInformationRelatedToImprovingAgriculturalProductProcessing() {
      if (
        !this.sourceOfInformationRelatedToImprovingAgriculturalProductProcessing.includes(
          'Others'
        )
      )
        this.sourceOfInformationRelatedToImprovingAgriculturalProductProcessingSpecify =
          null
    },

    sourceOfClimateAndWeatherInformation() {
      if (!this.sourceOfClimateAndWeatherInformation.includes('Others')) {
        this.sourceOfClimateAndWeatherInformationSpecify = null
      }
    },
  },
}
</script>
