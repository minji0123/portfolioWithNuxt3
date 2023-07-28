<template>
  <header>
    <div class="wrap">
      <NuxtLink to="/" class="logo">
        <img src="/images/logo.png" alt="메인로고" />
      </NuxtLink>
      <nav>
        <ol>
          <li v-for="item in items" :key="item.order" link>
            <NuxtLink :to="item.href">{{ item.title }}</NuxtLink>
          </li>
        </ol>
      </nav>
      <div class="btn-wrap">
        <img src="/images/btn_1.png" alt="메뉴 버튼" />
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header1Dep4a',
  data() {
    return {
      items: [
        {
          title: '회사소개',
          href: '#',
        },
        {
          title: '비전',
          href: '#',
        },
        {
          title: '제품소개',
          href: '#',
        },
        {
          title: '소식',
          href: '#',
        },
        {
          title: '이벤트',
          href: '#',
        },
      ],
    }
  },
}
</script>
<style lang="sass" scoped>
@import '@/assets/reset.sass'

header
  z-index: 1
  position: fixed
  left: 0
  top: 0
  width: 100%
  height: 80px
  border-bottom: 1px solid $bk-opa-3
  .wrap
    width: 96%
    margin-inline: auto
    height: 100%
    display: flex
    justify-content: space-between
    align-items: center
    .logo
      img
        height: 60px
    nav
      width: 70%
      *
        line-height: 80px
      ol
        display: none
        justify-content: space-between
        width: 100%
        li
          a
            display: block
            width: 100%
            height: 100%
            padding: 0 12px
            font-size: 20px
            transition: 0.4s
    .btn-wrap
      width: 80px
      height: 80px
      margin-right: 0
      background-color: $point1
      img
        width: 40px
        margin: 20px
        filter: invert(1)

//--- only for builder
header
  @include posabc
  z-index: 0 !important

@media screen and (min-width:1280px)
  header
    .wrap
      nav
        ol
          display: flex
</style>
