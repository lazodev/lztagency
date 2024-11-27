import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

const WebSites: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    // Verifica se o código está sendo executado no cliente (navegador)
    if (typeof window !== 'undefined' && animationContainer.current && !animationInstance.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/5b76a10f-1919-41aa-9df1-54a9ab0938f9/HBEpLmfgH2.json',
      });
    }

    return () => {
      // Limpeza da animação quando o componente for desmontado
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null;
      }
    };
  }, []); // A dependência vazia garante que o código execute apenas uma vez após o primeiro render

  return (
    <section className="bg-white text-gray-800 py-16 min-h-[700px] flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
        {/* Lado Esquerdo - Animação Lottie */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="w-full h-full max-w-xs md:max-w-md" ref={animationContainer}>
            {/* Animação Lottie */}
          </div>
        </div>

        {/* Lado Direito - Título, Subtítulo e Botão */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Desenvolvimento de sites, lojas virtuais e páginas de vendas
          </h2>
          <p className="mt-4 text-xl md:text-2xl">
            Criação de plataformas digitais personalizadas para alavancar o seu negócio, com design responsivo e otimizado para conversões.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5588999074499&text=Ol%C3%A1,%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os!"
            className="mt-6 inline-block px-8 py-4 bg-indigo-500 hover:bg-indigo-700 text-white text-lg md:text-xl font-semibold rounded-md"
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

export default WebSites;
