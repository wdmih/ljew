<template>
  <section class="page-container">

    <HeroSlider
      :slides="heroSlides">
    </HeroSlider>

    <ScrollDown/>

    <section id="element" class="top-categories-container padded clearfix">
      <slot v-if="topCategories">
        <nuxt-link
          tag="div"
          v-for="(categoryItem, index) in topCategories"
          :key="index"
          :to="{ name: 'catalog', params: { category: categoryItem.title}}"
          :style="{ 'background-image': `url('${categoryItem.imageUrl}')`}"
          class="top_categories__item">
          <span class="top-categories__title">{{categoryItem.title}}</span>
        </nuxt-link>
      </slot>
    </section>

    <ProductSlider
      v-if="newProducts.length >= 4"
      :swiperOptions="productSwiperOption"
      :products="newProducts">
      <template slot="containerTitle">Новинки</template>
      <template slot="sliderLink">
        <div class="product-swiper-link">
          <nuxt-link to="/catalog">Все товары</nuxt-link>
        </div>
      </template>
    </ProductSlider>

    <section class="promo-container padded">
      <div class="promo" style="background-image: url(/promo.jpg)">
        <div class="promo-info">
          <h4>подвески на все случаи</h4>
          <nuxt-link
            tag="button"
            class="button button--promo"
            :to="{ name: 'catalog', params: { category: 'подвески'}}">
            <span>смотреть</span>
          </nuxt-link>
        </div>
      </div>
    </section>

    <section class="testimonials-container padded">
      <ul class="testimonials">
        <li class="testimonials-item" v-for="(testimonial, index) in testimonials" :key="index">
          <p>{{testimonial.data}}</p>
          <div class="testimonials-user">
            <span>{{testimonial.author}}</span>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import HeroSlider from '@/components/HeroSlider'
import ScrollDown from '@/components/ScrollDown'
import ProductSlider from '@/components/ProductSlider'

import { mapState } from "vuex"

export default {
  head: {
    title: 'Интернет каталог ювелирных изделий',
    titleTemplate: 'LeSia::%s'
  },
  components: {
    HeroSlider,
    ScrollDown,
    ProductSlider
  },
  data() {
    return {
      productSwiperOption: {
        speed: 750,
        loop: true,
        autoplay: false,
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
      }
    }
  },
  computed: {
    newProducts () {
      return this.$store.getters.getNewProducts
    },
    ...mapState([
      'heroSlides',
      'topCategories',
      'testimonials'
    ])
  }
}
</script>

<style lang="scss">
</style>
