<template>
  <section class="page-container">
    <div class="page-title text-center">
      <h3>{{page.title}}</h3>
    </div>
    <div class="filter-container text-center">
      <span class="filter-title">фильтр:</span>
      <select v-model="selectedFilter">
        <option value="Все">All</option>
        <option value="Кольца">Category - a</option>
      </select>
      <!-- <dropdown :title="'Категория:'" :options="categoriesArr" @updateDdValue="selectedFilter[0] = $event"></dropdown>
      <dropdown :title="'Металл:'" :options="metalsArr" @updateDdValue="selectedFilter[1] = $event"></dropdown>
      <dropdown :title="'Вставки:'" :options="addsArr" @updateDdValue="selectedFilter[2] = $event"></dropdown> -->
    </div>
    <div class="products-container offset padded">
      <Product
        class="product-container--catalog"
        v-for="(product, index) in filteredProducts"
        :key="index"
        :src="product.content.ImageCatalog"
        :slug="product.slug"
        :title="product.content.Title"
        :code="product.content.Code">
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
  data() {
    return {
      page: {
        title: 'Каталог'
      },
      categoriesArr: ['Все', 'Кольца', 'Серьги', 'Браслеты'],
      metalsArr: ['Все', 'Золото', 'Серебро'],
      addsArr: ['Все', 'Без вставок', 'Фианиты', 'Стекло'],
      selectedFilter: ''
    }
  },
  computed: {
    ...mapState(['products']),

    filteredProducts() {
      let products = this.products

      if (this.selectedFilter && this.selectedFilter.toLowerCase() !== 'все') {
        products = products.filter((p) => {
          return p.content.TypeOfProduct.toLowerCase() === this.selectedFilter.toLowerCase()
        })
      }
      return products
    }
  }
}
</script>

<style>
</style>
