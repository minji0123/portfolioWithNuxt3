<template>
  <div>
    <Header2Dep1a :items="items"></Header2Dep1a>
    <slot></slot>
    <Footer1a  v-if="isChecked"></Footer1a>
  </div>
</template>

<script>
import { defaultState } from '~/store/index';
import Header2Dep1a from '~/components/01_Commons/Header/Header2Dep1a.vue';
import Footer1a from '~/components/01_Commons/Footer/Footer1a.vue';

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'default',
  components: { Header2Dep1a, Footer1a },
  data() {
    return {
      items: [
        {
          title: 'ABOUT',
          href: '/',
          dep2: [
            {
              title: '서브메뉴',
              href: '/',
            },
          ],
        },
        {
          title: 'CAREER',
          href: '/',
          dep2: [
            {
              title: '서브메뉴',
              href: '/',
            },
          ]
        },
        {
          title: 'PROJECT',
          href: '/',
          dep2: [
            {
              title: '서브메뉴',
              href: '/',
            },
          ]
        },
        {
          title: 'ARTICLE',
          href: '/',
          dep2: [
            {
              title: '서브메뉴',
              href: '/',
            },
          ]
        },
        // {
        //   title: '플러터 빌더',
        //   href: '/flutter-builder/builder-index',
        // },
      ]
    }
  },
  // MAIN - FOOTER NONE
  created(){
    if(this.$route.path === '/'){
      this.isChecked = false;
    }else{
      this.isChecked = true;
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