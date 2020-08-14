import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [],
    planet: [],
    starship: [],
    vehicle: [],
    film: [],
    species: [],
    isLoading: true,
  },
  mutations: {
    GET_PEOPLE(state, isi) {
      state.people = isi
      state.isLoading = true
    },
    GET_PLANET(state, isi2) {
      state.planet = isi2
      state.isLoading = true
    },
    GET_STARSHIP(state, isi3) {
      state.starship = isi3
      state.isLoading = true
    },
    GET_VEHICLE(state, isi4) {
      state.vehicle = isi4
      state.isLoading = true
    },
    GET_FILM(state, isi5) {
      state.film = isi5
      state.isLoading = true
    },
    GET_SPECIES(state, isi5) {
      state.species = isi5
      state.isLoading = true
    },
  },
  actions: {
    async peopleState({ commit }) {
      await axios.get('https://swapi.dev/api/people/').then((response) => {
        commit('GET_PEOPLE', response.data)
      })
    },
    async planetState({ commit }) {
      await axios.get('https://swapi.dev/api/planets/').then((response) => {
        commit('GET_PLANET', response.data)
      })
    },
    async starshipState({ commit }) {
      await axios.get('https://swapi.dev/api/starships/').then((response) => {
        commit('GET_STARSHIP', response.data)
      })
    },
    async filmState({ commit }) {
      await axios.get('https://swapi.dev/api/films/').then((response) => {
        commit('GET_FILM', response.data)
      })
    },
    async vehicleState({ commit }) {
      await axios.get('https://swapi.dev/api/vehicles/').then((response) => {
        commit('GET_VEHICLE', response.data)
      })
    },
    async speciesState({ commit }) {
      await axios.get('https://swapi.dev/api/species/').then((response) => {
        commit('GET_SPECIES', response.data)
      })
    },
  },
})