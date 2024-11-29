import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div className="flex flex-col items-start">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="h-8 w-auto" />
            </Link>
            <p className="mt-2 text-sm text-gray-700">
              Somos uma empresa dedicada a criar soluções digitais inovadoras e personalizadas para nossos clientes.
            </p>
          </div>

          {/* Coluna 2: Soluções */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Soluções</h3>
            <ul>
              <li className="mb-2">
                <a href="/web-development" className="hover:underline text-gray-600">Desenvolvimento Web</a>
              </li>
              <li className="mb-2">
                <a href="/digital-marketing" className="hover:underline text-gray-600">Marketing Digital</a>
              </li>
              <li className="mb-2">
                <a href="/search-engine-optimization" className="hover:underline text-gray-600">SEO</a>
              </li>
              <li className="mb-2">
                <a href="/consultancy" className="hover:underline text-gray-600">Consultoria</a>
              </li>
              <li className="mb-2">
                <a href="/traffic-management" className="hover:underline text-gray-600">Gestão de Tráfego</a>
              </li>
              <li className="mb-2">
                <a href="/online-stores" className="hover:underline text-gray-600">Criação de Lojas Online</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Suporte */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Suporte</h3>
            <ul>
              <li className="mb-2">
                <a href="/frequently-asked-questions" className="hover:underline text-gray-600">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="/help-center" className="hover:underline text-gray-600">Central de Ajuda</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline text-gray-600">Contato</a>
              </li>
              <li className="mb-2">
                <a href="/report-a-problem" className="hover:underline text-gray-600">Relatar um Problema</a>
              </li>
              <li className="mb-2">
                <a href="/submmit-ticket" className="hover:underline text-gray-600">Abrir um ticket</a>
              </li>
              <li className="mb-2">
                <a href="/downloads" className="hover:underline text-gray-600">Acervo de conteúdos</a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Empresa */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Empresa</h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline text-gray-600">Sobre Nós</a>
              </li>
              <li className="mb-2">
                <a href="/carres" className="hover:underline text-gray-600">Carreiras</a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="hover:underline text-gray-600">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/partners" className="hover:underline text-gray-600">Parceiros</a>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Políticas */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Políticas</h3>
            <ul>
              <li className="mb-2">
                <a href="/privacy-policy" className="hover:underline text-gray-600">Política de Privacidade</a>
              </li>
              <li className="mb-2">
                <a href="/terms-of-use" className="hover:underline text-gray-600">Termos de Uso</a>
              </li>
              <li className="mb-2">
                <a href="/cookies-policy" className="hover:underline text-gray-600">Política de Cookies</a>
              </li>
              <li className="mb-2">
                <a href="/refund-policy" className="hover:underline text-gray-600">Política de Reembolso</a>
              </li>
              <li className="mb-2">
                <a href="/lgpd" className="hover:underline text-gray-600">Política LGPD</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
