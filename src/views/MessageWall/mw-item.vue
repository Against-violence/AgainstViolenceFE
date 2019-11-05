<template>
  <div class="item-container">
    <div class="item-avatar">
      <el-avatar :src="message.user.avatar" />
    </div>
    <div class="item-content">
      <div class="con-text">
        <span class="con-username">{{ message.user.name }}</span>
        ：{{ message.content }}
      </div>
      <div class="mw-func clearfix">
        <div :title="isLike ? '取消赞' : '赞'" class="con-handle" @click="handleLike">
          <i class="el-icon-thumb" :class="{islike: isLike}" />
          <i>{{ message.likes && message.likes.length === 0 ? '赞' : message.likes.length }}</i>
        </div>
        <div class="con-time">{{ message.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import _ from 'lodash'
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: {
        id: 'user_0000001',
        name: 'Jack',
        avatar:
          'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  },
  computed: {
    /* ...mapState({
      user: state => state.user
    }) */
    isLike() {
      return this.message.likes.includes(this.user.name)
    }
  },
  methods: {
    ...mapActions('mw', [
      'increaseLikes',
      'decreaseLikes'
    ]), 
    // 处理点赞
    handleLike: _.throttle(function() {
      const likeConfig = {
        messageId: this.message.id,
        username: this.user.name
      }
      if (this.isLike) {
        this.decreaseLikes(likeConfig)
      } else {
        this.increaseLikes(likeConfig)
      }
    }, 1000)
  }
}
</script>

<style scoped>
.mw-item {
  font-size: 14px;
  padding: 8px 0;
  border-top: 1px solid #d9d9d9;
}
.item-avatar {
  float: left;
  width: 40px;
  height: 40px;
}
.item-content {
  margin-left: 50px;
  padding-right: 5px;
}
.con-text {
  word-wrap: break-word;
  padding-bottom: 5px;
}
.con-username {
  white-space: nowrap;
  color: #eb7350;
}
.mw-func .con-handle {
  float: right;
  margin-right: 25px;
  letter-spacing: normal;
  word-spacing: normal;
  cursor: pointer;
  font-size: 0;
}
.con-handle:hover i:nth-child(2) {
  color: #eb7350;
}
.con-handle i {
  font-style: normal;
  font-weight: normal;
  margin-left: 4px;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
}
.con-handle .islike {
  color: #eb7350;
}
</style>
