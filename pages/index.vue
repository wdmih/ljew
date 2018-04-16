<template>
  <div class="page-container">
    <home-slider/>
    <div id="body">
    <div class="container">
      <div class="last-products">
        <h2>Last added products</h2>
        <carousel class="products" :perPage="5" :navigationEnabled="true" :paginationEnabled="false">
          <slide v-for="(item, index) in lastProducts" :key="index">
            <img :src="item.productImgUrl" :alt="item.productTitle">
            <h3>{{item.productTitle}}</h3>
            <h4>{{item.productPrice}}</h4>
            <nuxt-link :to="item.productUrl" class="btn-add">подробнее</nuxt-link>
          </slide>
        </carousel>
      </div>
      <section class="quick-links">
        <article style="background-image: url(images/2.jpg)">
          <a href="#" class="table">
            <div class="cell">
              <div class="text">
                <h4>Lorem ipsum</h4>
                <hr>
                <h3>Dolor sit amet</h3>
              </div>
            </div>
          </a>
        </article>
        <article class="red" style="background-image: url(images/3.jpg)">
          <a href="#" class="table">
            <div class="cell">
              <div class="text">
                <h4>consequatur</h4>
                <hr>
                <h3>voluptatem</h3>
                <hr>
                <p>Accusantium</p>
              </div>
            </div>
          </a>
        </article>
        <article style="background-image: url(images/4.jpg)">
          <a href="#" class="table">
            <div class="cell">
              <div class="text">
                <h4>culpa qui officia</h4>
                <hr>
                <h3>magnam aliquam</h3>
              </div>
            </div>
          </a>
        </article>
      </section>
    </div>
    <!-- / container -->
  </div>
  </div>
</template>

<script>
import HomeSlider from '~/components/HomeSlider'

export default {

  components: {
    HomeSlider
  },
  data () {
    return {
      lastProducts: [
        {
          productImgUrl: 'images/1.jpg',
          productTitle: 'Excepteur sint occaecat',
          productPrice: '$1 850.00',
          productUrl: 'cart.html'
        },
        {
          productImgUrl: 'images/1.jpg',
          productTitle: 'Excepteur sint occaecat',
          productPrice: '$1 850.00',
          productUrl: 'cart.html'
        },
        {
          productImgUrl: 'images/1.jpg',
          productTitle: 'Excepteur sint occaecat',
          productPrice: '$1 850.00',
          productUrl: 'cart.html'
        },
        {
          productImgUrl: 'images/1.jpg',
          productTitle: 'Excepteur sint occaecat',
          productPrice: '$1 850.00',
          productUrl: 'cart.html'
        },
        {
          productImgUrl: 'images/1.jpg',
          productTitle: 'Excepteur sint occaecat',
          productPrice: '$1 850.00',
          productUrl: 'cart.html'
        },
        {
          productImgUrl: 'images/1.jpg',
          productTitle: 'Excepteur sint occaecat',
          productPrice: '$1 850.00',
          productUrl: 'cart.html'
        },
        {
          productImgUrl: 'images/1.jpg',
          productTitle: 'Excepteur sint occaecat',
          productPrice: '$1 850.00',
          productUrl: 'cart.html'
        },
        {
          productImgUrl: 'images/1.jpg',
          productTitle: 'Excepteur sint occaecat',
          productPrice: '$1 850.00',
          productUrl: 'cart.html'
        },
        {
          productImgUrl: 'images/1.jpg',
          productTitle: 'Excepteur sint occaecat',
          productPrice: '$1 850.00',
          productUrl: 'cart.html'
        }
      ]
    }
  }
}
</script>

<style>

</style>
