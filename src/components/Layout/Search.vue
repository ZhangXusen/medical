<template>
  <div class="search">
    <div class="ipt">
      <div class="ipt-logo">搜索</div>
      <div class="ipt-content">
        <input
          type="text"
          v-model.trim="iptVal"
          placeholder="海量资源，等你检索"
        />
        <!-- <input-tag v-model="tags"></input-tag> -->
        <div @click="HandleSearch">
          <el-icon :size="30"><search /></el-icon>检索
        </div>
      </div>
    </div>
    <div class="hotwords">
      <span class="resou">热搜词：</span>
      <el-tag
        class="mx-1"
        effect="dark"
        @click="HandleWordSearch(word.name)"
        v-for="(word, index) in WordList"
        :key="index"
        >{{ word.name }}
      </el-tag>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import InputTag from "vue-input-tag";
import router from "@/router";
import { GetWordList } from "@/api/search";
const iptVal = ref(null);
const HandleWordSearch = (word) => {
  iptVal.value = word;
  HandleSearch();
};
const HandleSearch = () => {
  router.push({path: "/searchlist",query:{q:iptVal.value}} );
};
//推荐词
const WordList = ref(null);
const getWordList = () => {
  GetWordList().then((res) => {
    console.log(res);
    WordList.value = res;
  });
};
onMounted(() => {
  getWordList();
});
</script>
<style lang="scss" scoped>
$bgc: #f5f7f9;
$tit-size: 16px;
$bar-c: #e6e6e6;
$font-c: #047df6;
$hover-c: #409eff;
$border-r: 5px;
.search {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 140px;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  .ipt {
    flex: 4;
    display: flex;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
    &-logo {
      height: 52px;
      line-height: 52px;
      color: #fff;
      letter-spacing: 2px;
      float: left;
      margin-right: 10px;
      font-size: 30px;
      font-weight: bold;
      font-family: cursive;
      background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
      -webkit-background-clip: text;
      color: transparent;
      cursor: pointer;
    }
    &-content {
      float: left;
      width: 1024px;
      background-color: #fff;
      border-radius: $border-r;
      input {
        width: 90%;
        float: left;
        padding-left: 16px;
        height: 52px;
        line-height: 52px;
        font-size: 18px;
        color: $font-c;
        border: none;
        outline-style: none;
        border-radius: $border-r;
      }
      div {
        display: flex;
        align-items: center;
        float: right;
        height: 52px;
        padding-right: 10px;
        line-height: 52px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        color: $font-c;
        &:hover {
          color: $hover-c;
        }
        .el-icon {
          margin-left: 7px;
          height: 100%;
        }
      }
    }
  }
  .hotwords {
    flex: 1;
    width: 1200px;
    margin: 0 auto;
    padding: 5px 10px;
    .resou {
      color: #fff;
      font-weight: bold;
    }
    .el-tag {
      cursor: pointer;
    }
    .mx-1 {
      margin-left: 10px;
    }
  }
}
</style>
