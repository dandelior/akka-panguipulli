import styles from "../styles/parts/Features.module.sass";

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={`centeredContent ${styles.featuresInner}`}>
        <div
          className={styles.item}
          style={{ backgroundImage: `url('./images/termas_geometricas.jpg')` }}
        >
          <div className={styles.itemHeader}>
            <h3>Termas geométricas</h3>
            <p>A 55 km del proyecto</p>
          </div>
          <div className={styles.itemFooter}>
            <p>
              Inmersas en medio de bosques nativos son alimentadas por pura agua
              termal que brota a 80ºC, cada piscina tiene entre 35ºC y 42ºC y
              además dispone de piscinas de agua fria.
            </p>
          </div>
        </div>
        <div
          className={styles.item}
          style={{
            backgroundImage: `url('./images/trekking_volcan_mocho.jpg')`,
          }}
        >
          <div className={styles.itemHeader}>
            <h3>Trekking volcán Mocho Choshuenco</h3>
            <p>A 50 km del proyecto</p>
          </div>
          <div className={styles.itemFooter}>
            <p>
              Trekking en un ambiente único, rodeado de espectaculares paisajes.
              Contempla las imponentes masas glaciares que decoran las laderas
              del complejo volcánico Mocho Choshuenco
            </p>
          </div>
        </div>
        <div
          className={styles.item}
          style={{
            backgroundImage: `url('./images/pump_track_huilo_huilo.jpg')`,
          }}
        >
          <div className={styles.itemHeader}>
            <h3>Pump truck Huilo Huilo</h3>
            <p>Cerca del proyecto</p>
          </div>
          <div className={styles.itemFooter}>
            <p>
              Deslízate por el circuito Velosolutions más grande de
              Latinoamérica que con sus 1500 metros cuadrados de superficie
              total y sus 340 metros lineales es uno de los Pump Tracks más
              avanzados que existen en el país.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
