<template>
  <p class="g-label-brand g-reviewList_label">PickUpReview</p>
  <div v-for="(review,index) in reviewList" :key="index">
    <review-com v-bind="review"></review-com>
  </div>
  <template v-if="reviewList.length > 3">
  <p class="g-align-tc">
    <a class="g-link displaymorereview" 
       href="#p-reviewMore" 
       role="button" 
       aria-expanded="false" 
       aria-controls="p-reviewMore" 
       data-label="閉じる" 
       data-accordion='{"scroll":false}'>
		<i class="g-i g-i-arrow-d"></i>
      <span>レビューをもっと見る
        （3/<span id="js-reviews-more">{{count}}</span>）
        </span></a>
  </p>
  </template>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ReviewCom from "./ReviewCom.vue";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setReview", goodsId);
});
let reviewList = computed(() => store.getters.getReview);

let count = computed(() => store.getters.getReviewTotal.titleCount);
</script>

<style scoped>
.g-reviewList_item p {
  word-break: break-all;
}
.g-reviewList_label {
  margin-bottom: 15px;
}
.g-label-brand {
  color: #009e96;
  border: 1px solid #009e96;
}
.g-label-brand,
.g-label-price,
.g-label-maker,
.g-label-required {
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1;
  display: inline-block;
  padding: 3px 5px;
  vertical-align: middle;
  white-space: nowrap;
  background-color: #fff;
}
</style>