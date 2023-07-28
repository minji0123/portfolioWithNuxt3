
<template>
  <section z-index="10000">
    <v-progress-circular indeterminate :size="64" :width="6" color="primary"></v-progress-circular>
  </section>
</template>
<script>
import { defaultState } from '~/store/index'

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'Loading1a',
  components: {},
  props: {},
  data: () => ({
    loading: false,
  }),
  setup() {
    return {
      state: defaultState(),
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
<style lang="sass" scoped>
@import '@/assets/reset.sass'

section
  @include justic
  align-items: center
  background-color: $gray9
  min-height: 480px
</style>
  

  