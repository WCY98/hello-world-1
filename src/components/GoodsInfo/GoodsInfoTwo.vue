<template>
<div class="g-units-lg">
<dl class="p-customize js-sku-variations" data-index="0">
 <info-size></info-size>
 <info-color></info-color>
<div class="js-catch-copy">Tシャツのような肌ざわり、ニット素材。</div>

<div class="g-units-xs js-sku-price">
	<div>
		<div class="g-flow-0 g-align-fbl">
			<dl class="p-price">
				<dd class="g-price g-price-lg price-size-up ">
					1,990<span>円</span></dd>
				</dl>
		</div>
		
		</div>		
	
	<div class="g-butterfly">
			<p class="p-point">
				獲得ポイント<span class="g-digit">18 pt </span> 付与</p>
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

<script>
import InfoSize from "./InfoSize.vue";
import InfoColor from "./InfoColor.vue";

export default {
	components:{InfoSize,InfoColor}
}
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
.g-flow, .g-sm-flow, .g-flow-0, .g-sm-flow-0, .g-flow-xs, .g-sm-flow-xs, .g-flow-sm, .g-sm-flow-sm, .g-flow-lg, .g-sm-flow-lg, .g-flow-xl, .g-sm-flow-xl {
    display: flex;
    flex-wrap: wrap;
}
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