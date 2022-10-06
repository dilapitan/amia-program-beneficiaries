<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8">
        <h3>LIST OF BENEFICIARIES</h3>
        <v-card
          class="mt-2 pa-5 overflow-y-auto"
          color="middleground"
          flat
          :height="$vuetify.breakpoint.xs ? '60vh' : '80vh'"
        >
          <div v-for="(item, index) in beneficiariesPerProvince" :key="index">
            <div class="mb-10">
              <h4>{{ item.province }}</h4>
              <BeneficiariesPerProvince :beneficiaries="item.beneficiaries" />
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">Facebook Page</v-col>
    </v-row>
  </v-container>
</template>

<script>
import BeneficiariesPerProvince from '@/components/BeneficiariesPerProvince.vue'

export default {
  name: 'HomePageView',

  components: {
    BeneficiariesPerProvince,
  },

  computed: {
    beneficiariesPerProvince() {
      return this.$store.state.beneficiariesPerProvince
    },
  },
}
</script>
