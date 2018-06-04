<template>
  <div class="hero-container">
    <div class="hero-container-inner" v-swiper:heroSwiper="heroSwiperOption">
      <div class="hero-slider swiper-wrapper">
        <div class="hero-slider__item swiper-slide">
          <img src="/3.jpg" width="1306" height="539" alt="#">
        </div>
        <div class="hero-slider__item swiper-slide">
          <img src="/2.jpg" width="1306" height="539" alt="#">
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
