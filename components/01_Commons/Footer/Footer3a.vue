<template>
  <footer class="text-center">
    <div>
      <h2><img src="/logo.png" alt="메인로고" /></h2>
      <dl>
        <dt>대표</dt>
        <dd>{{ state.ceo }}</dd>
        <dt>사업자등록번호</dt>
        <dd class="mo_noBar">{{ state.companyNum }}</dd>
        <dd class="mo_space"></dd>
        <dt>주소</dt>
        <dd class="mo_noBar pc_noBar">{{ state.address }}</dd>
        <dd class="mo_space"></dd>
        <dd class="mo_noBar address2">{{ state.address2 }}</dd>
        <br />
        <br />
        <dt class="pc_right">TEL</dt>
        <dd class="pc_right">{{ state.phone }}</dd>
        <dd class="pc_space"></dd>
        <dt class="pc_right2">FAX</dt>
        <dd class="mo_noBar pc_right2">{{ state.fax }}</dd>
      </dl>
    </div>
    <p class="blind">copyright</p>
    <p>{{ state.copyright1 }}<br />{{ state.copyright2 }}</p>
  </footer>
</template>
<script>
import { defaultState } from '~/store/index'

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'Footer3a',
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
  >div
    width: 100%
    padding: 20px 3% 0
    *
      font-size: 0.9em
    h2
      width: 105px
      margin: 0 auto 10px
      img
        width: auto !important
        height: 60px
    dl
      padding-block: 10px 10px
      padding-left: 56px
      margin: 0 auto
      text-align: left
      *
        color: $gray2
      dt
        display: inline
        padding-right: 2px
        text-align: left
        &::after
          content: ' : '
          display: inline-block
          margin-left: 4px
      dd
        display: inline
        text-align: left
        &::after
          content: ' | '
          display: inline-block
          margin-left: 6px
          margin-right: 2px
        &.mo_noBar
          &.address2
            padding-left: 34px
          &::after
            content: ''
            display: inline-block
        &.mo_space
          display: block
          height: 0
          &::after
            content: ''
            display: inline-block
        &.pc_space
          display: none
  p
    width: 100%
    padding-left: 3%
    text-align: center
    font-size: 0.8em
    color: $gray4
    box-sizing: border-box
    &::before
      display: none
@media screen and (min-width:768px)
  footer
    >div      
      h2
        img
          margin: 0
      dl
        width: 400px
        margin: 0 auto
        padding-left: 96px
        box-sizing: border-box
        dt
          width: 200px
        dd
          width: calc( 100% - 200px )
@media screen and (min-width:1280px)
  footer
    >div
      padding: 50px 10% 0
      h2
        width: 140px
        padding: 16px 0
        img
          height: 80px
      dl
        position: relative
        width: 600px
        padding-left: 180px
        margin: 0 auto
        dt
          &::after
            margin-left: 6px
        dd
          display: inline
          text-align: left
          &::after
            content: ' | '
            display: inline-block
            margin-left: 6px
            margin-right: 2px
          &.mo_noBar
            &.address2
              display: inline-block
              padding-left: 41px
            &::after
              content: ''
              display: inline-block
          &.pc_noBar
            &::after
              content: ''
              display: inline-block
          &.mo_space
            display: block
            height: 0
            &::after
              content: ''
              display: inline-block
          &.pc_space
            display: inline-block
            height: 0
            width: 0
            &::after
              content: ''
              display: inline-block
    p
      width: 100%
      padding-left: 0%
      text-align: center
      font-size: 0.8em
      color: $gray4
      box-sizing: border-box
</style>
