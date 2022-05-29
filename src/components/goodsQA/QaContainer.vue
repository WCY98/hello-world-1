<template>
  <h2 class="g-h-2 g-h-i p-hd">
    <!-- <i class="g-s g-s-comment" aria-hidden="true"></i> -->
    <span class="material-symbols-outlined"> sms </span>
    <span>商品Q&amp;A</span>
  </h2>
  <div id="ZVCQA">
    <div class="zv-cqa-step">
      <div class="zv-cqa-step-link">
        <span>全{{ totalCount }}件</span>

        <span>ページ{{ pageNo }}/{{ totalPage }}</span>
      </div>
      <div class="zv-select-wrap">
        <select id="zv-cqa-select-sort" class="zv-select" name="sort">
          <option value="total_yes">トップ評価</option>
          <option value="created_at" selected="">新しい順</option>
        </select>
      </div>
    </div>
    <qa-list></qa-list>
  </div>
  <div>
    <question-post></question-post>
  </div>
</template>

<script setup>
import QaList from "./QaList.vue";
import QuestionPost from "./QuestionPost.vue";
</script>

<style>
.p-hd {
  font-size: 1.8rem;
  margin-bottom: 13px;
}
.g-h-2,
.g-lg-h-2 {
  font-size: 2.4rem;
  margin-bottom: calc(30px - 0.6rem);
}
.g-h-i,
.g-lg-h-i {
  display: flex;
  align-items: center;
}
.g-s-comment {
  background-position: -13em -13em;
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
*,
*::before,
*::after {
  box-sizing: border-box;
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
#ZVCQA {
  font-size: 14px;
  margin-bottom: 30px;
  color: #333;
  padding: 0;
}
</style>