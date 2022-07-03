import { createApp } from 'vue'
import App from './App.vue'
// import store from './store';
import {store,key} from './store';
import router from './router/router'
import VueViewer from "v-viewer";
import 'viewerjs/dist/viewer.css'; 
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";



import FormMaking from 'form-making'
import {
    GenerateForm,
    MakingForm
} from 'form-making'
import 'form-making/dist/FormMaking.css'

const app = createApp(App);
// app.use(store);
app.use( store, key);
app.use(router);
app.component('GDialog', GDialog)
app.use(VueViewer);
app.mount('#app');
app.use(FormMaking);
app.use(GenerateForm);
app.use(MakingForm)
app.use(ElementPlus);


// const app1 = Vue.createApp({})
// //确保 _use_ 路由实例使
// //整个应用支持路由。
// app1.use(router)

// app1.mount('#app')
