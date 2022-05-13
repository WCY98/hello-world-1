
<template>
  <li>
    <span :class="[isFinished? 'finished':'']">{{ title }} {{date}}</span>
      <button v-on:click="$emit('toggle')"> toggle </button>
      <button v-on:click="$emit('remove',index)">Remove</button>
            
  </li>
</template>
<script>

export default {
  props: ['title','date','isFinished','index'],
  emits:['remove','toggle']
}

</script>
