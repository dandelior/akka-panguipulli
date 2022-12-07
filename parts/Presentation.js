import React from "react";
import styles from "../styles/parts/Presentation.module.sass";

const Presentation = () => {
  return (
    <div
      className={styles.presentation}
      // style={{ backgroundImage: "url(/images/fake_background.jpg)" }}
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
        className={`centeredContent ${styles.presentationInner} animate__animated animate__fadeIn animate__slow`}
      >
        <div className={styles.presentationHeader}>
          {/* <img src="/images/playButton.svg" alt="Click para abrir video" /> */}
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
