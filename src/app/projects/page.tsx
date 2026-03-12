'use client';

import { useState } from "react";
import { projects } from "@/app/data/projects";
import ProjectCard from "@/app/components/FeaturedProjects/ProjectCard";
import styles from "./projectsPage.module.css";

const filters = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "service" },
  { label: "UX / UI", value: "ux" },
  { label: "Data Visualization", value: "visualization" },
  { label: "Platform", value: "platform" },
  { label: "Backend", value: "backend" }
]

export default function ProjectsPage() {

  const [activeFilter, setActiveFilter] = useState("all")

  const projectList = Object.values(projects).sort((a, b) => Number(b.featured) - Number(a.featured))

  const filteredProjects =
    activeFilter === "all"
      ? projectList
      : projectList.filter((p) => p.type === activeFilter)

  return (

    <main className={styles.wrapper}>

      <div className={styles.container}>

        <h1 className={styles.title}>
          Projects
        </h1>

        <p className={styles.description}>
          데이터 기반 서비스 UX 개선과 데이터 시각화 프로젝트를 중심으로
          진행한 작업입니다.
          <br />
          모든 프로젝트는 본인이 직접 설계·구현한 작업만 수록했습니다.
        </p>

        {/* 필터 */}
        <div className={styles.filterWrap}>
          {filters.map((f) => (
            <button
              key={f.value}
              className={`${styles.filterBtn} ${activeFilter === f.value ? styles.active : ""
                }`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 프로젝트 리스트 */}
        <div className={styles.grid}>

          {filteredProjects.map((project) => (

            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              summary={project.summary}
              tech={project.tech}
              role={project.role}
            />

          ))}

        </div>

      </div>

    </main>

  )
}