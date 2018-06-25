<template>
  <article class="product-container">
    <img :src="src" :alt="slug">
      <div class="product-detail product-detail-overlay">
        <div class="product-detail-info">
          <h3>{{title}}</h3>
          <span class="product-code">Артикул: {{id}}</span>
        </div>
        <nuxt-link tag="button" to="/detail" class="button--detail">Детали</nuxt-link>
      </div>
  </article>
</template>

<script>
export default {
  name: "product",
  props: {
    src: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
</style>
