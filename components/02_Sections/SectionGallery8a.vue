<template>
  <section>
    <div class="card-wrap">
      <NuxtLink
        v-for="(a,i) in cardDatas"
        :key=i
        :to="a.href" 
        class="card inquiry-cards"
        :class="[{desc :a.gbn === 'basic' },{desc :a.gbn === 'new' },{desc :a.gbn === 'basic_app' },]"
      >
        <img :src="a.imgSrc" alt="#"/>
        <h2>{{a.title1}}<span class="on1024">{{ a.dash }}</span>{{ a.titleadded }}</h2>
        <p 
        :class="[{descP :a.gbn === 'basic' },{descPnew :a.gbn === 'new' },{descPapp :a.gbn === 'basic_app' },]"
        >{{a.desc}}</p>
        <span class="linkStyle">LEARN MORE</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionGallery8',
  props:{
    cardDatas: {
      type: Array,
      default: () => [],
    },
    gbn: {
      type: String,
      default: () => "",
    },
  },
  data: () => ({
    width: 1000,
    height: 0,
  }),
  mounted() {
    this.width = window.innerWidth;
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods:{
    handleResize(event) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      // console.log('handleResize 에서 width? ',this.width );
    },
  },
}
</script>
<style scoped lang="sass">
@import '@/assets/reset.sass'

// 모바일
.on1024
  display: none
.card-wrap
  display: flex
  flex-direction: column
  align-items: center
  padding: 10px 20px
  .card
    background: white
    border: none
    padding: 10px
    margin-bottom: 10px
    width: 100%
    display: flex
    flex-direction: column
    align-items: center
    &:last-child
      margin-bottom: 0
    img
      width: 100%
    p
      text-align: center
      font-size: 14px
      line-height: 1.2em
      margin-bottom: 30px
      margin-top: 30px
    h2
      text-align: center
      font-size: 24px
      line-height: 1
      margin-top: 10px
    .linkStyle
      font-size: 14px
  .inquiry-cards
    box-shadow: 0px 0px 6px  $gray8
    border-radius: 5px
    &:nth-of-type(n+2)
      margin-left: 0px
      margin-top: 10px

@media screen and (min-width:768px)
  .card-wrap
    display: flex
    flex-direction: column
    align-items: center
    padding: 20px
    .card
      border: none
      padding: 10px
      width: 100%
      margin-bottom: 20px
      display: flex
      flex-direction: column
      align-items: center
      img
        width: 100%
      p
        text-align: center
        font-size: 28px
        margin-top: 32px
        margin-bottom: 32px
      h2
        text-align: center
        font-size: 45px
      .linkStyle
        font-size: 20px
    .inquiry-cards
      box-shadow: 0px 0px 6px  $gray8
      border-radius: 5px
      &:nth-of-type(n+2)
        margin-left: 0px
        margin-top: 10px
// 두 줄로 표현되는거
// @media screen and (min-width:769px)
//   .card-wrap
//     display: flex
//     flex-wrap: wrap
//     justify-content: center
//     flex-direction: row
//     align-items: stretch
//     padding: 10px
//     .card
//       border: none
//       padding: 10px
//       width: 33.3%
//       display: flex
//       flex-direction: column
//       align-items: center
//     .descNew
//       img
//         width: 80%
//       p
//         text-align: center
//         font-size: 17px
//         height: 105px
//       h2
//         font-size: 30px
//         padding-top: 10px
//         padding-bottom: 10px
//       a
//         font-size: 17px !important
//     .descapp 
//       img
//         width: 14vw
//     .desc
//       img
//         width: 14vw
//       p
//         text-align: center
//         font-size: 17px
//       h2
//         font-size: 25px
//         padding-top: 10px
//     .inquiry-cards
//       box-shadow: 0px 0px 6px  $gray8
//       border-radius: 5px

// @media screen and (min-width:1000px)
@media screen and (min-width:1000px)
  .card-wrap
    display: flex
    // flex-wrap: wrap
    justify-content: center
    flex-direction: row
    align-items: stretch
    flex-wrap: nowrap
    .card
      border: none
      padding: 0
      margin-bottom: 0
      width: 33.3%
      display: flex
      flex-direction: column
      align-items: center
      p
        text-align: center
      h2
        text-align: center
    .desc
      img
        width: 19vw
      p
        font-size: 18px
        line-height: 1.2em
        height: 10em
        padding-inline: 10px
      .descPnew
        height: 5em
      h2
        display: flex
        flex-wrap: wrap
        align-items: center
        justify-content: center
        font-size: 34px
        height: 80px
        padding-top: 10px
        line-height: 1
        letter-spacing: -0.025em
      .linkStyle
        margin-bottom: 15px
        font-size: 15px
    .inquiry-cards
      box-shadow: 0px 0px 6px  $gray8
      border-radius: 5px
      &:nth-of-type(n+2)
        margin-left: 10px
        margin-top: 0px
      &:hover
        span
          color: $point1
@media screen and (min-width:1280px)
  .card-wrap
    display: flex
    // flex-wrap: wrap
    justify-content: center
    flex-direction: row
    align-items: stretch
    flex-wrap: nowrap
    .card
      border: none
      padding: 0
      width: 33.3%
      display: flex
      flex-direction: column
      align-items: center
      p
        text-align: center
      h2
        text-align: center
    .desc
      img
        width: 19vw
      p
        font-size: 20px
        line-height: 1.2em
        height: 9em
        padding-inline: 10px
      .descPnew
        height: 5em
      h2
        display: flex
        align-items: center
        font-size: 34px
        height: 80px
        padding-top: 10px
        line-height: 1
        letter-spacing: -0.025em
      .linkStyle
        margin-bottom: 15px
        font-size: 15px
    .inquiry-cards
      box-shadow: 0px 0px 6px  $gray8
      border-radius: 5px
      &:nth-of-type(n+2)
        margin-left: 10px
        margin-top: 0px
      &:hover
        span
          color: $point1
@media screen and (min-width:2200px)
  .card-wrap
    display: flex
    // flex-wrap: wrap
    justify-content: center
    flex-direction: row
    align-items: stretch
    flex-wrap: nowrap
    .card
      border: none
      padding: 0
      width: 33.3%
      display: flex
      flex-direction: column
      align-items: center
      p
        text-align: center
      h2
        text-align: center
    .desc
      img
        width: 15vw
      p
        font-size: 20px
        line-height: 1.2em
        height: 9em
        padding-inline: 10px
      .descPnew
        height: 5em
      h2
        display: flex
        align-items: center
        font-size: 34px
        height: 80px
        padding-top: 10px
        line-height: 1
        letter-spacing: -0.025em
      .linkStyle
        margin-bottom: 15px
        font-size: 15px
    .inquiry-cards
      box-shadow: 0px 0px 6px  $gray8
      border-radius: 5px
      &:nth-of-type(n+2)
        margin-left: 30px
        margin-top: 0px
      &:hover
        span
          color: $point1
@media screen and (min-width:1024px)
  .on1024
    display: block
@media screen and (min-width:1500px)
  .on1024
    display: none
</style>
