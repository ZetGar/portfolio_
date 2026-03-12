"use client";

import { useEffect, useState } from "react";
import styles from "../layout.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  const pathname = usePathname();

  const sections = ["strengths", "projects", "backend", "skills", "contact"];

  // section link 생성
  const getLink = (id: string) => {
    return pathname === "/" ? `#${id}` : `/#${id}`;
  };

  useEffect(() => {

    // 메인 페이지가 아니면 scroll spy 비활성화
    if (pathname !== "/") return;

    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

      let current = "";

      sections.forEach((id) => {

        const section = document.getElementById(id);

        if (section) {

          const rect = section.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
          }

        }

      });

      // 페이지 맨 아래면 contact로 강제 변경
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        current = "contact";
      }

      setActive(current);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, [pathname]);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`${styles.appTop} ${scrolled ? styles.scrolled : ""}`}>

      <div className={styles.navInner}>

        <Link className={styles.logo} href="/">
          SONGI KIM
        </Link>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>

          <a
            href={getLink("strengths")}
            className={active === "strengths" ? styles.activeMenu : ""}
            onClick={handleCloseMenu}
          >
            About
          </a>

          <a
            href={getLink("projects")}
            className={active === "projects" ? styles.activeMenu : ""}
            onClick={handleCloseMenu}
          >
            Projects
          </a>

          <a
            href={getLink("backend")}
            className={active === "backend" ? styles.activeMenu : ""}
            onClick={handleCloseMenu}
          >
            Backend
          </a>

          <a
            href={getLink("skills")}
            className={active === "skills" ? styles.activeMenu : ""}
            onClick={handleCloseMenu}
          >
            Skills
          </a>

          <a
            href={getLink("contact")}
            className={active === "contact" ? styles.activeMenu : ""}
            onClick={handleCloseMenu}
          >
            Contact
          </a>

          <a
            href="https://github.com/ZetGar"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCloseMenu}
          >
            Github
          </a>

          <ThemeToggle />

        </nav>

      </div>

    </div>
  );
}