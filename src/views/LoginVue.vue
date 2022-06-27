<template>
  <div class="containerVue">
    <Login />
  </div>
</template>

<script setup>
import Login from "@/components/Login.vue";
</script>

<style lang="scss" scoped>
.containerVue {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  //   background: #fc5c7d; /* fallback for old browsers */
  //   background: -webkit-linear-gradient(
  //     to right,
  //     #6a82fb,
  //     #fc5c7d
  //   ); /* Chrome 10-25, Safari 5.1-6 */
  //   background: linear-gradient(
  //     to right,
  //     #fc5c7d,
  //     #6a82fb
  //   ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: #fc5c7d; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #6a82fb,
    #fc5c7d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #fc5c7d,
    #6a82fb
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
