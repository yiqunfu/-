<template>
  <view class="diary-card">
    <view class="card-header">
      <text class="date">{{ diary.date }}</text>
      <text class="tag">{{ diary.tag }}</text>
    </view>
    <text class="content">{{ diary.content }}</text>
    <view class="img-list">
      <image 
        v-for="(img, index) in diary.images" 
        :key="index" 
        :src="img" 
        class="diary-img"
      ></image>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    diary: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.diary-card {
  background: #f9f9f9;
  border-radius: 15rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
}
.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10rpx;
}
.date {
  color: #666;
  font-size: 28rpx;
}
.tag {
  padding: 5rpx 15rpx;
  background: #42b983;
  color: white;
  border-radius: 15rpx;
  font-size: 26rpx;
}
.content {
  display: block;
  margin: 10rpx 0;
  line-height: 1.5;
}
.img-list {
  display: flex;
  gap: 10rpx;
  flex-wrap: wrap;
}
.diary-img {
  width: 120rpx;
  height: 120rpx;
  object-fit: cover;
  border-radius: 10rpx;
}
</style>