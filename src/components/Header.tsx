import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? 'bg-gray-800 bg-opacity-80' : 'bg-transparent'
      } backdrop-blur-sm text-white shadow-md transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#portfolio" className="hover:text-gray-300">
            Portfolio
          </a>
          <a href="#about" className="hover:text-gray-300">
            Sobre
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contato
          </a>
          <a href="#pricing" className="hover:text-gray-300">
            Preços
          </a>
          <a href="#blog" className="hover:text-gray-300">
            Blog
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://api.whatsapp.com/send?phone=5588999074499&text=Ol%C3%A1,%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os!"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16m-7 6h7'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#portfolio" className="hover:text-gray-300">
              Portfolio
            </a>
            <a href="#about" className="hover:text-gray-300">
              Sobre
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contato
            </a>
            <a href="#pricing" className="hover:text-gray-300">
              Preços
            </a>
            <a href="#blog" className="hover:text-gray-300">
              Blog
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5588999074499&text=Ol%C3%A1,%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os!"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition mt-4"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
