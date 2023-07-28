<template>
  <section class="container">

    <section class="sub-page-layout section-wrapper" >
      <!-- <CustomTemplate class="safe-size"></CustomTemplate> -->

      <!-- content -->
      <div ref="sectionContainer" class="section-container">
        <section class="section">
          <p class="card-title new_proc_title">ABOUT</p>
          <SectionGallery8 :card-datas="cardDatas_new" :gbn="gbn1" class="safe-size "></SectionGallery8>
        </section>

        <section class="section">
          <p class="card-title new_proc_title">CAREER</p>
          <SectionGallery8 :card-datas="cardDatas_new" :gbn="gbn1" class="safe-size "></SectionGallery8>
        </section>
        
        <section class="section">
          <p class="card-title">PROJECT</p>
          <SectionGallery8 :card-datas="cardDatas_product" :gbn="gbn2" class="safe-size  section-btn"></SectionGallery8>
        </section>

        <section class="section">
          <p class="card-title">ARTICLE</p>
          <SectionGallery8 :card-datas="cardDatas_product" :gbn="gbn2" class="safe-size  section-btn"></SectionGallery8>
        </section>

        <!-- <section class="section footer_app">
          <Footer1a ref="messages" :items="gnb" ></Footer1a>
        </section> -->

      </div>

      <!-- pagination -->
      <div v-if="width >= 1280" class="pagination-wrapper">
        <div v-for="(n, index) in page" :key="'pagination' + index" class="pagination" :class="{'active': pageIndex === index}"></div>
      </div>

    </section>


  </section>
</template>

<script>
import { defaultState,useCounterComposition,useCounterOptional,useLocalStorage,useCheckScroll } from '~/store/index';
import CustomTemplate from '~/components/CustomTemplate.vue';
import VBSwiperDefault1a from '~/components/03_Resources/Visualbox/VBSwiperDefault1a.vue';
import Footer1a from '~/components/01_Commons/Footer/Footer1a.vue';
import SectionGallery8 from '~/components/02_Sections/SectionGallery8a.vue'
export default {
  // name - components - props - data - *lifecycles - methods - watch //
  name: 'indexPage',
  components: {
    CustomTemplate,
    VBSwiperDefault1a,
    Footer1a,
    SectionGallery8,
},
  props: {
    prop1: {
      type: String,
      default: 'Head Here',
    },
    prop2: {
      type: Array,
      default: () => [],
    },
    prop3: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    // for scroll
    width: 1280,
    height: 0,
    page: [],         // page dom
    pageIndex: 0,     // page num
    nowMoving: false, // wheel state
    cardDatas_new: [
      {
        gbn:"new",
        title1: 'TMP1235',
        title: 'TMP1235',
        desc: '500mA Low-IQ LDO with 5V (TMP1235), 3.3V(TMP1236) fixed and adjustable (TMP1237) output voltage options',
        href: "sub1/Sub2b#TMP1235",
        imgSrc: '~/static/images/new/Crop_Homepage-Products_TMP1235,36,37 (2).png'
      },
      {
        gbn:"new",
        title1: 'TMP1751',
        title: 'TMP1751',
        desc: 'Single channel linear type LED Driver IC300mA of the maximum constant current driving with PWM dimming control',
        href: "sub1/Sub2c#TMP1751",
        imgSrc: '~/static/images/new/Crop_Homepage-Products_TMP1751 (2).png'
      },
      {
        gbn:"new",
        title1: 'TMP7326',
        title: 'TMP7326',
        desc: 'H-Bridge DC motor driver IC for Power Folding, Built-in Auto retry function (4 times), Programmable stall current level with an external resistor',
        href: "sub1/Sub2d#TMP7326",
        imgSrc: '~/static/images/new/Crop_Homepage-Products_TMP7326 (2).png'
      },
    ],
    // cardDatas_product: [
    //   // gbn: new 신상품 basic 구상품. 구분에 따라 다른 class 부여
    //   {
    //     gbn:"basic",
    //     title: 'SUB-POWER',
    //     title1: 'SUB-POWER',
    //     desc: 'TPSEMI provides both linear type and switching type regulators with input voltages from 3V to 45V for 12V/24V automotive systems',
    //     href: "/sub1/Sub2b",
    //     imgSrc: require('~/static/images/sub2/sub2b (2).png')
    //   },
    //   {
    //     gbn:"basic",
    //     title: 'LED DRIVER',
    //     title1: 'LED DRIVER',
    //     desc: 'TPSEMI LED Drivers are easy to use across a wide range of automotive application requirements',
    //     href: "/sub1/Sub2c",
    //     imgSrc: require('~/static/images/sub2/sub2c (2).png')
    //   },
    //   {
    //     gbn:"basic",
    //     title: 'MOTOR DRIVER',
    //     title1: 'MOTOR DRIVER',
    //     desc: 'TPSEMI provides both specific purpose and general purpose motor drivers for various automotive applications.',
    //     href: "/sub1/Sub2d",
    //     imgSrc: require('~/static/images/sub2/sub2d (2).png')
    //   },
    //   {
    //     gbn:"basic",
    //     title: 'COMMUNI-CATION',
    //     title1: 'COMMUNI',
    //     dash: '-',
    //     titleadded: 'CATION',
    //     desc: 'TPSEMI provides CAN, LIN transceiver ICs for communication within the vehicle.',
    //     href: "/sub1/Sub2e",
    //     imgSrc: require('~/static/images/sub2/sub2e (2).png')
    //   },
    //   {
    //     gbn:"basic",
    //     title: 'MCU/SOC',
    //     title1: 'MCU/SOC',
    //     desc: 'TPSEMI provides MCU and SOC for various automotive application systems.',
    //     href: "/sub1/Sub2f",
    //     imgSrc: require('~/static/images/sub2/sub2f (2).png')
    //   },
    // ],
    // cardDatas_application: [
    //   // gbn: new 신상품 basic 구상품. 구분에 따라 다른 class 부여
    //   {
    //     gbn:"basic_app",
    //     title1: 'EXTERIOR LIGHTING',
    //     title: 'EXTERIOR LIGHTING',
    //     desc: 'TPSEMI provides solutions for ADB(Adaptive Driving Beam) Headlamp system, RCL(Rear Combination Lamp) and Sequential Lighting systems',
    //     href: '/sub1/Sub3a',
    //     imgSrc: require('~/static/images/sub3/maintitle/sub3a.png')
    //   },
    //   {
    //     gbn:"basic_app",
    //     title1: 'INTERIOR LIGHTING',
    //     title: 'INTERIOR LIGHTING',
    //     desc: 'TPSEMI offers Ambient LED Lighting system that makes the atmosphere inside the vehicle more comfortable and luxurious.',
    //     href: '/sub1/Sub3b',
    //     imgSrc: require('~/static/images/sub3/maintitle/sub3b.png')
    //   },
    //   {
    //     gbn:"basic_app",
    //     title: 'HVAC',
    //     title1: 'HVAC',
    //     desc: 'TPSEMI provides 6/8/10/12-channels Half bridge drivers for HVAC systems of various specifications.',
    //     href: '/sub1/Sub3c',
    //     imgSrc: require('~/static/images/sub3/maintitle/sub3c.png')
    //   },
    //   {
    //     gbn:"basic_app",
    //     title: 'BODY CONTROL',
    //     title1: 'BODY CONTROL',
    //     desc: 'TPSEMI provides solutions for controlling the left and right door handles and side mirrors of the vehicle.',
    //     href: '/sub1/Sub3d',
    //     imgSrc: require('~/static/images/sub3/maintitle/sub3d.png')
    //   },
    //   {
    //     gbn:"basic_app",
    //     title: 'SEAT CONTROL',
    //     title1: 'SEAT CONTROL',
    //     desc: 'TPSEMI provides solutions that controls the position and shape of the seat for the comfort of the driver and passengers.',
    //     href: '/sub1/Sub3e',
    //     imgSrc: require('~/static/images/sub3/maintitle/sub3e.png')
    //   },
    // ],
  }),

  mounted(){
        this.page = this.$el.querySelectorAll('.section');
    // this.catchAction()
    this.width = window.innerWidth;
    window.addEventListener('resize', this.handleResize);
    // console.log('mounted 에사 width:',this.width );
    setTimeout(()=>{

      if(this.width < 1280 ){
          this.$el.querySelector('.section-container').style.transform
          = `unset`;
        window.addEventListener('wheel', null);
          
        }else if (this.width >= 1280 ){

        window.addEventListener('wheel', this.wheelEvent);

        }else{
          console.log('error');
        }

    },200)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize(event) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      // console.log('handleResize 에서 width? ',this.width );

      if(this.width < 1280){
        // console.log('모바일입니당');

        this.$el.querySelector('.section-container').style.transform
        = `unset`;
      window.addEventListener('wheel', null);
        
      }else{
        // console.log('PC입니당');
      console.log(this.width,'?');
      window.addEventListener('wheel', this.wheelEvent);

      }

    },
    catchAction(){
    // eventListener 모을 함수
      window.addEventListener('wheel', this.wheelEvent);
      // console.log('pc 에서만 돌게했자나');
    },
    wheelEvent(e){
      if(this.width < 1280){
        // console.log('wheelEvent: 모바일에서는 작동을 함?',this.width);
        return false
      }else{

        // 마우스 휠 이벤트
        if(this.nowMoving) return
        this.nowMoving = true;
        
        // e.deltaY > 0 ---> 스크롤 내릴 때 true 올릴 때 false
        const scrollDown = e.deltaY > 0;
        
        this.getPageIndex(scrollDown);
      }
    },
    getPageIndex(down){
        if(down){
          // 내려간당
          this.pageIndex === (this.page.length-1) 
          ? this.pageIndex = (this.page.length-1) 
          : ++this.pageIndex
        } else{
          // 올라간당
          this.pageIndex <= 0 
          ? this.pageIndex = 0 
          : --this.pageIndex
        }
        // this.moveEvent(this.pageIndex);

        this.moveEvent(this.pageIndex);
    },
    moveEvent(number){

      this.$el.querySelector('.section-container').style.transform
      = `translateY(-${number}00%)`;
      // WHEN FOOTER
      // if(number === 4){
        
      //   this.$el.querySelector('.section-container').style.transform
      //   = `translateY(-325%)`;
      // }

          // .section-wrapper의 transition 시간 정도
        setTimeout(() => {
          this.nowMoving = false;
        }, 600);
    // }
      }


  },
}
</script>


<style lang="sass" scoped>
@import '@/assets/reset.sass'

p
  text-align: center
.pagination-wrapper
  // display: none
  position: fixed
  left: 30px
  top: 50%
  transform: translateY(-50%)
  .pagination
    width: 14px
    height: 14px
    border: 1px solid gray
    border-radius: 50%
    &+.pagination
      margin-top: 20px
    &.active
      background-color: gray

// 모바일일때지롱
.container
  width: 100%
  .section-wrapper
    width: 100%
    height: 100%
    .section-container
      width: 100%
      height: 100%
      transition: all 0.5s //페이지가 넘어가는 속도
      .section
        width: 100%
        height: 100%
        display: flex
        flex-direction: column
        justify-content: center
        position: relative
        .card-title
          padding-top: 12px
          // font-size: 2em
          font-size: 36px
          font-weight: 900
        // .new_proc_title
        //   color: white
        .section-btn
          width: 100%
      .new_proc
        background-image: url(http://www.tp-semi.com/en/images/new_proc_bg2.jpg)
        // background-size: cover
        background-size: cover
        padding-bottom: 140px
      // .basic_proc
      // .basic_app
      .footer_app
        display: flex
        justify-content: flex-end

@media screen and (min-width:768px)
  // 태블릿
  .container
    width: 100%
    height: unset
    .section-wrapper
      width: 100%
      height: 100%
      .section-container
        width: 100%
        height: 100%
        transition: all 0.5s //페이지가 넘어가는 속도
        .section
          width: 100%
          // height: 100%
          display: flex
          flex-direction: column
          justify-content: center
          position: relative
          .card-title
            padding-top: 12px
            font-size: 70px
            font-weight: 900
          .section-btn
            width: 100%
        .footer_app
          display: flex
          justify-content: flex-end
          .section-btn
            width: 100%
        .new_proc
          background-image: url(http://www.tp-semi.com/en/images/new_proc_bg2.jpg)
          // background-size: cover
          background-size: cover
          padding-bottom: 140px
          padding-top: 100px
        .basic_proc
          padding-top: 100px
          padding-bottom: 100px
        .basic_app
          padding-bottom: 100px
        .footer_app
          display: flex
          justify-content: flex-end

@media screen and (min-width:1000px)
  // 1280 ~ 1000
  .container
    width: 100%
    height: unset
    .section-wrapper
      width: 100%
      height: 100%
      .section-container
        width: 100%
        height: 100%
        transition: all 0.5s //페이지가 넘어가는 속도
        .section
          width: 100%
          // height: 100%
          display: flex
          flex-direction: column
          justify-content: center
          position: relative
          .card-title
            padding-top: 12px
            font-size: 60px
            font-weight: 900
          .section-btn
            width: 100%
        .footer_app
          display: flex
          justify-content: flex-end
          .section-btn
            width: 100%
        .new_proc
          background-image: url(http://www.tp-semi.com/en/images/new_proc_bg2.jpg)
          background-size: cover
          padding-top: 100px
        .basic_proc
          padding-top: 100px
          padding-bottom: 100px
        .basic_app
          padding-bottom: 100px
        .footer_app
          display: flex
          justify-content: flex-end


@media screen and (min-width:1280px)
  p
    text-align: center
  .pagination-wrapper
    position: fixed
    left: 30px
    top: 50%
    transform: translateY(-50%)
    .pagination
      width: 14px
      height: 14px
      border: 1px solid gray
      border-radius: 50%
      &+.pagination
        margin-top: 20px
      &.active
        background-color: gray
          
  .container
    width: 100%
    height: 100vh
    // height: 100%
    overflow: hidden
    .section-wrapper
      width: 100%
      height: 100%
      .section-container
        width: 100%
        height: 100%
        transition: all 0.5s //페이지가 넘어가는 속도
        .section
          width: 100%
          height: 100%
          display: flex
          flex-direction: column
          justify-content: center
          position: relative
          .card-title
            font-size: 70px
            font-weight: 900
            // margin-bottom: 12px
        .new_proc
          background-image: url(http://www.tp-semi.com/en/images/new_proc_bg2.jpg)
          background-size: cover
          padding: 0px
        .basic_proc
          padding: 0px
          padding-top: 75px
        .basic_app
          padding: 0px
          padding-top: 75px
        .footer_app
          height: 50%
          display: flex
          justify-content: flex-end
@media screen and (min-width:1280px)
  p
    text-align: center
  .pagination-wrapper
    position: fixed
    left: 30px
    top: 50%
    transform: translateY(-50%)
    .pagination
      width: 14px
      height: 14px
      border: 1px solid gray
      border-radius: 50%
      &+.pagination
        margin-top: 20px
      &.active
        background-color: gray
          
  .container
    width: 100%
    height: 100vh
    // height: 100%
    overflow: hidden
    .section-wrapper
      width: 100%
      height: 100%
      .section-container
        width: 100%
        height: 100%
        transition: all 0.5s //페이지가 넘어가는 속도
        .section
          width: 100%
          height: 100%
          display: flex
          flex-direction: column
          justify-content: center
          position: relative
          .card-title
            font-size: 70px
            font-weight: 900
            // margin-bottom: 12px
        .new_proc
          background-image: url(http://www.tp-semi.com/en/images/new_proc_bg2.jpg)
          background-size: cover
          padding: 0px
        .basic_proc
          padding: 0px
          padding-top: 75px
        .basic_app
          padding: 0px
          padding-top: 75px
        .footer_app
          height: 50%
          display: flex
          justify-content: flex-end
@media screen and (min-width:2200px)
  p
    text-align: center
  .pagination-wrapper
    position: fixed
    left: 30px
    top: 50%
    transform: translateY(-50%)
    .pagination
      width: 14px
      height: 14px
      border: 1px solid gray
      border-radius: 50%
      &+.pagination
        margin-top: 20px
      &.active
        background-color: gray
          
  .container
    width: 100%
    height: 100vh
    // height: 100%
    overflow: hidden
    .section-wrapper
      width: 100%
      height: 100%
      .section-container
        width: 100%
        height: 100%
        transition: all 0.5s //페이지가 넘어가는 속도
        .section
          width: 100%
          height: 100%
          display: flex
          flex-direction: column
          justify-content: center
          position: relative
          .card-title
            font-size: 90px
            font-weight: 900
            // margin-bottom: 12px
        .new_proc
          background-image: url(http://www.tp-semi.com/en/images/new_proc_bg2.jpg)
          background-size: cover
          padding: 0px
        .basic_proc
          padding: 0px
          padding-top: 75px
        .basic_app
          padding: 0px
          padding-top: 75px
        .footer_app
          height: 50%
          display: flex
          justify-content: flex-end
// @media screen and (min-width:768px)
// @media screen and (min-width:1280px)
</style>