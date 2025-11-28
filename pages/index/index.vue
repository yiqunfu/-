<template>
  <view class="index-page">
    <!-- 顶部信息 -->
    <view class="header">
      <text class="date">{{ today }}</text>
      <text class="todo-count">今日完成：{{ doneCount }}/{{ todoList.length }}</text>
    </view>

    <!-- 待办列表 -->
    <view class="todo-list">
      <view v-if="todoList.length === 0" class="empty-tip">暂无待办，添加一个吧~</view>
      <todo-item 
        v-for="(item, index) in todoList" 
        :key="index" 
        :item="item" 
        @toggleDone="toggleTodoDone(index)"
        @deleteTodo="deleteTodo(index)"
      />
    </view>

    <!-- 添加待办按钮 -->
    <button class="add-btn" @click="addTodo">+ 添加待办</button>

    <!-- 番茄钟快捷入口 -->
    <navigator url="/pages/tomato/tomato" class="tomato-entry">
      <text>📅 开始专注</text>
    </navigator>
  </view>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
import { getStorage, setStorage } from '@/utils/storage'

export default {
  components: { TodoItem },
  data() {
    return {
      today: '',
      todoList: []
    }
  },
  computed: {
    doneCount() {
      return this.todoList.filter(item => item.done).length
    }
  },
  onLoad() {
    // 初始化日期
    this.today = new Date().toLocaleDateString()
    // 读取待办数据
    this.todoList = getStorage('TODO')
  },
  methods: {
    // 添加待办
    addTodo() {
      const content = uni.prompt({ title: '添加待办', placeholderText: '输入待办内容' })
      if (content) {
        this.todoList.unshift({
          content: content,
          done: false,
          priority: '中'
        })
        setStorage('TODO', this.todoList)
      }
    },
    // 切换待办完成状态
    toggleTodoDone(index) {
      this.todoList[index].done = !this.todoList[index].done
      setStorage('TODO', this.todoList)
    },
    // 删除待办
    deleteTodo(index) {
      this.todoList.splice(index, 1)
      setStorage('TODO', this.todoList)
    }
  }
}
</script>

<style scoped>
.index-page {
  padding: 20rpx;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20rpx;
}
.todo-list {
  margin: 20rpx 0;
}
.empty-tip {
  color: #999;
  text-align: center;
  padding: 40rpx;
}
.add-btn {
  background: #42b983;
  color: white;
  border-radius: 50rpx;
}
.tomato-entry {
  display: block;
  text-align: center;
  margin-top: 20rpx;
  color: #42b983;
}
</style>