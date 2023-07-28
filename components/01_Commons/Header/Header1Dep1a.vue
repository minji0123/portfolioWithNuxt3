<template>
  <header>
    <v-sheet class="mx-auto d-flex align-center" width="94%" max-width="1600">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="(page, index) in pages"
          :key="index"
          v-slot="{ active, toggle }"
        >
          <v-btn
            nuxt
            :to="page.href"
            :input-value="active"
            active-class="point1 white--text"
            depressed
            rounded
            @click="toggle"
          >
            {{ page.title }}
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </header>
</template>
<script>
export default {
  name: 'Header1Dep1a',
  data() {
    return {
      pages: [
        {
          title: 'Page',
          href: '#',
        },
        {
          title: 'Header',
          href: '#',
        },
        {
          title: 'Footer',
          href: '#',
        },
        {
          title: 'Banner',
          href: '#',
        },
        {
          title: 'Description',
          href: '#',
        },
        {
          title: 'Gallery',
          href: '#',
        },
        {
          title: 'Info',
          href: '#',
        },
        {
          title: 'List',
          href: '#',
        },
        {
          title: 'Table',
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
  z-index: 10
  position: fixed
  left: 0
  top: 0
  width: 100%
  display: flex
  justify-content: center
  background-color: rgba(255,255,255,0.8)
  border-bottom: 1px solid $point1
  .theme--light.v-btn
    color: $point1
  >div.v-sheet
    background-color: transparent
  .v-slide-group__content
    >a
      border-radius: 28px
      margin: 0 8px

//--- only for builder
header
  @include posabc
  z-index: 0 !important
</style>
