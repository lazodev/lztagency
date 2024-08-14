import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

const BotsAutomations: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (animationContainer.current && !animationInstance.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/69d1bb7f-fa10-4e4a-8837-00ce291786c8/5isXFYKXa7.json',
      });
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null;
      }
    };
  }, []);

  return (
    <section className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-8">
        {/* Lado Esquerdo - Título, Subtítulo e Botão */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Desenvolvimento de Bots Inteligentes
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Automação personalizada com bots inteligentes para otimizar o atendimento e melhorar a eficiência da sua empresa.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            Saiba Mais
          </button>
        </div>

        {/* Lado Direito - Animação Lottie */}
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
