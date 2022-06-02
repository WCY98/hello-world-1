<template>
<dt>サイズ：<b id="p-customize0サイズ">{{ goodsSize }}</b></dt>
	<dd>
		<div class="g-select g-select-sm js-sku-variations-dropdown">
            <i class="g-i g-i-dropdown" aria-hidden="true"></i>
            <select 
            v-model = "goodsSize"
            name="" 
            required=""
            aria-required="true" 
            aria-label="サイズの選択" 
            data-control="#p-eo-label-">

        <option disabled value="" selected></option>
		<template v-for= "(size, index) in sizeList" :key="index">
             <option 
				:value="size.goodsSize" 
				:data-code="size.dataCode" 
                :data-label="size.goodsSize" data-parent="">{{size.goodsSize}}
					</option>
                    </template>
				</select>
		</div>
	</dd>
</template>

<script setup>
import { computed, onMounted, reactive, toRefs} from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
    store.dispatch("setInfo",goodsId)
});

const sizeList = computed(() => store.getters.getInfo.sizeList1);

const state = reactive({
    goodsSize: "single",
});
let { goodsSize } = toRefs(state);
</script>

<style>
div {
    display: block;
}
p, form, h1, h2, h3, h4, h5, h6, ul, ol, dl, dd, input, textarea, select, button {
    margin: 0;
}
dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.p-customize dt {
    margin-bottom: 7px;
}
b {
    font-weight: bold;
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
.g-select .g-i {
    font-size: 1.8rem;
}
.g-select .g-i {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    color: #009e96;
}
.g-i {
    flex-shrink: 0;
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
    font-family: 'icon';
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    line-height: 1;
    letter-spacing: 0;
    text-transform: none;
    pointer-events: none;
    -webkit-font-smoothing: antialiased;
}
.g-i::before {
    float: left;
}
.g-i-dropdown::before {
    content: '\EA0A';
}
*, *::before, *::after {
    box-sizing: border-box;
}
.g-select-sm select {
    height: 34px;
    padding-right: 33px;
}
.g-select select {
    width: 100%;
    padding: 0 39px 0 14px;
    vertical-align: bottom;
    border-width: 0;
    background-color: transparent;
    appearance: none;
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
input, textarea, select, optgroup, button {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
}
.g-select-sm .g-i {
    right: 9px;
}
.g-select .g-i {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    font-size: 1.2rem;
    right: 14px;
    color: #009e96;
}
</style>