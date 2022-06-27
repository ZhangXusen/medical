<template>
  <div class="container">
    <div class="china">
      <div class="title">
        <h3>中文期刊</h3>
        <div class="more" @click="link('/searchlist?q=en')">
          <el-link
            >更多<el-icon><CirclePlus /></el-icon
          ></el-link>
        </div>
      </div>
      <ul class="list">
        <li class="list-item">
          <div class="content">
            <span><el-tag effect="dark">1</el-tag></span>
            : 年增布好应军你
          </div>
          <div class="time">2021/1/1</div>
        </li>
        <li class="list-item">
          <div class="content">
            <span><el-tag effect="dark">1</el-tag></span>
            : 年增布亲先且运况王己律很。
          </div>
          <div class="time">2021/1/1</div>
        </li>
        <li class="list-item">
          <div class="content">
            <span><el-tag effect="dark">1</el-tag></span>
            : 年增布亲先且运况王己律很。
          </div>
          <div class="time">2021/1/1</div>
        </li>
        <li class="list-item">
          <div class="content">
            <span><el-tag effect="dark">1</el-tag></span>
            西层外身更证采也以经如石位步管。值世术取千
          </div>
          <div class="time">2021/1/1</div>
        </li>
      </ul>
    </div>
    <div class="china">
      <div class="title">
        <h3>外文期刊</h3>
        <div class="more" @click="link('/searchlist?q=zh')">
          <el-link
            >更多<el-icon><CirclePlus /></el-icon
          ></el-link>
        </div>
      </div>
      <ul class="list">
        <li class="list-item">
          <div class="content">
            <span><el-tag effect="dark">1</el-tag></span>
            Journal of Community Hospital Internal Medicine Perspectives
          </div>
          <div class="time">2021/1/1</div>
        </li>
        <li class="list-item">
          <div class="content">
            <span><el-tag effect="dark">1</el-tag></span
            >l Medicine Perspectiv
          </div>
          <div class="time">2021/1/1</div>
        </li>
        <li class="list-item">
          <div class="content">
            <span><el-tag effect="dark">1</el-tag></span>
            Journal of Community HosPerspectives
          </div>
          <div class="time">2021/1/1</div>
        </li>
        <li class="list-item">
          <div class="content">
            <span><el-tag effect="dark">1</el-tag></span>
            Journal Medicine Perspectives
          </div>
          <div class="time">2021/1/1</div>
        </li>
        <li class="list-item">
          <div class="content">
            <span><el-tag effect="dark">1</el-tag></span>
            Journal of Community Hospital Internal Medicine Perspectives
          </div>
          <div class="time">2021/1/1</div>
        </li>
        <li class="list-item">
          <div class="content">
            <span><el-tag effect="dark">1</el-tag></span>
             Internal Medicine Perspectives
          </div>
          <div class="time">2021/1/1</div>
        </li>
        <li class="list-item">
          <div class="content">
            <span><el-tag effect="dark">1</el-tag></span>
            l Medicine Perspectives
          </div>
          <div class="time">2021/1/1</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { CirclePlus } from "@element-plus/icons-vue";
const link = (key) => {
  router.push(key);
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  .china {
    flex: 1;
    margin-right: 10px;
    padding: 5px 10px 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .el-link {
        font-size: 16px;
        font-weight: 600;
      }
    }
    .list {
      display: flex;
      flex-direction: column;
      .list-item {
        list-style: none;
        overflow: hidden;
        border-bottom: 1px solid #eae8ea;
        padding: 12px 0 7px 0;
        .content {
          width: 500px;
          font-size: 18px;
          display: block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          cursor: pointer;
          vertical-align: top;
          &:hover {
            color: #2284f6;
          }
          .el-tag {
            margin-right: 5px;
          }
        }
        .time {
          text-align: right;
          font-size: 14px;
          color: #999;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
