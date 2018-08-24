<template>
  <div class="">
    <Navbar></Navbar>
    <div id="product-main" class="container is-widescreen">
      <div class="columns">

        <div class="column is-8">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Details</p>
            </header>
            <div class="card-content">
              <div class="content">
                <p class="posted">Posted on {{ datePosted }}</p>
                <p class="details-list">
                  <b-icon icon="currency-usd" type="is-primary"></b-icon>
                  <span>{{ cost }}</span>
                </p><br>
                <p class="details-list">
                  <b-icon icon="account" type="is-primary"></b-icon>
                  <span>{{ owner }}</span>
                </p><br>
                <p class="details-list">
                  <b-icon icon="map-marker" type="is-primary"></b-icon>
                  <span>{{ location }}</span>
                </p><br>
                <p class="details-list">
                  <b-icon icon="clock" type="is-primary"></b-icon>
                  <span>{{ maxDuration }}</span>
                </p>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Book Now</a>
              <a href="#" class="card-footer-item">Chat</a>
            </footer>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "Product",
  components: {
    Navbar
  },
  data() {
    return {
      cost: 10000,
      owner: "Akash",
      location: "Pasir Ris",
      maxDuration: "3 days",
      datePosted: "2018-09-09"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#product-main {
  margin-top: 40px;
}
.details-list {
  display: inline-flex;
  vertical-align: middle;
  break-after: always;
}
.posted {
  margin-left: -5px;
  margin-top: -20px;
  font-size: 0.9rem;
}
</style>
