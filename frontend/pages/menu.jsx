import Layout from '../components/Layout';
import Catalogo from '../components/Catalogo';
import PantallaCarga from '../components/PantallaCarga';

export default function HomePage({ catalogoPlatos, dolar }) {
  return (
    <Layout>
      {/* <PantallaCarga /> */}
      <Catalogo catalogoPlatos={catalogoPlatos} dolar={dolar} />
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