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
    クレジットカードの変更・登録
</div>

<div class="g-layout_head">
	<h3>クレジットカードの変更・登録</h3>
</div>
<div class="g-layout_head1">
	<h4>新しいクレジットカードを登録</h4>
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
            ハイフン不要・数字で入力してください。</p>
<el-form-item label="カード番号" prop="cardNumber"
    style="margin-left:258px;margin-top:10px">
    <span class="g-label-required" style="margin-right:20px">必須</span>
        <el-input v-model="ruleForm.cardNumber" id="name"
        style="width: 200px;margin-left:160px" />
    </el-form-item>

<!-- <el-form-item label="有効期限" style="margin-left:246px;margin-top:40px" prop="date">
<span class="g-label-required" style="margin-right:20px">必須</span>
      <el-col >
        <el-date-picker
          v-model="ruleForm.date"
          type="date"
          placeholder="Pick a date"
          style="width: 200px;display:flex;margin-left:218px;margin-top:-30px"
        />
      </el-col>
    </el-form-item> -->

<el-row type="flex" >
        <el-col > 
    <el-form-item label="有効期限" prop="" style="margin-left:260px; margin-top:60px" >
        <span class="g-label-required" style="margin-right:20px;margin-top:-5px">必須</span>
       
      <el-select-v2 v-model="ruleForm.month" :options="options"
      style="width: 100px;margin-left:160px;"  /> 
      <dt >月</dt>
      </el-form-item>
      </el-col>
      <el-col >

    <el-form-item prop="year" style="display:flex">
    
        <select v-model="ruleForm.year" 
        style="width: 100px;margin-left:585px;margin-top:-73px">
        <!-- <el-option label=""  />
        <el-option label="Zone two"  /> -->
        <option v-for="(time, index) in orderTime" 
                        :key="index"
                        :value="time.value" >
                        {{time.time}}</option>
      </select>
    </el-form-item>
    <dt style="margin-top:-63px;font-size:0.95rem;margin-left:300px">年</dt>
    </el-col>
    </el-row>


<el-form-item label="セキュリティコード" style="margin-left:293px;margin-top:40px" prop="cardCode">
    <span class="g-label-required" >必須</span>
      <el-input v-model="ruleForm.cardCode" style="width:100px;margin-left: 146px;"/>
    </el-form-item>
    <img style="width:200px;height:150px;margin-left:30px" src="http://localhost:8080/assets/image/securityPIC.png" />
</el-form>

<el-button  class="btn-content" @click="resetForm(ruleFormRef)">
   登録する
    </el-button>

<ul class="g-unit-xl">
                  <li>
                    <span class="material-symbols-outlined a-a">notification_important</span>
                    お支払日は各クレジット会社会員規約に基づく引き落とし日になります。</li>
                  <li>
                    <span class="material-symbols-outlined a-a">notification_important</span>
                    詳しくはご利用カードのご利用明細書をご覧ください。</li>
                  <li>
                    <span class="material-symbols-outlined a-a">notification_important</span>
                    ご利用可能なカード・回数一覧は
                    <a class="g-link-u" href="https://www.nitori-net.jp/ec/userguide/payment/#credit_c" target="_blank">こちら</a></li>
                </ul>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  cardNumber:'',
  month:'',
  year:'',
  cardCode:''
})

//确认是否是数字
function isNumber(s) {
  return  !!s.match(/^\d+$|^\d+[.]?\d+$/)
}

const validateNo = () => {
  if (isNumber('ruleForm.cardCode') === true){
    console.log( isNumber('ruleForm.cardCode'));
  }else{
    return(new Error ('数字で入力してください。'))
  }
}

const rules = reactive<FormRules>({
  cardNumber: [
    { required: true, message: '数字で入力してください。', trigger: 'blur' },
    { min:14, max: 16, message: '14桁以上16桁以内の数字で入力してください。', trigger: 'blur' },
  ],

  cardCode: [
    { required: true, message: '入力必須項目です。', trigger: 'blur' },
    { validator: validateNo , trigger: 'blur' },
    { min:14, max: 16, message: '3桁以上4桁以内の数字で入力してください。', trigger: 'blur' },
  ],


})

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 12 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))

// let thisYear = new Date().getFullYear();
// const options1 = Array.from({ length: 10 }).map((thisYear, idx) => ({
//   value: `${idx + 1}`,
//   label: `${idx + 1}`,
// }))
let thisYear = new Date().getFullYear();
const orderTime = [
    {
        value:"10",
        time:  thisYear 
    },
    {
        value:"11",
        time:  thisYear + 1  
    },
    {
        value:"12",
        time:  thisYear + 2 
    },
    {
        value:"13",
        time:  thisYear + 3 
    },
    {
        value:"14",
        time:  thisYear + 4 
    },
    {
        value:"15",
        time:  thisYear + 5
    },
    {
        value:"16",
        time:  thisYear + 6 
    },
    {
        value:"17",
        time:  thisYear + 7 
    },
    {
        value:"18",
        time:  thisYear + 8 
    },
    {
        value:"19",
        time:  thisYear + 9 
    },
    {
        value:"20",
        time:  thisYear + 10 
    },
]
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
.g-layout_head1{
    margin-top: 30px;
    margin-right: 650px;
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
.g-unit-xl{
    margin-top: 30px;
    font-size: 0.8rem;
    text-align: left;
}
.material-symbols-outlined a-a{
    font-size: 0.8rem;
}
.g-link-u{
    color: #009e96;
}
.g-link-u:hover{
    text-decoration: underline;
}
.g-unit-xl{
  margin-left: 320px;
}
</style>