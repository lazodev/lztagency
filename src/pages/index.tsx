import React from 'react';
import Hero from '../components/Hero';
import TrafficManagement from '../components/TrafficManagement';
import FAQItem from '../components/FAQItem';
import BotsAutomations from '../components/BotsAutomations';
import WebSites from '../components/WebSites';
import SocialProofCarousel from '../components/SocialProofCarousel';
import Seo from '../components/Seo';

const Home: React.FC = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Agência Digital Lazotec",
    "url": "https://www.lazotec.com/",
    "logo": "https://www.lazotec.com/assets/Logo.png",
    "sameAs": [
      "https://www.facebook.com/lazotec",
      "https://www.twitter.com/lazotec",
      "https://www.instagram.com/lazotec"
    ]
  };

  return (
    <div>
      <Seo 
        title="Página Inicial - Agência Lazotec" 
        description="Bem-vindo à Agência Lazotec, sua parceira para soluções criativas." 
        canonicalUrl="https://www.lazotec.com/"
        ogImage="https://www.lazotec.com/og-image.jpg"
        twitterImage="https://www.lazotec.com/twitter-image.jpg"
        twitterSite="@lazotec"
        structuredData={structuredData}
      />
        <main>
          <Hero />
          <TrafficManagement />
          <BotsAutomations />
          <WebSites />
          <SocialProofCarousel />
          <FAQItem />
        </main>
    </div>
  );
};

export default Home;