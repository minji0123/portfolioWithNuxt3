<template>
  <header class="header">
    <div class="nbs-header1">
      <div>
        <img src="/images/logo.png" alt="메인로고" />
      </div>
      <div>
        <img src="/images/logo.png" alt="메인로고" />
      </div>
    </div>
    <div class="nbs-header2">
      <NuxtLink to="/">
        <div>
          <img src="/images/logo.png" alt="메인로고" />
        </div>
      </NuxtLink>
      <div>
        <div class="div-01">
          <NuxtLink to="/" class="href">ABOUT</NuxtLink>
          <NuxtLink to="/" class="href">SUPER CAPACITOR</NuxtLink>
          <NuxtLink to="/" class="href">PRODUCTS</NuxtLink>
          <NuxtLink to="/" class="href">APPLICATIONS</NuxtLink>
          <NuxtLink to="/" class="href">BOARDS</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header1Dep2a',
  data() {
    return {
      pages: [
        {
          title: 'Page',
          href: '/',
        },
        {
          title: 'Header',
          href: '/header',
        },
        {
          title: 'Footer',
          href: '/footer',
        },
        {
          title: 'Banner',
          href: '/section-banner',
        },
        {
          title: 'Description',
          href: '/section-desc',
        },
        {
          title: 'Gallery',
          href: '/section-gallery',
        },
        {
          title: 'Info',
          href: '/section-info',
        },
        {
          title: 'List',
          href: '/section-list',
        },
        {
          title: 'Table',
          href: '/section-table',
        },
      ],
    }
  },
}
</script>
<style lang="sass" scoped>
@import '@/assets/reset.sass'

.v-application .header a
  display: block
  height: 100%
  color: black !important

.header
  width: 100%
  background-color: white
  height: 60px
  margin: 0 auto

img
  width: auto
  height: 100%

.nbs-header1
  display: flex
  justify-content: space-between
  align-items: center
  height: 60px
  width: 95%
  margin: 0px auto

.nbs-header2
  display: none

//--- only for builder
.header
  @include posabc

// @media screen and (min-width:768px)
@media screen and (min-width:1280px)
  .nbs-header1
    display: none
    
  .nbs-header2
    display: flex
    justify-content: space-between
    align-items: center
    height: 60px
    margin: 0 auto
    width: 1200px
    max-width: 100%
    *
      max-height: 60px
  
  .href
    position: relative
    margin-left: 4vw
    font-weight: 700
  
  .href:hover::after
    content: ""
    position: absolute
    top: 20px
    right: 0
    width: 100%
    height: 2px
    background-color: #444

//--- only for builder
header
  @include posabc
  z-index: 0 !important
</style>