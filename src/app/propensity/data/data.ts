export const data = {
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
      actions: [{ label: "처음부터 분석하기" }, { label: "이전 결과 보기" }],
    },
  ],
  preview: {
    link: "https://dapp.quantec.co.kr/propensity/?uid=1100000409",
    content: [
      "https://play.google.com/store/apps/details?id=com.quantec.im&hl=en&gl=KR",
      "https://apps.apple.com/kr/app/%EC%BD%B4%ED%85%8D-%EB%AF%B8%EB%9E%98%EB%A5%BC-%EB%B0%94%EA%BE%B8%EB%8A%94-ai%EC%9E%90%EB%8F%99%ED%88%AC%EC%9E%90/id1622337971",
    ],
  },
};
