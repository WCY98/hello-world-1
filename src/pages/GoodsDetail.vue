<template>
  <div>
    <h1>GoodsDetail</h1>
    <p>goodsId:{{ goodsId }}</p>
    <router-link to="/">Home</router-link>
    <br>
    <router-link to="/cart/page/989898">Cart</router-link>
    <hr />
    <body-container></body-container>
    <qa-and-review></qa-and-review>
  </div>
</template>

<script setup lang="ts">
import QaAndReview from "../components/QaAndReview.vue";
import { useRoute } from "vue-router";
import BodyContainer from "@/components/GoodsInfo/BodyContainer.vue";

const route = useRoute();
const goodsId = route.params.goodsId;
</script>

<style>
</style>