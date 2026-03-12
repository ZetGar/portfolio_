'use client';

import { useEffect, useState } from "react";
import styles from "./hero.module.css";

export default function Hero() {

  const fullText = `데이터 기반 서비스의 UX를 설계하는 \n프론트엔드 개발자 김송이입니다.`;

  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [hideScroll, setHideScroll] = useState(false);

  useEffect(() => {

    setMounted(true);

    const isMobile = window.innerWidth < 768;

    if (isMobile) {

      setText(fullText);
      setShowCursor(false);

      setTimeout(() => {
        setShowContent(true);
      }, 50);

      return;

    }

    let index = 0;

    setShowCursor(true);

    const typing = setInterval(() => {

      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {

        clearInterval(typing);

        setTimeout(() => {
          setShowCursor(false);
          setShowContent(true);
        }, 800);

      }

    }, 35);

    return () => clearInterval(typing);

  }, []);

  useEffect(() => {

    const handleScroll = () => {
      setHideScroll(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <section
      id="hero"
      className={styles.hero}
      style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.3s ease" }}
    >

      <div className={styles.floatingOrb} />

      <div className={styles.heroContainer}>

        <div>

          <p className={styles.heroRole}>
            Frontend Developer
          </p>

          <h1 className={styles.heroTitle}>
            {text}
            {showCursor && <span className={styles.cursor}>|</span>}
          </h1>

          <p
            className={`${styles.heroDescription} ${styles.fadeBase} ${showContent ? styles.fadeIn : ""}`}
          >
            4년+ 금융 서비스 프론트엔드 개발 경험
            <br />
            대규모 데이터 UI와 데이터 시각화를 통해 사용자 경험을 설계합니다.
          </p>

          <div
            className={`${styles.heroTech} ${styles.fadeBase} ${showContent ? styles.fadeInDelay : ""}`}
          >
            <span className={styles.techChip}>React</span>
            <span className={styles.techChip}>Next.js</span>
            <span className={styles.techChip}>TypeScript</span>
            <span className={styles.techChip}>Highcharts</span>
            <span className={styles.techChip}>Chart.js</span>
          </div>

          <div
            className={`${styles.heroTech} ${styles.fadeBase} ${showContent ? styles.fadeInDelay : ""}`}
          >
            <a href="#projects" className={styles.primaryBtn}>
              View Projects
            </a>

            <a
              href="https://github.com/ZetGar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Github
            </a>

            <a
              href="https://www.notion.so/UX-2696ec8445fb80f682b4d4567609b54f"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Notion
            </a>

          </div>

        </div>

        <div
          className={`${styles.scrollIndicator} ${hideScroll ? styles.scrollHide : ""}`}
        >
          <span>Scroll</span>
          <div className={styles.scrollMouse}></div>
        </div>

      </div>

    </section>
  );
}