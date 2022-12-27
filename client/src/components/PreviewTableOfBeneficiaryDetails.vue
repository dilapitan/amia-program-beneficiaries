<template>
  <div>
    <div v-if="loadedData">
      <v-data-table
        :headers="headers"
        :items="part0FormData"
        disable-filtering
        disable-pagination
        disable-sort
        hide-default-footer
        dense
      ></v-data-table>

      <br />
      <p>Part 1</p>
      <v-data-table
        :headers="headers"
        :items="part1FormData"
        disable-filtering
        disable-pagination
        disable-sort
        hide-default-footer
        dense
      ></v-data-table>
    </div>
    <p v-else>Loading data...</p>
  </div>
</template>

<script>
export default {
  name: 'PreviewTableOfBeneficiaryDetails',

  data: () => ({
    part0FormData: null,
    part1FormData: null,
    headers: [
      { text: 'Label', value: 'label' },
      { text: 'Value', value: 'value' },
    ],
  }),

  props: ['beneficiaryDetails'],

  mounted() {
    if (this.beneficiaryDetails) {
      this.setData(this.beneficiaryDetails)
    }
  },

  computed: {
    loadedData() {
      return Boolean(this.part0FormData && this.part1FormData)
    },
  },

  methods: {
    setData(beneficiaryDetails) {
      const {
        // Part 0
        surveyNo,
        date,
        interviewStart,
        interviewEnd,
        nameOfInterviewer,

        // Part 1
        province,
        cityOrMunicipality,
        barangay,
        nameOfFarmer,
        contactNo,
        farmersCodeNo,
      } = beneficiaryDetails

      this.part0FormData = [
        { label: 'Survey Number', value: surveyNo },
        { label: 'Date', value: date },
        { label: 'Interview Start', value: interviewStart },
        { label: 'Interview End', value: interviewEnd },
        { label: 'Name of Interviewer', value: nameOfInterviewer },
      ]

      this.part1FormData = [
        { label: '(1.1) Province', value: province },
        { label: '(1.2) City/Municipality', value: cityOrMunicipality },
        { label: '(1.3) Barangay', value: barangay },
        { label: '(1.4) Name of Farmer', value: nameOfFarmer },
        { label: '(1.5) Contact No.', value: contactNo },
        { label: `(1.6) Farmer's Code No.`, value: farmersCodeNo },
      ]
    },
  },
}
</script>
