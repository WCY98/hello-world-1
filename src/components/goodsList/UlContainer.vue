<template>
  <div class="ul-container">
    <goods-list></goods-list>
  </div>
</template>

<script>
import GoodsList from "../goodsList/GoodsList.vue";
export default {
  components: { GoodsList },
};
</script>

<style>
.ul-container{
    width: 1226px;
    flex-shrink: 0;
    height: 398px;
    margin-top: 20px;
     flex-wrap: wrap;
}
</style>