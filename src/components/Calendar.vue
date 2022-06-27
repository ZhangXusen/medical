<template>
  <div class="container">
    <div class="top">
      <div class="logo">
        <img
          src="https://www.termonline.cn/static/img/ci.d369a167.svg"
        />每日一词
      </div>
      <div class="more">
        <el-link @click="linkClick"
          >更多<el-icon><CirclePlus /></el-icon
        ></el-link>
      </div>
    </div>
    <div class="v-head">
      <div class="text hvr-wobble-horizontal" @click="SearchWord">
        {{ ShowWord }}
      </div>
    </div>
    <v-calendar :attributes="attrs" is-expanded @dayclick="Ondayclicks">
    </v-calendar>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import animate from "animate.css";
import router from "@/router";
import {CirclePlus} from '@element-plus/icons-vue'
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const ShowWord = ref("111");
const Ondayclicks = (day) => {
  ShowWord.value = day.popovers[0].label;
};
const linkClick=()=>{
  router.push("/dayword");
}
const SearchWord = () => {
  router.push("/hotword/" + ShowWord.value);
};
const attrs = ref([
  {
    key: "today",
    highlight: {
      color: "blue",
      fillMode: "solid",
      contentClass: "italic",
    },
    popover: {
      label: "哈哈哈哈",
    },
    dates: new Date(),
  },
  {
    key: "前1天",
    dot: {
      color: "blue",
    },
    dates: new Date(year, month, day - 1),
    popover: {
      label: "哈哈哈哈",
    },
  },
  {
    key: "前2天",
    dot: {
      color: "blue",
    },
    dates: new Date(year, month, day - 2),
    popover: {
      label: "哈哈哈哈",
    },
  },
  {
    key: "前3天",
    dot: {
      color: "blue",
    },
    dates: new Date(year, month, day - 3),
    popover: {
      label: "哈哈哈哈",
    },
  },
  {
    key: "前4天",
    dot: {
      color: "blue",
    },
    dates: new Date(year, month, day - 4),
    popover: {
      label: "哈哈哈哈",
    },
  },
  {
    key: "前5天",
    dot: {
      color: "blue",
    },
    dates: new Date(year, month, day - 5),
    popover: {
      label: "哈哈哈哈",
    },
  },
  {
    key: "前6天",
    dot: {
      color: "blue",
    },
    dates: new Date(year, month, day - 6),
    popover: {
      label: "哈哈哈哈",
    },
  },
  {
    key: "前7天",
    dot: {
      color: "blue",
    },
    dates: new Date(year, month, day - 7),
    popover: {
      label: "哈哈",
    },
  },
]);
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
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
    .el-link {
      font-size: 16px;
      font-weight: 600;
      .el-icon {
        cursor: pointer;
      }
    }
  }
  .v-head {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 10px 16px 0;
    border: 1px solid #ccc;
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: 0px solid #000;
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    &:hover {
      border-bottom: 3px solid #409eff;
    }
    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
  /* Wobble Horizontal */
  @-webkit-keyframes hvr-wobble-horizontal {
    16.65% {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
    33.3% {
      -webkit-transform: translateX(-6px);
      transform: translateX(-6px);
    }
    49.95% {
      -webkit-transform: translateX(4px);
      transform: translateX(4px);
    }
    66.6% {
      -webkit-transform: translateX(-2px);
      transform: translateX(-2px);
    }
    83.25% {
      -webkit-transform: translateX(1px);
      transform: translateX(1px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes hvr-wobble-horizontal {
    16.65% {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
    33.3% {
      -webkit-transform: translateX(-6px);
      transform: translateX(-6px);
    }
    49.95% {
      -webkit-transform: translateX(4px);
      transform: translateX(4px);
    }
    66.6% {
      -webkit-transform: translateX(-2px);
      transform: translateX(-2px);
    }
    83.25% {
      -webkit-transform: translateX(1px);
      transform: translateX(1px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  .hvr-wobble-horizontal {
    // display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .hvr-wobble-horizontal:hover,
  .hvr-wobble-horizontal:focus,
  .hvr-wobble-horizontal:active {
    -webkit-animation-name: hvr-wobble-horizontal;
    animation-name: hvr-wobble-horizontal;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  :deep(.vc-container) {
    border-radius: 0px 0px 0.5rem 0.5rem;
  }
  :deep(.vc-header) {
    display: none;
  }
  :deep(.vc-arrows-container) {
    display: none;
  }
}
</style>
