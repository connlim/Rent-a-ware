<template>
  <nav class="navbar is-transparent is-spaced">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <router-link to="/"><img style="max-height: 36px" src="../assets/logo_strong.png"></router-link>
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="has-text-white" to="/about">
          <a class="navbar-item has-text-white">
            About
          </a>
        </router-link>
        <router-link class="has-text-white" to="/help">
          <a class="navbar-item has-text-white">
            Help
          </a>
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary is-inverted is-outlined" href="">
                <span>Register</span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary">
                <strong>Sign In</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarTransparent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
