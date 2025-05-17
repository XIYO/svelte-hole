<script>
	// SvelteURLSearchParams를 import하여 초기 쿼리를 설정합니다.
	import { SvelteURLSearchParams } from 'svelte/reactivity';

	const params = new SvelteURLSearchParams('message=hello');

	// 사용자 입력 값을 바인딩할 상태 변수
	let key = $state('key');
	let value = $state('value');
</script>

<h1>SvelteURLSearchParams 개요</h1>
<p>
	SvelteURLSearchParams는 URL 쿼리 파라미터를 Svelte의 반응성 시스템과 결합하여,
	동적으로 생성·수정하고 화면에 즉시 반영할 수 있도록 도와주는 유틸리티입니다.
</p>

<p>아래는 SvelteURLSearchParams를 사용할 수 있는 상황입니다.</p>
<h2>사용 상황</h2>
<ul>
  <li>
    <strong>쿼리 파라미터를 직접 조작하는 UI</strong>
    <ul>
      <li><em>필요 UI</em>: 키·값 입력 필드, <code>append</code> 버튼, 쿼리 문자열 미리보기</li>
      <li><em>설계 케이스</em>: 디버깅용 쿼리 빌더, 공유 링크 생성기</li>
      <li><em>엣지 케이스</em>: 중복 키 처리, 빈 키·값, URL 인코딩 문제</li>
    </ul>
  </li>
  <li>
    <strong>쿼리 파라미터 실시간 수정·반영 UI</strong>
    <ul>
      <li><em>필요 UI</em>: 파라미터 리스트, 인라인 편집, 삭제 아이콘</li>
      <li><em>설계 케이스</em>: 필터 칩(chips) 편집, 태그 관리 패널</li>
      <li><em>엣지 케이스</em>: 수백 개 파라미터 성능, 순서 고정 여부</li>
    </ul>
  </li>
  <li>
    <strong>form 없이 fetch 요청 구성</strong>
    <ul>
      <li><em>필요 UI</em>: 입력 폼·드롭다운, 전송 버튼, 응답 출력 영역</li>
      <li><em>설계 케이스</em>: 검색 API 호출, 무한 스크롤 쿼리 업데이트</li>
      <li><em>엣지 케이스</em>: 네트워크 오류 처리, 파라미터 주입 공격</li>
    </ul>
  </li>
  <li>
    <strong>조건 기반 검색·필터 UI</strong>
    <ul>
      <li><em>필요 UI</em>: 체크박스/토글, 적용·초기화 버튼, 결과 요약</li>
      <li><em>설계 케이스</em>: 전자상거래 다중 필터, 페이싯(facet) 검색</li>
      <li><em>엣지 케이스</em>: 상호 배타 필터, 무결과 상태, 동기화 지연</li>
    </ul>
  </li>
</ul>

<p>아래는 별도 유틸리티 없이도 충분한 상황입니다.</p>
<h2>사용 불필요 상황</h2>
<ul>
  <li>
    <strong>GET/POST form 전송</strong>
    <ul>
      <li><em>권장 방법</em>: 기본 HTML form 사용 → 브라우저가 쿼리 문자열 자동 생성</li>
    </ul>
  </li>
  <li>
    <strong>SvelteKit form action + enhance</strong>
    <ul>
      <li><em>권장 방법</em>: `enhance`가 내부적으로 파라미터 처리를 담당</li>
    </ul>
  </li>
  <li>
    <strong>단순 상태 관리</strong>
    <ul>
      <li><em>권장 방법</em>: `writable` 스토어나 컴포넌트 상태 변수 사용</li>
    </ul>
  </li>
</ul>

<h2>쿼리 파라미터 UI 예시</h2>
<p><code>params</code> 객체는 <code>SvelteURLSearchParams</code>로 생성된 쿼리 파라미터 데이터를 관리합니다.</p>

<!-- params: 쿼리 파라미터 데이터 -->
<section>
	<!-- 파라미터 키 입력 -->
	<input bind:value={key} />
	<!-- 파라미터 값 입력 -->
	<input bind:value={value} />
	<!-- 클릭 시 쿼리 파라미터 추가 -->
	<button onclick={() => params.append(key, value) }>append</button>

	<p>?{params.toString()}</p>

	{#each params as [key, value]}
		<p>{key}: {value}</p>
	{/each}
</section>