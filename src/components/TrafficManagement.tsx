import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import * as animationData from '../assets/traffic-management.json';

// Carrega o componente Lottie apenas no lado do cliente (SSR: false)
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const TrafficManagement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white py-16 min-h-[700px] flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
        {/* Lado Esquerdo - Animação Lottie */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
        <div ref={containerRef} style={{ width: '300px', height: '300px' }}>
            <Lottie options={{
              loop: true,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }} />
          </div>
        </div>

        {/* Lado Direito - Título e Subtítulo */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Gestão de tráfego eficaz para aumentar suas conversões
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-gray-600">
            Otimizamos campanhas para alcançar o público certo, no momento certo, garantindo o melhor retorno sobre o investimento.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5588999074499&text=Ol%C3%A1,%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os!"
            className="mt-6 inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl font-semibold rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrafficManagement;
