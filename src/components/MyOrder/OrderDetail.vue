<template>
<div class="g-router" style="display:flex">
    <a href="/" style="color:rgb(156, 187, 176);">ホーム</a>
    <div class="arrows" >
    <span class="material-symbols-outlined">chevron_right</span>
    </div>
    <a href="/my/page/989898" style="color:rgb(156, 187, 176);">マイページ</a>
    <div class="arrows">
    <span class="material-symbols-outlined">chevron_right</span>
    </div>
    <a href="/my/order/989898" style="color:rgb(156, 187, 176);">注文履歴</a>
    <div class="arrows">
    <span class="material-symbols-outlined">chevron_right</span>
    </div>
    注文内容詳細
</div>
  <div class="g-layout_head">
    <h2 class="g-layout_head1">注文内容詳細</h2>
    <div class="g-lead"></div>
    <div class="g-layout_body" aria-hidden="true" id="cancelErrorArea">
      <div class="g-sm-full g-pane g-align-tc">
        <p class="g-color-alert g-font-lg g-weight-b" id="cancelError">
          <br class="g-only-sm" />
        </p>
      </div>
    </div>
    <p class="g-lead">
      店舗でのご注文の場合は、ご注文当初の明細が表示されます。
    </p>
    <div class="g-sm-full p-orderTitle g-unit-lg">
      <div class="g-lg-butterfly">
        <div class="g-order_titlecon">
             注文番号:{{orderCode}}
            <button class="g-order_btn"
                    style="margin-left:600px">お問合せ</button>
        </div>
      </div>
    </div>
  </div>
  <div style="display:flex">
    <div >
    <order-detail-body></order-detail-body>
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderDetailBody from './OrderDetailBody.vue';
import { useRoute } from "vue-router";

const route = useRoute();
const orderCode = route.params.orderCode;
</script>

<style scoped>
.g-layout_head1{
    margin-right: 900px;
}
.g-lead{
    margin-right: 650px;
    margin-top: -10px;
    font-size: 1rem;
}
.g-order_titlecon{
    margin-top: 20px;
    background-color: rgb(208, 255, 239);
    height: 50px;
    width:1000px;
    margin-left: 115px;
    padding:3.5px
}
.g-order_btn{
    height: 30px;
    margin-top: 10px;
    font-size: 0.5rem;
    color:rgb(156, 187, 176);
    background-color: white;
    font-weight: bold;
    border-color: rgb(152, 192, 178);
    border-radius: 10%;
}
.g-router{
  color:rgb(160, 158, 158);
    font-size:0.8rem;
    margin-bottom: 70px;
}
</style>