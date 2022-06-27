<template>
<ul id="p-ProductList" class="g-itemList g-itemList-border g-mt-20 g-mb-20">
    <li class="g-itemList_item">
        <div class="g-media g-media-lg g-media-lead g-media-tail p-favoriteItem">
            <div class="g-media_lead g-align-im">
                <div class="g-checkable">
                    <input type="checkbox" name="productCheckBox" value="10662529991358" data-checkall-children="favorite">
                    <span><i class="g-s g-s-checkbox-on g-checkable_on" aria-hidden="true"></i>
                          <i class="g-s g-s-checkbox-off g-checkable_off" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        <div class="g-media_head" style="width: 400px;">
            <a class="g-hover" href="/goods/detail/10195">
                <img class="g-fw-pic" :src="props.imgUrl" alt="">
            </a>
       <div >
        <div class="g-media_body g-sm-units-xs g-lg-units-sm" >
            <p class="g-media_h" >
                <a href="/goods/detail/10195">{{props.skuName}}</a>
            </p>
            <p class="g-price">
                {{props.price}}
                <span class="g-price-unit">円（税込）</span>
            </p>
            <dl class="g-flow-gm" style="width: 50px;">
                <dt>数量</dt>
                <dd style="width: 25px;">
                    <input class="g-input-addtocart" type="text" inputmode="numeric" name="quantity" value="1" size="5" id="p-pieces">
                </dd>
            </dl>
        
        </div>
        <div class="g-media_tail g-units g-sm-align-tc">
            <div class="g-position-r">
                <div class="cartBtnArea">
                    <button class="g-btn-foot" id="p-addItem7565623" type="button" data-sku-code="7565623" data-price-without-tax="1810.0" data-category="敷きパッド" data-category-id="11060" data-product-id="7565623s" data-bundle="false">
                        <i class="g-i-add-cart" aria-hidden="true"></i>
							<span>カートに入れる</span>
					</button>
				</div>
			</div>
        </div>
        </div>
        </div>
        </div>
    </li>
</ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props=defineProps<{
    skuName:string,
    price:number,
    imgUrl:string
}>();
</script>

<style scoped>
.g-checkable{
    margin-left: 100px;
}
.g-fw-pic{
    margin-right:800px;
    width: 150px;
    height: 150px;
}
.g-media_h{
    margin-left:200px;
    margin-top:-150px;
    width:500px;
    font-size:1rem
}
.g-price{
    margin-left:200px;
    font-size:1.3rem
}
.g-price-unit{
    font-size:0.8rem
}
.g-flow-gm{
    margin-left: 228px;
    font-size: 1rem;
}
.g-input-addtocart{
    margin-left: 100px;
    /* margin-bottom:60px;
    margin-right: 30px; */
    margin-top:-50px
}
.cartBtnArea{
    margin-left: 200px;
    width:200px;
    margin-top: 20px;
    font-size: 1rem;
    padding:2px
}
</style>