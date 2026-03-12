import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";

export const metadata: Metadata = {
  title: "SONGI KIM | Frontend Developer Portfolio",
  description: "데이터 기반 서비스의 UX를 설계하는 프론트엔드 개발자 김송이 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={styles.childrenWrap}>
        <Navbar />
        <ScrollProgress />
        <div>{children}</div>
      </body>
    </html>
  );
}
