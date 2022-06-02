<template>
<dt>カラー：<b id="p-customize1カラー">{{color}}</b></dt>
<dd>
	<ul class="g-flow-sm">
        <!-- <select 
            v-model = "goodsSize"
            name="" 
            required=""
            aria-required="true" 
            aria-label="サイズの選択" 
            data-control="#p-eo-label-"> -->
		<li v-for= "(color, index) in colorList" :key="index">
			<label class="g-checkable g-checkable-circle">
				<input type="radio" 
                    name="1カラー" 
                    :value="color.colorValue" 
                    data-parent="05700010014" 
                    data-index="0" 
                    :data-label= "color.color" 
                    data-control="#p-customize1カラー">
			<span><span class="g-checkable_checked"></span>
            <img :src="color.imgUrl"
                      :alt="color.color"></span>
				</label>
		</li>
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
    store.dispatch("setInfo",goodsId)
});

const colorList = computed(() => store.getters.getInfo.colorList);
</script>

<style>
</style>