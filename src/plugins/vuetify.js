import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
    values: {},
  },
  theme: {
    dark: false,
    default: "light",
    disable: false,
    options: { customProperties: true },
    themes: {
      light: {
        background: "##272727",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#56B280",
        warning: "#F3B31C",
        grey: "#7C8087",
        orange: "#B490E8",
        dark: "#1D293F",
        lightgrey: "#E1E1E1",
      },
      dark: {
        background: "##272727",
        secondary: "#424242",
        accent: "#FF4081",
        error: "#FF5252",
        info: "#2196F3",
        success: "#56B280",
        warning: "#FB8C00",
        grey: "#7C8087",
        orange: "#B490E8",
        dark: "#1D293F",
        lightgrey: "#E1E1E1",
      },
    },
  },
});

