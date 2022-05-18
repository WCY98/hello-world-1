<template>
  <li><goods-link v-bind="goods"></goods-link></li>
</template>

<script>
import GoodsLink from './GoodsLink'
export default {
 components: { GoodsLink },
  props: {
    goods:Object
  },
}
</script>

<style>
li {
    width: 234px;
    height: 314px;
    background-color: #fff;
    margin-bottom: 20px;
    margin-left: 4px;
    margin-right: 6px;
}
</style>