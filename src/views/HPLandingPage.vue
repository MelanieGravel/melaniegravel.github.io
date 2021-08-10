<template>
  <v-container>
    <v-app-bar
      flat
      color="rgba(0, 0, 0, 0)"
    >
      <v-toolbar-title class="text-subtitle-1 white--text pl-0">
        Tests
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch
        v-model="jsonMode"
        :label="`JSON MODE: ${jsonMode.toString()}`"
      ></v-switch>
    </v-app-bar>
    <pre v-if="jsonMode">
      <pre>{{character}}</pre>
    </pre>
    <h-p-character-sheet v-else :character="character"></h-p-character-sheet>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import iHPCharacter from '../store/harry-potter-ttrpg/models/character';
import iHPWand from '../store/harry-potter-ttrpg/models/wand';
import { HPHealthPoolType, HPLineage, HPWandCore, HPWandFlex } from '../store/harry-potter-ttrpg/models/enums';
import { iHPSchool } from '../store/harry-potter-ttrpg/models/school';
import HPCharacterSheet from '../components/hpttrpg/HPCharacterSheet.vue';

@Component({
  components: {
    HPCharacterSheet,
  },
})
export default class HPLandingPage extends Vue {
  private jsonMode: boolean = false;

  private character!: iHPCharacter;

  protected created(): void {
    const wand: iHPWand = {
      wandMaker: 'Ollivander',
      wood: {
        material: 'Oak',
        bonus: '',
      },
      core: HPWandCore.DRAGON_HEARTSTRING,
      length: 13,
      flex: HPWandFlex.BRITTLE,
      bonus: [],
    };

    const hogwarts: iHPSchool = {
      name: 'Hogwarts',
      houses: [
        {
          name: 'Gryffindor',
        },
        {
          name: 'Hufflepuff',
        },
        {
          name: 'Ravenclaw',
        },
        {
          name: 'Slytherin',
        },
      ],
    };

    this.character = {
      name: 'Arden Elderberry',
      age: 12,
      lineage: HPLineage.MUGGLE_BORN,
      profession: 'School Student',
      school: hogwarts,
      schoolHouse: hogwarts.houses[2],
      schoolYear: 0,
      schoolComplete: false,
      imagesURL: [
        './img/arden_elderberry.png',
      ],
      attributes: [],
      wand,
      pets: [],
      artefacts: [],
      skills: [],
      health: [
        {
          type: HPHealthPoolType.BODY,
          penalty: 0,
        },
        {
          type: HPHealthPoolType.MIND,
          penalty: 0,
        },
      ],
      storyPoints: 0,
    };
  }

  // // Local Variables
  //
  // private title: string = 'HPLandingPage';
  //
  // // Public Functions
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
  // // Getters
  //
  // // Watches
  //
  // @Watch('title')
  // private onCurrentValueChanged(): void {
  //   this.emitValue();
  // }
}
</script>

<style lang="scss" scoped>

</style>
