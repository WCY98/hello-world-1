<template>
<div class="g-units-lg">
<dl class="p-customize js-sku-variations" data-index="0">
<dt>サイズ：<b id="p-customize0サイズ">{{ goodsSize }}</b></dt>
	<dd>
		<div class="g-select g-select-sm js-sku-variations-dropdown">
            <i class="g-i g-i-dropdown" aria-hidden="true"></i>
            <select 
            v-model = "goodsSize"
            @change="store.commit('setImgList',{goodsSize,color})"
            name="" 
            required=""
            aria-required="true" 
            aria-label="サイズの選択" 
            data-control="#p-eo-label-">

        <option disabled value="" selected></option>
		<template v-for= "(v, index) in variants" :key="index">
             <option 
				:value="v.goodsSize" 
				
                :data-label="v.goodsSize" data-parent="">{{v.goodsSize}}
					</option>
                    </template>
				</select>
		</div>
	</dd>
<dt>カラー：<b id="p-customize1カラー">{{color}}</b></dt>
<dd>
	<ul class="g-flow-sm">
        <select 
            v-model = "color"
            @change = "changeColor"
            >
		<option v-for= "(c, index) in firstVarColors" :key="index">
			<!-- <label class="g-checkable g-checkable-circle">
				<input type="radio" 
                    name="1カラー" 
                    :value="c.colorValue" 
                    data-parent="05700010014" 
                    data-index="0" 
                    :data-label= "c.color" 
                    data-control="#p-customize1カラー">
			<span><span class="g-checkable_checked"></span>
            <img :alt="v.color"></span>
				</label> -->
                {{c}}
		</option>
        </select>
			</ul>
	</dd>
<div class="js-catch-copy">Tシャツのような肌ざわり、ニット素材。</div>

<div class="g-units-xs js-sku-price">
	<div>
		<div class="g-flow-0 g-align-fbl">
			<dl class="p-price">
				<dd class="g-price g-price-lg price-size-up ">
					{{ price }}<span>円</span></dd>
				</dl>
		</div>
		
		</div>		
	
	<div class="g-butterfly">
			<p class="p-point">
				獲得ポイント<span class="g-digit">{{ point }}pt </span> 付与</p>
			<p class="g-font-sm p-point-link">
				<a class="g-link" href="/ec/userguide/memberscardpoint/">
					<span>ポイントについて</span>
					<i class="g-i g-i-info" aria-hidden="true"></i>
				</a>
			</p>
		</div>
	</div>
</dl>
</div>
</template>

<script setup>
import { computed, onMounted, reactive, toRefs} from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
    store.dispatch("setSizeList",goodsId)
});
let variants = computed(() => store.getters.getVariants);
let firstVarColors = computed(() => {
    if(store.getters.getVariants[0])
    return store.getters.getVariants[0].color;
    else
    return [];
});
const changeColor = (e) =>{
    store.commit('setImgList',{"goodsSize":goodsSize.value,
                                "color":e.target.value})
}
// let color = computed(() => store.getters.getColor);
// let goodsSize = computed(() => store.getters.getGoodsSize);
const state = reactive({
    goodsSize: "single",
});
let { goodsSize } = toRefs(state);
const state1 = reactive({
    color: "gray",
});
let {color} = toRefs(state1);

const price = computed(() => store.getters.getNewList1.price)
const point = computed(() => store.getters.getNewList1.point);
</script>

<style>
body {
    font-size: 1.4rem;
    line-height: 1.5;
    font-family: sans-serif;
    color: #333;
    background-color: #fff;
    text-size-adjust: 100%;
}
dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
*, *::before, *::after {
    box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
}
.js-sku-price, .bundle-js-price {
    width: 100%;
}
/* .g-flow, .g-flow-sm, .g-flow-0, .g-sm-flow-0, .g-flow-xs, .g-sm-flow-xs, .g-flow-sm, .g-sm-flow-sm, .g-flow-lg, .g-sm-flow-lg, .g-flow-xl, .g-sm-flow-xl {
    display: flex;
    flex-wrap: wrap;
} */
.g-align-fbl, .g-sm-align-fbl {
    align-items: baseline !important;
}
p, form, h1, h2, h3, h4, h5, h6, ul, ol, dl, dd, input, textarea, select, button {
    margin: 0;
}
.g-price, .g-sm-price {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-weight: bold;
    color: #000;
}
dd.price-size-up>span {
    font-size: 1.6rem;
}
dd.price-size-up {
    font-size: 3.5rem;
}
.p-price {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
}
.g-flow-0, .g-sm-flow-0 {
    margin-bottom: 0;
    margin-left: 0;
}
.g-units-xs > *:nth-child(n + 2):not(.g-units_ignore), .g-sm-units-xs > *:nth-child(n + 2):not(.g-units_ignore) {
    margin-top: 5px;
}
.g-butterfly, .g-sm-butterfly {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.js-sku-price, .bundle-js-price {
    width: 100%;
}
/* p,
form,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
dd,
input,
textarea,
select,
button {
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
dl {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
b {
  font-weight: bold;
}
body {
  font-size: 1.4rem;
  line-height: 1.42857;
}
dd {
  display: block;
  margin-inline-start: 40px;
}
.g-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
.g-select-sm .g-i {
  right: 7px;
}
.g-select option {
  color: #333;
}
option {
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
.g-flow-sm,
.g-lg-flow-sm {
  margin-bottom: -10px;
  margin-left: -10px;
}
.g-flow,
.g-lg-flow,
.g-flow-0,
.g-lg-flow-0,
.g-flow-xs,
.g-lg-flow-xs,
.g-flow-sm,
.g-lg-flow-sm,
.g-flow-lg,
.g-lg-flow-lg,
.g-flow-xl,
.g-lg-flow-xl {
  display: flex;
  flex-wrap: wrap;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-flow-sm > *,
.g-lg-flow-sm > * {
  margin-bottom: 10px;
  margin-left: 10px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  width: 40px;
  height: 40px;
}
.g-checkable-circle,
.g-lg-checkable-circle {
  border-radius: 50%;
}
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  width: 35px;
  height: 35px;
  padding: 5px;
}
.g-checkable-img,
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-img,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 0 1px #dbdbdb inset;
}
.g-checkable,
.g-lg-checkable {
  line-height: 1;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.g-checkable input[type="radio"],
.g-checkable input[type="checkbox"],
.g-lg-checkable input[type="radio"],
.g-lg-checkable input[type="checkbox"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-color: transparent;
  border-radius: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.g-checkable-circle .g-checkable_checked,
.g-lg-checkable-circle .g-checkable_checked {
  border-radius: 50%;
}
.g-checkable .g-checkable_checked,
.g-lg-checkable .g-checkable_checked {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 0 2px #009e96 inset;
}
.g-checkable-img,
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-img,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 0 1px #dbdbdb inset;
}
.g-checkable-circle img,
.g-sm-checkable-circle img {
  overflow: hidden;
  border-radius: 50%;
}
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
} */
</style>