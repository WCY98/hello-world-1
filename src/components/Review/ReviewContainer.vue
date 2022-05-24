<template
    v-for="review in review" :key="review">
    <review-com v-bind:review="review"></review-com>
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
    ...mapGetters({ reviews: "getReview" }),
  },
  mounted() {
    const route = useRoute();
    const goodsId = route.params.goodsId
    this.fetchReview(goodsId);
    
  },
};
</script>

<style>
/* .flex-ul {
    display: flex;
    /* justify-content: space-between; */
     /* justify-content:flex-start;
    list-style-type: none;
    flex-wrap: wrap;
} */ 
</style>