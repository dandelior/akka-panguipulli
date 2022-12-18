/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/parts/Header.module.sass";

const Header = ({ setFixed }) => {
  const [active, setActive] = useState(false);
  const [menuFix, setMenuFix] = useState(false);

  const onActiveMenu = () => {
    setActive(active ? false : true);
  };

  const onMenuClick = () => {
    setActive(false);
  };

  useEffect(() => {
    setFixed(active ? true : false);
  }, [active, setFixed]);

  useEffect(() => {
    const menuChange = () => setMenuFix(window.scrollY >= 200);
    window.addEventListener("scroll", menuChange);
    return () => window.removeEventListener("scroll", menuChange);
  }, []);

  return (
    <header
      className={`${styles.mainHeader} ${
        menuFix && styles.fix
      } animate__animated animate__fadeIn`}
    >
      <div className={styles.mainHeaderInner}>
        <Link href="/">
          <img
            src="./images/logo.svg"
            alt="AKKA Panguipulli"
            className={styles.mainHeaderLogo}
          />
        </Link>
        <div className={`${styles.mainHeaderMenu} ${active && styles.active}`}>
          <a href="#" onClick={onMenuClick}>
            Home
          </a>
          <a href="#masterplan" onClick={onMenuClick}>
            Master plan
          </a>
          <a href="#accesibility" onClick={onMenuClick}>
            Accesibilidad y cercanías
          </a>
          <a href="#gallery" onClick={onMenuClick}>
            Imágenes
          </a>
          <a href="#contact" onClick={onMenuClick}>
            Contacto
          </a>
        </div>
        <div
          className={`${styles.burger} ${active && styles.active}`}
          onClick={onActiveMenu}
        >
          <div className={styles.meat}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
