import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Umami</title>
      </Head>
      <main>
        <header>
          <Header />
        </header>
          {children}
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}