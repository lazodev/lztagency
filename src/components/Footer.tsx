import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo e Descrição */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Lzt Digital Agency</h2>
            <p className="text-gray-400">
              Transformando ideias em realidades digitais. Soluções completas para marketing digital, desenvolvimento de sites, automações e muito mais.
            </p>
          </div>

          {/* Links Úteis */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
            <ul>
              <li className="mb-2">
                <a href="/portfolio" className="text-gray-400 hover:text-white">
                  Portfólio
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-gray-400 hover:text-white">
                  Sobre Nós
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contato
                </a>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="text-gray-400 hover:text-white">
                  Preços
                </a>
              </li>
              <li className="mb-2">
                <a href="blog" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais e Jurídico */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.197 21V12H6V8h3.197V5.25C9.197 2.794 10.547 2 12.73 2c1.128 0 2.097.084 2.38.122v2.79H13.51c-1.12 0-1.34.53-1.34 1.31V8H15l-.514 4h-2.675v9H9.197z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.5 4.5 0 0 0 1.98-2.49 8.87 8.87 0 0 1-2.83 1.08 4.47 4.47 0 0 0-7.6 4.08 12.71 12.71 0 0 1-9.24-4.67 4.44 4.44 0 0 0 1.39 5.95 4.39 4.39 0 0 1-2.03-.56v.06a4.46 4.46 0 0 0 3.59 4.37 4.48 4.48 0 0 1-2.02.08 4.46 4.46 0 0 0 4.17 3.11 8.96 8.96 0 0 1-5.56 1.92c-.36 0-.72-.02-1.07-.06a12.62 12.62 0 0 0 6.83 2.01c8.2 0 12.7-6.8 12.7-12.7v-.58c.87-.62 1.63-1.4 2.23-2.28l-.05-.02z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.013 4.85.07 1.257.057 2.18.28 2.92.6.787.338 1.44.79 2.08 1.43.637.64 1.088 1.294 1.43 2.08.32.74.543 1.664.6 2.92.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.057 1.257-.28 2.18-.6 2.92-.338.787-.79 1.44-1.43 2.08-.64.637-1.294 1.088-2.08 1.43-.74.32-1.664.543-2.92.6-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.257-.057-2.18-.28-2.92-.6-.787-.338-1.44-.79-2.08-1.43-.637-.64-1.088-1.294-1.43-2.08-.32-.74-.543-1.664-.6-2.92-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.057-1.257.28-2.18.6-2.92.338-.787.79-1.44 1.43-2.08.64-.637 1.294-1.088 2.08-1.43.74-.32 1.664-.543 2.92-.6 1.266-.057 1.646-.07 4.85-.07M12 0C8.74 0 8.332.014 7.052.072 5.766.13 4.682.354 3.8.727c-.92.384-1.698.9-2.474 1.675-.775.775-1.291 1.553-1.675 2.474C-.354 5.682-.13 6.766-.072 8.052-.014 8.332 0 8.74 0 12s.014 3.668.072 4.948c.058 1.286.282 2.37.655 3.253.384.92.9 1.698 1.675 2.474.775.775 1.553 1.291 2.474 1.675.883.373 1.967.597 3.253.655C8.332 23.986 8.74 24 12 24s3.668-.014 4.948-.072c1.286-.058 2.37-.282 3.253-.655.92-.384 1.698-.9 2.474-1.675.775-.775 1.291-1.553 1.675-2.474.373-.883.597-1.967.655-3.253.058-1.28.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.286-.282-2.37-.655-3.253-.384-.92-.9-1.698-1.675-2.474-.775-.775-1.553-1.291-2.474-1.675-.883-.373-1.967-.597-3.253-.655C15.668.014 15.26 0 12 0z"/>
                  <path d="M12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 1 0 12 5.838zm0 10.11a3.949 3.949 0 1 1 0-7.898 3.949 3.949 0 1 1 0 7.898zM18.406 4.594A1.44 1.44 0 1 0 18.406 7.474 1.44 1.44 0 1 0 18.406 4.594z"/>
                </svg>
              </a>
            </div>

            {/* Jurídico */}
            <h3 className="text-xl font-semibold mb-4">Jurídico</h3>
            <ul>
              <li className="mb-2">
                <a href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Política de Privacidade
                </a>
              </li>
              <li className="mb-2">
                <a href="/terms-of-use" className="text-gray-400 hover:text-white">
                  Termos de Uso
                </a>
              </li>
              <li className="mb-2">
                <a href="/cookies-policy" className="text-gray-400 hover:text-white">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Lzt Digital Agency. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
