<template>
  <div class="mw-container">
    <MwSearch @get-search-result="getSearchResult" />
    <MwList :search-result="searchResult" />
    <MwPublish />
  </div>
</template>

<script>
import MwSearch from './mw-search'
import MwList from './mw-list'
import MwPublish from './mw-publish'
import './overwrite.css'
export default {
  components: {
    MwSearch,
    MwList,
    MwPublish
  },
  data() {
    return {
      searchResult: {
        input: '',
        messages: []
      } // 搜索的结果对象
    }
  },
  mounted() {
    this.$store.dispatch('getMessages')
  },
  methods: {
    getSearchResult({ input, messages }) {
      this.$store.dispatch('resetStart')
      this.searchResult = { input, messages }
    }
  }
}
</script>

<style scoped>
.mw-container {
  width: 65%;
  min-width: 635px;
  margin: 0 auto;
  padding: 15px;
  margin-top: 20px;
}
</style>
