<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  onLaunch() {
    // 应用启动时执行（初始化操作）
    console.log('「轻记」应用启动')
    // 可选：初始化本地存储（防止首次运行数据为undefined）
    const todoList = uni.getStorageSync('light_note_todo')
    const diaryList = uni.getStorageSync('light_note_diary')
    if (!todoList) uni.setStorageSync('light_note_todo', JSON.stringify([]))
    if (!diaryList) uni.setStorageSync('light_note_diary', JSON.stringify([]))
  },
  onShow() {
    // 应用从后台切换到前台时执行
  },
  onHide() {
    // 应用切换到后台时执行
  }
}
</script>

<style>
/* 全局样式：清除默认边距、设置基础字体 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body, page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background-color: #F8F8F8;
}
</style>
