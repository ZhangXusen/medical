<template>
  <div class="container">
    <Header />
    <el-main>
      <el-divider content-position="left"> 最新资讯 </el-divider>
      <h1 class="title">今日</h1>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          type="primary"
          :size="activity.size"
          :timestamp="activity.timestamp"
          hollow
        >
          <div class="tit">{{ activity.content }}</div>
          <p>{{ activity.desc }}</p>
        </el-timeline-item>
      </el-timeline>
    </el-main>
  </div>
  <el-backtop :right="10" :bottom="70" />
</template>

<script setup>
import Header from "@/components/Layout/Header.vue";
import Search from "@/components/Layout/Search.vue";
const activities = [
  {
    content: "深圳福田区发现一例新冠病毒阳性病例",
    timestamp: "2018-04-12 20:46",
    size: "large",
    type: "primary",
    desc: "6月18日，深圳福田区新冠疫情防控指挥部发布疫情防控提醒通知，通知显示，6月18日清晨福田区在核酸筛查中发现一例新冠病毒检测阳性。（央视新闻客户端）",
  },
  {
    content: "深圳福田区发现一例新冠病毒阳性病例",
    timestamp: "2018-04-03 20:46",
    color: "#0bbd87",
    desc: "6月18日，深圳福田区新冠疫情防控指挥部发布疫情防控提醒通知，通知显示，6月18日清晨福田区在核酸筛查中发现一例新冠病毒检测阳性。（央视新闻客户端）",
  },
  {
    content: "深圳福田区发现一例新冠病毒阳性病例",
    timestamp: "2018-04-03 20:46",
    size: "large",
    desc: "6月18日，深圳福田区新冠疫情防控指挥部发布疫情防控提醒通知，通知显示，6月18日清晨福田区在核酸筛查中发现一例新冠病毒检测阳性。（央视新闻客户端）",
  },
  {
    content: "深圳福田区发现一例新冠病毒阳性病例",
    timestamp: "2018-04-03 20:46",
    type: "primary",
    hollow: true,
    desc: "6月18日，深圳福田区新冠疫情防控指挥部发布疫情防控提醒通知，通知显示，6月18日清晨福田区在核酸筛查中发现一例新冠病毒检测阳性。（央视新闻客户端）",
  },
  {
    content: "深圳福田区发现一例新冠病毒阳性病例",
    timestamp: "2018-04-03 20:46",
    desc: "6月18日，深圳福田区新冠疫情防控指挥部发布疫情防控提醒通知，通知显示，6月18日清晨福田区在核酸筛查中发现一例新冠病毒检测阳性。（央视新闻客户端）",
  },
  {
    content: "Default node",
    timestamp: "2018-04-03 20:46",
  },
  {
    content: "Default node",
    timestamp: "2018-04-03 20:46",
  },
  {
    content: "Default node",
    timestamp: "2018-04-03 20:46",
  },
  {
    content: "Default node",
    timestamp: "2018-04-03 20:46",
  },
  {
    content: "Default node",
    timestamp: "2018-04-03 20:46",
  },
  {
    content: "Default node",
    timestamp: "2018-04-03 20:46",
  },
  {
    content: "Default node",
    timestamp: "2018-04-03 20:46",
  },
];
</script>

<style lang="scss" scoped>
.container {
  max-width: 100vw;
  overflow: hidden;
  .el-main {
    width: 860px;
    margin: 0 auto;
    padding: 30px 0 0 0;
    .title {
      width: 62px;
      height: 24px;
      background: #459dff;
      font-family: PingFang SC Medium;
      font-weight: 500;
      font-size: 14px;
      text-align: center;
      line-height: 24px;
      color: #fff;
    }
    .el-timeline {
      padding-left: 60px;
      .tit {
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
      }
    }
    .el-timeline-item {
      p {
        color: #909399;
      }
    }
  }
  :deep(.el-divider__text) {
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
