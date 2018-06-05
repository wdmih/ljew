<template>
  <section class="page-container text-center">
    <div class="page-title">
      <h3>{{page.title}}</h3>
    </div>
    <div class="filter-container text-center">
      <span class="filter-title">фильтр:</span>
      <dropdown :title="'Категория:'" :options="categoriesArr"></dropdown>
      <dropdown :title="'Металл:'" :options="metalsArr"></dropdown>
      <dropdown :title="'Вставки:'" :options="addsArr"></dropdown>
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

import { mapState } from 'vuex'

export default {
  components: {
    Product,
    Dropdown
  },
  computed: mapState(['products']),
  data() {
    return {
      page: {
        title: 'Каталог'
      },
      categoriesArr: ['Все', 'Кольца', 'Серьги', 'Браслеты'],
      metalsArr: ['Все', 'Золото', 'Серебро'],
      addsArr: ['Все', 'Без вставок', 'Фианиты', 'Стекло']
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
