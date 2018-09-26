<template>
  <div class="filter-item" v-click-outside="close">
    <div @click="toggleDd()">
      <span class="filter-item__title">{{title}}</span>
      <span class="filter-item__current-option">
        {{selected ? selected : options[0]}}
      </span>
      <i :class="showDd ? 'icon-angle-up' : 'icon-angle-down'"></i>
    </div>
    <transition name="fade">
      <ul class="filter-item__options" v-show="showDd">
        <li v-for="(item, index) in options" :key="index" @click="updateSelected(item)">{{item}}</li>
      </ul>
    </transition>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: [Array, Object],
      required: true
    },
    routeParam: {
      type: String
    }
  },
  data (){
    return {
      showDd: false,
      selected: ''
    }
  },
  methods: {
    updateSelected(item) {
      this.selected = item
      this.showDd = false
      this.$emit('updateSelected', this.selected)
    },
    toggleDd() {
      this.showDd = !this.showDd
    },
    close () {
      this.showDd = false
    }
  },
  mounted () {
    if (this.routeParam) {
      this.selected = this.routeParam
    }
  }
}
</script>

<style lang="scss">

</style>
