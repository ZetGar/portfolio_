'use client';

import styles from "./coreStrengths.module.css";
import useScrollReveal from "@/app/shared/useScrollReveal";

export default function CoreStrengths() {

  const ref = useScrollReveal<HTMLDivElement>();

  const strengths = [
    {
      icon: "📊",
      title: "데이터 시각화",
      description:
        "Highcharts / Chart.js 기반 금융 데이터 시각화 경험을 통해 복잡한 데이터를 직관적으로 표현합니다."
    },
    {
      icon: "📋",
      title: "대규모 데이터 UI",
      description:
        "Sticky Table 및 데이터 비교 UI 설계를 통해 대량 데이터 환경에서도 사용성이 높은 인터페이스를 구현합니다."
    },
    {
      icon: "⚡",
      title: "서비스 UX 개선",
      description:
        "멀티 스텝 UX 설계와 WebView 기반 앱 연동 경험을 통해 실제 서비스 UX를 개선합니다."
    },
    {
      icon: "🔌",
      title: "실시간 통신 설계",
      description:
        "WebSocket(STOMP) 기반 채팅·화면 공유·원격 제어를 서버와 클라이언트 양쪽에서 설계·구현한 경험이 있습니다."
    },
    {
      icon: "🛡️",
      title: "API 오류 처리 설계",
      description:
        "@ControllerAdvice 기반 전역 예외 처리와 ErrorCode 체계를 직접 설계하여 API 계약을 서버 관점까지 이해합니다."
    }
  ];

  return (

    <section id="strengths" className={styles.strengths}>

      <div className={styles.container}>

        <h2 className={styles.title}>
          Core Strengths
        </h2>

        <p className={styles.subtitle}>
          데이터 중심 서비스에서 사용자 경험을 개선하기 위한 핵심 역량
        </p>

        <div className={styles.grid} ref={ref}>

          {strengths.map((s, i) => (

            <div key={s.title} className={styles.card} style={{ '--i': i } as React.CSSProperties}>

              <div className={styles.icon}>
                {s.icon}
              </div>

              <h3>{s.title}</h3>

              <p>{s.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}