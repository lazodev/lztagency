// pages/sitemap.xml.tsx

import { GetServerSideProps } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { getAllPages } from '../lib/getPages';

const Sitemap = () => {
  // Este componente não será renderizado, pois o Next.js retornará a resposta do servidor
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml');

  try {
    const pages = await getAllPages(); // Função que retorna suas URLs

    const sitemap = new SitemapStream({ hostname: 'https://www.lazotec.com' });

    // Adiciona as páginas no sitemap
    pages.forEach((page: string) => {
      sitemap.write({ url: page, changefreq: 'daily', priority: 0.7 });
    });

    sitemap.end();

    // Converte o sitemap para XML e envia como resposta
    const sitemapXML = await streamToPromise(sitemap).then((sm) => sm.toString());

    res.write(sitemapXML);
    res.end();
  } catch (err) {
    console.error('Error generating sitemap:', err);
    res.statusCode = 500;
    res.end();
  }

  return {
    props: {},
  };
};

export default Sitemap;
