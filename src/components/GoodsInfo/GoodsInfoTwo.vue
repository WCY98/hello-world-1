<template>
<div class="g-units-lg">
<dl class="p-customize js-sku-variations" data-index="0">
<dt>サイズ：<b id="p-customize0サイズ">{{ goodsSize }}</b></dt>
	<dd>
		<div class="g-select g-select-sm js-sku-variations-dropdown">
            <i class="g-i g-i-dropdown" aria-hidden="true"></i>
            <select 
            v-model = "goodsSize"
            @change="change"
            name="" 
            
            aria-required="true" 
            aria-label="サイズの選択" 
            data-control="#p-eo-label-">

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
		<option v-for= "(c, index) in colorList" :key="index">
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

<script setup lang="ts">
import { computed, onMounted} from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";
const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
    store.dispatch("setSizeList",goodsId)
});
let variants = computed(() => store.getters.getVariants);
let colorList = computed(() => store.getters.getColorList);
//     if(store.getters.getVariants[0])
//     return store.getters.getVariants[0].color;
//     else
//     return [];
// });
// const changeColor = (e: { target: HTMLInputElement })=>{
//     store.commit('setImgList',{"goodsSize":goodsSize.value,
//                                 "color":e.target.value})
// }
const changeColor = (e: Event) =>{
  if (e.target instanceof HTMLSelectElement){
    store.commit("setImgList",{goodsSize:goodsSize.value, color:e.target.value});
  }
}

const change = (e: Event) => {
  if (e.target instanceof HTMLSelectElement) {
    // store.commit("setNewList", { size: e.target.value, color: color.value });
    store.dispatch("setImgLists", { goodsSize: e.target.value, color: color.value });
  }
};


// let color = computed(() => store.getters.getColor);
// let goodsSize = computed(() => store.getters.getGoodsSize);
// const state = reactive({
//     goodsSize: "single",
// });
// let { goodsSize } = toRefs(state);
const goodsSize = computed(() => store.getters.getGoodsSize)

const color = computed(() => store.getters.getColor)

// const state1 = reactive({
//     color: "gray",
// });
// let {color} = toRefs(state1);

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
</style>