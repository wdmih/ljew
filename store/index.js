import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    products: [],
    heroSlides: [],
    topCategories: []
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
    }
  },
  getters: {
    getProductBySlug: state => slug => {
      return state.products.find(product => product.slug === slug)
    },
    getNewProducts: state => {
      function  filterByDate(item) {
        let today = new Date()
        let startDate = new Date(today.getTime() - 30*24*60*60*1000)
        let itemDate = Date.parse(item.created_at)
        if (itemDate >= startDate) {
          return true
        }
      }
      let arrByDate = state.products.filter(filterByDate)
      return arrByDate
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
    }
  }
})

export default store