
<template>
  <li>
            {{ title }}
            
  </li>
</template>
<script>

export default {
//   template: `
//           <li>
//             {{ title }}
//             <button v-on:click="$emit('remove')">Remove</button>
//           </li>
//         `,
  props: ['title'],
}

//export default toDo;


</script>
