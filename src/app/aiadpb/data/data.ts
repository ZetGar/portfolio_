export const data = {
  title: "AI Advisor PB",
  description: [
    {
      title: "PROJECT",
      content: [
        {
          title: "관리현황 조회",
          content: [
            "데이터 불일치로 인한 PB 문의기 급증하여 개발팀에서 역으로 제안했습니다. 관리 현황 조회 및 관리자 번호가 해당 증권사와 일치하지 않아 수동으로 관리자 번호를 부여하도록 만들었습니다.",
            "이로 인해 고객 문의 건수 90% 감소, 업무 효율성이 대폭 향상했습니다.",
          ],
          img: [
            "/img/management/regCusList_1.png",
            "/img/management/regCusList_2.png",
            "/img/management/regCusList_3.png",
            "/img/management/regCusList_4.png",
            "/img/management/regCusList_5.png",
            "/img/management/regCusList_6.png",
            "/img/management/regCusList_7.png",
          ],
        },
        {
          title: "관심종목진단",
          content: [
            "기존 투자자산진단은 현재 투자 중인 자산으로만 한정되어 있었으나, 신규 서비스 기능을 추가하여 고객 참여도를 높였습니다.",
            "기능 오픈 후, 일평균 PB 상담 건수가 15건 증가하고 사용자 체류 시간도 15% 증가하는 성과를 달성했습니다(Airbridge 분석 기준).",
          ],
                    img: [
            "/img/pb/interest/pb_1.png",
            "/img/pb/interest/pb_2.png",
            "/img/pb/interest/pb_3.png",
            "/img/pb/interest/pb_4.png",
            "/img/pb/interest/pb_5.png",
            "/img/pb/interest/pb_6.png",
            "/img/pb/interest/pb_7.png",
          ],
        },
        {
          title: "메인 홈",
          content: [
            "PB들의 관리를 위한 메인페이지로, 데이터 로딩 속도 차이를 고려하여 Skeleton 로딩을 적용했습니다.",
            "기존에 작성된 SmartIndex 투자날씨 컴포넌트를 재사용하고, 컴포넌트화가 가능한 부분은 별도 컴포넌트로 작성하여 개발 효율성과 코드 재사용성을 높였습니다.",
          ],
          img: [
            "/img/pb/home/pb_1.png",
            "/img/pb/home/pb_2.png",
            "/img/pb/home/pb_3.png",
            "/img/pb/home/pb_4.png",
          ],
        },
        {
          title: "전략마켓",
          content: [
            "회사에서 제공하는 전략을 ‘추천 전략’과 ‘전체 보기’로 나누어, 리스트와 상세 내역을 확인할 수 있는 화면을 구현했습니다.",
            "로딩 속도 차이를 고려하여 Fullscreen 로딩과 Skeleton 로딩을 혼합해 사용자 편의성을 높이는 UX를 구현했으며, 이 로딩 컴포넌트는 재사용 가능하게 설계하여 코드 재사용성과 유지보수 측면에서도 안정성을 강화했습니다.",
          ],
          img: [
            "/img/pb/market/pb_1.png",
            "/img/pb/market/pb_2.png",
            "/img/pb/market/pb_3.png",
          ],
        },
      ],
    },
  ],
};
