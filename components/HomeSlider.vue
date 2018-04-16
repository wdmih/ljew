<template>
  <div id="slider">
    <carousel :perPage="1" :autoplay="true" :autoplayHoverPause="true" paginationActiveColor="#fff" paginationColor="transparent" paginationSize="13">
      <slide v-for="(item, index) in slides" :key="index" :style="item.style">
        <h3>{{item.subtitle}}</h3>
        <h2>{{item.title}}</h2>
        <nuxt-link :to="{path: item.url}" class="btn-more">Read more</nuxt-link>
      </slide>
    </carousel>
  </div>
</template>

<script>
  export default {
    components: {

    },
    data () {
      return {
        slides: [{
          style: 'background-image: url(images/0.jpg)',
          title: 'Genuine diamonds',
          subtitle: 'Make your life better',
          url: '#'

        },
        {
          style: 'background-image: url(images/01.jpg)',
          title: 'Engagement ring',
          subtitle: 'She will say “yes”',
          url: '#'
        },
        {
          style: 'background-image: url(images/02.jpg)',
          title: 'Golden bracelets',
          subtitle: 'You deserve to be beauty',
          url: '#'
        }]
      }
    }
  }
</script>

<style>
</style>