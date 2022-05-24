<template>
  <div>
    <h1>GoodsDetail</h1>
    <router-link to="/">Home</router-link>
    <review-container></review-container>
  </div>
</template>

<script>
import ReviewContainer from "../components/Review/ReviewContainer.vue";
export default {
  components: { ReviewContainer },
};
</script>

<style>
</style>