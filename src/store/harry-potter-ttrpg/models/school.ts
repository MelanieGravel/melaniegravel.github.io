interface iHPSchoolHouse {
  name: string;
}

interface iHPSchool {
  name: string,
  houses: iHPSchoolHouse[],
}

export {
  iHPSchool,
  iHPSchoolHouse,
};
