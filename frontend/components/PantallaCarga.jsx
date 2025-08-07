import styles from '../styles/sections/pantallaCarga.module.scss';
import React, { useEffect, useState } from 'react';

function PantallaCarga() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoaded(true);

    if (document.readyState === 'complete') {
      // La página ya está cargada
      setTimeout(() => setLoaded(true), 1000);
    } else {
      // Esperar a que se cargue
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div
      id="pantallaCarga"
      className={`${styles.pantallaCarga} ${loaded ? styles.oculto : ''}`}
    >
      <span className={styles.spanCarga}></span>
    </div>
  );
}

export default PantallaCarga;