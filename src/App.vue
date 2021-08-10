<template>
  <v-app>
    <main-nav></main-nav>
    <v-main class="temp__top">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import MainNav from './components/MainNav.vue';

@Component({
  components: {
    MainNav,
  },
})
export default class App extends Vue {
}

</script>

<style lang="scss">
.temp__top{
  margin-top: 224px;
}
</style>
