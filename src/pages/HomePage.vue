<template>
  <div class="content-container">
    <item-cat></item-cat>
    <sub-banner></sub-banner>
    <ul-container></ul-container>
  </div>
</template>

<script>
import SubBanner from "../components/goodsList/SubBanner.vue";
import UlContainer from "../components/goodsList/UlContainer.vue";
import ItemCat from "../components/category/ItemCat.vue";

export default {
  components: { UlContainer, SubBanner, ItemCat },
};
</script>

<style>
.content-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>