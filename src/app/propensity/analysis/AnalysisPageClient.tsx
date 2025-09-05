"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { questions } from "@/features/propensityAnalysis/questions/data";
import Question from "@/features/propensityAnalysis/questions/Question";
import Result from "@/features/propensityAnalysis/results/Result";

// import propensityStyles from "../../page.module.css";
import styles from "./analysis.module.css";

export default function AnalysisPageClient() {
  const searchParams = useSearchParams();
  const queryStep = Number(searchParams.get("step") || 0);
  const queryAnswers = searchParams.get("answers")
    ? JSON.parse(searchParams.get("answers")!)
    : [];

  const [step, setStep] = useState(queryStep);
  const [answers, setAnswers] = useState<number[]>(queryAnswers);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[step - 1] = optionIndex;
    setAnswers(newAnswers);

    if (step < 3) setStep(step + 1);
    else setStep(4);
  };

  const handleAgree = () => {
    setStep(5);
    localStorage.setItem("propensity_result", JSON.stringify(answers));
  };

  const handleRestart = () => {
    setAnswers([]);
    setStep(0);
    localStorage.removeItem("propensity_result");
  };

  return (
    <div className={styles.backWidth}>
      <div>
        {/* {step === 0 && (
          <div className={styles.introWrap}>
            <div className={styles.title}>
              <h2>성향 분석 Intro</h2>
              <button onClick={() => setStep(1)}>시작하기</button>
            </div>
          </div>
        )} */}

        {step >= 0 && step <= 2 && (
          <Question
            question={questions[step]}
            onAnswer={handleAnswer}
            step={step}
            setStep={setStep}
          />
        )}

        {(step === 3 || step === 4) && (
          <Result
            step={step}
            answers={answers}
            onAgree={handleAgree}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}
