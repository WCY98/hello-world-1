import { configProviderContextKey } from "element-plus";

const url = "http://localhost:3000/info/change/";
const headers = { Accept: "application/json" };

 type StateInfoChange = {
    infoChange: {};
  };
  
export default {
    state: {
      infoChange: {},
    },

mutations:{
setInfoChange(state:StateInfoChange,payload:{}){
    state.infoChange = payload;
 }
},

actions:{
async setInfoChange(context, payload: string){
    const info = await fetch(url + payload, {headers});
    const j =await info.json();
    context.commit("setInfoChange",j[0]);
 }
},

getters:{
    getInfoChange(state:StateInfoChange){
        return state.infoChange
    }
}

}