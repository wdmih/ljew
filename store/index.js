import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    products: []
  },

  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    },
  },

  actions: {
    nuxtServerInit ({commit}){
      return this.$storyapi.get('cdn/stories', {
        version: 'draft',  // only for development
        starts_with: 'catalog/'
      }).then((res) => {
        commit('SET_PRODUCTS', res.data.stories)
      })
    }
  }
})

export default store