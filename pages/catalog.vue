<template>
  <section class="page-container text-center">
    <div class="page-title">
      <h2>каталог</h2>
    </div>
    <div class="filter-container text-center">

    </div>
    <div class="products-container padded">
      <article v-for="(product, index) in products" :key="index" class="product-container">
        <img :src="product.content.image" alt="product.slug">
        <div class="product-detail">
          <h3>{{product.name}}</h3>
          <span class="product-code">Артикул: {{product.id}}</span>
          <button class="btn-detail">Детали</button>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: 'draft',  // only for development
      starts_with: 'catalog/'
    }).then(res => {
      return {
        products: res.data.stories
      }
    })
  }
}
</script>

<style>

</style>
