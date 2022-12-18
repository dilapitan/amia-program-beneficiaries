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
            :disabled="mode === 'VIEW'"
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
            :disabled="mode === 'VIEW'"
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
            :disabled="mode === 'VIEW'"
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
            :disabled="mode === 'VIEW'"
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
            :disabled="mode === 'VIEW'"
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
                :disabled="mode === 'VIEW'"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-text-field
                v-if="formOfFinancialSupportReceivedBool"
                v-model="formOfFinancialSupportReceived"
                :rules="requiredRule"
                :disabled="mode === 'VIEW'"
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
                :disabled="mode === 'VIEW'"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-text-field
                v-if="formOfMaterialSupportReceivedBool"
                v-model="formOfMaterialSupportReceived"
                :rules="requiredRule"
                :disabled="mode === 'VIEW'"
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
                :disabled="mode === 'VIEW'"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-text-field
                v-if="formOfExtensionServicesSupportReceivedBool"
                v-model="formOfExtensionServicesSupportReceived"
                :rules="requiredRule"
                :disabled="mode === 'VIEW'"
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
                :disabled="mode === 'VIEW'"
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
                :disabled="mode === 'VIEW'"
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
                :disabled="mode === 'VIEW'"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-text-field
                v-if="formOfInfrastructureSupportReceivedBool"
                v-model="formOfInfrastructureSupportReceived"
                :rules="requiredRule"
                :disabled="mode === 'VIEW'"
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
                :disabled="mode === 'VIEW'"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
              <v-text-field
                v-if="formOfOtherSupportReceivedBool"
                v-model="formOfOtherSupportReceived"
                :rules="requiredRule"
                :disabled="mode === 'VIEW'"
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
                  :rules="requiredRule"
                  :disabled="mode === 'VIEW'"
                  label="Support services considered as most beneficial"
                ></v-text-field
              ></v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  class="mr-4"
                  dense
                  clearable
                  v-model="item.reasonWhyMostBeneficialSupportService"
                  :rules="requiredRule"
                  :disabled="mode === 'VIEW'"
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
                      :disabled="mode === 'VIEW'"
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
              !checkLastElementIfNull(mostBeneficialSupportServicesList) ||
              mode === 'VIEW'
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
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="lowEducationLevelConstraintBool"
              dense
              v-model="lowEducationLevelConstraint"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="limitedAccessToInformationConstraintBool"
              label="(6.7.2) Limited Access to Information **"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="limitedAccessToInformationConstraintBool"
              dense
              v-model="limitedAccessToInformationConstraint"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="lackOfExtensionServicesConstraintBool"
              label="(6.7.3) Lack of Extension Services **"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="lackOfExtensionServicesConstraintBool"
              dense
              v-model="lackOfExtensionServicesConstraint"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
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
              :disabled="mode === 'VIEW'"
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
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="inadequateCapitalConstraintBool"
              label="(6.7.5) Inadequate Capital **"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="inadequateCapitalConstraintBool"
              dense
              v-model="inadequateCapitalConstraint"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="noAccessToWaterForIrrigationConstraintBool"
              label="(6.7.6) No Access to Water for Irrigation **"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="noAccessToWaterForIrrigationConstraintBool"
              dense
              v-model="noAccessToWaterForIrrigationConstraint"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="noAccessToCreditConstraintConstraintBool"
              label="(6.7.7) No Access to Credit **"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="noAccessToCreditConstraintConstraintBool"
              dense
              v-model="noAccessToCreditConstraintConstraint"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="6" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="longerTimeRequiredToSeeResultsConstraintBool"
              label="(6.7.8) Longer Time Required to See Results **"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="longerTimeRequiredToSeeResultsConstraintBool"
              dense
              v-model="longerTimeRequiredToSeeResultsConstraint"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="oldAgeConstraintBool"
              label="(6.7.9) Old Age **"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="oldAgeConstraintBool"
              dense
              v-model="oldAgeConstraint"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="6" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="landTenureOrLandOwnershipIssuesConstraintBool"
              label="(6.7.10) Land Tenure/Land Ownership Issues **"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="landTenureOrLandOwnershipIssuesConstraintBool"
              dense
              v-model="landTenureOrLandOwnershipIssuesConstraint"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="landTopographyNotSuitableConstraintBool"
              label="(6.7.11) Land Topography Not Suitable **"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="landTopographyNotSuitableConstraintBool"
              dense
              v-model="landTopographyNotSuitableConstraint"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="6" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="laborIntensiveOrNonAvailabilityOfLaborConstraintBool"
              label="(6.7.12) Labor Intensive/Non-availability of Labor **"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="laborIntensiveOrNonAvailabilityOfLaborConstraintBool"
              dense
              v-model="laborIntensiveOrNonAvailabilityOfLaborConstraint"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="infertileSoilConstraintBool"
              label="(6.7.13) Infertile Soil **"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-select
              :items="threePointScale"
              v-if="infertileSoilConstraintBool"
              dense
              v-model="infertileSoilConstraint"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
              label="Rate"
            ></v-select>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="otherConstraintBool"
              label="(6.7.14) Other **"
              :disabled="mode === 'VIEW'"
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
                    :rules="requiredRule"
                    :disabled="mode === 'VIEW'"
                    label="Main Constraint/Difficulties"
                  ></v-text-field
                ></v-col>
                <v-col cols="12" sm="2">
                  <v-select
                    :items="threePointScale"
                    dense
                    v-model="item.rate"
                    :rules="requiredRule"
                    :disabled="mode === 'VIEW'"
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
                        :disabled="mode === 'VIEW'"
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
                !checkLastElementIfNull(otherConstraintList) || mode === 'VIEW'
              "
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
import {
  checkLastElementIfNull,
  getParenthesisValue,
  stringifyArray,
} from '@/helpers/'

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

  props: ['mode', 'part6FormData', 'requiredRule', 'requiredRuleVComboBox'],

  created() {
    if (this.part6FormData !== null) {
      this.setPart6FormData(this.part6FormData)
    }
  },

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

    setPart6FormData(part6FormData) {
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
      } = part6FormData

      this.madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years =
        madeAdjustmentsInLivelihoodInResponseToThePerceivedChangesInRainfallAndTemperatureOverTheLast10Years ===
        'Yes'
          ? true
          : false

      const changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfallParsed =
        changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall.split(
          ','
        )
      const _changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall =
        []
      changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfallParsed.map(
        (item) => {
          if (item.split('(').length > 1) {
            const parsed = getParenthesisValue(item)
            _changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall.push(
              parsed.mainValue
            )
            if (parsed.mainValue === 'Others') {
              this.changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfallSpecify =
                parsed.specificValue
            }
          } else
            _changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall.push(
              item
            )
        }
      )

      this.changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall =
        _changesOrAdjustmentsMadeInFarmingInResponseToLongTermShiftsInTemperatureAndRainfall

      this.additionalAdaptationMeasuresBeingConsideredInTheFuture =
        additionalAdaptationMeasuresBeingConsideredInTheFuture

      this.receivedAnyExternalSupportForAdaptationMeasures =
        receivedAnyExternalSupportForAdaptationMeasures === 'Yes' ? true : false

      this.formOfFinancialSupportReceivedBool = formOfFinancialSupportReceived
        ? true
        : false
      setTimeout(() => {
        this.formOfFinancialSupportReceived = formOfFinancialSupportReceived
      })

      this.formOfMaterialSupportReceivedBool = formOfMaterialSupportReceived
        ? true
        : false
      setTimeout(() => {
        this.formOfMaterialSupportReceived = formOfMaterialSupportReceived
      })

      this.formOfExtensionServicesSupportReceivedBool =
        formOfExtensionServicesSupportReceived ? true : false
      setTimeout(() => {
        this.formOfExtensionServicesSupportReceived =
          formOfExtensionServicesSupportReceived
      })

      this.farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceivedBool =
        farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived
          ? true
          : false
      setTimeout(() => {
        this.farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived =
          farmingFishingAdvisoriesBasedOnWeatherAndClimateSupportReceived
      })

      this.formOfInfrastructureSupportReceivedBool =
        formOfInfrastructureSupportReceived ? true : false
      setTimeout(() => {
        this.formOfInfrastructureSupportReceived =
          formOfInfrastructureSupportReceived
      })

      this.formOfOtherSupportReceivedBool = formOfOtherSupportReceived
        ? true
        : false
      setTimeout(() => {
        this.formOfOtherSupportReceived = formOfOtherSupportReceived
      })

      if (mostBeneficialSupportServices) {
        const splitted = mostBeneficialSupportServices.split(',')
        let items = splitted.map((obj) => {
          let item = {}
          item.mostBeneficialSupportService = getParenthesisValue(obj).mainValue
          item.reasonWhyMostBeneficialSupportService =
            getParenthesisValue(obj).specificValue
          return item
        })

        this.mostBeneficialSupportServicesList = items
      } else this.mostBeneficialSupportServicesList = []

      this.lowEducationLevelConstraintBool = lowEducationLevelConstraint
        ? true
        : false
      setTimeout(() => {
        this.lowEducationLevelConstraint = lowEducationLevelConstraint
      })

      this.limitedAccessToInformationConstraintBool =
        limitedAccessToInformationConstraint ? true : false
      setTimeout(() => {
        this.limitedAccessToInformationConstraint =
          limitedAccessToInformationConstraint
      })

      this.lackOfExtensionServicesConstraintBool =
        lackOfExtensionServicesConstraint ? true : false
      setTimeout(() => {
        this.lackOfExtensionServicesConstraint =
          lackOfExtensionServicesConstraint
      })

      this.craOptionsNotCompatibleWithCommunityNormsAndValuesConstraintBool =
        craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint
          ? true
          : false
      setTimeout(() => {
        this.craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint =
          craOptionsNotCompatibleWithCommunityNormsAndValuesConstraint
      })

      this.inadequateCapitalConstraintBool = inadequateCapitalConstraint
        ? true
        : false
      setTimeout(() => {
        this.inadequateCapitalConstraint = inadequateCapitalConstraint
      })

      this.noAccessToWaterForIrrigationConstraintBool =
        noAccessToWaterForIrrigationConstraint ? true : false
      setTimeout(() => {
        this.noAccessToWaterForIrrigationConstraint =
          noAccessToWaterForIrrigationConstraint
      })

      this.noAccessToCreditConstraintConstraintBool =
        noAccessToCreditConstraintConstraint ? true : false
      setTimeout(() => {
        this.noAccessToCreditConstraintConstraint =
          noAccessToCreditConstraintConstraint
      })

      this.longerTimeRequiredToSeeResultsConstraintBool =
        longerTimeRequiredToSeeResultsConstraint ? true : false
      setTimeout(() => {
        this.longerTimeRequiredToSeeResultsConstraint =
          longerTimeRequiredToSeeResultsConstraint
      })

      this.oldAgeConstraintBool = oldAgeConstraint ? true : false
      setTimeout(() => {
        this.oldAgeConstraint = oldAgeConstraint
      })

      this.landTenureOrLandOwnershipIssuesConstraintBool =
        landTenureOrLandOwnershipIssuesConstraint ? true : false
      setTimeout(() => {
        this.landTenureOrLandOwnershipIssuesConstraint =
          landTenureOrLandOwnershipIssuesConstraint
      })

      this.landTopographyNotSuitableConstraintBool =
        landTopographyNotSuitableConstraint ? true : false
      setTimeout(() => {
        this.landTopographyNotSuitableConstraint =
          landTopographyNotSuitableConstraint
      })

      this.laborIntensiveOrNonAvailabilityOfLaborConstraintBool =
        laborIntensiveOrNonAvailabilityOfLaborConstraint ? true : false
      setTimeout(() => {
        this.laborIntensiveOrNonAvailabilityOfLaborConstraint =
          laborIntensiveOrNonAvailabilityOfLaborConstraint
      })

      this.infertileSoilConstraintBool = infertileSoilConstraint ? true : false
      setTimeout(() => {
        this.infertileSoilConstraint = infertileSoilConstraint
      })

      this.otherConstraintBool = otherConstraint ? true : false
      setTimeout(() => {
        if (otherConstraint) {
          const splitted = otherConstraint.split(',')

          let items = splitted.map((obj) => {
            let item = {}
            item.mainConstraintsOrDifficulties =
              getParenthesisValue(obj).mainValue
            item.rate = getParenthesisValue(obj).specificValue
            return item
          })

          this.otherConstraintList = items
        } else this.otherConstraintList = []
      })
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
