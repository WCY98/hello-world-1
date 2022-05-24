<template>
  <div class="content-container">
    <!-- <item-cat></item-cat> -->
    <banner-com></banner-com>
    <sub-banner></sub-banner>
    <ul-container></ul-container>
  </div>
</template>

<script>
import SubBanner from "../components/goodsList/SubBanner.vue";
import UlContainer from "../components/goodsList/UlContainer.vue";
import BannerCom from "@/components/swiper/BannerCom.vue";

export default {
  components: { UlContainer, SubBanner, BannerCom },
};
</script>

<style>
.content-container {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
}
</style>