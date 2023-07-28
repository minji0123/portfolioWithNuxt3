<template>
  <div id="showcase" class="sub-page-layout">
    <BuilderCompDesc1a :comp-desc="compDesc"></BuilderCompDesc1a>
    <BuilderCompList1a :comp-list="compList"></BuilderCompList1a>
  </div>
</template>

<script>
import { defaultState } from '~/store/index';
import BuilderCompDesc1a from '~/components/02_Sections/BuilderCompDesc1a.vue';
import BuilderCompList1a from '~/components/02_Sections/BuilderCompList1a.vue';

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'builder-common-header',
  components: {
    BuilderCompDesc1a,
    BuilderCompList1a,
  },
  props: {},
  data: () => ({
    compDesc: {
      title: 'HEADER',
      head: 'Flutter Builder 에서는 다양한 기능, 옵션, 모양의 00를 제공합니다.',
      desc:[
        'Header 갖다 쓰실 때 position absolute >>> fixed 로 바꿔서 사용하세요!',
        'href 경로 다르게 쓰면 hover, active, visited 색 다 달라집니당. 지금은 # 으로 해놨어요',
        '현재 웹상 사용중인 헤더 컴포넌트는 Header2Dep1a.vue 입니다.',
      ],
    },
    compList: [
      {
        item: 'Header1Dep1a',
        desc: '1단 구성의 헤더 컴포넌트입니다.'
      },
      {
        item: 'Header1Dep2a',
        desc: '1단 구성의 헤더 컴포넌트입니다.'
      },
      {
        item: 'Header1Dep3a',
        desc: '1단 구성의 헤더 컴포넌트입니다.'
      },
      {
        item: 'Header1Dep4a',
        desc: '1단 구성의 헤더 컴포넌트입니다.'
      },
    ],
  }),
  setup() {
    definePageMeta({ layout: 'custom' })
    return {
      state: defaultState(),
    }
  },
  methods: {},
}
</script>
<style lang="sass" scoped>
@import '@/assets/reset.sass'
// @media screen and (min-width:768px)
// @media screen and (min-width:1280px)
</style>
  