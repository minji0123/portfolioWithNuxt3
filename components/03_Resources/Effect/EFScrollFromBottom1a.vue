<!-- 아직 v-scroll 함수 지정 안된 상태 -->
<template>
  <div :class="{ from_top: eventCheck }" class="from-before from-delay-1">
    <slot></slot>
  </div>
</template>
<script>
import { defaultState } from '~/store/index'

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'EFScrollFromBottom1a',
  components: {},
  props: {},
  data: () => ({
    targetY: 0,
  }),
  setup() {
    return {
      state: defaultState(),
    }
  },
  mounted() {
    this.targetY =
      this.$el.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight * 0.8
    // 여기서 스크롤 이벤트 발생 지점 control
  },
  methods: {},
}
</script>
<style lang="sass" scoped>
@import '@/assets/reset.sass'
// @media screen and (min-width:768px)
// @media screen and (min-width:1280px)
</style>
  