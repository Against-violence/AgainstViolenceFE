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
      textarea: '',
      user: {
        id: 'user_0000001',
        name: 'Jack',
        avatar:
          'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  },
  computed: {
    ...mapState({
      // user: state => state.user,
      messages: state => state.mw.messages
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
      this.$store.dispatch('mw/addMessage', message)
      this.textarea = ''
    }
  }
}
</script>

<style scoped>
.mw-publish {
  padding: 15px;
  font-size: 0;
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
