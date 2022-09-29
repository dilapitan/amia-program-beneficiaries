<template>
  <div>
    <h3>III. FARM DESCRIPTION</h3>

    <br />

    <div>
      <v-row>
        <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">
            (3.1) Total Area of Agricultural Land (ha):
          </div>

          <div>
            <v-text-field
              class="small-number-input"
              dense
              clearable
              v-model="totalAreaOfAgriculturalLand"
            ></v-text-field>
          </div>
        </v-col>

        <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">
            (3.2) Total Area of Forestry Land (ha):
          </div>

          <div>
            <v-text-field
              class="small-number-input"
              dense
              clearable
              v-model="totalAreaOfForestryLand"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">(3.3) Total Cultivated Area (ha):</div>

          <div>
            <v-text-field
              class="small-number-input"
              dense
              clearable
              v-model="totalCultivatedArea"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">
            (3.4) Distance from Home to Farm (km):
          </div>

          <div>
            <v-text-field
              class="small-number-input"
              dense
              clearable
              v-model="distanceFromHomeToFarm"
            ></v-text-field>
          </div>
        </v-col>

        <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">
            (3.5) Distance from Land to Water Source (km):
          </div>

          <div>
            <v-text-field
              class="small-number-input"
              dense
              clearable
              v-model="distanceFromLandToWaterSource"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex align-baseline" cols="12" sm="6" md="8">
          <div class="mr-2 text-body-2">
            (3.6) Distance from Market Nearest Paved (concrete/asphalt) road
            (km):
          </div>

          <div>
            <v-text-field
              class="small-number-input"
              dense
              clearable
              v-model="distanceFromMarketNearestPavedRoad"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex align-baseline" cols="12" sm="6" md="6">
          <div class="mr-2 text-body-2">
            (3.7) Distance from Market/Trading Post (km):
          </div>

          <div>
            <v-text-field
              class="small-number-input"
              dense
              clearable
              v-model="distanceFromMarketOrTradingPost"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <div class="d-flex align-baseline" cols="12" sm="12" md="6">
        <div class="mr-2 text-body-2">(3.8) Irrigation Source:</div>

        <div>
          <v-select
            :items="irrigationSourceOptions"
            label="Select option"
            v-model="irrigationSource"
          ></v-select>
        </div>
      </div>

      <v-row
        v-if="irrigationSource === 'Others'"
        class="ml-3"
        :class="{ 'mt-2': $vuetify.breakpoint.xsOnly }"
      >
        <v-col cols="12" sm="6" md="3">
          <div>
            <v-text-field
              dense
              clearable
              v-model="irrigationSourceOthersSpecify"
              label="Please specify"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <div class="d-flex align-baseline" cols="12" sm="12" md="6">
        <div class="mr-2 text-body-2">(3.9) Months Without Rain:</div>

        <div>
          <v-combobox
            v-model="monthsWithoutRain"
            :items="months"
            label="Select options"
            multiple
            dense
          ></v-combobox>
        </div>
      </div>

      <div class="d-flex align-baseline" cols="12" sm="12" md="6">
        <div class="mr-2 text-body-2">(3.10) Position in the Landscape:</div>

        <div>
          <v-select
            :items="positionInTheLandscapeOptions"
            label="Select option"
            v-model="positionInTheLandscape"
          ></v-select>
        </div>
      </div>

      <div class="d-flex align-baseline" cols="12" sm="12" md="6">
        <div class="mr-2 text-body-2">(3.11) Location of Farm:</div>

        <div>
          <v-select
            :items="locationOfFarmOptions"
            label="Select option"
            v-model="locationOfFarm"
          ></v-select>
        </div>
      </div>

      <div class="d-flex align-baseline" cols="12" sm="12" md="6">
        <div class="mr-2 text-body-2">(3.12) Land Tenure:</div>

        <div>
          <v-select
            :items="landTenureOptions"
            label="Select option"
            v-model="landTenure"
          ></v-select>
        </div>
      </div>

      <div class="d-flex align-baseline" cols="12" sm="12" md="6">
        <div class="mr-2 text-body-2">(3.13) Tenancy:</div>

        <div>
          <v-select
            :items="tenancyOptions"
            label="Select option"
            v-model="tenancy"
          ></v-select>
        </div>
      </div>

      <div class="d-flex align-baseline" cols="12" sm="12" md="6">
        <div class="mr-2 text-body-2">(3.14) Land Holding:</div>

        <div>
          <v-select
            :items="landHoldingOptions"
            label="Select option"
            v-model="landHolding"
          ></v-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { stringifyMonths } from '@/helpers'

export default {
  data: () => ({
    // 3. Farm Description - data variables
    totalAreaOfAgriculturalLand: null,
    totalAreaOfForestryLand: null,
    totalCultivatedArea: null,
    distanceFromHomeToFarm: null,
    distanceFromLandToWaterSource: null,
    distanceFromMarketNearestPavedRoad: null,
    distanceFromMarketOrTradingPost: null,
    irrigationSource: null,
    irrigationSourceOthersSpecify: null,
    monthsWithoutRain: [],
    positionInTheLandscape: null,
    locationOfFarm: null,
    landTenure: null,
    tenancy: null,
    landHolding: null,

    // 3. Farm Description - UI variables
    irrigationSourceOptions: [
      'NIA (National Irrigation Administration)',
      `CIA (Communal Irrigator's Association)`,
      'Spring',
      'SWIP (Small Wter Impounding Projects)',
      'STW (Shallow Tube Well)',
      'SFR (Small Farm Reservoir)',
      'Rainfall',
      'Electric Pump',
      'Diversion of Water from Dams',
      'Others',
    ],
    positionInTheLandscapeOptions: [
      'Top slope',
      'Middle slope',
      'Bottom slope',
    ],
    locationOfFarmOptions: ['Lowland', 'Upland', 'Coastal'],
    landTenureOptions: ['Private Ownership', 'Tenancy', 'State ownership'],
    tenancyOptions: ['Cash tenancy', 'Labor tenancy', 'Share Cropping'],
    landHoldingOptions: [
      'Small, fragmented (<1 ha)',
      'Small, sometimes fragmented (1-2 ha)',
      'Large, consolidated (>2 ha)',
    ],
  }),

  computed: {
    months() {
      return this.$store.state.months
    },
  },

  methods: {
    passForm3Data() {
      if (this.irrigationSourceOthersSpecify) {
        this.irrigationSource = `${this.irrigationSource} (${this.irrigationSourceOthersSpecify})`
      }

      const part3Data = {
        totalAreaOfAgriculturalLand: this.totalAreaOfAgriculturalLand,
        totalAreaOfForestryLand: this.totalAreaOfForestryLand,
        totalCultivatedArea: this.totalCultivatedArea,
        distanceFromHomeToFarm: this.distanceFromHomeToFarm,
        distanceFromLandToWaterSource: this.distanceFromLandToWaterSource,
        distanceFromMarketNearestPavedRoad:
          this.distanceFromMarketNearestPavedRoad,
        distanceFromMarketOrTradingPost: this.distanceFromMarketOrTradingPost,
        irrigationSource: this.irrigationSource,
        monthsWithoutRain: stringifyMonths(this.monthsWithoutRain),
        positionInTheLandscape: this.positionInTheLandscape,
        locationOfFarm: this.locationOfFarm,
        landTenure: this.landTenure,
        tenancy: this.tenancy,
        landHolding: this.landHolding,
      }

      return part3Data
    },
  },
  watch: {
    irrigationSource() {
      if (this.irrigationSource !== 'Others')
        this.irrigationSourceOthersSpecify = null
    },
  },
}
</script>
