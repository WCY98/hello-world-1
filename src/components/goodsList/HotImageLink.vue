<template>
  <!-- <a :href="link">
    <img :src="imgSrc" :alt="name" />
  </a> -->
  <router-link :to="link">
    <img :src="imgSrc" :alt="name" />
  </router-link>
</template>

<script>
export default {
  props: {
    link: String,
    imgSrc: String,
    name: String,
  },
  inheritAttrs: false,
};
</script>

<style>
img {
  height: 290px;
}
</style>