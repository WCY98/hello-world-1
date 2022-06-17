<template>
<div class="g-layout-cart">
      <div class="g-layout_head">
	<h1>カート</h1>
  </div>
  <div v-if="length && length === 0">
        <p>
          ショッピングカートに商品が入っていません。<br />
          ショッピングカート内の商品は自由に出し入れしていただけます。<br />
          また、商品は「あとで買う」に移動していただくこともできます。
        </p>
      </div>
  <div class="cartAndContainer" style="display:flex">
    <div>
    <cart-com></cart-com>
    </div>
    <div>
      <div v-if="length !== 0">
    <cart-right></cart-right>
    </div>
    </div>
    </div>
</div>
</template>

<script setup lang="ts">
import CartCom from "./CartCom.vue";
import CartRight from "./CartRight.vue";
import { useStore } from "../../store/index";
// import { useRoute } from "vue-router";
import { computed , onMounted} from "vue";

// const route = useRoute();
// const userId = route.params.userId;
const store = useStore();
const userId = "989898";
onMounted(() => {
  store.dispatch("setCart", userId);
});
// let cartList = computed (() => store.getters.getCart);
const length = computed(() => store.getters.getCart.length);
console.log("length", length);

</script>

<style>
</style>