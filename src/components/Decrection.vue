<template>
  <div class="container">
    <div class="tit">更多便捷工具</div>
    <ul class="list">
      <li class="item">
        <div class="content hvr-pop" @click="link('/timeline')">
          <h2>行业资讯</h2>
          <p>最新资讯，一览无余</p>
          <div class="num">120,000+</div>
          <div class="text">篇文章</div>
        </div>
      </li>
      <li class="item">
        <div class="content hvr-pop"  @click="link('/searchlist?q=all')">
          <h2>文献直达</h2>
          <p>期刊文献，一键直达</p>
          <div class="num">900,00+</div>
          <div class="text">次检索次数</div>
        </div>
      </li>
      <li class="item">
        <div class="content hvr-pop" @click="link('/wordlist')">
          <h2>疾病科普</h2>
          <p>巴拉巴拉吧</p>
          <div class="num">120+</div>
          <div class="text">种疾病类型</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import router from "@/router";
const link = (key) => {
  router.push(key);
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;

  /* Pop */
  @-webkit-keyframes hvr-pop {
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  @keyframes hvr-pop {
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  .hvr-pop {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .hvr-pop:hover,
  .hvr-pop:focus,
  .hvr-pop:active {
    -webkit-animation-name: hvr-pop;
    animation-name: hvr-pop;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  /* Bounce In */
  .hvr-bounce-in {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
  }
  .hvr-bounce-in:hover,
  .hvr-bounce-in:focus,
  .hvr-bounce-in:active {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  }

  .tit {
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  .list {
    display: flex;
    align-items: center;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      padding-bottom: 20px;
      border-bottom: 1px solid #e3e3e3;
      border-right: 1px solid #e3e3e3;
      color: #777777;

      :hover {
        background-color: #279ef2;
        color: #fff;
      }
      &:nth-child(3) {
        border-right: none;
      }
      .content {
        border-radius: 50%;
        border: 1px solid #e3e3e3;
        width: 180px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;

        h2 {
          font-size: 20px;
          font-weight: bold;
          margin: 0;
        }
        p {
          margin: 7px 0;
        }
        .num {
          font-size: 20px;
          font-weight: bold;
          color: #f4973b;
        }
        & > * {
          text-align: center;
        }
      }
    }
  }
}
</style>
