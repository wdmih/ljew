<template>
  <header id="header">
    <div class="container">
      <nuxt-link to="/" id="logo" title="Lesia’s jewelry">Lesia’s jewelry</nuxt-link>
      <div class="right-links">
        <ul>
          <li v-for="(item, index) in menuLinks" :key="index">
            <nuxt-link :to="{path: item.url}">{{item.title}}</nuxt-link></li>
        </ul>
      </div>
    </div>
    <!-- / container -->
  </header>
</template>

<script>
export default {
  data () {
    return {
      menuLinks: [
        { title: 'новая коллекция', url: '/products' },
        { title: 'каталог', url: '/products' },
        { title: 'серьги', url: '/products' },
        { title: 'кольца', url: '/products' }
      ]
    }
  }
}
</script>

<style>

</style>
