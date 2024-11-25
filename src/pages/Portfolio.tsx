import React from 'react';

const Portfolio: React.FC = () => {
  // Função para renderizar as estrelas de avaliação
  const renderStars = (rating: number) => {
    const fullStars = Array.from({ length: rating }, (_, index) => (
      <svg
        key={`full-star-${index}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-yellow-500"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
    
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
      <svg
        key={`empty-star-${index}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-gray-300"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));

    return [...fullStars, ...emptyStars];
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Nosso Portfólio</h1>
          <p className="text-lg text-gray-600 mt-4">Veja os projetos que já realizamos e as avaliações de nossos clientes</p>
        </div>

        {/* Seção de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projeto 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Projeto 1"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Projeto 1: Loja Virtual</h2>
              <p className="text-gray-600 mt-2">Desenvolvimento de um e-commerce completo para um cliente no setor de moda.</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Ver Projeto &rarr;
              </a>
            </div>
          </div>

          {/* Projeto 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Projeto 2"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Projeto 2: Blog Corporativo</h2>
              <p className="text-gray-600 mt-2">Desenvolvimento de site institucional para uma empresa de consultoria.</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Ver Projeto &rarr;
              </a>
            </div>
          </div>

          {/* Projeto 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Projeto 3"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Projeto 3: Aplicativo Móvel</h2>
              <p className="text-gray-600 mt-2">Desenvolvimento de um app para otimizar a gestão de estoque de pequenas empresas.</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Ver Projeto &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Seção de Provas Sociais */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">O que nossos clientes dizem</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {/* Testemunho 1 */}
            <div className="bg-white p-8 shadow-lg rounded-lg max-w-xs text-center">
              <img
                src="https://via.placeholder.com/80x80"
                alt="Cliente 1"
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">João Silva</h3>
              <div className="flex justify-center my-2">
                {renderStars(5)} {/* 5 estrelas */}
              </div>
              <p className="text-gray-600 mt-2">"A equipe superou nossas expectativas. O projeto ficou perfeito e o suporte foi excepcional!"</p>
            </div>

            {/* Testemunho 2 */}
            <div className="bg-white p-8 shadow-lg rounded-lg max-w-xs text-center">
              <img
                src="https://via.placeholder.com/80x80"
                alt="Cliente 2"
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Maria Oliveira</h3>
              <div className="flex justify-center my-2">
                {renderStars(4)} {/* 4 estrelas */}
              </div>
              <p className="text-gray-600 mt-2">"O serviço foi entregue no prazo e a qualidade ficou incrível. Estamos muito satisfeitos com o resultado!"</p>
            </div>

            {/* Testemunho 3 */}
            <div className="bg-white p-8 shadow-lg rounded-lg max-w-xs text-center">
              <img
                src="https://via.placeholder.com/80x80"
                alt="Cliente 3"
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Carlos Pereira</h3>
              <div className="flex justify-center my-2">
                {renderStars(4)} {/* 4 estrelas */}
              </div>
              <p className="text-gray-600 mt-2">"Excelente trabalho! Recomendo a todos que buscam qualidade e eficiência." </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
