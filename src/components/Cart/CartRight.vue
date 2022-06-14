<template>
<div data-attr="{&quot;lg&quot;:{&quot;data-sticky&quot;:true}}" data-sticky="true">
	<section class="g-pane g-pane-gray g-units-lg g-lg-sticky">
		<div class="p-payment">
			<dl class="p-payment_total">
                <dt class="p-paymentAmountLabel">お支払金額</dt>
                <dd class="g-price g-price-lg">10520
                    <span>円</span>
                </dd>
            </dl>
        <div class="p-payment_body g-units-lg">
            <dl class="p-payment_itemized p-shorten-dl" id="p-payment_itemized">
                <a href="#p-aboutAcquiredPointModal" id="aboutAcquiredPoint" aria-expanded="false" aria-controls="p-aboutAcquiredPointModal">
                    <dt>獲得予定ポイント
                        <span style="margin-right:10px;">
                        </span>
                    <span class="material-symbols-outlined">
!!!
</span>
                    </dt>
                </a>
			<dd class="p-pointMerginTop">
				90<span>pt</span>
			</dd>
            <dt class="p-payment_sum p-paymentSumShorten">
                商品金額合計
            </dt>
            <dd>
                9970<span>円</span>
            </dd>
            <dt>送料</dt>
            <dd>
                550<span>円</span>
            </dd>
            </dl>
        <ul class="g-list g-list-note">
            <li>送料および手数料はまだ確定しておりません。一部地域へのご配達は、別途料金がかかる場合がございます。(沖縄本島以外の離島の中継料は、別途ご案内いたします)</li>
            </ul>
		</div>
		</div>
        <form id="checkoutFlowModeForm" action="/ec/cart/checkout" method="POST">
            <ul class="g-list">
                <li>
                    <label class="g-checkable">
                        <input type="radio" name="checkoutFlowMode" value="DELIVERY">
                        <span>
                            <i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i>
                            <i class="g-s g-s-radio-off g-checkable_off" aria-hidden="true"></i>
                            <span class="g-checkable_label">ご指定の場所に配送する</span>
                        </span>
                    </label>
				</li>
				<li class="g-mt-10">
                    <label class="g-checkable">
						<input type="radio" name="checkoutFlowMode" value="PICKUP">
                        <span>
                            <i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i>
                            <i class="g-s g-s-radio-off g-checkable_off" aria-hidden="true"></i>
                            <span class="g-checkable_label">
                                <span class="g-align-vm g-mr-10">店舗/配送センターで受け取る</span>
                                <span class="g-label-price">送料無料</span>
                            </span>
                        </span>
					</label>
				</li>
			</ul>
            <div>
                <input type="hidden" name="CSRFToken" value="71cc8595-d4ef-4448-8446-b8fec1638f70">
            </div>
        </form>
        <div>
            <p class="g-price p-calcShipping">
                <span>あと</span>1,030
                <span>
                    <span>円</span>（税込）で
                    <b class="g-color-strong">送料無料</b>
                </span>
            </p>
            <ul class="g-list g-list-note g-unit-xs">
                <li>大型家具除く</li>
			</ul>
		</div>
			<p>
                <a class="g-link" href="#p-pdfModal" role="button" aria-hidden="true" aria-expanded="false" aria-controls="p-pdfModal">
                <i class="g-i g-i-arrow-r"></i>
                <span>見積書（PDF）を出力</span>
                <i class="g-s g-s-pdf">
                </i>
                </a>
            </p>
        <div class="g-foot-v">
            <p>
                <button class="g-btn g-btn-cv g-fw" onclick="javascript:checkoutFlowModeForm.submit();return false;">
                <span>レジへ進む</span>
                </button>
            </p>
			<p>
                <a class="g-btn g-fw" href="/ec/">
                    <span>ショッピングを続ける</span>
                    <i class="g-i g-i-arrow-r" aria-hidden="true">
                    </i>
                </a>
            </p>
		</div>
	</section>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.g-layout-purchase .g-layout_sidebar .g-pane-gray, .g-layout-cart .g-layout_sidebar .g-pane-gray {
    padding: 15px;
}
.g-pane, .g-lg-pane {
    padding: 30px;
}
div {
    display: block;
}
.p-payment_total {
    font-weight: bold;
    color: #eb6157;
}
p, form, h1, h2, h3, h4, h5, h6, ul, ol, dl, dd, input, textarea, select, button {
    margin: 0;
}
*, *::before, *::after {
    box-sizing: border-box;
}
dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.p-payment_total dt {
    margin-top: 3px;
}
.p-payment dt {
    float: left;
    clear: left;
    /* -webkit-font-feature-settings: 'palt'; */
    /* font-feature-settings: 'palt'; */
}
.p-payment dd {
    overflow: hidden;
    text-align: right;
}
.g-price-lg, .g-lg-price-lg {
    font-size: 2.6rem;
}
.p-payment_total dd span {
    font-weight: bold;
    font-size: 1.5rem;
}
.p-payment dd span {
    margin-left: 3px;
}
[aria-expanded][aria-controls]:not([data-breakpoints]):not([disabled]):not([aria-disabled='true']) {
    cursor: pointer;
}
a {
    text-decoration: none;
    color: #333;
}
.p-payment_itemized dt:nth-of-type(1), .p-payment_itemized dd:nth-of-type(1) {
    border-top-width: 0;
}
.p-shorten-dl dt, .p-shorten-dl dd {
    padding: 4px 4px !important;
}
.p-payment_itemized dt, .p-payment_itemized dd {
    border-top: 1px solid #dbdbdb;
}
.material-symbols-outlined {
    color: #009e96;
}
.material-symbols-outlined {
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
.p-paymentSumShorten, .p-paymentSumShorten + dd {
    margin-top: 5px !important;
}
.g-list-note, .g-lg-list-note {
    font-size: 1.2rem;
    line-height: 1.58333;
    text-indent: -1em;
    color: #808080;
}
ul, ol {
    padding: 0;
    list-style: none;
}
.g-list-note > li, .g-lg-list-note > li {
    margin-left: 1em;
}
.g-list-note, .g-lg-list-note {
    font-size: 1.2rem;
    line-height: 1.5;
}
.g-units-lg > *:nth-child(n + 2):not(.g-units_ignore), .g-lg-units-lg > *:nth-child(n + 2):not(.g-units_ignore) {
    margin-top: 20px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.g-checkable, .g-lg-checkable {
    line-height: 1;
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
label {
    cursor: default;
}
.g-checkable input[type='radio'], .g-checkable input[type='checkbox'], .g-lg-checkable input[type='radio'], .g-lg-checkable input[type='checkbox'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-color: transparent;
    border-radius: 0;
    background-color: transparent;
    appearance: none;
}
button, input[type="radio"], input[type="checkbox"] {
    cursor: pointer;
}
input, textarea, select, optgroup, button {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
}
.g-checkable input:not(:checked) + span .g-checkable_on{
    display: none;
}
.g-checkable [class*='g-s-radio-'], .g-lg-checkable [class*='g-s-radio-'] {
    font-size: 2.4rem;
}
.g-s-radio-off {
    background-position: -45em -45em;
}
.g-s {
    flex-shrink: 0;
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
    background-size: 79em 79em;
    line-height: 1;
    letter-spacing: 0;
    pointer-events: none;
    speak: none;
}
.g-checkable > span, .g-lg-checkable > span {
    line-height: normal;
}
.g-label-price {
    color: #eb6157;
    border: 1px solid #eb6157;
}
.g-label-brand, .g-label-price, .g-label-maker, .g-label-required {
    font-size: 1.2rem;
    font-weight: normal;
    line-height: 1;
    display: inline-block;
    padding: 3px 5px;
    vertical-align: middle;
    white-space: nowrap;
    background-color: #fff;
}
.g-price, .g-lg-price {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-weight: bold;
}.p-calcShipping {
    color: #eb6157;
}
.p-calcShipping span {
    color: #333;
}
.p-calcShipping span {
    font-size: 1.4rem;
    line-height: 1.42857;
}
.g-price span, .g-lg-price span {
    font-size: 1.3rem;
    font-weight: normal;
    margin-right: 0.2em;
    margin-left: 0.2em;
    -webkit-font-feature-settings: 'palt';
    font-feature-settings: 'palt';
}
.g-color-strong, .g-lg-color-strong {
    color: #eb6157 !important;
}
b {
    font-weight: normal;
}
.g-price, .g-lg-price {
    font-size: 2rem;
}
.g-unit-xs, .g-lg-unit-xs {
    margin-top: 5px !important;
}
.g-link, .g-lg-link {
    display: inline-flex;
    align-items: center;
}
.g-foot-v, .g-foot-h, .g-lg-foot-v, .g-lg-foot-h {
    margin-top: 30px;
}
.g-foot-v, .g-lg-foot-v {
    display: flex;
    flex-direction: column;
}
.g-fw, .g-lg-fw {
    width: 100% !important;
}
.g-btn, .g-lg-btn {
    font-size: 1.6rem;
    line-height: 1.5;
}
.g-btn-cv, .g-lg-btn-cv {
    border-color: #eb6157;
    background-color: #eb6157;
}
.g-btn-brand, .g-btn-cv, .g-btn-cancel, .g-lg-btn-brand, .g-lg-btn-cv, .g-lg-btn-cancel {
    color: #fff;
}
.g-btn, .g-lg-btn {
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: normal;
    display: inline-flex;
    padding: 0;
    transition: background-color 0.2s;
    vertical-align: middle;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    appearance: none;
}
.g-i-arrow-r, .g-i-arrow-l, .g-i-arrow-u, .g-i-arrow-d, .g-i-arrow-d2 {
    transition: transform 0.3s;
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
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.g-btn > .g-i:last-child, .g-btn > .g-s:last-child, .g-lg-btn > .g-i:last-child, .g-lg-btn > .g-s:last-child {
    margin-right: 8px;
}
.g-btn > .g-i, .g-btn > .g-s, .g-lg-btn > .g-i, .g-lg-btn > .g-s {
    font-size: 1.4rem;
    -ms-grid-row-align: center;
    align-self: center;
}
.g-foot-v, .g-foot-h, .g-lg-foot-v, .g-lg-foot-h {
    margin-top: 30px;
}
.g-foot-v, .g-lg-foot-v {
    display: flex;
    flex-direction: column;
}
.g-layout-purchase .g-layout_sidebar .g-pane-gray, .g-layout-cart .g-layout_sidebar .g-pane-gray {
    padding: 15px;
}
.g-pane-gray, .g-lg-pane-gray {
    background-color: #f7f7f7;
}
.g-pane, .g-lg-pane {
    padding: 30px;
}
.g-pane, .g-lg-pane {
    display: block;
}
.g-layout-cart .g-layout_sidebar, .g-layout-purchase .g-layout_sidebar {
    margin-left: 40px;
}
.g-layout-purchase, .g-layout-cart {
    -ms-grid-rows: auto auto auto auto;
    grid-template-rows: auto auto auto auto;
    -ms-grid-columns: 1fr 300px;
    grid-template-columns: 1fr 300px;
}
</style>