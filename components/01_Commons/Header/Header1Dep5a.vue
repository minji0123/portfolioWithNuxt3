<template>
  <header ref="target1" :class='{gnbScrollDown: ($store.state.scrollY) > 200}'>
    <div class="wrap">
      <NuxtLink to="/" class="logo">
        <v-img src="/images/edink_logo_w.png" alt="메인로고"></v-img>
      </NuxtLink> 
      <nav>
        <ol :class="{ gnbModalOn: isGnbOn }">
          <li v-for="item in items" :key="item.order" link>
            <NuxtLink :to="item.href" @click.native="closeGnb()">{{ item.title }}</NuxtLink>
          </li>
          <li class="btn-sns on-mo">
            <a href="https://www.instagram.com/studioedink" target="_blank"><img src="/images/insta_w.png" alt="instagram"></a>
            <a href="https://blog.naver.com/ozaki29" target="_blank"><img src="/images/blog_w.png" alt="blog"></a>
            <a href="https://www.behance.net/studioedink" target="_blank"><img src="/images/Be_w.png" alt="Be"></a>
          </li>
        </ol>
      </nav>
      <div class="btn-wrap on-tb" @click="handleGnb">
        <img :class="{ gnbModalOn: isGnbOn }" src="/images/btn_w.png" alt="메뉴 버튼" />
      </div>
      <div class="btn-sns on-pc">
        <a href="https://www.instagram.com/studioedink" target="_blank"><img src="/images/insta_w.png" alt="instagram"></a>
        <a href="https://blog.naver.com/ozaki29" target="_blank"><img src="/images/blog_w.png" alt="blog"></a>
        <a href="https://www.behance.net/studioedink" target="_blank"><img src="/images/Be_w.png" alt="Be"></a>
      </div>
    </div>
    <span v-show="isGnbOn" class="space-bg" @click="closeGnb()"></span>
  </header>
</template>
<script>
export default {
  name: 'Header1Dep5a',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isGnbOn: false,
    }
  },
  methods: {
    handleGnb: function () {
      this.isGnbOn = !this.isGnbOn
    },
    closeGnb: function() {
      this.isGnbOn = false
    },
  },
}
</script>
<style lang="sass" scoped>
@import '@/assets/reset.sass'
.space-bg
  display: block
  position: fixed
  top: 0
  left: 0
  width: 40%
  height: 100vh
  z-index: 10000

header
  z-index: 1000
  position: fixed
  left: 0
  top: 0
  width: 100%
  height: $header-height-m
  transition: all 500ms
  &.gnbScrollDown
    background-color: $wh-opa-2
  .wrap
    width: 97%
    margin: 0 auto
    height: 100%
    display: flex
    justify-content: space-between
    align-items: center
    .logo
      padding-left: 8px
      .v-image
        &.v-responsive
          width: 70px
    nav
      width: 70%
      *
        line-height: 80px
      ol
        position: absolute
        top: 0
        right: 0
        display: block
        justify-content: space-between
        width: 60%
        height: 100vh
        padding-top: 40px
        margin-right: -60%
        border-left: 2px solid $wh-opa-1
        text-align: right
        transition: all 400ms
        box-sizing: border-box
        li
          a
            display: block
            width: 100%
            height: 60px
            padding: 0 12px
            font-size: 16px
            color: $wh
            transition: 0.4s
            &:hover
              color: $point1
        &.gnbModalOn
          display: block
          margin-right: 0
          background-color: $bk-opa-4
    .btn-wrap
      width: 50px
      height: 50px
      margin-right: 0
      img
        width: 30px
        margin: 10px
        transition: all 400ms
        &.gnbModalOn
          filter: invert(0)
    .btn-sns
      &.on-pc
        display: none
      &.on-mo
        a
          width: 32px
          height: 40px
          padding: 0 4px
          margin-left: auto
          margin-right: 10px
          img
            width: 100%
            height: auto
#app
  &.is_sub_page
    .logo , .btn-wrap >img
      filter: invert(1)
      &.gnbModalOn
        filter: invert(0)
    header
      &.gnbScrollDown
        background-color: $bk-opa-2
header
  &.sub_1a
    li:nth-of-type(1)
      font-weight: 900
  &.sub_2a
    li:nth-of-type(2)
      font-weight: 900
  &.sub_3a
    li:nth-of-type(3)
      font-weight: 900
  &.sub_4a
    li:nth-of-type(4)
      font-weight: 900
  &.sub_5a
    li:nth-of-type(5)
      font-weight: 900
  &.sub_6a
    li:nth-of-type(6)
      font-weight: 900
  &.sub_7a
    li:nth-of-type(7)
      font-weight: 900
// @media screen and (min-width:768px)
@media screen and (min-width:1280px)
  .space-bg
    display: none
  header
    left: 50%
    height: $header-height + 20
    transform: translateX(-50%)
    .wrap
      width: 1320px
      margin-inline: auto
      padding-bottom: 20px
      align-items: flex-end
      .logo
        padding-left: 0
        margin-right: 60px
        .v-image
          &.v-responsive
            width: 100px
      nav
        ol
          position: relative
          top: unset
          right: unset
          display: flex
          justify-content: space-between
          align-items: flex-end
          width: 100%
          height: $header-height
          margin-right: 0
          padding-top: 0
          border-left: 0
          li
            a
              height: 45px
              padding: 0 3px
              font-size: 14px
      .btn-wrap
        width: 50px
        height: 50px
      .btn-sns
        margin-left: 40px
        &.on-pc
          display: flex !important
          box-sizing: border-box
          a
            display: block
            width: 20px
            height: 20px
            &:nth-child(2)
              margin: 0 30px
            img
              width: 20px
              height: auto
              margin: 0
  #app
    &.is_sub_page
      header li a
        color: $bk
      header .wrap .btn-sns img
        filter: invert(1)        
      header
        &.sub_1a
          li:nth-of-type(1)
            a
              color: $gray1
            &::before
              display: block
              background-color: $gray1
        &.sub_2a
          li:nth-of-type(2)
            a
              color: $point2
            &::before
              display: block
              background-color: $point2
        &.sub_3a
          li:nth-of-type(3)
            a
              color: $point6
            &::before
              display: block
              background-color: $point6
        &.sub_4a
          li:nth-of-type(4)
            a
              color: $point1
            &::before
              display: block
              background-color: $point1
        &.sub_5a
          li:nth-of-type(5)
            a
              color: $point5
            &::before
              display: block
              background-color: $point5
        &.sub_6a
          li:nth-of-type(6)
            color: $gray1
            &::before
              display: block
              background-color: $gray1
        &.sub_7a
          li:nth-of-type(7)
            color: $gray1
            &::before
              display: block
              background-color: $gray1
        li
          position: relative
          &::before
            content: ""
            display: none
            position: absolute
            bottom: 20px
            left: 50%
            width: 100%
            height: 4px
            transform: translateX(-50%)
</style>
