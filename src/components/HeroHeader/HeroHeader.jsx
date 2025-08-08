import styles from "./HeroHeader.module.css";
import arthurJustinoSVG from "../../assets/arthurjustino.svg";
import workSVG from "../../assets/work.svg";
import linkSVG from "../../assets/link.svg";

function HeroHeader() {
  return (
    <>
      <header>
        <div className={styles.container}>
          <img
            className={styles.logo}
            src={arthurJustinoSVG}
            alt="Arthur Justino"
          />
          <div className={styles.headerPart}>
            <div className={styles.work}>
              <img src={workSVG} alt="Profissão" />
              <h2>DESENVOLVEDOR FRONT-END</h2>
            </div>
            <nav className={styles.desktop}>
              <ul>
                <li>
                  <a href="#">PROJETOS</a>
                </li>
                <li>
                  <a href="#">SOBRE</a>
                </li>
                <li>
                  <a href="#">CONTATO</a>
                </li>
                <li>
                  <a href="#">CURRÍCULO</a>
                  <img src={linkSVG} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroHeader;
