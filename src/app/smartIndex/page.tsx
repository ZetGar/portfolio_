import React from "react";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className={styles.preview}>
      <iframe src="https://smartindex.quantec.co.kr/hnbank" />
    </div>
  );
}
