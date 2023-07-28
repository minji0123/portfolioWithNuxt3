export default defineNuxtConfig({
  devtools: {
    enabled: true,
    pages: true,
  },
  app: {
    head: { // 헤드태그 내부데이터 설정
      title: 'minmi',
      htmlAttrs: { lang: 'ko' },
      meta: [ // 메타태그 설정
        { charset: 'UTF-8' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        // { hid: 'description', name: 'description', content: '*검색 결과에서 표시될 홈페이지 설명을 적어주세요.' },
        // { hid: 'keywords', name: 'keywords', content: '*검색엔진에 의해 색인될 단어들을 적어주세요.' },
        // { hid: 'og:type', property: 'og:type', content: 'website' },
        // { hid: 'og:url', property: 'og:url', content: 'http://*도메인주소.com/' },
        // { hid: 'og:image', property: 'og:image', content: 'http://*도메인주소.com/images/ogicon.png' },
        // { hid: 'og:title', property: 'og:title', content: '*오픈그래프에서 표시될 홈페이지 제목을 적어주세요' },
        // { hid: 'og:description', property: 'og:description', content: '*오픈그래프에서 표시될 홈페이지 설명을 적어주세요.' },
        // { name: 'naver-site-verification', content: '*발급받은 키 값을 입력해주세요.' },
        // { name: 'google-site-verification', content: '*발급받은 키 값을 입력해주세요.' },
      ],
      link: [ // 파비콘 설정
        { hid: 'shortcut-icon', rel: 'icon', type: 'image/x-icon', href: '/icon.png', },
      ],
      // script: [
      //   <script src="https://myawesome-lib.js"></script>
      //   { src: 'https://awesome-lib.js' }
      // ],
      // link: [
      //   <link rel="stylesheet" href="https://myawesome-lib.css">
      //   { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      // ],
      // noscript: [
      //   <noscript>JavaScript is required</noscript>
      //   { children: 'JavaScript is required' }
      // ]
    }
  },
  css: [ // 글로벌 CSS 설정
    '@/assets/reset.sass',
    'vuetify/lib/styles/main.sass',
  ],
  build: { // vuetify 설정
    transpile: [ 'vuetify' ],
  },
  vite: { // vuetify 설정
    define: { 'process.env.DEBUG': false }
  },
  plugins: [], // 플러그인 설정
  modules: [ '@pinia/nuxt' ], // 모듈 설정
  components: true, // 자동 컴포넌트 가져오기 설정
  // 참고 https://nuxt.com/docs/api/configuration/nuxt-config
});
