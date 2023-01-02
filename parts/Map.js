import styles from '../styles/parts/Map.module.sass';

const Map = () => {
  return (
    <div className={styles.map}>
      <div className={styles.gmapCanvas}>
        <iframe
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?q=39%C2%B038'20.1%22S%2072%C2%B018'15.0%22W&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
