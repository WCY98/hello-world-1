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
    height: 360px;
    background-color:#fafafa;
    border-top: 1px solid #ffa500;
    margin-bottom: 20px;
    margin-left: 4px;
    margin-right: 6px;
}
</style>