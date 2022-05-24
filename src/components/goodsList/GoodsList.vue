<template>
  <ul class="flex-ul">
    <template v-for="(goods,index) in goodsList" v-bind:key="index">
      <goods-li v-bind:goods="goods" ></goods-li>
    </template>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import GoodsLi from "./GoodsLi";
export default {
  components: { GoodsLi },
  methods: {
    ...mapActions({ fetchNewGoodses: "setNewGoodses" }),
  },
  computed: {
    ...mapGetters({ goodsList: "getNewGoodses" }),
  },
  mounted() {
    this.fetchNewGoodses();
  },
};
</script>

<style>
.flex-ul {
    display: flex;
    /* justify-content: space-between; */
     justify-content:flex-start;
    list-style-type: none;
    flex-wrap: wrap;
}

</style>