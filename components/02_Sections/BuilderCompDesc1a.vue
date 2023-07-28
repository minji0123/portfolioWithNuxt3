
<template>
  <section class="safe-size">
    <div class="sc-tbox1">
      <h1 class="sc-title">{{ compDesc.title }}</h1>
      <p class="sc-head">{{ compDesc.head }}</p>
      <span v-for="(a, idx) in compDesc.desc" :key="idx" class="sc-desc">
        {{ a }}
      </span>
    </div>
  </section>
</template>
<script>
import { defaultState } from '~/store/index'

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'BuilderCompDesc1a',
  components: {},
  props: {
    compDesc: {
      type: Object,
      default: () => {},
    }
  },
  data: () => ({}),
  setup() {
    return {
      state: defaultState(),
    }
  },
  methods: {},
}
</script>
<style lang="sass" scoped>
@import '@/assets/reset.sass'

.sc-tbox1
    .sc-title
      font-size: $size9
      margin-bottom: 40px
    .sc-head
      font-size: $size2
      margin-bottom: 20px
    .sc-desc
      display: block
      &:last-child
        margin-bottom: 20px
// @media screen and (min-width:768px)
// @media screen and (min-width:1280px)
</style>
  