<template>
  <div>
    <h3>I. FARMER'S BASIC INFORMATION</h3>

    <br />

    <div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.1) Province:</div>

        <div>
          <v-select
            :items="provinceList"
            name="province"
            item-text="province"
            label="Select a province"
            v-model="province"
            :disabled="mode === 'VIEW'"
          ></v-select>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.2) City/Municipality:</div>

        <div>
          <v-select
            :disabled="!Boolean(province) || mode === 'VIEW'"
            :items="cityOrMunicipalityList"
            dense
            v-model="cityOrMunicipality"
          ></v-select>
        </div>
      </div>

      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.3) Barangay:</div>

        <div>
          <v-text-field
            dense
            clearable
            v-model="barangay"
            :disabled="mode === 'VIEW'"
          ></v-text-field>
        </div>
      </div>

      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.4) Name of Farmer:</div>

        <div>
          <v-text-field
            dense
            clearable
            v-model="nameOfFarmer"
            :disabled="mode === 'VIEW'"
          ></v-text-field>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.5) Contact No:</div>

        <div>
          <v-text-field
            dense
            clearable
            v-model="contactNo"
            :disabled="mode === 'VIEW'"
          ></v-text-field>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.6) Farmer's Code No:</div>

        <div>
          <v-text-field
            dense
            clearable
            v-model="farmersCodeNo"
            :disabled="mode === 'VIEW'"
          ></v-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRegion5 } from '@/helpers/locations'

export default {
  data: () => ({
    // 1. Farmer's Basic Information - data variables
    province: null,
    cityOrMunicipality: null,
    barangay: null,
    nameOfFarmer: null,
    contactNo: null,
    farmersCodeNo: null,
    provinceList: getRegion5(),
  }),

  props: ['mode', 'requiredRule', 'part1FormData'],

  created() {
    if (this.part1FormData !== null) {
      this.setPart1FormData(this.part1FormData)
    }
  },

  computed: {
    cityOrMunicipalityList() {
      if (this.province) {
        return this.provinceList.find((item) => item.province === this.province)
          .municipalities
      } else return []
    },
  },

  methods: {
    passForm1Data() {
      const part1Data = {
        province: this.province,
        cityOrMunicipality: this.cityOrMunicipality,
        barangay: this.barangay,
        nameOfFarmer: this.nameOfFarmer,
        contactNo: this.contactNo,
        farmersCodeNo: this.farmersCodeNo,
      }

      return part1Data
    },

    setPart1FormData(part1FormData) {
      const {
        province,
        cityOrMunicipality,
        barangay,
        nameOfFarmer,
        contactNo,
        farmersCodeNo,
      } = part1FormData

      this.province = province
      this.cityOrMunicipality = cityOrMunicipality
      this.barangay = barangay
      this.nameOfFarmer = nameOfFarmer
      this.contactNo = contactNo
      this.farmersCodeNo = farmersCodeNo
    },
  },
}
</script>
