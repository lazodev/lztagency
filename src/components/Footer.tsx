import React from 'react';
import MenuFooter from './MenuFooter';
import FooterWithSocials from './FooterWithSocials';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-100 text-gray-700 py-4'>
      <MenuFooter />
      <FooterWithSocials />
    </footer>
  );
};

export default Footer;
