<template>
  <div class="p-reviw-graph-area-right">
    <div class="g-lg-flow-sm p-reviw-graph-area-row-sm">
      <div class="g-score p-reviw-graph-area-score">
        <span data-score="ratingAvg">
        <span class="g-clip">{{ ratingAvg }}</span>
        </span>
        <star-rating
        class="star"
        :star-size="20"
        :rating="ratingAvg"
        :read-only="true"
        :increment="0.01"
        :show-rating="false"
      ></star-rating>
      </div>
      <div class="a-meter g-mater-visble" id="js-mater5" data-rate="rating2.rating">
        <div class="a-meter-bar" style="{width:rating2.percentage + '%'}"></div>
      </div>
      <a class="g-link g-link-visble" id="js-rate5" data-rate="rating2.rating"
        title="title"
        data-clickable>{{ rating2.ratingCount }}人</a
      >
    </div>
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
.p-reviw-graph-area-right {
    box-sizing: border-box;
    display: inline-block;
    padding: 2px 2px 2px 2px;
    vertical-align: top;
    width: 100%;
}
.p-reviw-graph-area-row-sm {
    display: flex;
    flex-wrap: wrap;
}
.p-reviewScore .g-score {
    margin: 0 0 2px 15px;
}
.g-score [data-score], .g-sm-score [data-score] {
    display: flex;
    overflow: hidden;
    width: 90px;
    margin-right: 0.4em;
}
.a-meter {
    border-radius: 4px;
    overflow: hidden;
    box-shadow: inset 0 0 0 1px #e3e6e6;
    background-color: #DBDBDB;
    height: 10px;
    width: calc(100% - 110px - 4em);
    margin-left: 0px;
    margin-top: 5px;
    margin-right: 5px;
    cursor: pointer;
}
.a-meter .a-meter-bar {
    -webkit-transition: width .5s ease;
    transition: width .5s ease;
    float: left;
    font-size: 0;
    height: 100%;
    width: 0;
}
.g-link-visble {
    text-decoration: underline;
}

</style>