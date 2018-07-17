<template>
  <div
    :class="{active: isActive}"
    class="hamburger">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: [
    'isActive'
  ]
}
</script>

<style>

</style>
