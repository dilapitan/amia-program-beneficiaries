<template>
  <div>
    <h3>VIII. ISSUES/CONCERNS/PROBLEMS IN FARMING</h3>

    <br />

    <div>
      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" class="mr-2 text-body-2">
          (8) Select the following that applies:
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="10">
          <v-combobox
            v-model="issuesOrConcernsOrProblemsInFarming"
            :items="issuesOrConcernsOrProblemsInFarmingList"
            :disabled="mode === 'VIEW'"
            label="Select options"
            multiple
            dense
          ></v-combobox>
        </v-col>
      </v-row>

      <div
        :class="{
          'ml-5': $vuetify.breakpoint.xsOnly,
          'ml-10': $vuetify.breakpoint.smAndUp,
        }"
      >
        <v-row
          v-if="
            issuesOrConcernsOrProblemsInFarming.includes(
              'Low crop production**'
            )
          "
        >
          <v-col cols="12" sm="4">
            <v-text-field
              dense
              clearable
              v-model="
                issuesOrConcernsOrProblemsInFarmingLowCropProductionSpecify
              "
              :disabled="mode === 'VIEW'"
              label="Please specify crops"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row
          v-if="
            issuesOrConcernsOrProblemsInFarming.includes(
              'Low livestock production**'
            )
          "
        >
          <v-col cols="12" sm="4">
            <v-text-field
              dense
              clearable
              v-model="
                issuesOrConcernsOrProblemsInFarmingLowLivestockProductionSpecify
              "
              :disabled="mode === 'VIEW'"
              label="Please specify livestock"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row
          v-if="
            issuesOrConcernsOrProblemsInFarming.includes(
              'Drought or lack of moisture in the soil'
            )
          "
        >
          <v-col cols="12" sm="4">
            <v-select
              :items="seasonList"
              dense
              v-model="
                issuesOrConcernsOrProblemsInFarmingDroughtOrLackOfMoistureSpecify
              "
              :disabled="mode === 'VIEW'"
              label="Please specify season"
            ></v-select>
          </v-col>
        </v-row>

        <v-row v-if="issuesOrConcernsOrProblemsInFarming.includes('Others')">
          <v-col cols="12" sm="4">
            <v-text-field
              dense
              clearable
              v-model="issuesOrConcernsOrProblemsInFarmingOthersSpecify"
              :disabled="mode === 'VIEW'"
              label="Please specify the other issue(s)"
            ></v-text-field>
          </v-col>
        </v-row>
      </div>

      <v-row
        :class="{
          'ml-5': $vuetify.breakpoint.xsOnly,
          'ml-10': $vuetify.breakpoint.smAndUp,
        }"
        class="text-caption"
      >
        <v-col cols="1">
          <p>Note:</p>
        </v-col>

        <v-col cols="6">
          <ul style="list-style-type: none">
            <li>*, loss of 90% of usual/expected output</li>
            <li>**, >50% loss in expected/usual crop/livestock production</li>
            <li>
              ***, above the economic threshold level – meaning the disease
              severity/pest population is significant enough to decrease yield
              (>50% loss in expected/usual crop/livestock production)
            </li>
          </ul>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { getParenthesisValue, parenthesize } from '@/helpers'

export default {
  data: () => ({
    // 8. Issues/Concerns/Problems in Farming - Data variables
    issuesOrConcernsOrProblemsInFarming: [],

    // 8. Issues/Concerns/Problems in Farming - UI variables
    issuesOrConcernsOrProblemsInFarmingList: [
      'Flooding',
      'High crop losses during typhoon*',
      'Soil erosion',
      'Soil siltation',
      'Access to high-quality seeds',
      'Low crop production**',
      'Low livestock production**',
      'Occurrence of pest and diseases in crops***',
      'Occurrence of pest and disease in livestock***',
      'Occurrence of pest and disease in aquaculture***',
      'Lack of market ',
      'Low farm gate price',
      'Insufficient technical knowledge on crop production',
      'Insufficient technical knowledge on livestock production',
      'Insufficient technical knowledge on aquaculture',
      'Malfunctioning irrigation',
      'Drought or lack of moisture in the soil',
      'Weeds',
      'Insufficient/lacking postharvest facilities',
      'Insufficient/lacking agricultural equipment and machinery',
      'Others',
    ],
    issuesOrConcernsOrProblemsInFarmingLowCropProductionSpecify: null,
    issuesOrConcernsOrProblemsInFarmingLowLivestockProductionSpecify: null,
    issuesOrConcernsOrProblemsInFarmingDroughtOrLackOfMoistureSpecify: null,
    issuesOrConcernsOrProblemsInFarmingOthersSpecify: null,
  }),

  props: ['mode', 'part8FormData', 'requiredRule', 'requiredRuleVComboBox'],

  created() {
    if (this.part8FormData !== null) {
      this.setPart8FormData(this.part8FormData)
    }
  },

  computed: {
    seasonList() {
      return this.$store.state.seasonList
    },
  },

  methods: {
    stringifyArray(array) {
      let stringified = ''

      array.map((source, index) => {
        stringified = stringified.concat(source)

        if (source === 'Low crop production**') {
          stringified = stringified.concat(
            parenthesize(
              this.issuesOrConcernsOrProblemsInFarmingLowCropProductionSpecify
            )
          )
        } else if (source === 'Low livestock production**') {
          stringified = stringified.concat(
            parenthesize(
              this
                .issuesOrConcernsOrProblemsInFarmingLowLivestockProductionSpecify
            )
          )
        } else if (source === 'Drought or lack of moisture in the soil') {
          stringified = stringified.concat(
            parenthesize(
              this
                .issuesOrConcernsOrProblemsInFarmingDroughtOrLackOfMoistureSpecify
            )
          )
        } else if (source === 'Others') {
          stringified = stringified.concat(
            parenthesize(this.issuesOrConcernsOrProblemsInFarmingOthersSpecify)
          )
        }

        if (index < array.length - 1) {
          stringified = stringified.concat(', ')
        }
      })

      return stringified
    },

    passForm8Data() {
      const part8Data = {
        issuesOrConcernsOrProblemsInFarming: this.stringifyArray(
          this.issuesOrConcernsOrProblemsInFarming
        ),
      }
      return part8Data
    },

    setPart8FormData(part8FormData) {
      const { issuesOrConcernsOrProblemsInFarming } = part8FormData

      const issuesOrConcernsOrProblemsInFarmingParsed =
        issuesOrConcernsOrProblemsInFarming.split(',')
      const _issuesOrConcernsOrProblemsInFarming = []
      issuesOrConcernsOrProblemsInFarmingParsed.map((item) => {
        if (item.split('(').length > 1) {
          const parsed = getParenthesisValue(item.trim())
          _issuesOrConcernsOrProblemsInFarming.push(parsed.mainValue.trim())

          if (parsed.mainValue === 'Low crop production**') {
            this.issuesOrConcernsOrProblemsInFarmingLowCropProductionSpecify =
              parsed.specificValue
          }

          if (parsed.mainValue === 'Low livestock production**') {
            this.issuesOrConcernsOrProblemsInFarmingLowLivestockProductionSpecify =
              parsed.specificValue
          }

          if (parsed.mainValue === 'Drought or lack of moisture in the soil') {
            this.issuesOrConcernsOrProblemsInFarmingDroughtOrLackOfMoistureSpecify =
              parsed.specificValue
          }

          if (parsed.mainValue === 'Others') {
            this.issuesOrConcernsOrProblemsInFarmingOthersSpecify =
              parsed.specificValue
          }
        } else _issuesOrConcernsOrProblemsInFarming.push(item.trim())
      })

      this.issuesOrConcernsOrProblemsInFarming =
        _issuesOrConcernsOrProblemsInFarming
    },
  },
  watch: {
    issuesOrConcernsOrProblemsInFarming() {
      if (!this.issuesOrConcernsOrProblemsInFarming.includes('Others')) {
        this.issuesOrConcernsOrProblemsInFarmingOthersSpecify = null
      }

      if (
        !this.issuesOrConcernsOrProblemsInFarming.includes(
          'Low crop production**'
        )
      ) {
        this.issuesOrConcernsOrProblemsInFarmingLowCropProductionSpecify = null
      }

      if (
        !this.issuesOrConcernsOrProblemsInFarming.includes(
          'Low livestock production**'
        )
      ) {
        this.issuesOrConcernsOrProblemsInFarmingLowLivestockProductionSpecify =
          null
      }

      if (
        !this.issuesOrConcernsOrProblemsInFarming.includes(
          'Drought or lack of moisture in the soil'
        )
      ) {
        this.issuesOrConcernsOrProblemsInFarmingDroughtOrLackOfMoistureSpecify =
          null
      }
    },
  },
}
</script>
