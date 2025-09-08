import { DataType } from "@/app/type/type";

export const data: DataType = {
  title: "투자 성향 · 스타일 분석",
  description: [
    {
      title: "진입 로직",
      content: [
        {
          title: "기존 결과가 있는 경우 :",
          content: [
            "LocalStorage에서 결과 불러오기",
            "바로 결과 페이지로 이동 (STEP 6)",
          ],
        },
        {
          title: "기존 결과가 없는 경우 :",
          content: ["동의 팝업 노출 후 설문 시작"],
        },
      ],
      actions: [
        { label: "처음부터 분석하기", link: "/propensity/analysis" },
        { label: "이전 결과 보기" },
      ],
    },
    {
      title: "주요 기준점",
      content: [
        {
          title: "프로세스 구조",
          content: [
            "단계별 화면 전환과 고객의 선택값을 묶어 최종 결과값을 API로 호출하는 전반적인 프로세스 구현에 중점을 두고 작업했습니다.",
            "재분석 시 저장된 데이터 삭제 처리에 대해서는 처음엔 놓쳤지만, 테스트 과정에서 그 중요성을 인식하고 개선의 필요성을 알게 되었습니다.",
          ],
        },
        {
          title: "상태 관리",
          content: [
            "기본적인 단계를 관리하면서 상태 관리 방법에 대해 깊이 고민했고, 별도의 라이브러리를 도입하기보다 React의 기본 기능으로 해결하는 것이 적절하다고 판단했습니다.",
          ],
        },
        {
          title: "UX/UI",
          content: [
            "모바일 화면에서 인디케이터처럼 최상단·최하단을 차지하는 요소와 가변적인 콘텐츠 높이를 다양한 환경에서 테스트하며, 사용자의 만족도를 높이고자 노력했습니다.",
            "OS별 웹뷰 대응 방식의 차이를 경험하며 앱의 특성과 웹뷰 동작에 대한 이해도를 높였고, 이를 통해 앱 개발자들과의 소통 능력도 향상시켰습니다.",
          ],
          img: [
            "/img/propensity/propensity_1.png",
            "/img/propensity/propensity_2.png",
            "/img/propensity/propensity_3.png",
            "/img/propensity/propensity_4.png",
            "/img/propensity/propensity_5.png",
            "/img/propensity/propensity_6.png",
            "/img/propensity/propensity_7.png",
            "/img/propensity/propensity_8.png",
            "/img/propensity/propensity_9.png",
            "/img/propensity/propensity_10.png",
          ],
        },
        {
          title: "성향분석 개편 작업 (일부 서비스 적용)",
          content: [
            "투알고와 AI Advisor 서비스에 성향분석 신규 디자인을 우선 적용했습니다.",
            "앱에서는 기존 디자인이 유지되고 있어, 환경별 차이를 고려하여 작업을 진행했습니다.",
            "일부 서비스에만 적용되는 구조를 반영하기 위해 컴포넌트 재사용성과 조건부 렌더링 방식을 활용했습니다.",
          ],
          img: [
            "/img/toalgo/toalgo_11.png",
            "/img/toalgo/toalgo_12.png",
            "/img/toalgo/toalgo_13.png",
            "/img/toalgo/toalgo_14.png",
            "/img/toalgo/toalgo_15.png",
            "/img/toalgo/toalgo_16.png",
            "/img/toalgo/toalgo_17.png",
            "/img/toalgo/toalgo_18.png",
            "/img/toalgo/toalgo_19.png",
            "/img/toalgo/toalgo_20.png",
          ],
        },
      ],
    },
  ],
  preview: {
    link: "https://app.quantec.co.kr/propensity?uid=1100001723",
    content: [
      "https://play.google.com/store/apps/details?id=com.quantec.im&hl=en&gl=KR",
      "https://apps.apple.com/kr/app/%EC%BD%B4%ED%85%8D-%EB%AF%B8%EB%9E%98%EB%A5%BC-%EB%B0%94%EA%BE%B8%EB%8A%94-ai%EC%9E%90%EB%8F%99%ED%88%AC%EC%9E%90/id1622337971",
    ],
  },
};
