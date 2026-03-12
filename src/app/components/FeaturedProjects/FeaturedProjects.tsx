'use client'

import Link from "next/link"
import { projects } from "@/app/data/projects"
import ProjectCard from "./ProjectCard"
import styles from "./projects.module.css"
import useScrollReveal from "@/app/shared/useScrollReveal"

export default function FeaturedProjects() {

  const ref = useScrollReveal<HTMLDivElement>()

  const featuredProjects = Object.values(projects).filter(
    (p) => p.featured
  )

  return (

    <section id="projects" className={styles.projects}>

      <div className={styles.projectsContainer}>

        <h2 className={styles.sectionTitle}>
          Featured Projects
        </h2>

        <p className={styles.sectionDescription}>
          Sticky 테이블, 데이터 시각화, 다단계 상담 플로우, 실시간 통신까지 —
          금융 서비스의 복잡한 문제를 프론트엔드 설계로 해결한 프로젝트들입니다.
        </p>

        <div className={styles.projectGrid} ref={ref}>

          {featuredProjects.map((project, i) => (

            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              summary={project.summary}
              tech={project.tech}
              index={i}
              role={project.role}
            />

          ))}

        </div>

      </div>

      <div className={styles.moreProjects}>
        <Link href="/projects" className={styles.moreBtn}>
          View All Projects →
        </Link>
      </div>

    </section>

  )
}