'use client';

import { projects } from "@/app/data/projects"
import styles from "./projectDetail.module.css"
import Image from "next/image"
import Link from "next/link"
import { use, useState } from "react"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default function ProjectDetail({ params }: Props) {

  const { slug } = use(params)

  const project = Object.values(projects).find(
    (p) => p.slug === slug
  )

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images)
    setLightboxIndex(index)
  }

  if (!project) {
    return (
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>프로젝트를 찾을 수 없습니다</h1>
          <Link href="/projects" className={styles.backBtn}>← 프로젝트 목록으로</Link>
        </div>
      </main>
    )
  }

  return (

    <main className={styles.wrapper}>

      <div className={styles.container}>

        <Link href="/projects" className={styles.backBtn}>
          ← 프로젝트 목록
        </Link>

        {/* Title */}
        <h1 className={styles.title}>
          {project.title}
        </h1>

        {/* Summary */}
        <p className={styles.summary}>
          {project.summary}
        </p>

        {/* Meta */}
        <div className={styles.metaWrap}>

          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <div className={styles.techWrap}>
              <span className={styles.techChip}>{project.role}</span>
            </div>
          </div>

          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Tech</span>
            <div className={styles.techWrap}>
              {project.tech.map((t) => (
                <span key={t} className={styles.techChip}>
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ===== CAR: Challenge / Approach / Result ===== */}
        <div className={styles.carGrid}>

          {/* Challenge */}
          <div className={`${styles.carBlock} ${styles.challenge}`}>
            <div className={styles.carLabel}>Challenge — 어떤 과제였는가</div>
            <p>{project.problem}</p>
          </div>

          {/* Approach */}
          <div className={`${styles.carBlock} ${styles.approach}`}>
            <div className={styles.carLabel}>Approach — 어떻게 해결했는가</div>
            <p>{project.solution}</p>

            {/* Key Contributions as list */}
            {project.keyContributions && project.keyContributions.length > 0 && (
              <ul style={{ marginTop: 16 }}>
                {project.keyContributions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Result */}
          <div className={`${styles.carBlock} ${styles.result}`}>
            <div className={styles.carLabel}>Result — 어떤 성과가 있었는가</div>
            <p>{project.impact}</p>
          </div>

        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className={styles.gallerySection}>
            <h3>Gallery</h3>

            {project.gallery.map((section, sIdx) => (
              <div key={sIdx} className={styles.galleryGroup}>

                <h4 className={styles.galleryTitle}>{section.title}</h4>
                <p className={styles.galleryDesc}>{section.description}</p>

                <div className={styles.galleryGrid}>
                  {section.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      className={styles.galleryThumb}
                      onClick={() => openLightbox(section.images, imgIdx)}
                    >
                      <Image
                        src={img}
                        alt={`${section.title} ${imgIdx + 1}`}
                        width={200}
                        height={200}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </section>
        )}

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <Lightbox
            open={true}
            close={() => setLightboxIndex(null)}
            index={lightboxIndex}
            slides={lightboxImages.map((img) => ({ src: img }))}
            plugins={[Zoom]}
          />
        )}

        {/* Notion Link */}
        {project.notion && (
          <a
            href={project.notion}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.notionBtn}
          >
            View Detailed Documentation →
          </a>
        )}

      </div>

    </main>
  )
}