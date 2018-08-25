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
        <a class="navbar-item" href="about">
          About
        </a>
        <a class="navbar-item" href="help">
          Help
        </a>
        <b-field style="display: flex; align-items: center; margin-left: 1em">
          <b-input style="width: 30rem" icon="magnify" placeholder="Search" rounded></b-input>
        </b-field>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary">
                <strong>New Listing</strong>
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
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
