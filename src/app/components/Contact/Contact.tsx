'use client';

import styles from "./contact.module.css";
import useScrollReveal from "@/app/shared/useScrollReveal";

export default function Contact() {

  const ref = useScrollReveal();

  return (

    <section id="contact" ref={ref} className={`${styles.contact} reveal`}>

      <div className={styles.container}>

        <h2 className={styles.sectionTitle}>
          Contact
        </h2>

        <p className={styles.description}>
          새로운 프로젝트나 협업 기회에 항상 열려 있습니다.
          편하게 연락 주세요.
        </p>

        <div className={styles.contactLinks}>

          <a
            href="mailto:awesde10@gmail.com"
            className={styles.contactBtn}
          >
            Email
          </a>

          <a
            href="https://github.com/ZetGar"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            Github
          </a>

          <a
            href="https://infrequent-brisket-417.notion.site/UX-2696ec8445fb80f682b4d4567609b54f?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            Notion
          </a>

        </div>

      </div>

    </section>

  );
}