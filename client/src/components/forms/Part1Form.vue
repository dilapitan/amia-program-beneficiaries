<template>
  <div>
    <h3>I. FARMER'S BASIC INFORMATION</h3>

    <br />

    <div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.1) Region/Province:</div>

        <div>
          <v-text-field
            dense
            clearable
            v-model="regionOrProvince"
          ></v-text-field>
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
        <div class="mr-2 text-body-2">(1.3) Barangay:</div>

        <div>
          <v-text-field dense clearable v-model="barangay"></v-text-field>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.4) Name of Farmer:</div>

        <div>
          <v-text-field dense clearable v-model="nameOfFarmer"></v-text-field>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.5) Contact No:</div>

        <div>
          <v-text-field dense clearable v-model="contactNo"></v-text-field>
        </div>
      </div>
      <div class="d-flex align-baseline" cols="12" sm="6" md="6">
        <div class="mr-2 text-body-2">(1.6) Farmer's Code No:</div>

        <div>
          <v-text-field dense clearable v-model="farmersCodeNo"></v-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    // 1. Farmer's Basic Information - data variables
    regionOrProvince: null,
    cityOrMunicipality: null,
    barangay: null,
    nameOfFarmer: null,
    contactNo: null,
    farmersCodeNo: null,
  }),

  methods: {},
  watch: {},
}
</script>
