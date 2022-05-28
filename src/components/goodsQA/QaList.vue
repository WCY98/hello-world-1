<template>
  <p class="zv-heading">カスタマーQ&amp;A</p>
  <div v-for="(qa, index) in qaList" :key="index">
    <qa-com v-bind="qa"></qa-com>
  </div>
</template>

<script setup>
import QaCom from "./QaCom.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setGoodsQA", goodsId);
});
let qaList = computed(() => store.getters.getGoodsQA);
//let qaCount = computed(() => store.getters.getGoodsQA.getTotalCount);
</script>

<style>
p.zv-heading,
pan.zv-cqa-q-reviewer,
span.zv-cqa-a-reviewer,
div.zv-popupModal1,
span.zv-separator {
  display: none;
}
p,
form,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
dd,
input,
textarea,
select,
button {
  margin: 0;
}
#ZVCQA p.zv-heading {
  margin-top: 10px;
  margin-bottom: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>