<template>
  <div>
    <h3>IV. FARM ACTIVITIES</h3>

    <br />

    <div>
      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="4" md="2" class="mr-2 text-body-2">
          (4.1) Agricultural Activities:
        </v-col>
      </v-row>

      <div>
        <div
          :class="{ 'ml-3': $vuetify.breakpoint.smAndUp }"
          v-for="(
            agriculturalActivities, index
          ) in agriculturalActivitiesOptions"
          :key="index"
        >
          <v-row>
            <v-col class="mr-2 ma-0 pa-0">
              <v-checkbox
                @click="addAgriculturalActivities(agriculturalActivities)"
                v-model="agriculturalActivities.selected"
                :label="agriculturalActivities.id"
                :disabled="mode === 'VIEW'"
              ></v-checkbox>
            </v-col>
          </v-row>

          <div
            class="ml-2"
            v-if="
              agriculturalActivities.selected &&
              agriculturalActivities.id === 'Crop Production'
            "
          >
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="8"
                class="ma-0 pa-0 d-flex align-baseline flex-wrap"
              >
                <div class="mr-2 text-body-2">(4.2) Crops Produced:</div>

                <div>
                  <v-text-field
                    :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                    dense
                    clearable
                    v-model="cropsProduced"
                    :rules="requiredRule"
                    :disabled="mode === 'VIEW'"
                    label="Please specify"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="8"
                class="ma-0 pa-0 d-flex align-baseline flex-wrap"
              >
                <div class="mr-2 text-body-2">
                  (4.3) Land Area Devoted For Crop Production (ha):
                </div>

                <div>
                  <v-text-field
                    :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                    dense
                    clearable
                    v-model="landAreaDevotedForCropProduction"
                    :rules="requiredRule"
                    :disabled="mode === 'VIEW'"
                    label="Please specify"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>
          </div>

          <div
            class="ml-2"
            v-if="
              agriculturalActivities.selected &&
              agriculturalActivities.id === 'Livestock Production'
            "
          >
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="8"
                class="ma-0 pa-0 d-flex align-baseline flex-wrap"
              >
                <div class="mr-2 text-body-2">
                  (4.4) Livestock Raised/Produced:
                </div>

                <div>
                  <v-text-field
                    :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                    dense
                    clearable
                    v-model="livestockRaisedOrProduced"
                    :rules="requiredRule"
                    :disabled="mode === 'VIEW'"
                    label="Please specify"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="8"
                class="ma-0 pa-0 d-flex align-baseline flex-wrap"
              >
                <div class="mr-2 text-body-2">
                  (4.5) Land Area Devoted For Livestock Production (ha):
                </div>

                <div>
                  <v-text-field
                    :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                    dense
                    clearable
                    v-model="landAreaDevotedForLivestockProduction"
                    :rules="requiredRule"
                    :disabled="mode === 'VIEW'"
                    label="Please specify"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>
          </div>

          <div
            class="ml-2"
            v-if="
              agriculturalActivities.selected &&
              agriculturalActivities.id === 'Aquaculture'
            "
          >
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="8"
                class="ma-0 pa-0 d-flex align-baseline flex-wrap"
              >
                <div class="mr-2 text-body-2">
                  (4.6) Species grown for Aquaculture:
                </div>

                <div>
                  <v-text-field
                    :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                    dense
                    clearable
                    v-model="speciesGrownForAquaculture"
                    :rules="requiredRule"
                    :disabled="mode === 'VIEW'"
                    label="Please specify"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="8"
                class="ma-0 pa-0 d-flex align-baseline flex-wrap"
              >
                <div class="mr-2 text-body-2">
                  (4.7) Land Area Devoted for Aquaculture (ha):
                </div>

                <div>
                  <v-text-field
                    :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                    dense
                    clearable
                    v-model="landAreaDevotedForAquaculture"
                    :rules="requiredRule"
                    :disabled="mode === 'VIEW'"
                    label="Please specify"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="8"
                class="ma-0 pa-0 d-flex align-baseline flex-wrap"
              >
                <div class="mr-2 text-body-2">
                  (4.8) Source of Water for Aquaculture:
                </div>

                <div>
                  <v-text-field
                    :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
                    dense
                    clearable
                    v-model="sourceOfWaterForAquaculture"
                    :rules="requiredRule"
                    :disabled="mode === 'VIEW'"
                    label="Please specify"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>
          </div>

          <v-row
            v-if="
              agriculturalActivities.selected &&
              agriculturalActivities.id === 'Agri-based Product Development'
            "
            class="ml-3"
            :class="{ 'mt-2': $vuetify.breakpoint.xsOnly }"
          >
            <v-col cols="12" sm="6" md="3">
              <div>
                <v-text-field
                  dense
                  clearable
                  v-model="agriBasedProductDevelopmentSpecify"
                  :rules="requiredRule"
                  :disabled="mode === 'VIEW'"
                  label="Please specify"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="d-flex align-baseline" cols="12" sm="12" md="6">
        <div class="mr-2 text-body-2">(4.9) Cropping Pattern:</div>

        <div>
          <v-select
            :items="croppingPatternOptions"
            label="Select option"
            v-model="croppingPattern"
            :rules="requiredRule"
          ></v-select>
        </div>
      </div>

      <v-row
        v-if="croppingPattern === 'Others'"
        class="ml-3"
        :class="{ 'mt-2': $vuetify.breakpoint.xsOnly }"
      >
        <v-col cols="12" sm="6" md="3">
          <div>
            <v-text-field
              dense
              clearable
              v-model="croppingPatternSpecify"
              label="Please specify"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <div class="d-flex align-baseline" cols="12" sm="12" md="12">
        <div class="mr-2 text-body-2">(4.10) Cropping Calendar:</div>
      </div>

      <div :class="{ 'ml-6': $vuetify.breakpoint.smAndUp }">
        <br />

        <div>
          <p class="text-body-2 font-weight-bold">Wet Season:</p>

          <v-row class="d-flex align-baseline">
            <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
              <p class="text-body-2">Land Preparation:</p>
            </v-col>
            <v-col class="ma-0 pa-0" cols="12" sm="4">
              <v-combobox
                v-model="cropCalendarWetSeasonLandPreparation"
                :rules="[requiredRuleVComboBox]"
                :items="months"
                label="Select month(s)"
                multiple
                dense
              ></v-combobox>
            </v-col>
          </v-row>

          <v-row class="d-flex align-baseline">
            <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
              <p class="text-body-2">Planting:</p>
            </v-col>
            <v-col class="ma-0 pa-0" cols="12" sm="4">
              <v-combobox
                v-model="cropCalendarWetSeasonPlanting"
                :rules="[requiredRuleVComboBox]"
                :items="months"
                label="Select month(s)"
                multiple
                dense
              ></v-combobox>
            </v-col>
          </v-row>

          <v-row class="d-flex align-baseline">
            <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
              <p class="text-body-2">Growing:</p>
            </v-col>
            <v-col class="ma-0 pa-0" cols="12" sm="4">
              <v-combobox
                v-model="cropCalendarWetSeasonGrowing"
                :rules="[requiredRuleVComboBox]"
                :items="months"
                label="Select month(s)"
                multiple
                dense
              ></v-combobox>
            </v-col>
          </v-row>

          <v-row class="d-flex align-baseline">
            <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
              <p class="text-body-2">Harvesting:</p>
            </v-col>
            <v-col class="ma-0 pa-0" cols="12" sm="4">
              <v-combobox
                v-model="cropCalendarWetSeasonHarvesting"
                :rules="[requiredRuleVComboBox]"
                :items="months"
                label="Select month(s)"
                multiple
                dense
              ></v-combobox>
            </v-col>
          </v-row>
        </div>

        <br />

        <div>
          <p class="text-body-2 font-weight-bold">Dry Season:</p>

          <v-row class="d-flex align-baseline">
            <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
              <p class="text-body-2">Land Preparation:</p>
            </v-col>
            <v-col class="ma-0 pa-0" cols="12" sm="4">
              <v-combobox
                v-model="cropCalendarDrySeasonLandPreparation"
                :rules="[requiredRuleVComboBox]"
                :items="months"
                label="Select month(s)"
                multiple
                dense
              ></v-combobox>
            </v-col>
          </v-row>

          <v-row class="d-flex align-baseline">
            <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
              <p class="text-body-2">Planting:</p>
            </v-col>
            <v-col class="ma-0 pa-0" cols="12" sm="4">
              <v-combobox
                v-model="cropCalendarDrySeasonPlanting"
                :rules="[requiredRuleVComboBox]"
                :items="months"
                label="Select month(s)"
                multiple
                dense
              ></v-combobox>
            </v-col>
          </v-row>

          <v-row class="d-flex align-baseline">
            <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
              <p class="text-body-2">Growing:</p>
            </v-col>
            <v-col class="ma-0 pa-0" cols="12" sm="4">
              <v-combobox
                v-model="cropCalendarDrySeasonGrowing"
                :rules="[requiredRuleVComboBox]"
                :items="months"
                label="Select month(s)"
                multiple
                dense
              ></v-combobox>
            </v-col>
          </v-row>

          <v-row class="d-flex align-baseline">
            <v-col class="ma-0 pa-0 ml-3" cols="12" sm="2">
              <p class="text-body-2">Harvesting:</p>
            </v-col>
            <v-col class="ma-0 pa-0" cols="12" sm="4">
              <v-combobox
                v-model="cropCalendarDrySeasonHarvesting"
                :rules="[requiredRuleVComboBox]"
                :items="months"
                label="Select month(s)"
                multiple
                dense
              ></v-combobox>
            </v-col>
          </v-row>
        </div>
      </div>

      <v-row>
        <v-col class="d-flex align-baseline flex-wrap" cols="12" sm="6" md="10">
          <div class="mr-2 text-body-2">
            (4.11) Estimated Gross Income Per Cropping (PhP):
          </div>

          <div :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }">
            <v-text-field
              class="mr-4"
              label="1st Cropping"
              dense
              clearable
              v-model="estimatedGrossIncomePerCroppingFirstCropping"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              label="2nd Cropping"
              dense
              clearable
              v-model="estimatedGrossIncomePerCroppingSecondCropping"
              :rules="requiredRule"
              :disabled="mode === 'VIEW'"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { parenthesize, stringifyMonths } from '@/helpers'

export default {
  data: () => ({
    // 4. Farm Activities - data variables
    agriculturalActivities: [],
    agriBasedProductDevelopmentSpecify: null,
    cropsProduced: null,
    landAreaDevotedForCropProduction: null,
    livestockRaisedOrProduced: null,
    landAreaDevotedForLivestockProduction: null,
    speciesGrownForAquaculture: null,
    landAreaDevotedForAquaculture: null,
    sourceOfWaterForAquaculture: null,
    croppingPattern: null,
    croppingPatternSpecify: null,
    estimatedGrossIncomePerCroppingFirstCropping: null,
    estimatedGrossIncomePerCroppingSecondCropping: null,
    cropCalendarWetSeasonLandPreparation: [],
    cropCalendarWetSeasonPlanting: [],
    cropCalendarWetSeasonGrowing: [],
    cropCalendarWetSeasonHarvesting: [],
    cropCalendarDrySeasonLandPreparation: [],
    cropCalendarDrySeasonPlanting: [],
    cropCalendarDrySeasonGrowing: [],
    cropCalendarDrySeasonHarvesting: [],

    // 4. Farm Activities - UI variables
    agriculturalActivitiesOptions: [
      {
        id: 'Crop Production',
        selected: false,
      },
      {
        id: 'Livestock Production',
        selected: false,
      },
      {
        id: 'Aquaculture',
        selected: false,
      },
      {
        id: 'Agri-based Product Development',
        selected: false,
      },
    ],
    croppingPatternOptions: [
      'Monocropping',
      'Crop Rotation',
      'Inter-cropping',
      'Others',
    ],
  }),

  props: ['mode', 'part4FormData', 'requiredRule', 'requiredRuleVComboBox'],

  created() {
    if (this.part4FormData !== null) {
      this.setPart4FormData(this.part4FormData)
    }
  },

  computed: {
    months() {
      return this.$store.state.months
    },
  },

  methods: {
    addAgriculturalActivities(agriculturalActivities) {
      if (agriculturalActivities.selected)
        this.agriculturalActivities.push(agriculturalActivities)
      else {
        const removedIndex = this.agriculturalActivities.indexOf(
          agriculturalActivities
        )
        this.agriculturalActivities.splice(removedIndex, 1)

        if (agriculturalActivities.id === 'Crop Production') {
          this.cropsProduced = null
          this.landAreaDevotedForCropProduction = null
        } else if (agriculturalActivities.id === 'Livestock Production') {
          this.livestockRaisedOrProduced = null
          this.landAreaDevotedForLivestockProduction = null
        } else if (agriculturalActivities.id === 'Aquaculture') {
          this.speciesGrownForAquaculture = null
          this.landAreaDevotedForAquaculture = null
          this.sourceOfWaterForAquaculture = null
        } else if (
          agriculturalActivities.id === 'Agri-based Product Development'
        ) {
          this.agriBasedProductDevelopmentSpecify = null
        }
      }
    },

    stringifyAgriculturalActivities() {
      let stringified = ''
      console.log('this.agriculturalActivities:', this.agriculturalActivities)
      this.agriculturalActivities.map((source, index) => {
        stringified = stringified.concat(source.id)

        if (source.id === 'Agri-based Product Development') {
          stringified = stringified.concat(
            parenthesize(this.agriBasedProductDevelopmentSpecify)
          )
        }

        if (index < this.agriculturalActivities.length - 1) {
          stringified = stringified.concat(', ')
        }
      })

      return stringified
    },

    passForm4Data() {
      if (this.croppingPatternSpecify) {
        this.croppingPattern = `${this.croppingPattern} (${this.croppingPatternSpecify})`
      }

      const part4Data = {
        agriculturalActivities: this.stringifyAgriculturalActivities(),
        cropsProduced: this.cropsProduced,
        landAreaDevotedForCropProduction: this.landAreaDevotedForCropProduction,
        livestockRaisedOrProduced: this.livestockRaisedOrProduced,
        landAreaDevotedForLivestockProduction:
          this.landAreaDevotedForLivestockProduction,
        speciesGrownForAquaculture: this.speciesGrownForAquaculture,
        landAreaDevotedForAquaculture: this.landAreaDevotedForAquaculture,
        sourceOfWaterForAquaculture: this.sourceOfWaterForAquaculture,
        croppingPattern: this.croppingPattern,
        cropCalendarWetSeasonLandPreparation: stringifyMonths(
          this.cropCalendarWetSeasonLandPreparation
        ),
        cropCalendarWetSeasonPlanting: stringifyMonths(
          this.cropCalendarWetSeasonPlanting
        ),
        cropCalendarWetSeasonGrowing: stringifyMonths(
          this.cropCalendarWetSeasonGrowing
        ),
        cropCalendarWetSeasonHarvesting: stringifyMonths(
          this.cropCalendarWetSeasonHarvesting
        ),
        cropCalendarDrySeasonLandPreparation: stringifyMonths(
          this.cropCalendarDrySeasonLandPreparation
        ),
        cropCalendarDrySeasonPlanting: stringifyMonths(
          this.cropCalendarDrySeasonPlanting
        ),
        cropCalendarDrySeasonGrowing: stringifyMonths(
          this.cropCalendarDrySeasonGrowing
        ),
        cropCalendarDrySeasonHarvesting: stringifyMonths(
          this.cropCalendarDrySeasonHarvesting
        ),
        estimatedGrossIncomePerCroppingFirstCropping:
          this.estimatedGrossIncomePerCroppingFirstCropping,
        estimatedGrossIncomePerCroppingSecondCropping:
          this.estimatedGrossIncomePerCroppingSecondCropping,
      }
      return part4Data
    },

    setPart4FormData(part4FormData) {
      const {
        agriculturalActivities,
        cropsProduced,
        landAreaDevotedForCropProduction,
        livestockRaisedOrProduced,
        landAreaDevotedForLivestockProduction,
        speciesGrownForAquaculture,
        landAreaDevotedForAquaculture,
        sourceOfWaterForAquaculture,
        // croppingPattern,
        estimatedGrossIncomePerCroppingFirstCropping,
        estimatedGrossIncomePerCroppingSecondCropping,
        // cropCalendarWetSeasonLandPreparation,
        // cropCalendarWetSeasonPlanting,
        // cropCalendarWetSeasonGrowing,
        // cropCalendarWetSeasonHarvesting,
        // cropCalendarDrySeasonLandPreparation,
        // cropCalendarDrySeasonPlanting,
        // cropCalendarDrySeasonGrowing,
        // cropCalendarDrySeasonHarvesting,
      } = part4FormData

      const _agriculturalActivities = agriculturalActivities
        .split(',')
        .map((item) => {
          const trimmed = item.trim()

          if (trimmed.includes('Agri-based Product Development')) {
            const _agriBasedProductDevelopmentSpecify = trimmed
              .split('(')[1]
              .slice(0, -1)

            this.agriBasedProductDevelopmentSpecify =
              _agriBasedProductDevelopmentSpecify
          }

          return {
            id: trimmed.includes('Agri-based Product Development')
              ? 'Agri-based Product Development'
              : trimmed,
            selected: true,
          }
        })

      const _agriculturalActivitiesOptions = this.agriculturalActivitiesOptions

      this.agriculturalActivitiesOptions = _agriculturalActivitiesOptions.map(
        (item) => {
          const found = _agriculturalActivities.find(
            (agriculturalActivity) => agriculturalActivity.id === item.id
          )
          if (found) {
            item.selected = true
          }
          return item
        }
      )

      this.agriculturalActivities = _agriculturalActivities
      this.cropsProduced = cropsProduced
      this.landAreaDevotedForCropProduction = landAreaDevotedForCropProduction
      this.livestockRaisedOrProduced = livestockRaisedOrProduced
      this.landAreaDevotedForLivestockProduction =
        landAreaDevotedForLivestockProduction
      this.speciesGrownForAquaculture = speciesGrownForAquaculture
      this.landAreaDevotedForAquaculture = landAreaDevotedForAquaculture
      this.sourceOfWaterForAquaculture = sourceOfWaterForAquaculture

      this.estimatedGrossIncomePerCroppingFirstCropping =
        estimatedGrossIncomePerCroppingFirstCropping
      this.estimatedGrossIncomePerCroppingSecondCropping =
        estimatedGrossIncomePerCroppingSecondCropping
    },
  },
  watch: {
    croppingPattern() {
      if (this.croppingPattern !== 'Others') this.croppingPatternSpecify = null
    },
  },
}
</script>
