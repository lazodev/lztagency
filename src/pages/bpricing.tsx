import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-16"> {/* Adicionando padding lateral ao container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Serviço: Desenvolvimento de Loja Virtual */}
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Desenvolvimento de Loja Virtual</h2>
          <p className="text-gray-600 mt-2">Plataforma personalizada para seu e-commerce, com integração de pagamentos e suporte contínuo.</p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-gray-900">$2,499.00</span>
            <span className="text-sm text-gray-600">/valor único</span>
          </div>
          <ul className="mt-6 text-gray-600">
            <li>Design Responsivo</li>
            <li>Integração com MercadoPago/PagSeguro</li>
            <li>Suporte técnico por 3 meses</li>
            <li>Integração com ERP de Estoque</li>
            <li>Otimização SEO inicial</li>
          </ul>
          <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Contratar Serviço</button>
        </div>

        {/* Serviço: Desenvolvimento de Site Institucional */}
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Desenvolvimento de Site Institucional</h2>
          <p className="text-gray-600 mt-2">Criação de sites dinâmicos com design exclusivo e SEO otimizado.</p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-gray-900">$1,799.00</span>
            <span className="text-sm text-gray-600">/valor único</span>
          </div>
          <ul className="mt-6 text-gray-600">
            <li>Design Personalizado</li>
            <li>Conteúdo interativo</li>
            <li>Otimização para SEO</li>
            <li>Blog integrado</li>
            <li>Suporte por 2 meses</li>
          </ul>
          <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Contratar Serviço</button>
        </div>

        {/* Serviço: Gestão de Tráfego */}
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Gestão de Tráfego Digital</h2>
          <p className="text-gray-600 mt-2">Impulsione sua presença online com estratégias de tráfego pago e orgânico.</p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-gray-900">$1,200.00</span>
            <span className="text-sm text-gray-600">/mês</span>
          </div>
          <ul className="mt-6 text-gray-600">
            <li>Campanhas Google Ads</li>
            <li>SEO e Marketing de Conteúdo</li>
            <li>Gestão de redes sociais</li>
            <li>Relatórios mensais detalhados</li>
            <li>Ajustes contínuos de otimização</li>
          </ul>
          <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Contratar Serviço</button>
        </div>

      </div>

      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Nossos Planos</h1>
          <p className="text-lg text-gray-600 mt-4">Escolha o plano que mais se adapta às suas necessidades.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Plano Básico */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800">Plano Básico</h2>
            <p className="text-gray-600 mt-2">Ideal para pequenas empresas.</p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900">$19.99</span>
              <span className="text-sm text-gray-600">/mês</span>
            </div>
            <ul className="mt-6 text-gray-600">
              <li>1 usuário</li>
              <li>10GB de armazenamento</li>
              <li>Suporte básico</li>
            </ul>
            <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Escolher Plano</button>
          </div>

          {/* Plano Intermediário */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800">Plano Intermediário</h2>
            <p className="text-gray-600 mt-2">Ideal para empresas em crescimento.</p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900">$49.99</span>
              <span className="text-sm text-gray-600">/mês</span>
            </div>
            <ul className="mt-6 text-gray-600">
              <li>5 usuários</li>
              <li>50GB de armazenamento</li>
              <li>Suporte prioritário</li>
            </ul>
            <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Escolher Plano</button>
          </div>

          {/* Plano Premium */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800">Plano Premium</h2>
            <p className="text-gray-600 mt-2">Para empresas que precisam de todos os recursos.</p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900">$99.99</span>
              <span className="text-sm text-gray-600">/mês</span>
            </div>
            <ul className="mt-6 text-gray-600">
              <li>Ilimitado usuários</li>
              <li>Armazenamento ilimitado</li>
              <li>Suporte premium 24/7</li>
            </ul>
            <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Escolher Plano</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
