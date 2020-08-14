<template>
  <div class="homepage">
    <div class="col-12 text-right" style="height: 60px; background-color: #ffac33"></div>
    <div v-if="loading">
      <img alt="starwars logo" width="40%" src="../assets/Star-Wars-History-Part-II.jpg" />

      <div class="container">
        <div class="row col-mt-20">
          <div class="card-deck col-md-4" v-for="(item, index) in data" :key="index">
            <div class="card mb-4 shadow-sm">
              <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Thumbnail"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eceeff" />
                <text x="35%" y="40%" fill="#FF7533" dy=".3em">{{item.title}}</text>
              </svg>
              <div class="card-body">
                <div v-for="(e,f) in vehicle_name[index]" :key="f" class="card-text">{{e}}</div>
                <div v-for="(c,d) in starship_name[index]" :key="d">{{c}}</div>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">Tipe: {{index}}</small>
                </div>
              </div>
              <div class="card-footer">
                <button
                  class="btn btn-primary"
                  @click="$bvModal.show(`modal-center${index}`)"
                >Detail</button>
              </div>
            </div>
            <b-modal :id="`modal-center${index}`" hide-footer>
              <div class="d-block">
                <div>Nama : {{item.title}}</div>
                <div>Produser : {{item.producer}}</div>
                <div>Tanggal Rilis : {{item.release_date}}</div>
                <div>Sinopsis : {{item.opening_crawl}}</div>
                <div class="row">
                  <div class="col-lg-12">Nama Pemain:</div>
                  <div v-for="(e,f) in character_name[index]" :key="f" class="card-text">
                    <ul>
                      <li class="col-lg-12">{{e}}</li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">Nama Film:</div>
                  <div v-for="(a,b) in starship_name[index]" :key="b" class="card-text">
                    <ul>
                      <li class="col-lg-12">{{a}}</li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">Nama Film:</div>
                  <div v-for="(c,d) in vehicle_name[index]" :key="d" class="card-text">
                    <ul>
                      <li class="col-lg-12">{{c}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions, mapMutations } from "vuex";
import JQuery from "jquery";
let $ = JQuery;
// @ is an alias to /src

export default {
  name: "Film",
  data() {
    return {
      data: [],
      dataPlanet: [],
      dataVehicle: [],
      dataStarship: [],
      dataSpecies: [],
      dataCharacter: [],
      vehicle_name: [],
      starship_name: [],
      planet_name: [],
      species_name: [],
      character_name: [],
      loading: true,
    };
  },
  created() {
    this.$store.dispatch("peopleState");
    this.$store.dispatch("starshipState");
    this.$store.dispatch("planetState");
    this.$store.dispatch("filmState");
    this.$store.dispatch("vehicleState");
    this.$store.dispatch("speciesState");
  },
  computed: {
    ...mapState(["film"]),
  },
  mounted() {
    this.getData();
    //
  },
  methods: {
    getDetail(idx) {
      this.$refs["my-modal" + idx].show();
    },
    async getData() {
      this.loading = false;
      const status = await this.$store.dispatch("peopleState");
      const status1 = await this.$store.dispatch("starshipState");
      const status2 = await this.$store.dispatch("planetState");
      const status3 = await this.$store.dispatch("filmState");
      const status4 = await this.$store.dispatch("vehicleState");
      const status5 = await this.$store.dispatch("speciesState");
      this.data = this.film.results;
      this.data.forEach((item, index) => {
        this.dataPlanet.push(item.planets);
        this.dataVehicle.push(item.vehicles);
        this.dataStarship.push(item.starships);
        this.dataSpecies.push(item.species);
        this.dataCharacter.push(item.characters);
      }); //
      //

      this.dataPlanet.forEach((i, j) => {
        console.log("data 2", i.length);
        let planet_name = [];
        for (let b = 0; b < i.length; b++) {
          axios.get(i[b]).then((response) => {
            planet_name.push(response.data.name);
          });
        }
        this.planet_name.push(planet_name);
      });
      //

      this.dataVehicle.forEach((i, j) => {
        console.log("data 2", i.length);
        let vehicle_name = [];
        for (let b = 0; b < i.length; b++) {
          axios.get(i[b]).then((response) => {
            vehicle_name.push(response.data.name);
          });
        }
        this.vehicle_name.push(vehicle_name);
      });
      //

      this.dataStarship.forEach((i, j) => {
        console.log("data 2", i.length);
        let starship_name = [];
        for (let b = 0; b < i.length; b++) {
          axios.get(i[b]).then((response) => {
            starship_name.push(response.data.name);
          });
        }
        this.starship_name.push(starship_name);
      });

      this.dataCharacter.forEach((i, j) => {
        console.log("data 2", i.length);
        let character_name = [];
        for (let b = 0; b < i.length; b++) {
          axios.get(i[b]).then((response) => {
            character_name.push(response.data.name);
          });
        }
        this.character_name.push(character_name);
      });
      this.loading = true;
    },
  },
};
</script>