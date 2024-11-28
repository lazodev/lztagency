import { ReactElement } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { NextPageWithLayout } from '@/types/nextPageWithLayout';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface ResourcesProps {
  data: string; // Tipagem para os dados recebidos do servidor
}

const Resources: NextPageWithLayout<ResourcesProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Recursos - Lazotec</title>
        <meta name="description" content="Descrição dos recursos oferecidos pela Lazotec." />
      </Head>
      <main className="p-4">
        <h1 className="text-3xl font-bold">Recursos</h1>
        <p>{data}</p>
      </main>
    </>
  );
};

// Função para buscar dados no servidor
export const getServerSideProps: GetServerSideProps<ResourcesProps> = async () => {
  // Realize as operações de busca de dados aqui
  const data = "Descrição dos recursos."; // Substitua pela lógica real de busca de dados

  return {
    props: {
      data,
    },
  };
};

Resources.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Resources;
