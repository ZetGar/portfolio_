import React from "react";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className={styles.preview}>
      <iframe src="https://tq.quantec.co.kr/kb_account/?accDivide=1accNo=11111111111" />
    </div>
  );
}
