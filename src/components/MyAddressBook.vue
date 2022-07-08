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
    配送先住所の変更・登録
</div>

<div class="g-layout_head">
	<h3>配送先住所の変更・登録</h3>
</div>

<div class="g-pane-border" style="margin-right: 500px">
<label class="g-checkableGrid_control">
	<span class="g-checkable">
		<input id="p-addAddressTrigger" type="radio" name="address" value="addAddress" aria-expanded="true" aria-controls="p-addAddress" >
			<span><i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i><i class="g-s g-s-radio-off g-checkable_off" aria-hidden="true"></i></span>
		</span>
	</label>
<label class="g-checkableGrid_label g-checkableGrid_h" for="p-addAddressTrigger">新しい配送先住所を登録</label>
</div>

<el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
<p class="g-formGrid_note" 
        style="width:450px;font-size:0.5rem;margin-left:575px;margin-top:40px;text-align: left;">
            「転居先（地名）」、「勤務先」など認識しやすい名称を入力してください。<br>
            「自宅」は会員情報で設定済みのため、入力できません。</p>
<el-form-item label="名称" prop="workplace"
    style="margin-left:258px;margin-top:10px">
    <span class="g-label-required" style="margin-right:20px">必須</span>
        <el-input v-model="ruleForm.workplace"
        style="width: 200px;margin-left:160px" placeholder="転居先（地名）"/>
      </el-form-item>


<el-row type="flex" >
        <el-col > 
    <el-form-item label="氏名" prop="name1" style="margin-left:260px; margin-top:60px" >
        <span class="g-label-required" style="margin-right:20px;margin-top:-5px">必須</span>
       
      <el-input v-model="ruleForm.name1"  @input="handleNameInput"
      style="width: 100px;margin-left:160px;" placeholder="姓" />
      
      </el-form-item>
      </el-col>
      <el-col >
    <el-form-item prop="name2" style="display:flex">
    
        <el-input v-model="ruleForm.name2"  @input="handleNameInput"
        style="width: 100px;margin-left:580px;margin-top:-67px" placeholder="名" />
            
    </el-form-item>
    </el-col>
    </el-row>

<p class="g-formGrid_note" 
        style="width:450px;font-size:0.5rem;margin-left:585px;text-align: left;">
            カタカナで入力してください。</p>
<el-row type="flex" style="margin-top:-50px" >
        <el-col > 
    <el-form-item label="氏名（カナ）" prop="nameKANA1" style="margin-left:320px; margin-top:60px" >
        <span class="g-label-required" style="margin-right:20px;margin-top:-5px">必須</span>
       
      <el-input v-model="ruleForm.nameKANA1"
      style="width: 100px;margin-left:100px;" placeholder="セイ" />
      
      </el-form-item>
      </el-col>
      <el-col >
    <el-form-item prop="nameKANA2" style="display:flex">
    
        <el-input v-model="ruleForm.nameKANA2"  
        style="width: 100px;margin-left:580px;margin-top:-67px" placeholder="メイ" />
            
    </el-form-item>
    </el-col>
    </el-row>

<p class="g-formGrid_note" 
        style="width:200px;font-size:0.5rem;margin-left:560px;margin-top:-10px;margin-bottom:5px">
        数字で入力してください。</p>
<el-row type="flex" >
        <el-col > 
    <el-form-item label="電話番号1" prop="tel11" style="margin-top:5px;margin-left:300px" >
        <span class="g-label-required" style="margin-right:20px;margin-top:-5px">必須</span>   
      <el-input v-model="ruleForm.tel11" style="width: 100px;margin-left:120px;" placeholder="03" /> 
      </el-form-item>
      </el-col>
      <el-col >
    <el-form-item prop="tel12" style="display:flex"> 
            <el-input v-model="ruleForm.tel12" style="width: 100px;margin-left:580px;margin-top:-67px" placeholder="0000" />        
    </el-form-item>
    </el-col>
        <el-col >
        <el-form-item prop="tel13">
            <el-input v-model="ruleForm.tel13" style="width: 100px;margin-left:690px;margin-top:-104px" placeholder="0000"/>       
    </el-form-item>
    </el-col> 
    </el-row>

<p class="g-formGrid_note" 
        style="width:200px;font-size:0.5rem;margin-left:560px;margin-top: -30px;margin-bottom:5px">
        数字で入力してください。</p>
    <el-form-item label="電話番号2" prop="tel2" class="p-say" style="margin-left:300px">
        <dt style="width:700px;margin-right: 60px;">
      <el-input v-model="ruleForm.tel2" style="width: 100px" placeholder="03" />-
            <el-input v-model="ruleForm.tel2" style="width: 100px" placeholder="0000" />-
            <el-input v-model="ruleForm.tel2" style="width: 100px" placeholder="0000"/>
            </dt>
    </el-form-item>


<p class="g-formGrid_note" 
        style="text-align: left; margin-bottom:5px;font-size:0.5rem;margin-left:590px">
            ハイフン不要・数字で入力してください。<br>
            事業所の個別郵便番号はご使用いただけません。</p>
<el-form-item label="郵便番号" prop="postNo" style="margin-left:293px">
            <span class="g-label-required" style="margin-left:10px;">必須</span>    
            <el-input v-model="ruleForm.postNo" style="width: 100px;margin-left: 138px;" placeholder="1111111"
            @change="searchAddress"/>
        <p class="g-inputGroup_static">
            <a class="g-link" target="_blank" href="http://www.post.japanpost.jp/zipcode">
                <span class="material-symbols-outlined" 
                style="color:#009e96;margin-top:-5px">></span>
                <span>郵便番号を調べる</span>
                </a>
            </p>
            <el-col style="color: red; font-weight: 100">
              {{ ruleForm.error }}</el-col
            >
        </el-form-item>



<el-form-item label="都道府県" prop="city"
        style="margin-left:293px">
        <span class="g-label-required" style="margin-left:10px">必須</span>
        <p class="g-formGrid_note" style="margin-bottom:5px;margin-left:143px">郵便番号より自動検索されます。</p>

            <el-input v-model="ruleForm.city" style="width: 100px;margin-right:30px" placeholder="東京都"/>
        </el-form-item>

    

    <el-form-item label="市区町村" prop="village" style="margin-left:293px">
        <span class="g-label-required" style="margin-left:10px">必須</span>
        <p class="g-formGrid_note" style="margin-bottom:5px;margin-left:143px">郵便番号より自動検索されます。</p>
        <el-input v-model="ruleForm.village" style="width: 100px;background-color: #f7f7f7" placeholder="日野市"/>
        </el-form-item>


    
<el-form-item label="町名" prop="villageName" style="margin-left:266px">
        <span class="g-label-required" style="margin-left:10px">必須</span>
        <p class="g-formGrid_note" style="margin-bottom:5px;margin-left:171px">町名を入力してください。</p>
        <el-input v-model="ruleForm.villageName" style="width: 100px;background-color: #f7f7f7" placeholder="高幡"/>
        </el-form-item>

<p class="g-formGrid_note" 
        style="width:400px;font-size:0.5rem;margin-left:575px">
        左端のみ必須です。番地がない場合は左端に1を入力してください。</p>
     <el-row type="flex" >
        <el-col > 
    <el-form-item label="丁目番地" prop="streetName1" style="margin-top:10px;margin-left:295px" >
        <span class="g-label-required" style="margin-right:20px">必須</span> 
      <el-input v-model="ruleForm.streetName1" style="width: 100px;margin-left:130px;" placeholder="528" /> 
      </el-form-item>
      </el-col>
      <el-col >
    <el-form-item prop="streetName2" style="display:flex">
<el-input v-model="ruleForm.streetName2" style="width: 100px;margin-left:580px;margin-top:-67px" placeholder="1"/>        
    </el-form-item>
    </el-col>
    
        <el-col >
        <el-form-item prop="streetName3">
            <el-input v-model="ruleForm.streetName3" style="width: 100px;margin-left:690px;margin-top:-104px" />
              </el-form-item>
    </el-col> 
    </el-row>


<el-form-item label="建物名称" prop="buildingName" style="margin-left:275px">
            <span><small>（マンション・団地名など）</small></span>
        <el-input v-model="ruleForm.buildingName" style="width: 350px;margin-left:45px" placeholder="ニトリビル" />
       </el-form-item>

    <el-form-item label="部屋番号" prop="roomNo" style="margin-left:275px">
        <p class="g-formGrid_note" style="text-align:left;margin-left:200px">
            英数字で入力してください。
            <br>
            部屋番号に英数字以外が含まれている場合は、建物名称欄に入力してください。
        </p>
        <el-input v-model="ruleForm.roomNo" style="width: 100px;margin-top:10px" placeholder="101" />
        </el-form-item>

	<el-form-item label="建物種別" prop="typing" style="margin-left:275px">
         <span class="g-label-required" style="margin-left:10px">必須</span>
      <el-radio-group  style="margin-left:170px">
        <el-radio label="戸建て" value="0" />
        <el-radio label="集合住宅" value="1" />
      </el-radio-group>
    </el-form-item>

    <el-form-item label="エレベータ" prop="ele" style="margin-left:290px">
         <span class="g-label-required" style="margin-left:10px">必須</span>
      <el-radio-group  style="margin-left:155px">
        <el-radio label="なし" value="0" />
        <el-radio label="あり" value="1" />
      </el-radio-group>
    </el-form-item>

  <!-- <el-form-item label="Activity type" prop="type"> -->
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="既定の配送先に設定する" name="type" />
      </el-checkbox-group>
    <!-- </el-form-item> -->

     <el-button  class="btn-content" @click="resetForm(ruleFormRef)">
   登録する

    </el-button>

</el-form>

</template>

<script setup lang="ts">
import * as AutoKana from "vanilla-autokana";
import { reactive, ref ,onMounted ,nextTick} from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

let autokana;
let autokana2;
onMounted(async () => {
  await nextTick();
  autokana = AutoKana.bind("#name1", "#nameKANA1", { katakana: true });
  autokana2 = AutoKana.bind("#name2", "#nameKANA2", { katakana: true });
});
const handleNameInput = () => {
  ruleForm.nameKANA1 = autokana.getFurigana();
  ruleForm.nameKANA2 = autokana2.getFurigana();
  console.log("autokana.getFurigana()", autokana.getFurigana());
};

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  workplace:'',
  name1: '',
  name2: '',
  nameKANA1:'',
  nameKANA2:'',
  tel11: '',
  tel12: '',
  tel13: '',
  tel2:'',
  postNo: '',
  error:'',
  city:'',
  village:'',
  villageName:'',
  streetName1:'',
  streetName2:'',
  streetName3:'',
  buildingName:'',
  roomNo:'',
  typing:'',
  ele:'',
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules>({
  workplace: [
    { required: true, message: "入力必須項目です。", trigger: "blur", },
    // { max: 20, message: "20文字以内で入力してください。", trigger: "blur" },
  ],

  name1: [
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
    { max: 10, message: '10文字以内で入力してください。', trigger: 'blur' },
  ],

  name2: [
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
    { max: 10, message: '10文字以内で入力してください。', trigger: 'blur' },
  ],

  nameKANA1: [
    { required: true, message: "入力必須項目です。", trigger: "blur" },
    { max: 10, message: "10文字以内で入力してください。", trigger: "blur" },
  ],

  nameKANA2: [
    { required: true, message: "入力必須項目です。", trigger: "blur" },
    { max: 10, message: "10文字以内で入力してください。", trigger: "blur" },
  ],

   tel11:[
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
    { max: 5, message: '2桁以上5桁以内の数字で入力してください。', trigger: 'blur' }
  ],

  tel12:[
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
    { max: 4, message: '1桁以上4桁以内の数字で入力してください。', trigger: 'blur' }
  ],

  tel13:[
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
    { max: 4, message: '3桁以上4桁以内の数字で入力してください。', trigger: 'blur' }
  ],

  postNo:[
    { required: true, message: '入力必須項目です。', trigger: ['blur' ,'change']},
    { max: 7, message: '7桁の数字で入力してください。', trigger: 'blur' },
    // { type:[/^[0-9]{3}-[0-9]{4}$/] , message: '7桁の数字で入力してください。', trigger: 'blur' }
  ],

  villageName:[
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
  ],

  streetName1:[
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
    { max: 5, message: '5桁以内の数字で入力してください。', trigger: 'blur' }
  ],

  streetName2:[
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
    { max: 5, message: '5桁以内の数字で入力してください。', trigger: 'blur' }
  ],

  streetName3:[
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
    { max: 5, message: '5桁以内の数字で入力してください。', trigger: 'blur' }
  ],

  roomNo:[
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
    { max: 5, message: '5文字以内の英数字で入力してください。', trigger: 'blur' }
  ],

  typing:[
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
  ],

  ele:[
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
  ],
})

const headers = { Accept: "application/json" };
const searchAddress = async () => {
  let api = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
  let url = api + ruleForm.postNo;
  const info = await fetch(url, { headers });
  const data = await info.json();
  if (data.status === 400) {
    //エラー時
    ruleForm.error = data.message;
  } else if (data.results === null) {
    ruleForm.error = "郵便番号から住所が見つかりませんでした。";
  } else {
    ruleForm.error = "";
    ruleForm.city = data.results[0].address1;
    ruleForm.village = data.results[0].address2;
    ruleForm.villageName = data.results[0].address3;
  }
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped>
.g-router{
    color:rgb(160, 158, 158);
    font-size:0.8rem;
    margin-bottom: 50px;
    margin-left: 40px;
}
.g-layout_head{
    margin-right: 600px;
}
.g-checkableGrid_label{
    padding-left: 10px;
    font-size: 1.1rem;
    font-weight: bold;
}
.g-pane-border{
    border: 1px solid #dbdbdb;
    border-color: #dbdbdb;
    background-color: #d9e5ee;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: left;
    padding-left: 20px;
    width:850px;
    margin-left: 250px;
    margin-top: 20px;
    height:80px
}
.g-label-required{
    font-size: 0.5rem;
    color:rgb(216, 83, 83);
    background-color: white;
    border-color: rgb(216, 83, 83);
    border: 1px solid rgb(216, 83, 83);
    /* width:28px; */
    height:25px;
    padding-bottom:1px;
    margin-top: 2px;
    /* margin-left:5px */
}
.btn-content{
    display: flex;
    height: 40px;
    color:white;
    background-color: rgb(216, 83, 83);
    border-color: rgb(216, 83, 83);
    border-radius: 5%;
    padding-top:10px;
    padding-bottom:10px;
    border: 0.1px solid rgb(216, 83, 83); 
    width:300px;
    font-size: 1rem;
    font-size: 0.8rem;
    margin-left:550px;
    margin-top:40px
}
</style>