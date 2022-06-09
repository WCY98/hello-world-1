<template>
  <div class="p-reviewScore p-reviewScore-sm">
    <review-total-left :reviewTotal="reviewTotal"></review-total-left>
    <review-total-right></review-total-right>
  
  </div>

  <p class="p-reviw-graph-area-foot">
    {{ reviewTotal.reviewCount }}評価 {{ reviewTotal.titleCount }}商品レビュー
  </p>
  
  
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";
import ReviewTotalLeft from "./ReviewTotalLeft.vue";
import ReviewTotalRight from "./ReviewTotalRight.vue";

const route = useRoute();
const store = useStore();
const goodsId = route.params.goodsId;

onMounted(() => {
  store.dispatch("setReviewTotal", goodsId);
});

let reviewTotal = computed(() => 
	store.getters.getReviewTotal);
</script>

<style scoped>
.p-reviewScore {
  display: flex;
  margin-bottom: 15px;
  align-items: flex-end;
}
.p-reviw-graph-area-foot {
  text-align: center;
  margin-top: -12px !important;
  margin-bottom: 12px;
}
.n-review-btn button span {
  padding: 5px 30px !important;
  color: #009e96;
}
.g-btn,
.g-lg-btn {
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: normal;
  display: inline-flex;
  padding: 0;
  transition: background-color 0.2s;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>