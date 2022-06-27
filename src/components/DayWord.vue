<template>
  <el-calendar :range="[new Date(), new Date() + 1]">
    <template #dateCell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split("-").slice(1).join("-") }}
        {{ data.isSelected ? "✔️" : "" }}
      </p>
      <el-tag
        @click="SearchWord()"
        v-if="data.day.split('-')[2] < today + 1 && data.day.split('-')[2] > 0"
        >11111</el-tag
      >
    </template>
  </el-calendar>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue-demi";
const Time = new Date();
const today = Time.getDate();
const list = ref([
  { word: "hhh", date: today },
  { word: "hhhhhh", date: today },
]);
const SearchWord = (word) => {
  router.push("/hotword/" + word);
};
console.log(today);
</script>

<style lang="scss" scoped>
.el-tag {
  display: block;
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
}
:deep(.el-calendar__header) {
  display: none;
}
p {
  padding: 0;
  margin: 0;
  text-align: center;
}
</style>
