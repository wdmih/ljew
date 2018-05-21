<template>
  <footer class="footer">
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
    </nav>
  </footer>
</template>

<style lang="scss">
@import '../assets/scss/vars';

  .footer {
    height: 110px;
    display: flex;
    background: $c_main-black;
    color: #fff;
    padding: 0 20px 0 60px;
    justify-content: space-between;
    flex: 0 0 auto;

    .main-nav {
      ul {
        margin-right: 105px;
      }
    }
  }
</style>
