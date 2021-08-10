<template>
  <v-card v-if="character">
    <v-img
      height="200px"
      :src="houseURL"
    >
      <v-app-bar
        flat
        color="rgba(0, 0, 0, 0)"
      >
        <v-toolbar-title class="text-subtitle-1 white--text pl-0">
          Character
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
          color="white"
          icon
        >
          <v-icon>fas fa-ellipsis-v</v-icon>
        </v-btn>
      </v-app-bar>
      <v-card-title class="white--text">
        <v-avatar v-if="character.imagesURL.length > 0" size="100">
          <v-img
            alt="Image of the character"
            :src="character.imagesURL[0]"
          />
        </v-avatar>
        <p class="mt-2 ml-3 text-h3">
          {{ character.name }}
        </p>
      </v-card-title>
    </v-img>
    <v-card-text>
      <v-row>
        <v-col cols="8">
          <p>Age: {{ character.age }}</p>
          <p>Lineage: {{ character.lineage }}</p>
          <p>Profession: {{ character.profession }}</p>
        </v-col>
        <v-col cols="4">
          <p>School: {{ character.school.name }}</p>
          <p>House: {{ character.schoolHouse.name }}</p>
          <p>Year: {{ character.schoolYear }}</p>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h4">Skills</h2>
        </v-col>
        <v-col>
          <h2 class="text-body-1">WIP</h2>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="8">
          <h2 class="text-h4">Health</h2>
          <p>
            {{ character.health[0].type }} Penalty: {{ character.health[0].penalty }}
          </p>
          <p>
            {{ character.health[1].type }} Penalty: {{ character.health[1].penalty }}
          </p>
        </v-col>
        <v-col cols="4">
          <h2 class="text-h4">Story Points</h2>
          <p class="text-h1">{{ character.storyPoints }}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import iHPCharacter from '../../store/harry-potter-ttrpg/models/character';

@Component({})
export default class HPCharacterSheet extends Vue {
  // Properties
  @Prop({
    required: true,
  })
  public character!: iHPCharacter;

  // Local Variables

  // Public Functions
  //
  // @Emit('onChange')
  // public emitValue(): any {
  //   console.log('emit', this.title);
  //   return this.title;
  // }
  //
  // // Private Functions
  //
  // private created(): void {
  //   // console.log(title, ' has been created.');
  // }
  //
  // Getters

  public get houseURL(): string {
    switch (this.character.schoolHouse.name) {
      case 'Hufflepuff':
        return 'https://www.wizardingworld.com/assets/_next/static/images/bg@2x-27ad05d44122271b70cb2a9d411353ed.jpg';
      case 'Slytherin':
        return 'https://www.wizardingworld.com/assets/_next/static/images/bg@2x-c7a6029dd9d784a003b339dc4d70cf38.jpg';
      case 'Gryffindor':
        return 'https://www.wizardingworld.com/assets/_next/static/images/bg@2x-ec096b1a2f3d8c9bcb6a53d00dbd1278.jpg';
      case 'Ravenclaw':
        return 'https://www.wizardingworld.com/assets/_next/static/images/bg@2x-00f8faaef0632712d0fe4100e233aa8e.jpg';
      default:
        return '';
    }
  }

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
