import React from "react";
import { data } from "./data/data";
import styles from "../propensity/page.module.css";

export default function page() {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h2>{data.title}</h2>
      </div>

      <div className={styles.descriptionWrap}>
        {data.description.map((desc, idx) => (
          <div key={idx} className={styles.description}>
            <p>{desc.title}</p>

            <div className={styles.descriptionTitleWrap}>
              {desc.content.map((c, index) => (
                <div key={`content_${index}`} className={styles.contentWrap}>
                  <p>{c.title}</p>
                  <div>
                    {c.content.map((content, cindex) => (
                      <p key={`cindex_${cindex}`}>· {content}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {data.preview && (
          <div className={styles.description}>
            <p>PREVIEW</p>
            <div>
              <div className={styles.downloadButtonWrap}>
                <a href={data.preview.content[0]}>GooglePlay 다운로드하기</a>
                <a href={data.preview.content[1]}>AppleStore 다운로드하기</a>
              </div>

              <div className={styles.preview}>
                <iframe src={data.preview.link} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    // <div className={styles.preview}>
    //   <iframe src="https://tq.quantec.co.kr/kb_account/?accDivide=1accNo=11111111111" />
    // </div>
  );
}
