<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="justify-content-center">
        <b-col>
          <b-form @submit.prevent="onAdd">
            <b-form-select
              v-model="country"
              :options="option"
              required
            ></b-form-select>

            <b-form-input
              placeholder="Number of Cases"
              v-model="cases"
            />

            <b-button variant="danger" type="submit">Report</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="bv-example-row">
      <b-row class="justify-content-center">
        <b-col>
            <b-card v-for="(report, index) in reports" :key="index" class="text-center" :title="report.Country.name">
              <b-card-text>Report Cases: {{ report.cases }}</b-card-text>

              <b-button @click="onDelete(report.id)" variant="danger">Delete</b-button>
            </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AddReport',
  async created () {
    this.fetchReports()
    await this.fetchCountries()
    this.addOption()
  },
  data () {
    return {
      country: '',
      cases: '',
      option: []
    }
  },
  computed: mapState(['countries', 'reports']),
  methods: {
    ...mapActions(['fetchCountries', 'fetchReports', 'addReport', 'destroyReport']),
    addOption () {
      this.countries.forEach(el => {
        this.option.push(el.name)
      })
    },

    onAdd () {
      let CountryId
      this.countries.forEach(el => {
        if (el.name === this.country) {
          CountryId = el.id
        }
      })
      const obj = {
        cases: this.cases,
        CountryId
      }
      this.addReport(obj)
    },

    onDelete (id) {
      this.destroyReport(id)
    }
  }

};
</script>

<style></style>
