'use client';

import styles from "./backendExperience.module.css";
import useScrollReveal from "@/app/shared/useScrollReveal";

export default function BackendExperience() {

  const ref = useScrollReveal<HTMLDivElement>();

  const experiences = [
    {
      title: "공통 예외 처리 구조 개선",
      description:
        "@ControllerAdvice 기반 전역 예외 처리 구조를 설계하고, ErrorCode enum 체계(100개+)를 HttpStatus 기준으로 재정비하여 REST API 오류 응답을 표준화했습니다. dynamicMessagePart 기반 동적 메시지 생성과 예외 체이닝 패턴을 적용했습니다.",
      tech: ["Spring MVC", "Java", "Lombok", "Jackson"]
    },
    {
      title: "원격 상담 시스템 — 상담사 주도형 모델",
      description:
        "연구소 제공 코어 라이브러리 위에 상담 채널 관리·인증 흐름·채팅 UI·상태 관리 등 서비스 레이어 전체를 설계·구현했습니다. WebSocket(STOMP) 기반 채팅·화면 공유·오버레이 원격 제어와 JWT 인증을 포함한 End-to-End 플로우를 구축했습니다.",
      tech: ["Spring", "WebSocket", "STOMP", "JWT"]
    },
    {
      title: "SDK 개발환경 정비 및 JDK17/JDK8 구축",
      description:
        "레거시 프레임워크 의존성을 제거하고, SLF4J 2.x + Log4j2 로그 스택을 통합했습니다. Maven 8개 프로파일로 빌드 구조를 체계화하고, JDK17/JDK8 독립 환경과 Hazelcast 기반 로컬 이중화 테스트 환경을 구축했습니다.",
      tech: ["Spring Framework", "Maven", "Log4j2", "Hazelcast"]
    },
    {
      title: "전자인장 시스템 — Maven 멀티 모듈 설계",
      description:
        "Spring Framework(WAR)와 Spring Boot(JAR) 이중 환경에서 공통 비즈니스 로직을 Maven 멀티 모듈(Root→common→boot/legacy)로 통합 관리하는 구조를 설계했습니다. 멀티 DB(MariaDB/Oracle) 지원과 망분리 환경 대응 체계를 구축했습니다.",
      tech: ["Spring Boot", "Maven", "MariaDB", "Oracle"]
    }
  ];

  return (

    <section id="backend" className={styles.backend}>

      <div className={styles.container}>

        <h2 className={styles.sectionTitle}>
          Backend Experience
        </h2>

        <p className={styles.sectionDescription}>
          프론트엔드 개발을 중심으로 하면서도 Spring 기반 서버 구조와
          실시간 통신 시스템 개발 경험을 보유하고 있습니다.
        </p>

        <div className={styles.backendGrid} ref={ref}>
          {experiences.map((exp, i) => (
            <div key={exp.title} className={styles.backendCard} style={{ '--i': i } as React.CSSProperties}>

              <h3>{exp.title}</h3>

              <p>{exp.description}</p>

              <div className={styles.techList}>
                {exp.tech.map((t) => (
                  <span key={t} className={styles.techChip}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}