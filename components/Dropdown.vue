<template>
  <div class="filter-item">
    <span class="filter-item__title" @click="toggleDd()">{{title}}</span>
    <span class="filter-item__current-option" @click="toggleDd()">
      {{selected}}
    </span>
    <i :class="showDd ? 'icon-angle-up' : 'icon-angle-down'"></i>
    <ul class="filter-item__options" v-if="showDd">
      <li v-for="(item, index) in options" :key="index" @click="updateSelected(item)">{{item}}</li>
    </ul>
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
    }
  },
  data (){
    return {
      showDd: false,
      selected: ''
    }
  },
  mounted () {
    // this.arrayOptions = options
    // this.selected = this.arrayOptions[0]
  },
  methods: {
    updateSelected(item) {
      this.selected = item
      this.showDd = false
    },
    toggleDd() {
      this.showDd = !this.showDd
    }
  }
}
</script>

<style>

</style>
