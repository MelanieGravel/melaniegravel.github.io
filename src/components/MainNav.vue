<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <v-icon>fas fa-alicorn</v-icon>
      <v-app-bar-title class="ml-3">Melanie Gravel</v-app-bar-title>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      icon
      color="primary lighten-5"
      href="https://www.linkedin.com/in/melanie-gravel/"
    >
      <v-icon x-small>fa-linkedin</v-icon>
    </v-btn>

    <v-btn
      icon
      color="primary lighten-5"
    >
      <v-icon x-small>fa-file-pdf</v-icon>
    </v-btn>
  </v-app-bar>

</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainNav extends Vue {
}

</script>

<style lang="scss"></style>
