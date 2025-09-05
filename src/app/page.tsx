import Link from "next/link";
import { about, career, profile } from "./data/data";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.indexWrap}>
      <div>
        <div className={styles.profile}>
          <div>
            <h1>{profile.name}</h1>
            <h4>{profile.job}</h4>
          </div>
          <p>{profile.introduction}</p>
        </div>

        <div className={styles.about}>
          <h3>{about.title}</h3>
          <div>
            {about.content.map((aboutText, index) => {
              return <p key={`aboutText_${index}`}>{aboutText}</p>;
            })}
          </div>
        </div>

        <div className={styles.experience}>
          <h3>EXPERIENCE</h3>
          <div>
            {career.map((career, index) => {
              return (
                <div className={styles.careerBox} key={`carrer_${index}`}>
                  <p className={styles.careerDate}>{career.type}</p>

                  <div className={styles.projectBox} key={`carrer_${index}`}>
                    <Link href={`${career.contents.link}`}>
                      {career.contents.title}
                      <svg
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 0.5H5V4.5"
                          stroke="white"
                          stroke-linecap="round"
                        />
                        <path
                          d="M5 0.5L0.5 5"
                          stroke="white"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Link>

                    <p>{career.contents.explanation}</p>
                    <div className={styles.tabWrap}>
                      {career.contents.tag.map((tag, index) => (
                        <div key={`tag_${index}`}>{tag}</div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.footer}>
          <p>
            <a href="http://www.figma.com/">Figma</a>에서 자유롭게 디자인하고{" "}
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>로
            코딩합니다. <a href="https://nextjs.org/">Next.js</a>의{" "}
            <a href="https://tailwindcss.com/">Tailwind CSS</a> 와{" "}
            <a href="https://styled-components.com/">Styled-Component</a>, CSS
            로 개발하고
            <a href="https://www.netlify.com/">Netlify</a>를 사용하여
            배포했습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
