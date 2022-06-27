<template>
  <div class="container">
    <Header />
    <el-main>
      <el-divider content-position="left"> 每日一词 </el-divider>
      <DayWord
    /></el-main>
  </div>
</template>

<script setup>
import DayWord from "@/components/DayWord.vue";
import Header from "@/components/Layout/Header.vue";
import Search from "@/components/Layout/Search.vue";
</script>

<style lang="scss" scoped>
.container {
  max-width: 100vw;
  overflow: hidden;
  :deep(.el-divider__text){
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
