<template>
<div class="g-layout_sidebar g-sm-mb-20">
<div class="p-welcome">
	<div class="g-butterfly g-myPageCorpKbnSpaceBottom">
		<h1>
            <span class="g-myPageMembersCardCorpKbnNotCorporate">ニトリメンバーズ ネット会員</span>
        </h1>
		<p>
            <a class="g-link-t" href="/ec/logout">ログアウト</a>
        </p>
	</div>

	<ul class="g-list-note g-unit-xs">
		<li>
            <a href="/ec/userguide/nitorinet/#member">
                <span class="g-list-note">会員種別について</span>
                <i class="g-i g-i-info about-corpkbn" aria-hidden="true"></i>
            </a>
        </li>
	</ul>
	
    <div class="g-butterfly">
        <h1>
            <span>{{userInfo.name}}</span>さんの会員証
        </h1>
    </div>

	<div class="p-barcode">
		<img id="js-bar-code" 
             :src="userInfo.barCode">
        <p id="memberCardNumber">{{userInfo.cardNum}}</p>
    </div>
						
    <dl class="p-pointInfo">
		<dt>
			現在のポイント
        </dt>
		<dd class="g-digit p-pointInfo_available">
            {{userInfo.currentPoint}}<span>pt</span>
		</dd>
		<dt>
			今年失効するポイント
        </dt>
		<dd class="g-digit p-pointInfo_lapse">
            {{userInfo.invalidPoint}}<span>pt</span>
		</dd>
	</dl>

    <ul class="g-list-note g-unit-xs">
		<li>毎日午前9時以降に順次更新されます</li>
	</ul>
</div>
</div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";
const route = useRoute();
const userId = route.params.userId;
// const userId = 989898;
const store = useStore();
onMounted(() => {
  store.dispatch("setUserInfo", userId);
});
const userInfo = computed(() => store.getters.getUserInfo)

</script>

<style scoped>
.g-layout-sidebar {
  margin-right: 40px;
}
.g-butterfly {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.g-lg-butterfly {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.p-welcome h1 {
  font-size: inherit;
  font-weight: normal;
}
.p-welcome h1 span {
  font-size: 1.2rem;
  line-height: 1;
  font-weight: bold;
  margin-right: 5px;
}
.g-myPageMembersCardCorpKbnNotCorporate {
  padding: 1px 12px 1px 12px;
  background-color: #009e96;
  color: #ffffff;
}
.g-link-t {
  color: #009e96;
}
a {
  text-decoration: none;
  color: #333;
}
.g-list-note {
  font-size: 0.8rem;
  color: #808080;
}
.p-barcode img {
  height: 45px;
}
.p-barcode img {
  display: block;
  height: 50px;
  margin: 0 auto 5px;
}
.p-barcode {
  font-weight: bold;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 5px;
  text-align: center;
}
.p-pointInfo {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
.p-pointInfo dd {
  line-height: 1;
  width: 40%;
  text-align: right;
}
.p-pointInfo_available {
  font-size: 1.5rem;
  color: #eb6157;
}
.g-digit {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
}
.p-pointInfo dt {
  width: 60%;
}
.p-pointInfo span {
  font-size: 1rem;
  margin-left: 0.2em;
}
.g-list-note{
    margin-right: 170px;
}
.g-layout_sidebar{
    margin-left: 50px;
}

</style>