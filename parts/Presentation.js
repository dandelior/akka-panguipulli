import React from 'react';
import styles from '../styles/parts/Presentation.module.sass';

const Presentation = () => {
  return (
    <div
      className={styles.presentation}
      style={{ backgroundImage: 'url(./images/fake_background.jpg)' }}
    >
      <video
        className={styles.video}
        type="video/mp4"
        src="https://pub-0d50b478f04c48ad8d1957f9bd28e496.r2.dev/background_1alt.mp4"
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
