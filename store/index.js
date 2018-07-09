import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    products: [],
    heroSlides: []
  },

  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    SET_SLIDES (state, heroSlides) {
      state.heroSlides = heroSlides
    }
  },
  getters: {
    getProductBySlug: state => slug => {
      return state.products.find(product => product.slug === slug)
    }
  },
  actions: {
    async nuxtServerInit ({commit}){
      const productsRes = await this.$storyapi.get('cdn/stories', {
        version: 'draft',  // only for development
        starts_with: 'catalog/'
      })
      commit ('SET_PRODUCTS', productsRes.data.stories)

      const heroSliderRes = await this.$storyapi.get('cdn/stories', {
        version: 'draft', // only for dev. getting not only published items
        starts_with: 'home-slider/'
      })
      commit('SET_SLIDES', heroSliderRes.data.stories.map(slide => {
        return {
          slideUrl: slide.content.image,
          slideAlt: slide.slug
        }
      }))

    // --- RESERVED CODE FOR FUTURE --- //
      // return this.$storyapi.get('cdn/stories', {
      //   version: 'draft',  // only for development
      //   starts_with: 'catalog/'
      // }).then((res) => {
      //   commit('SET_PRODUCTS', res.data.stories)
      // })
    }
  }
})

export default store