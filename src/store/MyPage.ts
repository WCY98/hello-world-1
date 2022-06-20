const url = "http://localhost:3000/user/info/";
const headers = { Accept: "application/json" };

type userInfoState = {
  userInfo: {userInfo:info[]};
};

type info={
  userId:Number,
  name:String,
  currentPoint:Number,
  InvalidPoint:Number,
  barCode:String,
  cardNum:Number
}

export default {
  state: {
    userInfo: {
      userId:989898,
      name:"",
      currentPoint:0,
      invalidPoint:0,
      barCode:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyAQAAAAAxKqlMAAAAL0lEQVR42mP4Oa+iTnIe+/wZdXWVM+exVf6QS3w4f15d5XyGUZlRmVGZUZkRJwMAmAiCT1WO9tcAAAAASUVORK5CYII=",
      cardNum:2200758580177
    }
  },

  mutations: {
    setUserInfo(state: userInfoState, payload:any) {
      state.userInfo = payload[0];
      console.log("qwer",payload)
    },
  },
  actions: {
    async setUserInfo(context, payload: number) {
      console.log("aaaaaaaa",)
      const info = await fetch(url + payload, { headers });
      const j = await info.json();
      console.log("ddddddd",j)
      context.commit("setUserInfo", j[0]);
      
    },
  },
  getters: {
    getUserInfo(state: userInfoState) {
      return state.userInfo;
    },
  },
};