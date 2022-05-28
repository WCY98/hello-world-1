<template>
    <div class="g-lg-flow-sm p-reviw-graph-area-row-sm">
      <span style="display: flex">
      <div class="g-score p-reviw-graph-area-score">
        <!-- <span data-score="ratingAvg">
        <span class="g-clip">{{ ratingAvg }}</span>
        </span> -->
        <star-rating
        :star-size="20"
        :rating="rating2.rating"
        :read-only="true"
        :increment="0.01"
        :show-rating="false"
      ></star-rating>
      </div>

      <div class="a-meter g-mater-visble" 
           id="js-mater5" style="width: 150px">

        <div class="a-meter-bar" 
             :style="{width: rating2.percentage + '%'}"></div>
      <!-- 记得绑定！！！ -->
      </div>
                                                    <!-- 记得绑定！！！ -->
      <a class="g-link g-link-visble" id="js-rate5" :data-rate="rating2.rating"
        title="title"
        data-clickable>{{ rating2.ratingCount }}人</a>
        <!-- 在tag尖括号里（标签外）用双括号 -->
        </span>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
   components: {
    StarRating,
  },
   props: {
     rating2:{
      rating: Number,
      percentage:Number,
      ratingCount: Number,
     }
    },
    data(){
      return{
        title:
        "レビューの" + this.rating2.percentage + "%に星" + this.rating2.rating +"つが付いています。",
      }
    }
};
</script>

<style scoped>
.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}
.p-reviw-graph-area-left-row {
  display: inline-block;
  margin: 0px 0;
}
.p-reviw-graph-area-row-sm {
    display: flex;
    flex-wrap: wrap;
}
.p-reviewScore .g-score {
    margin: 0 0 2px 15px;
}
element.style {
    box-shadow: rgb(235 97 87) -2px 0px 0px -1px inset, rgb(235 97 87) 0px 0px 0px 1px inset;
}
.a-meter {
    border-radius: 4px;
    overflow: hidden;
    box-shadow: inset 0 0 0 1px #e3e6e6;
    background-color: #ddb8b8;
    height: 10px;
    width: calc(100% - 110px - 4em);
    margin-left: 0px;
    margin-top: 5px;
    margin-right: 5px;
    cursor: pointer;
}
element.style {
    width: 57%;
    box-shadow: rgb(235 97 87) -2px 0px 0px -1px inset, rgb(235 97 87) 0px 0px 0px 1px inset;
}

.a-meter .a-meter-bar {
    -webkit-transition: width .5s ease;
    transition: width .5s ease;
    float: left;
    font-size: 0;
    height: 100%;
    width: 0;
}
.a-meter .a-meter-bar {
    border-radius: 4px;
    box-shadow: inset -2px 0 0 -1px #a4433c, inset 0 0 0 1px #8d3a34;
    background-color: #eb6157;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
#js-totalrate.active, #js-rate1.active, #js-rate2.active, #js-rate3.active, #js-rate4.active, #js-rate5.active {
    color: #eb6157;
    text-decoration: underline;
}

</style>