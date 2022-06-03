<template>
<div class="p-grid_gallery g-grid_item g-sm-full">
    <div
      class="p-gallery p-gallery-static"
      aria-hidden="true"
      data-breakpoints=""
      captionlength="0"
    >
      <div class="p-gallery_top">
        <div
          class="p-gallery_photo"
          role="button"
          aria-expanded="false"
          aria-controls="p-galleryModal"
          tabindex="0"
        >
          <div
            class="swiper-container p-gallery_photo_el swiper-container-fade swiper-container-horizontal"
          >
            <div class="swiper-wrapper js-gallery-images">
              <div
                class="swiper-slide 
                p-gallery_item swiper-slide-active"
                v-for = "(imgs,index) in imgList"
                :key = "index"
                >
              <div 
                 class="slide-image-div"
                 v-for = "(img,idx2) in imgs"
                 :key = "idx2"
                 :style="{ backgroundImage: 'url(' + img + ')' }"
              ></div> 
              </div>          
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<!-- <script>
export default {
  data() {
    return {};
  },
};
</script> -->

<script setup>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";

const store = useStore();
const route = useRoute();
const goodsId = route.params.goodsId; 

onMounted(() => {
  store.dispatch("setInfo",{goodsId});
});

let imgList = computed(() => store.getters.getImgList);



</script>

<style scoped>
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.p-gallery-static .p-gallery_thumbs .swiper-slide {
  display: flex;
  flex-wrap: wrap;
}
.p-gallery-static .p-gallery_thumbs_item {
  width: calc((100% - 30px) / 4 - 0.1px);
  margin: 10px 10px 0 0;
  padding-bottom: calc((100% - 30px) / 4);
  transition: opacity 0.2s;
  background-repeat: no-repeat;
  background-size: contain;
}
gallery_thumbs .swiper-slide {
  display: flex;
  flex-wrap: wrap;
}
.p-gallery-static .p-gallery_thumbs_item {
  width: calc((100% - 30px) / 4 - 0.1px);
  margin: 10px 10px 0 0;
  padding-bottom: calc((100% - 30px) / 4);
  transition: opacity 0.2s;
  background-repeat: no-repeat;
  background-size: contain;
}
.p-gallery-static .p-gallery_thumbs_item:nth-child(-n + 4) {
  margin-top: 0;
}
.p-gallery-static .p-gallery_thumbs_item:not(.p-gallery_thumbs_item-active) {
  cursor: pointer;
}
.p-gallery-static .p-gallery_thumbs_item {
  width: calc((100% - 30px) / 4 - 0.1px);
  margin: 10px 10px 0 0;
  padding-bottom: calc((100% - 30px) / 4);
  transition: opacity 0.2s;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>