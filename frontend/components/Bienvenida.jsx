
// components/Bienvenida.jsx
import styles from '../styles/sections/bienvenida.module.scss';
import stylesGlobal from '../styles/base/global.module.scss';

export default function Bienvenida() {
  return (
    <section id="bienvenidaSeccion" className={styles.bienvenida}>
        <img className={styles.bienvenida__imagen} src="/img/unami-icon.png" alt="Jessy Doe" />
        {/* <p className={styles.bienvenida__parrafo}>Bienvenidos</p> */}
        {/* <h2 className={styles.bienvenida__h2}>Umami</h2> */}
        <div id="OcupacionBox" className={styles.bienvenida__ocupacionBox}></div>
        <article className={stylesGlobal.redes}>
            <a href="#" className={stylesGlobal.redes__boxRedSocial}>
              <span className="fa fa-whatsapp"> </span> 
            </a>
            <a href="#" className={stylesGlobal.redes__boxRedSocial}>
              <span className="fa fa-twitter"></span></a>
            <a href="#" className={stylesGlobal.redes__boxRedSocial}>
              <span className="fa fa-github"></span> 
            </a>
            <a href="#" className={stylesGlobal.redes__boxRedSocial}>
              <span className="fa fa-linkedin"></span>
            </a>
        </article>
    </section>
  );
}
