import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfUse: React.FC = () => {
  return (
    <div>
      <Header />
    <div className="bg-gray-100 min-h-screen mt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Termos de Uso</h1>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introdução</h2>
          <p className="text-gray-700 mb-6">
            Bem-vindo à nossa agência digital. Ao acessar e utilizar nossos serviços, você concorda em cumprir e ser
            regido pelos seguintes termos e condições de uso.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Serviços</h2>
          <p className="text-gray-700 mb-6">
            Oferecemos uma variedade de serviços digitais, incluindo mas não se limitando a desenvolvimento de sites,
            marketing digital, gestão de redes sociais e automações. Todos os serviços são fornecidos de acordo com os
            termos especificados em nossos contratos de serviço.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Uso Aceitável</h2>
          <p className="text-gray-700 mb-6">
            Você concorda em usar nossos serviços apenas para fins legais e de acordo com nossos termos. É proibido
            usar nossos serviços para qualquer atividade que possa causar dano a terceiros ou violar qualquer lei
            aplicável.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Propriedade Intelectual</h2>
          <p className="text-gray-700 mb-6">
            Todos os materiais fornecidos por nossa agência, incluindo, mas não se limitando a, textos, imagens,
            gráficos e códigos, são de nossa propriedade ou licenciados por nós e estão protegidos por leis de
            propriedade intelectual.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitação de Responsabilidade</h2>
          <p className="text-gray-700 mb-6">
            Em nenhuma circunstância seremos responsáveis por qualquer dano direto, indireto, incidental ou
            consequencial decorrente do uso ou da incapacidade de uso de nossos serviços.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Modificações dos Termos</h2>
          <p className="text-gray-700 mb-6">
            Reservamo-nos o direito de modificar estes termos a qualquer momento. Notificaremos os usuários sobre
            qualquer alteração significativa nos termos, e o uso contínuo dos serviços após tais alterações constitui
            aceitação dos novos termos.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contato</h2>
          <p className="text-gray-700 mb-6">
            Se você tiver dúvidas sobre nossos termos de uso, entre em contato conosco em{' '}
            <a href="mailto:contato@suaagencia.com" className="text-blue-600 hover:underline">
              contato@suaagencia.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default TermsOfUse;
