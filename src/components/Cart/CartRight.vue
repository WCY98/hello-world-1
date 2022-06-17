<template>
<div data-attr="{&quot;lg&quot;:{&quot;data-sticky&quot;:true}}" data-sticky="true">
	<section class="g-pane g-pane-gray g-units-lg g-lg-sticky" style="width:70%" >
    <section class="g-pane g-pane-gray g-units-lg g-lg-sticky" style="height:70%" >
		<div class="p-payment">
			<dl class="p-payment_total">
                <dt class="p-paymentAmountLabel">お支払金額</dt>
                <dd class="g-price g-price-lg">
                    {{totalprice}}<span>円</span>
                </dd>
            </dl>
        <div class="p-payment_body g-units-lg">
            <dl class="p-payment_itemized p-shorten-dl" id="p-payment_itemized">
                <a href="#p-aboutAcquiredPointModal" id="aboutAcquiredPoint" aria-expanded="false" aria-controls="p-aboutAcquiredPointModal">
                    <dt>獲得予定ポイント
                        <!-- <span style="margin-right:10px;"> -->
                        <!-- </span> -->
                    <span class="material-symbols-outlined" >
!!!
</span>
                    </dt>
                </a>
			<dd class="p-pointMerginTop">
				{{totalpoint}}<span>pt</span>
			</dd>
            <dt class="p-payment_sum p-paymentSumShorten">
                商品金額合計
            </dt>
            <dd>
                {{subtotal}}<span>円</span>
            </dd>
            <dt>送料</dt>
            <dd>
                {{postage}}<span>円</span>
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
                            <span class="g-checkable_label" style="font-size: 20px">ご指定の場所に配送する</span>
                        </span>
                    </label>
				</li>
				<li class="g-mt-10">
                    <label class="g-checkable">
						<input type="radio" name="checkoutFlowMode" value="PICKUP">
                        <span>
                            <i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i>
                            <i class="g-s g-s-radio-off g-checkable_off" aria-hidden="true"></i>
                            <span class="g-checkable_label" style="font-size: 20px">
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
            <div v-if="subtotal < 11000">
            <p class="g-price p-calcShipping" >
                <span >あと</span>{{freeEdge}}
                <span>
                    <span>円</span>（税込）で
                    <br>
                    <b class="g-color-strong">送料無料</b>
                </span>
            </p>
            </div>
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
                <button class="g-btn g-btn-cv g-fw" onclick="javascript:checkoutFlowModeForm.submit();return false;"
                >
                <span>レジへ進む</span>
                </button>
            </p>
			<p>
                <a class="g-btn g-fw" href="/ec/">
                    <span>ショッピングを続ける</span>
                    <span class="material-symbols-outlined green-icon">
                chevron_right
              </span>
                </a>
            </p>
		</div>
        </section>
	</section>
</div>
</template>

<script setup lang="ts">
import { onMounted, computed} from 'vue';
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const route = useRoute();
const userId = route.params.userId;
const store = useStore();
onMounted(() => {
    store.dispatch("setCart",userId)
});

//
const freeEdge = computed (() => (11000-subtotal.value))

const totalprice = computed (() => subtotal.value + postage.value);

const totalpoint = computed (() => Math.round(subtotal.value/110));

const subtotal = computed (() => store.getters.getSubtotal)

const postage = computed (() => {
    if (subtotal.value > 10000 ) {
        return 0;
    }else{
        return 550;
    }
})
</script>

<style scoped>
.p-payment_itemized dt, .p-payment_itemized dd {
    padding: 9px 0 6px 0;
    border-top: 1px solid #dbdbdb;
}
.p-shorten-dl dt, .p-shorten-dl dd {
    padding: 4px 0px !important;
}
.p-payment_sum, .p-payment_sum + dd {
    margin-top: 9px;
    border-top: 2px solid #b3b3b3 !important;
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
.g-color-strong, .g-lg-color-strong {
    color: #eb6157 !important;
}
b {
    font-weight: normal;
}
.material-symbols-outlined{
    color:#009e96;
    font-size:3px
}
.g-layout_sidebar {
  width: 320px;
}
.g-layout-cart {
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 1fr 400px;
}
.g-layout-cart .g-layout_sidebar,
.g-layout-purchase .g-layout_sidebar {
  margin-left: 40px;
}
.g-layout_sidebar [data-sticky="true"] {
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
}
.g-pane,
.g-lg-pane {
  padding: 30px;
}
.g-pane-gray,
.g-lg-pane-gray {
  background-color: #f7f7f7;
}
.g-pane,
.g-lg-pane {
  display: block;
}
.p-payment_total {
  font-weight: bold;
  color: #eb6157;
}
.p-payment dt {
  float: left;
  clear: left;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
}
.p-payment dd {
  overflow: hidden;
  text-align: right;
}
.g-price-lg,
.g-lg-price-lg {
  font-size: 1.3rem;
}
.g-price-lg span {
  font-size: 0.8rem;
}
a {
  text-decoration: none;
  color: #333;
}
.g-list-note {
  font-size: 0.7rem;
  line-height: 1.58333;
  text-indent: -1em;
  color: #808080;
}
.g-list-note > li::before {
  content: "\203B";
}
ul,
ol {
  padding: 0;
  list-style: none;
}
input {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
}
.g-foot-v {
  display: flex;
  flex-direction: column;
}
.g-btn {
  font-size: 1rem;
  line-height: 1;
}
.g-btn-cv {
  border-color: #eb6157;
  background-color: #eb6157;
  color: #fff;
}
.g-fw,
.g-lg-fw {
  width: 100% !important;
}
.p-calcShipping {
    color: #eb6157;
    font-size:35px
}
.p-calcShipping span {
    color: #333;
}
.p-calcShipping span {
    font-size: 1.4rem;
    line-height: 1.42857;
}
</style>