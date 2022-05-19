<template>
  <a class="goods-link" :href="link">
    <div class="info discount">{{ tittle }}</div>
    <img :src="imgSrc" :alt="name" />
    <p class="name">{{ name }}</p>
    <p class="item_price">{{ price }}</p>
    <p class="counter">{{ counter }}</p>
    <!-- <p class="counter">{{ counter }}</p> -->
  </a>
</template>

<script>
export default {
  props: {
    link: String,
    tittle: String,
    imgSrc: String,
    name: String,
    price: Number,
    counter: String,
  },
};
</script>
<style>
.goods-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: none;
  text-decoration: none;
  color: #000;
}
.goods-link img {
  width: 160px;
  height: 160px;
  opacity: 0.8;
  margin: 37px;
}
</style> 