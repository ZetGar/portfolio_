import React from "react";
import styles from "../propensity/page.module.css";
import { data } from "./data/data";

export default function page() {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h2>{data.title}</h2>
      </div>
    </div>
  );
}
