<template>
  <div>
    <div v-if="loadedData">
      <v-data-table
        :headers="part0FormHeaders"
        :items="part0FormData"
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
    part0FormHeaders: [
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
      return !!this.part0FormData
    },
  },

  methods: {
    setData(beneficiaryDetails) {
      const {
        surveyNo,
        date,
        interviewStart,
        interviewEnd,
        nameOfInterviewer,
      } = beneficiaryDetails

      this.part0FormData = [
        { label: 'Survey Number', value: surveyNo },
        { label: 'Date', value: date },
        { label: 'Interview Start', value: interviewStart },
        { label: 'Interview End', value: interviewEnd },
        { label: 'Name of Interviewer', value: nameOfInterviewer },
      ]
    },
  },
}
</script>
