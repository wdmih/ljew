<template>
  <article class="product-container">
    <img :src="src" :alt="slug">
      <div class="product-detail">
        <h3>{{title}}</h3>
        <span class="product-code">Артикул: {{id}}</span>
        <button class="btn-detail">Детали</button>
      </div>
  </article>
</template>

<script>
export default {
  name: 'product',
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
