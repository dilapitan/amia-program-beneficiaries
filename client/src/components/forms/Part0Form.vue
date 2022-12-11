<template>
  <div>
    <v-row>
      <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
        <div class="mr-2">
          <strong>SURVEY NO:</strong>
        </div>

        <div>
          <v-text-field
            class="small-number-input"
            dense
            v-model="dependentSurveyNo"
            readonly
            disabled
          ></v-text-field>
        </div>
      </v-col>

      <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
        <div class="mr-2">
          <strong>DATE:</strong>
        </div>

        <div>
          <v-menu
            ref="dateMenu"
            v-model="dateMenu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                dense
                v-model="date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                :rules="requiredRule"
                :disabled="mode !== null"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="dateMenu = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dateMenu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </div>
      </v-col>

      <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
        <div class="mr-2">
          <strong>INTERVIEW START:</strong>
        </div>

        <div>
          <v-text-field
            class="small-number-input"
            dense
            clearable
            v-model="interviewStart"
            :rules="requiredRule"
            :disabled="mode !== null"
          ></v-text-field>
        </div>
      </v-col>

      <v-col class="d-flex align-baseline" cols="12" sm="6" md="3">
        <div class="mr-2">
          <strong>INTERVIEW END:</strong>
        </div>

        <div>
          <v-text-field
            class="small-number-input"
            dense
            clearable
            v-model="interviewEnd"
            :rules="requiredRule"
            :disabled="mode !== null"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex align-baseline" cols="12" sm="5">
        <div class="mr-2">
          <strong>NAME OF INTERVIEWER:</strong>
        </div>

        <div>
          <v-text-field
            dense
            clearable
            v-model="nameOfInterviewer"
            :rules="requiredRule"
            :disabled="mode !== null"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    // 0. General Info - data variables
    date: null,
    interviewStart: null,
    interviewEnd: null,
    nameOfInterviewer: null,

    // 0. General Info - UI variables
    dateMenu: false,
  }),

  props: ['mode', 'requiredRule', 'part0FormData'],

  created() {
    if (this.part0FormData !== null) {
      this.setPart0FormData(this.part0FormData)
    }
  },

  computed: {
    nextSurveyNo() {
      return this.$store.state.beneficiaries.length + 1
    },

    dependentSurveyNo() {
      return this.mode !== null ? this.surveyNo : this.nextSurveyNo
    },
  },

  methods: {
    passForm0Data() {
      const part0Data = {
        surveyNo: this.nextSurveyNo,
        date: this.date,
        interviewStart: this.interviewStart,
        interviewEnd: this.interviewEnd,
        nameOfInterviewer: this.nameOfInterviewer,
      }

      return part0Data
    },

    setPart0FormData(part0FormData) {
      const {
        surveyNo,
        date,
        interviewEnd,
        interviewStart,
        nameOfInterviewer,
      } = part0FormData

      this.surveyNo = surveyNo
      this.date = date
      this.interviewEnd = interviewEnd
      this.interviewStart = interviewStart
      this.nameOfInterviewer = nameOfInterviewer
    },
  },
}
</script>
