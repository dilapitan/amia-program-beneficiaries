<template>
  <div>
    <h3>VII. INSTITUTIONAL CHARACTERISTICS</h3>

    <br />

    <div>
      <v-row class="d-flex align-baseline" cols="12" sm="12" md="6">
        <v-col cols="12" sm="5" class="mr-2 text-body-2">
          (7) Select if present in the community, then specify:
        </v-col>
      </v-row>

      <div
        :class="{
          'ml-5': $vuetify.breakpoint.xsOnly,
          'ml-10': $vuetify.breakpoint.smAndUp,
        }"
      >
        <v-row class="d-flex">
          <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="accessToAgricultureOrFisheriesRnDInstitutionsBool"
              label="(7.1) Access to Agirculture/Fisheries R&D Institutions"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-text-field
              v-if="accessToAgricultureOrFisheriesRnDInstitutionsBool"
              dense
              clearable
              v-model="accessToAgricultureOrFisheriesRnDInstitutions"
              :disabled="mode === 'VIEW'"
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="accessToCreditBool"
              label="(7.2): Access to Credit"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-text-field
              v-if="accessToCreditBool"
              dense
              clearable
              v-model="accessToCredit"
              :disabled="mode === 'VIEW'"
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="laboratoryFacilitiesBool"
              label="(7.3): Laboratory Facilities"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-text-field
              v-if="laboratoryFacilitiesBool"
              dense
              clearable
              v-model="laboratoryFacilities"
              :disabled="mode === 'VIEW'"
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="educationAndHealthFacilitiesBool"
              label="(7.4): Education and Health Facilities"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-text-field
              v-if="educationAndHealthFacilitiesBool"
              dense
              clearable
              v-model="educationAndHealthFacilities"
              :disabled="mode === 'VIEW'"
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="7" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="
                farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociationsBool
              "
              label="(7.5): Farmers' Groups, Associations, Cooperatives; Non-Government Organizations; Irrigator's Associations"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-text-field
              v-if="
                farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociationsBool
              "
              dense
              clearable
              v-model="
                farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations
              "
              :disabled="mode === 'VIEW'"
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="3" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="marketingSystemBool"
              label="(7.6): Marketing System"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="7" class="ma-0 pa-0 pt-3">
            <v-combobox
              v-if="marketingSystemBool"
              v-model="marketingSystem"
              :disabled="mode === 'VIEW'"
              :items="marketingSystemList"
              label="Select options"
              multiple
              dense
            ></v-combobox>
          </v-col>
        </v-row>

        <v-row
          v-if="marketingSystem.includes('Others')"
          :class="{ 'ml-5': $vuetify.breakpoint.smAndUp }"
        >
          <v-col cols="12" sm="4">
            <v-text-field
              dense
              clearable
              v-model="marketingSystemSpecify"
              :disabled="mode === 'VIEW'"
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="5" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="presenceOfAgriculturalProcessingFacilitiesBool"
              label="(7.7): Presence of Agricultural Processing Facilities"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-text-field
              v-if="presenceOfAgriculturalProcessingFacilitiesBool"
              dense
              clearable
              v-model="presenceOfAgriculturalProcessingFacilities"
              :disabled="mode === 'VIEW'"
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="2" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="irrigationBool"
              label="(7.8): Irrigation"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-text-field
              v-if="irrigationBool"
              dense
              clearable
              v-model="irrigation"
              :disabled="mode === 'VIEW'"
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="4" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="farmingEquipmentBool"
              label="(7.9): Farming Equipment"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-text-field
              v-if="farmingEquipmentBool"
              dense
              clearable
              v-model="farmingEquipment"
              :disabled="mode === 'VIEW'"
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="12" sm="2" class="ma-0 pa-0 mr-2">
            <v-checkbox
              v-model="othersBool"
              label="(7.10): Others"
              :disabled="mode === 'VIEW'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" class="ma-0 pa-0 pt-3">
            <v-text-field
              v-if="othersBool"
              dense
              clearable
              v-model="others"
              :disabled="mode === 'VIEW'"
              label="Please specify"
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { getParenthesisValue, stringifyArray } from '@/helpers/'

export default {
  data: () => ({
    // 7. Institutional Characteristics - Data variables
    accessToAgricultureOrFisheriesRnDInstitutions: null,
    accessToCredit: null,
    laboratoryFacilities: null,
    educationAndHealthFacilities: null,
    farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations:
      null,
    marketingSystem: [],
    presenceOfAgriculturalProcessingFacilities: null,
    irrigation: null,
    farmingEquipment: null,
    others: null,

    // 7. Institutional Characteristics - UI variables
    accessToAgricultureOrFisheriesRnDInstitutionsBool: false,
    accessToCreditBool: false,
    laboratoryFacilitiesBool: false,
    educationAndHealthFacilitiesBool: false,
    farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociationsBool: false,
    marketingSystemBool: false,
    presenceOfAgriculturalProcessingFacilitiesBool: false,
    irrigationBool: false,
    farmingEquipmentBool: false,
    othersBool: false,
    marketingSystemList: [
      'Talipapa',
      'Wet/Public Market',
      'Rolling Store (truck)',
      'Rolling Store (cart)',
      'Retail Store',
      'Wholesale Store',
      'Others',
    ],
    marketingSystemSpecify: null,
  }),

  props: ['mode', 'part7FormData', 'requiredRule', 'requiredRuleVComboBox'],

  created() {
    if (this.part7FormData !== null) {
      this.setPart7FormData(this.part7FormData)
    }
  },

  methods: {
    passForm7Data() {
      const part7Data = {
        accessToAgricultureOrFisheriesRnDInstitutions:
          this.accessToAgricultureOrFisheriesRnDInstitutions,
        accessToCredit: this.accessToCredit,
        laboratoryFacilities: this.laboratoryFacilities,
        educationAndHealthFacilities: this.educationAndHealthFacilities,
        farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations:
          this
            .farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations,
        marketingSystem: stringifyArray(
          this.marketingSystem,
          this.marketingSystemSpecify
        ),
        presenceOfAgriculturalProcessingFacilities:
          this.presenceOfAgriculturalProcessingFacilities,
        irrigation: this.irrigation,
        farmingEquipment: this.farmingEquipment,
        others: this.others,
      }
      return part7Data
    },

    setPart7FormData(part7FormData) {
      const {
        accessToAgricultureOrFisheriesRnDInstitutions,
        accessToCredit,
        laboratoryFacilities,
        educationAndHealthFacilities,
        farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations,
        marketingSystem,
        presenceOfAgriculturalProcessingFacilities,
        irrigation,
        farmingEquipment,
        others,
      } = part7FormData

      this.accessToAgricultureOrFisheriesRnDInstitutionsBool =
        accessToAgricultureOrFisheriesRnDInstitutions ? true : false
      setTimeout(() => {
        this.accessToAgricultureOrFisheriesRnDInstitutions =
          accessToAgricultureOrFisheriesRnDInstitutions
      })

      this.accessToCreditBool = accessToCredit ? true : false
      setTimeout(() => {
        this.accessToCredit = accessToCredit
      })

      this.laboratoryFacilitiesBool = laboratoryFacilities ? true : false
      setTimeout(() => {
        this.laboratoryFacilities = laboratoryFacilities
      })

      this.educationAndHealthFacilitiesBool = educationAndHealthFacilities
        ? true
        : false
      setTimeout(() => {
        this.educationAndHealthFacilities = educationAndHealthFacilities
      })

      this.farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociationsBool =
        farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations
          ? true
          : false
      setTimeout(() => {
        this.farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations =
          farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations
      })

      this.marketingSystemBool = marketingSystem ? true : false
      setTimeout(() => {
        const marketingSystemParsed = marketingSystem.split('/')
        const _marketingSystem = []
        marketingSystemParsed.map((item) => {
          if (item.split('(').length > 1 && item.includes('Others')) {
            const parsed = getParenthesisValue(item.trim())
            _marketingSystem.push(parsed.mainValue)

            if (parsed.mainValue === 'Others') {
              this.marketingSystemSpecify = parsed.specificValue
            }
          } else _marketingSystem.push(item.trim())
        })

        this.marketingSystem = _marketingSystem
      })

      this.presenceOfAgriculturalProcessingFacilitiesBool =
        presenceOfAgriculturalProcessingFacilities ? true : false
      setTimeout(() => {
        this.presenceOfAgriculturalProcessingFacilities =
          presenceOfAgriculturalProcessingFacilities
      })

      this.irrigationBool = irrigation ? true : false
      setTimeout(() => {
        this.irrigation = irrigation
      })

      this.farmingEquipmentBool = farmingEquipment ? true : false
      setTimeout(() => {
        this.farmingEquipment = farmingEquipment
      })

      this.othersBool = others ? true : false
      setTimeout(() => {
        this.others = others
      })
    },
  },
  watch: {
    accessToAgricultureOrFisheriesRnDInstitutionsBool() {
      this.accessToAgricultureOrFisheriesRnDInstitutions = null
    },

    accessToCreditBool() {
      this.accessToCredit = null
    },

    laboratoryFacilitiesBool() {
      this.laboratoryFacilities = null
    },

    educationAndHealthFacilitiesBool() {
      this.educationAndHealthFacilities = null
    },

    farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociationsBool() {
      this.farmersGroupsAssociationsCooperativesNonGovernmentOrganizationsIrrigatorsAssociations =
        null
    },

    marketingSystemBool() {
      this.marketingSystem = []
      this.marketingSystemSpecify = null
    },

    marketingSystem() {
      if (!this.marketingSystem.includes('Others')) {
        this.marketingSystemSpecify = null
      }
    },

    presenceOfAgriculturalProcessingFacilitiesBool() {
      this.presenceOfAgriculturalProcessingFacilities = null
    },

    irrigationBool() {
      this.irrigation = null
    },

    farmingEquipmentBool() {
      this.farmingEquipment = null
    },

    othersBool() {
      this.others = null
    },
  },
}
</script>
