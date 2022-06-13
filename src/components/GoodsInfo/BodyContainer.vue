<template>
<div class="js-sku-name">
  <h1 class="js-sku-name">{{skuName}}
  </h1></div>
  <div class="g-lead g-lg-units g-sm-units-sm">
			<div class="js-sku-code"><p class="js-sku-code">商品コード {{sizeValue}}</p></div>
			<p class="g-score g-sm-score-sm" id="js-product-reviews-title" aria-hidden="false">
				<span onclick="location.href=&quot;#normal-productreview&quot;;" style="text-decoration:underline;cursor:pointer;" aria-label="商品レビュー数">
        <star-rating
        class="starAvg"
        :star-size="20"
        :rating="reviewTotal.ratingAvg"
        :read-only="true"
        :increment="0.01"
        :show-rating="false"
        :rounded-corners="true"
      ></star-rating>
					(<span id="js-reviews">{{ reviewTotal.reviewCount }}</span>)</span>
			</p>
			<ul class="g-flow-xs g-labelSet">
			</ul>
		</div>
  <div class="g-layout_body">
    <div class="p-grid g-lg-grid-2 g-grid-lg" style="display:flex">
      <photo-container></photo-container>
      <!-- <style flex-direction:row></style> -->
      <info-container></info-container>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import StarRating from 'vue-star-rating';
import InfoContainer from "./InfoContainer.vue";
import PhotoContainer from "./PhotoContainer.vue";
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";


// components: {
//     StarRating,
//   }

const route = useRoute();
const store = useStore();
const goodsId = route.params.goodsId;

onMounted(() => {
  store.dispatch("setReviewTotal", goodsId);
});

let reviewTotal = computed(() => 
	store.getters.getReviewTotal);

const sizeValue = computed(() => store.getters.getNewList1.sizeValue)
const skuName = computed(() => store.getters.getNewList1.skuName)


</script>

<style scoped>
g-lg-grid-2{
 flex-direction:row;

 width:500px;
 margin-bottom:20px
}
*::before, *::after {
    box-sizing: border-box;
}
div {
    display: block;
}
h1 {
    font-size: 2.4rem;
    line-height: 1.5;
}
h1, h2, h3, h4, h5, h6, ul, ol, dl, dd, input, textarea, select, button {
    margin: 0;
}
h1 {
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.g-score, .g-lg-score {
    font-size: smaller;
    line-height: 1;
    flex-direction:row;
    align-items: center;
    height: 16px;
}
.g-score [data-score]::before, .g-score [data-score]::after, .g-lg-score [data-score]::before, .g-lg-score [data-score]::after {
    height: 16px;
    content: '';
    background-size: auto 100%;
}
.g-score, .g-lg-score {
    font-size: smaller;
    line-height: 1;
    display: flex;
    align-items: center;
    height: 16px;
}
.g-units > *:nth-child(n + 2):not(.g-units_ignore), .g-lg-units > *:nth-child(n + 2):not(.g-units_ignore) {
    margin-top: 15px;
}
.g-flow-xs, .g-lg-flow-xs {
    margin-bottom: -5px;
    margin-left: -5px;
}
.g-layout_head {
    margin-bottom: 50px;
}

</style>