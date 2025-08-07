import Layout from '../../components/Layout';
import Registro from '../../components/Registro';
import PantallaCarga from '../../components/PantallaCarga';

export default function HomePage({ }) {
  return (
    <Layout>
      <PantallaCarga />
      <Registro/>
    </Layout>
  );
}