/* eslint-disable @next/next/no-img-element */
import styles from "../styles/parts/Footer.module.sass";

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={`centeredContent ${styles.mainFooterInner}`}>
        <img
          className={styles.mainFooterLogo}
          src="/images/logo.svg"
          alt="AKKA Panguipulli"
        />
        <div className={styles.rrssLinks}>
          <a
            href="https://www.facebook.com/profile.php?id=100087623541347"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/images/iconFacebook.svg" alt="Síguenos en Facebook" />
          </a>
          <a
            href="https://instagram.com/akka.panguipulli"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/images/iconInstagram.svg" alt="Síguenos en Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
