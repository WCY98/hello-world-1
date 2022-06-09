<template>
  <div class="zv-cqa">
    <div class="zv-cqa-question">
      <span class="zv-space">Q. </span>
      <span class="zv-cqa-q-text">{{ questionContents }}</span>
    </div>
    <br>
    <div class="zv-cqa-q-info">
      <!-- <span class="zv-cqa-q-reviewer">投稿者&nbsp; </span> -->
      <span class="zv-cqa-q-created-at">投稿日&nbsp;{{ questionDate }}</span>
    </div>
    <div class="zv-cqa-answers">
      <div class="zv-cqa-answer zv-cqa-answer-first">
        <span class="zv-space">A. </span>
        <div class="zv-cqa-a-content">
          <div class="zv-cqa-a-text">
            <p class="zv-p">
              {{ answerContents }}
            </p>
          </div>
          <br>

          <div class="zv-cqa-a-info">
            <span class="zv-space"></span>
            <!-- <span class="zv-cqa-a-reviewer">回答者&nbsp; {{ answerName }}</span> -->
            <span class="zv-cqa-a-created-at"
              >回答日&nbsp;{{ answerDate }}</span
            >
          </div>
          <div class="zv-helpful-form" data-answer-id="227726">
            <span class="zv-space"></span>
            <span class="zv-error-message" id="ZVLoginErrorHelpful-227726"
              >「参考になった/参考にならなかった」を投稿するにはログインが必要です。</span
            >
            <span class="zv-helpful-col">
              <span
                class="zv-helpful zv-helpful-wrapper zv-helpful-wrapper-yes-227726"
                data-count="227726"
                data-clickable=""
                data-answer-id="227726"
              >
                <i class="zv-helpful zv-helpful-yes-i"></i>
                <span class="material-symbols-outlined"> thumb_up </span>
                <span
                  class="zv-helpful zv-helpful-yes zv-helpful-yes-227726"
                  data-count="227726"
                  id="ZVHelpfulYes-227726"
                  >参考になった</span
                >
                <span
                  class="zv-helpful zv-helpful-num zv-helpful-yes-num zv-helpful-yes-num-227726"
                  data-count="227726"
                  id="ZVHelpfulYesNum-227726"
                  >({{ count }}人)</span
                >
              </span>
            </span>
            <!-- <span class="zv-separator">|</span>
            <div class="zv-popupModal1">
              <input type="radio" name="modalPop" id="pop11227726" />
              <label for="pop11227726">違反を報告</label>
              <input type="radio" name="modalPop" id="pop12227726" />
              <label for="pop12227726">CLOSE</label>
              <input type="radio" name="modalPop" id="pop13227726" />
              <label for="pop13227726">×</label>
              <div class="zv-modalPopup2">
                <div class="zv-modalPopup3">
                  <h2 class="zv-modalTitle">違反を報告</h2>
                  <div class="zv-modalMain">
                    <p>
                      このコンテンツは不適切であり、削除する必要があると思われる場合は、下のボタンをクリックしてお知らせください。
                    </p>
                    <div
                      class="zv-report zv-btn"
                      data-post-type="answer"
                      data-target-id="227726"
                    >
                      違反を報告する
                    </div>
                  </div>
                </div>
              </div> -->
            <!-- </div> -->
          </div>
          <div class="zv-cqa-comment">
            <div class="zv-cqa-comment-actions">
              <p class="zv-error-message" id="ZVLoginErrorComment-227726">
                コメントを記入するにはログインが必要です。
              </p>
            </div>
            <div class="zv-cqa-comment-list-body zv-hide"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    questionContents: String,
    questionDate: String,
    answerContents: String,
    // answerName: String,
    answerDate: String,
    count: Number,
  },

  data(){

  }
};
</script>

<style scoped>
.zv-cqa-question {
  padding: 15px 0 0;
}
.zv-space {
  width: 20px;
  display: block;
  float: left;
  font-weight: bold;
}
.zv-cqa-q-text {
  font-weight: bold;
  margin: 10px 0;
  line-height: 1.5;
}
div {
  display: block;
}
.zv-cqa-answer {
  display: hidden;
  margin: 10px 0 0 10px;
}
.zv-space {
  width: 20px;
  display: block;
  float: left;
  font-weight: bold;
}
.zv-p {
  margin: 0;
  overflow-wrap: break-word;
}
.zv-cqa-a-reviewer,
.zv-cqa-a-created-at {
  font-size: 13px;
  color: #555;
}
#ZVCQA div.zv-helpful-form {
  line-height: 1;
  margin-top: 15px;
}
#ZVCQA .zv-helpful-form {
  display: inline-block;
  color: #555;
}
[data-clickable] {
  cursor: pointer;
}
.zv-cqa {
  margin: 0 0 15px;
  border-bottom: 1px dashed #dbdbdb;
  padding-bottom: 15px;
}
.zv-error-message {
  color: red;
  display: none;
  margin-top: 0px;
  margin-bottom: 10px;
}
#ZVCQA
  .zv-helpful-form
  > span.zv-helpful-col
  > span.zv-helpful-wrapper
  > span.zv-helpful {
  margin-right: 0;
  padding: 0;
  border: none;
  border-radius: 0;
}
#ZVCQA span.zv-cqa-q-reviewer, #ZVCQA span.zv-cqa-a-reviewer, #ZVCQA div.zv-popupModal1, #ZVCQA span.zv-separator {
    display: none;
}
.zv-cqa-q-text {
    font-weight: bold;
    margin: 10px 0;
    line-height: 1.5;
}
</style>