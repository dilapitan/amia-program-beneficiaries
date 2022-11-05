<template>
  <div>
    <h3>VI. FARMER'S ADAPTATION PRACTICES</h3>

    <br />

    <div>
      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (6.1) Made adjustments in Livelihood in Response to the Perceived
          Changes in Rainfall and Temperature over the last 10 years:
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-switch
            v-model="
              madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years
            "
            :label="
              madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years
                ? 'Yes'
                : 'No'
            "
          ></v-switch>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (6.2) Changes/Adjustments Made In Farming in Response to Long-term
          shifts in Temperature and Rainfall:
        </v-col>

        <v-col cols="12" sm="10">
          <v-combobox
            v-model="
              changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall
            "
            :items="
              changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfallList
            "
            :rules="[requiredRuleVComboBox]"
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
              changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall.includes(
                'Others'
              )
            "
            dense
            clearable
            v-model="
              changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfallSpecify
            "
            :rules="requiredRule"
            label="Please specify"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" class="mr-2 text-body-2">
          (6.3) Additional Adaptation Measures Being Considered in the Future:
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-textarea
            filled
            clearable
            v-model="additionalAdaptationMeasuresBeingConsideredInTheFuture"
            :rules="requiredRule"
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (6.4) Receive Any External Support for Adaptation Measures:
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-switch
            v-model="receivedAnyExternalSupportForAdaptationMeasures"
            :label="
              receivedAnyExternalSupportForAdaptationMeasures ? 'Yes' : 'No'
            "
          ></v-switch>
        </v-col>
      </v-row>

      <div
        :class="{
          'ml-3': $vuetify.breakpoint.xsOnly,
          'ml-10': $vuetify.breakpoint.smAndUp,
        }"
      >
        <div
          v-if="receivedAnyExternalSupportForAdaptationMeasures"
          :class="{
            'ml-2': $vuetify.breakpoint.xsOnly,
            'ml-10': $vuetify.breakpoint.smAndUp,
          }"
        >
          <v-row>
            <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
              <div class="mr-2 text-body-2">
                If yes, in what form does the support come?
              </div>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="formOfFinancialSupportReceivedBool"
                label="(6.5.1) Form of Financial Support received:"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-text-field
                v-if="formOfFinancialSupportReceivedBool"
                v-model="formOfFinancialSupportReceived"
                :rules="requiredRule"
                dense
                label="Please specify"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="formOfMaterialSupportReceivedBool"
                label="(6.5.2) Form of Material Support received:"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-text-field
                v-if="formOfMaterialSupportReceivedBool"
                v-model="formOfMaterialSupportReceived"
                :rules="requiredRule"
                dense
                clearable
                label="Please specify"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="formOfExtensionServicesSupportReceivedBool"
                label="(6.5.3) Form of Extension Services Support received:"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-text-field
                v-if="formOfExtensionServicesSupportReceivedBool"
                v-model="formOfExtensionServicesSupportReceived"
                :rules="requiredRule"
                dense
                clearable
                label="Please specify"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="
                  farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceivedBool
                "
                label="(6.5.4) Form of Farming Fishing Advisories Based On Weather and Climate Support received:"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-text-field
                v-if="
                  farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceivedBool
                "
                v-model="
                  farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived
                "
                :rules="requiredRule"
                dense
                clearable
                label="Please specify"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="formOfInfrastructureSupportReceivedBool"
                label="(6.5.5) Form of Infrastructure Support received:"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-text-field
                v-if="formOfInfrastructureSupportReceivedBool"
                v-model="formOfInfrastructureSupportReceived"
                :rules="requiredRule"
                dense
                clearable
                label="Please specify"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="d-flex">
            <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
              <v-checkbox
                v-model="formOfOtherSupportReceivedBool"
                label="(6.5.6) Form of Other Support received:"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-text-field
                v-if="formOfOtherSupportReceivedBool"
                v-model="formOfOtherSupportReceived"
                :rules="requiredRule"
                dense
                clearable
                label="Please specify"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
      </div>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" md="4" class="mr-2 text-body-2">
          (6.6) Most Beneficial Support Services:
        </v-col>
      </v-row>

      <v-row
        :class="{
          'ml-10': $vuetify.breakpoint.smAndUp,
          'ml-5': $vuetify.breakpoint.xsOnly,
        }"
      >
        <v-col cols="12">
          <div
            v-for="(item, index) in mostBeneficialSupportServicesList"
            :key="index"
          >
            <v-row class="d-flex align-baseline">
              <v-col cols="12" sm="1">{{ index + 1 }}</v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  class="mr-4"
                  dense
                  clearable
                  v-model="item.mostBeneficialSupportService"
                  label="Support services considered as most beneficial"
                ></v-text-field
              ></v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  class="mr-4"
                  dense
                  clearable
                  v-model="item.reasonWhyMostBeneficialSupportService"
                  label="Reasons why support service is beneficial"
                ></v-text-field
              ></v-col>

              <v-col v-if="index !== 0" cols="12" sm="1">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      @click="removeMostBeneficialSupportServices(index)"
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
              !checkLastElementIfNull(mostBeneficialSupportServicesList)
            "
            @click="addMostBeneficialSupportServices()"
            color="primary"
            small
            outlined
          >
            ADD
          </v-btn>
        </v-col>
      </v-row>

      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" class="mr-2 text-body-2">
          (6.7) Main constraints/difficulties in changing farming ways:
        </v-col>
      </v-row>

      <div
        :class="{
          'ml-5': $vuetify.breakpoint.xsOnly,
          'ml-10': $vuetify.breakpoint.smAndUp,
        }"
      >
        <v-row class="d-flex">
          <v-col cols="12" sm="4" md="4" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="lowEducationLevelConstraintBool"
              label="(6.7.1) Low Education Level **"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="lowEducationLevelConstraintBool"
              dense
              v-model="lowEducationLevelConstraint"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="limitedAccessToInformationConstraintBool"
              label="(6.7.2) Limited Access to Information **"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="limitedAccessToInformationConstraintBool"
              dense
              v-model="limitedAccessToInformationConstraint"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="lackOfExtensionServicesConstraintBool"
              label="(6.7.3) Lack of Extension Services **"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="lackOfExtensionServicesConstraintBool"
              dense
              v-model="lackOfExtensionServicesConstraint"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="8" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                craOptionsNotCompatibleWithCommunityNormsAndValuesConstraintBool
              "
              label="(6.7.4) CRA Options Not Compatible With Community Norms and Values **"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="
                craOptionsNotCompatibleWithCommunityNormsAndValuesConstraintBool
              "
              dense
              v-model="
                craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint
              "
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="inadequateCapitalConstraintBool"
              label="(6.7.5) Inadequate Capital **"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="inadequateCapitalConstraintBool"
              dense
              v-model="inadequateCapitalConstraint"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="noAccessToWaterForIrrigationConstraintBool"
              label="(6.7.6) No Access to Water for Irrigation **"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="noAccessToWaterForIrrigationConstraintBool"
              dense
              v-model="noAccessToWaterForIrrigationConstraint"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="noAccessToCreditConstraintConstraintBool"
              label="(6.7.7) No Access to Credit **"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="noAccessToCreditConstraintConstraintBool"
              dense
              v-model="noAccessToCreditConstraintConstraint"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="6" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="longerTimeRequiredToSeeResultsConstraintBool"
              label="(6.7.8) Longer Time Required to See Results **"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="longerTimeRequiredToSeeResultsConstraintBool"
              dense
              v-model="longerTimeRequiredToSeeResultsConstraint"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="oldAgeConstraintBool"
              label="(6.7.9) Old Age **"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="oldAgeConstraintBool"
              dense
              v-model="oldAgeConstraint"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="6" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="landTenureOrLandOwnershipIssuesConstraintBool"
              label="(6.7.10) Land Tenure/Land Ownership Issues **"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="landTenureOrLandOwnershipIssuesConstraintBool"
              dense
              v-model="landTenureOrLandOwnershipIssuesConstraint"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="landTopographyNotSuitableConstraintBool"
              label="(6.7.11) Land Topography Not Suitable **"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="landTopographyNotSuitableConstraintBool"
              dense
              v-model="landTopographyNotSuitableConstraint"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="6" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="laborIntensiveOrNonAvailabilityOfLaborConstraintBool"
              label="(6.7.12) Labor Intensive/Non-availability of Labor **"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="laborIntensiveOrNonAvailabilityOfLaborConstraintBool"
              dense
              v-model="laborIntensiveOrNonAvailabilityOfLaborConstraint"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="infertileSoilConstraintBool"
              label="(6.7.13) Infertile Soil **"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="infertileSoilConstraintBool"
              dense
              v-model="infertileSoilConstraint"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="otherConstraintBool"
              label="(6.7.14) Other **"
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row v-if="otherConstraintBool">
          <v-col cols="12">
            <div v-for="(item, index) in otherConstraintList" :key="index">
              <v-row class="d-flex align-baseline">
                <v-col cols="12" sm="1">{{ index + 1 }}</v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    class="mr-4"
                    dense
                    clearable
                    v-model="item.mainConstraintsOrDifficulties"
                    label="Main Constraint/Difficulties"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="2">
                  <v-select
                    :items="threePointScale"
                    dense
                    v-model="item.rate"
                    label="Rate"
                  ></v-select>
                </v-col>
                <v-col v-if="index !== 0" cols="12" sm="1">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        @click="removeOtherConstraint(index)"
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
              :disabled="!checkLastElementIfNull(otherConstraintList)"
              @click="addOtherConstraint()"
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
import { checkLastElementIfNull, stringifyArray } from '@/helpers/'

export default {
  data: () => ({
    // 6. Farmer's Adaptation Practices - Data variables
    madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years: false,
    changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall:
      [],
    additionalAdaptationMeasuresBeingConsideredInTheFuture: null,
    receivedAnyExternalSupportForAdaptationMeasures: null,
    formOfFinancialSupportReceived: null,
    formOfMaterialSupportReceived: null,
    formOfExtensionServicesSupportReceived: null,
    farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived: null,
    formOfInfrastructureSupportReceived: null,
    formOfOtherSupportReceived: null,
    mostBeneficialSupportServices: [],
    lowEducationLevelConstraint: null,
    limitedAccessToInformationConstraint: null,
    lackOfExtensionServicesConstraint: null,
    craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint: null,
    inadequateCapitalConstraint: null,
    noAccessToWaterForIrrigationConstraint: null,
    noAccessToCreditConstraintConstraint: null,
    longerTimeRequiredToSeeResultsConstraint: null,
    oldAgeConstraint: null,
    landTenureOrLandOwnershipIssuesConstraint: null,
    landTopographyNotSuitableConstraint: null,
    laborIntensiveOrNonAvailabilityOfLaborConstraint: null,
    infertileSoilConstraint: null,
    otherConstraint: null,

    // 6. Farmer's Adaptation Practices - UI variables
    changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfallSpecify:
      null,
    changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfallList:
      [
        'Planting of unconventional food sources',
        'Use of water harvesting technologies',
        'Use of drip irrigation',
        'Availing of crop insurance',
        'Use of alternate wetting and drying irrigation',
        'Implementation of soil conservation techniques',
        'Implementation of water conservation techniques',
        'Use of alternative feeding for animals',
        'Use of Biogas and composting/farm waste mgt',
        'Use of organic fertilizer',
        'Wind brakers, terracing, hedgerows',
        'Change from crop to livestock farming system',
        'Implementation of pasture management techniques',
        'Practicing diversified farming',
        'Practicing integrated farming',
        'Use of drought/flood/pest-resilient seeds',
        'Use of inter cropping/crop diversification',
        'Use of integrated crop management (IPM)',
        'Use of different varieties and crop types',
        'Planting of drought/flood-tolerant/resistant crops',
        'Following early warning system',
        'Practicing of backyard gardening',
        'Irrigation water impounding',
        'Processing or preservation of food',
        'Engagement in off-farm employment',
        'Seeking information, networking with others',
        'Implementation of nutrient management techniques (crops)',
        'Agroforestry – growing together of timber and agri crops',
        'Practicing new planting pattern ',
        'Processing animal manure into fertilizer',
        'Implementation of rotation cropping',
        'Use of microbial inoculants',
        'Use of biopesticides',
        'Mulching',
        'Protected gardening',
        'Hydroponics',
        'Finding new and other sources of water',
        'Reduce number of livestock',
        'Relocation/migration to areas safe from climate risks',
        'Attending trainings provided by ATI',
        'Use of climate- and weather-informed advisories as guide in farm/fishing practices',
        'Migration to urban area',
        'Finding off-farm job',
        'Leasing land',
        'Stockpiling of food',
        'Large financial investment in new land (expansion in other areas)',
        'Others',
      ],
    formOfFinancialSupportReceivedBool: false,
    formOfMaterialSupportReceivedBool: false,
    formOfExtensionServicesSupportReceivedBool: false,
    farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceivedBool: false,
    formOfInfrastructureSupportReceivedBool: false,
    formOfOtherSupportReceivedBool: false,
    mostBeneficialSupportServicesList: [
      {
        mostBeneficialSupportService: null,
        reasonWhyMostBeneficialSupportService: null,
      },
    ],
    lowEducationLevelConstraintBool: false,
    limitedAccessToInformationConstraintBool: false,
    lackOfExtensionServicesConstraintBool: false,
    craOptionsNotCompatibleWithCommunityNormsAndValuesConstraintBool: false,
    inadequateCapitalConstraintBool: false,
    noAccessToWaterForIrrigationConstraintBool: false,
    noAccessToCreditConstraintConstraintBool: false,
    longerTimeRequiredToSeeResultsConstraintBool: false,
    oldAgeConstraintBool: false,
    landTenureOrLandOwnershipIssuesConstraintBool: false,
    landTopographyNotSuitableConstraintBool: false,
    laborIntensiveOrNonAvailabilityOfLaborConstraintBool: false,
    infertileSoilConstraintBool: false,
    otherConstraintBool: false,
    otherConstraintList: [
      {
        mainConstraintsOrDifficulties: null,
        rate: null,
      },
    ],
  }),

  props: ['requiredRule', 'requiredRuleVComboBox'],

  computed: {
    threePointScale() {
      return this.$store.state.threePointScale
    },
  },

  methods: {
    addMostBeneficialSupportServices() {
      this.mostBeneficialSupportServicesList.push({
        mostBeneficialSupportService: null,
        reasonWhyMostBeneficialSupportService: null,
      })
    },

    addOtherConstraint() {
      this.otherConstraintList.push({
        mainConstraintsOrDifficulties: null,
        rate: null,
      })
    },

    checkLastElementIfNull: checkLastElementIfNull,

    removeMostBeneficialSupportServices(index) {
      this.mostBeneficialSupportServicesList.splice(index, 1)
    },

    removeOtherConstraint(index) {
      this.otherConstraintList.splice(index, 1)
    },

    stringifyMostBeneficialSupport(array) {
      let stringified = ''

      // Trim list to only capture filled up data
      const filtered = array.filter((service) => {
        if (
          service.mostBeneficialSupportService &&
          service.reasonWhyMostBeneficialSupportService
        )
          return service
      })

      filtered.map((service, index) => {
        const {
          mostBeneficialSupportService,
          reasonWhyMostBeneficialSupportService,
        } = service

        const stringifiedService = `${mostBeneficialSupportService} (${reasonWhyMostBeneficialSupportService})`

        stringified = stringified.concat(stringifiedService)

        if (index < filtered.length - 1) {
          stringified = stringified.concat(', ')
        }
      })

      return stringified
    },

    stringifyArrayOthers(array) {
      let stringified = ''

      // Trim list to only capture filled up data
      const filtered = array.filter((constraint) => {
        if (constraint.mainConstraintsOrDifficulties && constraint.rate) {
          return constraint
        }
      })

      filtered.map((constraint, index) => {
        const { mainConstraintsOrDifficulties, rate } = constraint
        const stringifiedConstraint = `${mainConstraintsOrDifficulties} (${rate})`

        stringified = stringified.concat(stringifiedConstraint)

        if (index < filtered.length - 1) {
          stringified = stringified.concat(', ')
        }
      })

      return stringified
    },

    passForm6Data() {
      const part6Data = {
        madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years:
          this
            .madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years
            ? 'Yes'
            : 'No',
        changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall:
          stringifyArray(
            this
              .changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall,
            this
              .changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfallSpecify
          ),
        additionalAdaptationMeasuresBeingConsideredInTheFuture:
          this.additionalAdaptationMeasuresBeingConsideredInTheFuture,
        receivedAnyExternalSupportForAdaptationMeasures: this
          .receivedAnyExternalSupportForAdaptationMeasures
          ? 'Yes'
          : 'No',
        formOfFinancialSupportReceived: this.formOfFinancialSupportReceived,
        formOfMaterialSupportReceived: this.formOfMaterialSupportReceived,
        formOfExtensionServicesSupportReceived:
          this.formOfExtensionServicesSupportReceived,
        farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived:
          this.farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived,
        formOfInfrastructureSupportReceived:
          this.formOfInfrastructureSupportReceived,
        formOfOtherSupportReceived: this.formOfOtherSupportReceived,
        mostBeneficialSupportServices: this.stringifyMostBeneficialSupport(
          this.mostBeneficialSupportServicesList
        ),
        lowEducationLevelConstraint: this.lowEducationLevelConstraint,
        limitedAccessToInformationConstraint:
          this.limitedAccessToInformationConstraint,
        lackOfExtensionServicesConstraint:
          this.lackOfExtensionServicesConstraint,
        craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint:
          this.craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint,
        inadequateCapitalConstraint: this.inadequateCapitalConstraint,
        noAccessToWaterForIrrigationConstraint:
          this.noAccessToWaterForIrrigationConstraint,
        noAccessToCreditConstraintConstraint:
          this.noAccessToCreditConstraintConstraint,
        longerTimeRequiredToSeeResultsConstraint:
          this.longerTimeRequiredToSeeResultsConstraint,
        oldAgeConstraint: this.oldAgeConstraint,
        landTenureOrLandOwnershipIssuesConstraint:
          this.landTenureOrLandOwnershipIssuesConstraint,
        landTopographyNotSuitableConstraint:
          this.landTopographyNotSuitableConstraint,
        laborIntensiveOrNonAvailabilityOfLaborConstraint:
          this.laborIntensiveOrNonAvailabilityOfLaborConstraint,
        infertileSoilConstraint: this.infertileSoilConstraint,
        otherConstraint: this.stringifyArrayOthers(this.otherConstraintList),
      }

      return part6Data
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

    receivedAnyExternalSupportForAdaptationMeasures() {
      if (!this.receivedAnyExternalSupportForAdaptationMeasures) {
        this.formOfFinancialSupportReceived = null
        this.formOfMaterialSupportReceived = null
        this.formOfExtensionServicesSupportReceived = null
        this.farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived =
          null
        this.formOfInfrastructureSupportReceived = null
        this.formOfOtherSupportReceived = null
        this.formOfFinancialSupportReceivedBool = false
        this.formOfMaterialSupportReceivedBool = false
        this.formOfExtensionServicesSupportReceivedBool = false
        this.farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceivedBool = false
        this.formOfInfrastructureSupportReceivedBool = false
        this.formOfOtherSupportReceivedBool = false
      }
    },

    formOfFinancialSupportReceivedBool() {
      this.formOfFinancialSupportReceived = null
    },

    formOfMaterialSupportReceivedBool() {
      this.formOfMaterialSupportReceived = null
    },

    formOfExtensionServicesSupportReceivedBool() {
      this.formOfExtensionServicesSupportReceived = null
    },

    farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceivedBool() {
      this.farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived =
        null
    },

    formOfInfrastructureSupportReceivedBool() {
      this.formOfInfrastructureSupportReceived = null
    },

    formOfOtherSupportReceivedBool() {
      this.formOfOtherSupportReceived = null
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
  },
}
</script>
