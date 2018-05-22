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
@import '../assets/scss/main';

</style>
