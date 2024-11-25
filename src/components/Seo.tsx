import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterImage?: string;
  twitterSite?: string;
  structuredData?: object;
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage,
  ogUrl,
  twitterCard = "summary_large_image",
  twitterImage,
  twitterSite,
  structuredData,
}) => {
  return (
    <Head>
      <title>{title ? `${title} | Agência Digital Lazotec` : 'Agência de desenvolvimento de  software'}</title>
      <meta name="description" content={description || 'Soluções digitais para sua empresa converter e performar melhor'} />
      <link rel="canonical" href={canonicalUrl || 'https://www.lazotec.com/'} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl || canonicalUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}

      {/* Structured Data JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Head>
  );
};

export default Seo;
