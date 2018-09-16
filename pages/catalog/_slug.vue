<template>
  <section class="page-container">
    <section class="page-title page-title--detail text-center">
      <h3>{{product.content.Title}}. Артикул {{product.content.Code}}</h3>
    </section>
    <section class="product-detail-container padded">
      <div class="product-detail-img">
        <img :src="product.content.ImageMain" :alt="product.slug">
      </div>
      <div class="product-detail-descr">
        <p>{{product.content.Description}}</p>
        <button @click="openModalReq" class="button button--order"><span>Заказать</span></button>
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
    <RequestModal @closeModal="isModalVisible = $event" :isActive="isModalVisible" :product="product"></RequestModal>
  </section>
</template>

<script>
import ProductSlider from '@/components/ProductSlider'
import RequestModal from '@/components/RequestModal'

import {mapState} from 'vuex'

export default {
  components: {
    ProductSlider,
    RequestModal
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
        },
        breakpoints: {
          992: {
            slidesPerView: 3
          },
          480: {
            slidesPerView: 2
          }
        }
      },
      isModalVisible: false
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
    product () {
      return this.$store.getters.getProductBySlug(this.$route.params.slug)
    },
    ...mapState([
      'products'
    ])
  },
  methods: {
    openModalReq() {
      this.isModalVisible = true
      this.$store.commit('SET_OVERLAY', this.isModalVisible)
    }
  },
  validate ({ params, store }) {
    // Check if `params.slug` is an existing category
    return store.state.products.some(product => product.slug === params.slug)
  }
}
</script>

<style lang="scss">

</style>
