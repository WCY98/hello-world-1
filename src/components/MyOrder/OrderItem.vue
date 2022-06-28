<template>
<!-- <template v-for="order in orderList" :key="order"> -->
<div class="g-order_titlebody">
    <ul class="g-order_title" >
        <div class="g-order_titlecon">
             注文番号:{{props.orderCode}}
             <a href="/order/detail/EC121231234">
            <button class="g-order_btn" 
                    style="margin-left:600px">注文詳細</button>
            </a>
        </div>
        <div class="g-order_content" style="margin-left:100px">
            <div style="display:flex">
                <span class="g-order_content1"
                      style="margin-bottom:20px">注文日</span>
            <div style="display:flex">
                <span class="material-symbols-outlined">calendar_month</span>
            </div>
            <p id="orderDate">{{props.orderDate}}</p>
            </div>
            <div class="g-order_" style="display:flex">
                <span class="g-order_content2">購入店舗</span>
            <div>
                <span class="material-symbols-outlined">computer</span>
            </div>
            <p id="orderWay">ニトリネット</p>
            </div>
        </div>
        
    </ul>

</div>

<div class="g-order_body">
    <div class="g-order_bodyc">
    <div class="g-order_bodyc1" style="display:flex">
        <p class="g-order_bodyc1-1">現在の状況</p>
        <div style="margin-left:200px">
            <div class="bar" >
                <div :class="orderStatus === '受注済'
                ? ' ellipse-active':
                'ellipse'
                ">
                </div>
                <div class="line"></div>
                <div :class="orderStatus === '出荷・お渡し準備中'
                ? ' ellipse-active':
                'ellipse'
                ">
                </div>
                <div class="line"></div>
                <div :class="orderStatus === '出荷・配送・お渡し済'
                ? ' ellipse-active':
                'ellipse'
                ">
                </div>
                <!-- <div class="line"></div>
                <div class="ellipse"></div>
                <div class="line"></div>
                <div class="ellipse"></div> -->
            </div>
            <div class="text-box" >
                    <p class="text">受注済</p>
                    <p class="text">出荷準備中</p>
                    <p class="text">出荷・配送済</p>
            </div>
        </div>
    </div>

    <div class="g-order_bodyc2" style="display:flex">
        <p class="g-order_bodyc2-1">納品種別</p>
        <p class="g-order_bodyc2-2" 
           style="margin-left:280px">配送員組立設置</p>
    </div>

    <div class="g-order_bodyc3" style="display:flex">
        <p class="g-order_bodyc3-1">配達予定日</p>
        <p class="g-order_bodyc3-2" 
           style="margin-left:260px">{{props.deliveryDate}}</p>
    </div>
    </div>
</div>
<!-- </template> -->
</template>

<script setup lang="ts">
// import { onMounted } from "vue";
// import { useStore } from "../../store/index";
// import { useRoute } from "vue-router";
import { defineProps } from "vue";
// const route = useRoute();
// const userId = route.params.userId;
// // const userId = 989898;
// const store = useStore();
// onMounted(() => {
//   store.dispatch("setOrderList", userId);
// });
// const orderList = computed(() => store.getters.getOrderList)
const props=defineProps<{
    orderDate:string,
    orderCode:string,
    deliveryDate:string,
    orderStatus:string

}>();

// const{orderDate,orderCode,deliveryDate}=toRefs(props)


</script>

<style scoped>
.bar{
  display: flex;
  margin-top:30px;
  margin-left: 50px;
}
.ellipse{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border:5px solid #42c0b6
}
.ellipse-active{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #42c0b6;
  border:5px solid #42c0b6;
}
.line {
  width:200px;
  height: 5px;
  border-radius: 5%;
  background-color: #42c0b6;
  margin-top: 8px;
}
.text-box{
  display: flex;
  margin-top:30px;
  margin-left: -60px;
  font-size: 15px;
}
.text{
  margin: 0px 50px 0px 100px;
}
.g-order_bodyc1-1{
    margin-top:30px
}
.g-order_bodyc2{
    margin-top: 50px;
}
.g-order_bodyc{
    margin-left: 150px;
}
.g-order_bodyc3{
    margin-top: 50px;
}
.g-order_body{
    box-shadow: 0 1px 0 0 #aca9a9;
    width:1200px
}
.g-order_titlecon{
margin-left:0px;
width:1200px
}
.g-order_content{
  margin-top:50px;
  margin-left:50px；
}
.g-order_content1{
    margin-right: 200px;
}
.g-order_content2{
    margin-right: 180px;
    margin-bottom: 30px;
}
.g-order_title{
    box-shadow: 0 1px 0 0 #aca9a9;
    width:1200px;
    margin-top: 50px;
}
.g-order_titlecon{
    background-color: rgb(208, 255, 239);
    height: 50px;
}
.g-order_btn{
    height: 30px;
    margin-top: 10px;
    font-size: 0.5rem;
    color:rgb(156, 187, 176);
    background-color: white;
    font-weight: bold;
    border-color: rgb(152, 192, 178);
    border-radius: 10%;
}

</style>