<template>
  <swiper
    :options="swiperOption"
    :initialSlide = "2"
    :slidesPerView="2"
    :spaceBetween="30"
    :slidesPerGroup="2"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
  >
    <swiper-slide v-for="(swiperSilde, index) in slides" :key="index">
      <div>
        <a :href="swiperSilde.link">
          <img :src="swiperSilde.imgSrc" />
        </a>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("setImages");
    });
    let slides = computed(() => store.getters.getImages);
    let swiperOption = {
     initialSlide: 1
    };
    return {
      slides,
      modules: [Pagination, Navigation],
      swiperOption,
    };
  },
};
</script>