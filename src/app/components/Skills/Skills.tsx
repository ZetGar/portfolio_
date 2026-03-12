'use client';

import styles from "./skills.module.css";
import useScrollReveal from "@/app/shared/useScrollReveal";

export default function Skills() {

  const ref = useScrollReveal<HTMLDivElement>();

  const skills = [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "State Management",
      items: ["Redux", "Recoil", "Zustand", "Context API"]
    },
    {
      title: "Visualization",
      items: ["Highcharts", "Chart.js", "Lottie"]
    },
    {
      title: "Styling",
      items: ["CSS Module", "styled-components", "SCSS", "TailwindCSS", "MUI"]
    },
    {
      title: "Backend Experience",
      items: ["Spring Framework", "Spring Boot", "WebSocket", "STOMP", "JWT", "Maven", "Node.js"]
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Figma", "Notion", "Jira"]
    }
  ];

  return (

    <section id="skills" className={styles.skills}>

      <div className={styles.container}>

        <h2 className={styles.sectionTitle}>
          Skills
        </h2>

        <div className={styles.skillsGrid} ref={ref}>

          {skills.map((group, i) => (

            <div key={group.title} className={styles.skillCard} style={{ '--i': i } as React.CSSProperties}>

              <h3>{group.title}</h3>

              <div className={styles.skillList}>

                {group.items.map((skill) => (
                  <span key={skill} className={styles.skillChip}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}