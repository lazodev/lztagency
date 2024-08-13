import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrafficManagement from './components/TrafficManagemet';
import FAQItem from './components/FAQItem';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <TrafficManagement />
        <FAQItem />
        <Footer />
      </main>
    </div>
  );
};

export default App;
