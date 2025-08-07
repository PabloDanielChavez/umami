import Layout from '../../components/Layout';
import Login from '../../components/Login';
import PantallaCarga from '../../components/PantallaCarga';

export default function HomePage({ }) {
  return (
    <Layout>
      <PantallaCarga />
      <Login/>
    </Layout>
  );
}
