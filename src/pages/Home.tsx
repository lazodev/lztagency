import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrafficManagement from '../components/TrafficManagemet';
import FAQItem from '../components/FAQItem';
import Footer from '../components/Footer';
import BotsAutomations from '../components/BotsAutomations';
import WebSites from '../components/WebSites';
import SocialProofCarousel from '../components/SocialProofCarousel';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <TrafficManagement />
        <BotsAutomations />
        <WebSites />
        <SocialProofCarousel />
        <FAQItem />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
