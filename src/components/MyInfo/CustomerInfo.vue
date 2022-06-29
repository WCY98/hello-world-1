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
    お客様情報の確認・変更
</div>
<div class="g-layout-narrow">
    <div class="g-layout_head">
        <h4 class="g-content1">変更項目選択</h4>
        <p class="g-lead">メールアドレス、またはメールアドレス以外のご登録情報から変更したい項目を、以下から選択してください。</p>
	</div>
	<div class="g-layout_body g-layout_body-narrow" >
        <section class="g-block">
            <div class="g-foot-v g-mt-0">
                <p class="g-align-tc1">
                    <a class="g-btn-title g-btn-title-longer" href="/email/change/989898">
                        <span>メールアドレスの変更</span></a>
				</p>
            </div>
		</section>
		<section class="g-block">
            <div class="g-foot-v g-mt-0">
                <p class="g-align-tc1">
                    <a class="g-btn-title" href="/other/change/989898">
                        <span>メールアドレス以外の変更</span></a>
				</p>
			</div>
		</section>
	</div>
</div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.g-router{
    color:rgb(160, 158, 158);
    font-size:0.8rem;
    margin-bottom: 70px;
}
.g-content1{
    margin-right:665px;
    margin-top:-40px
}
.g-lead{
    font-size: 0.8rem;
    margin-right:160px;
    margin-top: 15px;
}
.g-align-tc1{
    margin-top: 60px;
    font-size:1rem;
    font-weight: lighter;
    margin-right:110px;
    padding: 0px 5px;
    
}
.g-btn-title{
    height: 30px;
    color:white;
    background-color: rgb(216, 83, 83);
    border-color: white;
    border-radius: 5%;
    padding:12px;
    border: 1px solid white;   
}
.g-btn-title-longer{
    padding-left: 28px;
    padding-right: 28px;
}
</style>