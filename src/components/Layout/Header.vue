<template>
  <el-header>
    <div class="head">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item disabled>Logo</el-menu-item>
        <el-menu-item index="1" route="/">首页</el-menu-item>
        <el-sub-menu index="2">
          <template #title> 资源 </template>
          <el-menu-item index="2-1"> 1111 </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3" route="/wordlist">科普专题</el-menu-item>
        <el-menu-item index="4" route="/wordlist">学术专题</el-menu-item>
        <!-- <el-menu-item index="5" class="right" >
        <div class="content"></div>
        <div class="avatar">
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar
                :size="50"
                src="https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/k7/k7jd2q.jpg"
                @error="errorHandler"
              />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>账号设置</el-dropdown-item>
                <el-dropdown-item divided @click="logout"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-menu-item> -->
      </el-menu>
      <div class="right">
        <div class="avatar">
          <el-popover>
            <template #reference>
              <div class="ava-content">
                <el-avatar
                  :size="50"
                  src="https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/k7/k7jd2q.jpg"
                />
              </div>
            </template>
            <template #default>
              <div class="pop-cont">
                <el-button type="primary" @click="HandleLogin">
                  立即登录
                </el-button>
              </div>
            </template>
          </el-popover>
        </div>
      </div>
    </div>
  </el-header>
</template>
<script setup>
import router from "@/router";
import { onMounted, ref } from "vue";

// const activeIndex = route.currentRoute.value.path;


const HandleLogin = () => {
  router.push({ path: "/login", replace: true });
};

</script>
<style lang="scss" scoped>
$bgc: #f5f7f9;
$tit-size: 16px;
$bar-c: #e6e6e6;
$font-c: #047df6;
$hover-c: #409eff;
$border-r: 5px;
.el-header {
  padding: 0;
  box-shadow: 0 1px 4px 0 rgb(14 15 20 / 20%);
  .el-menu--horizontal {
    border-bottom: 0px solid #000;
  }
  .head {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .el-menu {
      flex-grow: 1;
      .el-menu-item,
      .el-sub-menu,
      .el-sub-menu__title {
        font-size: 16px;
      }
    }
    .right {
      float: right;
      .avatar {
        height: 100%;
        .ava-content {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .pop-cont {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }
    }
  }
}
</style>
