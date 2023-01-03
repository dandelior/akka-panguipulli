import styles from '../styles/parts/Panoramic.module.sass';

export const Panoramic = () => {
  return (
    <div
      className={styles.panoramicSection}
      style={{ backgroundImage: `url(./images/back_panoramikc.jpg)` }}
    >
      <video
        className={styles.video}
        type="video/mp4"
        src="/video/background_2.mp4"
        loop={true}
        autoPlay="autoplay"
        muted
      ></video>
      <div className={`centeredContent ${styles.panoramicSectionInner}`}>
        <h2>Ven a disfrutar las maravillas del sur de Chile</h2>
      </div>
    </div>
  );
};
