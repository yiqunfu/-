// 存储键名统一管理
const KEYS = {
  TODO: 'light_note_todo',
  DIARY: 'light_note_diary',
  TOMATO: 'light_note_tomato'
}

// 获取数据
export const getStorage = (key) => {
  const data = uni.getStorageSync(KEYS[key])
  return data ? JSON.parse(data) : []
}

// 保存数据
export const setStorage = (key, data) => {
  uni.setStorageSync(KEYS[key], JSON.stringify(data))
}