<template>
  <header>
    <nav>
      <v-list class="header-nav-list">
        <v-list-item v-for="item in items" :key="item.order" link>
          <NuxtLink :to="item.href" class="header-nav">
            {{ item.title }}
          </NuxtLink>
        </v-list-item>
      </v-list>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header1Dep3a',
  data() {
    return {
      items: [
        {
          title: 'COMPANY',
          href: '#',
        },
        {
          title: 'ABOUT',
          href: '#',
        },
        {
          title: 'INFORMATION',
          href: '#',
        },
        {
          title: 'CONTACT',
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
  display: flex
  justify-content: center
  background-color: rgba(255,255,255,0.8)
  border-bottom: 1px solid $point1
  .v-list-item__content > *
    flex: 0 1 auto
  nav
    width: 100%
    height: 100%
  .header-nav-list
    display: flex
    justify-content: space-around
    width: 100%
    height: 100%
    padding: 0
    background-color: inherit
    .v-list-item
      justify-content: center
      flex: 1 0 auto
      padding: 0
    a.header-nav
      display: flex
      justify-content: center
      width: 100%
      height: 100%
      >div
        width: 100%
        height: 100%
        justify-content: center
        align-items: center
      span
        display: inline-block
        padding: 4px
        transition: 0.4s
        color: $point1
    a.header-nav.nuxt-link-exact-active
      background-color: $point1
      span
        font-weight: 700
        color: #fff


//--- only for builder
header
  @include posabc
  z-index: 0 !important
</style>
