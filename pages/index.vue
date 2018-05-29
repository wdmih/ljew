<template>
  <section class="page-container">
    <div class="hero-container">
      <agile class="hero-slider" :options="options">
        <div class="hero-slider__item">
          <img src="/3.jpg" width="1306" height="539" alt="#">
        </div>
        <div class="hero-slider__item">
          <img src="/2.jpg" width="1306" height="539" alt="#">
        </div>
      </agile>
    </div>
    <div class="scroll-down-container">
      <a href="#"><i class="icon-angle-double-down"></i></a>
    </div>
    <div class="top-categories-container padded">
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
    </div>
  </section>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      options: {
        arrows: true,
        dots: true,
        infinite: true,
        timing: 'ease-in-out',
        speed: 900,
        autoplay: false,
        prevArrow: '<i class="icon-angle-left"></i>',
        nextArrow: '<i class="icon-angle-right"></i>'
      }
    }
  }
}
</script>

<style lang="scss">

</style>
