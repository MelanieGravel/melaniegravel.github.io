import { HPWandCore, HPWandFlex } from './enums';

interface iHPWandWood {
  material: string;
  bonus: string;
}

interface iHPWand {
  wandMaker: string;
  wood: iHPWandWood;
  core: HPWandCore;
  length: number;
  flex: HPWandFlex;
  bonus: string[];
}

export { iHPWandWood };

export default iHPWand;
