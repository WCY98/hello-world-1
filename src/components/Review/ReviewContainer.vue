<template>
  <div id="normal-productreview">
    <!-- <p>goodsId:{{ goodsId }}</p> -->
    <h2 class="g-h-2 g-h-i p-hd">
      <i class="g-s g-s-comment" aria-hidden="true"></i>
      <span class="material-symbols-outlined"> sms </span>
      <span>レビュー</span>
    </h2>
    <review-total></review-total>
    <div id="n-review-btn" class="n-review-btn">
      <button onclick="javascript:void(0);" class="g-btn g-btn-w-sm">
        <span>商品レビューを書く</span>
        <span class="material-symbols-outlined"> arrow_forward_ios </span>
        <!-- <i class="g-i g-i-arrow-r" aria-hidden="true"></i> -->
      </button>
    </div>
    <hr />
    <review-list></review-list>
  </div>
</template>

<script setup lang="ts">
import ReviewList from "./ReviewList.vue";
import ReviewTotal from "./ReviewTotal.vue";
// import { useRoute } from "vue-router";
// const route = useRoute();
// const goodsId = route.params.goodsId;
</script>

<style scoped>
/* #normal-productreview {
  width: 415px;
} */
.p-hd {
  font-size: 2rem;
}
div {
  display: block;
}
.n-review-btn {
  text-align: center;
  padding-bottom: 20px;
}
.n-review-btn button span {
  padding: 5px 15px;
  color: #009e96;
}
.g-btn {
  display: flex;
  min-height: 46px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.g-btn,
.g-lg-btn {
  font-size: 1.6rem;
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
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
.material-symbols-outlined {
cursor: pointer;
color: #009e96;
flex-shrink: 0;
display: inline-block;
vertical-align: middle;
}
</style>