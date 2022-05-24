<template>
  <input @input="asyncCall" />
  <h1>{{ state.v }}</h1>
  <h2>Read Only Stars</h2>
  <star-rating :rating="state.rating" :read-only="true" :increment="0.01"></star-rating>
</template>

<script setup>
import { reactive } from "vue";
import StarRating from 'vue-star-rating'
const state = reactive({
  v: "",
  rating:3.8
});
async function asyncCall() {
  const url = "http://localhost:3000/postCode";
  const headers = { Accept: "application/json" };
  const goodses = await fetch(url, { headers });
  const j = await goodses.json();
  state.v = j.address;
}
</script>

<style>
</style> 