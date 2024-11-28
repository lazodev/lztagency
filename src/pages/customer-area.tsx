import { ReactElement } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { NextPageWithLayout } from '@/types/nextPageWithLayout';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface CustomerAreaProps {
  // Adicione aqui quaisquer props que serão passadas para o componente
  data: string; // exemplo de dados passados do servidor
}

const CustomerArea: NextPageWithLayout<CustomerAreaProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Área de Cliente - Lazotec</title>
        <meta name="description" content="Testemunhos dos clientes da Lazotec." />
      </Head>
      <main className="p-4">
        <h1 className="text-3xl font-bold">Área de Cliente</h1>
        <p>{data}</p>
      </main>
    </>
  );
};

// Função para buscar dados no servidor
export const getServerSideProps: GetServerSideProps<CustomerAreaProps> = async () => {
  // Realize as operações de busca de dados aqui
  const data = "Descrição dos dados da área de cliente"; // Substitua pela lógica real de busca de dados

  return {
    props: {
      data,
    },
  };
};

CustomerArea.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CustomerArea;
