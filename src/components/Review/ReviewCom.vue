<template>
<div id = "js-reviewList">
 <ul class="g-reviewList">
   <template v-if="title != null">
      <li class="g-reviewList_item">
        <div class="g-lg-flow-sm">
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

        <ul class="g-sm-flow-sm g-lg-flow g-reviewList_pics">
          <li>
              <div>
                <template v-if="photo1 != null">
                  <viewer
                    :images="images"
                    @inited="inited"
                    class="viewer"
                    ref="viewer"
                  >
                    <template #default="scope">
                      <img
                        v-for="src in scope.images"
                        :src="src"
                        :key="src"
                        class="image"
                      />

                      {{ scope.options }}
                    </template>
                  </viewer>
                </template>
                <!-- <button type="button" @click="show">Show</button> -->
              </div>
            </li>
        </ul>
        
        <p class="g-reviewList_like">
          <a 
          @click="helped = !helped"
          class="g-link reviewLike0" 
          id="js-hitLike" 
          data-count="0" 
          >
          <i class="g-s g-s-like-g" aria-hidden="true"></i>
            <span class="material-symbols-outlined"> thumb_up </span>
            <span>参考になった:({{ count }}人){{ helpfulText }}</span></a>
        </p>
      </li>
      </template>
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
      images:[
        this.photo1,this.photo2,this.photo3
      ],
      code:200,
      helped:false
    }
  },

   methods: {
    inited(viewer) {
      this.$viewer = viewer;
    },
    show() {
      this.$viewer.show();
    },
  },

  components:{
  StarRating
},

 computed: {
    helpfulText() {
      if (this.helped && this.code === 200) {
        return "THANK YOU";
      } else if (this.helped && !this.code == 200) {
        return "FAIL CLICK！";
      } else {
        return null;
      }
    },
  },
};
  
</script>

<style>
.images {
  height: 80%;
}
.image {
  height:80px;
  width: 80px;
  cursor: pointer;
  margin: 3px;
  display: inline-block;
}
.g-reviewList_item {
  padding: 15px 0;
  border-bottom: 1px dashed #dbdbdb;
}
.g-lg-flow-sm {
  display: flex;
}
.g-reviewList_item p {
  word-break: break-all;
}
.g-reviewList_info {
  margin-top: 10px;
}
.g-reviewList_h {
  font-weight: bold;
  margin: 10px 0;
  font-size: 1.2rem;
  line-height: 1.5;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
li {
  text-align: -webkit-match-parent;
}
ul,
ol {
  padding: 0;
  list-style-position: initial;
  list-style-image: initial;
  list-style-type: none;
}
b {
  font-weight: bold;
}
.p-reviw-graph-area-right {
  box-sizing: border-box;
  display: inline-block;
  padding: 2px 2px 2px 2px;
  vertical-align: top;
  width: 100%;
  color: black;
}
.g-link reviewLike0 {
  color: black;
}
.g-reviewList_like {
  cursor: pointer;
}
</style>