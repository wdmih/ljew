<template>
  <div id="app">
    <AppHeader/>
    <nuxt/>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '@/components/TheHeader'
import AppFooter from '@/components/TheFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>


<style lang="scss">
@import '../assets/scss/fonts';
@import '../assets/scss/vars';

// ####
// COMMON
// ####
*,
*:before,
*:after {
  box-sizing: border-box;
}
html {
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
  color: $c_main-black;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  width: 1366px;
  margin: 0 auto;
}
#__nuxt,
#__layout,
#app {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
</style>
