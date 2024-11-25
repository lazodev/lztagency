// pages/api/sitemap.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { getAllPages } from '../../lib/getPages';

const Sitemap = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const pages = await getAllPages(); // Função que retorna suas URLs (ex: homepage, posts, produtos, etc)

    const sitemap = new SitemapStream({ hostname: 'https://www.lazotec.com' });

    // Adiciona as páginas no sitemap
    pages.forEach((page: string) => {
      sitemap.write({ url: page, changefreq: 'daily', priority: 0.7 });
    });

    sitemap.end();

    // Converte o sitemap para XML e envia como resposta
    const sitemapXML = await streamToPromise(sitemap).then((sm) => sm.toString());

    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemapXML);
  } catch (err) {
    console.error('Error generating sitemap:', err);
    res.status(500).end();
  }
};

export default Sitemap;
