<template>
  <section class="page-container">
    <HeroSlider
      :slides="heroSlides">
    </HeroSlider>

    <ScrollDown/>

    <section id="element" class="top-categories-container padded clearfix">
      <nuxt-link
        v-if="topCategories"
        tag="div"
        v-for="(categoryItem, index) in topCategories"
        :key="index"
        :to="{ name: 'catalog', params: { category: categoryItem.title}}"
        :style="{ 'background-image': `url('${categoryItem.imageUrl}')`}"
        class="top_categories__item">
          <span class="top-categories__title">{{categoryItem.title}}</span>
      </nuxt-link>
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
        <li class="testimonials-item">
          <p>Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого. Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти минуты. Когда от милой моей долины поднимается пар и полдневное солнце стоит над непроницаемой чащей темного.</p>
          <div class="testimonials-user">
            <span>Светлана Ю.</span>
          </div>
        </li>
        <li class="testimonials-item">
          <p>Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца.</p>
          <div class="testimonials-user">
            <span>Светлана Ю.</span>
          </div>
        </li>
        <li class="testimonials-item">
          <p>Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого. Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти минуты. Когда от милой моей долины поднимается пар и полдневное солнце стоит над непроницаемой чащей темного.</p>
          <div class="testimonials-user">
            <span>Светлана Ю.</span>
          </div>
        </li>
        <li class="testimonials-item">
          <p>Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого. Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти минуты. Когда от милой моей долины поднимается пар и полдневное солнце стоит над непроницаемой чащей темного.</p>
          <div class="testimonials-user">
            <span>Светлана Ю.</span>
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
      'topCategories'
    ])
  }
}
</script>

<style lang="scss">
</style>
