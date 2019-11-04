<template>
  <div class="mw-publish">
    <el-input
      v-model="textarea"
      class="mw-publish-textarea"
      type="textarea"
      :rows="6"
      resize="none"
      maxlength="80"
      show-word-limit
      placeholder="我要发声:"
    />
    <el-button type="primary" round @click="addMessage">&nbsp;提 交&nbsp;</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import formatedate from '@/utils/formatedate'
export default {
  data() {
    return {
      textarea: ''
    }
  },
  computed: {
    ...mapState({
      user: state => state.user,
      messages: state => state.messages
    })
  },
  methods: {
    addMessage() {
      const { user, textarea } = this
      if (!textarea) {
        this.$message({
          message: '内容不能为空',
          center: true,
          type: 'warning',
          customClass: 'warn-message'
        })
        return
      }
      const time = formatedate(Date.now())
      const message = {
        user,
        content: textarea.trim(),
        time,
        likes: []
      }
      this.$store.dispatch('addMessage', message)
      this.textarea = ''
    }
  }
}
</script>

<style scoped>
.mw-publish {
  padding: 15px;
}
.mw-publish-textarea {
  width: 300px;
  margin-left: 30%;
  margin-right: 20px;
}
@media (max-width: 1125px) {
  .mw-publish-textarea {
    margin-left: 25%;
  }
}
</style>
