<template>
  <section class="page-container">
    <div class="page-title text-center">
      <h3>{{page.title}}</h3>
    </div>
    <div class="filter-container text-center">
      <span class="filter-title">фильтр:</span>
      <dropdown :title="'Категория:'" :options="categoriesArr"></dropdown>
      <dropdown :title="'Металл:'" :options="metalsArr"></dropdown>
      <dropdown :title="'Вставки:'" :options="addsArr"></dropdown>
    </div>
    <div class="products-container offset padded">
      <Product
        v-for="(product, index) in products"
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

// import { mapState } from 'vuex'

export default {
  components: {
    Product,
    Dropdown
  },
  async asyncData (context) {
    let productsRes = await context.app.$storyapi.get('cdn/stories', {
      version: 'draft',  // only for development
      starts_with: 'catalog/'
    })
    return {
      products: productsRes.data.stories
    }
  },
  // computed: mapState(['products']),
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
}
</script>

<style>
</style>
