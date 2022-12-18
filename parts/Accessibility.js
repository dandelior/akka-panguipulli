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
              La ciudad principal del lago Panguipulli donde podrás acceder a servicios y restaurantes.
            </p>
          </div>
          <div className={styles.item}>
            <img src="/images/iconTheather.svg" alt="ícono playa" />
            <h4>A 5 min del teatro de las artes de Panguipulli</h4>
            <p>
              Disfruta de diversas disciplinas culturales y artísticas en un lugar cercano desde el proyecto.
            </p>
          </div>
          <div className={styles.item}>
            <img src="/images/iconBeachAlt.svg" alt="ícono playa 2" />
            <h4>
              A 5 min de playa Panguipulli y 10 km de playa Coz Coz
            </h4>
            <p>
              Diversas y muy hermosas playas de agua cristalina para visitar y disfrutar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
