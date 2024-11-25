import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/Logo.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
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
          <Link href="/">
            <Image src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>

          {/* Dropdown Serviços */}
          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="hover:text-gray-300 focus:outline-none"
            >
              Serviços
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg">
                <Link href="/services/criacao-de-sites" className="block px-4 py-2 hover:bg-gray-700">
                  Criação de Sites
                </Link>
                <Link href="/services/lojas-virtuais" className="block px-4 py-2 hover:bg-gray-700">
                  Lojas Virtuais
                </Link>
                <Link href="/services/criacao-de-blogs" className="block px-4 py-2 hover:bg-gray-700">
                  Blogs
                </Link>
                <Link href="/services/gestao-de-trafego" className="block px-4 py-2 hover:bg-gray-700">
                  Gestão de Tráfego Pago
                </Link>
                <Link href="/services/search-engine-optimization" className="block px-4 py-2 hover:bg-gray-700">
                  SEO
                </Link>
                <Link href="/services/marketing-de-conteudo" className="block px-4 py-2 hover:bg-gray-700">
                  Marketing de Conteúdo
                </Link>
                <Link href="/services/social-media" className="block px-4 py-2 hover:bg-gray-700">
                  Social Media
                </Link>
              </div>
            )}
          </div>

          <Link href="/portfolio" className="hover:text-gray-300">
            Portfólio
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            Sobre Nós
          </Link>
          <Link href="/blog" className="hover:text-gray-300">
            Blog
          </Link>
          <Link href="/resources" className="hover:text-gray-300">
            Recursos
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contato
          </Link>
          <Link href="/customer-area" className="hover:text-gray-300">
            Área do Cliente
          </Link>
          <Link href="/testimonials" className="hover:text-gray-300">
            Testemunhos
          </Link>
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
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/portfolio" className="hover:text-gray-300">
              Portfólio
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              Sobre Nós
            </Link>
            <Link href="/blog" className="hover:text-gray-300">
              Blog
            </Link>
            <Link href="/resources" className="hover:text-gray-300">
              Recursos
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contato
            </Link>
            <Link href="/customer-area" className="hover:text-gray-300">
              Área do Cliente
            </Link>
            <Link href="/testimonials" className="hover:text-gray-300">
              Testemunhos
            </Link>
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
