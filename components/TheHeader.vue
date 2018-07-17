<template>
  <header class="header">
    <Hamburger @click.native="isVisible = !isVisible" :isActive="isVisible" v-on-clickaway="close"/>
    <nuxt-link to="/" class="logo">
      <h1>LeSia</h1>
      <span class="sub-logo">your presious style</span>
    </nuxt-link>
    <transition name="slide-toggle">
      <nav class="main-nav" v-show="$mq !== 'phone' || isVisible">
      <ul>
        <li><nuxt-link to="/catalog">каталог</nuxt-link></li>
        <li><nuxt-link to="/about">о нас</nuxt-link></li>
        <li><nuxt-link to="/contacts">контакты</nuxt-link></li>
      </ul>
      <div class="main-search">
        <button class="icon-search"></button>
      </div>
    </nav>
    </transition>
  </header>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],
  components: {
    Hamburger
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    close() {
      this.isVisible = false
    }
  }
}
</script>

<style lang="scss">

</style>
