<template>
  <v-app-bar
    class="mg__main-nav"
    absolute
    color="#6A76AB"
    dark
    shrink-on-scroll
    fade-img-on-scroll
    prominent
    src="https://picsum.photos/1920/1080?random"
    scroll-target="#scrolling-techniques-3"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title class="pl-0">
      {{$t('mainInfo.name')}} - <span class="text-body-1">{{$t('mainInfo.title')}}</span>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon to="https://www.linkedin.com/in/melanie-gravel/">
      <v-icon>fa-linkedin</v-icon>
    </v-btn>

    <v-btn icon to="https://github.com/MelanieGravel">
      <v-icon>fa-github</v-icon>
    </v-btn>

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab>{{$t('section.projects')}}</v-tab>
        <v-tab>{{$t('section.skills')}}</v-tab>
        <v-tab>{{$t('section.about')}}</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainNav extends Vue {
  // private openWin() {
  //   const myWindow = window.open('', '', 'width=200,height=100');
  //   if (myWindow) {
  //     myWindow.document.write('<p>This is \'myWindow\'</p>');
  //     myWindow.document.close();
  //     myWindow.focus();
  //     myWindow.print();
  //     myWindow.close();
  //   }
  // }
}

</script>

<style lang="scss">
</style>
