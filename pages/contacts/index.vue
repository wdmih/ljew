<template>
  <section class="page-container">
    <div class="contacts-image"></div>
    <div class="page-title text-center">
      <h3>{{page.title}}</h3>
    </div>
    <div class="contacts-info padded">
      <p>
        <span class="contacts-title">Адрес:</span><br/>
        61025 г. Харьков, просп. Неизвестный, 50
      </p>
      <p>
        <span class="contacts-title">Телефоны:</span>
        <ul>
          <li>+38(099)123 45 67</li>
          <li>+38(099)123 45 67</li>
        </ul>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  head ()  {
    return {
      title: this.page.title,
      titleTemplate: 'LeSia::%s'
    }
  },
  data () {
    return {
      page: {
        title: 'Контакты'
      }
    }
  }
}
</script>

<style>

</style>
