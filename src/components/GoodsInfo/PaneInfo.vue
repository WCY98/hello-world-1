<template>
<div class="g-layout_sidebar" style="margin:30px">
 <div class="g-pane g-pane-gray">
				<div class="g-position-r g-units-lg js-sku-sidebar">
					
					<dl class="p-order">
	<dt>納品方法</dt>
		<dd><span>玄関先迄納品（店舗受取可能商品）</span></dd>
	<dt>配送目安</dt>	
		<dd>2～6日で出荷</dd>
	<dt>返品・交換</dt>
		<dd>14日間返品可能<p class="p-order_help">
					<a class="g-link" href="/ec/userguide/cancel/">
						<span>返品・交換について</span>
                        <i class="g-i g-i-info" aria-hidden="true"></i>
					</a>
				</p>
		</dd>
	<dt>送料</dt>
	<dd>
		<span class="g-label-price">有料</span>
        <p class="p-order_help">
            <a class="g-link" href="/ec/userguide/delivery/">
                <span>送料について</span><i class="g-i g-i-info" aria-hidden="true"></i></a></p>
	</dd>
	</dl>

<p><img src="/ecstatic/front/free_shipping2.jpg" alt=""></p>
<dl class="p-pcs">
	<dt>
        <label for="p-pieces">数量</label>
	</dt>
	<dd>
        <input class="g-input g-input-sm addToCartQty" id="p-pieces" type="text" name="quantity" value="1" size="5" maxlength="3">
	</dd>
</dl>

<div>
	<div class="g-flow-0 g-align-fbl">
		<dl class="p-price p-price-area">
			<dd class="g-price g-price-lg g-price-ra price-size-up ">
				{{ price }}<span>円</span></dd>
			</dl>
	</div>
	</div>
			<div class="g-foot-v">
				<div class="cartBtnArea disp">
                    <a href="/cart/page/userId" style="text-direction:none">
					<button onclick="" class="g-btn g-btn-cv g-btn-c g-fw addToCartBtn" id="p-addItem" type="button">
								<i class="g-i g-i-add-cart" aria-hidden="true"></i>
                                <span>カートに入れる</span>
                                </button>
                                </a>
						</div>
			</div>
		<ul class="g-grid-2 g-grid-xs p-misc">
		<li class="g-grid_item p-misc_item">
				<a onclick="jsShopStockClick()" class="g-hover js-popUp-store-inventory" href="#p-stockModal" role="button" aria-expanded="false" data-sku-code="7564862">
				<div class="p-misc_i g-hover_img">
							<i class="g-s g-s-stock-g" aria-hidden="true"></i>
						</div>
					<span class="p-misc_label">店舗在庫を確認</span>
					</a>
			</li>
		<li class="g-grid_item p-misc_item">
				<a onclick="jswishclick()" id="addFavoriteA" data="7564862" data-login="113810160" class="g-hover" data-clickable="">
					<div class="p-misc_i g-hover_img ">
						<i class="g-s g-s-favorite-g" aria-hidden="true"></i>
					</div>
					<span class="p-misc_label">お気に入り</span>
				</a>
			
				<a onclick="" id="addFavoriteDiv" class="g-hover" style="display: none;">
					<div class="p-misc_i g-hover_img ">
							<i class="g-s g-s-favorite"></i>
					</div>
					<span class="p-misc_label">お気に入り</span>
				</a>
		</li>
	</ul>
          
          </div>	
			</div>
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
const price = computed(() => store.getters.getNewList1.price)
</script>

<style scoped>
.g-pane, .g-lg-pane {
    padding: 50px;
	width:80%
}
dl {
  width: 80%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
dt {
  float: left;
  width: 50%;
  /* adjust the width; make sure the total of both is 100% */
  padding: 0;
  margin: 0;
}
dd {
  float: left;
  width: 50%;
  /* adjust the width; make sure the total of both is 100% */
  padding: 0;
  margin: 0;
  font-weight: bold;
}
.g-layout_sidebar {
  position: sticky;
  top: 0;
}
#p-addItem {
  font-size: 16px;
  margin: 8px 4px;
  cursor: pointer;
  padding: 15px 32px;
  border-color: #eb6157;
  background-color: #eb6157;
}
.g-pane-gray,
.g-lg-pane-gray {
  background-color: #f7f7f7;
}
.p-sm-full-cls {
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
}
.g-fw,
.g-lg-fw {
  width: 100% !important;
}
.g-btn-c,
.g-lg-btn-c {
  justify-content: center;
}
.g-btn-cv,
.g-btn-cv,
.g-btn,
.g-lg-btn {
  /* font-size: 1.6rem; */
  /* line-height: 1.5; */
  /* font-weight: normal; */
  display: inline-flex;
  padding: 0;
  transition: background-color 0.2s;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>