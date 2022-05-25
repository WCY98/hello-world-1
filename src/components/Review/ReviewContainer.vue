<template>
<div>
    <review-com v-for="(review,index) in reviewList " 
    v-bind="review" 
    :key="index">
    </review-com>
    <review-total-com></review-total-com>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"; 
import ReviewCom from "./ReviewCom.vue";
import { useRoute } from "vue-router";
import ReviewTotalCom from "./ReviewTotalCom.vue";

export default {
  components: { ReviewCom ,ReviewTotalCom},
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

<style scoped>
#normal-productreview {
  width: 721px;
}
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
  padding: 5px 30px;
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
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>