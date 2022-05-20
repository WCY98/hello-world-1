<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({}),
    },
  },
  emits: ["update:modelValue"],
  created() {
    console.log(this.modelModifiers); // { capitalize: true } dummy
  },
};
</script>

<style>
</style>