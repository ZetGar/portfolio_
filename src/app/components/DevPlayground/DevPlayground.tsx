'use client'

import styles from "./DevPlayground.module.css";
import useScrollReveal from "@/app/shared/useScrollReveal";

const projects = [
  {
    title: "Activity Tracker",
    description:
      "이벤트 데이터를 기반으로 사용자 상태를 계산하고 시각화하는 시스템",
    status: "완료" as const,
    tags: ["Next.js", "TypeScript", "Node.js", "REST API"],
    path: "/activity-tracker",
  },
  {
    title: "Behavior CRM",
    description:
      "유저 행동 데이터를 기반으로 이탈 위험을 감지하고 자동화 액션을 실행하는 CRM 시스템",
    status: "진행중" as const,
    tags: ["Next.js", "TypeScript", "Node.js"],
    path: "/crm-system",
  },
];

const DEV_PLAYGROUND_URL = "https://dev-playground-orcin.vercel.app";

export default function DevPlayground() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="playground" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.labelRow}>
            <span className={styles.icon}>🧪</span>
            <h2 className={styles.label}>Dev Playground</h2>
          </div>
          <p className={styles.desc}>
            개인 학습과 아이디어를 실험하는 공간입니다.
            <br />
            실무 외에도 스스로 설계하고 만들어가는 프로젝트들을 기록합니다.
          </p>
        </div>

        <div className={styles.grid} ref={ref}>
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={`${DEV_PLAYGROUND_URL}${project.path}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <span
                    className={`${styles.badge} ${
                      project.status === "완료"
                        ? styles.badgeDone
                        : styles.badgeWip
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className={styles.cardHover}>View Project →</span>
            </a>
          ))}
        </div>

        <a
          href={DEV_PLAYGROUND_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Dev Playground 전체 보기 →
        </a>
      </div>
    </section>
  );
}