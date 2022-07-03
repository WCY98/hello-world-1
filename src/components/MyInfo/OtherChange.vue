<template>
<div class="g-router" style="display:flex">
    <a href="/" style="color:rgb(156, 187, 176);">ホーム</a>
    <div class="arrows" >
    <span class="material-symbols-outlined" style="margin-top:-5px;font-size:0.7rem">></span>
    </div>
    <a href="/my/page/989898" style="color:rgb(156, 187, 176);">マイページ</a>
    <div class="arrows">
    <span class="material-symbols-outlined" style="margin-top:-5px;font-size:0.7rem">></span>
    </div>
    お客様情報の確認・変更
</div>
<div class="g-layout_head">
	<h3>お客様情報の確認・変更</h3>
</div>
<div class="g-layout_body">
    <p class="g-align-tr">
        <b class="g-sm-display-b">最終ログイン：</b>
			2022/07/01 14:57:17</p>
    <div class="g-pane-border g-pane-sm g-unit">
		<dl class="g-flex-h g-flex-wrap">
			<dt class="g-weight-b" id="p-mag">メールマガジン</dt>
				<dd>
					<label class="g-checkable"> 
                        <input type="checkbox" name="emailMagazineDeliveryPreference" value="1" aria-labelledby="p-mag"
                        style="margin-top:5px">
                        <span>
                            <i class="g-s g-s-checkbox2-on g-checkable_on" aria-hidden="true"></i>
                            <i class="g-s g-s-checkbox2-off g-checkable_off" aria-hidden="true"></i>
                            <span class="g-checkable_label" style="margin-left:10px">配信を希望する</span>
                        </span>
					</label>
				</dd>
				<dd class="g-fw-unit">
					お得なキャンペーンや新製品情報などをお届けします。</dd>
		</dl>
	</div>


    <other-change-up></other-change-up>


    <section class="g-block">
			<h2 class="g-h-2">
				パスワード変更</h2>
			<dl class="g-sm-formGrid-v g-lg-formGrid-h">
				<dt>
					<label for="p-pw-new">新しいパスワード</label>
				</dt>
				<dd>
					<p class="g-formGrid_note">
						半角英数字組合せ8～20文字で入力してください。</p>
					<input class="g-input g-input-sm g-fw" id="p-pw-new" type="password" name="password" value="" aria-describedby="p-pw-new_alert" autocomplete="new-password" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;min&quot;:8,&quot;max&quot;:20,&quot;type&quot;:&quot;eisumix&quot;},{&quot;action&quot;:&quot;validate&quot;,&quot;subjects&quot;:[&quot;#p-pw-new-re&quot;]}]">
					<div class="g-formGrid_annotation">
						<button class="g-appearance-n g-link-t g-reveal" type="button" aria-hidden="true" data-breakpoints="" data-reveal="{&quot;subject&quot;:&quot;#p-pw-new&quot;,&quot;className&quot;:&quot;g-reveal-active&quot;}"></button>
					</div>
					<div class="g-formGrid_error" id="p-pw-new_alert" role="alert"></div>
				</dd>
				<dt>
					<label for="p-pw-new-re"><span>新しいパスワード<small>（確認用）</small></span></label>
				</dt>
				<dd>
					<p class="g-formGrid_note">
						コピー・貼り付けはせずに入力してください。</p>
					<input class="g-input g-input-sm g-fw" id="p-pw-new-re" type="password" name="passwordConfirmation" value="" aria-describedby="p-pw-new-re_alert" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;min&quot;:8,&quot;max&quot;:20,&quot;type&quot;:&quot;eisumix&quot;},{&quot;rule&quot;:&quot;match&quot;,&quot;name&quot;:&quot;パスワード&quot;,&quot;subject&quot;:&quot;#p-pw-new&quot;},{&quot;action&quot;:&quot;validate&quot;,&quot;subjects&quot;:[&quot;#p-pw-new&quot;]}]">
					<div class="g-formGrid_annotation">
						<button class="g-appearance-n g-link-t g-reveal" type="button" aria-hidden="true" data-breakpoints="" data-reveal="{&quot;subject&quot;:&quot;#p-pw-new-re&quot;,&quot;className&quot;:&quot;g-reveal-active&quot;}"></button>
					</div>
					<div class="g-formGrid_error" id="p-pw-new-re_alert" role="alert"></div>
				</dd>
			</dl>
			<p class="g-align-tc g-unit-lg">
				<label class="g-checkable"> <input type="checkbox" name="changePassword" value="1"><span><i class="g-s g-s-checkbox-on g-checkable_on" aria-hidden="true"></i><i class="g-s g-s-checkbox-off g-checkable_off" aria-hidden="true"></i><span class="g-checkable_label">パスワードを変更する</span></span>
				</label>
			</p>
		</section>
</div>


</template>

<script setup lang="ts">
import OtherChangeUp from './OtherChangeUp.vue';
</script>

<style scoped>
.g-router{
    color:rgb(160, 158, 158);
    font-size:0.8rem;
    margin-bottom: 50px;
    margin-left: 40px;
}
.g-layout_head{
    margin-right: 500px;
}
.g-align-tr{
    font-size: 1rem;
    margin-left: 500px;
    margin-top: 30px;
}
.g-flex-h{
    margin-top: 30px
}
.g-weight-b{
    font-size: 1rem;
    margin-right: 550px;
    font-weight: bold;
}
.g-checkable{
    display: flex;
    font-size:1rem;
    margin-left: 200px;
    margin-top: -25px;
}
.g-fw-unit{
    font-size: 1rem;
    margin-right: 265px;
    margin-top: 20px;
}
.g-pane-border{
    border: 1px solid #dbdbdb;
    border-color: gray;
    padding-bottom: 20px;
    width:750px;
    margin-left: 300px;
    margin-top: 20px
}
</style>
