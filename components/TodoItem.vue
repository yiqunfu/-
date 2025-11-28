<template>
  <view class="todo-item" :class="{ done: item.done }">
    <text class="checkbox" @click="toggleDone">{{ item.done ? '✓' : '□' }}</text>
    <text class="content">{{ item.content }}</text>
    <text class="priority" :style="{ color: priorityColor }">{{ item.priority }}</text>
    <text class="delete" @click="deleteTodo">×</text>
  </view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    priorityColor() {
      switch (this.item.priority) {
        case '高': return 'red';
        case '中': return 'orange';
        case '低': return 'green';
        default: return 'black';
      }
    }
  },
  methods: {
    toggleDone() {
      this.$emit('toggleDone')
    },
    deleteTodo() {
      this.$emit('deleteTodo')
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 15rpx;
  border-bottom: 1px solid #eee;
}
.done .content {
  text-decoration: line-through;
  color: #999;
}
.checkbox {
  width: 40rpx;
  text-align: center;
}
.content {
  flex: 1;
  margin: 0 20rpx;
}
.priority {
  width: 60rpx;
  text-align: center;
}
.delete {
  color: #ff4444;
  font-size: 32rpx;
}
</style>