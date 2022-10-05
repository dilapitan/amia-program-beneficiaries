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
          ></v-select>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.2) City/Municipality:</div>

        <div>
          <v-text-field
            dense
            clearable
            v-model="cityOrMunicipality"
          ></v-text-field>
        </div>
      </div>

      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.3) Name of Farmer:</div>

        <div>
          <v-text-field dense clearable v-model="nameOfFarmer"></v-text-field>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.4) Contact No:</div>

        <div>
          <v-text-field dense clearable v-model="contactNo"></v-text-field>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.5) Farmer's Code No:</div>

        <div>
          <v-text-field dense clearable v-model="farmersCodeNo"></v-text-field>
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
    nameOfFarmer: null,
    contactNo: null,
    farmersCodeNo: null,
    provinceList: getRegion5(),
  }),

  methods: {
    passForm1Data() {
      const part1Data = {
        province: this.province,
        cityOrMunicipality: this.cityOrMunicipality,
        nameOfFarmer: this.nameOfFarmer,
        contactNo: this.contactNo,
        farmersCodeNo: this.farmersCodeNo,
      }

      return part1Data
    },
  },
}
</script>
