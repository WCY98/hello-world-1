<template>
  <div class="p-reviewScore p-reviewScore-sm">
    <review-left-com :reviewTotal="reviewTotal"></review-left-com>
    <review-right></review-right>
  
  </div>

  <p class="p-reviw-graph-area-foot">
    {{ reviewTotal.reviewCount }}評価 {{ reviewTotal.titleCount }}商品レビュー
  </p>
  
  <div id="n-review-btn" class="n-review-btn">
    <button onclick="javascript:void(0);" class="g-btn g-btn-w-sm">
      <span>商品レビューを書く</span>
      <i class="g-i g-i-arrow-r" aria-hidden="true"></i>
    </button>
	</div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ReviewLeftCom from "./ReviewLeftCom.vue";
import ReviewRight from "./ReviewRight.vue";

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
</style>