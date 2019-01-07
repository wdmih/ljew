<template>
  <div class="hero-container">
    <div class="hero-container-inner" v-swiper:heroSwiper="heroSwiperOption">
      <div class="hero-slider swiper-wrapper">
        <div class="hero-slider__item swiper-slide" v-for="(slide, index) in slides" :key="index" :style="{ 'background-image': 'url(' + slide.slideUrl + ')' }">

        </div>
      </div>
      <div class="hero-swiper-pagination"></div>
      <div class="swiper-button hero-swiper-button-prev" >
        <i class="icon-angle-left"></i>
      </div>
      <div class="swiper-button hero-swiper-button-next">
        <i class="icon-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        heroSwiperOption: {
          speed: 750,
          effect: 'fade',
          loop: true,
          pagination: {
            el: '.hero-swiper-pagination',
            clickable: true,
            modifierClass: 'swiper-pagination-custom-'
          },
          navigation: {
            nextEl: '.hero-swiper-button-next',
            prevEl: '.hero-swiper-button-prev'
          }
        }
      }
    }
  }

</script>

<style>


</style>
