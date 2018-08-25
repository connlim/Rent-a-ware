<template>
  <nav id="navbar" class="navbar has-shadow is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img style="max-height: 36px" src="../assets/logo_strong.png">
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true">aaa</span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/about">
          <a style="color: rgb(72, 72, 72)" class="navbar-item">
            About
          </a>
        </router-link>
        <router-link to="/help">
          <a style="color: rgb(72, 72, 72)" class="navbar-item">
            Help
          </a>
        </router-link>
        <div style="display: flex; align-items: center; margin-left: 1em">
          <input v-model="query" @keyup.enter="redirectToSearch" style="width: 30rem;" class="input is-rounded" placeholder="Search">
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <router-link style="color: rgb(72, 72, 72)" to="/new">
                <a class="button is-primary">
                  <strong>New Listing</strong>
                </a>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    redirectToSearch: function() {
      if (this.query.length > 0) {
        this.$router.push('/search/' + this.query)
      }
    }
  },
  data() {
    return {
      query: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
