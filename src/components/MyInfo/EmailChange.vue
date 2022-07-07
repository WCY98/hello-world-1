<template>

<div class="g-main">
    <form id="uniRegisterMailForm" class="g-layout-narrow" 
          method="post" data-validation="" 
          commandname="uniRegisterMailForm" novalidate="true">
        <if test=""> <input id="hiddenInp" type="hidden" value=""> </if>
		<div class="g-layout_head">
            <h4 class="big-title">変更後メールアドレス入力</h4>
			<p class="g-lead1">変更したいメールアドレスを入力のうえ、送信してください。</p>
			<p class="g-lead2">ご入力いただいたメールアドレス宛にニトリネットから送信される確認メールをご確認ください。</p>
            <div class="g-error g-error_efo" style="display: block;"
            >
                <p 
                v-if="(ruleForm.emailCheck !== ruleForm.email) 
                && (ruleForm.email !== '') 
                && (ruleForm.emailCheck !== '')"
                class="g-error_h">入力内容をご確認ください。</p>
			</div>
		</div>
			
        <div class="g-layout_body">
            <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
            <!-- <dl class="g-sm-formGrid-v g-lg-formGrid-h g-block-xs">
                <div style="border-bottom:1px dashed gray;padding-bottom: 13px;width:1200px;margin-left:100px">
                <dt >
					<label for="p-mail">
                        <div class="email-address">
                        メールアドレス
                        </div>
                    <span class="g-label-required1" style="display:flex">必須</span></label>
				</dt>
            
				<dd>
                    <input id="p-mail" name="email" class="g-input-sm-fw" 
                    inputmode="email" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},&quot;mail&quot;,{&quot;rule&quot;:&quot;length&quot;,&quot;max&quot;:100},{&quot;action&quot;:&quot;validate&quot;,&quot;subjects&quot;:[&quot;#p-mail-re&quot;]}]" aria-describedby="p-mail_alert" aria-required="true" 
                    placeholder="nitoritarou@nitori.jp" type="text" autocapitalize="off" value="">
                    <div class="g-formGrid_error" id="p-mail_alert" role="alert">
                        メールアドレスの形式が正しくありません。
                    </div>
				</dd>
                </div>
				<dt  >
					<label for="p-mail-re">
                        <span>
                        <div class="email-address" style="margin-left:55px">メールアドレス</div>
                            <small class="email-address-condition" >（確認用）</small>
                        </span>
                    <span class="g-label-required" style="margin-left:543px">必須</span></label>
				</dt>
				<dd>
					<p class="g-formGrid_note">コピー・貼り付けはせずに入力してください。</p>
					<input id="p-mail-re" name="checkEmail" class="g-input-sm-fw1" 
                    inputmode="email" data-validation-rules="[{&quot;action&quot;:&quot;hankaku&quot;},&quot;mail&quot;,{&quot;rule&quot;:&quot;length&quot;,&quot;max&quot;:100},{&quot;rule&quot;:&quot;match&quot;,&quot;name&quot;:&quot;メールアドレス&quot;,&quot;subject&quot;:&quot;#p-mail&quot;},{&quot;action&quot;:&quot;validate&quot;,&quot;subjects&quot;:[&quot;#p-mail&quot;]}]" aria-describedby="p-mail-re_alert" aria-required="true" 
                    placeholder="nitoritarou@nitori.jp" type="text" autocapitalize="off" value=""><div class="g-formGrid_error-error" id="p-mail-re_alert" role="alert">
                        入力必須項目です。
                        <br>
                        メールアドレスの形式が正しくありません。
                        <br>
                        入力されたメールアドレスが一致していません。
                    </div>
				</dd>
			</dl> -->
<el-form-item label="メールアドレス" prop="email" style="margin-left:335px;margin-top:40px">
        <el-input v-model="ruleForm.email" style="width: 600px;margin-left:100px" />
        </el-form-item>

        <p style="font-size: 0.5rem;margin-left:10px" >コピー・貼り付けはせずに入力してください。</p>
<el-form-item label="メールアドレス(（確認用）)" prop="emailCheck" style="margin-left:340px">
        <el-input v-model="ruleForm.emailCheck" style="width: 600px;margin-top:10px;margin-left:96px" />
        </el-form-item>



			<section class="g-block">
				<ul class="g-list-note-unit" style="display:flex">
                <span class="material-symbols-outlined">notification_important</span>
					<li class="g-list-note-content1">ご利用キャリアのメールソフトによっては、ニトリネットからのメール（info@mail.nitori-net.jp)が、迷惑メールへ分類されている可能性や、受信拒否設定がされている可能性があります。メールが届かない場合は、以下のページの手順にて迷惑メールフォルダおよび設定をご確認ください。
                        <br>
                        <div class="g-list-note-content2">メールが受信できない場合：
                        <a class="g-link-u" href="https://www.nitori.co.jp/customersupport/faq/351/" target="_blank">
                            https://www.nitori.co.jp/customersupport/faq/351/</a>
                            </div>
					</li>
				</ul>
			</section>
            </el-form>
		</div>
		<div class="g-layout_foot">
            <div class="g-sm-foot-v g-lg-foot-h g-foot-lg">
				<p>
					<a class="g-btn g-btn-w-md" href="/customer/info/989898">
                        <div class="g-btn-w-md1">
                        <span class="g-btn-w-md1-1">
                            戻る
                        </span>
                        </div>
                        </a>
				</p>
                <div>
					<input id="sourceId" name="sourceId" value="CR-042" type="hidden">
                    <input id="buttonName" name="buttonName" type="hidden" value="">
                    <button id="formSubmitBtn" class="g-btn-w-md2" type="submit">
						<span class="btn-content">送信する</span>
					</button>
				</div>
			</div>
		</div>
	</form>
</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  email:'',
  emailCheck:'',
  type: [],
  resource: '',
  desc: '',
})


//判断上下两个email是否一致，不一致就报错
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('入力必須項目です。'))
  } else {
    if (ruleForm.emailCheck !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('emailCheck', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('入力必須項目です。'))
  } else if (value !== ruleForm.email) {
    callback(new Error("入力されたメールアドレスが一致していません。"))
  } else {
    callback()
  }
}


const rules = reactive<FormRules>({
  email: [
    { validator: validatePass, trigger: 'blur' },
    {
          required: true,
          message: 'メールアドレスを入力してください',
          trigger: 'blur',
        },
    {
        //判断是否是正确的email格式
          type: 'email',
          message: '正しいメールアドレスを入力してください',
          trigger: ['blur', 'change'],
        }
  ],

  emailCheck: [
    { validator: validatePass2, trigger: 'blur' },
    {
          required: true,
          message: 'メールアドレスを入力してください',
          trigger: 'blur',
        },
    {
          type: 'email',
          message: '正しいメールアドレスを入力してください',
          trigger: ['blur', 'change'],
        }
  ],
})
</script>

<style scoped>
.big-title{
    margin-right:400px;
}
.g-lead1{
    margin-right:310px;
    font-size: 0.8rem;
    margin-top: 10px;
}
.g-lead2{
    font-size: 0.8rem;
    margin-right: 110px;
}
.email-address{
    margin-top: 60px;
    margin-right: 550px;
    font-size: 1rem;
    font-weight: bold;
}
.g-label-required1{
    margin-top: -22px;
    margin-left: 390px;
    font-size: 0.5rem;
    color:rgb(216, 83, 83);
    background-color: white;
    border-color: rgb(216, 83, 83);
    border: 1px solid rgb(216, 83, 83);
    width:28px;
    height:20px;
    padding:0px
}
.g-input-sm-fw{
    display:flex;
    margin-left:530px;
    margin-top:-25px;
    font-size:0.5rem;
    width:450px
}
.email-address-condition{
    display:flex;
    font-size:0.3rem;
    margin-left: 480px;
    margin-top: -22px;
}
.g-label-required{
    display:flex;
    margin-top: -21px;
    margin-left: 510px;
    font-size: 0.5rem;
    color:rgb(216, 83, 83);
    background-color: white;
    border-color: rgb(216, 83, 83);
    border: 1px solid rgb(216, 83, 83);
    width:28px;
    height:20px;
    padding:0px
}
.g-formGrid_note{
    display: flex;
    font-size: 0.6rem;
    margin-left: 630px;
    margin-top: -50px;
}
.g-input-sm-fw1{
    display:flex;
    margin-left:630px;
    margin-top:25px;
    font-size:0.5rem;
    width:450px
}
.g-list-note-unit{
    display: flex;
    font-size: 0.4rem;
    width:750px;
    margin-left: 350px;
}
.material-symbols-outlined{
    font-size: 1rem;
    margin-top: 50px;
}
.g-list-note-content1{
    margin-top: 48px;
}
.g-list-note-content2{
    margin-right:312px
}
.g-link-u{
    color:#009e96;
    text-decoration: underline;
}
.g-btn-w-md1{
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
}
.g-btn-w-md1-1{
    margin-top:-13px;
    font-size:0.8rem
}
.g-btn-w-md2{
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
    margin-top: -40px;
    font-size: 1rem;
}
.btn-content{
    font-size: 0.8rem;
    margin-left: 115px;
}
.g-error_h{
    font-size: 0.8rem;
    margin-top: 30px;
    margin-bottom: -20px;
    margin-left: 360px;
    border:0.1px solid #fcf0f1; 
    width: 720px;
    text-align:left;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    color:#eb6157;
    font-weight: bold;
    border-radius: 5px;
    background-color: #fcf0f1;
}
.g-formGrid_error{
    font-size: 0.6rem;
    color:#eb6157;
    margin-left: 98px;
    margin-top: 10px;
}
.g-formGrid_error-error{
    font-size: 0.6rem;
    color:#eb6157;
    margin-left: 630px;
    margin-top: 10px;
    text-align:left;
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
</style>