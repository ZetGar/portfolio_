import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.indexWrap}>
      {/* <h1>INDEX</h1>
      <div>
        <a href="/propensity">성향분석</a>
        <a href="/kbaccount">KB계좌개설</a>
        <a href="/smartIndex">투자온도계</a>
      </div> */}
      <div>
        <div className={styles.profile}>
          <div>
            <h1>Kim Song i</h1>
            <h4>Frontend Developer</h4>
          </div>
          <p>
            안녕하세요. <br />
            UX를 개선하고 구현하며, 서비스 전반에서 재사용이 가능하고
            <br /> 유지보수가 쉬운 구조를 만들기 위해 노력하는 개발자
            김송이입니다.
          </p>
        </div>

        <div className={styles.about}>
          <h3>ABOUT</h3>
          <div>
            <p>
              저는 세심한 디자인과 확장성과 성능을 고려한 개발을 조화롭게
              결합해, 픽셀 단위까지 완벽한 사용자 인터페이스를 만드는 데 열정을
              쏟는 개발자입니다.
            </p>
            <p>
              디자인과 개발의 교차점에서, 단순히 보기 좋은 디자인을 넘어 성능과
              사용성을 함께 고려한 경험을 꼼꼼하게 설계합니다.
            </p>
            <p>
              성과 중심으로 프로젝트를 진행하며, WebView 기반 성향 분석 페이지를
              구현하고 개선하여 사용자 경험을 향상시키고 재사용 가능한
              프론트엔드 구조를 구축합니다.
            </p>

            <p>
              또한 다양한 앱과 웹 서비스에서 일관된 UX를 제공하도록 UI 구성
              요소를 개발하고 유지보수하며, 프론트엔드 아키텍처, 상태 관리, 성능
              최적화에도 관심을 가지고 노력합니다.
            </p>
          </div>
        </div>

        <div className={styles.experience}>
          <h3>EXPERIENCE</h3>
          <div>
            <div className={styles.careerBox}>
              <p className={styles.careerDate}>PROJECT</p>
              <div className={styles.projectBox}>
                <h4>
                  <a href="/propensity">AI Advisor PB</a>
                </h4>
                <p>
                  증권사 PB용 웹 어드바이저 시스템을 개발합니다. <br />
                  PB가 고객 포트폴리오를 빠르게 분석하고 투자 전략을 제안할 수
                  있도록 UI/UX 개선과 핵심 기능 코드를 고도화했습니다. <br />팀
                  내 개발자, 디자이너, 기획자와 긴밀히 협업하며 재사용성과
                  유지보수성을 고려해 개발했습니다.
                </p>
                <div className={styles.tabWrap}>
                  <div>Javascript</div>
                  <div>React</div>
                  <div>NextJs</div>
                  <div>HTML 및 CSS</div>
                </div>
              </div>
            </div>

            <div className={styles.careerBox}>
              <p className={styles.careerDate}>PROJECT</p>
              <div className={styles.projectBox}>
                <h4>
                  <a href="/propensity">AI Advisor CS</a>
                </h4>
                <p>
                  증권사 고객용 웹 어드바이저 시스템을 개발합니다. <br />팀 내
                  개발자와 긴밀히 협업하며 재사용성과 유지보수성을 고려해
                  개발했습니다.
                </p>
                <div className={styles.tabWrap}>
                  <div>Javascript</div>
                  <div>React</div>
                  <div>NextJs</div>
                  <div>HTML 및 CSS</div>
                </div>
              </div>
            </div>

            <div className={styles.careerBox}>
              <p className={styles.careerDate}>PROJECT</p>
              <div className={styles.projectBox}>
                <h4>
                  <a href="/kbaccount">KB계좌개설</a>
                </h4>
                <p>
                  앱 내에 들어가는 웹뷰를 개발하고, 유지 관리합니다. <br />
                  앱개발자, 디자이너, 기획자 등 여러 부서와 긴밀히 협력하여
                  작업합니다.
                  <br />
                  사업 확장으로 인해 재사용성을 고려하며 작업되었습니다.
                </p>
                <div className={styles.tabWrap}>
                  <div>Javascript</div>
                  <div>React</div>
                  <div>HTML 및 CSS</div>
                </div>
              </div>
            </div>
            <div className={styles.careerBox}>
              <p className={styles.careerDate}>PROJECT</p>
              <div className={styles.projectBox}>
                <h4>
                  <a href="/propensity">투자 성향분석</a>
                </h4>
                <p>
                  앱 내에 들어가는 웹뷰를 개발하고, 유지 관리합니다. <br />
                  앱개발자, 디자이너, 기획자 등 여러 부서와 긴밀히 협력하여
                  작업합니다.
                  <br />
                  사업 확장으로 인해 재사용성을 고려하며 작업되었습니다.
                </p>
                <div className={styles.tabWrap}>
                  <div>Javascript</div>
                  <div>React</div>
                  <div>NextJs</div>
                  <div>HTML 및 CSS</div>
                </div>
              </div>
            </div>

            <div className={styles.careerBox}>
              <p className={styles.careerDate}>PROJECT</p>
              <div className={styles.projectBox}>
                <h4>
                  <a href="/smartIndex">SMART INDEX · 투자 온도계</a>
                </h4>
                <p>
                  앱 내에 들어가는 웹뷰를 개발하고, 유지 관리합니다. <br />
                  앱개발자, 디자이너, 기획자 등 여러 부서와 긴밀히 협력하여
                  작업합니다.
                  <br />
                  사업 확장으로 인해 재사용성을 고려하며 작업되었습니다.
                </p>
                <div className={styles.tabWrap}>
                  <div>Javascript</div>
                  <div>React</div>
                  <div>HTML 및 CSS</div>
                </div>
              </div>
            </div>

            <div className={styles.careerBox}>
              <p className={styles.careerDate}>MAINTENANCE · IMPROVEMENT</p>
              <div className={styles.projectBox}>
                <h4>
                  <a href="/smartIndex">유지보수</a>
                </h4>
                <p>
                  앱 내에 들어가는 웹뷰를 개발하고, 유지 관리합니다. <br />
                  앱개발자, 디자이너, 기획자 등 여러 부서와 긴밀히 협력하여
                  작업합니다.
                  <br />
                  사업 확장으로 인해 재사용성을 고려하며 작업되었습니다.
                </p>
                <div className={styles.tabWrap}>
                  <div>Javascript</div>
                  <div>React</div>
                  <div>HTML 및 CSS</div>
                </div>
              </div>
            </div>
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
