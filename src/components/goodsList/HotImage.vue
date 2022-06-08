<template>
  <div class="hot-image">
      <hot-image-link v-bind="goods"></hot-image-link>
  </div>
</template>

<script lang="ts">
import HotImageLink from './HotImageLink.vue'
export default {
    components: { HotImageLink },
  props: {
    goods:Object
  },
}
</script>

<style>
/* li {
    width: 234px;
    height: 360px;
    background-color:#fafafa;
    border-top: 1px solid #ffa500;
    margin-bottom: 20px;
    margin-left: 4px;
    margin-right: 6px;
} */

</style> 