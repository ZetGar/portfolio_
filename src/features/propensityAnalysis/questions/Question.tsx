"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QuestionData } from "./type";
import styles from "./Question.module.css";

interface Props {
  question: QuestionData;
  onAnswer: (value: number) => void; // 점수 전달
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function Question({ question, onAnswer, step, setStep }: Props) {
  const router = useRouter();
  const [selected, setSelected] = useState<number | null>(null);

  const handlePrev = () => {
    if (step === 0) {
      router.push("/propensity"); // step이 0일 때 /propensity로 이동
    } else {
      setStep((prev) => prev - 1); // 그 외에는 step 감소
    }
  };

  const handleClick = (index: number) => {
    const option = question.options[index];
    setSelected(index);
    onAnswer(option.value);
  };

  return (
    <div className={styles.questionText}>
      <div className={styles.title}>
        <button
          onClick={() => {
            handlePrev()
          }}
        >
          &lt;
        </button>{" "}
        <h4>질문 {question.id} :</h4>
        <h2>{question.question}</h2>
      </div>

      <div className={styles.buttonWrap}>
        <div
          className={question.type === "binary" ? styles.binary : styles.scale}
        >
          {question.options.map((option, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded border ${
                selected === idx ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
              onClick={() => handleClick(idx)}
            >
              {question.type === "binary" ? option.label : null}
            </button>
          ))}
        </div>

        {question.type === "scale" && question.scaleLabels && (
          <div className={styles.auxiliaryText}>
            <span>{question.scaleLabels[0]}</span>
            <span>{question.scaleLabels[1]}</span>
          </div>
        )}
      </div>
    </div>
  );
}
