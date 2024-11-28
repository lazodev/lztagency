import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        {/* Cabeçalho da página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Nosso Blog</h1>
          <p className="text-lg text-gray-600 mt-4">Fique por dentro das últimas notícias e atualizações</p>
        </div>

        {/* Lista de posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Post 1"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Título do Post 1</h2>
              <p className="text-gray-600 mt-2">Resumo do post 1. Esta é uma introdução curta ao conteúdo do post.</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Leia mais &rarr;
              </a>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Post 2"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Título do Post 2</h2>
              <p className="text-gray-600 mt-2">Resumo do post 2. Esta é uma introdução curta ao conteúdo do post.</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Leia mais &rarr;
              </a>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Post 3"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Título do Post 3</h2>
              <p className="text-gray-600 mt-2">Resumo do post 3. Esta é uma introdução curta ao conteúdo do post.</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Leia mais &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Carregamento de mais posts */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Carregar Mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
