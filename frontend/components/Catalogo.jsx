import styles from '../styles/sections/catalogo.module.scss';
import IterCatalogo from '../components/IterCatalogo';

export default function Catalogo({ catalogoPlatos, dolar }) {

  return (
    <section id="catalogo" className={styles.catalogo}>
      <div className={styles.catalogo__flexPrincipal}>
        <article className={styles.catalogo__bienvenida}>
          <h2 className={`${styles.catalogo__h2} titulo`}>Nuestro Menú</h2>
          <h3 className={styles.catalogo__h3}>PLATOS EXQUISITOS</h3>
          <p className={styles.catalogo__parrafo}>
            Te damos la bienvenida a un mundo de sabores auténticos, donde cada plato refleja nuestra pasión por la cocina artesanal. En nuestro espacio gastronómico, vas a encontrar almuerzos y cenas preparados con ingredientes frescos y de calidad, pensados para ofrecerte una experiencia que combina sabor, dedicación y calidez.
          </p>
        </article>

        <div className={styles.catalogo__grid}>
          <IterCatalogo arreglo={catalogoPlatos} dolar={dolar}/>
        </div>
      </div>
    </section>
  );
}