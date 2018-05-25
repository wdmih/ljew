<template>
  <section class="page-container text-center">
    <div class="page-title">
      <h3>каталог</h3>
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
      categoriesArr:[
        'Все',
        'Кольца',
        'Серьги',
        'Браслеты'
      ],
      metalsArr : [
        'Все',
        'Золото',
        'Серебро'
      ],
      addsArr: [
        'Все',
        'Без вставок',
        'Фианиты',
        'Стекло'
      ]
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
