# SONGI KIM | Frontend Developer Portfolio

> 데이터가 많을수록, 설계가 중요합니다.
> 복잡한 데이터를 직관적인 UI로, 어려운 비즈니스 플로우를 자연스러운 UX로 설계합니다.

## 🔗 Live

[songi-portfolio.netlify.app](https://songi-portfolio.netlify.app)

## 🛠 Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — CSS Modules
- **Animation** — Scroll Reveal (IntersectionObserver), CSS Transitions
- **Deploy** — Netlify

## ✨ Key Features

- **13개 프로젝트** — 금융 데이터 UX, 아키텍처 설계, 풀스택까지 Problem → Solution → Impact 구조로 정리
- **코드 스니펫 썸네일** — 프로젝트 role(Frontend/Backend/Fullstack)에 따라 React/Java 코드 스타일 자동 분기
- **다크/라이트 모드** — CSS Variables 기반 테마 전환
- **반응형 디자인** — 데스크탑/태블릿/모바일 3단계 레이아웃 대응
- **스크롤 기반 등장 애니메이션** — IntersectionObserver stagger reveal
- **프로젝트 필터링** — 카테고리별 필터 (UX/UI, Data Visualization, Platform, Backend, Service)

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

---

## 🧪 Dev Playground

개인 학습과 아이디어를 실험하는 공간입니다.
실무 외에도 스스로 설계하고 만들어가는 프로젝트들을 기록합니다.

[dev-playground-orcin.vercel.app](https://dev-playground-orcin.vercel.app)

| 프로젝트 | 설명 | 상태 | 기술 |
|---------|------|------|------|
| Activity Tracker | 이벤트 기반 유저 상태 계산 + 시각화 | ✅ 완료 | Next.js, TypeScript, Node.js |
| Behavior CRM | 유저 상태 기반 자동화 캠페인 + 전환 추적 | ✅ 완료 | Next.js, TypeScript, Node.js, Supabase |
| AI 커리어 트래커 (JobLog) | AI 기반 합격 패턴 분석 + 커리어 가이드 | 🚧 진행중 | Next.js, TypeScript, Supabase, Claude API |

> 세 프로젝트 모두 **"데이터 기반 의사결정"** 철학으로 연결됩니다.