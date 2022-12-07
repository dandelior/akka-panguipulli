import styles from "../styles/parts/Accessibility.module.sass";

const Accessibility = () => {
  return (
    <div className={styles.accessibility} id="accesibility">
      <div className={`centeredContent ${styles.accessibilityInner}`}>
        <div className={styles.accessibilityHeader}>
          <h2>Accesibilidad y cercanía a puntos de interes</h2>
        </div>
        <div className={styles.accessibilityContent}>
          <div className={styles.item}>
            <img src="/images/iconVillage.svg" alt="ícono pueblo" />
            <h4>A 2km del pueblo Panguipulli</h4>
            <p>
              Comentarios mejores oficiales, caché. Fueron ejemplos, en medio{" "}
            </p>
          </div>
          <div className={styles.item}>
            <img src="/images/iconBeach.svg" alt="ícono playa" />
            <h4>A 5 min del teatro del lago y playa Panguipulli</h4>
            <p>
              Comentarios mejores oficiales, caché. Fueron ejemplos, en medio{" "}
            </p>
          </div>
          <div className={styles.item}>
            <img src="/images/iconBeachAlt.svg" alt="ícono playa 2" />
            <h4>
              A 10km de playa Coz
              <br />
              Coz
            </h4>
            <p>
              Comentarios mejores oficiales, caché. Fueron ejemplos, en medio{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
