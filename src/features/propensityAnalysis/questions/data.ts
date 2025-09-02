export interface QuestionData {
  id: number;
  text: string;
  options: string[];
  type: "binary" | "scale";
}

export const questions: QuestionData[] = [
  {
    id: 1,
    text: "주식 또는 ETF 거래 경험이 있으신가요??",
    options: ["예", "아니오"],
    type: "binary",
  },
  {
    id: 2,
    text: "5단계 중 선택하세요_1",
    options: ["1", "2", "3", "4", "5"],
    type: "scale",
  },
  {
    id: 3,
    text: "5단계 중 선택하세요_2",
    options: ["1", "2", "3", "4", "5"],
    type: "scale",
  },
];

export const resultTextMap: string[][] = [
  [
    "주식 및 ETF 거래경험 있음",
    "주식 및 ETF 거래경험 없음",
  ],
  [
    "전부 이해하고 있음",
    "조금 이해하고 있음",
    "보통",
    "조금 부족함",
    "많이 부족함",
  ],
  [
    "많이 증가 예정",
    "증가 예정",
    "보통",
    "감소 예정",
    "많이 감소 예정",
  ],
];
