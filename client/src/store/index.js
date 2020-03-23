import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const server = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    reports: []
  },
  mutations: {
    setCountries: (state, payload) => {
      state.countries = payload
    },
    setReports: (state, payload) => {
      state.reports = payload
    },
    updateCountries: (state, payload) => {
      state.countries = state.countries.map(country => country.id === payload.id ? country = payload : country)
    },
    addReport: (state, payload) => {
      state.reports.push(payload)
    },
    destroyReport: (state, id) => {
      state.reports = state.reports.filter(report => report.id !== id)
    }
  },
  actions: {
    async fetchCountries ({ commit }) {
      const { data } = await axios.get(`${server}/countries`, {
        headers: {
          "token": localStorage.getItem('token')
        }
      })
      commit('setCountries', data)
    },

    async fetchReports ({ commit }) {
      const { data } = await axios.get(`${server}/reports`, {
        headers: {
          "token": localStorage.getItem('token')
        }
      })
      commit('setReports', data)
    },

    async addReport ({ commit }, obj) {
      let { data } = await axios.post(`${server}/reports`, obj, {
        headers: {
          "token": localStorage.getItem('token')
        }
      })
      await commit('updateCountries', data.Country)
      commit('addReport', data)
    },

    async destroyReport ({ commit }, id) {
      await axios.delete(`${server}/reports/${id}`, {
        headers: {
          "token": localStorage.getItem('token')
        }
      })
      commit('destroyReport', id)
    }
  },
  modules: {
  }
})
