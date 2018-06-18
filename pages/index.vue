<template>
  <section class="page-container">
    <HeroSlider/>
    <div class="scroll-down-container">
      <a href="#">
        <i class="icon-angle-double-down"></i>
      </a>
    </div>
    <section class="top-categories-container padded">
      <div class="top_categories__item" style="background-image: url('./c1.jpg')">
        <span class="top-categories__title">кольца</span>
      </div>
      <div class="top_categories__item" style="background-image: url('./c2.jpg')">
        <span class="top-categories__title">кольца</span>
      </div>
      <div class="top-categories__l2">
        <div class="top_categories__item" style="background-image: url('./c3.jpg')">
          <span class="top-categories__title">кольца</span>
        </div>
        <div class="top_categories__item" style="background-image: url('./c4.jpg')">
          <span class="top-categories__title">кольца</span>
        </div>
      </div>
    </section>
    <section class="products-container products-container--home padded">
      <div class="section-title-container">
        <span class="section-title">Новинки</span>
      </div>
      <div class="product-slider-container">
          <div class="product-slider-outer" v-swiper:productSwiper="productSwiperOption">
            <div class="product-slider swiper-wrapper">
              <Product
                class="swiper-slide"
                v-for="(product, index) in products" :key="index"
                :src="product.content.image"
                :slug="product.slug"
                :title="product.name"
                :id="product.id">
              </Product>
            </div>
          </div>
          <div class="product-slider-controls">
            <div class="swiper-button product-swiper-button-prev" >
              <i class="icon-angle-left"></i>
            </div>
            <div class="swiper-button product-swiper-button-next">
              <i class="icon-angle-right"></i>
            </div>
            <div class="product-swiper-pagination"></div>
            <div class="product-swiper-link">
              <nuxt-link to="/catalog">Все товары</nuxt-link>
            </div>
          </div>
      </div>
    </section>
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
          <div class="testimonials-user"><span>Светлана Ю.</span></div>
        </li>
        <li class="testimonials-item">
          <p>Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца.</p>
          <div class="testimonials-user"><span>Светлана Ю.</span></div>
        </li>
        <li class="testimonials-item">
          <p>Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого. Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти минуты. Когда от милой моей долины поднимается пар и полдневное солнце стоит над непроницаемой чащей темного.</p>
          <div class="testimonials-user"><span>Светлана Ю.</span></div>
        </li>
        <li class="testimonials-item">
          <p>Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого. Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти минуты. Когда от милой моей долины поднимается пар и полдневное солнце стоит над непроницаемой чащей темного.</p>
          <div class="testimonials-user"><span>Светлана Ю.</span></div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import HeroSlider from '@/components/HeroSlider'
import Product from '@/components/Product'

import { mapState } from 'vuex'

export default {
  components: {
    HeroSlider,
    Product
  },
  computed: mapState(['products']),
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
  }
}
</script>

<style lang="scss">

</style>
