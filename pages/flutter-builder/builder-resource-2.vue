<template>
  <section class="sub-page-layout">
    <CustomTemplate class="safe-size"></CustomTemplate>
  </section>
</template>

<script>
import { defaultState } from '~/store/index';
import CustomTemplate from '~/components/CustomTemplate.vue';

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'builder-resource-2',
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
  