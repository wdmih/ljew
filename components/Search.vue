<template>
  <transition name="fade">
    <div v-if="isActive" class="search-container" v-click-outside="closeSearch">
      <div class="search-input-container">
        <input v-model="searchQuery" type="text" placeholder="поиск" v-focus>
      </div>
      <div v-show="filteredList" class="search-result-container">
        <ul v-if="filteredList.length != 0" class="search-result">
          <li class="search-result-item" v-for="(product, index) in filteredList" :key='index' @click="closeSearch">
            <nuxt-link :to="'/catalog/' + product.slug" class="search-result-item-inner">
              <div class="search-result-item-image">
                <img :src="product.content.ImageCatalog" :alt="product.slug">
              </div>
              <div class="search-result-item-info">
                <h3>{{product.content.Title}}</h3>
                <span class="product-code">Артикул: {{product.content.Code}}</span>
              </div>
            </nuxt-link>
          </li>
        </ul>
        <div v-else class="text-center"><span>Нет результов</span></div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex"

export default {
  props: {
    isActive: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      searchQuery: null
    }
  },
  computed: {
    filteredList() {
      if (this.searchQuery && isNaN(this.searchQuery) == false) {
        return this.products.filter(product => {
          return product.content.Code.toLowerCase().includes(this.searchQuery.toLowerCase())
        })
      } else if (this.searchQuery) {
        return this.products.filter(product => {
          return product.content.Title.toLowerCase().includes(this.searchQuery.toLowerCase())
        })
      } else {
        return false
      }
    },
    ...mapState([
      'products'
    ])
  },
  methods: {
    closeSearch() {
      this.$emit('closeSearch', false)
      this.searchQuery = null
      this.$store.commit('SET_OVERLAY', false)
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style>

</style>
