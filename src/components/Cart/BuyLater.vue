<template>
<div class="g-layout_foot">
	<div class="g-hr g-only-lg"></div>
		<section class="g-lg-block">
			<h2 class="g-h-2" style="font-size: 1.5rem"
            v-if="buyLaterItem.length !=0">「あとで買う」に入っている商品</h2>
            <template v-for="item in buyLaterItem" :key="item">
			<ul class="g-itemList">
				<li class="g-itemList_item g-media g-media-lg p-cartItem" style="display:flex">
					<p class="g-media_head">
                        <a class="g-hover" href="/goods/detail/10195">
                            <img class="g-fw g-rc" 
                            :src="item.photo"  style="height:100%"
                            :alt="item.goodsTitle">
				</a>
                    </p>
                    <!-- goods info -->
					<div class="g-media_body g-units-sm" >
						<p class="g-media_h" >
                            <a href="/goods/detail/10195"
                            >
                            {{ item.goodsTitle }}
                            </a>
                        </p>
						<p class="g-font-sm">商品コード {{ item.sizeValue}}</p>
						<ul class="g-font-sm">
							<li>カラー：{{ item.color }}</li>
							<li>サイズ：{{ item.goodsSize }}</li>
							<li></li>
						</ul>
						<p class="g-price">{{ item.price}}
                            <span>円 （税込）</span>
                        </p>
						<div class="g-butterfly g-font-sm">
                            <p>
                                2～6日で出荷
                            </p>
						</div>
					</div>

                    <!-- input and price -->
					<div class="g-media_foot">
						<div class="p-cartItem_controls">
                            <p class="p-cartItem_btn"
                            style="width: 200px;"
                               :id="item.id"
                               :item="item"
                               @click="backtoCartList(item.id,item)">
                                <a class="g-btn g-btn-sm g-btn-em g-fw" href="javascript:doRestoreCartEntry(uniRestoreCartEntryForm0);" data-once="">
                                    <span>カートに戻す</span>
                                </a>
                            </p>
					
                            <p class="p-cartItem_del"
                               :id="item.id"
                               @click="deleteByLater(item.id )"
                               style="cursor: pointer">
                                <span style="color: gray">x</span>
                                    <span>削除</span>
                            </p>
							<div class="p-cartItem_sum"></div>
						</div>
					</div>
					<div class="p-cartItem_addon g-sm-units-sm g-lg-units-lg">
						<ul class="g-flow-xs g-item_label">
							<li class="g-label-brand">店舗受取可能商品</li>
						</ul>
                    </div>
				</li>
			</ul>
            </template>
		</section>
</div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const route = useRoute();
const userId = route.params.userId;
const store = useStore();
onMounted(() => {
    store.dispatch("setBuyLaterItem",userId)
});


const buyLaterItem = computed(() => store.getters.getBuyLaterItem);
//delect cart item, then set item
const deleteByLater = (id: number) => {
  store.dispatch("deleteByLater", { id, userId });
};
const backtoCartList = (id, item) => {
  store.dispatch("backtoCartList", { id, item, userId });
};
//mouse event: change style, add underline
// const state = reactive({ underline: "" });

// function mouseOver() {
//   state.underline = " text-decoration: underline";
// }

// function mouseLeave() {
//   state.underline = "";
// }
</script>

<style >
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
.g-font-sm {
  font-size: 0.8rem;
}




</style>
