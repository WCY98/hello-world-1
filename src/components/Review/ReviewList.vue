<template>
  <p class="g-label-brand g-reviewList_label"
  style="display: flex; flex-direction: column; align-items: center">
  PickUpReview</p>
   <div v-for="(review, index) in reviewList" :key="index">
   <!-- reviewlist => offset=0的数据 ，默认前三个数据显示-->
    <review-com v-bind="review"></review-com>
    <!-- 如果写了v-bind=""的话，这种写法在子组件里传入的不是一个object -->
  </div>

    <div id="hiddenReview" v-if="showed">
      <div v-for="(review2, index2) in reviewList2" :key="index2">
      <review-com v-bind="review2"></review-com>
    </div>
      </div>
     <div>
       <span class="material-symbols-outlined">
{{icon}}
</span>
    <div class="more" @click="showMeMore">{{ btnText }}</div>
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

const reviewCount = computed(() => store.getters.getReview.reviewCount);
const reviewList = computed(() => store.getters.getReview.reviewList);
const reviewList2 = computed(() => store.getters.getReviewList);
const showed = computed(() => store.getters.getShowed);

// click事件
const showMeMore = async () => {
  if (!showed.value) {
    if (reviewList2.value.length === 0) {
      // store.dispatch("setReview", { goodsId: goodsId, offset: 3 });
      await store.dispatch("setReview",{goodsId:goodsId,offset:3})
      store.commit("changeShowed",true);
      //offset 起始下标 
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

const btnText = computed(() => {
  if (!showed.value && reviewList.value !== undefined) {
    return (
      "show me more (" + reviewList.value.length + "/" + reviewCount.value + ")"
    );
  } else {
    return "閉じる";
  }
});

const icon = computed(() => {
  if (!showed.value && reviewList.value !== undefined) {
    return "expand_more";
  } else {
    return "expand_less";
  }
});

//点击对应的rating、出现的review<3不显示ShowMeMore，review>3显示对应rating的全部review

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
.more {
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 46px;
  line-height: 46px;
  font-size: 18px;
  border-radius: 27px;
  cursor: pointer;
}
.more:hover {
  color: #057c7d;
  text-decoration: underline;
}
</style>