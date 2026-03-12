import styles from "./page.module.css";

import Hero from "./components/Hero/Hero";
import CoreStrengths from "./components/CoreStrengths/CoreStrengths";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
import BackendExperience from "./components/BackendExperience/BackendExperience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <div className={styles.indexWrap}>
      <Hero />

      <CoreStrengths />

      <FeaturedProjects />

      <BackendExperience />

      <Skills />

      <Contact />
    </div>
  );
}

