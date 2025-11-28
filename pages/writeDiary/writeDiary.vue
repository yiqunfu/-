<template>
  <view class="write-diary-page">
    <!-- 内容输入 -->
    <textarea 
      v-model="diary.content" 
      placeholder="今天发生了什么？"
      class="content-input"
    ></textarea>
    
    <!-- 图片上传 -->
    <view class="img-upload">
      <button @click="chooseImage">+ 上传图片</button>
      <image 
        v-for="(img, index) in diary.images" 
        :key="index" 
        :src="img" 
        class="preview-img"
      ></image>
    </view>

    <!-- 标签选择 -->
    <view class="tag-select">
      <text 
        v-for="tag in tags" 
        :key="tag"
        :class="{ active: diary.tag === tag }"
        @click="diary.tag = tag"
      >{{ tag }}</text>
    </view>

    <!-- 保存按钮 -->
    <button class="save-btn" @click="saveDiary">保存日记</button>
  </view>
</template>

<script>
import { getStorage, setStorage } from '@/utils/storage'

export default {
  data() {
    return {
      diary: {
        content: '',
        images: [],
        tag: '日常',
        date: new Date().toLocaleDateString()
      },
      tags: ['开心', '疲惫', '学习', '日常', 'emo']
    }
  },
  methods: {
    // 选择图片
    chooseImage() {
      uni.chooseImage({
        count: 3, // 最多选3张
        success: (res) => {
          this.diary.images = this.diary.images.concat(res.tempFilePaths)
        }
      })
    },
    // 保存日记
    saveDiary() {
      if (!this.diary.content.trim()) {
        uni.showToast({ title: '内容不能为空哦~', icon: 'none' })
        return
      }
      
      // 读取已有日记，添加新日记
      const diaryList = getStorage('DIARY')
      diaryList.unshift(this.diary)
      setStorage('DIARY', diaryList)
      
      // 跳转回日记列表
      uni.navigateBack()
      uni.showToast({ title: '保存成功！' })
    }
  }
}
</script>

<style scoped>
.write-diary-page {
  padding: 20rpx;
}
.content-input {
  width: 100%;
  height: 300rpx;
  border: 1px solid #eee;
  padding: 15rpx;
  margin-bottom: 20rpx;
}
.img-upload {
  margin: 20rpx 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15rpx;
}
.preview-img {
  width: 150rpx;
  height: 150rpx;
  object-fit: cover;
}
.tag-select {
  margin: 20rpx 0;
  display: flex;
  gap: 15rpx;
  flex-wrap: wrap;
}
.tag-select text {
  padding: 8rpx 20rpx;
  background: #f5f5f5;
  border-radius: 20rpx;
}
.tag-select text.active {
  background: #42b983;
  color: white;
}
.save-btn {
  background: #42b983;
  color: white;
  border-radius: 50rpx;
}
</style>