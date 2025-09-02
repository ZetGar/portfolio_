"use client";

import { useState } from "react";
import { QuestionData } from "./data";
import styles from "./Question.module.css";

interface Props {
  question: QuestionData;
  onAnswer: (optionIndex: number) => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function Question({ question, onAnswer, setStep }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelected(index);
    onAnswer(index);
  };

  return (
    <div className={styles.questionText}>
      <div className={styles.title}>
        <button onClick={() => setStep((prev) => prev - 1)}>&lt;</button>{" "}
        <h4>질문 {question.id} :</h4>
        <h2>{question.text}</h2>
      </div>

      {question.type === "binary" && (
        <div className={styles.binary}>
          {question.options.map((option, idx) => (
            <button
              key={idx}
              //   className={`px-6 py-3 rounded border ${
              //     selected === idx ? "bg-blue-500 text-white" : "bg-gray-100"
              //   }`}
              onClick={() => handleClick(idx)}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {question.type === "scale" && (
        <div className={styles.scale}>
          {question.options.map((option, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded border ${
                selected === idx ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
              onClick={() => handleClick(idx)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
