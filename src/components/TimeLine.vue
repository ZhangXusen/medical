<template>
  <div class="timeline">
    <div class="top">
      <h3>医学快讯</h3>
      <div class="more" @click="link">
        <el-link
          >更多<el-icon><ArrowRightBold /></el-icon
        ></el-link>
      </div>
    </div>
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
        <p>1111</p>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup>
import router from "@/router";
import { ArrowRightBold } from "@element-plus/icons-vue";
const activities = [
  {
    content: "Custom icon",
    timestamp: "2018-04-12 20:46",
    size: "large",
    type: "primary",
  },
  {
    content: "Custom color",
    timestamp: "2018-04-03 20:46",
    color: "#0bbd87",
  },
  {
    content: "Custom size",
    timestamp: "2018-04-03 20:46",
    size: "large",
  },
  {
    content: "Custom hollow",
    timestamp: "2018-04-03 20:46",
    type: "primary",
    hollow: true,
  },
  {
    content: "Default node",
    timestamp: "2018-04-03 20:46",
  },
];
const link = () => {
  router.push("/timeline");
};
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #4b93d5;
  margin-bottom: 10px;
  h3 {
    color: #2fa0f2;
    margin-bottom: 5px;
  }
  .el-link {
    font-size: 16px;
    font-weight: 600;
  }
}
.tit {
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
.el-timeline {
  padding-left: 10px;
}
.el-timeline-item {
  p {
    color: #909399;
  }
}
</style>
