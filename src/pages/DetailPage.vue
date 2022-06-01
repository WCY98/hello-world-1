<template> 
<div>
    this is detail page goodsId is {{goodsId}}
    <p>goods name {{goodsInfo.goodsName}}</p>
</div>
 </template>

<script setup>
// import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore} from "vuex";
import { onMounted, computed } from "vue";
// export default{
//     setup(){
        const route = useRoute();
        const goodsId = route.params.goodsId
        
        
        const store = useStore();
        onMounted(() =>{
            store.dispatch("setGoods");
        });
        let goodsInfo = computed(() => store.getters.getGoods)
        // return {goodsId}
//     }
// }
</script>

<style>
</style>