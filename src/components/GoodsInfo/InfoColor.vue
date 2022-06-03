<template>
<dt>カラー：<b id="p-customize1カラー">{{color}}</b></dt>
<dd>
	<ul class="g-flow-sm">
        <select 
            v-model = "color"
            @change = "changeColor"
            name="" 
            required=""
            aria-required="true" 
            aria-label="サイズの選択" 
            data-control="#p-eo-label-">
		<li v-for= "(v, index) in firstVarColors" :key="index">
			<label class="g-checkable g-checkable-circle">
				<input type="radio" 
                    name="1カラー" 
                    :value="v.colorValue" 
                    data-parent="05700010014" 
                    data-index="0" 
                    :data-label= "v.color" 
                    data-control="#p-customize1カラー">
			<span><span class="g-checkable_checked"></span>
            <img :alt="v.color"></span>
				</label>
                
		</li>
        </select>
        <!-- </select> -->
				<!-- <li>
						<label class="g-checkable g-checkable-circle">
					<input type="radio" name="1カラー" value="00100180026" data-parent="05700010014" data-index="0" data-label="ベージュ" data-control="#p-customize1カラー">
					<span><span class="g-checkable_checked"></span><img src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8965478907934/BasicColor_BE.jpg" alt="ベージュ"></span>
					</label>
				</li> -->
			</ul>
	</dd>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
    store.dispatch("setSizeList",goodsId)
});

const firstVarColors = computed(() => store.getters.getVariants);

</script>

<style scoped>
p,
form,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
dd,
input,
textarea,
select,
button {
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
dl {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
b {
  font-weight: bold;
}
body {
  font-size: 1.4rem;
  line-height: 1.42857;
}
dd {
  display: block;
  margin-inline-start: 40px;
}
.g-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
.g-select-sm .g-i {
  right: 7px;
}
.g-select option {
  color: #333;
}
option {
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
.g-flow-sm,
.g-lg-flow-sm {
  margin-bottom: -10px;
  margin-left: -10px;
}
.g-flow,
.g-lg-flow,
.g-flow-0,
.g-lg-flow-0,
.g-flow-xs,
.g-lg-flow-xs,
.g-flow-sm,
.g-lg-flow-sm,
.g-flow-lg,
.g-lg-flow-lg,
.g-flow-xl,
.g-lg-flow-xl {
  display: flex;
  flex-wrap: wrap;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-flow-sm > *,
.g-lg-flow-sm > * {
  margin-bottom: 10px;
  margin-left: 10px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  width: 40px;
  height: 40px;
}
.g-checkable-circle,
.g-lg-checkable-circle {
  border-radius: 50%;
}
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  width: 35px;
  height: 35px;
  padding: 5px;
}
.g-checkable-img,
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-img,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 0 1px #dbdbdb inset;
}

.g-checkable,
.g-lg-checkable {
  line-height: 1;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.g-checkable input[type="radio"],
.g-checkable input[type="checkbox"],
.g-lg-checkable input[type="radio"],
.g-lg-checkable input[type="checkbox"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-color: transparent;
  border-radius: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.g-checkable-circle .g-checkable_checked,
.g-lg-checkable-circle .g-checkable_checked {
  border-radius: 50%;
}
.g-checkable .g-checkable_checked,
.g-lg-checkable .g-checkable_checked {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 0 2px #009e96 inset;
}
.g-checkable-img,
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-img,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 0 1px #dbdbdb inset;
}
.g-checkable-circle img,
.g-sm-checkable-circle img {
  overflow: hidden;
  border-radius: 50%;
}
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
</style>