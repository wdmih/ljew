import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    phone: 480,
    tabletPortrait: 768,
    tabletLandscape: 992,
    desktop: Infinity
  }
})