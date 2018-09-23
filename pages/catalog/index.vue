<template>
  <section class="page-container">
    <div class="text-center">{{isSearch}}</div>
    <div class="page-title text-center">
      <h3>{{page.title}}</h3>
    </div>
    <div class="filter-container text-center">
      <span class="filter-title">фильтр:</span>
      <div class="filter-container-inner">
        <dropdown :title="'Категория:'" :routeParam="this.$route.params.category" :options="categoriesArr" @updateSelected="selectedFilter.TypeOfProduct = $event"></dropdown>
        <dropdown :title="'Металл:'" :options="metalsArr" @updateSelected="selectedFilter.Metal = $event"></dropdown>
        <dropdown :title="'Вставки:'" :options="addsArr" @updateSelected="selectedFilter.GemMaterial = $event"></dropdown>
      </div>
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
      <div class="product-container--no-product" v-if="filteredProducts.length <= 0">НЕТ ТОВАРОВ</div>
    </div>
  </section>
</template>

<script>
import Product from '@/components/Product'
import Dropdown from '@/components/Dropdown'

import { mapState } from 'vuex'

export default {
  head ()  {
    return {
      title: this.page.title,
      titleTemplate: 'LeSia::%s'
    }
  },
  components: {
    Product,
    Dropdown
  },
  props: [
    'isSearch'
  ],
  data() {
    return {
      page: {
        title: 'Каталог'
      },
      categoriesArr: ['Все', 'кольца', 'Серьги', 'Браслеты', 'Цепочки', 'Подвески'],
      metalsArr: ['Все', 'Золото', 'Серебро', 'Другое'],
      addsArr: ['Все', 'Без вставок', 'Фианиты', 'Стекло', 'Жемчуг'],
      selectedFilter: {
        TypeOfProduct: 'Все',
        Metal: 'Все',
        GemMaterial: 'Все'
      }
    }
  },
  computed: {
    ...mapState(['products']),

    filteredProducts () {
      let products = this.products
      let filter = {}

      for (var key in this.selectedFilter) {
        if (this.selectedFilter[key].toLowerCase() !== 'все') {
          filter[key] = this.selectedFilter[key].toLowerCase()
        }
      }
      let filterKeys = Object.keys(filter)
      return products.filter((item) => {
        return filterKeys.every(key => !!~filter[key].indexOf(item.content[key]))
      })
    }
  },
  mounted () {
    if (this.$route.params.category) {
      this.selectedFilter.TypeOfProduct = this.$route.params.category
    }
  }
}
</script>

<style>
</style>
