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
          데이터 중심 서비스에서 발생하는 UX 문제를 해결하고
          대규모 데이터 UI와 데이터 시각화 경험을 통해
          실제 서비스 환경에서의 사용자 경험을 개선했습니다.
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