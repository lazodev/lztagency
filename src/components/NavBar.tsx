import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/Logo.png';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const servicesDropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      menuRef.current && !menuRef.current.contains(e.target as Node) &&
      servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)
    ) {
      setIsServicesDropdownOpen(false);
      closeMobileMenu();
    }
  };

  const handleMouseLeaveServices = () => {
    setIsServicesDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 ${isScrolled ? 'shadow-md backdrop-blur-lg' : ''} text-gray-900 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Menu */}
        <nav className="hidden xl:flex space-x-8">
          <Link href="/" className="hover:text-gray-600">
            Início
          </Link>

          {/* Dropdown Serviços */}
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={toggleServicesDropdown}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onFocus={() => setIsServicesDropdownOpen(true)}
              className="hover:text-gray-600 inline-flex w-full justify-center gap-x-1.5"
              id="menu-button"
              aria-expanded={isServicesDropdownOpen ? 'true' : 'false'}
              aria-haspopup="true"
              type="button"
            >
              Serviços
              <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>

            {isServicesDropdownOpen && (
              <div
                className={`absolute left-0 mt-2 w-48 bg-white bg-opacity-100 text-gray-900 rounded-md shadow-lg 
                transition ease-out duration-100 transform opacity-0 scale-95 
                ${isServicesDropdownOpen ? 'transform opacity-100 scale-100' : ''}`}
                onTransitionEnd={() => {
                  if (!isServicesDropdownOpen) {
                    setIsServicesDropdownOpen(false);
                  }
                }}
                onMouseLeave={handleMouseLeaveServices} // Fechar quando o mouse sair
              >
                <Link href="/services/criacao-de-sites" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md">
                  Criação de sites
                </Link>
                <Link href="/services/lojas-virtuais" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md">
                  Lojas virtuais
                </Link>
                <Link href="/services/criacao-de-blogs" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md">
                  Blogs
                </Link>
                <Link href="/services/gestao-de-trafego" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md">
                  Gestão de tráfego pago
                </Link>
                <Link href="/services/search-engine-optimization" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md">
                  SEO
                </Link>
                <Link href="/services/marketing-de-conteudo" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md">
                  Marketing de conteúdo
                </Link>
                <Link href="/services/social-media" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md">
                  Social media
                </Link>
              </div>
            )}
          </div>

          <Link href="/portfolio" className="hover:text-gray-600">
            Portfólio
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            Sobre nós
          </Link>
          <Link href="/blog" className="hover:text-gray-600">
            Blog
          </Link>
          <Link href="/resources" className="hover:text-gray-600">
            Recursos
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            Contato
          </Link>
          <Link href="/testimonials" className="hover:text-gray-600">
            Testemunhos
          </Link>
          <Link href="/login" className="hover:text-gray-600">
            Área do cliente
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden xl:block">
          <a
            href="https://api.whatsapp.com/send?phone=5588999074499&text=Ol%C3%A1,%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os!"
            className="bg-indigo-600 text-white hover:bg-indigo-700 transition focus:outline-none inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300"
            id="buy-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-900 focus:outline-none">
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
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 w-64 h-full bg-white text-gray-900 p-4 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Conteúdo do Menu */}
        </div>
      )}
    </header>
  );
};

export default NavBar;
