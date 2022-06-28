<template>
  <div class="g-layout_body" >
    <div class="g-bundle">
      <!-- <div
        class="g-pane g-pane-border g-lg-pane-sm p-historyPane"
        v-for="(detail, index) in detailList"
        :key="index"
      > -->
        <dl
          class="g-sm-formGrid-v g-sm-formGrid-border g-lg-formGrid-h g-lg-formGrid-sm g-lg-formGrid-loose g-align-ft"
        >
          <dt class="content1">現在の状況</dt>
          <div class="bar" style="display:flex;margin-left:400px;margin-top:-25px">
                <div :class="order.orderStatus === '受注済'
                ? ' ellipse-active':
                'ellipse'
                ">
                </div>
                <div class="line"></div>
                <div :class="order.orderStatus === '出荷・お渡し準備中'
                ? ' ellipse-active':
                'ellipse'
                ">
                </div>
                <div class="line"></div>
                <div :class="order.orderStatus === '出荷・配送・お渡し済'
                ? ' ellipse-active':
                'ellipse'
                ">
                </div>
                <!-- <div class="ellipse"></div>
                <div class="line"></div>
                <div class="ellipse"></div>
                <div class="line"></div>
                <div class="ellipse"></div> -->
            </div>
            <div class="text-box" >
                    <p class="text">受注済</p>
                    <p class="text">出荷準備中</p>
                    <p class="text">出荷・配送済</p>
            </div>
          <dt class="content2">配送予定日</dt>
          <dd class="para2"> {{detail.deliveryDate}} </dd>
          <dt class="content3">伝票No.</dt>
          <dd class="para3"> {{detail.deliveryNo}} </dd>
          <dt class="content4">受取方法</dt>
          <dd class="para4"> {{detail.deliveryType }}</dd>
          <dt class="content5">配送商品</dt>
          <dd>
            <div v-for="(detail,index) in detailList" :key="index" >
            <order-detail-content v-bind="detail"></order-detail-content>
            </div>
          </dd>
        </dl>
      </div>
    </div>

    <div class="g-block-xs">
      <dl
        class="g-sm-formGrid-v g-sm-formGrid-border g-lg-formGrid-h g-lg-formGrid-sm g-lg-formGrid-loose g-align-ft"
      >
        <dt class="down-content1">注文日</dt>
        <dd>
          <div class="p-historyIcon1">
            <span class="material-symbols-outlined ">
              calendar_month </span
            >&nbsp;  {{order.orderDate}} 
          </div>
        </dd>
        <dt class="down-content2">購入店舗</dt>
        <dd>
          <div class="g-lg-butterfly g-align-gt">
            <div class="p-historyIcon">
              <span class="material-symbols-outlined "> dvr </span
              >&nbsp; ニトリネット
            </div>
          </div>
        </dd>
        <dt class="down-content3">お支払い情報</dt>
        <dd class="down-detail3"> クレジットカード 一括払い </dd>
        <dt class="down-content4">ポイント利用額</dt>
        <dd class="down-detail4"> 238 pt</dd>
        <dt class="down-content5">注文者情報</dt>
        <dd>
          <ul class="g-units-sm">
            <div class="down-detail5">
              <li class="down-detail5-1">{{order.userName}}</li>
              <li class="down-detail5-2">〒 {{order.postCode}} </li>
              <li class="down-detail5-3">{{order.detailAddress}}</li>
              <li class="down-detail5-4"> {{order.detailEmail}} </li>
              <li class="down-detail5-5">電話番号1：{{order.phoneNo}}</li>
            </div>
          </ul>
        </dd>
        <dt class="down-content6">配送先住所</dt>
        <dd class="down-detail6">注文者情報と同じ</dd>
        <dt class="down-content7">領収書</dt>
        <dd>
          <div class="g-lg-butterfly g-align-gt">
            <p class="down-detail7">なし<br /></p>
          </div>
        </dd>
      </dl>
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import OrderDetailContent from './OrderDetailContent.vue';
import { onMounted } from "vue";
import { computed } from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const route = useRoute();
const orderCode = route.params.orderCode;
// const userId = 989898;
const store = useStore();
onMounted(() => {
  store.dispatch("setOrder", orderCode);
   });
const detailList = computed(() => store.getters.getDetailList)
const order = computed(() => store.getters.getOrder);
const detail = computed(() => store.getters.getOrder);

</script>

<style scoped>
.ellipse{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border:5px solid #42c0b6
}
.ellipse-active{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #42c0b6;
  border:5px solid #42c0b6;
}
.line {
  width:200px;
  height: 5px;
  border-radius: 5%;
  background-color: #42c0b6;
  margin-top: 8px;
}
.content1{
    margin-right: 980px;
    margin-top:30px;
    font-size: 1.2rem;
    font-weight: bold;
}
.text-box{
  display: flex;
  margin-top:10px;
  margin-left: 290px;
  font-size: 15px;
}
.text{
  margin: 0px 50px 0px 100px;
}
.content2{
    margin-right:980px;
    font-size:1.2rem;
    margin-top:30px;
    font-weight: bold;
}
.para2{
    margin-right:310px;
    margin-top:-30px;
    font-size: 1.2rem;
}
.content3{
    margin-right:1008px;
    font-size:1.2rem;
    margin-top:50px;
    font-weight: bold;
}
.para3{
    margin-right:445px;
    margin-top:-32px;
    font-size: 1.2rem;
}
.content4{
    margin-right:1000px;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top:50px
}
.para4{
    margin-right:475px;
    margin-top:-30px;
    font-size: 1.2rem;
}
.content5{
    margin-right:1000px;
    font-size: 1.2rem;
    margin-top:50px;
    font-weight: bold;
}
.down-content1{
  margin-right: 980px;
  margin-top:30px;
  font-size: 1.2rem;
  font-weight: bold;
}
.down-content2{
  margin-right: 958px;
  margin-top:30px;
  font-size: 1.2rem;
  font-weight: bold;
}
.down-content3{
  margin-right: 920px;
  margin-top:30px;
  font-size: 1.2rem;
  font-weight: bold;
}
.down-content4{
  margin-right: 898px;
  margin-top:30px;
  font-size: 1.2rem;
  font-weight: bold;
}
.down-content5{
  margin-right: 930px;
  margin-top:30px;
  font-size: 1.2rem;
  font-weight: bold;
}
.down-content6{
  margin-right: 925px;
  margin-top:30px;
  font-size: 1.2rem;
  font-weight: bold;
}
.down-content7{
  margin-right: 960px;
  margin-top:30px;
  font-size: 1.2rem;
  font-weight: bold;
}

.material-symbols-outlined {
  color:#42c0b6
}
.p-historyIcon1{
  margin-right: 380px;
  margin-top: -28px;
  font-size: 1.2rem;
}
.p-historyIcon{
  margin-right: 355px;
  margin-top: -32px;
  font-size: 1.2rem;
}
.down-detail3{
  margin-right: 270px;
  margin-top: -32px;
  font-size: 1.2rem;
}
.down-detail4{
  margin-right: 445px;
  margin-top: -32px;
  font-size: 1.2rem;
}
.down-detail5{
  margin-right: 445px;
  font-size: 1.2rem;
}
.down-detail5-2{
  margin-left: 55px;
}
.down-detail5-3{
  margin-left: 36px;
}
.down-detail5-4{
  margin-left: 16px;
}
.down-detail5-5{
  margin-left: 128px;
}
.down-detail6{
  margin-right: 330px;
  margin-top: -28px;
  font-size: 1.2rem;  
}
.down-detail7{
  margin-right: 440px;
  margin-top: -28px;
  font-size: 1.2rem;
}
</style>