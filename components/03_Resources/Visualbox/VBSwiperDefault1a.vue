
<template>
  <section>
    <swiper
      class="swiper"
      v-bind="swiperOptions"
      :modules="modules"
    >
      <swiper-slide class="swiper-slide">
        <h1 class="swiper-content">{{ text1 }}</h1>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <h1 class="swiper-content">{{ text1 }}</h1>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <h1 class="swiper-content">{{ text1 }}</h1>
      </swiper-slide>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div></div>
    </swiper>
  </section>
</template>
<script>
import { defaultState } from '~/store/index';
import { Swiper, SwiperSlide } from 'swiper/vue';;
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination, Parallax, Scrollbar, } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/scrollbar';
SwiperCore.use([ Autoplay, EffectFade, Navigation, Pagination, Parallax, Scrollbar ]);

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'VBSwiperDefault1a',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    prop1: {
      type: String,
      default: 'Head Here',
    },
    prop2: {
      type: Array,
      default: () => [],
    },
    prop3: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    swiperOptions: {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // effect: 'fade',
    },
    text1: 'Hello World',
    items1: [
      { name: 'item1', desc: 'desc' },
      { name: 'item2', desc: 'desc' },
      { name: 'item3', desc: 'desc' },
    ],
  }),
  setup() {
    return {
      state: defaultState(),
      modules: [ Navigation, Pagination, Scrollbar, Autoplay, Parallax, EffectFade, ],
    }
  },
  methods: {},
}
</script>
<style lang="sass" scoped>
@import '@/assets/reset.sass'

.swiper
  height: 400px
  h1
    font-size: 5em
    line-height: 400px
    text-align: center
// @media screen and (min-width:768px)
// @media screen and (min-width:1280px)
</style>
  