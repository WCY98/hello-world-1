<template>
<div class="g-layout_body">
    <ul class="g-sm-lineGrid-1 g-sm-lineGrid-rc g-lg-grid-3">
        <li class="g-lineGrid_item g-grid_item">
            <a class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover" 
               href="/my/order/989898">
               <div class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText">
                    <div class="g-card_head">
                        <span class="material-symbols-outlined">grading</span>
                    </div>
                    <span class="g-card_body">注文履歴</span>
                    <i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
                </div>
            </a>
        </li>
        
        <li class="g-lineGrid_item g-grid_item">
            <a class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover" 
                href="/my/like/989898">
                <div class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText">
                    <div class="g-card_head">
                        <span class="material-symbols-outlined">favorite</span>
                    </div>
                    <span class="g-card_body">お気に入り商品</span>
                    <i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
                </div>
            </a>
        </li>

        <li class="g-lineGrid_item g-grid_item">
            <a class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover" 
                href="/ec/my-account/mystore">
                <div class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText">
                    <div class="g-card_head">
                        <span class="material-symbols-outlined">volunteer_activism</span>
                    </div>
                    <span class="g-card_body">お気に入り店舗</span>
                    <i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
                </div>
            </a>
        </li>

        <li class="g-lineGrid_item g-grid_item">
            <a class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover" 
                href="/ec/my-account/profileEditSelect">
                <div class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText">
                    <div class="g-card_head">
                        <span class="material-symbols-outlined">person</span>
                    </div>
                    <span class="g-card_body">お客様情報の確認・変更</span>
                    <i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
                </div>
            </a>
        </li>

        <li class="g-lineGrid_item g-grid_item">
            <a class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover" 
                href="/ec/my-account/address-book">
                <div class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText">
                    <div class="g-card_head">
                        <span class="material-symbols-outlined">receipt_long</span>
                    </div>
                    <span class="g-card_body">配送先住所の変更・登録</span>
                    <i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
                </div>
            </a>
        </li>
	
        <li class="g-lineGrid_item g-grid_item">
            <a class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover" 
                href="/ec/my-account/payment-details">
                <div class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText">
                    <div class="g-card_head">
                        <span class="material-symbols-outlined">credit_card</span>
                    </div>
                    <span class="g-card_body">クレジットカードの変更・登録</span>
                    <i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
                </div>
            </a>
        </li>
    </ul>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.change:hover .span-icon {
  color: #6ac8c3;
}
.change:hover .span-text {
  text-decoration: underline;
}
.g-layout_body {
  margin-left: 20px;
}
.g-lg-grid-3 {
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
}
li {
  padding: 10px;
  overflow: hidden;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  width: 230px;
  height: 120px;
  margin: 15px;
  cursor: pointer;
}
ul {
  padding: 0;
  list-style: none;
}
ol {
  padding: 0;
  list-style: none;
}
.material-symbols-outlined {
  font-weight: 500;
  font-size: 3.5rem;
  font-optical-sizing: 48;
  color: #009e96;
  cursor: pointer;
}
.flex-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
  color: #333;
}
.g-card_body {
  font-size: 0.9rem;
  text-align: center;
}
a {
  text-decoration: none;
  color: #333;
}
</style>