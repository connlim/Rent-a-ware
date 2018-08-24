<template>
  <div id="app">
    <Landing />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Landing from './components/Landing.vue'
import Messaging from './components/Messaging.vue'
import NewListing from './components/NewListing.vue'
import Profile from './components/Profile.vue'
import Search from './components/Search.vue'

export default {
  name: 'app',
  components: {
    Landing
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
