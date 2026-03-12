'use client'

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "./scrollProgress.module.css"

export default function ScrollProgress() {

  const pathname = usePathname()
  const [progress, setProgress] = useState(0)

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const scrolled = (scrollTop / height) * 100

      setProgress(scrolled)

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  // hooks 실행 후 조건 렌더링
  if (pathname !== "/") return null

  return (
    <div
      className={styles.progress}
      style={{ width: `${progress}%` }}
    />
  )
}