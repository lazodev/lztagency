import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../assets/traffic-management.json'; // Certifique-se de ter o arquivo Lottie

const TrafficManagement: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Lado Esquerdo - Animação Lottie */}
        <div className="md:w-1/2">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>

        {/* Lado Direito - Título e Subtítulo */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Gestão de Tráfego Eficaz para Aumentar Suas Conversões
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Otimizamos campanhas para alcançar o público certo, no momento certo, garantindo o melhor retorno sobre o investimento.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrafficManagement;
