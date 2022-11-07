<template>
  <div>
    <div
      v-if="beneficiaries.length > 0"
      :style="{ height: '175px' }"
      class="overflow-y-auto"
    >
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left"></th>
              <th class="text-left">NAME</th>
              <th class="text-left">MUNICIPALITY</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in beneficiaries" :key="item.name">
              <td>{{ index + 1 }}</td>
              <td>{{ item.nameOfFarmer }}</td>
              <td>{{ item.cityOrMunicipality }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <p class="ml-2 text-body-2" v-else>No listed beneficiaries.</p>
  </div>
</template>

<script>
export default {
  props: ['beneficiaries'],
}
</script>
