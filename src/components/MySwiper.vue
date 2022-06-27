<template>
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="true"
    :pagination="{
      clickable: true,
      dynamicBullets: true,
    }"
    :modules="modules"
    :loop="true"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
      
    }"
  >
    <swiper-slide
      ><img src="@/assets/images/pic1.jpeg" alt="111"
    /></swiper-slide>
    <swiper-slide
      ><img src="@/assets/images/fsss.jpg" alt="111"
    /></swiper-slide>
    <swiper-slide
      ><img src="@/assets/images/pic2.jpg" alt="111"
    /></swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper Vue.js components
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
const modules = [EffectFade, Navigation, Pagination, Autoplay];
</script>
<style>
.swiper {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 500px;
  object-fit: cover;
}
</style>
