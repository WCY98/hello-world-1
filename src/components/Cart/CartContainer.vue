<template>
<div class="g-layout-cart">
      <div class="g-layout_head">
	<h1>カート</h1>
  </div>
  <div class="cartAndContainer" style="display:flex">
    <div>
    <cart-com></cart-com>
    </div>
    <div>
    <cart-right></cart-right>
    </div>
    </div>
</div>
</template>

<script setup lang="ts">
import CartCom from "./CartCom.vue";
import CartRight from "./CartRight.vue";
// import { useStore } from "../../store/index";
// import { useRoute } from "vue-router";
// import { computed , onMounted} from "vue";

// const route = useRoute();
// const userId = route.params.userId;
// const store = useStore();
// onMounted(() => {
// 	store.dispatch("setCart",userId)
// });
// let cartList = computed (() => store.getters.getCart);


</script>

<style>
</style>