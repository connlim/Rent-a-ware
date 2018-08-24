<template>
  <div class="">
    <Navbar></Navbar>
    <div id="product-main" class="container is-widescreen">
      <div class="columns">

        <div class="column is-8">
          <div class="card">
            <header class="card-content">
              <p class="title">TITLE</p>
            </header>
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
          <br>
          <div class="card">
            <br>
            <full-calendar :events="events"></full-calendar>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Details</p>
            </header>
            <div class="card-content">
              <div class="content">
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

                <input id="datetime-picker" class="input" type="text" placeholder="Start Date">
                <div style="text-align: center; padding-top: 5px; padding-bottom: 5px;">
                  <b-icon icon="arrow-down"></b-icon>
                </div>
                <input id="datetime-picker" class="input" type="text" placeholder="End Date">

                <a style="margin-bottom: 10px; margin-top: 10px;" class="button is-primary is-fullwidth">
                  <strong>Book</strong>
                </a>
                <a class="button is-primary is-outlined is-fullwidth">
                  <strong>Chat</strong>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import flatpickr from 'flatpickr'

export default {
  name: "Product",
  components: {
    Navbar
  },
  mounted: function() {
    flatpickr('#datetime-picker', {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        altInput: true,
        altFormat: "F j, Y H:i K"
    });
  },
  data: function() {
    return {
      cost: 10000,
      owner: "Akash",
      location: "Pasir Ris",
      maxDuration: "3 days",
      datePosted: "2018-09-09",
      config: {
        contentHeight: 410
      },
      events: [
        {
            title  : 'event1',
            start  : '2018-08-01',
        },
        {
            title  : 'event2',
            start  : '2018-08-05',
            end    : '2018-08-07',
        },
        {
            title  : 'event3',
            start  : '2018-08-09T12:30:00',
            allDay : false,
        },
      ]
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
