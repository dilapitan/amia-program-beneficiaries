<template>
  <div>
    <p v-if="loadedData">{{ part0FormData.nameOfInterviewer }}</p>
    <p v-else>Loading data...</p>
  </div>
</template>

<script>
export default {
  name: 'PreviewTableOfBeneficiaryDetails',

  data: () => ({
    part0FormData: null,
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

      this.part0FormData = {
        surveyNo,
        date,
        interviewStart,
        interviewEnd,
        nameOfInterviewer,
      }
    },
  },
}
</script>
