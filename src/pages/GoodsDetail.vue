<template>
  <div>
    <h1>GoodsDetail</h1>
    <p>goodsId:{{ goodsId }}</p>
    <router-link to="/">Home</router-link>
    <hr />
    <goods-info></goods-info>
    <qa-and-review></qa-and-review>
  </div>
</template>

<script setup>
import QaAndReview from "../components/QaAndReview.vue";
import { useRoute } from "vue-router";
import GoodsInfo from "../components/GoodsInfo.vue";

const route = useRoute();
const goodsId = route.params.goodsId;
</script>

<style>
</style>