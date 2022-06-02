<template>
    <div id="ZVCQA">
    <div class="zv-cqa-step">
      <div class="zv-cqa-step-link">
        <span>全{{ totalCount }}件</span>
        <span class="zv-cqa-previous zv-cqa-page-btn"
              @click="previousPage">
          <span class="zv-cqa-arrow zv-cqa-arrow-left" data-page="1"
          v-if ="pageNo!= 1">&lt;</span></span>

        <span>ページ{{ pageNo }}/{{ totalPage }}</span>
        <span class="zv-cqa-next zv-cqa-page-btn"
               @click="nextPage">
          <span class="zv-cqa-arrow zv-cqa-arrow-right" data-page="2"
          v-if = "pageNo != totalPage">&gt;</span></span>
        
      </div>

      <div class="zv-select-wrap">
        <!-- <select id="zv-cqa-select-sort" class="zv-select" name="sort">
          <option value="total_yes">トップ評価</option>
          <option value="created_at" selected="">新しい順</option>
        </select> -->
         <select v-on:change = "change">
              <option value="トップ評価">トップ評価</option>
              <option value="新しい順">新しい順</option>
            </select>
      </div>
    </div>
    </div>
    <!-- QA内容 -->
    <div v-for="(qa, index) in qaList" :key="index">
    <qa-com v-bind="qa"></qa-com>
    </div>
    <!-- 全x件 ページa/b -->
    <div class="zv-cqa-step">
      <div class="zv-cqa-step-link">
        <span>全{{ totalCount }}件</span>
        <span class="zv-cqa-previous zv-cqa-page-btn"
              @click="previousPage">
           <span class="zv-cqa-arrow zv-cqa-arrow-left" data-page="1"
          v-if ="pageNo!= 1">&lt;</span></span>
        <span>ページ{{ pageNo }}/{{ totalPage }}</span>
        <span class="zv-cqa-next zv-cqa-page-btn"
              @click="nextPage">
          <span class="zv-cqa-arrow zv-cqa-arrow-right" data-page="2"
          v-if = "pageNo != totalPage">&gt;</span></span>
      </div>
    </div>
</template>

<script setup>
import QaCom from "./QaCom.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setGoodsQA", goodsId);
});

let pageNo = computed(() => store.getters.getPageNo);

let start = computed(() => {
  return (pageNo.value - 1) * 3
})
let end = computed(() =>{
  return pageNo.value * 3
})
let qaList = computed(() => store.getters.getGoodsQA.qaList.slice(start.value, end.value));

let totalCount = computed(() => store.getters.getGoodsQA.totalCount);
//console.log("TotalCount", TotalCount);

function nextPage() {
  store.commit("nextPage");
}
function previousPage() {
  store.commit("previousPage");
}

const totalPage = computed(() => {
  return Math.ceil(totalCount.value / 3);
})

// function foo (e) {
//           this.val = e.target.value
//         }
const change = (e) =>(
  store.commit("setSort", e.target.value)
);
      
</script>

<style scoped>
*, *::before, *::after {
    box-sizing: border-box;
}
#ZVCQA {
    font-size: 14px;
    margin-bottom: 30px;
    color: #333;
    padding: 0;
}
.zv-cqa-page-btn {
    cursor: pointer;
    text-decoration: none;
    color: #333;
}
#ZVCQA i.zv-cqa-arrow-left, #ZVCQA a.zv-cqa-next, #ZVCQA a.zv-cqa-previous {
    font-size: 0;
}
#ZVCQA i.zv-cqa-arrow, #ZVCQA a.zv-cqa-next, #ZVCQA a.zv-cqa-previous {
    transition: transform 0.3s;
    color: #009e96;
    flex-shrink: 0;
    display: inline-block;
    vertical-align: middle;
    font-family: 'icon';
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    letter-spacing: 0;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#ZVCQA i.zv-cqa-arrow-left:before, #ZVCQA a.zv-cqa-previous:before {
    font-size: 14px;
    content: '\EA04';
}
#ZVCQA .zv-cqa-step-link {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 20px;
    display: inline-block;
    padding-bottom: 5px;
}
#ZVCQA .zv-select-wrap {
    overflow: hidden;
    position: relative;
    border: 1px solid #bdc3c7;
    border-radius: 3px;
    background: #ffffff;
    width: auto;
    display: inline-block;
    -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.2);
    -webkit-box-shadow: inset 0 1px 2px rgb(0 0 0 / 20%);
    box-shadow: inner 0 1px 2px rgba(0, 0, 0, 0.2);
    vertical-align: middle;
}
.zv-cqa-question {
    padding: 15px 0 0;
}
#ZVCQA div.zv-cqa-step {
    box-shadow: 0 1px 0 0 #dbdbdb;
}
.material-symbols-outlined {
cursor: pointer;
color: #009e96;
flex-shrink: 0;
display: inline-block;
vertical-align: middle;
}
</style>