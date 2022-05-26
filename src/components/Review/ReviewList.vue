<template>
  <p class="g-label-brand g-reviewList_label">PickUpReview</p>
   <div id="displayedReview">
  <!-- <div v-for="(review,index) in reviewList" :key="index"> -->
   <review-com v-bind="review"></review-com>
  <!-- </div> -->
  <ul>
        <review-com
          v-for="(review, index) in reviewList"
          v-bind:review="review"
          :key="index"
        ></review-com>
      </ul>
    </div>

    <div id="hiddenReview" v-if="showed">
      <ul>
        <review-com
          v-for="(review2, index2) in reviewList2"
          v-bind:review="review2"
          :key="index2"
        ></review-com>
      </ul>
      </div>
    <div>
	<span @click="showMeMore">{{ btnText }}</span>
    </div>
  </template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ReviewCom from "./ReviewCom.vue";

const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();

// click事件
const showMeMore = () => {
  if (!showed.value) {
    if (reviewList2.value.length === 0) {
      store.dispatch("setReview", { goodsId: goodsId, offset: 3 });
    } else {
      store.commit("changeShowed", true);
    }
  } else {
    store.commit("changeShowed", false);
  }
};

//初始化
onMounted(() => {
  store.dispatch("setReview", { goodsId: goodsId, offset: 0 });
});

const reviewCount = computed(() => store.getters.getReview.reviewCount);
const reviewList = computed(() => store.getters.getReview.reviewList);
const reviewList2 = computed(() => store.getters.getReviewList);
const showed = computed(() => store.getters.getShowed);

const btnText = computed(() => {
  if (!showed.value && reviewList.value !== undefined) {
    return (
      "show me more (" + reviewList.value.length + "/" + reviewCount.value + ")"
    );
  } else {
    return "閉じる";
  }
});
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