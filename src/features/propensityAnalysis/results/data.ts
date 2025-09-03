import { InvestmentType } from "./type";

export function calculatePropensity(answers: number[]): InvestmentType {
  const totalScore = answers.reduce((sum, val) => sum + val, 0);

  // 점수 범위: 최소 3 (1+1+1) ~ 최대 12 (2+5+5)
  if (totalScore >= 10) return "공격투자형";
  if (totalScore >= 8) return "적극투자형";
  if (totalScore >= 6) return "위험중립형";
  if (totalScore >= 4) return "안정추구형";
  return "안정형";
}
