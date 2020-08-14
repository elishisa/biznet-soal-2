<template id="detail-modal">
  <!-- Modal -->
  <div
    class="modal fade m-t-20"
    id="detailModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="detailModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document" style="max-width: 1200px;">
      <div class="modal-content" style="max-height:90vh">
        <div class="modal-header">TEST</div>
        <div class="modal-body" style="overflow-y:scroll">LALA</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail_issue",
  props: {
    msg: String,
    id: String,
    dt_statistik_area: Array,
    dataresult: Array,
  },
  data() {
    return {
      idNet: "",
      idcat: "",
      idisu: "",
      type_net: "issue",
      dt_source: "facebook",
      activetab: String,
      loadingx1: true,
      loadingx2: true,
      loadingx4: true,
      loadingx5: true,
      loadingx7: true,
      tottal_post: "0",
      tottal_target: "0",
      total_comment: "0",
      status: "",
      theme: "",
      dt_post: Array,
      dt_comment: Array,
      dt_target: Array,
      dt_oripost: Array,
      dt_detail_comment: Array,
      dt_detail_post: Array,
      judul: true,
    };
  },

  watch: {
    async id(newVal, oldVal) {
      console.log("masuk detail");

      this.idcat = this.filterss.cateid;
      this.loadingx1 = true;
      this.loadingx2 = true;
      this.loadingx4 = true;
      this.loadingx5 = true;
      this.loadingx7 = true;
      // this.$router.push({ path: "/Listofissue/" });
      $("#detailissueModal").modal("show");
      try {
        const response = await this.getData(
          `/rta-service/rta-detail-statistik/get-oripost?id=${this.id}`
        );
        this.loadingx1 = false;
        this.dt_oripost = response.data.data;
        console.log("res", response);
      } catch (err) {
        this.loadingx1 = false;
        console.log(err);
      }

      try {
        const response = await this.getData(
          `/rta-service/rta-detail-statistik/list-account?id=${this.id}&type=post&source=facebook`
        );
        this.loadingx4 = false;
        this.dt_post = response.data.data.data;
        this.total_post = response.data.data.total_data;
      } catch (err) {
        this.loadingx4 = false;
        console.log(err);
      }

      try {
        const response = await this.getData(
          `/rta-service/rta-detail-statistik/list-account?id=${this.id}&type=comment&source=facebook`
        );
        this.loadingx5 = false;
        this.dt_comment = response.data.data.data;
        this.total_comment = response.data.data.total_data;
      } catch (err) {
        this.loadingx5 = false;
        console.log(err);
      }

      try {
        const response = await this.getData(
          `/rta-service/rta-detail-statistik/list-account?id=${this.id}&type=target&source=facebook`
        );
        this.loadingx7 = false;
        this.dt_target = response.data.data.data;
        this.tottal_target = response.data.data.total_data;
      } catch (err) {
        this.loadingx7 = false;
        console.log(err);
      }

      this.myQuoteNi();
      this.myFunction();
      this.locationIssue();
      this.idNet = this.id.toString();
    },
  },

  mounted() {
    this.total_retweet = "";
    this.total_tweet = "";
    this.total_reply = "";
    this.tottal_quote = "";

    // console.log("masuks", id);
  },

  computed: {
    ...mapState("filter", ["filterss"]),
  },

  methods: {
    ...mapActions("listIssue", ["getData"]),
    networkIssue() {
      this.idNet = String(this.id);
      console.log("netid", typeof this.id);
      this.activetab = 2;
    },
  },
};
</script>
