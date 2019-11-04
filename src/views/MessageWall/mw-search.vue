<template>
  <div class="mw-search">
    <el-input v-model="input" class="mw-search-input" placeholder="#搜索热门话题" />
    <el-button class="mw-search-btn" type="primary" plain round @click="handleSearch">GO</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      input: ''
    }
  },
  computed: {
    ...mapState({
      messages: state => state.messages
    })
  },
  methods: {
    handleSearch() {
      const input = this.input.trim()
      const messages = this.messages.filter(message => {
        return message.content.indexOf(input) !== -1
      })
      this.$emit('get-search-result', { input, messages })
      this.input = ''
    }
  }
}
</script>

<style scoped>
.mw-search {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
}
.mw-search-input {
  width: 150px;
}
.mw-search-btn {
  margin-left: 20px;
  margin-right: 15%;
}
</style>
