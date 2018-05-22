<template>
  <header class="header">
    <nuxt-link to="/" class="logo">
      <h1>LeSia</h1>
      <span class="sub-logo">your presious style</span>
    </nuxt-link>
    <nav class="main-nav">
      <ul>
        <li><nuxt-link to="/catalog">каталог</nuxt-link></li>
        <li><nuxt-link to="/about">о нас</nuxt-link></li>
        <li><nuxt-link to="/contacts">контакты</nuxt-link></li>
      </ul>
      <div class="main-search">
        <button class="icon-search"></button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
