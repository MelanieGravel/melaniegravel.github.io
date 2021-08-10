/* eslint-disable no-shadow */
import { iHPSchool, iHPSchoolHouse } from './school';
import {
  HPHealthPoolType,
  HPLineage,
} from './enums';
import iHPWand from './wand';

interface iHPStat {
  name: string,
  value: number;
  expertise: string[];
}

interface iHPHealthPool {
  type: HPHealthPoolType,
  penalty: number;
}

interface iHPPet {
  name: string;
  specie: string;
}

interface iHPArtefact {
  name: string;
  bonus: string;
}

interface iHPCharacter {
  name: string;
  age: number;
  lineage: HPLineage;
  profession: string;
  school: iHPSchool;
  schoolHouse: iHPSchoolHouse;
  schoolYear: number;
  schoolComplete?: boolean;
  imagesURL: string[];
  attributes: iHPStat[];
  wand: iHPWand;
  pets: iHPPet[];
  artefacts: iHPArtefact[];
  skills: iHPStat[];
  health: iHPHealthPool[];
  storyPoints: number;
}

export {
  iHPArtefact,
  iHPHealthPool,
  iHPPet,
  iHPStat,
};

export default iHPCharacter;
