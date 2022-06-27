<template>
  <div class="marquee">
    <div class="top">
      <div class="logo">
        <img
          src="https://www.termonline.cn/static/img/sou.a44dcba9.svg"
        />正在搜
      </div>
      <el-icon color="#4c84ff" @click="isScroll = !isScroll" :size="20"
        ><VideoPause v-if="isScroll"/><VideoPlay v-else
      /></el-icon>
    </div>
    <vue3-seamless-scroll
      :list="list"
      class="scroll"
      delay="300"
      v-model="isScroll"
      ease="ease-in-out"
    >
      <div class="item" v-for="(item, index) in list" :key="index">
        <span class="content">{{ item.title }}</span>
        <span class="date">{{ item.date }}</span>
      </div>
    </vue3-seamless-scroll>
  </div>
</template>

<script setup>
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import { VideoPause,VideoPlay } from "@element-plus/icons-vue";
import { ref } from "vue";
const isScroll = ref(true);
const list = ref([
  {
    title: "Vue3.0 ",
    date: Date.now(),
  },
  {
    title: "Vue3.0 ",
    date: Date.now(),
  },
  {
    title: "Vue3.0 ",
    date: Date.now(),
  },
  {
    title: "Vue3.0 ",
    date: Date.now(),
  },
  {
    title: "Vue3.0 ",
    date: Date.now(),
  },
  {
    title: "Vue3.0 ",
    date: Date.now(),
  },
  {
    title: "Vue3.0 ",
    date: Date.now(),
  },
  {
    title: "Vue3.0 ",
    date: Date.now(),
  },
  {
    title: "Vue3.0 ",
    date: Date.now(),
  },
]);
</script>

<style lang="scss" scoped>
.marquee {
  padding: 20px 10px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .logo {
      line-height: 30px;
      height: 30px;
      font-size: 26px;
      color: #333;
      img {
        vertical-align: middle;
      }
    }
    .el-icon {
      cursor: pointer;
    }
  }
}
.scroll {
  height: 295px;
  overflow: hidden;
}

.scroll .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

  border-bottom: 1px solid #cbd5e0;
  .content {
    font-size: 16px;
      cursor: pointer;
  }
  .date {
    font-size: 14px;
    color: #909399;
  }
}
</style>
