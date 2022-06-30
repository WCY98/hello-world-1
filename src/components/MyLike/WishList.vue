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
        <input class="g-input g-input-sm" 
        id="createWishlistName" 
        type="text" 
        name="wishlistName" 
        size="30" 
        placeholder="新規リスト名を入力" 
        @input="updateValue"
        v-model="value">
        <p class="g-formGrid_error-alone g-sm-align-tl" id="p-list-new_alert" role="alert"></p>
        </div>
        <p>
            <a class="g-btn-button" 
            role="button" 
            @click="addWishList"
            aria-expanded="false" aria-controls="">
            <span class="button123">リストを作成</span></a></p>

            <p v-if="value.length > 20" style="color: #eb6157; font-size: small">
               20文字以内で入力してください。
           </p>
            <!-- modal1 リストを作成1-->
    <GDialog v-model="isShow1">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <div class="button1" style="display:flex">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow1 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
            </div>
          </header>
          <div class="g-modal_body">
            <p id="modalMessage" >
              お気に入り商品リストの新規作成は完了しました。
            </p>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal2 リストを作成2 inputなし -->
    <GDialog v-model="isShow2">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow2 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p style="color: #eb6157; background-color: #fce7e6">
              お気に入り商品リストの名前を入力してください。
            </p>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal3 リストを作成3 同じリスト名前-->
    <GDialog v-model="isShow3">
      <div class="modal" >
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow3 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p style="color: #eb6157; background-color: #fce7e6">
              入力された名前のお気に入り商品リストは既に存在します。別の名前を入力してください。
            </p>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal4 リストを作成4 長すぎる-->
    <GDialog v-model="isShow4">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow4 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p style="color: #eb6157; background-color: #fce7e6">
              お気に入り商品リストの名前が長すぎます。
            </p>
          </div>
        </div>
      </div>
    </GDialog>
</div>
<section class="g-block-sm">
    <h2 class="g-h-2"><span id="wishlistHeadLabel">{{ selectedName }}</span></h2>
    <div class="g-lg-inputGroup p-favoriteList">
        <div class="g-select g-select-sm">
            <i class="g-i-dropdown" aria-hidden="true"></i>
            <select id="wishlistDropDown" name="" aria-label="お気に入り商品リストの選択"
                @change="filterGoodsList"
                style="border: none"
                v-model="selectedName">
                <option 
                v-for="(wish,index) in wishList"
                :value ="wish.listName"
                :key="index">{{wish.listName}}
                </option>
                
            </select>
        </div>
        <!-- 选择【お気に入り商品】以外时 start -->
      <p class="wishlist-controls" v-if="selectedName !== 'お気に入り商品'"
         @click="
          isShow03 = true;
          state.newName = selectedName;">
        <a
          class="g-btn g-btn-em g-btn-sm g-lg-fh"
          id="changepopupbutton"
          role="button"
          ><span class="list-changeName">リスト名を変更</span></a
        >
      </p>
<!-- modal03 リスト名を変更?-->
    <GDialog v-model="isShow03">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リスト名を変更</p>
            <button
              @click="isShow03 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>

          <div class="g-modal_body">
            <p id="modalMessage">"リスト名を変更してください。</p>
            <div class="button-delete-div">
              <input type="text" v-model="state.newName" />
              <button
                :newName="state.newName"
                class="button-delete"
                :id="id"
                @click="
                  updateListName(state.newName, id);
                  isShow03 = false;
                "
                style="margin-left: 10px"
              >
                <span>変更する</span>
              </button>
            </div>
            <div
              v-if="state.newName.length === 0"

            >
              <p style="color: #eb6157; font-size: 0.8rem">
                入力必須項目です。
              </p>
            </div>
            <div
              v-if="state.newName.length > 20"  >
              <p style="color: #eb6157; font-size: 0.8rem">
                20文字以内で入力してください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal04 リストを削除した-->
    <GDialog v-model="isShow04">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リスト名を変更</p>
            <button
              @click="isShow04 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p id="modalMessage">お気に入り商品リストの名前を変更しました。</p>
          </div>
        </div>
      </div>
    </GDialog>
        <p
        class="g-inputGroup_static wishlist-controls"
        v-if="selectedName !== 'お気に入り商品'"
        @click="isShow01 = true"
      >
        <a class="g-link g-link-gray" id="deleteInitial" role="button">
          <span
            class="material-symbols-outlined"
            style="cursor: pointer; color: #dbdbdb"
          >close </span>
          <span>リストを削除</span></a
        >
      </p>
      <!-- 选择【お気に入り商品】以外时 end -->
    </div>

    <!-- modal01 リストを削除?-->
    <GDialog v-model="isShow01">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow01 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p id="modalMessage">"{{ selectedName }}"を削除しますか？</p>
            <div class="button-delete-div">
              <button
                class="button-delete"
                :id="id"
                @click="
                  deleteWishList(id);
                  isShow01 = false;
                "
              >
                <span>削除する</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal02 リストを削除した-->
    <GDialog v-model="isShow02">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow02 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p id="modalMessage">お気に入り商品リストの削除は成功しました。</p>
          </div>
        </div>
      </div>
    </GDialog>
    
<div>
    <wish-item></wish-item>
    </div>
</section>
</template>

<script setup lang="ts">
import WishItem from './WishItem.vue';
import { onMounted,computed, ref,reactive } from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const isShow1 = ref(false);
const isShow2 = ref(false);
const isShow3 = ref(false);
const isShow4 = ref(false);
const route = useRoute();
const userId = route.params.userId;
// const userId = 989898;
const store = useStore();
onMounted(() => {
  store.dispatch("setWishList", userId);
});
const wishList = computed(() => store.getters.getWishList)
const value = computed(() => store.getters.getValue);

function updateValue(e: Event) {
  if (e.target instanceof HTMLInputElement) {
    store.commit("updateValue", e.target.value);
  }
}

function addWishList() {
  //去掉首尾空格后判断输入的内容是否为空
  if (
    value.value.replace(/(^\s*)|(\s*$)/g, "").length > 0 &&
    value.value.length <= 20
  ) {
    //若不为空
    //继续判断输入的listName是否已经存在
    if (wishList.value.filter((w) => w.listName === value.value).length > 0) {
      //若存在，则显示modal3，提示listName已经存在
      isShow3.value = true;
    } else {
      //若不存在，则显示modal1，提示插入成功，并插入数据
      isShow1.value = true;
      store.dispatch("addWishList", userId);
    }
  } else if (value.value.length > 20) {
    isShow4.value = true;
  } else {
    //若为空，则显示modal2，提示不能为空
    isShow2.value = true;
  }
}

const filterGoodsList = (e) => {
  store.commit("filterGoodsList", e.target.value);
};
const selectedName = computed(() => store.getters.getSelectName);
const id = computed(() => store.getters.getId);

const isShow01 = ref(false);
const isShow02 = ref(false);
const isShow03 = ref(false);
const isShow04 = ref(false);

const state = reactive({
  newName: "",
});

//update listName
const updateListName = (newName: string, id: number) => {
  store.dispatch("updateListName", { newName, id, userId });
  state.newName = newName; //清空modal4中的输入框
  isShow04.value = true;
};

//delect listName
const deleteWishList = (id: number) => {
  store.dispatch("deleteWishList", { id, userId });
  isShow02.value = true;
};


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
.g-h-2{
    margin-right: 780px;
    margin-top: 30px;
    font-size: 1.3rem;
}
.g-i-dropdown{
    margin-left: -1000px;
}
.g-modal_h{
    background-color: #009e96;
    color:white;
    font-size: 1.5rem;
    width:1250px;
    padding:5px
}
.g-modal_close{
    display:flex;
    margin-left:1250px;
    margin-top:-47px;
    height: 45px;
    width:49px
}
.g-modal_body{
    margin-top: 40px;
    margin-bottom: 40px;
    width:1000px;
    text-align: center;
    margin-left:160px
}
.list-changeName{
    display: flex;
    border: 1px solid #009e96;
    width:110px;
    margin-left: 150px;
    font-size: 0.5rem;
    margin-top: -30px;
}
.g-link-gray{
    display: flex;
    margin-left: 280px;
    margin-top: -30px;
}
</style>