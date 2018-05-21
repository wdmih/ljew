<template>
  <h1>catalog</h1>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: 'draft',  // only for development
      starts_with: 'catalog/'
    }).then(res => {
      return {
        products: res.data.stories
      }
    })
  }
}
</script>

<style>

</style>
