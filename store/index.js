import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    products: [],
    heroSlides: [],
    topCategories: [],
    testimonials: [],
    overlayIsShow: false
  },

  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    SET_SLIDES (state, heroSlides) {
      state.heroSlides = heroSlides
    },
    SET_TOP_CATEGORIES (state, topCategories) {
      state.topCategories = topCategories
    },
    SET_TESTIMONIALS (state, testimonials) {
      state.testimonials = testimonials
    },
    SET_OVERLAY (state, overlayIsShow) {
      state.overlayIsShow = overlayIsShow
    }
  },
  getters: {
    getProductBySlug: state => slug => {
      return state.products.find(product => product.slug === slug)
    },
    getNewProducts: state => {
      function  filterByDate(item) {
        let today = new Date()  // get current date
        let startDate = new Date(today.getTime() - 30*24*60*60*1000) // calculate 1 month from current date
        let itemDate = Date.parse(item.created_at) // get product creation date
        if (itemDate >= startDate) {
          return true
        }
      }
      let arrByDate = state.products.filter(filterByDate)
      return arrByDate
    },
    getSimilarProducts: state => product=> {
      function findSimilar(item) {
        if(item.content.TypeOfProduct == product.content.TypeOfProduct && item.id != product.id){
          return true
        }
      }
      let similarProducts = state.products.filter(findSimilar)
      return similarProducts
    }
  },
  actions: {
    async nuxtServerInit ({commit}){
      const productsRes = await this.$storyapi.get('cdn/stories', {
        version: 'draft',
        starts_with: 'catalog/'
      })
      commit ('SET_PRODUCTS', productsRes.data.stories)

      const heroSliderRes = await this.$storyapi.get('cdn/stories', {
        version: 'draft',
        starts_with: 'home-slider/'
      })
      commit('SET_SLIDES', heroSliderRes.data.stories.map(slide => {
        return {
          slideUrl: slide.content.image,
          slideAlt: slide.slug
        }
      }))

      const topCategoriesRes = await this.$storyapi.get('cdn/stories', {
        version: 'draft',
        starts_with: 'top-category/'
      })
      commit('SET_TOP_CATEGORIES', topCategoriesRes.data.stories.map(category => {
        return {
          title: category.content.title,
          imageUrl: category.content.image
        }
      }))

      const testimonialsRes = await this.$storyapi.get('cdn/stories', {
        version: 'draft',
        starts_with: 'testimonials/'
      })
      commit('SET_TESTIMONIALS', testimonialsRes.data.stories.map(testimonial => {
        return {
          author: testimonial.content.author,
          data: testimonial.content.data
        }
      }))
    }
  }
})

export default store