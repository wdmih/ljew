<template>
  <section class="products-container products-container--home padded">
    <div class="section-title-container">
      <span class="section-title">
        <slot name="containerTitle"></slot>
      </span>
    </div>
    <div class="product-slider-container">
      <div class="product-slider-outer" v-swiper:productSwiper="swiperOptions">
        <div class="product-slider swiper-wrapper">
          <Product
            class="swiper-slide"
            v-for="(product, index) in products"
            :key="index"
            :src="product.content.ImageCatalog"
            :slug="product.slug"
            :title="product.content.Title"
            :code="product.content.Code">
          </Product>
        </div>
      </div>
      <div class="product-slider-controls">
        <div class="swiper-button product-swiper-button-prev">
          <i class="icon-angle-left"></i>
        </div>
        <div class="swiper-button product-swiper-button-next">
          <i class="icon-angle-right"></i>
        </div>
        <div class="product-swiper-pagination"></div>
        <slot name="sliderLink"></slot>
      </div>
    </div>
  </section>
</template>

<script>
import Product from "@/components/Product"

export default {
  components: {
    Product
  },
  name: "ProductSlider",
  props: {
    swiperOptions: {
      type: Object,
      required: true
    },
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>
