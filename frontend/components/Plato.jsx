import { useState } from 'react';
import styles from '../styles/sections/plato.module.scss';
import stylesGlobal from '../styles/base/global.module.scss';



export default function Catalogo({ plato, dolar }) {

  const [imagenPrincipal, setImagenPrincipal] = useState(plato.img);
  console.log(plato.nombre)

  const cambiarImagen = (nuevaImg) => {
    setImagenPrincipal(nuevaImg);
  };

  return (
    <section id="plato" className={styles.plato}>
      <div className={styles.plato__grid}>
        <article id={`plato-${plato.slug}`} className={styles.plato__productoBox}>
          <header className={styles.plato__header}>
            <img
              id="productoImg"
              className={styles.plato__productoImg}
              src={imagenPrincipal}
              alt={plato.nombre}
            />
            <div className={styles.plato__selectorDeImagen}>
              <article id='selector1' className={styles.plato__selectorImgBox}
              onClick={() => cambiarImagen(plato.img)}
              >
                <img
                  id="productoImg"
                  className={styles.plato__selectorImg}
                  src={plato.img}
                  alt={plato.nombre}
                />
              </article>
              <article id='selector2' className={styles.plato__selectorImgBox}
              onClick={() => cambiarImagen(plato.img2)}>
                <img
                  id="productoImg"
                  className={styles.plato__selectorImg}
                  src={plato.img2}
                  alt={plato.nombre}
                />
              </article>
              <article id='selector3' className={styles.plato__selectorImgBox}
              onClick={() => cambiarImagen(plato.img3)}>
                <img
                  id="productoImg"
                  className={styles.plato__selectorImg}
                  src={plato.img3}
                  alt={plato.nombre}
                />
              </article>
            </div>
          </header>
          <div className={styles.plato__infoBox}>
            <article className={styles.plato__articleHeader}>
              <h4 className={styles.plato__h4}>
                <span className={styles.plato__tipo}>{plato.tipo_plato}</span>
                {plato.nombre}
              </h4>
              <span className={styles.plato__spanPrecio}>
                ${Math.floor(plato.precio) * Math.floor(dolar)}
                <span className={styles.centavos}>,{plato.precio.slice(-2)}</span>
              </span>
            </article>
            <div className={styles.plato__flexEtiRed}>
              <article className={styles.plato__boxEtiquetas}>
                <span className={plato.vegano === 1 ? `${styles.plato__etiqueta} ${styles.plato__etiquetaVegano}` : `${styles.plato__etiquetaNone}`}>vegano</span>
                <span className={plato.gluten === 1 ? `${styles.plato__etiqueta} ${styles.plato__etiquetaGluten}` : `${styles.plato__etiquetaNone}`}>sin gluten</span>
                <span className={plato.azucar === 1 ? `${styles.plato__etiqueta} ${styles.plato__etiquetaDiabetico}` : `${styles.plato__etiquetaNone}`}>diabetico</span>
                <span className={plato.vegetariano === 1 ? `${styles.plato__etiqueta} ${styles.plato__etiquetaVegetariano}` : `${styles.plato__etiquetaNone}`}>vegetariano</span>
              </article>
              <article className={stylesGlobal.redes} style={{ width: "15%", transform: "scale(.8)"}}>
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
            </div>
            <article className={styles.plato__articleFooter}>
              <p className={styles.plato__parrafoProducto}>{plato.informacion}</p>
            </article>
            
            <article className={styles.plato__boxBtn}>
              <button id={plato.slug} className={`${styles.plato__btn} `} type='button'>
                <span>ordernar</span>
                <span className='material-symbols-outlined'>hand_meal</span>
              </button>
              <button id={plato.slug} className={`${styles.plato__btn} `} type='button'>
                <span>Carrito</span>
                <span className='material-symbols-outlined'>add_circle</span>
              </button>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
}