<template>
  <div>
    <Navbar></Navbar>
    <div class="container is-widescreen" style="margin-top: 72px;">
      <div class="columns is-multiline is-mobile">
        <div class="column is-one-quarter" v-for="result in results" v-bind:key="result._id">
          <a class="item" @click="gotoProduct(result)">
            <figure class="image is-3by2">
              <img v-bind:src="'http://localhost:3000/api/wares/' + result._id + '/image'" alt="Placeholder image">
            </figure>
            <div class="content small-margin-top">
              <b-taglist class="is-marginless">
                  <b-tag type="is-primary" v-for="tag in result.tags">{{ tag }}</b-tag>
              </b-taglist>
              <h5 class="small-margin-bottom gray-color">{{ result.name }}</h5>
              <small class="gray-color">${{ result.price }}</small><br>
              <small class="gray-color">{{ result.location }}</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import api from '../data/api.js'

export default {
  name: "Search",
  components: {
    Navbar
  },
  methods: {
    getSearchData: function() {
      /*
      * Returns [{
      *      _id: ObjectId,
      *      name: String,
      *      tags: [String],
      *      seller: { type: ObjectId, ref: "User" },
      *      location: String,
      *      price: Number,
      *      description: String,
      *      slots: [{start: Date, end: Date}]
      * }]
      */
      let that = this;
      api.search(this.$route.params.query)
        .then(function(res) {
          that.results = res;
        })
    },
    gotoProduct: function(result) {
      this.$router.push(`/product/${result._id}`);
    }
  },
  created() {
    this.getSearchData();
  },
  updated() {
    // this.getSearchData();
  },
  data() {
    return {
      results: []
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
.gray-color {
  color: rgb(72, 72, 72);
}
</style>
