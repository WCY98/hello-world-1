<template>
<div class="g-router" style="display:flex">
    <a href="/" style="color:rgb(156, 187, 176);">ホーム</a>
    <div class="arrows" >
    <span class="material-symbols-outlined">chevron_right</span>
    </div>
    <a href="/my/page/989898" style="color:rgb(156, 187, 176);">マイページ</a>
    <div class="arrows">
    <span class="material-symbols-outlined">chevron_right</span>
    </div>
    注文履歴
</div>
<div class="g-order_head">
<div style="display:flex">
    <div class="g-order_headtitle1">
        <dt class="g-order_headtitle1-1">注文履歴</dt>
        <dt class="g-order_headtitle1-2">
            <span class="material-symbols-outlined" style="margin-left:40px">auto_awesome</span>
            リコール該当商品は『注文詳細』画面よりご確認下さい。</dt>
    </div>

    <div class="g-order_headtitle2">
        <div>
            <button class="g-order_headbtn">店舗購入履歴を取得する</button>
        </div>
        <div class="g-order_headtitle2-1">
        <span class="material-symbols-outlined">auto_awesome</span>
        上記ボタンで最新の『店舗』購入履歴を取得できます。
        </div>

        <div class="g-order_headtitle2-2" style="display:flex">
        <span class="material-symbols-outlined">auto_awesome</span>
            <div class="g-order_headtitle2-2-content1" >約15分程度で履歴が反映されます。</div>
        <span class="material-symbols-outlined">auto_awesome</span>
            <div class="g-order_headtitle2-2-content2" ></div>メンテナンス時を除く。
        </div>
    </div>
</div>
    <div class="g-order_headtitle3" style="display:flex">
        <div class="g-order_headtitle3-1">
            注文時期を選択
            <select class="g-order_headtitle3-1-content">
                <option>過去半年分の注文</option>
                <option>2022年分の注文</option>
                <option>2021年分の注文</option>
                <option>2020年分の注文</option>
                <option>2019年分の注文</option>
                <option>2018年分の注文</option>
            </select>
        </div>

        <div class="g-order_headtitle3-2">
            注文状況を選択
            <select class="g-order_headtitle3-2-content">
                <option>すべて</option>
                <option>受注済</option>
                <option>出荷・お渡し準備中</option>
                <option>出荷・配送・お渡し済</option>
                <option>キャンセル済</option>
            </select>
        </div>

    </div>

</div>
<order-item></order-item>
</template>

<script setup lang="ts">
import OrderItem from "./OrderItem.vue";

</script>

<style scoped>
 .g-order_headtitle1-1{
    font-size: 2rem;
    font-weight:bold;
    margin-left: -120px;
} 
.g-order_headtitle1-2{
    font-size: 0.8rem;
    color:red;
    margin-left: 40px;
}
.g-order_headtitle2{
    margin-left:40px;
    width:800px
}
.g-order_headbtn{
    height:40px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1rem;
    color:rgb(156, 187, 176);
    background-color: white;
    border-color: rgb(152, 192, 178);
    border-radius: 5%;
}
.g-order_headtitle2{
    font-size:0.8rem;
}
.g-order_headtitle2-2{
    margin-top: 10px;
    margin-bottom: 20px;
}
.material-symbols-outlined{
    font-size:0.8rem
}
.g-order_headtitle2-2{
    margin-left: 300px;
    color:rgb(160, 158, 158)
}
.g-order_headtitle2-1{
    margin-left: 135px;
    color:rgb(160, 158, 158)
}
.g-order_headtitle3{
    margin-left: 150px;
    margin-bottom: 30px;
    font-size: 1rem;
}
.g-order_headtitle3-1-content,
.g-order_headtitle3-2-content {
    color:rgb(160, 158, 158);
    margin-left: 15px
}
.g-order_headtitle3-2{
    margin-left: 45px
}
.g-router{
    color:rgb(160, 158, 158);
    font-size:0.8rem;
    margin-bottom: 70px;
}
</style>