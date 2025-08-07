import styles from '../styles/sections/sobrePlatos.module.scss';

export default function SobrePlatos({ sobrePlatosIzquierda, sobrePlatosDerecha }) {
  return (
    <section className={styles.sobrePlatos}>
      <div className={styles.sobrePlatos__grid}>
        <div className={styles.sobrePlatos__bienvenida}>
          <h2 className={styles.sobrePlatos__h2Titulo}>Sobre nuestros platos</h2>
          <p className={styles.sobrePlatos__parrafo}>Plato internacional increíblemente sabroso</p>
        </div>

        <div className={styles.sobrePlatos__box}>
          <div className={styles.sobrePlatos__columnas}>

            {/* Columna Izquierda */}
            <div className={styles.sobrePlatos__columnaIzquierda}>
            {Array.isArray(sobrePlatosIzquierda) && sobrePlatosIzquierda.map((plato) => (
                <article key={plato.nombre} className={styles.sobrePlatos__articleIzquierda}>
                  <article>
                    <h3 className={styles.sobrePlatos__h3}>{plato.nombre}</h3>
                    <p className={styles.sobrePlatos__parrafo}>{plato.informacion}</p>
                  </article>
                  <article>
                      <img className={styles.sobrePlatos__item} src={plato.img} alt={plato.nombre} />
                  </article>
                </article>
              ))}
            </div>

            {/* Imagen central */}
            <div className={styles.sobrePlatos__articleCentral}>
              <img
                className={styles.sobrePlatos__img}
                src="https://yummi-theme.myshopify.com/cdn/shop/files/gallery-4.jpg?v=1614334580&width=1500"
                alt="Platito"
              />
            </div>

            {/* Columna Derecha */}
            <div className={styles.sobrePlatos__columnaDerecha}>
              {Array.isArray(sobrePlatosDerecha) && sobrePlatosDerecha.map((plato) => (
                <article key={plato.nombre} className={styles.sobrePlatos__articleDerecha}>
                  <article>
                    <h3 className={styles.sobrePlatos__h3}>{plato.nombre}</h3>
                    <p className={styles.sobrePlatos__parrafo}>{plato.informacion}</p>
                  </article>
                  <article>
                    <img className={styles.sobrePlatos__item} src={plato.img} alt={plato.nombre} />
                  </article>
                </article>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
