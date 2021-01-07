<template>
  <v-container>
    <v-card>
      <v-card-title>When can I go out in Bogotá?</v-card-title>
      <v-card-subtitle>Pico y Placa PLUS Confinement</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="3">
            <v-switch
              v-model="isPlacaOdd"
              :label="'Car Plate : ' + getLabelOdd(isPlacaOdd)"
              color="orange"
            ></v-switch>
            <v-switch
              v-model="isDinOdd"
              :label="'DIN : ' + getLabelOdd(isDinOdd)"
              color="red"
            ></v-switch>
          </v-col>
          <v-col cols="9">
            <v-row justify="space-between">
              <v-col>
                <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center text-center">
                <p class="align-self-center mb-0">
                  {{ monthLabel }}
                </p>
              </v-col>
              <v-col class="text-right">
                <v-btn icon class="ma-2" @click="moveNextMonth()">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-sheet height="550px">
              <v-calendar
                ref="calendar"
                v-model="valueCalendar"
                type="month"
                :events="events"
                event-overlap-mode="column"
                event-overlap-threshold="30"
                :event-color="getEventColor"
                @change="getEvents"
              ></v-calendar>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
// Picu Placa
// EVEN Plate -/- ODD DATES
// ODD Plate -/- EVEN DATES
// Monday to Friday

// Confinement ID
// EVEN ID - ODD DATES
// ODD ID - EVEN DATES
// 7 days

import { Component, Vue, Watch } from 'vue-property-decorator';
import dayjs, { Dayjs } from 'dayjs';

@Component({})
export default class OptimizationLandingPage extends Vue {
  private events: any[] = [];
  private valueCalendar: Date = new Date();
  private isPlacaOdd: boolean = true;
  private isDinOdd: boolean = true;

  private get monthLabel(): string {
    return dayjs(this.valueCalendar).format('MMMM YYYY');
  }

  @Watch('isPlacaOdd')
  private checkPlacaChange() {
    this.getEvents();
  }

  @Watch('isDinOdd')
  private checkDinChange() {
    this.getEvents();
  }

  private mounted() {
    this.valueCalendar = dayjs().startOf('month').toDate();
  }

  private getEvents() {
    this.events = [];
    this.events = [...this.getPicuPlaca(), ...this.getDIN()];
  }

  private getPicuPlaca() {
    const events: any[] = [];

    const listDate: Dayjs[] = [];
    const startDate: Dayjs = dayjs(this.valueCalendar).startOf('month');
    const endDate: Dayjs = dayjs(this.valueCalendar)
      .endOf('month')
      .subtract(1, 'day');
    let currentDate: Dayjs = startDate;

    while (currentDate.isBefore(endDate.add(1, 'day'))) {
      if (currentDate.day() !== 0 && currentDate.day() !== 6) {
        if (
          (this.isPlacaOdd && currentDate.date() % 2 === 1) ||
          (!this.isPlacaOdd && currentDate.date() % 2 === 0)
        ) {
          listDate.push(currentDate);
        }
      }
      currentDate = currentDate.add(1, 'day');
    }

    listDate.forEach((dateItem) => {
      events.push({
        name: 'P&P Day',
        start: dateItem.toDate(),
        color: 'orange',
        timed: false,
      });
    });

    return events;
  }

  private getDIN() {
    const events: any[] = [];

    const listDate: Dayjs[] = [];
    const startDate: Dayjs = dayjs(this.valueCalendar).startOf('month');
    const endDate: Dayjs = dayjs(this.valueCalendar)
      .endOf('month')
      .subtract(1, 'day');
    let currentDate: Dayjs = startDate;

    while (currentDate.isBefore(endDate.add(1, 'day'))) {
      if (
        (this.isDinOdd && currentDate.date() % 2 === 1) ||
        (!this.isDinOdd && currentDate.date() % 2 === 0)
      ) {
        listDate.push(currentDate);
      }
      currentDate = currentDate.add(1, 'day');
    }

    listDate.forEach((dateItem) => {
      events.push({
        name: 'DIN Day',
        start: dateItem.toDate(),
        color: 'red',
        timed: false,
      });
    });

    return events;
  }

  private getEventColor(event: any) {
    return event.color;
  }

  private getLabelOdd(isOdd: boolean) {
    return isOdd ? 'Odd' : 'Even';
  }

  private moveNextMonth(): void {
    const oldMonth = this.valueCalendar.getMonth();
    (this.$refs.calendar as Vue & { next: () => void }).next();
    if (this.valueCalendar.getMonth() === oldMonth) {
      this.valueCalendar = dayjs(this.valueCalendar!)
        .add(1, 'month')
        .startOf('month')
        .toDate();
    }
    this.getEvents();
  }
}
</script>

<style lang="scss"></style>
