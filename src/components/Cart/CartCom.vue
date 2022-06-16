<template>
<template v-for="(n,index) in cartList" :key="index" >
  <div class="g-layout_body" style="width:110%">
	<ul class="g-itemList">
		<li class="g-itemList_item g-media g-media-lg p-cartItem">
			<p class="g-media_head">
        <a class="g-hover" href="/goods/detail/10195">
				<img class="g-fw g-rc" 
				:src="n.photo"  style="height:100%"
				:alt="n.goodsTitle">
				</a>
				</p>
			<div class="g-media_body g-units-sm" style="display:flex">
				<p class="g-media_h">
					<a href="/ec/product/7564862/">ゴムバンド付き敷きパッド セミダブル(オーガニックコットン BE SD)
					</a>
				</p>
				<p class="g-font-sm">商品コード {{ n.sizeValue }}</p>
				<ul class="g-font-sm">
					<li>カラー：{{ n.color }}</li>
					<li>サイズ：{{ n.goodsSize }}</li>
					<li></li>
				</ul>
				<p class="g-price">{{ n.price }}<span>円 （税込）</span></p>
				<div class="g-butterfly g-font-sm">
					<p>
						2～6日で出荷</p>
				</div>
			</div>

			<div class="g-media_foot">
				<div class="g-hr-sm g-hr-dark g-only-sm"></div>
				<div class="p-cartItem_controls">
			<form id="uniAddLaterListEntryForm0" name="uniAddLaterListEntryForm0" action="/ec/cart/add/laterListEntry" method="post"><input id="pk" name="pk" value="12605385080876" type="hidden">
					<div>
            <input type="hidden" name="CSRFToken" value="a150be12-32dd-48ef-8288-25f9757878d6">
           </div></form>
		<form id="uniDeleteCartEntryForm0" name="uniDeleteCartEntryForm0" action="/ec/cart/delete/cartEntry" method="post">
		</form>
		
		<div class="p-cartItem_pcs">
          <form id="uniUpdateQuantityForm0" name="uniUpdateQuantityForm0" action="/ec/cart/update/quantity" method="post"><input id="pk" name="pk" value="12605385080876" type="hidden">
		
    
    <input class="g-input g-input-sm g-fw" 
    type="text" 
    name="quantity"
    v-model="n.quantity"
    oninput="value = value.replace(/\D-/g , '')"
    aria-label="個数" 
    maxlength="3">


				<div class="g-formGrid_error-alone" id="p-cartItem_pcs0_alert" role="alert">
				</div>
				<div>
        <input type="hidden" name="CSRFToken" value="a150be12-32dd-48ef-8288-25f9757878d6">
        </div></form>
		</div>
		<p class="p-cartItem_btn"><a class="g-btn g-btn-sm g-btn-em g-fw g-sm-font-md" 
       href="javascript:chgItem('uniAddLaterListEntryForm','0',false)" data-once="">
			<span>あとで買う</span>
      </a>
    </p>


		<p class="p-cartItem_del"
       :id="n.id"
    @click="deleteItem(n.id, n.userId)" style="cursor: pointer">
      <span class="material-symbols-outlined" >close</span>
			<span>削除</span></p>


	<div class="p-cartItem_sum">
		<p class="g-price">
			<span>個別送料</span>0<span>円</span></p>
		<p class="g-price g-lg-price-lg">
			<span>小計</span>{{ n.price*n.quantity }}<span>円 （税込）</span></p>
	</div>
	</div>
	</div>
    <div class="p-cartItem_addon g-sm-units-sm g-lg-units-lg">
		<ul class="g-flow-xs g-item_label">
			<li class="g-label-brand">店舗受取可能商品</li>
		</ul>
	</div>
	</li>
	</ul>
	</div>
  </template>
</template>

<script setup lang="ts">

import {computed , onMounted} from 'vue';
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
const userId = route.params.userId;
onMounted(() => {
	store.dispatch("setCart",userId)
});
let cartList = computed (() => store.getters.getCart);

// const props = defineProps<{
//   photo:string,
//   goodsTitle:string,
//   sizeValue:number,
//   color:string,
//   goodsSize:string,
//   price:number,
//   quantity:number
// }>();

// const{photo,goodsTitle,sizeValue,color,goodsSize,price}=toRefs(props);

// const quantity = ref(props.quantity)


// const subtotal = computed (() =>
//     +quantity.value * +price.value);

const deleteItem = (id:number,userId:number) => {
  store.dispatch("deleteCart",{id, userId});
};






</script >

<style scoped>
.g-label-brand {
  color: #009e96;
  border: 2px solid #009e96;
  width: 200px;
  margin-left: 300px;
  margin-bottom: 100px;
  font-size: 4px;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-media-lg {
  margin-right: 12.5%;
}
.g-media_head {
  margin-right: 12.5%;
}
a {
  text-decoration: none;
  color: #333;
  cursor: pointer;
}
/* .g-media {
  font-size: 1.6rem;
  line-height: 1.5;
} */
.g-price {
  font-size: 1.1rem;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
  color: #000;
}
.g-price span,
.g-lg-price span {
  font-size: 1.1rem;
}
* {
  box-sizing: border-box;
}
.p-cartItem .g-media_foot {
  margin-left: 20px;
}
.g-layout-cart .g-layout_body {
  -ms-grid-row: 3;
  grid-row: 3;
  -ms-grid-column: 1;
  grid-column: 1;
}
.g-media,
.g-lg-media {
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}
.p-cartItem {
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
}
.g-layout-cart .g-layout_body {
  -ms-grid-row: 3;
  grid-row: 3;
  -ms-grid-column: 1;
  grid-column: 1;
}
.g-btn,
.g-lg-btn {
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: normal;
}
.g-btn > span:only-child,
.g-lg-btn > span:only-child {
  padding: 5px 10px;
  transform: none;
}
.g-btn > span,
.g-lg-btn > span {
  display: flex;
  min-height: 46px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.g-btn-em {
  color: #009e96;
}
.p-cartItem_sum {
  width: 100px;
  margin: 6px 0 0 10px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 3;
  grid-row: 1/4;
  -ms-grid-column: 2;
  grid-column: 2;
}
.g-price span,
.g-lg-price span {
  font-size: 1.1rem;
  font-weight: normal;
  margin-right: 0.2em;
  margin-left: 0.2em;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
}
.g-media-lg,
.g-lg-media-lg {
  -ms-grid-columns: minmax(160px, 13.33333%) 1fr auto;
  grid-template-columns: minmax(160px, 13.33333%) 1fr auto;
}
.p-cartItem_addon {
  -ms-grid-row: 2;
  grid-row: 2;
  -ms-grid-column: 2;
  -ms-grid-column-span: 2;
  grid-column: 2/4;
  margin-top: 10px;
}
.p-cartItem .g-media_foot {
  margin-left: 20px;
}
.p-cartItem_controls {
  -ms-grid-rows: auto auto auto;
  grid-template-rows: auto auto auto;
  -ms-grid-columns: auto auto;
  grid-template-columns: auto auto;
  display: grid;
}
.g-fw {
  width: 100%;
}
.p-cartItem_pcs .g-input {
  text-align: right;
}
.g-input-sm {
  padding: 8px 11px 7px;
}
.g-input {
  min-width: 0;
  padding: 11px 14px;
  text-align: left;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input,
textarea,
select,
optgroup,
button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
}
.g-media .g-media_body,
.g-lg-media .g-media_body {
  -ms-grid-row: 1;
  grid-row: 1;
  -ms-grid-column: 2;
  grid-column: 2;
  display: block;
}
.g-font-sm {
  font-size: 0.8rem;
}
.p-cartItem_pcs {
  -ms-grid-row: 1;
  grid-row: 1;
  -ms-grid-column: 1;
  grid-column: 1;
  max-width: 92px;
}
.g-btn-sm > span,
.g-lg-btn-sm > span {
  min-height: 34px;
}
.p-cartItem_btn {
  margin-top: 10px;
  -ms-grid-row: 2;
  grid-row: 2;
  -ms-grid-column: 1;
  grid-column: 1;
}
.g-price,
.g-lg-price {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  color: #000;
}
.p-cartItem_sum span {
  font-size: 0.8rem;
}
.g-price span,
.g-lg-price span {
  margin-right: 0.2em;
  margin-left: 0.2em;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
}
</style>