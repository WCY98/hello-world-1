<template>
  <a class="goods-link" :href="link"
   @mouseover="show"
   @mouseleave="data_showComment = false">
 

    <div class="info discount">{{ tittle }}</div>
    <img :src="imgSrc" :alt="name" />
    <p class="name">{{ name }}</p>
    <p class="item_price">{{ price }}</p>
    <!-- <p class="counter">{{ counter }}</p> -->

    <transition name="slide-fade">
      <div v-if = "data_showComment" class="comment">
      <p>{{comment}}</p>
      </div>
    </transition>
  </a>
</template>

<script>
export default {
  data(){
    return{
      data_showComment:false,
    };
  },

  props: {
    link: String,
    tittle: String,
    imgSrc: String,
    name: String,
    price: Number,
    counter: String,
    comment:String,
  },
  methods:{
    show(){
      if(this.comment){
        this.data_showComment=true;
      }
    }
  }
};
</script>

<style>
.goods-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: none;
  text-decoration: none;
  color: #000;
}

.goods-link img {
  width: 160px;
  height: 160px;
  opacity: 0.8;
  margin: 37px;
}

.comment {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* transform: translateY(101%); */
  transition: transform 0.4s;
  box-sizing: border-box;
  height: 70px;
  padding: 10px 0 0 30px;
  background-color: #1baeae;
  color: #fff;
  text-align: left;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: -translateY(101%);
  opacity: 0;
}
</style> 
