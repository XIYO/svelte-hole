# 뷰 트랜지션 이슈 보고용

## 문제

뷰 트랜지션에서 크기가 상당히 차이나는 라운딩 처리된 엘리먼트가 트랜지션 될 때, 
모양이 뒤틀리거나 그 차이가 여백으로 표시되는 디자인적 문제가 있음.

그래서 나는 `view-transition-group`을 추가적으로 스타일링 도구로 활용하여 이 문제를 해결했다.

그런데 이러한 스타일을 적용한 엘리먼트가 사라질 때 따로 스타일을 적용할 수가 없다.

`view-transition-new(some):only-child`를 사용하면 새로운 요소가 생길때 진입 트랜지션을 줄 수 있지만,
`view-transition-group(some):has(view-transition-new(some):only-child)`를 사용하면 새로운 요소가 사라질 때 트랜지션을 줄 수 없다.

그래서 그 차이점을 보고 하기 위한 프로젝트를 만들었다.

[w3c issue](https://github.com/w3c/csswg-drafts/issues/10728)에서 확인 가능

## 실행

**실행환경**:
- 엣지 Version 127.0.2651.98 (Official build) (64-bit)
- 아직 사파리는 지원 안 함(현재 최신버전 17)

```shell
npm install
npm run dev
```
