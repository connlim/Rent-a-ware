<template>
  <div>
    <Navbar></Navbar>
    <div class="container is-widescreen" style="margin-top: 72px;">
      <div class="columns is-multiline is-mobile">
        <div class="column is-one-quarter">
          <a class="item">
            <figure class="image is-3by2">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
            <div class="content small-margin-top">
              <h5 style="color: rgb(72, 72, 72)" class="small-margin-bottom">Ti-Nspire CX-CAS Graphing Calculator</h5>
              <small style="color: rgb(72, 72, 72)">$300 per hour</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Search",
  components: {
    Navbar
  },
  methods: {
    getSearchData: function() {

    }
  },
  data: function() {
    return {
      cost: 10000,
      owner: "Akash",
      location: "Pasir Ris",
      maxDuration: "3 days",
      datePosted: "2018-09-09",
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.small-margin-bottom {
  margin-bottom: 0.3em;
}
.small-margin-top {
  margin-top: 0.7em;
}
</style>
