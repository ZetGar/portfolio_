import React from "react";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className={styles.page}>
      <div>
        <div className={styles.profile}>
          <div className={styles.img}></div>
          <div className={styles.name}>
            <h2>KIM SONG I</h2>
            <p>김송이 · Frontend Developer</p>
          </div>
          <div className={styles.link}>
            <a href="mailto:awesde10@gmail.com">Email</a>
            <a href="https://github.com/ZetGar">Github</a>
          </div>
        </div>

        <div className={styles.skillWrap}>
          <h4>SKILL</h4>
          <div className={styles.skillBox}>
            <div className={styles.chip}>Next.js</div>
            <div className={styles.chip}>React</div>
            <div className={styles.chip}>javascript</div>
            <div className={styles.chip}>HTML</div>
            <div className={styles.chip}>CSS</div>
            <div className={styles.chip}>Tailwind</div>
            <div className={styles.chip}>Java</div>
            <div className={styles.chip}>Node.js</div>
          </div>
        </div>
      </div>
    </div>
  );
}
