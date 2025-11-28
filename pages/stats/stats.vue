<template>
  <view class="stats-page">
    <!-- 待办统计卡片 -->
    <view class="todo-stats-card">
      <text class="card-title">待办完成情况</text>
      <view class="todo-stats-row">
        <view class="stats-item">
          <text class="stats-num">{{ totalTodo }}</text>
          <text class="stats-label">总待办</text>
        </view>
        <view class="stats-item">
          <text class="stats-num done-num">{{ doneTodo }}</text>
          <text class="stats-label">已完成</text>
        </view>
        <view class="stats-item">
          <text class="stats-num">{{ doneRateFormatted }}</text>
          <text class="stats-label">完成率</text>
        </view>
      </view>
    </view>

    <!-- 心情统计切换 -->
    <view class="chart-tabs">
      <text :class="{ active: currentChart === 'pie' }" @click="switchChart('pie')">心情占比（饼图）</text>
      <text :class="{ active: currentChart === 'bar' }" @click="switchChart('bar')">每日心情（柱形图）</text>
      <text :class="{ active: currentChart === 'schedule' }" @click="switchChart('schedule')">心情课表</text>
    </view>

    <!-- 空数据提示 -->
    <view v-if="!hasDiaryData" class="empty-tip">
      <text>暂无日记数据，快去记录你的心情吧～</text>
    </view>

    <!-- 饼图：心情占比 -->
    <view v-else-if="currentChart === 'pie'" class="chart-container">
      <!-- 直接使用组件，无需引入 -->
      <qiun-data-charts 
        type="pie"
        :chartData="pieChartData"
        width="700rpx"
        height="400rpx"
        :opts="pieChartOpts"
      />
    </view>

    <!-- 柱形图：一周每日心情分布 -->
    <view v-else-if="currentChart === 'bar'" class="chart-container">
      <!-- 直接使用组件，无需引入 -->
      <qiun-data-charts 
        type="column"
        :chartData="barChartData"
        width="700rpx"
        height="400rpx"
        :opts="barChartOpts"
      />
    </view>

    <!-- 课表式心情：模拟一周7天网格 -->
    <view v-else-if="currentChart === 'schedule'" class="schedule-container">
      <!-- 星期表头 -->
      <view class="schedule-header">
        <text class="weekday" v-for="weekday in weekdays" :key="weekday">{{ weekday }}</text>
      </view>
      <!-- 心情网格（模拟3个时段：早/中/晚） -->
      <view class="schedule-grid">
        <view v-for="(day, dayIdx) in 7" :key="dayIdx" class="day-column">
          <view 
            v-for="(slot, slotIdx) in 3" 
            :key="slotIdx" 
            class="mood-slot"
            :style="{ backgroundColor: getMoodColor(scheduleMoods[dayIdx][slotIdx]) }"
          >
            <text class="mood-text">{{ scheduleMoods[dayIdx][slotIdx] || '-' }}</text>
          </view>
        </view>
      </view>
      <!-- 颜色图例 -->
      <view class="mood-legend">
        <view class="legend-item" v-for="(color, mood) in moodColorMap" :key="mood">
          <view class="color-block" :style="{ backgroundColor: color }"></view>
          <text>{{ mood }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getStorage } from '@/utils/storage'

// 移除组件导入语句，通过EasyCom自动引入

export default {
  // 移除components注册
  data() {
    return {
      currentChart: 'pie', // 当前显示的图表类型：pie/bar/schedule
      totalTodo: 0, // 总待办数
      doneTodo: 0, // 已完成待办数
      doneRate: 0, // 待办完成率
      pieChartData: {}, // 饼图数据
      barChartData: {}, // 柱形图数据
      scheduleMoods: [], // 课表式心情数据（7天×3时段）
      weekdays: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'], // 星期数组
      // 心情-颜色映射（常量配置）
      moodColorMap: {
        开心: '#FF6B6B',
        疲惫: '#4ECDC4',
        学习: '#FFD166',
        日常: '#6A0572',
        emo: '#1A535C'
      },
      // 图表配置项
      pieChartOpts: {
        padding: [10, 10, 10, 10],
        legend: {
          show: true,
          position: 'bottom',
          align: 'center'
        },
        title: {
          name: '心情分布占比',
          fontSize: 16
        }
      },
      barChartOpts: {
        padding: [10, 10, 10, 10],
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          name: '数量',
          gridType: 'dash'
        },
        legend: {
          show: true,
          position: 'bottom'
        },
        title: {
          name: '近7天心情趋势',
          fontSize: 16
        }
      }
    }
  },
  computed: {
    // 格式化完成率显示
    doneRateFormatted() {
      return this.totalTodo === 0 
        ? '0%' 
        : `${Math.round(this.doneRate * 100)}%`
    },
    // 判断是否有日记数据
    hasDiaryData() {
      const diaryList = getStorage('DIARY') || []
      return diaryList.length > 0
    }
  },
  onShow() {
    this.initPageData()
  },
  methods: {
    // 初始化页面所有数据
    initPageData() {
      this.initTodoStats() // 初始化待办统计
      this.initMoodCharts() // 初始化心情图表
      this.initScheduleMoods() // 初始化课表式心情
    },
    
    // 切换图表类型
    switchChart(chartType) {
      this.currentChart = chartType
      // 如果是课表图，确保数据已初始化
      if (chartType === 'schedule' && !this.scheduleMoods.length) {
        this.initScheduleMoods()
      }
    },

    // 1. 初始化待办统计
    initTodoStats() {
      const todoList = getStorage('TODO') || []
      this.totalTodo = todoList.length
      this.doneTodo = todoList.filter(item => item?.done).length
      this.doneRate = this.totalTodo === 0 ? 0 : this.doneTodo / this.totalTodo
    },

    // 2. 初始化心情图表（饼图+柱形图）
    initMoodCharts() {
      const diaryList = getStorage('DIARY') || []
      
      if (!this.hasDiaryData) {
        this.pieChartData = { series: [] }
        this.barChartData = { series: [] }
        return
      }

      // ---------------------- 饼图：心情占比 ----------------------
      // 初始化心情计数器
      const moodCount = Object.keys(this.moodColorMap).reduce((obj, mood) => {
        obj[mood] = 0
        return obj
      }, {})
      
      // 统计各心情数量
      diaryList.forEach(diary => {
        if (moodCount.hasOwnProperty(diary.tag)) {
          moodCount[diary.tag]++
        }
      })
      
      // 组装饼图数据
      this.pieChartData = {
        series: Object.entries(moodCount)
          .filter(([mood, count]) => count > 0)
          .map(([mood, count]) => ({
            name: mood,
            data: count,
            color: this.moodColorMap[mood]
          }))
      }

      // ---------------------- 柱形图：一周每日心情 ----------------------
      // 获取近7天日期（格式：MM-DD）
      const last7Days = this.getLast7Days()
      
      // 初始化每日心情数据
      const dailyMoodData = last7Days.reduce((obj, day) => {
        obj[day] = Object.keys(this.moodColorMap).reduce((moodObj, mood) => {
          moodObj[mood] = 0
          return moodObj
        }, {})
        return obj
      }, {})
      
      // 统计每日心情
      diaryList.forEach(diary => {
        if (diary?.date) {
          const diaryDate = this.formatDateToMd(diary.date)
          if (last7Days.includes(diaryDate) && dailyMoodData[diaryDate].hasOwnProperty(diary.tag)) {
            dailyMoodData[diaryDate][diary.tag]++
          }
        }
      })
      
      // 组装柱形图数据
      this.barChartData = {
        categories: last7Days, // X轴：近7天日期
        series: Object.entries(this.moodColorMap).map(([mood, color]) => ({
          name: mood,
          data: last7Days.map(day => dailyMoodData[day][mood]),
          color: color
        })).filter(series => series.data.some(num => num > 0)) // 过滤无数据的心情类型
      }
    },

    // 3. 初始化课表式心情（模拟数据+真实日记数据结合）
    initScheduleMoods() {
      const diaryList = getStorage('DIARY') || []
      const moodTypes = Object.keys(this.moodColorMap)
      
      // 初始化7天×3时段的空数据
      this.scheduleMoods = Array(7).fill().map(() => Array(3).fill(''))
      
      // 用真实日记数据填充
      diaryList.forEach(diary => {
        if (diary?.date && diary?.tag) {
          const date = new Date(diary.date)
          if (!isNaN(date.getTime())) { // 验证日期有效性
            const dayOfWeek = date.getDay() || 7 // 周日转为7（对应数组索引6）
            const dayIdx = dayOfWeek - 1 // 转换为0-6的索引（周一0，周日6）
            if (dayIdx >= 0 && dayIdx < 7) {
              // 随机分配到早/中/晚某个时段
              const slotIdx = Math.floor(Math.random() * 3)
              this.scheduleMoods[dayIdx][slotIdx] = diary.tag
            }
          }
        }
      })
      
      // 填充模拟数据（仅对空值填充）
      this.scheduleMoods = this.scheduleMoods.map(day => 
        day.map(slot => slot || moodTypes[Math.floor(Math.random() * moodTypes.length)])
      )
    },

    // 获取心情对应的颜色（用于课表）
    getMoodColor(mood) {
      return this.moodColorMap[mood] || '#F5F5F5' // 默认灰色
    },

    // 获取近7天日期（MM-DD格式）
    getLast7Days() {
      return Array(7).fill().map((_, i) => {
        const date = new Date()
        date.setDate(date.getDate() - 6 + i)
        return this.formatDateToMd(date)
      })
    },

    // 格式化日期为MM-DD格式
    formatDateToMd(date) {
      if (typeof date === 'string') {
        // 处理字符串日期（如：2024/12/31）
        const [year, month, day] = date.split('/').map(Number)
        return `${month}-${day}`
      } else if (date instanceof Date) {
        // 处理Date对象
        return `${date.getMonth() + 1}-${date.getDate()}`
      }
      return ''
    }
  }
}
</script>

<style scoped>
/* 样式部分保持不变 */
.stats-page {
  padding: 20rpx;
  background: #F8F8F8;
  min-height: 100vh;
}

/* 待办统计卡片 */
.todo-stats-card {
  background: white;
  border-radius: 20rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.05);
}
.card-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
  display: block;
}
.todo-stats-row {
  display: flex;
  justify-content: space-around;
}
.stats-item {
  text-align: center;
}
.stats-num {
  font-size: 40rpx;
  font-weight: bold;
  display: block;
}
.done-num {
  color: #42b983;
}
.stats-label {
  color: #999;
  font-size: 24rpx;
}

/* 图表切换 tabs */
.chart-tabs {
  display: flex;
  gap: 15rpx;
  flex-wrap: wrap;
  margin: 20rpx 0;
}
.chart-tabs text {
  padding: 10rpx 20rpx;
  background: white;
  border-radius: 30rpx;
  font-size: 26rpx;
  box-shadow: 0 2rpx 5rpx rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}
.chart-tabs text.active {
  background: #42b983;
  color: white;
  transform: scale(1.05);
}

/* 图表容器 */
.chart-container {
  background: white;
  border-radius: 20rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.05);
  display: flex;
  justify-content: center;
}

/* 空数据提示 */
.empty-tip {
  background: white;
  border-radius: 20rpx;
  padding: 40rpx;
  margin-bottom: 20rpx;
  text-align: center;
  color: #999;
  font-size: 28rpx;
}

/* 课表式心情容器 */
.schedule-container {
  background: white;
  border-radius: 20rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.05);
}
/* 课表表头（星期） */
.schedule-header {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10rpx;
}
.weekday {
  width: 80rpx;
  text-align: center;
  font-weight: bold;
}
/* 课表网格（7天×3时段） */
.schedule-grid {
  display: flex;
  justify-content: space-around;
}
.day-column {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
}
.mood-slot {
  width: 80rpx;
  height: 100rpx;
  border-radius: 10rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22rpx;
  text-shadow: 0 1rpx 2rpx rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
}
.mood-slot:active {
  transform: scale(0.95);
}
.mood-text {
  padding: 5rpx;
}
/* 心情颜色图例 */
.mood-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15rpx;
  margin-top: 20rpx;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 5rpx;
  font-size: 22rpx;
}
.color-block {
  width: 20rpx;
  height: 20rpx;
  border-radius: 4rpx;
}
</style>