import React from 'react';
import { ReactElement } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { NextPageWithLayout } from '@/types/nextPageWithLayout';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface AboutProps {
  // Adicione quaisquer props que você precise buscar no servidor aqui
}

const About: NextPageWithLayout<AboutProps> = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Head>
        <title>Sobre Nós - Nossa História</title>
        <meta name="description" content="Conheça mais sobre nossa história, missão, visão e valores." />
      </Head>

      {/* Seção de Vídeo */}
      <div className="relative w-full h-0 pb-[56.25%] mt-8 flex justify-center">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-none max-w-4xl"
          src="https://www.youtube.com/embed/bgUbl6nNLOI?si=vdkYw2avyL0McNI4"
          title="História da Empresa Lazotec"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Seção de História */}
      <section className="px-6 py-12 sm:px-8 md:px-12 lg:px-16 max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-6">Nossa História</h1>
        <p className="text-lg text-center mb-12">
          Somos uma empresa com uma história marcada pela inovação e excelência. Desde a nossa fundação, temos buscado transformar ideias em soluções digitais de alta qualidade, ajudando empresas a alcançar seus objetivos de forma eficaz.
        </p>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Missão</h2>
              <p className="text-lg text-gray-600">
                Nossa missão é criar soluções digitais inovadoras que ajudem nossos clientes a crescer e alcançar o sucesso no mundo digital.
              </p>
            </div>

            {/* Visão */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Visão</h2>
              <p className="text-lg text-gray-600">
                Ser reconhecida como líder em transformação digital, oferecendo serviços de alta qualidade que superem as expectativas dos nossos clientes.
              </p>
            </div>

            {/* Valores */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Valores</h2>
              <p className="text-lg text-gray-600">
                Integridade, inovação, compromisso com a excelência e foco no cliente são os pilares que nos guiam em nossa jornada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Função para buscar dados no servidor
export const getServerSideProps: GetServerSideProps<AboutProps> = async () => {
  // Adicione a lógica de busca de dados aqui, se necessário
  return {
    props: {}, // Passe os dados necessários como props
  };
};

About.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default About;
