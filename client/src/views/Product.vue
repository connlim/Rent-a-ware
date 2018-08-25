<template>
  <div>
    <Navbar></Navbar>
    <div class="container is-widescreen" style="margin-top: 72px;">
      <div class="columns">
        <div class="column is-8">
          <div class="card">
            <header class="card-content">
              <p class="title">{{ware.name}}</p>
            </header>
            <div class="card-image">
              <figure class="image is-5by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                {{ware.description}}
              </div>
            </div>
          </div>
          <br>
          <div class="card">
            <br>
            <full-calendar :events="events" :config="config" @event-selected="eventSelected"></full-calendar>
          </div>
        </div>

        <div class="column is-4">
          <div class="card" style="position: fixed; width: 29vw">
            <header class="card-header">
              <p class="card-header-title">Details</p>
            </header>
            <div class="card-content">
              <div class="content">
                <p class="details-list">
                  <b-icon icon="currency-usd" type="is-primary"></b-icon>
                  <span>{{ ware.price }}</span>
                </p><br>
                <p class="details-list">
                  <b-icon icon="account" type="is-primary"></b-icon>
                  <span>{{ ware.seller.username }}</span>
                </p><br>
                <p v-if="ware.location" class="details-list">
                  <b-icon icon="map-marker" type="is-primary"></b-icon>
                  <span>{{ ware.location }}</span>
                </p><br>
                <a class="button is-primary is-outlined is-fullwidth">
                  <strong>Chat</strong>
                </a>

                <hr style="height: 1px; background-color: #EBEBEB; " />

                <div style="margin-bottom: 10px;">
                  <input label="Start" id="" class="input datetime-picker" type="text" placeholder="Start Datetime" />
                </div>
                <div>
                  <input id="" class="input datetime-picker" type="text" placeholder="End Datetime" />
                </div>

                <a style="margin-top: 15px;" class="button is-primary is-medium is-fullwidth">
                  <strong style="font-size: 16px">Book</strong>
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
import Navbar from "../components/Navbar.vue";
import flatpickr from 'flatpickr'
import api from '../data/api.js'

export default {
  name: "Product",
  components: {
    Navbar
  },
  methods: {
    eventSelected: function(event, jsEvent, view) {
      window.alert('click!')
    },
    getProductData: function() {
      let that = this;
      api.findWareById(this.$route.params.id)
        .then(function(res) {
          that.ware = res;
          console.log(res);
        })
    }
  },
  created() {
    flatpickr('.datetime-picker', {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        altInput: true,
        altFormat: "F j, Y H:i K"
    });

    this.getProductData();
  },
  data: function() {
    return {
      ware: {
        name: 'GC',
        price: 10000,
        seller: {username: "Akash"},
        location: "Pasir Ris",
        description: 'The quick brown fox jumps over the lazy dog'
      },
      config: {
        editable: false,
        defaultView: 'month'
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
