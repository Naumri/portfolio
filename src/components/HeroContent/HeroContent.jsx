import styles from "./HeroContent.module.css";

import mailSVG from "../../assets/mail.svg";
import linkedinSVG from "../../assets/linkedin.svg";
import githubSVG from "../../assets/github.svg";
import instagramSVG from "../../assets/instagram.svg";

function HeroContent() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <h3>
            Transformando complexidades em interfaces <span>claras</span> e{" "}
            <span>agradáveis</span> para gerar{" "}
            <span>resultados impactantes</span>.
          </h3>
          <div className={styles.socialMedia}>
            <a href="#">
              <img src={mailSVG} alt="E-mail" />
            </a>
            <a href="#">
              <img src={linkedinSVG} alt="LinkedIn" />
            </a>
            <a href="#">
              <img src={githubSVG} alt="GitHub" />
            </a>
            <a href="#">
              <img src={instagramSVG} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroContent;
