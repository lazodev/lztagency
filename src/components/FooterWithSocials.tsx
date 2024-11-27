import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaGithub } from 'react-icons/fa';

const FooterWithSocials = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Informações de Copyright e CNPJ */}
          <div>
            <p>&copy; {currentYear} Lazotec Empreendimentos Digitais LTDA. Todos os direitos reservados.</p>
            <p>CNPJ: 00.000.000/0000-00</p>
          </div>
          {/* Ícones das Redes Sociais */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-700 hover:text-gray-900">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-700 hover:text-gray-900">
              <FaInstagram size={24} />
            </a>
            <a href="https://tiktok.com" aria-label="TikTok" className="text-gray-700 hover:text-gray-900">
              <FaTiktok size={24} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="text-gray-700 hover:text-gray-900">
              <FaYoutube size={24} />
            </a>
            <a href="https://x.com" aria-label="X (Twitter)" className="text-gray-700 hover:text-gray-900">
              <FaTwitter size={24} />
            </a>
            <a href="https://github.com" aria-label="GitHub" className="text-gray-700 hover:text-gray-900">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithSocials;
