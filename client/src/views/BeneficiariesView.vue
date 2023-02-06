<template>
  <div class="my-5 mx-10">
    <v-row>
      <v-col><h3>List of Program Beneficiaries</h3></v-col>
      <v-spacer></v-spacer>
      <v-col class="text-right">
        <v-btn v-if="$vuetify.breakpoint.smAndUp" color="primary" to="/add">
          <v-icon left>mdi-account-plus</v-icon>
          ADD BENEFICIARY
        </v-btn>

        <v-btn v-else fab small color="primary" to="/add">
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <br />

    <v-row>
      <v-col cols="4">
        <v-select
          v-model="selectedProvince"
          :items="provincesOfRegion5"
          menu-props="auto"
          label="Select a Province to filter"
          prepend-icon="mdi-filter"
          single-line
          width="100"
          clearable
        ></v-select>
      </v-col>
    </v-row>

    <span v-if="selectedProvince" class="text-caption">
      Displaying beneficiaies under province: {{ selectedProvince }}
    </span>

    <br />

    <div v-if="loading" class="text-center mt-10">
      <v-progress-circular indeterminate color="primary" :size="50">
      </v-progress-circular>
    </div>
    <div v-else>
      <div v-if="beneficiaries.length > 0">
        <v-data-table
          :headers="headers"
          :items="beneficiaries"
          class="elevation-1"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <div class="d-flex align-baseline">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    @click="viewBeneficiary(item)"
                    small
                    class="mr-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-eye
                  </v-icon>
                </template>
                <span>View Beneficiary</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    small
                    class="mr-2"
                    @click="editBeneficiary(item)"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-pencil
                  </v-icon>
                </template>
                <span>Edit Beneficiary</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    small
                    @click="deleteItem(item)"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-delete
                  </v-icon>
                </template>
                <span>Delete Beneficiary</span>
              </v-tooltip>
            </div>
          </template>
        </v-data-table>

        <div>
          <strong>Note:</strong>
          <div>
            <p>
              <span class="ml-2 text-caption">
                <strong>*</strong>
                for the last 20-30 years</span
              >
            </p>
            <p>
              <span class="ml-2 text-caption">
                <strong>**</strong>
                Constraints/Difficulties in Changing Farming Ways</span
              >
            </p>
          </div>
        </div>
      </div>

      <p v-else class="mt-10">No records found.</p>
    </div>

    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h6">
          Are you sure you want to delete Survey No:
          {{ deletedItem.surveyNo }}?
        </v-card-title>

        <br />

        <v-card-subtitle>
          Deleting this removes the beneficiary from the list.
        </v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="loading" color="grey" text @click="closeDelete">
            Cancel
          </v-btn>
          <v-btn
            :disabled="loading"
            :loading="loading"
            color="error"
            @click="deleteItemConfirm"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <SnackbarLayout />
  </div>
</template>

<script>
import SnackbarLayout from '@/components/SnackbarLayout.vue'

import { db } from '@/firebase/firebaseConfig'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

import { deleteBeneficiary } from '@/firebase/firebaseServices'
import { BENEFICIARIES } from '@/static/dummy_data'
import { getProvincesOfRegion5 } from '@/helpers/locations'
import { HEADERS } from '@/helpers/layout'
export default {
  components: {
    SnackbarLayout,
  },

  data: () => ({
    // TODO: put the headers in a constant file
    headers: HEADERS,
    dialogDelete: false,
    deletedIndex: -1,
    deletedItem: {},
    loading: false,
    selectedProvince: null,
    beneficiaries: [],
  }),

  mounted() {
    this.initialize()
  },

  computed: {
    provincesOfRegion5() {
      return getProvincesOfRegion5()
    },
  },

  watch: {
    dialogDelete(val) {
      val || this.closeDelete()
    },

    selectedProvince() {
      this.beneficiaries = this.$store.getters.beneficiariesPerProvince(
        this.selectedProvince
      )
    },
  },

  methods: {
    initialize() {
      if (+process.env.VUE_APP_USE_FIREBASE) {
        try {
          this.loading = true
          const q = query(
            collection(db, 'beneficiaries'),
            orderBy('createdAt', 'desc')
          )
          onSnapshot(q, (querySnapshot) => {
            let beneficiaries = []

            querySnapshot.forEach((doc) => {
              const {
                part0,
                part1,
                part2,
                part3,
                part4,
                part5,
                part6,
                part7,
                part8,
                createdAt,
                userId,
                id,
              } = doc.data()

              const item = {
                ...part0,
                ...part1,
                ...part2,
                ...part3,
                ...part4,
                ...part5,
                ...part6,
                ...part7,
                ...part8,
                createdAt,
                userId,
                id,
                beneficiaryId: doc.id,
              }

              beneficiaries.push(item)
            })

            this.beneficiaries = beneficiaries
            this.loading = false
          })
        } catch (error) {
          console.error(error)
          this.$store.dispatch('setSnackbarAction', true)
          this.$store.dispatch('setSnackbarDetailsAction', {
            color: 'error',
            text: 'Failed to load data! Please contact admin.',
          })
          this.loading = false
          this.beneficiaries = []
        }
      } else {
        this.loading = false
        this.beneficiaries = BENEFICIARIES
      }
    },

    viewBeneficiary(beneficiary) {
      this.$router.push({
        name: 'ViewBeneficiaryView',
        params: {
          content: beneficiary,
          mode: 'VIEW',
          id: beneficiary.id,
        },
      })
    },

    editBeneficiary(beneficiary) {
      this.$router.push({
        name: 'EditBeneficiaryView',
        params: {
          content: beneficiary,
          mode: 'EDIT',
          id: beneficiary.id,
        },
      })
    },

    deleteItem(item) {
      if (+process.env.VUE_APP_USE_FIREBASE) {
        this.deletedItem = item
      } else {
        this.deletedIndex = this.beneficiaries.indexOf(item)
        this.deletedItem = Object.assign({}, item)
      }

      this.dialogDelete = true
    },

    async deleteItemConfirm() {
      try {
        this.loading = true
        if (+process.env.VUE_APP_USE_FIREBASE) {
          const response = await deleteBeneficiary(this.deletedItem)
          if (response === null) throw 'Something went wrong.'
        } else {
          const updatedBeneficiaries = this.beneficiaries.splice(
            this.deletedIndex,
            1
          )
          this.$store.dispatch('setBeneficiariesAction', updatedBeneficiaries)
        }

        this.$store.dispatch('setSnackbarAction', true)
        this.$store.dispatch('setSnackbarDetailsAction', {
          color: 'success',
          text: 'Successfully deleted beneficiary!',
        })

        this.closeDelete()
      } catch (error) {
        this.$store.dispatch('setSnackbarAction', true)
        this.$store.dispatch('setSnackbarDetailsAction', {
          color: 'error',
          text: 'Failed deleting a beneficiary! Please contact admin.',
        })
        this.closeDelete()
        throw new Error(error)
      }
    },

    closeDelete() {
      this.dialogDelete = false
      this.loading = false
      this.$nextTick(() => {
        this.deletedItem = Object.assign({}, {})
        this.deletedIndex = -1
      })
    },
  },
}
</script>
