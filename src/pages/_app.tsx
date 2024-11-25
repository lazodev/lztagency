import React from 'react';
import { AppProps } from 'next/app';
import '../assets/global.css';

// Importando os componentes globais
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleTagManager from '../components/GoogleTagManager';
import Seo from '../components/Seo';

const GTM_ID = 'GTM-THKNQX4S'; // Exemplo do ID do Google Tag Manager

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager gtmId={GTM_ID} />
      <Seo
        title="Conheça à Agência Digital Lazotec"
        description="Oferecemos soluções completas em marketing digital, desenvolvimento de websites e gestão de tráfego."
        canonicalUrl="https://www.lazotec.com/"
      />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default App;
