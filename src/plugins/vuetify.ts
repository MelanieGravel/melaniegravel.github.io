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
        primary: '#5C164E',
        secondary: '#2a628f',
        accent: '#F5DF4D',
        info: '#50d8d7',
        success: '#138a36',
        warning: '#e7ca0d',
        error: '#EF2E38',
      },
      dark: {
        primary: '#5C164E',
        secondary: '#2a628f',
        accent: '#F5DF4D',
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
