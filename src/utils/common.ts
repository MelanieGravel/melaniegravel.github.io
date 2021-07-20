export const getBrowserLanguage = (): string => {
  const nav: any = navigator;
  if (nav.languages && nav.languages.length) {
    return nav.languages[0];
  }
  return nav.userLanguage || nav.language || nav.browserLanguage || 'en';
};

export const getBrowserLanguageShort = (): string => getBrowserLanguage().substr(0, 2);
