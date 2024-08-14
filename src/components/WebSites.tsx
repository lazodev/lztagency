import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

const WebSites: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (animationContainer.current && !animationInstance.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/5b76a10f-1919-41aa-9df1-54a9ab0938f9/HBEpLmfgH2.json',
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
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
        {/* Lado Esquerdo - Animação Lottie */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="w-full h-full max-w-xs md:max-w-md" ref={animationContainer}>
            {/* Animação Lottie */}
          </div>
        </div>

        {/* Lado Direito - Título, Subtítulo e Botão */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Desenvolvimento de Sites, Lojas Virtuais e Páginas de Vendas
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Criação de plataformas digitais personalizadas para alavancar o seu negócio, com design responsivo e otimizado para conversões.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebSites;
