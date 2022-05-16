<template>
  <div id="v-model-example" class="demo">
    <p>First name: {{ firstName }}</p>
    <p>Last name: {{ lastName }}</p>
    <user-name
      v-model:first-name="firstName"
      v-model:last-name="lastName"
    ></user-name>
  </div>
</template>

<script>
import UserName from "./userName.vue";

export default {
  components: {
    UserName,
  },
  data() {
    return {
      firstName: "Jo hn",
      lastName: "Doe",
    };
  },
};
</script>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>