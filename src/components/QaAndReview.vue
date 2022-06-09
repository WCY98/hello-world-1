<template>
  <section class="g-grid_item g-sm-block-sm">
    <div>
      <qa-container></qa-container>
    </div>
    <div>
      <review-container></review-container>
    </div>
  </section>
</template>

<script setup lang="ts">
import QaContainer from "./goodsQA/QaContainer.vue";
import ReviewContainer from "./Review/ReviewContainer.vue";
</script>

<style scoped>
section {
  width: 500px;
}
</style>