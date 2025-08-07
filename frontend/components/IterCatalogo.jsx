import styles from '../styles/sections/catalogo.module.scss';
import Link from 'next/link';

export default function IterCatalogo({arreglo, dolar}) {
  return (
    Array.isArray(arreglo) && arreglo.map((objeto) => (
      <Link href={`/platos/${objeto.slug}`} key={objeto.id}>
        <article  data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" data-aos-once="false" id={objeto.id} className={styles.catalogo__productoBox}>
          <div className={styles.catalogo__ventanaImagenes}> 
              <div className={styles.catalogo__flexImagenes}>
                <img
                  className={styles.catalogo__productoImg}
                  src={objeto.img}
                  alt={`Imagen de ${objeto.nombre}`}
                />
                <img
                  id="productoImg"
                  className={styles.catalogo__productoImg}
                  src={objeto.img2}
                  alt={`Imagen de ${objeto.nombre}`}
                />
                <img
                  id="productoImg"
                  className={styles.catalogo__productoImg}
                  src={objeto.img3}
                  alt={`Imagen de ${objeto.nombre}`}
                />
              </div>
            </div>
          <div className={styles.catalogo__infoBox}>
            <header className={styles.catalogo__header}>
              <h4 className={styles.catalogo__h4}>{objeto.nombre}</h4>
              <span className={styles.catalogo__tipo}>{objeto.tipo_objeto}</span>
            </header>
            <span className={styles.catalogo__spanPrecio}>
              ${Math.floor(objeto.precio) * Math.floor(dolar)}
              <span className={styles.centavos}>,{objeto.precio.slice(-2)}</span>
            </span>
          </div>
        </article>
      </Link>
    ))
  );
}