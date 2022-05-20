<template>
  <a :href="link">
    <img :src="imgSrc" :alt="name" />
  </a>
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