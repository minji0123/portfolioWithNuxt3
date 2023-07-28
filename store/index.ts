import { defineStore } from "pinia";

// 기본값
export const defaultState = defineStore('defaultState', {
  state: () => ({
    companyName: '상호명',
    companyNum: '12-234-45678',
    ceo: '대표자명',
    phone: '대표번호',
    fax: '팩스번호',
    mail: '메일주소',
    address: '상세주소',
    website: '웹사이트주소',
    copyright1: 'COPYRIGHT© *COMPANY All rights reserved.',
    copyright2: 'Designed by TOOBPLUS.',
  }),
});

// -----------------------------------
// 이하 참고
// -----------------------------------

// 1. pinia 예시- Composition
export const useCounterComposition = defineStore('counter', () => {

  // 변수
  const num = ref(1)

  // [Getter] 원하는 값을 출력 해주는 함수
  const getDoubleNum = computed(() => num.value * 2)
  // [Getter] 원하는 값을 출력 해주는 함수
  const getNum = computed(() => num.value)

  // [Setter] onClick 같은 이벤트 리스너, mounted() 등에 넣는 함수
  function setIncrement() {
    num.value++
  }

  // 사용할 변수와 함수를 하단에 return 시켜줘야 함
  return { num, setIncrement,getNum, getDoubleNum }
})

// 1. pinia 예시-Optional
export const useCounterOptional = defineStore('counter2', {
  
  // 변수
  state:() => ({
    num:1,
  }),

  // [Getter] 원하는 값을 출력 해주는 함수
  getters:{
    // 직접 변경을 피하기 위한 피니아의 바램
    // 변수를 갖고오지 않고, getter 로 갖고와주세요
    getNum(state){
      return state.num;
    },
    getDoubleNum(state){
      return state.num * 2;
    }
  },

  // [Setter] onClick 같은 이벤트 리스너, mounted() 등에 넣는 함수
  actions:{
    setIncrement(){
      this.num++;
    }
  },

})



// 2. pinia 예시-localStorage
export const useLocalStorage = defineStore('webstorage', {

  state:() => ({
    key: 'hi'as String,
    href: '' as String,
  }),

  // [Getter] 원하는 값을 출력 해주는 함수
  getters:{
    getHref(state){
      return state.href;
    },
  },
    
  // [Setter] onClick 같은 이벤트 리스너, mounted() 등에 넣는 함수
  actions:{
    setHref(){
      localStorage.setItem('href', window.location.href);
      this.href = localStorage.getItem('href') ?? '';
    },
    removeHref(){
      localStorage.removeItem('href')
      this.href = localStorage.getItem('href') ?? '';
    },
    
  },

})

// 3. pinia 예시-parameter
// https://stackoverflow.com/questions/71583063/how-to-pass-an-argument-to-pinia-store
export const useParameter = defineStore('parameter', {
  state: () => ({
    num: 1 as undefined | Number,
  }),

  getters: {
    getNumber(state){
      return state.num
    }
  },

  actions: {
    setNumber(param1: Number ) {
      this.num = param1 
    },
  },

});

// 4. pinia -width 출력
export const useCheckScroll = defineStore('scrollY', {

  state:() => ({
    scrollY: 0 as Number,
  }),

  // [Getter] 원하는 값을 출력 해주는 함수
  getters:{
    getScrollYVal(state){
      return state.scrollY
    },
  },
    
  // [Setter] onClick 같은 이벤트 리스너, mounted() 등에 넣는 함수
  actions:{
    // 현재 scrollY 값 set
    setScrollYVal(param1: Number){
      this.scrollY = param1
    },
  },

})