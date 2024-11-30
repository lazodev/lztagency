{/*}
import Head from 'next/head';
*/}
import CtaLP from '@/components/CtaLP';
import { NextPageWithLayout } from '@/types/nextPageWithLayout';
import SimpleLayout from '@/layouts/SimpleLayout';
import LpHero from '@/components/LpHero';
import Feature from '@/components/Feature';
import CtaButton from '@/components/CtaButton';
import Prod from '@/assets/box-mockup.webp';
import Emb from '@/assets/emb-mockup.webp';
import Banner from '@/assets/herobanner.png';
import productImage from '@/assets/box-mockup.webp';
import CardPrice from '@/components/CardPriceLP';

const products = [
  {
    name: 'Produto 1',
    image: productImage,
    installment: 'R$ 29,90',
    price: 'R$ 299,00',
    pixPrice: 'R$ 277,00',
    discount: 'R$ 248,00',
    ctaLink: '/checkout',
    ctaText: 'Quero comprar agora',
  },
  {
    name: 'Produto 2',
    image: productImage,
    installment: 'R$ 49,90',
    price: 'R$ 499,00',
    pixPrice: 'R$ 477,00',
    discount: 'R$ 348,00',
    ctaLink: '/checkout',
    ctaText: 'Quero comprar agora',
  },
  {
    name: 'Produto 3',
    image: productImage,
    installment: 'R$ 69,90',
    price: 'R$ 699,00',
    pixPrice: 'R$ 677,00',
    discount: 'R$ 448,00',
    ctaLink: '/checkout',
    ctaText: 'Quero comprar agora',
  },
];

const LojasVirtuais: NextPageWithLayout = () => {
  return (
    <>
      {/*
      <Head>
        <title>Lojas Virtuais - Lazotec</title>
        <meta name="description" content="Serviço de criação de lojas virtuais pela Lazotec." />
      </Head>
      */}
      <main>
      <div>
        <LpHero
          title="Perca peso, ganhe confiança e leve mais por menos!"
          subtitle="OzenVitta combina Inulina e L-Carnitina para acelerar seu metabolismo e aumentar sua saciedade para que você perca peso com saúde e sem sofrimento.

E agora, você está prestes a ter todos os benefícios por um preço único de Black Friday!"
          backgroundImage={Banner}
          ctaLink="https://app.monetizze.com.br/r/AYM24949495/?u=VK81602"
          ctaText="Quero comprar agora"
        />
        <div className="container mx-auto px-4 py-8">
          <Feature
            title="Produto Incrível"
            description="Este é um produto incrível que vai mudar sua vida."
            imageUrl={Prod}
          />
          <Feature
            title="Outro Produto Fantástico"
            description="Este produto também é fantástico e você vai adorar."
            imageUrl={Emb}
          />
          <div className="flex justify-center mt-12">
            <CtaButton link="https://app.monetizze.com.br/r/AYM24949495/?u=VK81602" text="Quero comprar agora" />
          </div>
        </div>
      </div>
        {/*<div className="flex min-h-screen bg-gray-900 max-w-[1200]">*/}
          <div className=''>
            <CtaLP checkoutLink="https://app.monetizze.com.br/r/AYM24949495/?u=VK81602" />
          </div>
        {/*</div>*/}

        <div className='bg-gray-900'>
          <CardPrice
            title="Economize e emagreça com a Black Friday Ozenvitta."
            subtitle="Restam poucos frascos com FRETE GRÁTIS no dia de hoje: 29/11/2024"
            products={products}
          />
        </div>
      </main>
    </>
  );
};

LojasVirtuais.getLayout = function getLayout(page: React.ReactNode) {
  return <SimpleLayout>{page}</SimpleLayout>;
};

export default LojasVirtuais;
