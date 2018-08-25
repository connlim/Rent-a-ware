<template>
  <section class="hero is-fullheight has-bg-img">
    <div class="hero-head">
      <NavbarTransparent />
    </div>
    <div class="hero-body">
      <div class="container margin-bottom-nav">
        <div class="columns is-fullhd">
          <div class="column is-6 is-offset-2">
            <div class="title has-text-white">
              Rent unique equipment and experiences all over Singapore.
            </div>
          </div>
        </div>
        <div class="columns is-fullhd">
          <div class="column is-8 is-offset-2">
            <div class="subtitle">
              <input type="search" v-model="query" @keyup.enter="redirectToSearch" class="input is-large" placeholder="What would you like to rent today?">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavbarTransparent from '../components/NavbarTransparent.vue'

export default {
  name: 'Landing',
  components: {
    NavbarTransparent
  },
  methods: {
    redirectToSearch: function() {
      if (this.query.length > 0) {
        this.$router.push('/search/' + this.query)
      }
    }
  }
}
</script>

<style scoped>
.margin-bottom-nav {
  margin-bottom: 84px;
}
.has-bg-img { 
  background: linear-gradient(0deg,rgba(70,70,70,0.3),rgba(70, 70, 70, 0.3)), url('../assets/background.jpg') center center; 
  background-size: cover; 
}

</style>
