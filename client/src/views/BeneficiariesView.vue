<template>
  <div class="my-5 mx-10">
    <h3>List of Program Beneficiaries</h3>
    <br />
    <v-data-table :headers="headers" :items="beneficiaries" class="elevation-1">
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { text: 'Actions', value: 'actions', sortable: false },
      {
        text: 'Survey No.',
        sortable: false,
        value: 'surveyNo0',
      },
      { text: 'Date', value: 'date' },
      { text: 'Interview Start', value: 'interviewStart' },
      { text: 'Interview End', value: 'interviewEnd' },
      { text: 'Name of Interviewer', value: 'nameOfInterviewer' },
      { text: '(1.1) Region/Province', value: 'regionOrProvince' },
      { text: '(1.2) City/Municipality', value: 'cityOrMunicipality' },
      { text: '(1.3) Barangay', value: 'barangay' },
      { text: '(1.4) Name of Farmer', value: 'nameOfFarmer' },
      { text: '(1.5) Contact No.', value: 'contactNo' },
      { text: `(1.6) Farmer's Code No.`, value: 'farmersCodeNo' },
    ],
    beneficiaries: [],
  }),

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.beneficiaries = [
        {
          surveyNo0: 1,
          date: new Date().toLocaleDateString(),
          interviewStart: new Date().toLocaleDateString(),
          interviewEnd: new Date().toLocaleDateString(),
          nameOfInterviewer: 'John Doe',
          regionOrProvince: 'Region IV-B',
          cityOrMunicipality: 'Palawan',
          barangay: 'Barangay I',
          nameOfFarmer: 'Elisha V. Aum',
          contactNo: '09112223333',
          farmersCodeNo: 111,
        },
        {
          surveyNo0: 2,
          date: new Date().toLocaleDateString(),
          interviewStart: new Date().toLocaleDateString(),
          interviewEnd: new Date().toLocaleDateString(),
          nameOfInterviewer: 'John Doe',
          regionOrProvince: 'Region III',
          cityOrMunicipality: 'Tarlac',
          barangay: 'Amucao',
          nameOfFarmer: 'Roschalinda V. Aum',
          contactNo: '09112224444',
          farmersCodeNo: 222,
        },
      ]
    },

    editItem(item) {
      console.log('item:', item)
    },

    deleteItem(item) {
      console.log('item:', item)
    },

    deleteItemConfirm() {
      this.closeDelete()
    },

    close() {},

    closeDelete() {},
  },
}
</script>
