import Vue from 'vue'
import VueMq from 'vue-mq'

if (process.BROWSER_BUILD) {
  Vue.use(VueMq, {
    breakpoints: {
      phone: 481,
      tabletPortrait: 769,
      tabletLandscape: 993,
      desktop: Infinity
    }
  })
}