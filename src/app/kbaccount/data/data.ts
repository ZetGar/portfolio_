export const data = {
  title: "KB계좌개설 내재화",
  description: [
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
          title: "유지보수 및 고도화 작업",
          content: [
            "KB증권에서 운영 중인 신규 페이지에서 라디오버튼과 체크박스를 공통 컴포넌트로 구현하고, 전체 동의와 개별 input 간 연동 기능까지 고려하여 개발했습니다.",
            "OS별 웹뷰 대응 방식의 차이를 경험하며 앱의 특성과 웹뷰 동작에 대한 이해도를 높였고, 이를 통해 앱 개발자들과의 소통 능력도 향상시켰습니다.",
          ],
          img: [
            "/img/account/account_1.png",
            "/img/account/account_2.png",
            "/img/account/account_3.png",
            "/img/account/account_4.png",
            "/img/account/account_5.png",
            "/img/account/account_6.png",
            "/img/account/account_7.png",
            "/img/account/account_8.png",
            "/img/account/account_9.png",
            "/img/account/account_10.png",
          ],
        },
      ],
    },
  ],
  preview: {
    // link: "https://tq.quantec.co.kr/kb_account/?accDivide=1accNo=11111111111",
    content: [
      "https://play.google.com/store/apps/details?id=com.quantec.im&hl=en&gl=KR",
      "https://apps.apple.com/kr/app/%EC%BD%B4%ED%85%8D-%EB%AF%B8%EB%9E%98%EB%A5%BC-%EB%B0%94%EA%BE%B8%EB%8A%94-ai%EC%9E%90%EB%8F%99%ED%88%AC%EC%9E%90/id1622337971",
    ],
  },
};
