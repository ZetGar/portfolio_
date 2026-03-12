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
    title: "PB 고객 관리 조회 시스템",
    summary: "PB 고객 관리 화면에서 고객 조회 및 관리 기능을 구현한 프로젝트",
    role: "Frontend",
    tech: ["React"],
    keyContributions: [
      "React 기반 고객 조회 및 관리 UI 구현",
      "고객 검색 및 필터링 기능 개발",
      "고객 데이터 조회 API 연동 및 상태 관리 구현",
      "PB 업무 흐름에 맞는 UI 구조 설계"
    ],
    problem: "PB 업무 중 반복적으로 발생하던 고객 조회 프로세스를 효율적으로 처리할 필요가 있었습니다.",
    solution: "고객 조회 UI 및 관리 기능을 구현하여 업무 효율을 개선했습니다.",
    impact: "PB 업무에서 고객 조회 및 관리 프로세스가 간소화되었습니다.",
    notion: "https://www.notion.so/UX-2696ec8445fb80f682b4d4567609b54f?p=2696ec8445fb807880a4c4bcea52372e&pm=s",
    github: null,
    thumbnail: "/img/management/regCusList_1.png",
    detailPath: "/aiadpb"
  },

  managementStatusSystem: {
    featured: false,
    slug: "management-status-system",
    type: "service",
    title: "관리 현황 조회 시스템",
    summary: "관리 고객의 상태를 조회할 수 있는 내부 관리 시스템 개발",
    role: "Frontend",
    tech: ["React"],
    keyContributions: [
      "관리 고객 상태 조회 UI 개발",
      "여러 시스템 데이터를 통합하여 한 화면에서 조회 가능하도록 구현",
      "React 기반 데이터 상태 관리 및 렌더링 최적화",
      "관리 업무 효율 개선을 위한 UI 구조 설계"
    ],
    problem: "관리 고객의 상태를 확인하기 위해 여러 시스템을 조회해야 하는 문제가 있었습니다.",
    solution: "관리 현황을 한 화면에서 조회할 수 있는 관리 UI를 구현했습니다.",
    impact: "관리 업무 효율이 개선되었습니다.",
    notion: "https://www.notion.so/UX-2696ec8445fb80f682b4d4567609b54f?p=2696ec8445fb80659b4cd0b7a32cd775&pm=s",
    github: null,
    thumbnail: "/img/pb/home/pb_1.png",
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
    title: "전략마켓 — 대규모 금융 데이터 비교 UX 및 서비스 전면 개선",
    summary: "Tailwind+MUI 혼재 구조를 CSS Module로 리팩토링하고, Sticky Header/Column 이중 구조 테이블과 Highcharts 인라인 차트, 비동기 Skeleton UI 로딩을 적용하여 대규모 금융 데이터 비교 UX를 전면 개선한 프로젝트",
    role: "Frontend",
    tech: ["React", "Next.js", "TypeScript", "Highcharts", "Tailwind", "MUI", "CSS Module"],
    keyContributions: [
      "Tailwind + MUI 혼재 스타일을 CSS Module 기반으로 전면 리팩토링 — Mobile/PC 코드 통합으로 중복 제거",
      "Sticky Header/Column 이중 구조 테이블 직접 구현 — ::before 가상 요소로 배경 깨짐 방지, z-index 3단계 레이어링(헤더:5, 바디전략명:1, 교차셀:10), 좌우 scrollBy 버튼 동적 표시",
      "Chrome 업데이트 이후 Sticky 렌더링 방식 변경 대응 — 어긋나는 컬럼과 비정상 스크롤 문제를 CSS 구조 재정비로 해결",
      "Highcharts 미니 Area 차트를 테이블 행에 인라인 렌더링 — getMiniAreaChartOptions() 유틸리티로 옵션 표준화, No Data fallback 처리",
      "차트 데이터 캐싱 — 이미 로딩된 차트 데이터를 캐싱하여 탭 전환·재방문 시 API 재호출 없이 즉시 렌더링, 불필요한 네트워크 요청 제거로 성능 최적화",
      "비동기 데이터 로딩 + Skeleton UI — 텍스트 먼저 렌더링 후 차트 데이터 점진적 로딩으로 체감 속도 개선",
      "useStrategyTable 커스텀 Hook — useMemo 기반 필터→검색→정렬 3단계 파이프라인, strategyFilter 콜백으로 AI추천/전체전략 테이블을 Hook 하나로 관리",
      "TableUpdater 클래스로 API 응답 데이터 → UI 테이블 데이터 변환 표준화 — API 응답 구조와 UI 표시 형식을 분리하여 각각 독립적으로 변경 가능한 설계",
      "서버 데이터 기반 동적 탭 생성 — 탭 구성을 하드코딩이 아닌 API 응답 데이터로 동적 생성하여 상품 유형 추가·변경 시 코드 수정 없이 대응",
      "벤치마크(KOSPI, KRX300 등) 비교 차트 구현 — 전략 수익률과 시장 지수를 동일 차트에서 비교할 수 있는 금융 데이터 시각화",
      "설명 텍스트 Key 기반 서버 관리 — Node.js에 설명 데이터 저장, Key로 조회하여 팝업 표시. 코드 수정 없이 법적 고지 문구 변경 가능",
      "iOS/Android/WebView 크로스 플랫폼 UI 검증 — 모바일 팀과 협업하여 환경별 차이 해결"
    ],
    problem: "Tailwind과 MUI가 혼용된 스타일 구조와 Mobile/PC 코드 중복으로 유지보수가 어려웠고, 규제 대응으로 모든 데이터를 공개해야 하면서 가로 스크롤 시 전략명이 사라지는 가독성 문제가 발생했습니다.",
    solution: "CSS Module 기반으로 스타일을 재구성하고, Sticky Header/Column 이중 구조와 Highcharts 인라인 차트, Skeleton UI 비동기 로딩을 적용하여 대규모 금융 데이터의 비교 UX를 전면 개선했습니다.",
    impact: "데이터 비교 UX에서 스크롤, 레이어링, 성능, 크로스 플랫폼까지 고려하는 개발 역량을 확보했습니다. CSS position: sticky의 가로+세로 동시 적용 시 렌더링 이슈와 브라우저 업데이트 대응 경험을 쌓았습니다.",
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
    title: "계좌개설 내재화 (증권사)",
    summary: "증권사 계좌개설 프로세스를 개선하여 사용자 경험을 개선한 프로젝트",
    role: "Frontend",
    tech: ["React", "JavaScript"],
    keyContributions: [
      "React 기반 계좌개설 UI 컴포넌트 개발",
      "계좌개설 단계별 사용자 입력 흐름 설계",
      "기존 앱·웹 중복 입력 문제를 해결하기 위한 UX 구조 개선",
      "사용자 이탈을 줄이기 위한 계좌개설 프로세스 단순화"
    ],
    problem: "기존 계좌개설 프로세스는 단계가 복잡하고 앱에서 입력한 정보를 웹에서 다시 입력해야 하는 불편함이 존재했습니다.",
    solution: "계좌개설 프로세스를 단순화하고 UI/UX를 개선하여 사용자 흐름을 간소화했습니다.",
    impact: "계좌개설 단계 이탈률을 감소시키고 사용자 경험을 개선했습니다.",
    notion: "https://www.notion.so/UX-2696ec8445fb80f682b4d4567609b54f?p=26a6ec8445fb801b9629eb8837abbd9f&pm=s",
    github: null,
    thumbnail: "/img/account/account_6.png",
    detailPath: "/kbaccount",
    gallery: [
      {
        title: "유지보수 및 고도화",
        description: "공통 컴포넌트 구현, 전체 동의/개별 input 연동, OS별 웹뷰 대응 방식의 차이를 경험하며 앱 개발자들과의 소통 능력도 향상시켰습니다.",
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