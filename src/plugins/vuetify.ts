import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#7209B7',
        secondary: '#3F37C9',
        accent: '#b5179e',
        info: '#50d8d7',
        success: '#138a36',
        warning: '#e7ca0d',
        error: '#EF2E38',
      },
      dark: {
        primary: '#7209B7',
        secondary: '#3F37C9',
        accent: '#b5179e',
        info: '#50d8d7',
        success: '#138a36',
        warning: '#e7ca0d',
        error: '#EF2E38',
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
