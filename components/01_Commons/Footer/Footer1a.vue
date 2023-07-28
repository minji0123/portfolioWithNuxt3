<template>
  <footer>
    <div class="foo-infos">
      <img class="f-logo" src="/images/logo.png" alt="#" />
      <ul>
        <li><strong>{{ state.companyName }}</strong></li>
        <li>사업자등록번호 : {{ state.companyNum }}</li>
        <li>Tel. {{ state.phone }} | Fax. {{ state.fax }} | Email. {{ state.mail }}</li>
        <li>주소 : {{ state.address }}</li>
      </ul>
    </div>
    <p class="foo-cr">{{ state.copyright1 }}<br />{{ state.copyright2 }}</p>
  </footer>
</template>
<script>
import { defaultState } from '~/store/index'

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'Footer1a',
  components: {},
  props: {},
  data: () => ({
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

footer
  background-color: $gray7
  .foo-infos
    @include alignc
    justify-content: center
    padding-block: 20px
    .f-logo
      width: 60px
      margin-right: 20px
    ul
      @include justic
      flex-direction: column
  .foo-cr
    padding-bottom: 20px
    font-size: 0.8rem
    color: $gray5
    text-align: center
// @media screen and (min-width:768px)
// @media screen and (min-width:1280px)

</style>
