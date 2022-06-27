<template>
  <div class="container">
    <Header />
    <Search />
    <div class="main">
      <el-main>
        <div class="carousel">
          <MySwiper class="myswiper" />
          <TimeLine class="mytimeline" />
        </div>
        <el-divider content-position="left">
          <el-icon :size="40" color="#409EFF"><star-filled /></el-icon>最新资讯
        </el-divider>
        <div class="news">
          <SwiperList />
          <Calendar />
        </div>

        <el-divider content-position="left">
          <el-icon :size="40" color="#409EFF"><Tickets /></el-icon>热门文章
        </el-divider>
        <Literature />

        <el-divider content-position="left">
          <el-icon :size="40" color="#409EFF"><Tickets /></el-icon>学术服务
        </el-divider>
        <div class="service">
          <ul class="list">
            <li class="list-item hvr-float">
              <div class="content">
                <p class="tit">中西医知识库</p>
                <p class="entit">Medical Knowledge Base</p>
              </div>
            </li>
            <li class="list-item hvr-float">
              <div class="content">
                <p class="tit">中西医知识库</p>
                <p class="entit">Medical Knowledge Base</p>
              </div>
            </li>
            <li class="list-item hvr-float">
              <div class="content">
                <p class="tit">中西医知识库</p>
                <p class="entit">Medical Knowledge Base</p>
              </div>
            </li>
          </ul>
        </div>
        <Decrection />
      </el-main>
    </div>
  </div>
  <el-backtop :right="10" :bottom="70" />
</template>
<script setup>
import { reactive, ref } from "vue";
import Login from "@/components/Login.vue";
import Header from "@/components/Layout/Header.vue";
import Search from "@/components/Layout/Search.vue";
import { StarFilled, Tickets } from "@element-plus/icons-vue";
import Literature from "@/components/literature.vue";
import DayWord from "@/components/DayWord.vue";
import Calendar from "@/components/Calendar.vue";
import MySwiper from "@/components/MySwiper.vue";
import TimeLine from "@/components/TimeLine.vue";
import SwiperList from "@/components/SwiperList.vue";
import Decrection from "@/components/Decrection.vue";
</script>
<style lang="scss" scoped>
.container {
  max-width: 100vw;
  overflow: hidden;
  .main {
    background-color: #f3f3f3;
    padding-top: 20px;
    .el-main {
      width: 1200px;
      margin: 0 auto;
      background-color: #fff;
      .carousel {
        display: flex;
        align-items: center;
        .myswiper {
          flex: 6;
        }
        .mytimeline {
          flex: 2;
          margin-left: 20px;
        }
      }
      .news {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0 40px 0;
        background-color: #fff;
        div {
          flex: 1;
          &:nth-child(1) {
            margin-right: 20px;
          }
        }
      }
      .service {
        margin-top: 20px;
        .list {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .list-item {
            position: relative;
            flex: 1;
            height: 180px;
            list-style: none;
            overflow: hidden;
            border-bottom: 1px solid #eae8ea;
            padding: 12px 0 7px 0;
            .content {
              width: 181px;
              position: absolute;
              top: 75px;
              left: 51px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              p {
                padding: 0;
                margin: 0;
              }
              .tit {
                font-family: SourceHanSansCN-Regular;
                font-size: 24px;
                color: #fff;
                padding: 0 0 10px 0;
              }
              .entit {
                font-family: SourceHanSansCN-Normal;
                font-size: 12px;
                color: #ccc;
              }
            }
            &:nth-child(1) {
              background: url("@/assets/images/ditu1.png") center center
                no-repeat;
              background-size: cover;
              margin-right: 20px;
            }
            &:nth-child(2) {
              background: url("@/assets/images/ditu2.png") center center
                no-repeat;
              background-size: cover;
              margin-right: 20px;
            }
            &:nth-child(3) {
              background: url("@/assets/images/ditu3.png") center center
                no-repeat;
              background-size: cover;
            }
          }
        }
      }
      /* Float */
      .hvr-float {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
      }
      .hvr-float:hover,
      .hvr-float:focus,
      .hvr-float:active {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
      }
      :deep(.el-divider) {
        margin: 40px 0;
      }
      :deep(.el-divider__text) {
        font-size: 28px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }
  }
}
</style>
