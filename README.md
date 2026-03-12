# SONGI KIM | Frontend Developer Portfolio

> 데이터 기반 서비스의 UX를 설계하는 프론트엔드 개발자 김송이의 포트폴리오입니다.

## 🔗 Live

[songi-portfolio.netlify.app](https://songi-portfolio.netlify.app)

## 🛠 Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — CSS Modules
- **Animation** — Scroll Reveal (IntersectionObserver), CSS Transitions
- **Deploy** — Netlify

## 📂 Project Structure

```
src/app/
├── components/          # UI 컴포넌트
│   ├── Hero/            # 메인 히어로 (타이핑 애니메이션, 플로팅 오브)
│   ├── CoreStrengths/   # 핵심 역량 카드
│   ├── FeaturedProjects/# 주요 프로젝트 카드 (코드 스니펫 썸네일)
│   ├── BackendExperience/# 백엔드 경험 카드
│   ├── Skills/          # 기술 스택
│   ├── Contact/         # 연락처
│   ├── ScrollProgress/  # 스크롤 프로그레스 바
│   └── ThemeToggle/     # 다크/라이트 모드 토글
├── data/
│   └── projects.ts      # 프로젝트 데이터
├── shared/
│   └── useScrollReveal.ts  # 스크롤 기반 카드 등장 애니메이션 Hook
├── projects/
│   ├── page.tsx         # 전체 프로젝트 목록 (필터링)
│   └── [slug]/page.tsx  # 프로젝트 상세 페이지
└── page.tsx             # 메인 페이지
```

## ✨ Key Features

- **스크롤 기반 카드 등장 애니메이션** — IntersectionObserver로 뷰포트 진입 시 stagger reveal
- **다크/라이트 모드** — CSS Variables 기반 테마 전환
- **코드 스니펫 썸네일** — 프로젝트 role(Frontend/Backend/Fullstack)에 따라 React/Java 코드 스타일 자동 분기
- **반응형 디자인** — 모바일/PC 최적화 레이아웃
- **타이핑 애니메이션** — Hero 섹션 인트로
- **프로젝트 필터링** — 카테고리별 필터 (Frontend, UX/UI, Data Visualization, Platform, Backend)

## 💡 Development Highlights

### 컴포넌트 설계

- **제네릭 커스텀 Hook** — `useScrollReveal<T>()` 훅을 제네릭으로 설계하여 `HTMLDivElement`, `HTMLElement` 등 다양한 요소에 타입 안전하게 재사용
- **데이터 주도 렌더링** — 프로젝트 데이터를 `projects.ts` 한 곳에서 관리하고, `Record<string, Project>` 타입으로 슬러그 기반 라우팅과 필터링을 동시에 지원
- **역할 기반 코드 스니펫 분기** — `ProjectCard`에서 `role` prop에 따라 React 컴포넌트 / Java 클래스 스타일 코드를 자동 표시, Fullstack은 해시 기반 일관된 랜덤 배정

### 성능 & UX

- **IntersectionObserver 기반 스크롤 애니메이션** — 섹션이 아닌 카드 그리드에 observer를 부착하여 카드가 실제 보일 때 정확한 타이밍에 트리거
- **Transition 분리 설계** — 스크롤 reveal(0.8s, cubic-bezier)과 hover(0.3s, ease)를 CSS specificity로 분리하여 각각 독립 동작
- **양방향 스크롤 대응** — `visible` 클래스를 토글 방식으로 관리하여 스크롤 업/다운 모두에서 애니메이션 재실행

### 스타일 아키텍처

- **CSS Modules** — 컴포넌트 단위 스타일 캡슐화, 전역 오염 방지
- **CSS Variables 기반 테마** — `globals.css`에서 라이트/다크 테마 변수를 정의하고 모든 컴포넌트에서 참조하는 일관된 디자인 시스템
- **크로스 플랫폼 대응** — Linux(Netlify) 배포 환경에서의 파일명 대소문자 이슈 해결 경험

## 🚀 Getting Started

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인
