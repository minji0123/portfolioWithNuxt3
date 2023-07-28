<template>
  <footer>
    <div>
      <h2>{{ state.companyName }}</h2>
      <div class="motb-info">
        <ul class="info-box1">
          <li>CEO</li>
          <li>BUSINESS LICENSE</li>
          <li>ADDRESS<br /><br /><br /><br /></li>
          <li>CONTACTS<br /><br /></li>
          <li>WEBSITE</li>
        </ul>
        <ul class="info-box2">
          <li>{{ state.ceo }}</li>
          <li>{{ state.companyNum }}</li>
          <!-- 나중에 v-for로 변환 -->
          <li>
            {{ state.address }}<span class="line-changer"></span>
            <!-- {{ state.address2 }}<span class="line-changer"></span>
            {{ state.address3 }}<span class="line-changer"></span>
            {{ state.address4 }} -->
          </li>
          <li>
            T. <a href="tel:01012345678">{{ state.phone }}</a><span class="line-changer"></span>
            E. {{ state.mail }}
          </li>
          <li><a href="#">{{ state.website }}</a></li>
        </ul>
      </div>
      <div class="pc-info">
        <dl class="info-box1">
          <dt class="copyright" style="width: 100%; font-size: 13px; font-weight: 300;">{{ state.copyright1 }}</dt>
          <dt>CEO</dt>
          <dd>{{ state.ceo }}</dd>
          <dt class="ls">BUSINESS LICENSE</dt>
          <dd>{{ state.companyNum }}</dd>
        </dl>
        <dl class="info-box2">
          <dt>ADDRESS</dt>          
          <!-- 나중에 v-for로 변환 -->
          <dd>
            {{ state.address }}<span class="line-changer"></span>
            <!-- {{ state.address2 }}<span class="line-changer"></span>
            {{ state.address3 }}<span class="line-changer"></span>
            {{ state.address4 }} -->
          </dd>
        </dl>
        <dl>
          <dt>CONTACTS</dt>
          <dd>
            T. <a href="tel:01012345678">{{ state.phone }}</a><span class="line-changer"></span>
            E. {{ state.mail }}
          </dd>
          <dt>WEBSITE</dt>
          <dd><a href="#">{{ state.website }}</a></dd>
        </dl>
      </div>
    </div>
    <p class="blind">copyright</p>
    <p class="blind">{{ state.copyright1 }}<br />{{ state.copyright2 }}</p>
  </footer>
</template>
<script>
import { defaultState } from '~/store/index'

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'Footer2a',
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
  box-sizing: border-box
  background-color: $bk !important
  *
    color: $wh
    .copyright
      color: $gray4
  .line-changer
    display: block
  >div
    padding: 14px 0 0
    margin: 0 auto 10px
    h2
      margin-bottom: 10px
      text-align: center
      font-size: 16px
      font-weight: 900
    .pc-info
      display: none
    .motb-info
      display: flex
      justify-content: space-between
      font-size: 11px
      li
       padding: 3px 0
       a
        font-size: 11px
        color: $wh
      .info-box1
        width: 120px
        font-weight: 700
      .info-box2
        width: calc(100% - 120px)
  p
    width: 100%
    text-align: center
    font-size: 10px
    color: $gray4
    &::before
      display: none
#app.is_sub_page
  footer
    background-color: $wh !important
    *
      color: $gray1
      a
        color: $gray1
      p
        color: $gray4
      .copyright
        color: $gray4
// @media screen and (min-width:768px)
@media screen and (min-width:1280px)
  footer
    width: 100%
    box-sizing: border-box
    .line-changer
      display: block
    >div
      position: relative
      width: 1320px
      padding: 14px 0 0
      margin: 0 auto 10px
      *
        font-size: 14px
        line-height: 30px
      h2
        position: absolute
        top: 36px
        left: 60px
        font-size: 17px
        font-weight: 900
        text-align: left
        transform: none
      .motb-info
        display: none
      .pc-info
        display: flex
        justify-content: space-between
        margin: 20px 0
        dl
          display: flex
          flex-wrap: wrap
          align-content: flex-start
          width: 33.33%
          padding: 0 60px
          box-sizing: border-box
          &:first-child
            padding-top: 36px
          dt
            width: 170px
            height: fit-content
            font-weight: 700
            &.ls
              letter-spacing: -1px
          dd
            width: calc(100% - 170px)
            height: fit-content
          &:nth-of-type(2)
            dt
              width: 100px
            dd              
              width: calc( 100% - 100px )
          &:nth-of-type(3)
            dt
              width: 130px
            dd
              width: calc( 100% - 130px )
          a
            color: $wh
    p
      width: 100%
      text-align: center
      font-size: 13px
      color: $gray4
      &::before
        display: none
</style>
