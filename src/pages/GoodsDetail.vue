<template>
  <div>
    <h1>GoodsDetail</h1>
    <p>goodsId:{{ goodsId }}</p>
    <router-link to="/">Home</router-link>
    <hr />
    <info-container></info-container>
    <qa-and-review></qa-and-review>
  </div>
</template>

<script setup>
import QaAndReview from "../components/QaAndReview.vue";
import { useRoute } from "vue-router";
import InfoContainer from "@/components/GoodsInfo/InfoContainer.vue";

const route = useRoute();
const goodsId = route.params.goodsId;
</script>

<style>
</style>