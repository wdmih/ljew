<template>
  <article class="product-container">
    <nuxt-link :to="'/catalog/' + slug">
      <img :src="src" :alt="slug">
      <div class="product-detail product-detail-overlay">
        <div class="product-detail-info">
          <h3>{{title}}</h3>
          <span class="product-code">Артикул: {{code}}</span>
        </div>
      </div>
    </nuxt-link>
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
    code: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>
