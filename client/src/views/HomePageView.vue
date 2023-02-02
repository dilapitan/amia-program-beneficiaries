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
          <div>
            <v-expansion-panels>
              <v-expansion-panel
                v-for="(item, index) in provinceWithTheirBeneficiaries"
                :key="index"
              >
                <v-expansion-panel-header>
                  {{ item.province }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <BeneficiariesPerProvince
                    :beneficiaries="item.beneficiaries"
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3"></v-col>
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
    provinceWithTheirBeneficiaries() {
      return this.$store.state.provinceWithTheirBeneficiaries
    },
  },
}
</script>
