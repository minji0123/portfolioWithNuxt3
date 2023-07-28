<template>
  <div class="air-float">
    <slot>
      <div style="background-color: purple; width: 80px; height: 80px; clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);"></div>
    </slot>
  </div>
</template>
<script>
import { defaultState } from '~/store/index'

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'CustomTemplate',
  components: {},
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
  }),
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
// @media screen and (min-width:768px)
// @media screen and (min-width:1280px)
</style>
  