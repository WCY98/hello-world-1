<template>
  <div id="ZVCQAPost">
    <div class="zv-cqa-posting-rule">
      <p class="zv-cqa-posting-rule-title">ご注意ください</p>
      <ul>
        <li>
          「ニトリ商品Q&amp;A」は、お客様のご質問とニトリの回答を、他のお客様に参考にしていただくためのサービスです。
        </li>
        <!--<li>回答を要するご質問やお急ぎの方は<a class="g-link-u" href="https://www.nitori-net.jp/ec/input-inquiry/" target="_blank">お問い合わせフォームへ</a>ご連絡ください。</li>-->
        <li>
          ニトリが不適切と判断した際、後日投稿を削除する場合がございます。詳細はご利用ガイドの<a
            class="g-link-u"
            href="https://www.nitori-net.jp/ec/userguide/nitorinet/#zv-cqa"
            target="_blank"
            >ニトリ商品Q&amp;Aについて</a
          >をご確認ください。
        </li>
      </ul>
    </div>

    <input
      type="textbox"
      id="ZVQuestionTextarea"
      class="zv-textbox"
      placeholder="不明な点を質問（例：この製品には耐久性がありますか？）"
    />
    <div
      id="ZVAskPostArea"
      data-customerqa-message-after-post-question="送信しました。回答があるまでしばらくお待ちください。"
    >
      <p class="zv-error-message" id="ZVLoginErrorQuestion">
        質問を投稿するにはログインが必要です。
      </p>
      <p class="zv-error-message" id="ZVEmptyErrorQuestion">
        質問を入力してください。
      </p>
      <p class="zv-error-message" id="ZVSpamErrorQuestion">
        しばらく時間をおいて投稿してください。
      </p>
      <button type="button" id="ZVPostQuestionButton" class="zv-btn">
        質問を投稿
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
*, *::before, *::after {
    box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
}
.zv-cqa-posting-rule {
    border: 1px dotted #bdc3c7;
    padding: 0 10px 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
#ZVCQA p.zv-cqa-posting-rule-title {
    font-size: 1.5rem;
}
.zv-cqa-posting-rule-title {
    font-weight: bold;
    margin: 10px 0;
    font-size: 1rem;
    line-height: 1.5;
    color: #eb6157;
}
#ZVCQAPost li {
    list-style: disc inside;
    list-style-position: inside;
    list-style-image: initial;
    list-style-type: disc;
}
#ZVAskPostArea {
    margin-top: 10px;
}
.zv-error-message {
    color: red;
    display: none;
    margin-top: 0px;
    margin-bottom: 10px;
}

</style>