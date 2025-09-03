"use client";

import { useState } from "react";
import { QuestionData } from "./type";
import styles from "./Question.module.css";

interface Props {
  question: QuestionData;
  onAnswer: (value: number) => void; // 점수 전달
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function Question({ question, onAnswer, setStep }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (index: number) => {
    const option = question.options[index];
    setSelected(index);
    onAnswer(option.value);
  };

  return (
    <div className={styles.questionText}>
      <div className={styles.title}>
        <button onClick={() => setStep((prev) => prev - 1)}>&lt;</button>{" "}
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
