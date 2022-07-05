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
<el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
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

<!-- <dt style="margin-top:20px">
        <label for="p-say" class="p-say">会員種別</label>
        </dt>
    <dd>
        <div class="g-inputGroup1 g-inputGroup-line">個人</div>
        </dd> -->


   <el-form-item label="会員種別" 
   style="margin-left:265px;margin-top:25px;display:flex" >
   <p style="display: flex;
    font-size: 1rem;
    margin-left: 200px;">個人</p>
    </el-form-item>

  <!-- <el-form-item label="氏名" class="p-say"  prop="NAME">
        <span class="g-label-required" style="margin-right:20px">必須</span>
      <el-input style="width:100px;margin-left:265px;margin-top:-25px;display:flex" 
      v-model="ruleForm.name" />
      <div class="g-inputGroup_static" style="margin-top:-30px;margin-left:380px;display:flex">aa</div>
    </el-form-item> -->
    <el-form-item label="氏名" prop="name"
    style="margin-left:238px">
    <span class="g-label-required" style="margin-right:20px">必須</span>
        <el-input v-model="ruleForm.name" style="width: 200px;margin-left:180px" />
      </el-form-item>
      <div class="g-inputGroup_static" style="display:flex;margin-left:800px;margin-top:-50px">
      {{ info.name }}
      </div>


    <el-form-item label="氏名（カナ）" prop="nameKANA"
    style="margin-left:293px;margin-top:50px">
    <span class="g-label-required" style="margin-right:20px">必須</span>
        <el-input v-model="ruleForm.nameKANA" style="width: 200px;margin-left:125px" />
      </el-form-item>
      <div class="g-inputGroup_static" style="display:flex;margin-left:800px;margin-top:-50px">
      {{info.nameKANA}}
      </div>

    <!-- <dt style="margin-top:20px">
        <el-form label="メールアドレス" class="p-say" style="margin-left:317px" prop="EMAIL">メールアドレス
        <span class="g-label-required">必須</span></el-form>
        </dt>
    <dd>
        <div class="g-inputGroup_static" 
        style="display:flex;font-size:1rem;margin-left:600px;margin-top:-73px">
			wangchengyu0324@gmail.com
            <input type="hidden" name="emailAddress" value="wangchengyu0324@gmail.com">
            </div>
        </dd> -->
    
    <el-form-item label="メールアドレス"
     style="margin-top:50px;margin-left:305px" prop="email"
     :rules="[
        {
          required: true,
          message: 'メールアドレスを入力してください',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: '正しいメールアドレスを入力してください',
          trigger: ['blur', 'change'],
        },
      ]">
        <span class="g-label-required" style="margin-right:20px">必須</span>
        <el-input v-model="ruleForm.email" style="width: 200px;margin-left:115px" placeholder="wangchengyu0324@gmail.com"/>
      <!-- <dt style="display:flex;font-size:1rem;margin-left:115px;">wangchengyu0324@gmail.com</dt> -->
    </el-form-item>

<!-- <div style="margin-top:40px;padding-bottom: 20px;">
	<dt>
        <el-form label="電話番号1" class="p-say"
         style="margin-left:320px">電話番号1
         <span class="g-label-required">必須</span></el-form>
        </dt>
    <dd>
        <p class="g-formGrid_note" style="margin-bottom:8px;margin-top:-95px">数字で入力してください。</p>
        <div class="g-inputGroup4 g-inputGroup-line" style="margin-left:180px">
            <el-input  style="width: 100px" placeholder="080" />-
            <el-input  style="width: 100px" />-
            <el-input  style="width: 100px" /></div>
		</dd>
        </div>
     -->
     <p class="g-formGrid_note" 
        style="width:200px;font-size:0.5rem;margin-left:560px">
        数字で入力してください。</p>
     <el-row type="flex" >
        <el-col > 
    <el-form-item label="電話番号1" prop="tel11" style="margin-top:30px;margin-left:275px" >
        <span class="g-label-required" style="margin-right:20px;margin-top:-20px">必須</span>
       
      <el-input v-model="ruleForm.tel11" style="width: 100px;margin-left:150px;" placeholder="080" />
      
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
    <!-- <el-form-item label="電話番号1" style="margin-top:30px;margin-left:275px" >
    <span class="g-label-required" style="margin-right:20px;margin-top:-5px">必須</span>
    <el-row :gutter="5" >
    <el-col :span="5" >
    <el-form-item prop="tel11">
        <el-input v-model="ruleForm.tel11" style="width: 100px;margin-left:105px;" placeholder="080" />
    </el-form-item>
    </el-col>
    <el-col :span="1">
        <span ></span>
    </el-col>
    <el-col :span="5" >
    <el-form-item prop="tel12">
        <el-input v-model="ruleForm.tel12" style="width: 200px;margin-left:75px" placeholder="0000" />
    </el-form-item>
    </el-col>
    <el-col :span="1">
        <span ></span>
    </el-col>
    <el-col :span="5" >
    <el-form-item prop="tel12">
        <el-input v-model="ruleForm.tel13" style="width: 100px;margin-left:-20px" placeholder="0000" />
    </el-form-item>
    </el-col>
    </el-row>
    </el-form-item> -->
    



<el-form-item label="電話番号2" prop="tel2" class="p-say" style="margin-left:280px">
        <p class="g-formGrid_note" 
        style="width:200px;font-size:0.5rem;margin-left:160px">
        数字で入力してください。</p>
        <dt style="margin-right:15px;width:700px">
      <el-input v-model="ruleForm.tel2" style="width: 100px" placeholder="080" />-
            <el-input v-model="ruleForm.tel2" style="width: 100px" />-
            <el-input v-model="ruleForm.tel2" style="width: 100px" />
            </dt>
    </el-form-item>

    <el-form-item label="性別" prop="gender" style="margin-left:245px">
        <span class="g-label-required">必須</span>
    <dd>
        <ul class="g-flow-xl">
            <el-radio-group v-model="gender" style="display:flex;margin-left:200px">
                <el-radio label="男" />
                <el-radio label="女" />
            </el-radio-group>
		</ul>
	</dd>
    </el-form-item>

    <el-form-item prop="birth" label="生年月日"
    style="margin-left: 273px;margin-bottom: 30px;margin-top:20px">
        <dd style="display:flex;font-size:1rem;margin-left:200px">
        {{info.birthyear}}年{{info.birthmonth}}月{{info.birthday}}日
        </dd>
        </el-form-item>


    <el-form-item label="郵便番号" prop="postNo" style="margin-left:275px">
            <span class="g-label-required" style="margin-left:10px;margin-top:-27px">必須</span>    
        <p class="g-formGrid_note" 
        style="text-align: left; margin-bottom:5px;font-size:0.5rem;margin-left:165px">
            ハイフン不要・数字で入力してください。<br>
            事業所の個別郵便番号はご使用いただけません。</p>
            <el-input v-model="ruleForm.postNo" style="width: 100px;margin-right:30px" placeholder="1111111"/>
        <p class="g-inputGroup_static">
            <a class="g-link" target="_blank" href="http://www.post.japanpost.jp/zipcode">
                <span class="material-symbols-outlined" 
                style="color:#009e96;margin-top:-5px">></span>
                <span>郵便番号を調べる</span>
                </a>
            </p>
        </el-form-item>
    

    <el-form-item label="都道府県" prop="city"
        style="margin-left:275px">
        <span class="g-label-required" style="margin-left:10px">必須</span>
        <p class="g-formGrid_note" style="margin-bottom:5px;margin-left:165px">郵便番号より自動検索されます。</p>

            <el-input v-model="ruleForm.city" style="width: 100px;margin-right:30px" placeholder="東京都"/>
        </el-form-item>

    

    <el-form-item label="市区町村" prop="village" style="margin-left:275px">
        <span class="g-label-required" style="margin-left:10px">必須</span>
        <p class="g-formGrid_note" style="margin-bottom:5px;margin-left:165px">郵便番号より自動検索されます。</p>
        <el-input v-model="ruleForm.village" style="width: 100px;background-color: #f7f7f7" placeholder="日野市"/>
        </el-form-item>


    
    <el-form-item label="町名" prop="villageName" style="margin-left:247px">
        <span class="g-label-required" style="margin-left:10px">必須</span>
        <p class="g-formGrid_note" style="margin-bottom:5px;margin-left:193px">町名を入力してください。</p>
        <el-input v-model="ruleForm.villageName" style="width: 100px;background-color: #f7f7f7" placeholder="高幡"/>
        </el-form-item>
    <!-- <el-form-item label="町名" class="p-say" style="margin-left:250px">
        <span class="g-label-required" style="margin-left:10px">必須</span>
        <p class="g-formGrid_note" style="margin-bottom:5px;margin-left:205x">
        町名を入力してください。</p>
        <el-input  style="width: 100px;background-color: #f7f7f7" placeholder="高幡"/>
        </el-form-item> -->


    <!-- <el-form-item label="丁目番地" prop="streetName" style="margin-left:275px">
        <span class="g-label-required" style="margin-left:10px">必須</span>
        <p class="g-formGrid_note" style="margin-bottom:5px;margin-left:165px">
        左端のみ必須です。番地がない場合は左端に1を入力してください。</p>
        <dt style="margin-left:200px">
            <el-input v-model="ruleForm.streetName" style="width: 100px" placeholder="528" />-
            <el-input v-model="ruleForm.streetName" style="width: 100px" placeholder="1"/>-
            <el-input v-model="ruleForm.streetName" style="width: 100px" />
        </dt>
        </el-form-item> -->
<p class="g-formGrid_note" 
        style="width:400px;font-size:0.5rem;margin-left:575px">
        左端のみ必須です。番地がない場合は左端に1を入力してください。</p>
     <el-row type="flex" >
        <el-col > 
    <el-form-item label="丁目番地" prop="streetName1" style="margin-top:30px;margin-left:275px" >
        <span class="g-label-required" style="margin-right:20px;margin-top:-20px">必須</span>
       
      <el-input v-model="ruleForm.streetName1" style="width: 100px;margin-left:150px;" placeholder="528" />
      
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
      <el-radio-group v-model="houseType" style="margin-left:170px">
        <el-radio label="戸建て" value="0" />
        <el-radio label="集合住宅" value="1" />
      </el-radio-group>
    </el-form-item>

    <el-form-item label="エレベータ" prop="ele" style="margin-left:290px">
         <span class="g-label-required" style="margin-left:10px">必須</span>
      <el-radio-group v-model="liftType" style="margin-left:155px">
        <el-radio label="なし" value="0" />
        <el-radio label="あり" value="1" />
      </el-radio-group>
    </el-form-item>

<div class="g-layout_head">
	<h3>パスワード変更</h3>
</div>
<p class="g-formGrid_note" style="text-align:left;margin-left:600px;font-size:0.8rem">
            半角英数字組合せ8～20文字で入力してください。
        </p>
 <el-form-item label="新パスワード" prop="newPassword" style="margin-left:305px">
        <el-input 
        show-password
        v-model="ruleForm.newPassword"
        type="password"
        autocomplete="off"
        style="width: 600px;margin-top:10px;margin-left:170px" />
        </el-form-item>
        <!-- <p id="visible" style="font-size: 0.8rem;margin-top:-10px;cursor: pointer;">
        パスワードを表示する</p>
        <p id="invisible" style="font-size: 0.8rem;margin-top:-5px;cursor: pointer;margin-right:23px" >
        パスワードを隠す</p> -->

<el-form-item label="新パスワード(check)" prop="newPasswordCheck" style="margin-left:318px">
        <el-input 
        show-password
        type="password" 
         v-model="ruleForm.newPasswordCheck" 
         autocomplete="off"
        style="width: 600px;margin-top:10px;margin-left:160px" />
        </el-form-item>
        <!-- <p style="font-size: 0.8rem;margin-top:-5px" >パスワードを表示する</p>
        <p id="invisible" style="font-size: 0.8rem;margin-top:-5px;cursor: pointer;margin-right:23px" >
        パスワードを隠す</p> -->
<el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="パスワード変更" name="type" />
      </el-checkbox-group>
<br>

    <el-button  class="btn-content" @click="resetForm(ruleFormRef)">
    <a  href="/update/success/989898">
    更新する
    </a>
    </el-button>
        <el-button  class="g-btn-w-md1-1" type="primary" @click="submitForm(ruleFormRef)"
        > 戻る</el-button>
      

  </div>
  
</el-form>


</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

import { useStore } from "../../store/index";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const userId = route.params.userId;
const store = useStore();
onMounted(() => {
  store.dispatch("setInfoChange",userId);
});

const info = computed(() => store.getters.getInfoChange);
const gender = computed(() => store.getters.getInfoChange.gender);
const houseType = computed(() => store.getters.getInfoChange.typing);
const liftType = computed(() => store.getters.getInfoChange.ele);

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: '',
  nameKANA:'',
  email:'',
  tel11: '',
  tel12: '',
  tel13: '',
  tel2: '',
  gender: '',
  postNo: '',
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
  newPassword:'',
  newPasswordCheck:'',
  type: [],
  resource: '',
  desc: '',
})

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('入力してください'))
  } else {
    if (ruleForm.newPasswordCheck !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('newPasswordCheck', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('もう一度入力してください'))
  } else if (value !== ruleForm.newPassword) {
    callback(new Error("入力されたパスワードが一致していません。"))
  } else {
    callback()
  }
}

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
    { max: 10, message: '10文字以内で入力してください。', trigger: 'blur' },
  ],

  nameKANA: [
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
    { max: 20, message: '20文字以内のカタカナで入力してください。', trigger: 'blur' },
    // { validator: validateKanaPass, trigger: 'blur' }
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
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
    { type:"number", max: 7, message: '7桁の数字で入力してください。', trigger: 'blur' },
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

  newPassword: [
    { validator: validatePass, trigger: 'blur' },
    { min: 8, max: 20, message: '半角英数字組合せ8～20文字で入力してください。', trigger: 'blur' }
  ],

  newPasswordCheck: [
    { validator: validatePass2, trigger: 'blur' },
    { min: 8, max: 20, message: '半角英数字組合せ8～20文字で入力してください。', trigger: 'blur' }
  ],

  
//   type: [
//     {
//       type: 'array',
//       required: true,
//       message: 'Please select at least one activity type',
//       trigger: 'change',
//     },
//   ],
//   resource: [
//     {
//       required: true,
//       message: 'Please select activity resource',
//       trigger: 'change',
//     },
//   ],
//   desc: [
//     { required: true, message: 'Please input activity form', trigger: 'blur' },
//   ],
})


const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

// const options = Array.from({ length: 10000 }).map((_, idx) => ({
//   value: `${idx + 1}`,
//   label: `${idx + 1}`,
// }))

// function showPass {

// }
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
    border-color: #dbdbdb;
    padding-bottom: 20px;
    width:750px;
    margin-left: 300px;
    margin-top: 20px;
}
/* .p-say {
    font-size: 1rem;
    margin-right:600px;
    margin-bottom: 30px;
    text-align: left;
    padding:20px
}
.g-inputGroup1{
    display: flex;
    font-size: 1rem;
    margin-left: 600px;
    margin-top: -27px;
} */
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
/* .g-inputGroup1{
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

} */
/* .g-formGrid_note{
    display: flex;
    font-size: 0.5rem;
    margin-left: 265px;
    margin-top:-50px;
}
.g-inputGroup4{
    font-size: 0.8rem;
    margin-left: 100px
} */

/* .g-link{
    display: flex;
    font-size: 0.9rem;
    margin-left: 720px;
    margin-top: -30px
} */
/* .g-inputGroup5{
    font-size: 0.8rem;
    margin-left: 100px
} */

.g-btn-w-md1-1{
    height: 40px;
    color:black;
    background-color: white;
    border-color: #009e96;
    border-radius: 5%;
    padding-top:10px;
    padding-bottom:10px;
    border: 0.1px solid #009e96; 
    margin-left: 400px;
    width:300px;
    margin-top: 30px;
    font-size: 1rem;
    margin-top:-74px;
    font-size:0.8rem;
    margin-right: 300px;
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
    margin-left: 720px;
    width:300px;
    font-size: 1rem;
    font-size: 0.8rem;
}
</style>
