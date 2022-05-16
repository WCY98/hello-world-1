<template>
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />

  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
<script>
export default {
  props: {
    firstName: String,
    lastName: String,
  }
};
</script>

<style>
</style>