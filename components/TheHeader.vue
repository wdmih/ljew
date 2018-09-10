<template>
  <header class="header">
    <Hamburger @click.native="isVisible = !isVisible" :isActive="isVisible" v-click-outside="close"/>
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
        <button @click="isSearchVisible = !isSearchVisible" class="icon-search"></button>
      </div>
    </nav>
    </transition>
    <Search @closeSearch="isSearchVisible = $event" :isActive="isSearchVisible"></Search>
  </header>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import Search from '@/components/Search'

export default {
  components: {
    Hamburger,
    Search
  },
  data() {
    return {
      isVisible: false,
      isSearchVisible: false
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
