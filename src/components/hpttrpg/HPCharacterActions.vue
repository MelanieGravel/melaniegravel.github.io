<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="white"
        icon
        v-bind="attrs"
        v-on="on"
      >
          <v-icon>fas fa-ellipsis-v</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-title>Do Something</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class HPCharacterActions extends Vue {
  // Properties
  // @Prop({
  //   required: false,
  //   default: '',
  // })
  // public value!: any;

  // Local Variables

  // Public Functions

  // @Emit('onChange')
  // public emitValue(): any {
  //   console.log('emit', this.title);
  //   return this.title;
  // }

  // Private Functions

  // private created(): void {
  // }

  // Getters

  // Watches
  //
  // @Watch('title')
  // private onCurrentValueChanged(): void {
  //   this.emitValue();
  // }
}
</script>

<style lang="scss" scoped>

</style>
