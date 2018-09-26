<template>
  <div id="app">
    <AppHeader/>
    <nuxt/>
    <AppFooter/>
    <Overlay v-if="overlayIsShow"/>
  </div>
</template>

<script>
import AppHeader from '@/components/TheHeader'
import AppFooter from '@/components/TheFooter'
import Overlay from '@/components/Overlay'

export default {
  components: {
    AppHeader,
    AppFooter,
    Overlay
  },
  computed: {
    overlayIsShow() {
      return this.$store.state.overlayIsShow
    }
  },
  watch: {
    $route () {
      this.$store.commit('SET_OVERLAY', false)
    }
  },
}
</script>


<style lang="scss">
@import '../assets/scss/main';

</style>
