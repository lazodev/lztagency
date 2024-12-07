import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import lottie, { AnimationItem } from 'lottie-web';
import animationData from '@/assets/1723615790298.json';

// Carrega o componente Lottie apenas no lado do cliente (SSR: false)
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const BotsAutomations: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (isClient && animationContainer.current && !animationInstance.current) {
      try {
        animationInstance.current = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData,
        });
      } catch (error) {
        console.error('Erro ao carregar a animação:', error);
        // Exibir uma mensagem de erro ou uma animação alternativa
      }
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null;
      }
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <section className="bg-gray-100 text-gray-800 py-16 min-h-[700px] flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Desenvolvimento de bots inteligentes
          </h2>
          <p className="mt-4 text-xl md:text-2xl">
            Automação personalizada com bots inteligentes para otimizar o atendimento e melhorar a eficiência da sua empresa.
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
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full h-full max-w-xs md:max-w-md" ref={animationContainer}>
            {/* Animação Lottie */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotsAutomations;
