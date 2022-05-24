<template>
<div>
    <review-com v-for="(review,index) in reviewList " 
    v-bind="review" 
    :key="index">
    </review-com>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"; 
import ReviewCom from "./ReviewCom.vue";
import { useRoute } from "vue-router";

export default {
  components: { ReviewCom },
  methods: {
    ...mapActions({ fetchReview: "setReview" }),
  },
  computed: {
    ...mapGetters({ reviewList: "getReview" }),
  },
  mounted() {
    const route = useRoute();
    const goodsId = route.params.goodsId
    this.fetchReview(goodsId);
    
  },
};
</script>
<!-- <script setup>
import ReviewList from "./ReviewList.vue";
import ReviewTotal from "./ReviewTotal.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const goodsId = route.params.goodsId;
</script> -->

<style>
/* .flex-ul {
    display: flex;
    /* justify-content: space-between; */
     /* justify-content:flex-start;
    list-style-type: none;
    flex-wrap: wrap;
} */ 
</style>