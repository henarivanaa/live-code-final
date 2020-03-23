<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="justify-content-center">
        <b-col>
            <b-card v-for="country in countries" :key="country.id" class="text-center" :title="country.name">
              <b-card-text>Cases: {{ country.cases }} Deaths: {{ country.deaths }} Recovered: {{ country.recovered }}</b-card-text>

            </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Countries',
  created () {
    this.fetchCountries()
  },
  computed: mapState(['countries']),
  methods: {
    ...mapActions(['fetchCountries'])
  }
};
</script>

<style></style>
