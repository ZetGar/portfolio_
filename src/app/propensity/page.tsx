"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import Modal from "../shared/widgets/Modal";
import styles from "./page.module.css";
import Image from "next/image";

export default function PropensityPage() {
  const router = useRouter();
  const [hasResult, setHasResult] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showImage, setShowImage] = useState(false); // ← Lightbox 상태 추가

  useEffect(() => {
    const result = localStorage.getItem("propensity_result");
    setHasResult(!!result);
  }, []);

  if (hasResult === null) return <p>Loading...</p>;

  const handlePreviousResult = () => {
    if (hasResult) {
      const savedAnswers = localStorage.getItem("propensity_result");
      if (savedAnswers) {
        router.push(
          `/propensity/analysis?step=5&answers=${encodeURIComponent(
            savedAnswers
          )}`
        );
      }
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className={styles.propensityAccess}>
      <div className={styles.title}>
        <h2>성향 분석</h2>
        <p>
          나의 성향을 간단한 설문을 통해 분석하고
          <br />
          결과를 시각적으로 확인할 수 있습니다.
        </p>
        <p>
          이전에 분석한 기록이 있다면 바로 결과를 확인하고,
          <br />
          새로운 분석도 시작할 수 있습니다.
        </p>
      </div>

      <div className={styles.buttonWrap}>
        <button onClick={() => router.push("/propensity/analysis")}>
          처음부터 분석하기
        </button>

        <button onClick={handlePreviousResult}>이전 결과 보기</button>
      </div>

      <div className={styles.architectureImage}>
        <Image
          src="/img/propensity_architecture_col.png"
          alt="성향 분석 아키텍처"
          width={600}
          height={700}
          className={styles.architectureImage}
          onClick={() => setShowImage(true)}
          style={{ width: "100%", height: "100%", cursor: "pointer" }}
        />
      </div>

      {showImage && (
        <Lightbox
          open={showImage}
          close={() => setShowImage(false)}
          slides={[{ src: "/img/propensity_architecture_col.png" }]}
          plugins={[Zoom]}
          render={{
            // 이전/다음 버튼 숨기기
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
        />
      )}

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          buttons={[
            {
              label: "확인",
              onClick: () => router.push("/propensity/analysis"),
              type: "primary",
            },
          ]}
        >
          이전 결과가 없습니다.
          <br />
          처음부터 성향 분석을 진행합니다.
        </Modal>
      )}
    </div>
  );
}
