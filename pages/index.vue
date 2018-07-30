<template>
  <section class="page-container">
    <HeroSlider :slides="heroSlides">
    </HeroSlider>
    <div class="scroll-down-container">
      <a href="#" v-scroll-to="'#element'">
        <i class="icon-angle-double-down"></i>
      </a>
    </div>
    <section id="element" class="top-categories-container padded clearfix">
      <div class="top_categories__item" style="background-image: url('./c1.jpg')">
        <span class="top-categories__title">кольца</span>
      </div>
      <div class="top_categories__item" style="background-image: url('./c2.jpg')">
        <span class="top-categories__title">подвески</span>
      </div>
      <div class="top_categories__item" style="background-image: url('./c3.jpg')">
        <span class="top-categories__title">серьги</span>
      </div>
      <div class="top_categories__item" style="background-image: url('./c4.jpg')">
        <span class="top-categories__title">браслеты</span>
      </div>
    </section>

    <ProductSlider v-if="newProducts.length >= 4" :swiperOptions="productSwiperOption" :products="newProducts">
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
          <button class="button button--promo">смотреть</button>
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
import ProductSlider from '@/components/ProductSlider'
import { mapState } from "vuex"

export default {
  components: {
    HeroSlider,
    ProductSlider
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
      }
    }
  },
  computed: {
    newProducts () {
      return this.$store.getters.getNewProducts
    },
    ...mapState([
      "heroSlides"
    ])
  }
}
</script>

<style lang="scss">
</style>
