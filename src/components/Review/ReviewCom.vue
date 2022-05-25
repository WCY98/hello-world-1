<template>

<div id = "js-reviewList">
 <ul class="g-reviewList">
      <li class="g-reviewList_item">
          <p class="g-label-brand g-reviewList_label">PickUpReview</p>
        <div class="g-lg-flow-sm">
          <!-- <p class="g-score">
            <span :data-score="rating">
              <span class="g-clip">Rating:</span>
            </span>
          </p> -->
          <star-rating
            :starSize="20"
            :rating="rating"
            :read-only="true"
            :increment="0.01"
            :show-rating="false">
            </star-rating>
          <p class="g-reviewList_user">
            <b>NickName:{{nickName}}</b>さん
            <br>
            <br>
            ReviewDate:{{ reviewDate }}
          </p>
        </div>
        <p class="g-reviewList_info">購入商品:{{ goodsName }}</p>
        <p class="g-reviewList_h">ReviewTitle:{{ title }}</p>
        <p>
          ReviewContent:{{ content }}
        </p>
        <p class="g-reviewList_like">
          <a class="g-link reviewLike0" id="js-hitLike" data-count="0" 
          data="6256b13a449cda003200015a" data-clickable="">
          <!-- <i class="g-s g-s-like-g" aria-hidden="true"></i>
          <span>参考になった:（{{ count }}人）</span></a> -->
          <i class="g-s g-s-like-g" aria-hidden="true"></i>
            <span class="material-symbols-outlined"> thumb_up </span>
            <span>参考になった:（{{ count }}人）</span></a>
        </p>
      </li>
    </ul>
</div>
</template>

<script>
// import ReviewContainerVue from './ReviewContainer.vue';
import StarRating from 'vue-star-rating'

export default {
  props: {
    // review: {(object)
      rating: Number,  
      nickName: String,
      reviewDate: String,
      goodsName: String,
      title: String,
      content: String,
      count: Number,
      photo1: String,
      photo2: String,
      photo3: String,
    // },  
  },
  data(){
    return{
      Image:[
        this.photo1,this.photo2,this.photo3
      ]
    }
  },
  components:{
  StarRating
}
};

  

</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  justify-content: center;
}
.g-reviewList {
    box-shadow: 0 -1px 0 0 #dbdbdb;
}
.g-reviewList_item {
    padding: 15px 0;
    border-bottom: 1px dashed #dbdbdb;
}
.g-reviewList_item p {
    word-break: break-all;
}
.g-reviewList_label {
    margin-bottom: 15px;
}
b {
    font-weight: normal;
}
.g-label-brand {
    color: #009e96;
    border: 1px solid #009e96;
}
.g-label-brand, .g-label-price, .g-label-maker, .g-label-required {
    font-size: 1.2rem;
    font-weight: normal;
    line-height: 1;
    display: inline-block;
    padding: 3px 5px;
    vertical-align: middle;
    white-space: nowrap;
    background-color: #fff;
}
.g-reviewList_item p {
    word-break: break-all;
}
.g-reviewList_h {
    font-weight: normal;
    margin: 10px 0;
    font-size: 1rem;
    line-height: 0.5;
}
.g-reviewList_like {
    line-height: 1;
    margin-top: 15px;
}
[data-clickable] {
    cursor: pointer;
}
a {
    text-decoration: none;
    color: #333;
}
.g-reviewList_like .g-s {
    font-size: 2rem;
    margin-top: -4px;
}


</style>
