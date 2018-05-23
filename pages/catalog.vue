<template>
  <section class="page-container text-center">
    <div class="page-title">
      <h2>каталог</h2>
    </div>
    <div class="filter-container text-center">
      <dropdown :title="'категории'" :options="options">
      </dropdown>
    </div>
    <div class="products-container padded">
      <Product
        v-for="(product, index) in products"
        :key="index"
        :src="product.content.image"
        :slug="product.slug"
        :title="product.name"
        :id="product.id">
      </Product>
    </div>
  </section>
</template>

<script>
import Product from '@/components/Product'
import Dropdown from '@/components/Dropdown'

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
  },
  components: {
    Product,
    Dropdown
  },
  data() {
    return {
      options:[1,2,3,4,5,6,7]
      }
    }
  // methods: {
  //   methodToRunOnSelect(payload) {
  //     this.object = payload;
  //   }
  // }
}
</script>

<style>

</style>
