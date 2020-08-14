<template>
  <div class="homepage">
    <div class="col-12 text-right" style="height: 60px; background-color: #ffac33"></div>
    <div v-if="loading">
      <img alt="starwars logo" width="40%" src="../assets/Star-Wars-History-Part-II.jpg" />

      <div class="container">
        <div class="row card-deck col-mt-20">
          <div class="col-md-4" v-for="(item, index) in data" :key="index">
            <div class="card mb-4 shadow-sm" @click="detailData(item.page)">
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
                <text x="45%" y="50%" fill="#FF7533" dy=".3em">{{item.name}}</text>
              </svg>
              <!-- <div class="card-body">
                <div v-for="(e,f) in vehicle_name[index]" :key="f" class="card-text">{{e}}</div>
                <div v-for="(a,b) in film_name[index]" :key="b">{{a}}</div>
                <div v-for="(c,d) in starship_name[index]" :key="d">starships: {{c}}</div>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">Tipe: {{index}}</small>
                </div>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Tidak ada data</div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import JQuery from "jquery";
let $ = JQuery;
// @ is an alias to /src

export default {
  name: "Homepage",
  data() {
    return {
      data: [
        {
          name: "PEOPLE",
          page: "people",
        },
        {
          name: "PLANET",
          page: "planet",
        },
        {
          name: "FILM",
          page: "film",
        },
        {
          name: "STARSHIP",
          page: "starship",
        },
        {
          name: "VEHICLE",
          page: "vehicle",
        },
        {
          name: "SPECIES",
          page: "species",
        },
      ],
      loading: true,
    };
  },
  methods: {
    detailData(e) {
      console.log(e);
      this.$router.push("/" + e);
    },
  },
};
</script>