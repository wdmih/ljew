<template>
  <div id="app-container">
    <app-header/>
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '~/components/Header'
import AppFooter from '~/components/Footer'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>

</style>
