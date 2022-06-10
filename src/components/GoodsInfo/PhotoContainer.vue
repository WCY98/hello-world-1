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
        <div class="swiper-container p-gallery_photo_el swiper-container-fade swiper-container-horizontal">
					<div class="swiper-wrapper js-gallery-images">
						<div class="swiper-slide p-gallery_item swiper-slide-active" data-caption="" style="width: 395px; opacity: 1; transform: translate3d(0px, 0px, 0px);">
								<img class="swiper-lazy swiper-lazy-loaded" src="https://www.nitori-net.jp/ecstatic/image/product/7564862/756486201.jpg?ccp=1654758000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210128145153691" alt="" imgcount="0">
									</div>
							<div class="swiper-slide p-gallery_item swiper-slide-next" data-caption="" style="width: 395px; opacity: 0; transform: translate3d(-395px, 0px, 0px);">
								<img class="swiper-lazy swiper-lazy-loaded" alt="" imgcount="1" src="https://www.nitori-net.jp/ecstatic/image/product/7564862/756486202.jpg?ccp=1654758000&amp;imwidth=415&amp;imdensity=1&amp;ts=20210128145153691">
										
									</div>
        <div class="captionArea-static" style="height: 0px;">
			<div class="p-gallery_caption captionText-static" short="" show="long" long="" rowcount="0" index="0"></div>
			<div id="p-galleryCaptionMore-static" aria-hidden="true"></div>
			<div class="" id="js-caption-more-static" aria-hidden="false">
				<p class="g-align-tc">
					<a class="g-link displayMoreGalleryCaption" captiontype="static" aria-expanded="false" data-label="閉じる" style="display: none;">
						<i class="g-i g-i-arrow-d"></i><span>もっと見る</span>
					</a>
				</p>
			</div>
		</div>

							
							
							</div>
				</div>
        <div class="swiper-container">
             <div class="inner-swiper">
              <div
                class="swiper-slide "
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

              <div class="p-gallery_controls">
				<div class="p-gallery_btn p-gallery_prev swiper-button-disabled">
          <span
          class="material-symbols-outlined"
          style="height: 0px; color: #009e96"
        >
          arrow_back_ios
        </span>
        </div>
				<div class="p-gallery_pagination swiper-pagination-clickable swiper-pagination-bullets">
          <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
          <span class="swiper-pagination-bullet"></span>
          </div>
				<div
        class="p-gallery_btn p-gallery_next"
        style="height: 0px; color: #009e96"
      >
        <span class="material-symbols-outlined"> arrow_forward_ios </span>
      </div>
			</div>


                        
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";
// import { data } from "dom7";

const store = useStore();
const route = useRoute();
const goodsId = route.params.goodsId; 

onMounted(() => {
  store.dispatch("setSizeList",goodsId);
});

let imgList = computed(() => store.getters.getImgList);


// data(){
//   return{
//     photoList:[
//       this.photo1
//     ]
//   }
// }

</script>

<style scoped>
.p-gallery-static .p-gallery_pagination {
    flex-grow: 1;
    text-align: center;
}
.g-i-arrow-r, .g-i-arrow-l, .g-i-arrow-u, .g-i-arrow-d, .g-i-arrow-d2 {
    transition: transform 0.3s;
    color: #009e96;
}
.p-gallery_btn.swiper-button-disabled .g-i {
    color: #808080;
}
.p-gallery_btn {
    font-size: 2.4rem;
    display: flex;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
}
.p-gallery-static .p-gallery_prev {
    transform: translateX(-10px);
}
.p-gallery-static .p-gallery_controls {
    display: flex;
    margin-top: 10px;
    align-items: center;
}
.p-gallery-static .p-gallery_thumbs_item {
    width: calc((100% - 30px) / 4 - 0.1px);
    margin: 10px 10px 0 0;
    padding-bottom: calc((100% - 30px) / 4);
    transition: opacity 0.2s;
    background-repeat: no-repeat;
    background-size: contain;
}
.p-gallery-static .p-gallery_thumbs_item-active {
    box-shadow: 0 0 0 2px #009e96 inset;
}
.p-gallery-static .p-gallery_thumbs_item:nth-child(-n + 4) {
    margin-top: 0;
}
.displayMoreGalleryCaption {
    cursor: pointer;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
p, form, h1, h2, h3, h4, h5, h6, ul, ol, dl, dd, input, textarea, select, button {
    margin: 0;
}
.g-align-tc, .g-lg-align-tc {
    text-align: center !important;
}
[aria-hidden='true']:not([data-breakpoints]):not([data-accordion-more]):not(.g-i):not(.g-s) {
    display: none;
}
.p-gallery-static .p-gallery_caption {
    margin-top: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
}
.p-gallery_photo_el, .p-galleryReview_photo_el {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.p-gallery-static {
    max-width: 415px;
}
.p-gallery_thumbs_item {
  background-size: contain;
}
.swiper-slide {
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: flex-start;
}
.silde-image-div {
  width: 100px;
  height: 100px;
  /* background-size: contain;
  background-repeat: no-repeat; */
}
.p-grid_gallery {
  margin: auto !important;
}
.p-gallery_thumbs {
  position: relative;
  margin-top: 15px;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform, -webkit-transform;
  box-sizing: content-box;
  transform: translate3d(0, 0, 0);
}
.p-gallery_thumbs {
  display: flex;
  flex-wrap: wrap;
}
.swiper-slide-div {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  height: 100%;
  position: relative;
  transition-property: transform;
}
.p-gallery_thumbs_item {
  background-position: center;
}
.p-galleryReview_thumbs_item {
  background-position: center;
}
.p-gallery_thumbs_item:not(.p-gallery_thumbs_item-active) {
  cursor: pointer;
}
.p-gallery_thumbs_item:nth-child(4n) {
  margin-right: 0;
}
.g-i {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  letter-spacing: 0;
  text-transform: none;
  pointer-events: none;
  -webkit-font-smoothing: antialiased;
}
.p-gallery_pagination {
  flex-grow: 1;
  text-align: center;
}
.p-gallery .swiper-pagination-bullet-active {
  background: #009e96;
}
.p-gallery .swiper-pagination-bullet {
  width: 15px;
  height: 15px;
  margin: 0 5px;
  opacity: 1;
}
.swiper-pagination-clickable {
  cursor: pointer;
}
.swiper-pagination-bullet {
  display: inline-block;
  border-radius: 100%;
}
.p-gallery_next {
  transform: translateX(10px);
}
.g-i-arrow-l {
  transition: transform 0.3s;
  color: #009e96;
}
.p-grid .g-grid_item {
  max-width: 395px;
  width: 100% !important;
  margin-top: 40px;
  padding: 0 !important;
}
.g-grid_item {
  max-width: 395px;
  width: 100% !important;
  margin-top: 40px;
  padding: 0 !important;
}
* {
  box-sizing: border-box;
}
.p-gallery_top {
  position: relative;
  margin: auto;
}
.p-gallery_photo[role="button"] {
  transition: opacity 0.2s;
}
.p-gallery_photo {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}

.swiper-slide {
  flex-shrink: 0;
  height: 50%;
  position: relative;
}
.p-gallery_item img {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: 100%;
  margin: auto;
  width: 100%;
}
.img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
.p-gallery_fraction {
  display: none;
}
.p-gallery_fraction {
  line-height: 1;
  position: relative;
  z-index: 1;
  margin: 10px auto;
  padding: 7px 10px;
  color: #fff;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.6);
}
.swiper-wrapper {
    transform: translate3d(0,0,0);
}
.captionArea-static.fixed {
  min-height: 45px !important;
}
.p-gallery_caption {
  margin-bottom: 5px;
}
.p-gallery_thumbs_item:not(.p-gallery_thumbs_item-active) {
  cursor: pointer;
}
.p-gallery_caption {
  margin-top: 10px;
  overflow-wrap: break-word;
}
.p-gallery-static .p-gallery_thumbs .swiper-slide {
    display: flex;
    flex-wrap: wrap;
}

.g-align-tc {
  text-align: center !important;
}

.g-link .g-i:first-child {
  margin-right: 0.35em;
}
.p-gallery_thumbs_item:not(.p-gallery_thumbs_item-active) {
  cursor: pointer;
}
.g-link [class*="g-i-arrow-"] {
  margin-top: -0.2em;
}
.g-link,
.g-lg-link {
  display: inline-flex;
  align-items: center;
}
a {
  text-decoration: none;
  color: #333;
}
.g-i {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  letter-spacing: 0;
  text-transform: none;
  pointer-events: none;
  -webkit-font-smoothing: antialiased;
}
.g-i-arrow-d {
  transition: transform 0.3s;
  color: #1da59e;
}
.g-link [class*="g-i-arrow-"] {
  margin-top: -0.2em;
}
.g-link .g-i:first-child {
  margin-right: 0.35em;
}

.material-symbols-outlined{
  cursor: pointer;
}
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
</style>