"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/app/shared/widgets/Modal";

import { questions } from "../questions/data";
import { InvestmentType } from "./type";
import { calculatePropensity } from "./data";
import styles from "./Result.module.css";

interface ResultProps {
  step: number; // 4: 중간 결과, 5: 최종
  answers: number[]; // 각 질문에 대한 점수
  onAgree?: () => void;
  onRestart: () => void;
}

export default function Result({
  step,
  answers,
  onAgree,
  onRestart,
}: ResultProps) {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // 점수 기반으로 투자 성향 계산
  const resultType: InvestmentType = calculatePropensity(answers);

  const displayAnswers: string[] = answers.map((score, qIdx) => {
    const question = questions[qIdx];
    const optionIndex = question.options.findIndex(
      (opt) => opt.value === score
    );
    return (
      question.options[optionIndex]?.resultLabel ??
      question.options[optionIndex]?.label ??
      ""
    );
  });

  // 최종 결과(step 5)에서 로컬스토리지 저장
  useEffect(() => {
    if (step === 5) {
      localStorage.setItem("propensity_result", JSON.stringify(answers));
    }
  }, [step, answers]);

  // 결과 보기 버튼 클릭
  const handleResultClick = () => {
    if (!agreed) return setShowModal(true);
    onAgree?.();
  };

  // 확인 버튼 클릭
  const handleConfirmClick = () => {
    router.push("/propensity");
  };

  // 버튼 스타일
  const buttonBase = "px-4 py-2 rounded text-white";
  const restartButtonClass = `${buttonBase} bg-gray-500 hover:bg-gray-600`;
  const resultButtonClass = agreed
    ? `${buttonBase} bg-blue-500 hover:bg-blue-600`
    : `${buttonBase} bg-gray-300`;
  const confirmButtonClass = `${buttonBase} bg-green-500 hover:bg-green-600`;

  return (
    <div className={styles.resultWrap}>
      {/* 상단 내용 */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">
          {step === 4 ? "성향 분석 결과 확인" : "최종 결과"}
        </h2>

        <p>사용자 성향값 : {resultType}</p>

        <p>사용자 선택값:</p>
        <ul className="list-disc pl-5">
          {displayAnswers.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>

        {step === 4 && (
          <label className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            동의합니다
          </label>
        )}
      </div>

      {/* 버튼 영역 */}
      <div className={styles.buttonWrap}>
        <button className={restartButtonClass} onClick={onRestart}>
          성향 분석 재분석
        </button>

        {step === 4 && (
          <button className={resultButtonClass} onClick={handleResultClick}>
            결과 보기
          </button>
        )}

        {step === 5 && (
          <button className={confirmButtonClass} onClick={handleConfirmClick}>
            확인
          </button>
        )}
      </div>

      {/* 모달 */}
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          buttons={[
            {
              label: "확인",
              onClick: () => setShowModal(false),
              type: "primary",
            },
          ]}
        >
          동의 체크를 해주세요.
        </Modal>
      )}
    </div>
  );
}
