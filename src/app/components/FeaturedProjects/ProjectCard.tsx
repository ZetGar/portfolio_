'use client';

import Link from "next/link";
import styles from "./projects.module.css";

type Props = {
  title: string;
  summary: string;
  tech: string[];
  slug: string;
  index?: number;
  role?: string;
};

export default function ProjectCard({
  title,
  summary,
  tech,
  slug,
  index = 0,
  role = "Frontend"
}: Props) {

  // Fullstack은 slug 해시로 결정 (일관된 결과)
  const isBackend = role === "Backend"
    || (role === "Fullstack" && slug.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 2 === 0);

  const firstName = title.split(' ')[0].replace(/[^a-zA-Z가-힣]/g, '');

  return (

    <Link href={`/projects/${slug}`} className={styles.projectCard} style={{ '--i': index } as React.CSSProperties}>

      <div className={styles.cardContent}>

        <div className={styles.codePlaceholder}>
          <div className={styles.codeHeader}>
            <span className={styles.codeDot} />
            <span className={styles.codeDot} />
            <span className={styles.codeDot} />
          </div>
          <div className={styles.codeBody}>
            {isBackend ? (
              <>
                <span className={styles.codeLine}><span className={styles.codeKeyword}>class</span> {firstName} {'{'}</span>
                <span className={styles.codeLine}>  <span className={styles.codeComment}>// {tech.slice(0, 3).join(' · ')}</span></span>
                <span className={styles.codeLine}>  <span className={styles.codeKeyword}>build</span>() → <span className={styles.codeString}>success</span></span>
                <span className={styles.codeLine}>{'}'}</span>
              </>
            ) : (
              <>
                <span className={styles.codeLine}><span className={styles.codeKeyword}>export default</span> <span className={styles.codeFunc}>function</span> App() {'{'}</span>
                <span className={styles.codeLine}>  <span className={styles.codeComment}>// {tech.slice(0, 3).join(' · ')}</span></span>
                <span className={styles.codeLine}>  <span className={styles.codeKeyword}>return</span> {'<'}<span className={styles.codeTag}>{firstName}</span> /{'>'}</span>
                <span className={styles.codeLine}>{'}'}</span>
              </>
            )}
          </div>
        </div>

        <h3 className={styles.projectTitle}>
          {title}
        </h3>

        <p className={styles.projectSummary}>
          {summary}
        </p>

        <div className={styles.projectTech}>
          {tech.map((t) => (
            <span key={t} className={styles.techChip}>
              {t}
            </span>
          ))}
        </div>

      </div>

      <div className={styles.cardHover}>
        <span>View Details →</span>
      </div>

    </Link>

  );
}