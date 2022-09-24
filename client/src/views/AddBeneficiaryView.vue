<template>
  <div class="my-5 mx-10">
    <h3>Add Beneficiary</h3>
    <p class="mt-2 text-body-2">
      This is where you can add a new beneficiary to the list.
    </p>
    <br />
    <v-card class="pa-5" color="middleground" flat height="100%">
      <!-- 0 General -->
      <Part0Form />

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 1 Farmer's Basic Information -->
      <Part1Form />

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 2 Socio-demographic Information -->
      <Part2Form />

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 3 Farm Description -->
      <Part3Form />

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 4 Farm Activities -->
      <Part4Form />

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 5 Technical Knowledge/Perception of Climate Change and its Impacts -->
      <Part5Form />

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 6 Farmer's Adaptation Practices -->
      <Part6Form />

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 7 Institutional Characteristics -->
      <Part7Form />

      <br />
      <v-divider></v-divider>
      <br />

      <!-- 8 Issues/Concerns/Problems in Farming -->
      <Part8Form />

      <br />
      <v-divider></v-divider>
      <br />

      <v-overlay :value="loading"></v-overlay>
      <div class="d-flex align-end flex-column">
        <v-btn
          :disabled="loading"
          :loading="loading"
          @click="addBeneficiary()"
          color="primary"
        >
          SUBMIT
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import Part0Form from '@/components/forms/Part0Form.vue'
import Part1Form from '@/components/forms/Part1Form.vue'
import Part2Form from '@/components/forms/Part2Form.vue'
import Part3Form from '@/components/forms/Part3Form.vue'
import Part4Form from '@/components/forms/Part4Form.vue'
import Part5Form from '@/components/forms/Part5Form.vue'
import Part6Form from '@/components/forms/Part6Form.vue'
import Part7Form from '@/components/forms/Part7Form.vue'
import Part8Form from '@/components/forms/Part8Form.vue'

export default {
  name: 'AddBeneficiaryView',

  components: {
    Part0Form,
    Part1Form,
    Part2Form,
    Part3Form,
    Part4Form,
    Part5Form,
    Part6Form,
    Part7Form,
    Part8Form,
  },

  data: () => ({
    loading: false,
  }),

  methods: {
    addBeneficiary() {
      this.loading = true
      // this.$router.push('/')
    },
  },

  watch: {},
}
</script>
