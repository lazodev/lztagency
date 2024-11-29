import { AppProps } from 'next/app';
import '@/assets/global.css';
import { NextPageWithLayout } from '../types/nextPageWithLayout';
import Header from '@/components/NavBar';
import Footer from '@/components/Footer';
import GoogleTagManager from '@/components/GoogleTagManager';
import Seo from '@/components/Seo';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const GTM_ID = 'GTM-THKNQX4S';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => (
    <>
      <Header />
      <main>{page}</main>
      <Footer />
    </>
  ));

  return (
    <>
      <GoogleTagManager gtmId={GTM_ID} />
      <Seo
        title="Conheça à Agência Digital Lazotec"
        description="Oferecemos soluções completas em marketing digital, desenvolvimento de websites e gestão de tráfego."
        canonicalUrl="https://www.lazotec.com/"
      />
        {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default App;
