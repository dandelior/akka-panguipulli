import React from "react";
import styles from "../styles/parts/SellingArea.module.sass";

const SellingArea = () => {
  return (
    <div className={styles.sellingArea}>
      <div className={`${styles.sellingAreaInner} centeredContent`}>
        <h2>Solo 25 terrenos de 5000 mts2 en venta</h2>
        <p>
          AKKA Panguipulli es un proyecto ubicado a 2 kms del pueblo. Vivirás en
          un fundo de 13 hectareas con solo 25 exclusivos sitios, cada uno
          respetando el paisaje, su geografía y la propia naturaleza. Un inmenso
          espacio natural, seguro y tranquilo en el sur de Chile.
        </p>
        <a
          href="https://goo.gl/maps/KJBD3uL4tTWHUTob9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver ubicación en Google Maps
        </a>
      </div>
    </div>
  );
};

export default SellingArea;
