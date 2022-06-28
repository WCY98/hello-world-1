<template>
<ul class="g-itemList-content" style="display:flex;margin-right: 200px;">
              <li class="g-itemList_item g-media g-media-lg g-media-narrow">
                <p class="g-media_head">
                  <img
                    class="g-fw-pic"
                    :src="props.imgUrl"
                    style="width: 140px"
                  />
                </p>
                <div class="g-media_body">
                  <p class="g-lg-font-lg" style="width: 600px">
                     {{props.skuName}} 
                  </p>
                  <p class="g-font-sm1" style="font-size:1rem">商品コード  {{props.sizeValue}} </p>
                  <ul class="g-font-sm" style="font-size: 1rem;margin-left: 40px;">
                    <li class="content1">カラー: {{props.color}} /サイズ: {{props.size}} </li>
                    <li class="content2">組立サービス：なし</li>
                    <li class="content3">引取サービス：なし</li>
                    <li class="content4">数量： {{props.quantity }}</li>
                    <li class="content5">保証期間：1年</li>
                  </ul>
                  <p class="g-price">
                     {{props.price}} 
                     <span class="g-price-unit"> 円（税別）</span>
                  </p>
                  <ul>
                    <li class="g-postway" style="font-size: 0.9rem">
                      送り状No. 佐川急便&nbsp;<a
                        class="g-link g-link-t"
                        href="http://k2k.sagawa-exp.co.jp/p/web/okurijosearch.do?okurijoNo=512546776556"
                        ><span class="p-deliveryNo"> {{props.deliveryNo}} </span
                        ><span class="material-symbols-outlined">
content_copy
</span><i
                          class="g-i g-i-blank"
                          aria-label="新しいウィンドウで開きます"
                        ></i
                      ></a>
                    </li>
                  </ul>
                  <ul class="g-flow-lg g-flow-half"></ul>
                  <ul class="g-flow-sm">
                    <li>
                      <a
                        class="g-btn-foot"
                        href="/ec/my-account/inputReview?code=7543211&amp;orderCode=EC160925725-20181029&amp;orderEntryNumber=0&amp;ordersDiv=%E3%83%8B%E3%83%88%E3%83%AA%E3%83%8D%E3%83%83%E3%83%88&amp;getDbFlag=jarnalsub_ec"
                        ><span>商品レビューを書く</span></a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props=defineProps<{
    imgUrl:string,
    skuName:string,
    color:string,
    size:string,
    price:number,
    sizeValue:string,
    quantity:number,
    deliveryNo:string
}>();
</script>

<style scoped>
.g-fw-pic{
    margin-left: 400px;
    height: 150px;
    margin-top: -30px;
}
.g-lg-font-lg{
    margin-left:435px;
    font-size: 1.3rem;
    margin-top: -40px;
    width:400px
}
.g-font-sm1{
    margin-left: 4px;
}
.content1{
    margin-left: 22px;
}
.content2{
    margin-left: -35px;
}
.content3{
    margin-left:-34px
}
.content4{
    margin-right:113px
}
.content5{
    margin-right:69px
}
.g-price{
    font-size: 1.5rem;
    font-weight: bold;
    margin-left:20px
}
.g-price-unit{
    font-size:1rem
}
.g-postway{
    margin-left: 98px;
}
.p-deliveryNo{
    color:#30948c;
    margin-bottom:20px
}
.material-symbols-outlined{
    font-size:1rem;
    color:#30948c;
}
.g-btn-foot{
    margin-left: 70px;
    font-size: 1.2rem;
    background-color: white;
    color:#30948c;
    padding:6px;
    border: 1px solid #30948c;
}
.g-btn-foot:hover{
    text-decoration: underline;
}
.g-itemList-content{
    margin-bottom: 40px;
    padding:15px;
    box-shadow: 0 1px 0 0 #aca9a9;
}
</style>