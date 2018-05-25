<template>
  <section class="page-container">
    <div class="hero-container">
      <!-- <div class="hero-dots">

      </div> -->
      <agile class="hero-slider" :options="options">
        <div class="hero-slider__item">
          <img src="/1.jpg" width="1306" height="539" alt="#">
          <div class="slide-item-info">
            <h2 class="skide-item-title">Обручальные кольца</h2>
            <span class="slide-item-tag">новая коллекция</span>
          </div>
        </div>
        <div class="hero-slider__item">
          <img src="/2.jpg" width="1306" height="539" alt="#">
          <div class="slide-item-info">
            <h2 class="skide-item-title">Обручальныеddd кольца</h2>
            <span class="slide-item-tag">новая коллекция</span>
          </div>
        </div>
      </agile>
      <!-- <div class="hero-controls">

      </div> -->
    </div>
    <div class="scroll-down-container">

    </div>
    <div class="top-categories-container">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
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
        arrows: false,
        dots: true,
        infinite: false
      }
    }
  }
}
</script>

<style lang="scss">

.hero-slider {
  width: calc(100% - 60px);
  margin-left: 60px;
  position: relative;

  &__item {
    position: relative;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .agile__dots {
    position: absolute;
    left: -25px;
    top: 50%;
    width: 6px;
    transform: translateY(-50%);
    flex-direction: column;
  }
  .agile__dot {
    margin-bottom: 15px;
  }
}
.slide-item-info {
  position: absolute;
  text-align: right;
  bottom: 0;
  width: 100%;
}

</style>
