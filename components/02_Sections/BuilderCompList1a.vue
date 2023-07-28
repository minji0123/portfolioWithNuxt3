
<template>
  <section class="safe-size">
    <div>
      <ul class="sc-list" :class="{ resources : isResources }">
        <li v-for="(compInfo, idx) in compList" :key="idx" class="sc-item-wrap">
          <h3 class="sc-item-title">
            {{ compName }}{{ compInfo.item }}
          </h3>
          <p>
            {{ compInfo.desc }}
          </p>
          <div class="sc-item">
            <component v-bind:is="compInfo.item"></component>
          </div>
        </li>
      </ul>
    </div>
    <aside v-if="renderer" id="components-list" class="blind">
      <section ref="commons">
        <div ref="headers">
          <Header1Dep1a />
          <Header1Dep2a />
          <Header1Dep3a />
          <Header1Dep4a />
        </div>
        <div ref="footers">
          <Footer1a />
          <Footer2a />
          <Footer3a />
          <Footer4a />
        </div>
        <div ref="loadings">
          <Loading1a/>
        </div>
      </section>
      <section ref="sections">
        <div ref="menus"></div>
      </section>
      <section ref="resources">
        <div ref="buttons">
          <BTBreadCrumb1a/>
          <BTBreadCrumb2a/>
          <BTFloating1a/>
          <BTFloating2a/>
          <BTOnlyIcon1a/>
          <BTOnlyImage1a/>
          <BTOnlyText1a/>
          <BTRating1a/>
          <BTTextnIcon1a/>
          <BTTextnImage1a/>
        </div>
        <div ref="effects">
          <EFAirFloat1a/>
          <EFParallax1a/>
          <EFScrollFromBottom1a/>
          <EFScrollFromLeft1a/>
          <EFScrollFromRight1a/>
          <EFScrollFromTop1a/>
        </div>
        <div ref="lists">
          <LIAccordion1a/>
          <LIAccordion2a/>
          <LITable1a/>
          <LITabMenu1a/>
          <LITabMenu2a/>
          <LITabMenu3a/>
          <LITimelineHorizon1a/>
          <LITimelineVertical1a/>
        </div>
        <div ref="modals">
          <MDImage1a/>
          <MDTable1a/>
          <MDText1a/>
        </div>
        <div ref="textboxes">
          <TBHeadnBody1a/>
          <TBHeadnDesc1a/>
          <TBHeadnIcon1a/>
          <TBNameCard1a/>
          <TBSubBanner1a/>
          <TBTitleCenter1a/>
        </div>
        <div ref="visualboxes">
          <VBAnimIcon1a/>
          <VBImageFrame1a/>
          <VBMapGoogle1a/>
          <VBMapKakao1a/>
          <VBMapNaver1a/>
          <VBSwiperDefault1a/>
          <VBVideoFrame1a/>
        </div>
      </section>
    </aside>
  </section>
</template>
<script>
import { defaultState } from '~/store/index';
// HEADER
import Header1Dep1a from '~/components/01_Commons/Header/Header1Dep1a.vue';
import Header1Dep2a from '~/components/01_Commons/Header/Header1Dep2a.vue';
import Header1Dep3a from '~/components/01_Commons/Header/Header1Dep3a.vue';
import Header1Dep4a from '~/components/01_Commons/Header/Header1Dep4a.vue';
// FOOTER
import Footer1a from '../01_Commons/Footer/Footer1a.vue';
import Footer2a from '../01_Commons/Footer/Footer2a.vue';
import Footer3a from '../01_Commons/Footer/Footer3a.vue';
import Footer4a from '../01_Commons/Footer/Footer4a.vue';
// LOADING
import Loading1a from '../01_Commons/Loading/Loading1a.vue';
// BUTTONS
import BTBreadCrumb1a from '../03_Resources/Button/BTBreadCrumb1a.vue';
import BTBreadCrumb2a from '../03_Resources/Button/BTBreadCrumb2a.vue';
import BTFloating1a from '../03_Resources/Button/BTFloating1a.vue';
import BTFloating2a from '../03_Resources/Button/BTFloating2a.vue';
import BTOnlyIcon1a from '../03_Resources/Button/BTOnlyIcon1a.vue';
import BTOnlyImage1a from '../03_Resources/Button/BTOnlyImage1a.vue';
import BTOnlyText1a from '../03_Resources/Button/BTOnlyText1a.vue';
import BTRating1a from '../03_Resources/Button/BTRating1a.vue';
import BTTextnIcon1a from '../03_Resources/Button/BTTextnIcon1a.vue';
import BTTextnImage1a from '../03_Resources/Button/BTTextnImage1a.vue';
// EFFECTS
import EFAirFloat1a from '../03_Resources/Effect/EFAirFloat1a.vue';
import EFParallax1a from '../03_Resources/Effect/EFParallax1a.vue';
import EFScrollFromBottom1a from '../03_Resources/Effect/EFScrollFromBottom1a.vue';
import EFScrollFromLeft1a from '../03_Resources/Effect/EFScrollFromLeft1a.vue';
import EFScrollFromRight1a from '../03_Resources/Effect/EFScrollFromRight1a.vue';
import EFScrollFromTop1a from '../03_Resources/Effect/EFScrollFromTop1a.vue';
// LISTS
import LIAccordion1a from '../03_Resources/List/LIAccordion1a.vue';
import LIAccordion2a from '../03_Resources/List/LIAccordion2a.vue';
import LITable1a from '../03_Resources/List/LITable1a.vue';
import LITabMenu1a from '../03_Resources/List/LITabMenu1a.vue';
import LITabMenu2a from '../03_Resources/List/LITabMenu2a.vue';
import LITabMenu3a from '../03_Resources/List/LITabMenu3a.vue';
import LITimelineHorizon1a from '../03_Resources/List/LITimelineHorizon1a.vue';
import LITimelineVertical1a from '../03_Resources/List/LITimelineVertical1a.vue';
// MODALS
import MDImage1a from '../03_Resources/Modal/MDImage1a.vue';
import MDTable1a from '../03_Resources/Modal/MDTable1a.vue';
import MDText1a from '../03_Resources/Modal/MDText1a.vue';
// TEXTBOXES
import TBHeadnBody1a from '../03_Resources/Textbox/TBHeadnBody1a.vue';
import TBHeadnDesc1a from '../03_Resources/Textbox/TBHeadnDesc1a.vue';
import TBHeadnIcon1a from '../03_Resources/Textbox/TBHeadnIcon1a.vue';
import TBNameCard1a from '../03_Resources/Textbox/TBNameCard1a.vue';
import TBSubBanner1a from '../03_Resources/Textbox/TBSubBanner1a.vue';
import TBTitleCenter1a from '../03_Resources/Textbox/TBTitleCenter1a.vue';
// VISUALBOXES
import VBAnimIcon1a from '../03_Resources/Visualbox/VBAnimIcon1a.vue';
import VBImageFrame1a from '../03_Resources/Visualbox/VBImageFrame1a.vue';
import VBMapGoogle1a from '../03_Resources/Visualbox/VBMapGoogle1a.vue';
import VBMapKakao1a from '../03_Resources/Visualbox/VBMapKakao1a.vue';
import VBMapNaver1a from '../03_Resources/Visualbox/VBMapNaver1a.vue';
import VBSwiperDefault1a from '../03_Resources/Visualbox/VBSwiperDefault1a.vue';
import VBVideoFrame1a from '../03_Resources/Visualbox/VBVideoFrame1a.vue';

export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'BuilderCompList1a',
  components: {
    // HEADER
    Header1Dep1a, Header1Dep2a, Header1Dep3a, Header1Dep4a,
    //FOOTER
    Footer1a, Footer2a, Footer3a, Footer4a,
    // LOADING
    Loading1a,
    // BUTTONS
    BTBreadCrumb1a, BTBreadCrumb2a, BTFloating1a, BTFloating2a, BTOnlyIcon1a,BTOnlyImage1a, BTOnlyText1a, BTRating1a, BTTextnIcon1a, BTTextnImage1a,
    // EFFECTS
    EFAirFloat1a, EFParallax1a, EFScrollFromBottom1a, EFScrollFromLeft1a, EFScrollFromRight1a, EFScrollFromTop1a,
    // LISTS
    LIAccordion1a, LIAccordion2a, LITable1a, LITabMenu1a, LITabMenu2a, LITabMenu3a, LITimelineHorizon1a, LITimelineVertical1a,
    // MODALS
    MDImage1a, MDTable1a, MDText1a,
    // TEXTBOXES
    TBHeadnBody1a, TBHeadnDesc1a, TBHeadnIcon1a, TBNameCard1a, TBSubBanner1a, TBTitleCenter1a,
    // VISUALBOXES
    VBAnimIcon1a, VBImageFrame1a, VBMapGoogle1a, VBMapKakao1a, VBMapNaver1a, VBSwiperDefault1a, VBVideoFrame1a,
},
  props: {
    compList: {
      type: Array,
      default: () => [],
    }
  },
  data: () => ({
    renderer: false,
    isResources: false,
    compName: '컴포넌트명 : ',
  }),
  setup() {
    return {
      state: defaultState(),
    }
  },
  mounted(){
    const route = this.$route.path;
    if(route.includes('resource')) {
      this.isResources = true
    }
  },
  methods: {},
}
</script>
<style lang="sass" scoped>
@import '@/assets/reset.sass'

.sc-list
  &.resources
    .sc-item-wrap
      width: 19vw
      .sc-item
        @include square(19vw, transparent, block)
        @include alignc
  .sc-item-wrap
    .sc-item-title
      font-size: $size2
      margin-bottom: 4px
    .sc-item
      overflow: hidden
      position: relative
      min-height: 120px
      margin: 8px auto 48px
      border-radius: 16px
      box-shadow: 0px 0px 8px $bk-opa-5
    p
      text-indent: 8px
// @media screen and (min-width:768px)
// @media screen and (min-width:1280px)
</style>
  