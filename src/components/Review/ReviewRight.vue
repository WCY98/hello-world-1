<template>
<div class="p-reviw-graph-area-right">
    <template  v-for = "(rating,index) in ratingList"
     :key="index">
     <review-right-com :rating2="rating">
     </review-right-com></template>
</div>
</template>

<script setup>
import { onMounted,computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import ReviewRightCom from './ReviewRightCom.vue';

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() =>{
    store.dispatch("setReviewRating",goodsId);
});
let ratingList = computed(() => store.getters.getRating)
</script>

<style scoped>
.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}
.p-reviw-graph-area-left-row {
  display: inline-block;
  margin: 0px 0;
}
.p-reviw-graph-area-comp-eva {
  font-weight: bold;
}
.p-reviw-graph-area-average span {
  font-size: 26px;
  color: #eb6157;
}
.p-reviw-graph-area-foot {
  text-align: center;
  margin-top: -12px !important;
  margin-bottom: 12px;
}
.p-reviw-graph-area-right {
  box-sizing: border-box;
  display: inline-block;
  padding: 2px 2px px 2px 2px;
  vertical-align: top;
  width: 100%;
}
</style>


