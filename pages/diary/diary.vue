<template>
  <view class="diary-page">
    <!-- 标签筛选 -->
    <view class="tag-filter">
      <text 
        v-for="tag in allTags" 
        :key="tag"
        :class="{ active: currentTag === tag }"
        @click="currentTag = tag"
      >{{ tag }}</text>
      <text 
        :class="{ active: currentTag === '全部' }"
        @click="currentTag = '全部'"
      >全部</text>
    </view>

    <!-- 日记列表 -->
    <view class="diary-list">
      <view v-if="filteredDiary.length === 0" class="empty-tip">暂无日记，写点什么吧~</view>
      <diary-card 
        v-for="(item, index) in filteredDiary" 
        :key="index" 
        :diary="item"
      />
    </view>

    <!-- 添加日记按钮 -->
    <navigator url="/pages/writeDiary/writeDiary" class="add-diary-btn">+ 写日记</navigator>
  </view>
</template>

<script>
import DiaryCard from '@/components/DiaryCard.vue'
import { getStorage } from '@/utils/storage'

export default {
  components: { DiaryCard },
  data() {
    return {
      diaryList: [],
      currentTag: '全部',
      allTags: ['开心', '疲惫', '学习', '日常', 'emo']
    }
  },
  computed: {
    filteredDiary() {
      if (this.currentTag === '全部') {
        return this.diaryList
      }
      return this.diaryList.filter(item => item.tag === this.currentTag)
    }
  },
  onShow() {
    // 每次回到页面重新读取日记
    this.diaryList = getStorage('DIARY')
  }
}
</script>

<style scoped>
.diary-page {
  padding: 20rpx;
}
.tag-filter {
  display: flex;
  gap: 15rpx;
  flex-wrap: wrap;
  margin-bottom: 20rpx;
}
.tag-filter text {
  padding: 8rpx 20rpx;
  background: #f5f5f5;
  border-radius: 20rpx;
}
.tag-filter text.active {
  background: #42b983;
  color: white;
}
.diary-list {
  margin: 20rpx 0;
}
.empty-tip {
  color: #999;
  text-align: center;
  padding: 40rpx;
}
.add-diary-btn {
  position: fixed;
  bottom: 30rpx;
  right: 30rpx;
  width: 80rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  background: #42b983;
  color: white;
  border-radius: 50%;
  font-size: 40rpx;
}
</style>