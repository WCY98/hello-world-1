<template>
  <section class="g-block-sm p-spec" id="js-product-spec">
    <h2 class="g-h-2 g-h-i p-hd">
      <span class="g-s g-s-size" aria-hidden="true"></span
      ><span class="material-symbols-outlined">
straighten
</span>
      <span>仕様・サイズ</span>
    </h2>
    <div id="p-specMore" aria-hidden="false" data-accordion-more="">
      <ul
        class="g-flow-lg g-flow-half g-unit js-sku-manuals p-sku-manuals"
      ></ul>
      <table class="g-table-a js-sku-specs">
        <tbody>
          <tr>
            <th>商品コード</th>
            <td>{{ goodsId }}</td>
          </tr>
          <tr>
            <th>カラー</th>
            <td>{{ color }}</td>
          </tr>
          <tr>
            <th>サイズ</th>
            <td>{{ size }}</td>
          </tr>
          <tr>
            <th>素材</th>
            <td>{{ material }}</td>
          </tr>
          <tr>
            <th>重量</th>
            <td>{{ weight }}</td>
          </tr>
          <tr>
            <th>保証年数</th>
            <td>{{ warrantyYear }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="g-foot-v g-foot-sm" style="display: none">
      <p class="g-align-tc">
        <a
          class="g-btn g-btn-w-md displaymorespec"
          href="#p-specMore"
          role="button"
          aria-expanded="true"
          aria-controls="p-specMore"
          data-label="閉じる"
          data-accordion='{"scroll":false}'>
          <span>仕様・サイズをもっと見る</span>
          <!-- <div class="more" @click="showMeMore">{{ btnText }}</div> -->
          <i class="g-i g-i-arrow-d" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed,onMounted} from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;
//从router.js第17行
const store = useStore();

onMounted(() => {
  store.dispatch("setInfo", goodsId);
});

const color = computed(() => store.getters.getInfo.color);
// console.log("aaaa",color);
const size = computed(() => store.getters.getInfo.size);
const material = computed(() => store.getters.getInfo.material);
const weight = computed(() => store.getters.getInfo.weight);
const warrantyYear = computed(() => store.getters.getInfo.warrantyYear);

// // click事件
// const showMeMore = async () => {
//   if (!showed.value) {
//     if (reviewList2.value.length === 0) {
//       await store.dispatch("setInfo",{goodsId:goodsId})
//       store.commit("changeShowed",true);
//       //offset 起始下标 
//     } else {
//       store.commit("changeShowed", true);
//     }
//   } else {
//     store.commit("changeShowed", false);
//   }
// };

// //初始化
// onMounted(() => {
//   store.dispatch("setReview", { goodsId: goodsId, offset: 0 });
// });

// const btnText = computed(() => {
//   if (!showed.value && reviewList.value !== undefined) {
//     return (
//       "show me more (" + reviewList.value.length + "/" + reviewCount.value + ")"
//     );
//   } else {
//     return "閉じる";
//   }
// });
</script>

<style scoped>
[aria-expanded][aria-controls]:not([data-breakpoints]):not([disabled]):not([aria-disabled='true']) {
    cursor: pointer;
}
p, form, h1, h2, h3, h4, h5, h6, ul, ol, dl, dd, input, textarea, select, button {
    margin: 0;
}
.displaymorespec span, .displaymoredesc span {
    min-height: 28px;
    padding: 10px 0px;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 7px;
    display: inline-block;
    text-align: center;
    transform: none;
    width: 100%;
}
.p-hd {
    font-size: 1.8rem;
    margin-bottom: 13px;
}
.g-s-size {
    background-position: -65em -65em;
}
.g-s {
    flex-shrink: 0;
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
    background-size: 79em 79em;
    line-height: 1;
    letter-spacing: 0;
    pointer-events: none;
}
.p-featureIcons {
    padding-bottom: 15px;
}
ul, ol {
    padding: 0;
    list-style: none;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.p-featureIcons img {
    width: 50px;
}
img {
    max-width: 100%;
    vertical-align: bottom;
    border: 0;
    height: auto;
}
*, *::before, *::after {
    box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
}
#p-specMore .p-sku-manuals {
    margin-top: 0 !important;
    display: block;
    text-align: right;
    margin-bottom: 0;
}
table {
    display: table;
    border-collapse: separate;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
[data-accordion-more][aria-hidden='false'] {
    height: auto !important;
}
.g-table-a th, .g-table-a td, .g-sm-table-a th, .g-sm-table-a td {
    padding: 12px 15px;
    vertical-align: top;
    border-bottom: 1px solid #dbdbdb;
}
.g-table-a th, .g-sm-table-a th {
    font-weight: normal;
    text-align: left;
    white-space: nowrap;
    background-color: #f7f7f7;
}
*, *::before, *::after {
    box-sizing: border-box;
}
.g-table-a, .g-sm-table-a {
    width: 50%;
    border-spacing: 0;
    border-top: 1px solid #dbdbdb;
}
.p-hd {
    font-size: 2rem;
}
.material-symbols-outlined {
cursor: pointer;
color: #009e96;
flex-shrink: 0;
display: inline-block;
vertical-align: middle;
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>