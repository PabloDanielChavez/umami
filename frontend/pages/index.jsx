import Layout from '../components/Layout';
import Bienvenida from '../components/Bienvenida';
import SobrePlatos from '../components/SobrePlatos';
import Catalogo from '../components/Catalogo';
import Contacto from '../components/Contacto';
import PantallaCarga from '../components/PantallaCarga';
import 'aos/dist/aos.css';

export default function HomePage({ catalogoPlatos, sobrePlatosIzquierda, sobrePlatosDerecha, dolar }) {

  return (
    <Layout>
      <PantallaCarga />
      <Bienvenida />
      <SobrePlatos sobrePlatosIzquierda={sobrePlatosIzquierda} sobrePlatosDerecha={sobrePlatosDerecha}/>
      <Catalogo catalogoPlatos={catalogoPlatos} dolar={dolar} />
      <Contacto />
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const resSobrePlatos = await fetch('http://localhost:4000/api/sobrePlatos');
    const jsonSobrePlatos = await resSobrePlatos.json();
    const sobrePlatosIzquierda = jsonSobrePlatos.sobrePlatosSalidaIzquierda;
    const sobrePlatosDerecha = jsonSobrePlatos.sobrePlatosSalidaDerecha;


    const resCatalogoPlatos = await fetch('http://localhost:4000/api/platos');
    const jsonCatalogoPlatos = await resCatalogoPlatos.json();
    const catalogoPlatos = jsonCatalogoPlatos.platosSalida;
    const dolar =  Math.floor(jsonCatalogoPlatos.dolarSalida);


    return {
      props: {
        catalogoPlatos,
        dolar,
        sobrePlatosIzquierda,
        sobrePlatosDerecha
      },
    };
  } catch (error) {
    console.error('Error al obtener datos del backend:', error);
    return {
      props: {
        catalogoPlatos: [],
        dolar: 1
      },
    };
  }
}