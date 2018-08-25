<template>
  <div>
    <Navbar></Navbar>
    <div class="container is-fluid is-widescreen" style="margin-top: 72px;">
      <div class="columns is-multiline is-mobile">
        <div class="field column is-6">
          <label class="label">Name</label>
          <div class="control">
            <input v-model="name" class="input" type="text" placeholder="Name">
          </div>
          <br>
          <label class="label">Location (optional)</label>
          <div class="control">
            <input v-model="location" class="input" type="text" placeholder="Location">
          </div>
          <br>
          <label class="label">Tags (separate with commas)</label>
          <div class="control">
            <input v-model="tags" class="input" type="text" placeholder="Tag1,Tag2,Tag3">
          </div>
        </div>
        <div class="field column is-4 is-offset-2">
          <b-field>
            <b-upload v-model="files" drag-drop>
              <section class="section">
                  <div class="content has-text-centered">
                    <p>
                      <b-icon icon="upload" size="is-large"></b-icon>
                    </p>
                    <p>Drop an image here or click to upload</p>
                  </div>
              </section>
            </b-upload>
          </b-field>

          <div v-if="files && files.length" class="tags">
            <span class="tag is-primary" >
                {{files[0].name}}
                <button class="delete is-small" type="button" @click="deleteImageFile()">
                </button>
            </span>
          </div>
        </div>
      </div>
      <div class="columns is-multiline is-mobile">
        <div class="field column is-12">
          <label class="label">Description</label>
          <div class="control">
            <textarea v-model="description" class="textarea" placeholder="Enter a description here" rows=8></textarea>
          </div>
        </div>
      </div>
      <div class="columns is-multiline is-mobile">
        <div class="field column is-4">
          <label class="label">Price</label>
          <div class="control">
            <input v-model="price" class="input" type="number" min="0.01" step="0.01" placeholder="Price (in $)">
          </div>
        </div>
      </div>
      <div class="columns is-multiline is-mobile">
        <div class="field column">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox">
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button @click="submit()" class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button @click="cancel()" class="button is-text">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import api from '../data/api.js'

export default {
  name: "NewListing",
  components: {
    Navbar
  },
  methods: {
    deleteImageFile: function(index) {
      this.files = [];
    },
    submit: function() {
      console.log('File: ' + this.files);
      var formData = new FormData();
      let tags_arr = this.tags.split(',');

      formData.append('name', this.name)
      formData.append('tags', JSON.stringify(tags_arr))
      formData.append('slots', JSON.stringify([]))
      formData.append('location', this.location)
      formData.append('price', this.price)
      formData.append('description', this.description)
      formData.append('image', this.files[0])
      console.log(formData);

      let that = this;
      api.createWare(formData)
        .then(function(res) {
          console.log(res);
        });
    },
    cancel: function() {
      this.$router.push('/');
    }
  },
  created() {
  },
  data() {
    return {
      files: [],
      name: '',
      location: '',
      description: '',
      price: 0,
      tags: ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
