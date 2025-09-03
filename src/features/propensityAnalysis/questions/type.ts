export interface QuestionData {
  id: number;
  question: string;
  options: QuestionOption[];
  scaleLabels?: string[];
  type: "binary" | "scale";
}

export interface QuestionOption {
  label: string;
  value: number;
  resultLabel?: string;
}
