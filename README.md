# femon-study

# 1 주차 : 개발 환경 설정

## Webpack + Gulp + Babel + React

- Build Tools
  - Webpack (패키지 번들러)
    .Loader를 통해 Javascript, Image file, Font, CSS, SCSS 등과 같은 자산을 하나의 모듈로 취급
    .Entry 별로 Bundle 생성 가능
    .Bundle에 대한 압축 및 난독화, 소스 맵에 대한 옵션을 제공
    .Plug-In 사용을 통한 사용자 정의 기능 수행
    .비동기 I/O와 다중 캐시 레벨을 사용하기 때문에 컴파일 속도가 매우 빠름
    .Entry - Webpack은 모든 애플리케이션에 대한 종속성 그래프를 작성하고 이 그래프의 시작점을 Entry Point라고 한다. 이 Entry Point를 통해 모듈이 어디서부터 시작하는지를 명세하는 애플리케이션을 시작하는 첫 번째 파일로 나타낼 수 있다.
    .Output - Output은 모든 애플리케이션의 자산(resources 또는 assets)을 하나의 Bundle로 묶었으면 해당 Bundle을 처리하는 방법을 명세한다.
    .Loader - Loader는 사전에 처리할 작업을 나타내며 css, html, jpg, scss 등의 자산을 하나의 모듈로 취급하며 이러한 파일들을 종속성 그래프에 추가할 때 모듈로 변환한다.
    .Plug-In - Plug-In은 일반적인 Compile 또는 모듈 처리에 필요한 작업 및 사용자 정의 기능을 수행하는데 사용한다.

  - Gulp (태스크 러너)
    .반복 가능한 작업을 자동화
    .JavaScript 테스트 실행 및 파일 병합
    .js, css, html등의 자산 파일을 압축
    .Node stream 기반으로 빠른 빌드 속도를 제공
    .작업을 정의하고 실행하는 것이 수월
