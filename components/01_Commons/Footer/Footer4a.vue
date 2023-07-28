<template>
  <footer id="footer">
    <div>
      <img src="/images/logo.png" alt="메인로고" />
      <ul>
        <li>상호명 : {{ state.companyName }}</li>
        <li>call : {{ state.phone }}</li>
        <li>이메일 : {{ state.mail }}</li>
        <li>주소 : {{ state.address }}</li>
        <li>FAX : {{ state.fax }}</li>
      </ul>
    </div>
    <p class="blind">copyright</p>
    <p style="margin-bottom: 0;">{{ state.copyright1 }}<br />{{ state.copyright2 }}</p>
  </footer>
</template>
<script>
import { defaultState } from '~/store/index'

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'Footer4a',
  components: {},
  props: {},
  data: () => ({}),
  setup() {
    return {
      state: defaultState(),
    }
  },
  methods: {},
}
</script>
<style scoped lang="sass">
@import '@/assets/reset.sass'

footer
  &#footer
    padding: 0px
    width: 100%
  >div
    display: flex
    justify-content: center
    align-content: center
    flex-direction: column
    padding: 20px 3% 0
    padding: 0px
    background-color: #1234AA
    width: 100%
    *
      font-size: 0.9em
    img
      width: auto !important
      height: 100%
      margin: 0px auto
      display: none
    ul
      margin: 0px auto
      padding: 20px
      li
          color: white
  p
    width: 100%
    text-align: center
    font-size: 0.8em
    color: $gray4
    &::before
      display: none
        
@media screen and (min-width:1280px)
  footer
    >div
      padding: 20px 10% 20px
      width: 100%
      display: flex
      justify-content: center
      align-content: center
      flex-direction: row
      img
        height: 50px
        margin: auto 0px
        margin-left: 130px
        display: block
      ul
        margin: 0px
        margin-left: 30px
        li
          width: 400px
</style>  