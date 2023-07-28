<template>
  <section class="sub-page-layout">
    <CustomTemplate class="safe-size"></CustomTemplate>

      <!-- <div class="pinia-test" :class="{ changeRed : 예시L.getHref.includes('builder-index')}">
        <h2>피니아예시_LocalStorage</h2>
        <input type="button" @click="예시L.setHref()" value="현재 경로 저장">
        <input type="button" @click="예시L.removeHref()" value="현재 경로 삭제">
        {{예시L.getHref}}
      </div> -->

      <section class="pinia-wrap safe-size">


        <div class="pinia-test">
          <h2>피니아예시_LocalStorage</h2>
          <div>
            <button @click="예시L.setHref()" >현재 경로 저장</button>
            <button @click="예시L.removeHref()" >현재 경로 삭제</button>
            <p>{{예시L.getHref}}</p>
            <p>{{예시P.getNumber}}</p>

          </div>
        </div>

      </section>

  </section>
</template>

<script>
import { defaultState,useLocalStorage } from '~/store/index';
import {  onMounted } from "vue";
import CustomTemplate from '~/components/CustomTemplate.vue';

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'builder-index',
  components: {
    CustomTemplate,
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
    text1: 'Hello World',
    items1: [
      { name: 'item1', desc: 'desc' },
      { name: 'item2', desc: 'desc' },
      { name: 'item3', desc: 'desc' },
    ],
    width: 1280,
  }),
  setup() {
    definePageMeta({ layout: 'custom' })
    return {
      state: defaultState(),
      예시L: useLocalStorage(),
      
    }
  },
  mounted() {
    this.width = window.innerWidth;
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      console.log('handleResize 에서 width? ',this.width );

    },
  },

}
</script>

<script setup>
  import { defaultState,useLocalStorage,useParameter } from '~/store/index';

  const 예시L= useLocalStorage();
  const 예시P = useParameter();

  onMounted(() => {
    // console info/ log 차이
    // https://velog.io/@leyuri/%EC%BD%98%EC%86%94-%EB%A1%9C%EA%B7%B8-%ED%99%9C%EC%9A%A9-Tip
    console.info("onMounted ========");
    
    예시L.setHref();
    예시P.setNumber(7);
  });

</script>


<style lang="sass" scoped>
@import '@/assets/reset.sass'
.iframecontainer
  position: relative
  overflow: hidden
  width: 100%
  padding-top: 56.25%
  box-sizing: content-box
  iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
.pinia-wrap
  margin-top: 100px
  box-shadow: 0px 0px 6px  $gray5
  border-radius: 5px
  margin-bottom: 100px
  padding: 20px
  .pinia-test
    button
      background: $gray5
      border: none
      border-radius: 10px
      padding: 10px
      cursor: pointer
      &:nth-of-type(n+2)
        margin-left: 10px
      &:hover
        background: $gray6
</style>