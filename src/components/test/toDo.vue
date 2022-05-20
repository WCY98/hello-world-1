
<template>
  <li>
    <span :class="{ finished }">{{ title }} {{ date }}</span>
    <button v-on:click="$emit('toggleLi')">toggle</button>
    <button v-on:click="$emit('remove', index)">Remove</button>
  </li>
</template>
<script>
export default {
  props: ["title", "date", "finished", "index"],
  emits: ["remove", "toggleLi"],
};
</script>
