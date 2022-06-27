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
    お気に入り商品
</div>
<div class="g-layout_head">
    <h1>お気に入り商品</h1>
</div>
<div class="g-lg-inputGroup p-createList" style="display:flex">
	<div>
        <input class="g-input g-input-sm" id="createWishlistName" type="text" name="wishlistName" size="30" 
        placeholder="新規リスト名を入力" aria-describedby="p-list-new_alert" 
        data-validation-rules="[{&quot;rule&quot;:&quot;length&quot;,&quot;max&quot;:20}]">
        <p class="g-formGrid_error-alone g-sm-align-tl" id="p-list-new_alert" role="alert"></p>
        </div>
        <p>
            <a class="g-btn-button" role="button" onclick="onclickcreate(&quot;create-wishlist&quot;);" aria-expanded="false" aria-controls="">
            <span>リストを作成</span></a></p>
</div>
<section class="g-block-sm">
    <div id="entryList">
        <div id="wishlistEntryList" class="g-block-sm">
            <div class="p-listControl" >
                <label class="g-checkable">
                    <div class="g-check-check" style="display:flex;width: 20px;">
                    <input type="checkbox" data-checkall="favorite">
                    </div>
                    <span style="display:flex">
                        <i class="g-s g-s-checkbox-on g-checkable_on" aria-hidden="true"></i>
                        <i class="g-s g-s-checkbox-off g-checkable_off" aria-hidden="true"></i>
                        <span class="g-checkable_label">すべて選択</span>
                    </span>
                </label>
            <div class="p-listControl_edit">
                <div>チェックしたものを</div>
                <ul class="g-linkList-lg" style="display:flex">
                <span class="material-symbols-outlined">delete</span>
                    <span>削除</span>
                </ul>
            </div>
            <div class="g-body-wishitem" 
              v-for="(wish,index) in wishList" :key="index">
                
                <wish-item v-bind="wish"></wish-item>
                
            </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup lang="ts">
import WishItem from './WishItem.vue';
import { onMounted } from "vue";
import { computed } from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const route = useRoute();
const userId = route.params.userId;
// const userId = 989898;
const store = useStore();
onMounted(() => {
  store.dispatch("setWishList", userId);
});
const wishList = computed(() => store.getters.getWishList)
</script>

<style scoped>
.g-router{
    color:rgb(160, 158, 158);
    font-size:0.8rem;
    margin-bottom: 70px;
}
.g-layout_head{
    font-size:0.8rem;
    margin-right: 750px;
    margin-top:-50px
}
.g-lg-inputGroup{
    margin-left:200px;
    margin-top:20px;
    font-size: 0.8rem;
}
.g-btn-button{
    height:70px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    font-size: 1rem;
    color:white;
    background-color: #009e96;
    border-color: #009e96;
    border-radius: 5%;
}
.g-check-check{
    margin-top: 40px;
    margin-left:200px;
}
.g-checkable_label{
    margin-left: 220px;
    margin-top: -20px;
    font-size:1rem
}
.p-listControl_edit{
    margin-top:-25px;
    margin-right:500px;
    font-size: 1rem;
}
.g-linkList-lg{
    margin-left: 530px;
    margin-top: -29px;
}
.g-body-wishitem{
    margin-top: 20px;
}
.g-itemList-border, .g-lg-itemList-border {
    border: 0 solid #dbdbdb;
    border-top-width: 1px;
    border-bottom-width: 1px;
}
ul, ol {
    padding: 5px;
}
</style>