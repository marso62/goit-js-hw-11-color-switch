'use strict';

import refs from './refs';
import colors from './colors';

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default {
  colorId: false,

  start() {
    if (this.colorId) {
      return;
    }
    this.colorId = true;
    this.colorId = setInterval(() => {
      refs.body.style = `background-color: ${
        colors[randomIntegerFromInterval(0, colors.length - 1)]
      }`;
    }, 1000);
  },

  stop() {
    clearInterval(this.colorId);
    this.colorId = false;
  },
};
