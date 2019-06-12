<template>
  <transition name="fade">
    <div v-if="isActive" class="modal-container" v-click-outside="closeModal">
      <div class="modal-info">
        <h3>Связь с продавцом</h3>
        <span @click="closeModal" class="close-icon"></span>
        <div v-if="loading" class="spinner-outer">
          <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        <div v-else-if="emailSent" class="success-outer">
          <h4>Запрос успешно отправлен :)</h4>
          <p>В ближайшее время с вами свяжется менеджер для уточнения информации.</p>
        </div>
        <form v-else class="modal-form" action="#">
        <div class="modal-input modal-col">
          <label for="name">Ваше имя:</label>
          <input name="name" id="name" type="text" placeholder="Анна" required v-model="emailReqContent.clientName" v-focus>
          <span v-show="errors.nameError" class="input-error">Введите имя</span>
        </div>
        <div class="modal-input modal-col">
          <label for="phone">Ваш телефон:</label>
          <input name="phone" id="phone" type="text" placeholder="099 123 45 67" v-model="emailReqContent.clientPhone" required>
          <p class="sub">Для того чтобы продавец мог с Вами связаться</p>
          <span v-show="errors.phoneError" class="input-error">Введите телефон</span>
        </div>
        <div class="modal-input modal-row modal-row--margin">
          <label for="comment">Комментарии:</label>
          <textarea name="comment" id="comment" placeholder="Ваш комментарий" v-model="emailReqContent.clientComment"></textarea>
        </div>
        <div class="modal-input modal-row">
          <button class="button button--submit" @click.prevent="sendEmail" type="submit"><span>Отправить запрос</span></button>
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
      loading: false,
      emailSent: false,
      emailReqContent: {
        clientName: null,
        clientPhone: null,
        clientComment: null,
        productName: this.product.content.Title,
        productArticle: this.product.content.Code,
        productPhoto: this.product.content.ImageMain
      },
      errors: {
        nameError: null,
        phoneError: null
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal', false)
      this.$store.commit('SET_OVERLAY', false)
    },
    checkForm() {
      if(this.emailReqContent.clientName && this.emailReqContent.clientPhone) {
        return true
      }
      this.errors = {
        nameError: null,
        phoneError: null
      }
      if(!this.emailReqContent.clientName) {
        this.errors.nameError = true
      }
      if(!this.emailReqContent.clientPhone) {
        this.errors.phoneError = true
      }
    },
    async sendEmail() {
      let data = this.emailReqContent
      if (this.checkForm()) {
        this.loading = true
        await axios.post('/api/email', data)
        .then((res) => {
          if(res.status = 200){
            this.loading = false
            this.emailSent = true
            console.log(res)
            setTimeout(() => {
              this.emailSent = false
              this.emailReqContent.clientName = null
              this.emailReqContent.clientPhone = null
              this.emailReqContent.clientComment = null
              this.closeModal()
            }, 2000)
          }
        })
        .catch((res)=> {
          console.log(res)
        })
      }
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
