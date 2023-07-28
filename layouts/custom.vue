<template>
  <div>
    <Header2Dep1a :items="items"></Header2Dep1a>
    <slot></slot>
    <Footer1a></Footer1a>
  </div>
</template>

<script>
import { defaultState } from '~/store/index';
import Header2Dep1a from '~/components/01_Commons/Header/Header2Dep1a.vue';
import Footer1a from '~/components/01_Commons/Footer/Footer1a.vue';

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'custom',
  components: { Header2Dep1a, Footer1a },
  data() {
    return {
      items: [
        {
          title: 'COMMON',
          href: '/flutter-builder/builder-common',
          dep2: [
            {
              title: 'HEADER',
              href: '/flutter-builder/builder-common-header',
            },
            {
              title: 'FOOTER',
              href: '/flutter-builder/builder-common-footer',
            },
            {
              title: 'LOADING',
              href: '/flutter-builder/builder-common-loading',
            },
          ],
        },
        {
          title: 'SECTION',
          href: '/flutter-builder/builder-section',
          dep2: [
            {
              title: 'MENU',
              href: '/flutter-builder/builder-section-menu',
            },
          ]
        },
        {
          title: 'RESOURCE-1',
          href: '/flutter-builder/builder-resource-1',
          dep2: [
            {
              title: 'BUTTONS',
              href: '/flutter-builder/builder-resource-button',
            },
            {
              title: 'EFFECTS',
              href: '/flutter-builder/builder-resource-effect',
            },
            {
              title: 'LISTS',
              href: '/flutter-builder/builder-resource-list',
            },
          ]
        },
        {
          title: 'RESOURCE-2',
          href: '/flutter-builder/builder-resource-2',
          dep2: [
            {
              title: 'MODALS',
              href: '/flutter-builder/builder-resource-modal',
            },
            {
              title: 'TEXTBOXES',
              href: '/flutter-builder/builder-resource-textbox',
            },
            {
              title: 'VISUALBOXES',
              href: '/flutter-builder/builder-resource-visualbox',
            },
          ]
        },
      ]
    }
  },
  setup() {
    return {
      state: defaultState(),
    }
  },
  watch: {
    $route(to, from) {
      console.log(to)
      console.log(from)
    },
  },
}
</script>
<style lang="sass" scoped>
@import '@/assets/reset.sass'
</style>