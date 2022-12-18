import React from "react";
import styles from "../styles/parts/Presentation.module.sass";

const Presentation = () => {
  return (
    <div
      className={styles.presentation}
    >
      <video
        className={styles.video}
        type="video/mp4"
        src="/video/background_1.mp4"
        loop="true"
        autoplay="autoplay"
        muted
      ></video>
      <div
        className={`centeredContent ${styles.presentationInner} animate__animated animate__fadeIn animate__slow a-delay-05`}
      >
        <div className={styles.presentationHeader}>
          <h1>
            Vive una experiencia única entre bosques y árboles nativos en el sur
            de Chile
          </h1>
        </div>
        <div className={styles.presentationFooter}>
          <p>Loteo de parcelas</p>
          <p>Panguipulli, Chile</p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
