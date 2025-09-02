"use client";

import Modal from "@/app/shared/widgets/Modal";
import { useState, useEffect } from "react";
import styles from "./Result.module.css";
import { resultTextMap } from "../questions/data";
import { useRouter } from "next/navigation";

interface ResultProps {
  step: number; // 4: 결과1, 5: 최종
  answers: number[];
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

  const displayAnswers = answers.map(
    (answerIdx, qIdx) => resultTextMap[qIdx][answerIdx]
  );

  // 최종 결과(step 5)에서 로컬스토리지 저장
  useEffect(() => {
    if (step === 5) {
      localStorage.setItem("propensity_result", JSON.stringify(answers));
    }
  }, [step, answers]);

  const handleResultClick = () => {
    if (!agreed) return setShowModal(true);
    onAgree?.();
  };

  const handleConfirmClick = () => {
    router.push("/propensity"); // 최종 확인 후 /propensity 이동
  };

  // 버튼 클래스
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
