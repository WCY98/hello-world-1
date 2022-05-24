<template>
  <div id="swiper-div">
      <swiper-com></swiper-com>
  </div>
</template>

<script>
import SwiperCom from '../swiper/SwiperCom.vue'
export default {
    components:{SwiperCom}
}
</script>

<style>
#swiper-div{
  width: 80%;
}
</style>