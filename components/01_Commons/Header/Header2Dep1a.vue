<template>
  <header>
    <div class="wrap safe-size">
      <NuxtLink to="/" class="logo from-left from-delay-1">
        <img src="/logo.png" alt="메인로고" />
      </NuxtLink>
      <nav>
        <ol :class="{ gnbModalOn: isGnbOn }">
          <li v-for="(item, idx1) in items" :key="idx1">
            <NuxtLink 
              :to="item.href"
              class="from-top"
              @click.native="clickReload(item.title)"
            >{{ item.title }}</NuxtLink>
            <ol>
              <li v-for="(dep2, idx2) in item.dep2" :key="idx2">
                <NuxtLink
                  :to="dep2.href"
                  @click.native="clickReload(dep2.title)"
                >{{ dep2.title }}</NuxtLink>
              </li>
            </ol>
          </li>
        </ol>
      </nav>
      <div class="btn-wrap" @click="handleGnb()">
        <p class="btn-square">
          <span class="btn-lines-top"></span>
          <span class="btn-lines-mid"></span>
          <span class="btn-lines-bot"></span>
        </p>
      </div>
      <span v-show="isGnbOn" class="close-bg" @click="closeGnb()"></span>
    </div>
  </header>
</template>
<script>
import { defaultState } from '~/store/index'

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'Header2Dep1a',
  components: {},
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      isGnbOn: false,
    }
  },
  beforeMount() {
    if (this.isGnbOn === true) {
      this.isGnbOn = !this.isGnbOn
    }
  },
  setup() {
    return {
      state: defaultState(),
    }
  },
  methods: {
    handleGnb: function () {
      this.isGnbOn = !this.isGnbOn
    },
    closeGnb: function () {
      this.isGnbOn = false
    },
    clickReload: function (params) {
      if (
        params === "회사소개" ||
        params === "프로그램 소개" ||
        params === "포트폴리오" ||
        params === "플러터 빌더" ||
        params === "COMMON" ||
        params === "SECTION" ||
        params === "RESOURCE-1" ||
        params === "RESOURCE-2"
      ) {
        this.isGnbOn = true
      } else {
        this.closeGnb()
      }
    },
  },
}
</script>
<style lang="sass" scoped>
@import '@/assets/reset.sass'
$dep2-height : 50px
  
header
  position: fixed
  left: 0
  top: 0
  width: 100%
  // height: $header-height
  height: $header-height-m
  padding-left: 3%
  background-color: $wh-opa-4
  .wrap
    width: 100%
    display: flex
    justify-content: space-between
    align-items: center
    .logo
      img
        min-width: 50px
        width: 50px
    nav
      width: 80%
      overflow: hidden
      *
        line-height: $header-height-m
        font-weight: 600
      >ol
        z-index: 30
        width: 200px
        height: 100vh
        padding-top: $header-height-m
        position: absolute
        right: -200px
        top: 0
        justify-content: space-between
        transition: 0.4s
        border-left: 1px solid $bk
        background-color: $point1
        opacity: 0
        overflow-y: scroll
        &::-webkit-scrollbar
          display: none
        li
          &:hover
            >a
              background-color: $wh-opa-7
              color: $point1
          a
            display: block
            width: 100%
            height: 100%
            padding: 0 30px
            font-size: 18px
            transition: 0.4s
            color: $wh
            text-align: right
        >li
          position: relative
          >ol
            width: 100%
            padding: 0
            overflow: hidden
            background-color: $wh-opa-3
            opacity: 0
            transition: 0.4s
            a
              height: 0
              padding-inline: 10px
              line-height: $dep2-height
              color: $wh
              font-size: 0.9em
              text-align: right
              transition: 0.4s
              overflow: hidden
          &:hover
            >ol
              height: auto
              display: block
              opacity: 1
              a
                height: $dep2-height
                border-bottom: 1px solid $bk-opa-5
      >ol.gnbModalOn
        right: 0
        opacity: 1
    .btn-wrap
      position: relative
      z-index: 31
      min-width: 60px
      width: 60px
      height: 60px
      margin-right: 0
      background-color: $point1
      img
        width: 30px
        margin: 15px
        filter: invert(1)
      .btn-square
        @include posabc
        @include alignc
        flex-wrap: wrap
        width: 20px
        height: 16px
        .btn-lines-top, .btn-lines-mid, .btn-lines-bot
          display: block
          position: relative
          width: 80%
          height: 2px
          margin-inline: auto
          border-radius: 10px
          background-color: $wh
  .close-bg
    position: fixed
    top: 0
    left: 0
    width: calc(100% - 200px)
    height: 100vh

// -----------------------------------
// Responsive - Tablet
@media screen and (min-width:768px)

// -----------------------------------
// Responsive - PC
@media screen and (min-width:1280px)
  header
    padding-left: 0
    height: $header-height
    .wrap
      width: $wrap-size
      nav
        overflow: visible
        >ol
          width: 100%
          height: 100%
          position: static
          display: flex
          justify-content: flex-end
          padding-top: 0
          border-left: 0
          background-color: transparent
          opacity: 1
          overflow-y: visible
          >li
            a
              padding-inline: 30px
              color: $bk
              line-height: $header-height
            >a
              font-weight: 700
            >ol
              position: absolute
              left: 0
              top: $header-height
              background-color: $bk-opa-1
              a
                color: $bk
                text-align: center
          li
            &:hover
              >a.from-top
                margin-bottom: -2px
                border-bottom: 2px solid $wh
                background-color: transparent
      .btn-wrap
        display: none
        z-index: 31
        width: 60px
        height: 60px
        margin-right: 0
        background-color: $point1
        img
          width: 30px
          margin: 15px
          filter: invert(1)
    .close-bg
      display: none !important
  #app.is_sub_page
    header
      position: absolute
</style>
