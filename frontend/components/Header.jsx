import styles from '../styles/sections/header.module.scss';
import stylesGlobal from '../styles/base/global.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

    const manejarButton = () => {
      setActivo(!activo); // Cambia el estado entre true y false
    };

  return (
    <header className={scrolled ? `${styles.header} ${styles.scrollOn}` : `${styles.header} ${styles.scrollOff}`}>
      <button onClick={manejarButton} data-activo={activo} id={`buttonMenu`} className={`material-symbols-outlined ${styles.header__button}`}>
        {activo ? 'close' : 'menu'}
      </button>
      <nav className={activo ? `${styles.menuActivado}` : `${styles.menuDesactivado}` }>
          <ul className={styles.ventanaMenu}>
            <li>
              <a  className={styles.ventanaMenu__btnNavOpc} href="http://localhost:3000">
                Inicio
                <span className='material-symbols-outlined'>home</span>
              </a>
            </li>
            <li>
              <a  className={styles.ventanaMenu__btnNavOpc} href="http://localhost:3000/usuario/ingresar">
                Ingresar
                <span className='material-symbols-outlined'>person</span>
              </a>
            </li>
            <li>
              <a  className={styles.ventanaMenu__btnNavOpc} href="http://localhost:3000/usuario/registro">
                Registrarse
                <span className='material-symbols-outlined'>person_add</span>
              </a>
            </li>
            <li>
              <a  className={styles.ventanaMenu__btnNavOpc} href="http://localhost:3000/menu">
                Menu
                <span className='material-symbols-outlined'>restaurant</span>
              </a>
            </li>
          </ul>
      </nav>

      <h1 id="header" className={styles.header__H1}>
          U<span className={styles.header__H1Color}>MAMI</span>
        </h1>
      <a
        id="NmrTel"
        className={styles.header__tel}
        href="tel:+5493435513764"
      >
        +54 9 3435 51-3764
      </a>
    </header>
  );
}
