<template>
  <view class="tomato-page">
    <view class="timer">{{ formatTime }}</view>
    <button @click="toggleTimer">{{ isRunning ? '暂停' : '开始专注' }}</button>
    <view class="status">{{ statusText }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      timeLeft: 25 * 60, // 初始25分钟
      isRunning: false,
      timer: null,
      isFocus: true // 是否是专注阶段
    }
  },
  computed: {
    formatTime() {
      const min = Math.floor(this.timeLeft / 60)
      const sec = this.timeLeft % 60
      return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
    },
    statusText() {
      return this.isFocus ? '专注中...' : '休息中...'
    }
  },
  methods: {
    toggleTimer() {
      if (this.isRunning) {
        clearInterval(this.timer)
      } else {
        this.timer = setInterval(() => {
          this.timeLeft--
          if (this.timeLeft <= 0) {
            this.finishPhase()
          }
        }, 1000)
      }
      this.isRunning = !this.isRunning
    },
    finishPhase() {
      clearInterval(this.timer)
      this.isRunning = false
      // 播放提醒音
      uni.playVoice({ filePath: '/static/alarm.mp3' })
      // 切换阶段
      this.isFocus = !this.isFocus
      this.timeLeft = this.isFocus ? 25 * 60 : 5 * 60
    }
  },
  onUnload() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
.tomato-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200rpx;
}
.timer {
  font-size: 80rpx;
  margin: 50rpx 0;
}
.status {
  margin-top: 30rpx;
  color: #666;
}
</style>