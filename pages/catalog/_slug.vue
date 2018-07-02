<template>
  <section class="page-container">
    <section class="page-title page-title--detail text-center">
      <h3>{{product.content.Title}}. Артикул {{product.content.Code}}</h3>
    </section>
    <section class="product-detail-container padded">
      <div class="product-detail-img">
        <img :src="product.content.ImageMain" :alt="product.slug">
      </div>
      <div class="product-detail-info">
        <p>{{product.content.Description}}</p>
        <button class="button button--order">Заказать</button>
        <span class="product-detail-props-title">Характеристики:</span>
        <table class="product-detail-props">
          <tbody>
            <tr v-if="property.value" v-for="(property, index) in properties" :key="index">
              <td>{{property.name}}</td>
              <td>{{property.value}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <ProductSlider
      :swiperOptions="productSwiperOption"
      :products="products">
      <template slot="containerTitle">Похожие товары</template>
    </ProductSlider>
  </section>
</template>

<script>
import ProductSlider from '@/components/ProductSlider'

import {mapState} from 'vuex'

export default {
  components: {
    ProductSlider
  },
  async asyncData({app, params, error}) {
    try {
      let productRes = await app.$storyapi.get('cdn/stories/catalog/' + params.slug, {
      version: 'draft'
      })
      return {
      product: productRes.data.story
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Страница не найдена' })
    }
  },
  data() {
    return {
      productSwiperOption: {
        speed: 750,
        loop: true,
        autoplay: true,
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: '.product-swiper-pagination',
          clickable: true,
          modifierClass: 'swiper-pagination-custom-'
        },
        navigation: {
          nextEl: '.product-swiper-button-next',
          prevEl: '.product-swiper-button-prev'
        }
      }
    }
  },
  computed: {
    properties () {
      return [
        {
          name: 'Размер',
          value: this.product.content.Size
        },
        {
          name: 'Материал вставки',
          value: this.product.content.GemMaterial
        },
        {
          name: 'Для кого',
          value: this.product.content.Gender
        },
        {
          name: 'Тип замка',
          value: this.product.content.LockType
        },
        {
          name: 'Метал',
          value: this.product.content.Metal
        },
        {
          name: 'Цвет метала',
          value: this.product.content.MetalColor
        },
        {
          name: 'Проба',
          value: this.product.content.Probe
        },
        {
          name: 'Вес, г',
          value: this.product.content.Weight
        },
      ]
    },
    ...mapState([
      'products'
    ])
  }
}
</script>

<style lang="scss">

</style>
