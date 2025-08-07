import Layout from '../../components/Layout';
import PantallaCarga from '../../components/PantallaCarga';
import Plato from '../../components/Plato'; 

export default function Platos({ plato, dolar }) {
  return (
    <Layout>
        <PantallaCarga />
        <Plato plato={plato} dolar={dolar} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    const resCatalogoPlato = await fetch(`http://localhost:4000/api/platos/${slug}`);
    const jsonCatalogoPlato = await resCatalogoPlato.json();

    const plato = jsonCatalogoPlato.plato;
    const dolar = Math.floor(jsonCatalogoPlato.dolar);

    if (!plato) {
      return { notFound: true };
    }

    return {
      props: {
        plato,
        dolar
      }
    };
  } catch (error) {
    console.error('Error al obtener datos del backend:', error);
    return {
      notFound: true
    };
  }
}

