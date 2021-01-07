<template>
  <v-container>
    <v-card>
      <v-card-title>When can I go out in Bogotá?</v-card-title>
      <v-card-subtitle>PICU PLACA and CONFINEMENT</v-card-subtitle>
      <v-card-text>
        <v-calendar
          ref="calendar"
          v-model="value"
          type="month"
          :events="events"
          @change="getEvents"
        ></v-calendar>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
// Picu Placa
// EVEN Plate - ODD DATES
// ODD Plate - EVEN DATES
// Monday to Friday

// Confinement ID
// EVEN ID - ODD DATES
// ODD ID - EVEN DATES
// 7 days

import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class OptimizationLandingPage extends Vue {
  private events: any[] = [];

  private getEvents() {}
}
</script>

<style lang="scss"></style>
