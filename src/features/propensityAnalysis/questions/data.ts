import { QuestionData } from "./type";

export const questions: QuestionData[] = [
  {
    id: 1,
    question: "주식 또는 ETF 거래 경험이 있으신가요?",
    options: [
      { label: "예", value: 2, resultLabel: "주식 및 ETF 거래경험 있음" },
      { label: "아니오", value: 1, resultLabel: "주식 및 ETF 거래경험 없음" },
    ],
    type: "binary",
  },
  {
    id: 2,
    question: "주식 또는 ETF의 구조와 위험을 얼만큼 이해하고 계신가요?",
    options: [
      { label: "거의 이해하지 못함", value: 1 },
      { label: "조금 이해하고 있음", value: 2 },
      { label: "어느정도 이해하고 있음", value: 3 },
      { label: "꽤 이해하고 있음", value: 4 },
      { label: "전부 이해하고 있음", value: 5 },
    ],
    scaleLabels: ["전혀 모름", "전부 이해"],
    type: "scale",
  },
  {
    id: 3,
    question: "향후 연간 수입원은 어떻게 변할 것 같나요?",
    options: [
      { label: "많이 감소 예정", value: 1 },
      { label: "약간 감소 예정", value: 2 },
      { label: "변화 없음", value: 3 },
      { label: "약간 증가 예정", value: 4 },
      { label: "많이 증가 예정", value: 5 },
    ],
    scaleLabels: ["많이 감소한다", "많이 증가한다"],
    type: "scale",
  },
];
