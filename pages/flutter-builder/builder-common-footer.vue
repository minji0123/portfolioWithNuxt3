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
  name: 'builder-common-footer',
  components: { BuilderCompDesc1a, BuilderCompList1a, },
  props: {},
  data: () => ({
    compDesc: {
      title: 'FOOTER',
      head: 'Flutter Builder 에서는 다양한 기능, 옵션, 모양의 00를 제공합니다.',
      desc:[
        '현재 웹상 사용중인 푸터 컴포넌트는 Footer1a.vue 입니다.',
      ]
    },
    compList: [
      {
        item: 'Footer1a',
        desc: '기본 푸터 컴포넌트입니다.'
      },
      {
        item: 'Footer2a',
        desc: '다단형식 푸터 컴포넌트입니다.'
      },
      {
        item: 'Footer3a',
        desc: '중앙정렬형 푸터 컴포넌트입니다.'
      },
      {
        item: 'Footer4a',
        desc: '중앙정렬형 푸터 컴포넌트입니다.'
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
  