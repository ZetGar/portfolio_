export type ProjectType =
  | "service"
  | "ux"
  | "visualization"
  | "platform"
  | "backend"

export type GallerySection = {
  title: string
  description: string
  images: string[]
}

export type Project = {
  featured: boolean
  slug: string
  type: ProjectType
  title: string
  summary: string
  role: string
  tech: string[]
  keyContributions?: string[]
  problem: string
  solution: string
  impact: string
  notion: string
  github: string | null
  thumbnail?: string | null
  detailPath?: string | null
  gallery?: GallerySection[]
}

export const projects: Record<string, Project> = {

  pbCustomerSystem: {
    featured: false,
    slug: "pb-customer-system",
    type: "service",
    title: "PB 관리 시스템 — 고객 등록 자동화 및 관리 화면 개선",
    summary: "PB 고객 계좌 개설 시 자동 등록 실패로 발생하던 반복 문의를 UI 기능으로 해결하고, Tailwind+MUI 혼재 구조를 CSS Module로 리팩토링한 프로젝트. 클라이언트 사이드 필터링·페이지네이션으로 API 수정 없이 빠른 기능 제공",
    role: "Frontend",
    tech: ["React", "Next.js", "Recoil", "MUI", "CSS Module"],
    keyContributions: [
      "PB 고객 즉시 등록 기능 — 고객 정보 조회 API 연동, 등록 고객→정보 표시 / 미등록 고객→등록 UI 노출(조건부 렌더링), 상세 정보 모달 팝업 연동으로 한 화면에서 조회+등록 완결",
      "Recoil 기반 전역 상태 관리 — 고객 계좌 정보를 atom으로 관리, 검색→상세 팝업→등록 처리 흐름에서 Props drilling 없이 상태 일관성 유지",
      "클라이언트 사이드 데이터 처리 — useMemo 기반 최적화, 투자금액 범위별 필터링(1천만~1억 이상 5구간), 클라이언트 사이드 페이지네이션(동적 페이지 크기), Skeleton UI 로딩",
      "UI 구조 리팩토링 (Tailwind + MUI → CSS Module) — 공통 UI만 MUI 유지(Modal, Select), 나머지 CSS Module 전환으로 스타일 충돌 해결 및 관리 구조 단순화",
      "관리 현황 대시보드 — 관리 고객 총 현황 정보 카드, 기간별 조회(시작일/종료일 필터링), 고객 리스트 테이블(이름·연락처·생년월일·투자성향·수익률·가입일·투자금액) + 페이지네이션",
      "장기 성능 개선 방향 검토 — 서버 사이드 필터링 도입 및 IndexedDB 기반 브라우저 캐싱 전략으로 초기 로딩 부담 분산 검토"
    ],
    problem: "PB 고객 계좌 개설 시 고객 정보가 자동 등록되어야 했지만, 특정 상황에서 등록이 누락되어 PB 화면에서 고객을 조회할 수 없는 문제가 반복되었습니다. PB는 고객 정보를 확인하기 위해 별도 문의를 거쳐야 했고, 등록 여부 확인→수정 처리 과정이 반복되어 업무 처리 시간이 증가했습니다. 또한 Tailwind+MUI 혼합 사용으로 스타일 충돌·버튼 크기 불일치 문제가 있었습니다.",
    solution: "PB 화면에서 고객 정보 조회→미등록 고객 즉시 등록이 한 화면에서 가능하도록 기능을 구현했습니다. Recoil atom으로 고객 검색 상태를 전역 관리하고, API 수정 없이 프론트엔드에서 useMemo 기반 필터링·페이지네이션·검색을 처리하여 빠르게 기능을 제공했습니다. 스타일 구조는 공통 UI만 MUI 유지하고 나머지를 CSS Module로 전환하여 충돌을 해결했습니다.",
    impact: "PB 고객 문의 약 90% 감소. 별도 시스템 확인 없이 한 화면에서 고객 조회+등록이 가능해져 반복적인 확인 업무가 대폭 줄었습니다. API 변경 없이 프론트엔드 구현만으로 빠른 기능 제공이 가능했고, 단기 해결(클라이언트 사이드 처리)과 장기 개선(IndexedDB 캐싱)을 함께 고려하는 기술적 의사결정 경험을 쌓았습니다.",
    notion: "https://www.notion.so/UX-2696ec8445fb80f682b4d4567609b54f?p=2696ec8445fb807880a4c4bcea52372e&pm=s",
    github: null,
    thumbnail: "/img/management/regCusList_1.png",
    detailPath: "/aiadpb",
    gallery: [
      {
        title: "PB 고객 관리 · 등록",
        description: "고객 조회→미등록 고객 즉시 등록, 투자금액별 필터링, 관리 현황 대시보드를 한 화면에서 처리하는 PB 관리 시스템입니다.",
        images: ["/img/management/regCusList_1.png", "/img/management/regCusList_2.png", "/img/management/regCusList_3.png", "/img/management/regCusList_4.png", "/img/management/regCusList_5.png", "/img/management/regCusList_6.png", "/img/management/regCusList_7.png"]
      },
      {
        title: "PB 관리 현황 조회",
        description: "관리 고객 총 현황 정보 카드, 기간별 조회, 고객 리스트 테이블 등 PB 대시보드 화면입니다.",
        images: ["/img/pb/home/pb_1.png", "/img/pb/home/pb_2.png", "/img/pb/home/pb_3.png", "/img/pb/home/pb_4.png"]
      }
    ]
  },

  stockDiagnosis: {
    featured: false,
    slug: "stock-diagnosis",
    type: "service",
    title: "관심종목진단 — 다단계 AI 자산 상담 플로우 설계 및 구현",
    summary: "PB가 고객 보유 종목을 진단하고 AI 기반 포트폴리오 최적화를 수행하는 9단계 상담 플로우(종목 검색→분석→스타일 진단→AI 최적화→비교→리포트)를 단일 화면에서 설계·구현한 프로젝트. 3가지 진입 경로 통합, 실시간 비즈니스 로직 검증, next/dynamic 코드 스플리팅 적용",
    role: "Frontend",
    tech: ["React", "Next.js", "TypeScript", "Recoil", "CSS Module"],
    keyContributions: [
      "3가지 진입 경로 통합 설계 — 고객 ID 기반(보유종목 API)/외부 연동 시스템(종목코드 배열 findIndex+trim 매칭)/데이터 표출 모드(기존 상담 결과 복원)를 초기화 단계에서 분기하고 이후 UI 로직은 동일 assetList 상태로 통합",
      "종목 선택 실시간 비즈니스 로직 검증 — 최대 종목 수 N개 제한, 최소보유비중 합계 상한 초과 불가, 개별 하한 미만 입력 차단, 비중 미입력 시 자동 기본값 적용. 체크 해제 시 비중 0.00 리셋, 비중 입력 클릭 시 자동 체크 연동",
      "비중 입력 4단계 유효성 파이프라인 — 입력(정규식 숫자 검증) → 개별 상한 검증 → 합계 검증 → 상태 업데이트 / blur 시 0%이면 기본값 복원 + toFixed(2) 소수점 포맷팅",
      "종목 분석 + 스타일 진단 — 체크 종목 코드·비중 정리 후 분석 API 호출, 4가지 투자 스타일 요소(국가/규모/가치/긍정성) 선택 UI, 선택 결과 기반 AI 비중 최적화 API 호출",
      "AI 추천 vs 고객 선택 비교 모달 — 두 포트폴리오를 나란히 비교, 라디오 버튼 전환, 재분석 시 확인 팝업으로 실수 방지, Recoil 전역 로딩 상태 관리",
      "상담 라이프사이클 완결 — 임시저장 → 고객 링크 전송(전송 후 화면 전체 disabled로 중복 방지) → 7종 리포트 패키지 생성. 9단계 버튼 상태 자동 전환으로 순서 강제",
      "next/dynamic SSR:false로 6개 컴포넌트 동적 임포트 — 9단계 플로우에서 초기 번들 크기 최소화",
      "UX 마이크로인터랙션 — 종목명 scrollWidth>clientWidth 감지→말줄임+Tooltip 자동 표시(5초 자동 닫힘), 포트폴리오 생성 후 grayscale(0.7) 시각적 비활성화"
    ],
    problem: "종목 검색→체크리스트→분석→스타일 진단→AI 최적화→비교→저장→전송→리포트까지 9단계 상담 플로우를 하나의 화면에서 순차적으로 진행해야 했고, 각 단계마다 API 호출·상태 전환·버튼 활성화/비활성화 제어가 필요했습니다. 동일 화면에 고객 ID/외부 연동 시스템/기존 상담 데이터 3가지 진입 경로가 공존하여 분기 처리가 복잡했고, 종목 수 제한·비중 합계 상한 등 금융 도메인 비즈니스 규칙을 프론트엔드에서 실시간 검증해야 했습니다.",
    solution: "3가지 진입 경로를 초기화 단계에서 분기하고 이후 동일한 assetList 상태로 수렴시켜 UI 로직을 통합했습니다. 종목 선택 시 비즈니스 규칙을 실시간 검증하고, 비중 입력은 입력→검증→보정→포맷팅 4단계 파이프라인으로 잘못된 입력을 원천 차단했습니다. 9단계 버튼 상태를 자동 전환하여 순서를 강제하고, next/dynamic으로 6개 컴포넌트를 코드 스플리팅하여 초기 번들을 최소화했습니다. AI 추천 vs 고객 선택 비교 모달로 PB의 근거 기반 상담을 지원했습니다.",
    impact: "복잡한 9단계 상담 플로우를 단일 화면에서 완결하는 UX를 설계·구현했습니다. 단계별 버튼 상태 자동 전환과 실시간 비즈니스 로직 검증으로 PB의 조작 실수를 원천 방지하고, 3가지 진입 경로를 통합하여 분기 복잡도를 진입점에 집중시킨 설계 경험을 쌓았습니다. 금융 도메인에서 방어적 UX 설계의 실무적 가치를 체감했습니다.",
    notion: "https://www.notion.so/UX-2696ec8445fb80f682b4d4567609b54f?p=2696ec8445fb807880a4c4bcea52372e&pm=s",
    github: null,
    thumbnail: "/img/management/regCusList_1.png",
    detailPath: "/aiadpb"
  },


  skeletonLoading: {
    featured: false,
    slug: "skeleton-loading",
    type: "ux",
    title: "Skeleton UI 기반 로딩 UX 개선",
    summary: "Recoil 기반 전역 로딩 상태 관리와 2단계 로딩 체계(전체 스피너 + 컴포넌트 Skeleton)를 설계하여 중첩 로딩·이중 스크롤·UI 불일치 문제를 구조적으로 해결한 프로젝트",
    role: "Frontend",
    tech: ["React", "Next.js", "Recoil", "MUI", "Lottie", "CSS"],
    keyContributions: [
      "Recoil atom(loadingSpinnerState) 기반 전역 로딩 상태 통합 — 컴포넌트별로 분산되어 있던 로딩 상태를 atom 하나로 관리하여 중첩 로딩 근본 해결",
      "MUI Backdrop(z-index:9999) + Lottie 애니메이션 전체 페이지 스피너 — next/dynamic SSR:false 동적 임포트로 window 참조 에러 방지",
      "GraySkeleton 컴포넌트 — width(vw)/height(px) props로 콘텐츠 크기에 맞춤, CSS @keyframes shimmer 1.5초 주기 무한 반복 애니메이션",
      "LottieSpinner 2종 설계 — 전체 화면용(100vw×100vh) + 컴포넌트 내부용(absolute + borderRadius), if(!data) return <LottieSpinner/> 패턴",
      "2단계 로딩 체계 정립 — 페이지 초기 진입은 전체 스피너(Recoil+Backdrop), 비동기 데이터는 Skeleton UI, 전역 로딩은 1회만 + 부분은 스켈레톤으로 규칙화"
    ],
    problem: "10개 이상의 컴포넌트가 각자의 로딩 상태를 독립적으로 관리하고 있어서, 한 페이지에서 스피너가 3~4개 동시에 돌거나, 로딩 완료 후에도 Backdrop이 남아있어 화면이 잠기는 현상이 반복되었습니다. 팀원들은 각자 다른 방식으로 로딩을 처리하고 있었고, 프로젝트 전체에 통일된 로딩 규칙이 없는 상태였습니다.",
    solution: "'전역 로딩은 Recoil atom 하나로, 부분 로딩은 Skeleton UI로' 라는 2단계 원칙을 정하고 팀에 제안했습니다. 기존 컴포넌트별 로딩 상태를 걷어내고 loadingSpinnerState 하나로 통합한 뒤, 비동기 데이터 영역은 GraySkeleton shimmer로 대체하여 '화면은 먼저 보이고, 데이터가 채워지는' 경험을 설계했습니다.",
    impact: "SI 프로젝트 특성상 UX 개선이 후순위로 밀리기 쉬운 환경에서, 로딩 체계를 직접 제안하고 팀 표준으로 정착시켰습니다. 이후 신규 페이지 개발 시 로딩 처리에 소요되는 시간이 크게 줄었고, Skeleton UI 도입으로 사용자 체감 대기 시간도 개선되었습니다.",
    notion: "https://www.notion.so/UX-2696ec8445fb80f682b4d4567609b54f?p=2696ec8445fb800b9a91e869abcc6103&pm=s",
    github: null,
    thumbnail: "/img/pb/home/pb_3.png",
    detailPath: "/aiadpb"
  },


  strategyMarketDetail: {
    featured: true,
    slug: "strategy-market-detail",
    type: "ux",
    title: "금융 투자 플랫폼 (Part 1) — 전략마켓 대규모 데이터 비교 UX 개선 및 서비스 고도화",
    summary: "Tailwind+MUI 혼재 구조를 CSS Module로 리팩토링하고, Sticky Header/Column 이중 구조 테이블과 Highcharts 인라인 차트, 비동기 Skeleton UI 로딩, 기간별 캐싱, 벤치마크 비교, 차트 공통 컴포넌트화를 적용하여 증권사 투자 전략 비교 서비스의 UX를 전면 개선한 프로젝트",
    role: "Frontend",
    tech: ["React", "Next.js", "TypeScript", "Highcharts", "Tailwind", "MUI", "CSS Module"],
    keyContributions: [
      "CSS 구조 리팩토링 (Tailwind + MUI → CSS Module) — Mobile/PC 분리 코드를 통합하여 중복 제거, 상품 유형별(일반/세제혜택) 렌더링 분기 단순화",
      "Sticky Header/Column 이중 구조 테이블 직접 구현 — ::before 가상 요소로 배경 깨짐 방지, z-index 3단계 레이어링(헤더:5, 바디전략명:1, 교차셀:10), 좌우 scrollBy 버튼 동적 표시, 전략 카테고리별 색상 배지 자동 매핑",
      "Chrome 업데이트 이후 Sticky 렌더링 방식 변경 대응 — 브라우저 동작 변화를 분석하고 CSS 구조 재정비로 컬럼 어긋남·비정상 스크롤 해결",
      "Highcharts 미니 Area 차트를 테이블 행에 인라인 렌더링 — getMiniAreaChartOptions() 유틸리티로 옵션 표준화, tooltip 포맷 수정, No Data fallback, 수익률 색상 자동 매핑(양수:빨강/음수:파랑)",
      "차트·미니차트 공통 컴포넌트화 — 전략마켓과 내 자산 페이지에서 각각 개별 구현되어 있던 차트를 재사용 가능한 공통 컴포넌트로 통합, 디자인 및 데이터 구조 통일",
      "비동기 데이터 로딩 + Skeleton UI — 텍스트/테이블 데이터와 차트 데이터를 별도 API로 분리 호출, 텍스트 먼저 렌더링 후 차트 점진적 로딩으로 체감 속도 개선",
      "전략 상세 페이지 구현 — 좌우 분할 레이아웃(좌: DropDown 아코디언 기본정보/자산구성/운용계획, 우: 기간수익률+위험지표+라인 차트), format 분기(currency/percent/performance) 자동 포맷팅",
      "차트 데이터 기간별 캐싱 — 6개월/1년/2년/3년/누적 탭 전환 시 캐시 히트로 네트워크 비용 0, 같은 탭 재클릭 시 즉시 렌더링",
      "공시기간 기반 동적 탭 생성 + 벤치마크 비교 — 공시기간에 따라 차트 기간 탭 자동 생성, 벤치마크 수익률(KOSPI, KRX300 등)을 전략 수익률과 동일 차트에 오버레이 렌더링",
      "useStrategyTable 커스텀 Hook — useMemo 기반 필터→검색→정렬 3단계 파이프라인, strategyFilter 콜백으로 AI추천/전체전략 테이블을 Hook 하나로 관리",
      "TableUpdater 클래스로 API 응답 데이터 → UI 테이블 데이터 변환 표준화 — API 응답 구조와 UI 표시 형식을 분리하여 각각 독립적으로 변경 가능한 설계",
      "설명 텍스트 Key 기반 서버 관리 — Node.js에 설명 데이터 저장, Key로 조회하여 팝업 표시. 코드 수정 없이 법적 고지 문구 변경 가능",
      "iOS/Android/WebView 크로스 플랫폼 UI 검증 — 모바일 팀과 협업, 상단 계좌 클릭 시 UI 밀림 문제를 position 기반 레이아웃 구조 개선으로 해결"
    ],
    problem: "Tailwind과 MUI가 혼용된 스타일 구조에서 동일 UI가 서로 다른 방식으로 구현되어 스타일 관리가 어려웠고, Mobile/PC 코드가 분리되어 동일 기능 코드가 중복되는 구조였습니다. 법적 요구사항에 따라 모든 상품 데이터를 공개해야 하면서 테이블이 viewport를 초과했고, 가로 스크롤 시 전략명이 사라져 어떤 전략의 데이터인지 확인할 수 없었습니다. 차트 데이터를 한 번에 로딩하면 초기 렌더링이 지연되었고, 전략마켓과 내 자산 페이지에서 차트가 각각 개별 구현되어 디자인이 불일치했습니다.",
    solution: "스타일 구조를 CSS Module 기반으로 전면 재구성하고 Mobile/PC 코드를 통합했습니다. Sticky Header/Column 이중 구조로 가로·세로 스크롤 시 핵심 정보가 항상 보이도록 설계하고, Highcharts 미니 차트를 테이블 행에 인라인 렌더링하여 텍스트 수치와 시각적 추세를 동시에 비교할 수 있게 했습니다. 차트 데이터는 비동기로 분리 호출하여 텍스트 먼저 표시하고, 기간별 캐싱으로 탭 전환 시 네트워크 비용을 0으로 줄였습니다. 분산된 차트를 공통 컴포넌트로 통합하고, 공시기간 기반 동적 탭과 벤치마크 비교 차트를 구현했습니다.",
    impact: "대규모 금융 데이터 환경에서 스크롤, 레이어링, 성능, 크로스 플랫폼까지 고려하는 개발 역량을 확보했습니다. CSS position: sticky의 가로+세로 동시 적용 시 렌더링 이슈, Chrome 업데이트 대응, Highcharts 인라인 렌더링과 공통 컴포넌트 통합, 비동기 로딩+캐싱 조합 성능 최적화, 모바일 팀과의 크로스 플랫폼 UI 검증 경험을 쌓았습니다.",
    notion: "https://www.notion.so/2696ec8445fb805f8025eb49619363ac?v=2696ec8445fb8015b06f000c029398f6&p=26a6ec8445fb8003886cfb7262233070&pm=s",
    github: null,
    thumbnail: "/img/cs/detail/cs_3.png",
    detailPath: "/aiadcs",
    gallery: [
      {
        title: "전략마켓 상세 페이지",
        description: "Sticky Header/Column 이중 구조 + ::before 배경 깨짐 방지 + z-index 3단계 레이어링으로 대규모 데이터 비교 테이블을 구현했습니다.",
        images: ["/img/cs/detail/cs_1.png", "/img/cs/detail/cs_2.png", "/img/cs/detail/cs_3.png", "/img/cs/detail/cs_3_1.png", "/img/cs/detail/cs_4.png", "/img/cs/detail/cs_5.png", "/img/cs/detail/cs_6.png", "/img/cs/detail/cs_7.png", "/img/cs/detail/cs_8.png", "/img/cs/detail/cs_9.png"]
      },
      {
        title: "전략마켓 / 내 자산 리뉴얼",
        description: "미니 차트 공통 컴포넌트 리팩터링, Highcharts 인라인 렌더링, 상단 계좌 position 고정, Skeleton UI 비동기 로딩을 적용했습니다.",
        images: ["/img/cs/market/cs_1.png", "/img/cs/market/cs_2.png", "/img/cs/market/cs_3.png", "/img/cs/market/cs_4.png", "/img/cs/market/cs_5.png", "/img/cs/market/cs_6.png", "/img/cs/market/cs_7.png", "/img/cs/market/cs_8.png"]
      }
    ]
  },

  strategyMarketArchitecture: {
    featured: false,
    slug: "strategy-market-architecture",
    type: "ux",
    title: "금융 투자 플랫폼 (Part 2) — 내자산 · 데이터 정규화 아키텍처 설계",
    summary: "BFF 부재 환경에서 프론트엔드 데이터 정규화 클래스(TableUpdater, ChartData)와 커스텀 Hook(useStrategyTable)을 직접 설계하여 API-UI 분리 계층을 구축하고, 4계층 금융 데이터(계좌→포트폴리오→전략→종목)를 TypeScript 타입 시스템으로 모델링한 프로젝트",
    role: "Frontend",
    tech: ["React", "Next.js", "TypeScript", "Highcharts", "CSS Module"],
    keyContributions: [
      "TableUpdater 클래스 — BFF 없는 환경에서 프론트엔드 단 데이터 정규화 계층 직접 설계. 2중 헤더 구조(그룹 헤더 colSpan/rowSpan + 세부 컬럼 sortKey 매핑), updateTableBody()로 API 응답을 수익률 9개+위험지표 4개+운용정보 4개 총 17개 필드로 변환, null 안전 처리",
      "ChartData 클래스 — raw 차트 데이터를 Highcharts series 형식으로 변환하는 캡슐화 클래스. x(날짜 문자열)→timestamp 변환, 차트 라이브러리 의존을 클래스 내부로 격리",
      "useStrategyTable 커스텀 Hook — useMemo 기반 필터→검색→정렬 3단계 메모이제이션 파이프라인, strategyFilter 콜백으로 'AI 추천 전략'과 '전체 전략' 두 테이블을 Hook 하나로 관리, useState 초기화 함수로 인스턴스 재생성 방지",
      "내자산 4계층 자산 관리 시스템 — 계좌 메인(리스트·투자 가능 금액·전체 손익·일별 수익률 차트) → 포트폴리오 상세(자산구성·운용정보·수익률 차트) → 전략 상세(성과·종목 보유 현황·리밸런싱 내역)",
      "TypeScript 타입 시스템 설계 — 700줄+ 인터페이스로 금융 도메인 모델링(전략 280줄, 포트폴리오 마켓 95줄, 내자산 231줄, 테이블 구조 100줄), 인터페이스 상속으로 4계층 데이터 구조를 컴파일 타임에 검증",
      "고객용 서비스 + PB 관리자 서비스 양쪽에서 동일한 데이터 정규화 클래스와 Hook을 공유하여 크로스 프로젝트 코드 일관성 확보"
    ],
    problem: "백엔드에서 BFF 계층 없이 raw API 응답이 프론트엔드로 그대로 전달되는 구조였습니다. UI에 맞게 가공된 데이터가 아닌 원시 데이터를 컴포넌트에서 직접 참조하고 있어 API 스펙 변경 시 여러 컴포넌트를 동시에 수정해야 했습니다. 전략마켓의 두 테이블이 동일한 필터링·검색·정렬 로직을 각각 구현하는 코드 중복도 있었고, 내자산 페이지는 계좌→포트폴리오→전략→종목의 4계층 데이터 구조를 하나의 화면에서 탐색해야 하는 복잡성이 있었습니다.",
    solution: "프론트엔드 단에서 BFF 역할을 수행하는 정규화 계층을 직접 설계했습니다. TableUpdater 클래스로 API 응답을 17개 필드의 정규화된 테이블 데이터로 변환하고, ChartData 클래스로 차트 라이브러리 의존을 캡슐화했습니다. useStrategyTable Hook으로 필터→검색→정렬 파이프라인을 단일화하여 strategyFilter 콜백만 다르게 전달하면 여러 테이블을 하나의 Hook으로 관리할 수 있게 했습니다. 4계층 금융 데이터는 TypeScript 인터페이스 상속으로 타입 안전하게 모델링했습니다.",
    impact: "API 스펙 변경 시 TableUpdater만 수정하면 UI 코드에 영향이 없는 변경에 강한 구조를 확립했습니다. 고객용과 PB 관리자 서비스 양쪽에서 동일한 정규화 계층을 공유하여 코드 일관성을 확보했습니다. BFF 없는 환경에서 프론트엔드가 직접 데이터 아키텍처를 설계하여 백엔드 역할 공백을 해결한 경험, 700줄+ TypeScript 타입 시스템으로 금융 도메인을 모델링한 경험을 쌓았습니다.",
    notion: "https://www.notion.so/2696ec8445fb805f8025eb49619363ac?v=2696ec8445fb8015b06f000c029398f6&p=26a6ec8445fb8003886cfb7262233070&pm=s",
    github: null,
    thumbnail: "/img/cs/market/cs_1.png",
    detailPath: "/aiadcs"
  },

  toalgoWeb: {
    featured: true,
    slug: "toalgo-web",
    type: "platform",
    title: "TOALGO — 알고리즘 투자 플랫폼 구조 전환 및 UX 개선",
    summary: "React Native 앱을 Next.js 15 기반 웹 구조로 전환하고, Feature-Sliced Design 아키텍처와 디자인 시스템을 구축하여 투자 분석 데이터 시각화 및 자본시장법 기반 투자성향 분석을 구현한 금융 서비스",
    role: "Frontend",
    tech: ["Next.js 15", "TypeScript", "styled-components", "TailwindCSS", "Highcharts", "Context API"],
    keyContributions: [
      "React Native → Next.js 15(App Router + Turbopack) 기반 웹 구조 전면 전환 — Dynamic Route([strategy])를 활용한 전략별 상세 분석 페이지 구현",
      "Feature-Sliced Design(FSD) 아키텍처 적용 — app/features/entities/shared 레이어 분리, 각 feature 내부를 ui/logic/styles/components로 관심사 분리",
      "styled-components + TailwindCSS 결합 디자인 시스템 구축 — 14개 타이포그래피 컴포넌트(H1~H7 + P + Bold 변형) + 30개 컬러 토큰, vc prop 기반 자동 색상 매핑",
      "withAuth HOC 패턴으로 인증 로직 분리 — Context API + useAuth 커스텀 Hook 기반 전역 인증 상태, withAuth(Page) 한 줄로 인증 보호 적용",
      "TypeScript 제네릭 TableFormatter.format<TInput, TOutput>() 유틸리티로 API 응답 → UI 데이터 변환을 타입 안전하게 표준화",
      "Next.js API Route(/api/questions/[id])로 투자성향 설문 데이터를 서버사이드 관리 — 질문 콘텐츠 변경 시 프론트엔드 배포 없이 수정 가능한 구조",
      "기획팀·RA운용팀과 협업하여 투자 분석 관점의 데이터 포인트 정의 및 UI/UX 반영"
    ],
    problem: "기존 React Native 앱이 수개월간 업데이트 없이 방치되어 라이브러리 호환성 이슈가 누적되었고, 신규 기능 추가 시 빌드 자체가 불안정한 상황이었습니다. 또한 투자 전략의 수익률·리밸런싱·자산배분 데이터가 숫자 텍스트로만 나열되어 있어 사용자가 전략 간 비교를 할 수 없는 상태였습니다.",
    solution: "React Native를 걷어내고 Next.js 15(App Router + Turbopack)로 전면 전환하되, 이후 유지보수를 고려해 Feature-Sliced Design 아키텍처를 선택했습니다. 컴포넌트 단위가 아닌 기능 단위로 코드를 조직하여 '전략 분석' '투자성향' 등 독립적으로 개발·배포할 수 있는 구조를 설계했고, 14개 타이포그래피 + 30개 컬러 토큰 디자인 시스템으로 UI 일관성을 확보했습니다.",
    impact: "앱 스토어 심사·배포 없이 웹으로 즉시 업데이트 가능한 구조를 확보했습니다. FSD 아키텍처 덕분에 신규 기능 추가 시 기존 코드 영향 범위를 최소화할 수 있었고, TypeScript 제네릭 기반 TableFormatter로 API 응답 구조 변경에도 UI 코드 수정 없이 대응 가능한 유연한 데이터 레이어를 구축했습니다.",
    notion: "https://www.notion.so/UX-2696ec8445fb80f682b4d4567609b54f?p=26a6ec8445fb803d9ccfe6265d9c7b4e&pm=s",
    github: null,
    thumbnail: "/img/toalgo/toalgo_6.png",
    detailPath: "/toalgo",
    gallery: [
      {
        title: "로그인 / GNB / 로딩",
        description: "withAuth HOC 기반 인증 보호, useRef 포커스 체인으로 ID→Password→로그인 순차 이동, 예외 처리와 로딩 스피너를 적용했습니다.",
        images: ["/img/toalgo/toalgo_1.png", "/img/toalgo/toalgo_1_2.png", "/img/toalgo/toalgo_2.png", "/img/toalgo/toalgo_3.png"]
      },
      {
        title: "투자 전략 분석 시각화",
        description: "수익률 라인 그래프 + 벤치마크 비교, 원형/누적막대 차트로 자산 배분, 아코디언 UI로 상세 내역 토글, 리밸런싱 전/후 비중 비교 테이블을 구현했습니다.",
        images: ["/img/toalgo/toalgo_4.png", "/img/toalgo/toalgo_5.png", "/img/toalgo/toalgo_6.png", "/img/toalgo/toalgo_7.png", "/img/toalgo/toalgo_8.png", "/img/toalgo/toalgo_9.png", "/img/toalgo/toalgo_10.png"]
      },
      {
        title: "투자성향 분석 UX 개선",
        description: "라이브러리 없이 range input + CSS로 5단계 동적 색상 커스텀 슬라이더를 직접 구현하고, translateX + setInterval로 무한 캐러셀 인트로를 구현했습니다. Next.js API Route 기반 11단계 설문, QuestionCard 컴포넌트, 5단계 투자자 유형 분류 및 AI 맞춤 전략 추천 결과 페이지를 포함합니다.",
        images: ["/img/toalgo/toalgo_11.png", "/img/toalgo/toalgo_12.png", "/img/toalgo/toalgo_13.png", "/img/toalgo/toalgo_14.png", "/img/toalgo/toalgo_15.png", "/img/toalgo/toalgo_16.png", "/img/toalgo/toalgo_17.png", "/img/toalgo/toalgo_18.png", "/img/toalgo/toalgo_19.png", "/img/toalgo/toalgo_20.png"]
      }
    ]
  },

  investmentProfile: {
    featured: false,
    slug: "investment-profile",
    type: "service",
    title: "투자성향 분석 서비스",
    summary: "외부 라이브러리 없이 커스텀 슬라이더와 무한 캐러셀을 직접 구현하고, 9단계 멀티 스텝 분석 프로세스와 데이터 드리븐 결과 페이지를 설계한 투자 성향 분석 서비스",
    role: "Frontend",
    tech: ["React", "Next.js", "TypeScript", "CSS", "Next.js API Route"],
    keyContributions: [
      "외부 라이브러리 없이 input[type='range'] + CSS + 상태 관리로 5단계 커스텀 슬라이더 직접 구현 — 단계별 동적 색상 5색 변경, isTouched 감지, WebView touchmove preventDefault 처리",
      "translateX + transition + setInterval 조합으로 무한 캐러셀 인트로 애니메이션 직접 구현 — 마지막→첫 슬라이드 전환 시 transition:'none' 순간 이동으로 무한 루프",
      "9단계 멀티 스텝 분석 프로세스 구현 — Indicator(calc 기반 프로그레스), Question1Template(2버튼), QuestionMultiChoice(5지선다 슬라이더), QuestionCard(래퍼) 컴포넌트 설계",
      "propensity 인덱스 하나로 캐릭터·색상·설명·안내를 동적 렌더링하는 데이터 드리븐 결과 페이지 — 성향 등급 하락 감지 시 리밸런싱 불가 안내, 안정형 투자 불가 분기 처리",
      "Next.js API Route(/api/questions/[id])로 11개 설문 데이터 서버사이드 관리 — 콘텐츠 변경 시 배포 없이 수정 가능",
      "하루 3회 분석 횟수 제한 로직 및 앱/웹뷰 환경별 결과 페이지 이동 분기 처리"
    ],
    problem: "기존 투자성향 분석 페이지가 한 화면에 모든 질문을 나열하는 긴 스크롤 구조여서, 사용자가 9단계 중 어디까지 진행했는지 알 수 없었고 중도 이탈률이 높았습니다. 또한 슬라이더·캐러셀 등 인터랙션 UI를 외부 라이브러리로 구현하면 번들 크기가 커지고, 증권사 앱의 웹뷰 환경에서 터치 이벤트 충돌 문제가 발생할 우려가 있었습니다.",
    solution: "외부 라이브러리 없이 input[type='range'] + CSS + 상태 관리로 5단계 동적 색상 커스텀 슬라이더를 직접 구현하고, translateX + transition + setInterval로 무한 캐러셀 인트로를 만들었습니다. 9단계를 한 번에 보여주는 대신 QuestionCard 래퍼로 한 문제씩 순차 진행하는 멀티 스텝 구조를 설계했고, calc 기반 프로그레스 인디케이터로 진행률을 시각화했습니다. 설문 데이터는 Next.js API Route로 서버사이드 관리하여 질문 변경 시 프론트 배포 없이 수정 가능하게 했습니다.",
    impact: "번들 크기 증가 없이 터치·제스처 인터랙션을 직접 제어할 수 있게 되었고, 웹뷰 환경의 touchmove 충돌도 preventDefault로 해결했습니다. 멀티 스텝 구조 도입 후 분석 완료율이 개선되었으며, 성향 결과 페이지에서 propensity 인덱스 하나로 캐릭터·색상·설명·안내를 동적 렌더링하는 데이터 드리븐 구조를 확립했습니다.",
    notion: "https://www.notion.so/UX-2696ec8445fb80f682b4d4567609b54f?p=26a6ec8445fb800c930ed084f3f39b01&pm=s",
    github: null,
    thumbnail: "/img/toalgo/toalgo_12.png",
    detailPath: "/propensity",
    gallery: [
      {
        title: "커스텀 슬라이더 · 무한 캐러셀",
        description: "라이브러리 없이 range input + CSS로 커스텀 슬라이더와 translateX + setInterval로 무한 루프 캐러셀 인트로를 직접 구현했습니다.",
        images: ["/img/propensity/propensity_1.png", "/img/propensity/propensity_2.png", "/img/propensity/propensity_3.png", "/img/propensity/propensity_4.png", "/img/propensity/propensity_5.png"]
      },
      {
        title: "멀티 스텝 분석 · 결과 페이지",
        description: "9단계 순차 진행 프로세스와 propensity 인덱스 기반 데이터 드리븐 결과 페이지 — 5단계 성향별 캐릭터·색상·설명을 동적 렌더링합니다.",
        images: ["/img/propensity/propensity_6.png", "/img/propensity/propensity_7.png", "/img/propensity/propensity_8.png", "/img/propensity/propensity_9.png", "/img/propensity/propensity_10.png"]
      },
      {
        title: "TOALGO 성향분석 디자인 개편",
        description: "라이브러리 없이 range input + CSS로 5단계 동적 색상 커스텀 슬라이더를 직접 구현하고, 무한 캐러셀 인트로와 QuestionCard 기반 설문 UI를 새로 작성했습니다.",
        images: ["/img/toalgo/toalgo_11.png", "/img/toalgo/toalgo_12.png", "/img/toalgo/toalgo_13.png", "/img/toalgo/toalgo_14.png", "/img/toalgo/toalgo_15.png", "/img/toalgo/toalgo_16.png", "/img/toalgo/toalgo_17.png", "/img/toalgo/toalgo_18.png", "/img/toalgo/toalgo_19.png", "/img/toalgo/toalgo_20.png"]
      }
    ]
  },

  smartindex: {
    featured: true,
    slug: "smartindex",
    type: "visualization",
    title: "SMARTINDEX / 투자온도계",
    summary: "증권사 내부 투자 지표 데이터를 5단계 온도계로 시각화하여 사용자가 시장 상황을 직관적으로 이해할 수 있도록 돕는 서비스",
    role: "Frontend (기획·디자인·F/E 전반 담당)",
    tech: ["React 18", "Chart.js 4", "Zustand", "Recoil", "styled-components", "SCSS"],
    keyContributions: [
      "0~100 범위 SMART Index를 5단계(냉각→공포→안정→상승→과열)로 매핑하고, Chart.js Plugin API(beforeDraw 훅)를 활용해 Canvas 2D Context에 커스텀 배경 렌더링 플러그인 직접 개발. 온도 구간별 동적 색상 변경 바 차트 구현 및 image.onload 기반 비동기 렌더링 처리",
      "재사용 가능한 공통 컴포넌트 구조 설계(Temper, Title, Popup, Loading, Notice) — 데이터 상수(STEPTEMPER, POPUPCTS, TITLECTS)와 UI를 분리하여 콘텐츠 변경 시 상수만 교체하면 되는 구조",
      "useReducer + Recoil 결합 커스텀 Hook(useAsync)으로 API 통신 표준화 — 에러 유형(네트워크 vs 서버 로직)을 분류하여 전역 상태로 전파하는 중앙 집중식 에러 핸들링",
      "Zustand(UI 상태)와 Recoil(비즈니스 상태)을 상태 성격에 따라 전략적으로 분리 적용한 이중 상태 관리 아키텍처 설계",
      "하나은행 모바일 앱 웹뷰에 최적화된 반응형 금융 UI — max-width 400px, S&P500/NASDAQ Tab 전환, 팝업 시 배경 스크롤/터치 잠금 처리",
      "공통 헤더·요청 옵션 빌더 기반 RESTful API 추상화 레이어 — 트랜잭션 코드 식별 체계, 환경별(DEV/PROD/TEST) 서버 URL 자동 분리"
    ],
    problem: "투자 심리 지수(0~100)를 숫자로만 제공하면 사용자가 '지금이 투자하기 좋은 시점인지'를 직관적으로 판단할 수 없었습니다. 차트 라이브러리의 기본 옵션만으로는 온도계 형태의 5단계 시각화를 구현할 수 없어 Chart.js의 렌더링 파이프라인 내부까지 직접 제어해야 했습니다.",
    solution: "Chart.js Plugin API의 beforeDraw 훅에 진입하여 Canvas 2D Context에 직접 그리는 커스텀 플러그인을 개발했습니다. 0~100 범위를 냉각→공포→안정→상승→과열 5단계로 매핑하고, 구간별로 동적 색상이 변하는 바 차트를 구현했습니다. 이때 재사용을 고려하여 UI 컴포넌트(Temper, Popup, Loading)와 데이터 상수(STEPTEMPER, POPUPCTS)를 완전 분리하여, 새 서비스 적용 시 상수 파일만 교체하면 되는 구조를 설계했습니다.",
    impact: "이 구조를 4년간 하나은행 등 여러 금융사 서비스에서 재사용하며 PB 페이지, AI 어드바이저까지 확장 적용했고, 신규 서비스 개발 시간을 약 30% 단축했습니다. Chart.js 기본 API로 해결 안 되는 요구사항을 Plugin 레벨에서 해결한 경험은 '라이브러리 한계를 파악하고 확장하는 능력'을 증명하는 사례가 되었습니다.",
    notion: "https://www.notion.so/UX-2696ec8445fb80f682b4d4567609b54f?p=26a6ec8445fb802da2f2f5f6bac59700&pm=s",
    github: null,
    thumbnail: "/img/smartIndex_home.png",
    detailPath: "/smartIndex",
    gallery: [
      {
        title: "디자인 및 온도계 UI",
        description: "시장 상황을 점수로 바꿔 5단계 지표로 표현했습니다. 증권사 앱 내 웹뷰 환경을 고려하여 세로로 긴 온도계 형태로 최종 결정되었습니다.",
        images: ["/img/smartIndex_home.png", "/img/smartIndex_popup1.png", "/img/smartIndex_popup2.png", "/img/smartIndex_step5.png"]
      }
    ]
  },


  kbAccountInternalization: {
    featured: false,
    slug: "kb-account-internalization",
    type: "ux",
    title: "계좌개설 내재화 — Zustand 기반 11단계 플로우 상태 관리 및 약관 시스템 설계",
    summary: "증권사 비대면 계좌개설을 앱 내 WebView로 내재화하면서, Zustand 기반 도메인별 8개 Store 설계, react-pdf PDF 약관 뷰어(캐싱·스크롤 감지), 4가지 형식(PDF/HTML/텍스트/동적HTML) 통합 약관 시스템을 구현한 프로젝트",
    role: "Frontend",
    tech: ["React", "Next.js", "TypeScript", "Zustand", "react-pdf"],
    keyContributions: [
      "Zustand 기반 도메인별 8개 Store 설계 — SMS 인증·고객 정보·은행 계좌·ARS 인증·약관 동의·주소 등 독립 Store, 파생 상태(isEmptyAgree, isEmptyPhone) 패턴으로 유효성 검증을 Store 내부에서 완결, getState() 직접 호출로 비동기 로직 안정 접근",
      "PDF 약관 뷰어 — fetch→arrayBuffer→Int8Array→File 변환 로드, Store 기반 PDF 캐싱(재진입 시 재다운로드 방지), numPages 기반 멀티페이지 동적 렌더링, pageInfoRef로 각 페이지 렌더 완료 추적→전체 완료 시 스피너 해제",
      "스크롤 끝 감지 — scrollHeight-scrollTop<=clientHeight+10 비교로 약관 열람 완료 감지→동의 버튼 활성화, 1페이지 PDF는 즉시 활성화 예외 처리",
      "4가지 형식 통합 약관 뷰어 — type 필드로 PDF/HTML iframe/텍스트/srcDoc(서버 동적 HTML) 자동 분기, checkmap()으로 필수(essential)/개별(url) 자동 분류, 전체 동의 체크박스",
      "약관 계좌 유형별 필터링 — 위탁(consignment)/연금(pension)/공통(common) 약관 자동 필터, 2depth 하위 약관 목록 구조 지원",
      "선언적 페이지 네비게이션 (선임 협업) — 11개 페이지를 배열(KBACCOUNT)로 선언적 정의, nextPage(page, subPage) 2계층 네비게이션, 본인 인증 6단계 stepIdx 순차 진행, 이어하기 기능(4일 이내)"
    ],
    problem: "11단계 계좌개설 플로우(약관 동의→본인인증→신분증→주소→이메일→고객정보→비밀번호→금융기관인증→주문대리인→ARS→완료)에서 SMS·고객정보·은행계좌·ARS·약관·주소 등 서로 다른 도메인의 상태를 관리해야 했습니다. 약관 15종 이상이 PDF/외부HTML/텍스트/서버동적HTML 4가지 형식으로 혼재되어 있었고, 금융 규제상 약관을 끝까지 스크롤해야 동의 버튼이 활성화되는 요구사항이 있었습니다.",
    solution: "Zustand로 도메인별 8개 독립 Store를 설계하고, 파생 상태 패턴으로 유효성 검증을 Store 내부에서 완결했습니다. react-pdf 기반 PDF 뷰어에 캐싱·멀티페이지 렌더 추적·스크롤 끝 감지를 구현하여 규제 요구사항을 충족했습니다. 약관 데이터의 type 필드 하나로 4가지 형식을 자동 분기하는 통합 뷰어를 설계하여, 새 약관 추가 시 데이터만 추가하면 되는 확장 가능한 구조를 만들었습니다.",
    impact: "11단계 복잡한 금융 프로세스의 상태를 도메인별로 체계 관리하는 설계 경험을 쌓았습니다. PDF 스크롤 감지+캐싱으로 금융 규제를 충족하면서 UX를 개선했고, 4가지 형식 통합 약관 시스템으로 약관 15종+를 타입 하나로 관리하는 확장 가능한 구조를 확립했습니다. 선임 개발자와 협업하며 선언적 UI 아키텍처(데이터 기반 페이지 정의) 패턴을 학습했습니다.",
    notion: "https://www.notion.so/UX-2696ec8445fb80f682b4d4567609b54f?p=26a6ec8445fb801b9629eb8837abbd9f&pm=s",
    github: null,
    thumbnail: "/img/account/account_6.png",
    detailPath: "/kbaccount",
    gallery: [
      {
        title: "계좌개설 내재화 UI",
        description: "11단계 계좌개설 플로우, PDF 약관 뷰어, Zustand 기반 상태 관리를 적용한 비대면 계좌개설 화면입니다.",
        images: ["/img/account/account_1.png", "/img/account/account_2.png", "/img/account/account_3.png", "/img/account/account_4.png", "/img/account/account_5.png", "/img/account/account_6.png", "/img/account/account_7.png", "/img/account/account_8.png", "/img/account/account_9.png", "/img/account/account_10.png"]
      }
    ]
  },

  errorHandler: {
    featured: false,
    slug: "error-handler",
    type: "backend",
    title: "공통 예외 처리 구조 개선 — @ControllerAdvice 기반 REST API 오류 응답 표준화",
    summary: "분산된 예외 처리 로직을 @ControllerAdvice로 중앙화하고, ErrorCode enum 체계(100개+)를 HttpStatus 기준으로 재정비하여 REST API 오류 응답을 표준화한 프로젝트",
    role: "Backend",
    tech: ["Spring MVC", "Java", "Lombok", "Jackson"],
    keyContributions: [
      "ErrorCode enum 체계 정리 — SYSTEM_ 접두어 통일 + HttpStatus 기준 그룹핑(400/401/404/500 등)으로 100개+ 오류 코드 체계적 관리",
      "@ControllerAdvice + @ExceptionHandler 기반 전역 예외 처리 구조 구축 — Controller에서 try-catch 제거, 비즈니스 로직 집중",
      "ErrorResponse DTO로 모든 API 오류 응답 형식 통일 — { timestamp, errorCode, message } 3-field 구조",
      "GlobalException에 dynamicMessagePart 추가 — 정적 ErrorCode 메시지 + 런타임 컨텍스트 정보 동적 조합",
      "예외 체이닝(Exception Chaining) 패턴 적용 — 원인 예외 보존으로 운영 환경 디버깅 효율 향상",
      "SessionManager 예외 처리 일원화 — 세션 예외를 GlobalException으로 통합 변환, 이중 래핑 방지"
    ],
    problem: "Controller마다 try-catch가 산재되어 있고, 같은 '세션 만료' 에러가 어떤 API에서는 { error: 'expired' }, 다른 곳에서는 { code: 401, msg: '...' }로 응답하는 상황이었습니다. ErrorCode도 INVALID_SESSION, SESSION_EXPIRED, AUTH_FAILED 등 명명 규칙 없이 100개 이상 추가되어 있어서, 에러 발생 시 로그에서 원인을 찾는 데만 상당한 시간이 소요되었습니다.",
    solution: "모든 Controller의 try-catch를 걷어내고 @ControllerAdvice 기반 GlobalExceptionHandler 하나로 집중시켰습니다. 이때 기존 100개+ ErrorCode의 하위 호환성을 깨지 않으면서 SYSTEM_ 접두어 + HttpStatus 기준 그룹핑으로 체계적으로 재정비했고, ErrorResponse DTO { timestamp, errorCode, message } 3-field 구조를 표준으로 확정했습니다. 운영 중 발생하는 동적 컨텍스트(ex: '사용자 ABC의 세션')를 포함하기 위해 dynamicMessagePart를 설계하여 정적 ErrorCode + 런타임 정보를 조합할 수 있게 했습니다.",
    impact: "프론트엔드에서 에러 처리 분기가 errorCode 하나로 통일되어 클라이언트 코드가 크게 단순화되었습니다. 에러 발생 시 요청 URL + ErrorCode + 메시지 + 원인 예외 체인이 한 줄 로그에 모두 출력되어, 이전에는 로그 여러 파일을 뒤져야 했던 디버깅이 즉시 가능해졌습니다.",
    notion: "https://www.notion.so/2696ec8445fb805f8025eb49619363ac?v=2696ec8445fb8015b06f000c029398f6&p=31e6ec8445fb80979de2df22f14cdb0c&pm=s",
    github: null,
    detailPath: null
  },

  springMigration: {
    featured: false,
    slug: "spring-migration",
    type: "backend",
    title: "Spring 기반 SDK 개발환경 정비 및 JDK17 / JDK8 개발환경 구축",
    summary: "운영 중인 JDK8 기반 원격 상담 SDK의 레거시 의존성 제거, SLF4J 2.x + Log4j2 로그 스택 통합, Maven 8개 프로파일 체계화, JDK17/JDK8 독립 개발환경 구축 및 로컬 이중화 테스트 환경을 구성한 프로젝트",
    role: "Backend",
    tech: ["Spring Framework", "Maven", "Java", "Log4j2", "SLF4J", "Hazelcast", "MyBatis"],
    keyContributions: [
      "레거시 프레임워크 의존성 완전 제거 — 순수 Spring Framework 5.3.x(보안 패치 적용) 기반으로 전환, 운영 산출물 동일성 검증 후 적용",
      "SLF4J 1.x/2.x 호환 충돌 해결 — SLF4J 2.0.17 + Log4j2 2.24.3 + log4j-slf4j2-impl 바인딩으로 로그 스택 전체 통합",
      "Maven Profile 기반 8개 환경 빌드 구조 체계화 — local/local1/local2/linux/dev/stg/release1/release2, resources-${env} 패턴으로 환경별 설정 자동 분리",
      "JDK17 기반 개발환경 신규 구축 + JDK8 환경 별도 정비 — 운영 환경에 영향 없이 독립적 운영 가능한 이중 환경 구성",
      "로컬 이중화 테스트 환경 구축 — Hazelcast 세션 클러스터링 + 미러링 서버 이중화 검증으로 배포 전 사전 검증 체계 확보",
      "보안 라이브러리 일괄 업그레이드 — Spring Security 5.8.16, Jackson 2.20.1, BouncyCastle 1.80 등 최신 보안 패치 적용"
    ],
    problem: "운영 중인 SDK에 레거시 프레임워크 의존성이 남아있었지만, 함부로 제거하면 운영 서비스가 중단될 위험이 있었습니다. 특히 SLF4J 1.x 기반 브릿지와 신규 추가된 2.x 라이브러리가 충돌하면서 'Multiple SLF4J bindings' 런타임 에러가 특정 환경에서만 간헐적으로 발생했고, 원인 추적에 상당한 시간이 소요되었습니다. 빌드 프로파일이 정비되지 않아 환경별 설정이 하드코딩되어 있었고, 이중화 구성을 로컬에서 검증할 방법이 없어 배포 후에야 문제를 발견하는 상황이었습니다.",
    solution: "'운영 산출물을 절대 깨뜨리지 않는다'를 원칙으로 세우고, 의존성 교체 전후 WAR 빌드 산출물의 동일성을 검증하며 단계적으로 진행했습니다. SLF4J 충돌은 의존성 트리를 전수 분석하여 1.x 브릿지를 모두 제거하고 SLF4J 2.0.17 + log4j-slf4j2-impl 단일 바인딩으로 통합했습니다. Maven Profile을 local/dev/stg/release 등 8개로 체계화하여 resources-${env} 패턴으로 설정을 자동 분리하고, Hazelcast 클러스터링 기반 로컬 이중화 테스트 환경을 구축하여 배포 전 사전 검증 체계를 확보했습니다.",
    impact: "운영 서비스 무중단 상태에서 레거시 의존성 제거, 로그 스택 통합, 보안 라이브러리 일괄 업그레이드를 완료했습니다. 이후 SLF4J 관련 런타임 에러가 완전 해소되었고, 8개 환경 빌드가 프로파일 하나로 전환 가능해져 배포 실수가 크게 줄었습니다. 로컬 이중화 검증 덕분에 Hazelcast 세션 동기화 문제를 운영 배포 전에 사전 발견·해결할 수 있게 되었습니다.",
    notion: "https://www.notion.so/2696ec8445fb805f8025eb49619363ac?v=2696ec8445fb8015b06f000c029398f6&p=31e6ec8445fb80dbb6a3d6ecb88e60d4&pm=s",
    github: null,
    detailPath: null
  },

  websocketConsulting: {
    featured: false,
    slug: "websocket-consulting",
    type: "backend",
    title: "원격 상담 시스템 — 상담사 주도형 모델 구현",
    summary: "연구소 제공 코어 라이브러리(화면 캡처 엔진, WebSocket 통신 프로토콜, 오버레이 렌더링) 위에 상담 채널 관리·인증 흐름·채팅 UI·상태 관리·알림 UX 등 서비스 레이어 전체를 설계·구현한 상담사 주도형 원격 상담 시스템",
    role: "Fullstack",
    tech: ["Spring", "WebSocket", "STOMP", "JWT", "JavaScript", "html2canvas"],
    keyContributions: [
      "[담당 범위] 코어 라이브러리(화면 캡처 엔진·WebSocket 프로토콜·오버레이 렌더링)는 연구소 제공, 그 위에 상담 서비스 레이어(채널 관리·인증·채팅·UI·상태 관리) 전체를 설계·구현",
      "상담사 주도형 전체 플로우 구축 — 메인 페이지 → 채널 생성 → URL 발송 → 고객 본인 인증 → 실시간 상담 연결까지 End-to-End 구현",
      "WebSocket(STOMP) 기반 실시간 양방향 통신 — 채팅 송수신, 고객 화면 캡처(html2canvas → WebSocket) 및 미러링 표시",
      "오버레이 기반 원격 제어 구현 — 브러시(펜), 지우개, 사각형 영역 강조, 하이라이트, 화면 확대/축소, 불필요한 마우스 이동 이벤트 차단 처리",
      "채널 관리 및 상태 동기화 — 동일 상담사/사용자 중복 접속 방지, 채널 상태(대기/진행) 실시간 갱신, 상담사 ID 기반 채널 필터링",
      "고객 본인 인증 화면 구현 — 이름/생년월일/성별/통신사/휴대폰 입력 폼, 인증번호 발송·확인, 인증 완료 시 상담 화면 자동 이동",
      "JWT Access Token 기반 채널 인증 + 쿠키 기반 세션 관리, 상담사 세션 자동 생성 및 만료 시간 연장 처리"
    ],
    problem: "연구소에서 제공한 코어 라이브러리(화면 캡처 엔진, WebSocket 프로토콜, 오버레이 렌더링)는 있었지만, 실제 상담 서비스로 만들기 위한 채널 관리·인증·채팅·상태 동기화 등 서비스 레이어가 전무한 상태였습니다. 특히 상담사가 고객 채널을 생성하고 URL을 발송해서 상담을 시작하는 End-to-End 플로우가 존재하지 않았고, 동일 상담사/고객이 중복 접속할 때의 처리나 세션 만료 시 재연결 시나리오도 미구현이었습니다.",
    solution: "코어 라이브러리 위에 상담 서비스 레이어 전체를 설계했습니다. 메인 페이지 → 채널 생성 → URL 발송 → 고객 본인 인증 → 실시간 상담 연결까지 End-to-End 플로우를 구축하고, WebSocket(STOMP) 기반으로 채팅 송수신, html2canvas 화면 캡처·미러링, 오버레이 원격 제어(브러시/펜/지우개/사각형 강조)를 구현했습니다. 중복 접속은 채널 상태(대기/진행)를 실시간 갱신하고 이전 세션을 자동 종료하는 방식으로, JWT Access Token + 쿠키 기반 세션 관리로 인증 흐름을 설계했습니다.",
    impact: "'라이브러리만 있고 서비스는 없는' 상태에서 실제 운영 가능한 상담 시스템을 완성했습니다. 이 과정에서 WebSocket 환경의 예외 상황(네트워크 끊김 시 재연결, 상담사 브라우저 강제 종료 시 채널 정리, 다중 탭 접속 감지)을 직접 경험하고 해결하여, 실시간 양방향 통신 시스템의 실무적 안정성 확보 역량을 쌓았습니다.",
    notion: "https://www.notion.so/UX-2696ec8445fb80f682b4d4567609b54f?p=31e6ec8445fb804caa39ef4737d95268&pm=s",
    github: null,
    detailPath: null
  },

  electronicSeal: {
    featured: true,
    slug: "electronic-seal",
    type: "platform",
    title: "전자인장 시스템 — Maven 멀티 모듈 기반 공통 코드 구조 설계",
    summary: "코드 한 벌로 Spring Boot(JAR)와 Spring Framework(WAR) 양쪽에서 실행 가능한 구조를 Maven 멀티 모듈로 설계하고, React→JSP 전환, 멀티 DB 지원, DB 스키마 설계, Service CRUD 연동까지 전 계층을 구현한 프로젝트",
    role: "Fullstack",
    tech: ["Spring Boot", "Spring Framework", "Maven", "JSP", "Java", "JdbcTemplate", "MariaDB", "Oracle"],
    keyContributions: [
      "Maven 멀티 모듈 구조 설계(Root→common→boot/legacy) — Controller, Service, Config, View(JSP)를 common에 배치하여 코드 한 벌로 Boot/Framework 양쪽 빌드 가능",
      "Spring Boot(.yml) / Spring Framework(.properties) 설정 이중화 — 동일한 키(spring.datasource.*)로 호환성 확보, Boot는 내장 Tomcat, Legacy는 외장 Tomcat+web.xml 구성",
      "React(MUI) 기반 18개 페이지를 JSP 환경으로 전환 — InternalResourceViewResolver로 양 환경 동일 뷰 경로(/WEB-INF/views/) 사용, 프리미엄 CSS 디자인 적용",
      "멀티 DB 지원 — DataSourceConfig를 common 모듈에 배치, 드라이버 클래스 변경만으로 MariaDB/Oracle 전환 가능 (HikariCP 커넥션 풀)",
      "DB 스키마 직접 설계 — 7개 테이블(seals, requests, departments 등), 코드 테이블 분리 패턴(인장구분·상태·신청상태 정규화), JOIN 기반 데이터 조회 구조",
      "Service 레이어 CRUD 연동 — SealService/RequestService(JdbcTemplate 기반), 생성자 주입 의존성 관리, JSP JSTL 동적 렌더링, 모달 UI 등록/수정/상세",
      "망분리(오프라인) 환경 대응 — local-maven-repo 기반 로컬 빌드 체계 구축",
      "SQL 예약어(type, status) 충돌 대응 — 백틱(`) 처리로 MariaDB 호환성 확보"
    ],
    problem: "Spring Framework(외장 Tomcat/WAR)와 Spring Boot(내장 Tomcat/JAR) 두 환경이 동시 존재하여, 하나의 기능을 수정할 때마다 양쪽에서 Controller·Service·Config를 각각 수정하고 동기화해야 했습니다. 실제로 한쪽만 수정하고 다른 쪽을 빠뜨려 동작이 달라지는 문제가 발생할 여지가 있었고, .yml과 .properties의 설정 방식 차이, 고객사마다 다른 DB(MariaDB/Oracle) 환경까지 겹쳐 코드 관리가 점점 복잡해지는 구조였습니다.",
    solution: "Flutter가 Dart 코드 하나로 iOS/Android를 빌드하는 것처럼, Maven 멀티 모듈(Root→common→boot/legacy)로 '코드는 한 벌, 설정만 분리'하는 구조를 설계했습니다. Controller, Service, Config, View(JSP)를 전부 common 모듈에 배치하고, boot/legacy에서는 각 환경 설정만 개별 적용하여 어느 쪽으로 빌드해도 동일하게 동작하도록 했습니다. DB 설계도 직접 수행하여 7개 테이블(seals, requests, departments 등)에 코드 테이블 분리 패턴을 적용하고, JdbcTemplate 기반 Service CRUD → Controller → JSP 뷰까지 전 계층을 연동했습니다.",
    impact: "이후 기능 추가 시 common 모듈만 수정하면 Boot/Framework 양쪽에 자동 반영되어, 변경 누락으로 인한 동기화 문제가 원천 차단되었습니다. 고객사 DB 전환도 설정 파일의 드라이버 클래스 1줄만 변경하면 되는 구조를 확립했고, 망분리 환경에서도 local-maven-repo 기반으로 빌드 가능한 체계를 구축했습니다. 이 프로젝트를 통해 '같은 코드를 두 번 쓰지 않는 구조 설계'의 실무적 가치를 직접 검증했습니다.",
    notion: "https://www.notion.so/UX-2696ec8445fb80f682b4d4567609b54f?p=31e6ec8445fb806582fbf74fae799e70&pm=s",
    github: null,
    detailPath: null
  }

}