<template>
  <transition name="fade">
    <div v-if="isActive" class="modal-container" v-click-outside="closeModal">
      <div class="modal-deco"></div>
      <div class="modal-info">
        <h3>Связь с продавцом</h3>
        <span @click="closeModal" class="close-icon"></span>
        <form class="modal-form" action="#">
        <div class="modal-input modal-col">
          <label for="name">Ваше имя:</label>
          <input name="name" id="name" type="text" placeholder="Анна" required v-model="emailReqContent.clientName" v-focus>
        </div>
        <div class="modal-input modal-col">
          <label for="phone">Ваш телефон:</label>
          <input name="phone" id="phone" type="text" placeholder="099 123 45 67" v-model="emailReqContent.clientPhone" required>
          <p class="sub">Для того чтобы продавец мог с Вами связаться</p>
        </div>
        <div class="modal-input modal-row modal-row--margin">
          <label for="comment">Комментарии:</label>
          <textarea name="comment" id="comment" placeholder="Ваш комментарий" v-model="emailReqContent.clientComment"></textarea>
        </div>
        <div class="modal-input modal-row">
          <button class="button button--submit" @click.prevent="sendEmail" type="submit">Отправить запрос</button>
        </div>
      </form>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    isActive: {
      type: Boolean,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      emailReqContent: {
        clientName: '',
        clientPhone: '',
        clientComment: '',
        productName: this.product.content.Title,
        productArticle: this.product.content.Code,
        productPhoto: this.product.content.ImageMain
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal', false)
    },
    async sendEmail() {
      let data = this.emailReqContent
      await axios.post('/api/email', data).then(function (res) {
        console.log(res)
      })
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
