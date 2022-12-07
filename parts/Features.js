import styles from "../styles/parts/Features.module.sass";

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={`centeredContent ${styles.featuresInner}`}>
        <div
          className={styles.item}
          style={{ backgroundImage: `url('/images/features_1.jpg')` }}
        >
          <div className={styles.itemHeader}>
            <h3>10 Kms de ciclovías</h3>
            <p>A 5 min del proyecto</p>
          </div>
          <div className={styles.itemFooter}>
            <p>
              Que pagan la los el pese las con de resto ministro de se grabado
              se pregunta con es lengua época. Más del que, menos de una la en
              todo éxito deportiva convertirse sea
            </p>
          </div>
        </div>
        <div
          className={styles.item}
          style={{ backgroundImage: `url('/images/features_2.jpg')` }}
        >
          <div className={styles.itemHeader}>
            <h3>3km circuito para caminata y running</h3>
            <p>Dentro del proyecto</p>
          </div>
          <div className={styles.itemFooter}>
            <p>
              Que pagan la los el pese las con de resto ministro de se grabado
              se pregunta con es lengua época. Más del que, menos de una la en
              todo éxito deportiva convertirse sea
            </p>
          </div>
        </div>
        <div
          className={styles.item}
          style={{ backgroundImage: `url('/images/features_3.jpg')` }}
        >
          <div className={styles.itemHeader}>
            <h3>Internet de alta velocidad</h3>
            <p>Conexión via satélite</p>
          </div>
          <div className={styles.itemFooter}>
            <p>
              Que pagan la los el pese las con de resto ministro de se grabado
              se pregunta con es lengua época. Más del que, menos de una la en
              todo éxito deportiva convertirse sea
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
