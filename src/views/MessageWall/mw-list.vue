<template>
  <div class="mw-list">
    <p class="list-title">说出你的故事，用曝光拒绝暴力</p>
    <el-card class="box-card">
      <div v-for="(message, index) in messageList" :key="index" class="mw-item clearfix">
        <mw-item :message="message" />
      </div>
      <!-- 遮罩层 -->
      <div class="mask" />
    </el-card>
    <div class="mw-side-btn">
      <el-button
        icon="el-icon-arrow-up"
        class="up-btn"
        circle
        @mousedown.native="mousedown('up')"
        @mousemove.native="mousemove"
        @mouseup.native="mouseup('up')"
      />
      <el-button
        icon="el-icon-arrow-down"
        class="down-btn"
        circle
        @mousedown.native="mousedown('down')"
        @mousemove.native="mousemove"
        @mouseup.native="mouseup('down')"
      />
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import MwItem from './mw-item'
export default {
  components: {
    MwItem
  },
  props: {
    searchResult: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hold: false, // 按钮是否长按
      timeoutEvent: 0, // timeout定时器id
      timer: null // 长按触发的interval定时器id
    }
  },
  computed: {
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
    ...mapState({
      // user: state => state.user,
      messages: state => state.messages,
      start: state => state.start
    }),
    messagesLength() {
      // 原消息数组或搜索结果数组的长度
      return this.input
        ? this.searchResult.messages.length
        : this.messages.length
    },
    messageList() {
      // 用于渲染的数组片段
      const {
        start,
        searchResult: { input, messages }
      } = this
      if (input) {
        return messages.slice(start, start + 6)
      }
      return this.messages.slice(start, start + 6)
    }
  },
  methods: {
    warnMessage: _.throttle(function(message) {
      return this.$message({
        message,
        center: true,
        type: 'warning',
        customClass: 'warn-message'
      })
    }, 1000),
    // mousedown|mousemove|mouseup组合实现鼠标长按和点击效果
    mousedown(arrow) {
      this.hold = false
      this.timeoutEvent = setTimeout(() => {
        if (arrow === 'up') {
          this.timer = setInterval(() => {
            if (this.start === 0) {
              this.warnMessage('已到达顶部')
              clearInterval(this.timer)
              return
            }
            this.decreaseStart()
          }, 50)
        } else if (arrow === 'down') {
          this.timer = setInterval(() => {
            if (this.start > this.messagesLength - 7) {
              this.warnMessage('已到达底部')
              clearInterval(this.timer)
              return
            }
            this.increaseStart()
          }, 50)
        }

        this.hold = true
      }, 500)
    },
    mousemove() {
      clearTimeout(this.timeoutEvent)
      this.timeoutEvent = 0
    },
    mouseup(arrow) {
      clearTimeout(this.timeoutEvent)
      clearInterval(this.timer)
      this.timeInterval = null
      if (this.timeoutEvent !== 0 && !this.hold) {
        // 点击事件
        if (arrow === 'up') {
          this.decreaseStart()
        } else if (arrow === 'down') {
          this.increaseStart()
        }
      }
      this.timeoutEvent = 0
    },
    // 移动消息列表
    decreaseStart() {
      if (this.start === 0) {
        this.warnMessage('已到达顶部')
        return
      }
      this.$store.dispatch('decreaseStart')
    },
    increaseStart() {
      if (this.start > this.messagesLength - 7) {
        this.warnMessage('已到达底部')
        return
      }
      this.$store.dispatch('increaseStart')
    }
  }
}
</script>

<style scoped>
.mw-list {
  position: relative;
  margin: 0 auto;
  padding: 15px;
  padding-bottom: 50px;
}
.mw-side-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(238px, -40px);
  margin: 0;
  width: 60px;
  height: 100px;
}
.up-btn {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-20px);
  opacity: 0.5;
}
.down-btn {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-20px);
  margin: 0;
  opacity: 0.5;
}
.list-title {
  font-size: 20px;
  color: #666;
  margin-left: 20%;
  margin-bottom: 40px;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
}
.box-card {
  position: relative;
  box-sizing: border-box;
  height: 380px;
  width: 580px;
  margin: 0 auto;
}
.mw-item {
  font-size: 14px;
  padding: 8px 0;
  border-top: 1px solid #d9d9d9;
}
.mask {
  box-sizing: border-box;
  pointer-events: none;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0 5px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0) 85%,
    rgba(255, 255, 255, 1) 95%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
