<template>
<dl class="g-sm-formGrid-v g-lg-formGrid-h g-block-xs" 
    style="margin-top:30px;">
    <dt>
        <label for="p-say" class="p-say">会員種別</label>
        </dt>
    <dd>
        <div class="g-inputGroup1 g-inputGroup-line">個人</div>
        </dd>
        <div style="margin-top: 20px;">
                    
    <dt>
        <label for="p-say" class="p-say" style="margin-top:30px">氏名<span class="g-label-required">必須</span></label>
        </dt>
    <dd>
        <div class="g-inputGroup2 g-inputGroup-line">
            <input class="g-input g-input-sm" id="p-say" type="text" name="lastName" value="wang" size="10" aria-required="true" aria-describedby="p-say_alert" data-validation-rules="[{&quot;rule&quot;:&quot;length&quot;,&quot;max&quot;:10},{&quot;action&quot;:&quot;validate&quot;,&quot;subjects&quot;:[&quot;#p-saykana&quot;]}]" data-furigana="#p-saykana">
            <div class="g-inputGroup_static" style="margin-top:5px;margin-left:5px;">chengyu</div>
            </div>
        <div class="g-formGrid_error" id="p-say_alert" role="alert"></div>
        </dd>
        </div>
    <div style="margin-top:40px;">
    <dt>
        <label for="p-saykana" class="p-say" style="margin-left:62px">氏名（カナ）<span class="g-label-required">必須</span></label>
        </dt>
    <dd>
        <p class="g-formGrid_note">カタカナで入力してください。</p>
        <div class="g-inputGroup3 g-inputGroup-line">
            <input class="g-input g-input-sm" id="p-saykana" type="text" name="lastNameKana" value="オウ" size="13" aria-required="true" aria-describedby="p-saykana_alert" data-validation-rules="[{&quot;action&quot;:&quot;zenkaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;max&quot;:20,&quot;type&quot;:&quot;katakana&quot;}]">
            <div class="g-inputGroup_static" style="margin-top:5px;margin-left:5px;">チョウヨ</div>
            </div>
    
        <div class="g-formGrid_error" id="p-saykana_alert" role="alert"></div>
        </dd>
    </div>
    <div style="margin-top:20px">
    <dt>
        <label for="p-mail" class="p-say" style="margin-left:80px">メールアドレス<span class="g-label-required">必須</span></label>
        </dt>
    <dd>
        <div class="g-inputGroup_static" 
        style="display:flex;font-size:1rem;margin-left:600px;margin-top:-25px">
			wangchengyu0324@gmail.com
            <input type="hidden" name="emailAddress" value="wangchengyu0324@gmail.com">
            </div>
        </dd>
        </div>
        <div style="margin-top:40px;padding-bottom: 20px;">
	<dt>
        <label for="p-tel-a" class="p-say"
         style="margin-left:44px">電話番号1<span class="g-label-required">必須</span></label>
        </dt>
    <dd>
        <p class="g-formGrid_note" style="margin-bottom:8px">数字で入力してください。</p>
        <div class="g-inputGroup4 g-inputGroup-line">
            <input class="g-input g-input-sm" id="p-tel-a" type="text" inputmode="numeric" name="telephone11" value="080" placeholder="03" size="4" aria-required="true" aria-describedby="p-tel-a_alert" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;min&quot;:2,&quot;max&quot;:5,&quot;type&quot;:&quot;number&quot;},{&quot;action&quot;:&quot;merge&quot;,&quot;subjects&quot;:[&quot;.&quot;,&quot;#p-tel-b&quot;,&quot;#p-tel-c&quot;],&quot;dest&quot;:&quot;#p-tel-a-tel-b-tel-c_alert&quot;}]"><span class="g-inputGroup_static">−</span>
            <input class="g-input g-input-sm" id="p-tel-b" type="text" inputmode="numeric" name="telephone12" value="3757" size="4" aria-required="true" aria-describedby="p-tel-b_alert" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;min&quot;:1,&quot;max&quot;:4,&quot;type&quot;:&quot;number&quot;},{&quot;action&quot;:&quot;merge&quot;,&quot;subjects&quot;:[&quot;#p-tel-a&quot;,&quot;.&quot;,&quot;#p-tel-c&quot;],&quot;dest&quot;:&quot;#p-tel-a-tel-b-tel-c_alert&quot;}]"><span class="g-inputGroup_static">−</span> 
            <input class="g-input g-input-sm" id="p-tel-c" type="text" inputmode="numeric" name="telephone13" value="0324" size="4" aria-required="true" aria-describedby="p-tel-c_alert" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;min&quot;:3,&quot;max&quot;:4,&quot;type&quot;:&quot;number&quot;},{&quot;action&quot;:&quot;merge&quot;,&quot;subjects&quot;:[&quot;#p-tel-a&quot;,&quot;#p-tel-b&quot;,&quot;.&quot;],&quot;dest&quot;:&quot;#p-tel-a-tel-b-tel-c_alert&quot;}]">
            </div>
				<div class="g-formGrid_error g-display-b" id="p-tel-a-tel-b-tel-c_alert" aria-hidden="true"></div>
				<div class="g-formGrid_error" id="p-tel-a_alert" role="alert" ></div>
				<div class="g-formGrid_error" id="p-tel-b_alert" role="alert" ></div>
				<div class="g-formGrid_error" id="p-tel-c_alert" role="alert" ></div>
		</dd>
        </div>
        <div style="margin-top:20px;padding-bottom: 10px;">
	<dt>
		<label for="p-tel2-a" class="p-say"
         style="margin-left:16px">電話番号2</label>
		</dt>
	<dd>
		<p class="g-formGrid_note" style="margin-bottom:8px">数字で入力してください。</p>
        <div class="g-inputGroup4 g-inputGroup-line">
            <input class="g-input g-input-sm" id="p-tel2-a" type="text" inputmode="numeric" name="telephone21" value="" placeholder="03" size="4" aria-describedby="p-tel2-a_alert" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;min&quot;:2,&quot;max&quot;:5,&quot;type&quot;:&quot;number&quot;},{&quot;action&quot;:&quot;merge&quot;,&quot;subjects&quot;:[&quot;.&quot;,&quot;#p-tel2-b&quot;,&quot;#p-tel2-c&quot;],&quot;dest&quot;:&quot;#p-tel2-a-tel2-b-tel2-c_alert&quot;}]"><span class="g-inputGroup_static">−</span> 
            <input class="g-input g-input-sm" id="p-tel2-b" type="text" inputmode="numeric" name="telephone22" value="" size="4" placeholder="0000" aria-describedby="p-tel2-b_alert" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;min&quot;:1,&quot;max&quot;:4,&quot;type&quot;:&quot;number&quot;},{&quot;action&quot;:&quot;merge&quot;,&quot;subjects&quot;:[&quot;#p-tel2-a&quot;,&quot;.&quot;,&quot;#p-tel2-c&quot;],&quot;dest&quot;:&quot;#p-tel2-a-tel2-b-tel2-c_alert&quot;}]"><span class="g-inputGroup_static">−</span> 
            <input class="g-input g-input-sm" id="p-tel2-c" type="text" inputmode="numeric" name="telephone23" value="" size="4" placeholder="0000" aria-describedby="p-tel2-c_alert" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;min&quot;:3,&quot;max&quot;:4,&quot;type&quot;:&quot;number&quot;},{&quot;action&quot;:&quot;merge&quot;,&quot;subjects&quot;:[&quot;#p-tel2-a&quot;,&quot;#p-tel2-b&quot;,&quot;.&quot;],&quot;dest&quot;:&quot;#p-tel2-a-tel2-b-tel2-c_alert&quot;}]">
			</div>
				<div class="g-formGrid_error g-display-b" id="p-tel2-a-tel2-b-tel2-c_alert" aria-hidden="true"></div>
				<div class="g-formGrid_error" id="p-tel2-a_alert" role="alert" ></div>
				<div class="g-formGrid_error" id="p-tel2-b_alert" role="alert" ></div>
				<div class="g-formGrid_error" id="p-tel2-c_alert" role="alert" ></div>
		</dd>
        </div>
	<dt id="p-sex" class="p-say" style="margin-left:328px">性別
        <span class="g-label-required">必須</span>
		</dt>
    <dd>
        <ul class="g-flow-xl">
            <li>
                <label class="g-checkable"> 
                    <input type="radio" name="gender" value="0" aria-labelledby="p-sex" aria-required="true" aria-describedby="p-sex_alert">
                    <span>
                        <i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i>
                        <i class="g-s g-s-radio-off g-checkable_off" aria-hidden="true"></i>
                        <span class="g-checkable_label" style="margin-left:10px">男</span>
                    </span>
				</label>
                </li>
            <li>
                <label class="g-checkable" style="margin-left:650px;margin-top:-25px">
                    <input type="radio" name="gender" value="1" aria-labelledby="p-sex" aria-required="true" aria-describedby="p-sex_alert" >
                    <span>
                        <i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i>
                        <i class="g-s g-s-radio-off g-checkable_off" aria-hidden="true"></i>
                        <span class="g-checkable_label" style="margin-left:10px">女</span>
                    </span>
				</label>
            </li>
		</ul>
        <div class="g-formGrid_error" id="p-sex_alert" role="alert"></div>
        
	</dd>
    <div style="margin-bottom:40px">
	<dt class="p-say" style="margin-left: 328px;margin-bottom: 30px;">生年月日</dt>
    <dd style="display:flex;font-size:1rem;margin-left:600px;margin-top:-75px">
    1998年03月24日</dd>
    <!-- <div> -->
	<dt style="margin-top:40px">
        <label for="p-zip" class="p-say" style="margin-left:46px">郵便番号
            <span class="g-label-required">必須</span>
            </label>
        </dt>
	<dd>
        <p class="g-formGrid_note" style="text-align: left; margin-bottom:5px">
            ハイフン不要・数字で入力してください。<br>
            事業所の個別郵便番号はご使用いただけません。</p>
        <div class="g-inputGroup g-inputGroup-line">
            <input class="g-input g-input-sm" 
            style="font-size:1rem;margin-right:28px" id="p-zip" type="text" inputmode="numeric" name="postalCode" value="1910031" size="8" aria-required="true" aria-describedby="p-zip_alert" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;min&quot;:7,&quot;max&quot;:7,&quot;type&quot;:&quot;number&quot;}]">
        <p class="g-inputGroup_static">
            <a class="g-link" target="_blank" href="http://www.post.japanpost.jp/zipcode">
                <span class="material-symbols-outlined" style="color:#009e96;margin-left:10px;margin-top:-5px">></span>
                <span>郵便番号を調べる</span>
                </a>
            </p>
			</div>
        
            <div class="g-formGrid_error" id="p-zip_alert" role="alert"></div>
		</dd>
        </div>
	<dt>
        <label for="p-pref" class="p-say"
        style="margin-left:47px;margin-top: 10px;">都道府県
        <span class="g-label-required">必須</span></label>
		</dt>
	<dd>
        <p class="g-formGrid_note" style="margin-bottom:5px">郵便番号より自動検索されます。</p>
        <div class="g-inputGroup">
            <input class="g-input g-input-sm" 
            style="font-size:1rem;margin-right:17px;background-color: #f7f7f7;" 
            id="p-pref" type="text" name="prefecture" value="東京都" size="10" aria-required="true" tabindex="-1">
			</div>
		</dd>

        <div style="margin-top:30px">
	<dt>
        <label for="p-city" class="p-say" style="margin-left:43px">市区町村<span class="g-label-required">必須</span></label>
		</dt>
	<dd>
        <p class="g-formGrid_note" style="margin-bottom:5px">郵便番号より自動検索されます。</p>
        <input class="g-input g-input-sm g-fw" 
        style="font-size:1rem;margin-left:246px;background-color: #f7f7f7;width:400px"
        id="p-city" type="text" name="city" value="日野市" aria-required="true" tabindex="-1">
				<div class="g-formGrid_error" id="p-city_alert" role="alert"></div>
        </dd>
        </div>

    <div style="margin-top:30px">
	<dt>
        <label for="p-area" class="p-say" style="margin-left:14px">町名<span class="g-label-required">必須</span></label>
		</dt>
	<dd>
        <p class="g-formGrid_note" style="margin-bottom:5px">町名を入力してください。</p>
        <input class="g-input g-input-sm g-fw" 
        style="font-size:1rem;margin-left:246px;background-color: #f7f7f7;width:400px"
        id="p-area" type="text" name="townArea" value="高幡" placeholder="北区新琴似七条" aria-required="true" aria-describedby="p-area_alert" data-validation-rules="[{&quot;rule&quot;:&quot;length&quot;,&quot;max&quot;:40}]">
            <div class="g-formGrid_error" id="p-area_alert" role="alert"></div>
        </dd>
        </div>
    <dt>
        <label for="p-block-a" class="p-say" style="margin-left:45px">丁目番地<span class="g-label-required">必須</span></label>
        </dt>
    <dd>
        <p class="g-formGrid_note">左端のみ必須です。番地がない場合は左端に1を入力してください。</p>
        <div class="g-inputGroup5 g-inputGroup-line">
            <input class="g-input g-input-sm" id="p-block-a" type="text" inputmode="numeric" name="streetname1" value="528" size="4" aria-required="true" aria-describedby="p-block-a_alert" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;max&quot;:5,&quot;type&quot;:&quot;number&quot;},{&quot;action&quot;:&quot;merge&quot;,&quot;subjects&quot;:[&quot;.&quot;,&quot;#p-block-b&quot;,&quot;#p-block-c&quot;],&quot;dest&quot;:&quot;#p-block-a-block-b-block-c_alert&quot;}]">
            <span class="g-inputGroup_static">−</span> 
            <input class="g-input g-input-sm" id="p-block-b" type="text" inputmode="numeric" name="streetname2" value="1" size="4" aria-describedby="p-block-b_alert" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;max&quot;:5,&quot;type&quot;:&quot;number&quot;},{&quot;action&quot;:&quot;merge&quot;,&quot;subjects&quot;:[&quot;#p-block-a&quot;,&quot;.&quot;,&quot;#p-block-c&quot;],&quot;dest&quot;:&quot;#p-block-a-block-b-block-c_alert&quot;}]">
            <span class="g-inputGroup_static">−</span> <input class="g-input g-input-sm" id="p-block-c" type="text" inputmode="numeric" name="streetname3" value="" size="4" aria-describedby="p-block-c_alert" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;max&quot;:5,&quot;type&quot;:&quot;number&quot;},{&quot;action&quot;:&quot;merge&quot;,&quot;subjects&quot;:[&quot;#p-block-a&quot;,&quot;#p-block-b&quot;,&quot;.&quot;],&quot;dest&quot;:&quot;#p-block-a-block-b-block-c_alert&quot;}]">
		</div>
			<div class="g-formGrid_error g-display-b" id="p-block-a-block-b-block-c_alert" aria-hidden="true"></div>
			<div class="g-formGrid_error" id="p-block-a_alert" role="alert" ></div>
			<div class="g-formGrid_error" id="p-block-b_alert" role="alert" ></div>
			<div class="g-formGrid_error" id="p-block-c_alert" role="alert" ></div>
	</dd>
	<dt>
        <label for="p-bldg">
            <span>建物名称<small>（マンション・団地名など）</small></span>
            </label>
		</dt>
	<dd>
        <input class="g-input g-input-sm g-fw" id="p-bldg" type="text" name="buildingName" value="" placeholder="ニトリビル" aria-describedby="p-bldg_alert" data-validation-rules="[{&quot;rule&quot;:&quot;length&quot;,&quot;max&quot;:50}]">
		<div class="g-formGrid_error" id="p-bldg_alert" role="alert"></div>
	</dd>
	<dt>
        <label for="p-room">部屋番号</label>
		</dt>
	<dd>
        <p class="g-formGrid_note">
            英数字で入力してください。
            <br>
            部屋番号に英数字以外が含まれている場合は、建物名称欄に入力してください。
        </p>
        <div class="g-inputGroup">
            <input class="g-input g-input-sm" id="p-room" type="text" inputmode="numeric" name="roomNumber" value="" size="10" placeholder="101" aria-describedby="p-room_alert" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},{&quot;rule&quot;:&quot;length&quot;,&quot;max&quot;:5,&quot;type&quot;:&quot;eisu&quot;}]">
			</div>
            <div class="g-formGrid_error" id="p-room_alert" role="alert"></div>
		</dd>
	<dt id="p-condition">建物種別<span class="g-label-required">必須</span>
	</dt>
	<dd>
        <ul class="p-radios">
            <li>
                <label class="g-checkable"> 
                    <input type="radio" name="houseSituation" value="0" aria-required="true" aria-labelledby="p-condition" aria-describedby="p-condition_alert">
                    <span>
                        <i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i>
                        <i class="g-s g-s-radio-off g-checkable_off" aria-hidden="true"></i>
                        <span class="g-checkable_label">戸建て</span>
                    </span>
				</label>
            </li>
			<li>
                <label class="g-checkable"> 
                    <input type="radio" name="houseSituation" value="1" aria-required="true" aria-labelledby="p-condition" aria-describedby="p-condition_alert" >
                    <span>
                        <i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i>
                        <i class="g-s g-s-radio-off g-checkable_off" aria-hidden="true"></i>
						<span class="g-checkable_label">集合住宅</span>
                    </span>
				</label>
            </li>
		</ul>
		<div class="g-formGrid_error" id="p-condition_alert" role="alert"></div>
	</dd>
	<dt id="p-lift">エレベータ<span class="g-label-required">必須</span>
		</dt>
	<dd>
        <ul class="p-radios">
            <li>
                <label class="g-checkable"> 
                    <input type="radio" name="elevatorAvailability" value="0" aria-required="true" aria-labelledby="p-lift" aria-describedby="p-lift_alert">
                    <span>
                        <i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i>
                        <i class="g-s g-s-radio-off g-checkable_off" aria-hidden="true"></i>
                        <span class="g-checkable_label">なし</span>
                    </span>
				</label>
            </li>
			<li>
                <label class="g-checkable"> 
                    <input type="radio" name="elevatorAvailability" value="1" aria-required="true" aria-labelledby="p-lift" aria-describedby="p-lift_alert">
                    <span>
                        <i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i>
                        <i class="g-s g-s-radio-off g-checkable_off" aria-hidden="true"></i>
                        <span class="g-checkable_label">あり</span>
                    </span>
				</label>
            </li>
		</ul>
		<div class="g-formGrid_error" id="p-lift_alert" role="alert"></div>
	</dd>
</dl>
</template>

<script setup lang='ts'>
</script>

<style scoped>
.p-say {
    font-size: 1rem;
    font-weight: bold;
    margin-right:600px;
    margin-bottom: 30px;
    text-align: left;
    padding:20px
}

.g-label-required{
    font-size: 0.5rem;
    color:rgb(216, 83, 83);
    background-color: white;
    border-color: rgb(216, 83, 83);
    border: 1px solid rgb(216, 83, 83);
    width:28px;
    height:20px;
    padding:0px;
    margin-top: 5px;
    margin-left:5px
}
.g-inputGroup1{
    display: flex;
    font-size: 1rem;
    margin-left: 600px;
    margin-top: -27px;
}
.g-inputGroup2{
    display: flex;
    margin-left: 598px;
    font-size: 0.8rem;
    margin-top: -30px;
}
.g-inputGroup3{
    display: flex;
    margin-left: 600px;
    font-size: 0.8rem;

}
.g-formGrid_note{
    display: flex;
    font-size: 0.5rem;
    margin-left: 600px;
    margin-top:-50px
}
.g-inputGroup4{
    font-size: 0.8rem;
    margin-left: 100px
}
.g-checkable{
    display:flex;
    font-size: 1rem;
    margin-left: 600px;
    margin-top:-70px
}
.g-link{
    display: flex;
    font-size: 0.9rem;
    margin-left: 720px;
    margin-top: -30px
}
.g-inputGroup5{
    font-size: 0.8rem;
    margin-left: 100px
}
</style>