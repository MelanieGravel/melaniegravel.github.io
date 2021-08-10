/* eslint-disable no-shadow */
enum HPLineage {
  MUGGLE_BORN = 'MUGGLE_BORN',
  HALF_BLOOD = 'HALF_BLOOD',
  PURE_BLOOD = 'PURE_BLOOD',
  MUGGLE = 'MUGGLE',
  OTHER = 'OTHER',
}

enum HPHealthPoolType {
  BODY = 'BODY',
  MIND = 'MIND',
}

// ToDo: List the core types
enum HPWandCore {
  DRAGON_HEARTSTRING = 'DRAGON_HEARTSTRING',
}

// ToDo: List the flex types
enum HPWandFlex {
  BRITTLE = 'BRITTLE',
}

export {
  HPHealthPoolType,
  HPLineage,
  HPWandCore,
  HPWandFlex,
};
