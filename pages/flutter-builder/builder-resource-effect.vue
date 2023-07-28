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
  name: 'builder-resource-effect',
  components: {
    BuilderCompDesc1a,
    BuilderCompList1a,
  },
  props: {},
  data: () => ({
    compDesc: {
      title: 'EFFECTS',
      head: 'Flutter Builder 에서는 다양한 기능, 옵션, 모양의 00를 제공합니다.',
      desc:[
        '추가요망',
      ],
    },
    compList: [
      {
        item: 'EFAirFloat1a',
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
  