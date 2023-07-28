# 플러터 빌더 v-Nuxt3

참고 : [Nuxt 공식 홈페이지](https://nuxt.com/docs/getting-started/introduction)

<hr>

## 빌더 초기 세팅
```bash

1. 기본 설정
  - 브라우저 옵션 '숨김파일 표시' 체크
  - 디렉토리 내 '.git' 폴더 삭제

2. 새 Git 레포지토리 생성
  - __work 폴더 생성 *선택사항
  - __source 폴더 생성 *선택사항

3. .gitignore 수정 필요시
  - Node artifact files 하위 라인에 추가
  - __source 폴더 내 재사용 가능성 있는 파일 취합

4. .gitignore 적용 안될 시 ※사용주의!
  - TERMINAL 내 커맨드 입력순서
  - 'git rm -r --cached .'
  - 'git add .'
  - 'git commit -m "cache clear"'
  - 'git push origin master'

```

<hr>

## 빌더 커맨드 정리

```bash

1. 노드모듈 설치
  - npm install

2. 로컬서버 생성
  - npm run dev

3. 프로젝트 빌드
  - npm run build
  - npm run generate

4. 배포
  - Netlify 이용
    배포 옵션에서 디렉토리를 'netlify/' 로 설정
    dist 폴더 내부 데이터를 'netlify' 폴더로 이동
  - FTP 서버 이용
    dist 폴더 내부 데이터를 서버에 업로드

```

<hr>

## 네이밍 룰 정리

```bash

1. pages폴더 내부 폴더/파일명 ※url 네이밍이므로 반드시 지킬 것!
  - 케밥 케이스 '예시 : builder-resource-list.vue, builder-index.vue, ...'

2. 디렉토리/컴포넌트명
  - 파스칼 케이스 '예시 : SectionInfo, SectionGallery, Textbox, Visualbox, ...'

3. 클래스/아이디명
  - 케밥 케이스 '예시 : st01-tbox01, st01-tbox01-title, st01-tbox01-desc, ...'

4. 스타일시트 변수명
  - 케밥 케이스 '예시 : $header-height, $bk-opa-1, $wrap-size-m, ...'

5. 동적 클래스명
  - 스네이크 케이스 '예시 : from_top, from_right, from_left, from_bottom, ...'

6. 스크립트 내부 변수명 
  - 카멜 케이스 '예시 : isPageCount, handleGnb, deviceCheck, isModalClose, ...'

7. 데이터파일명
  - 스네이크 케이스 '예시 : h_logo.png, slide_photo_01.png, list_item_01.png, ...'

```
<hr>
<br><br><br><br><br><br><br><br><br><br>
.