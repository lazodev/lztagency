import React, { useEffect, useRef, useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import Modal from './Modal';
import lottie from 'lottie-web';
import animationData from '../assets/1723491656747.json';

const Hero: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current, 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData, // Usando o import do arquivo JSON
      });

      // Cleanup function to stop animation on unmount
      return () => animation.destroy();
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-16 px-4 md:px-8">
        {/* Lado Esquerdo - Animação Lottie em telas menores */}
        <div className="md:hidden w-full relative mb-8">
          <div
            className="w-full h-full"
            ref={animationContainer}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          ></div>
        </div>

        {/* Lado Esquerdo - Título, Subtítulo e CTAs */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Transforme Suas Ideias em Realidade Digital
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Ajudamos sua empresa a crescer através de estratégias digitais inovadoras e personalizadas.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={openModal}
              className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              <PlayIcon className="w-6 h-6 mr-2" />
              Ver Vídeo
            </button>
            <a
              href="https://wa.me/5588992086636"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>

        {/* Lado Direito - Animação Lottie em telas maiores */}
        <div className="hidden md:block md:w-1/2 mt-10 md:mt-0 relative h-96 overflow-hidden">
          <div
            className="w-full h-full"
            ref={animationContainer}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          ></div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl="https://www.youtube.com/channel/UCPzVqY5y_fG8jwKznE1zf8g"
      />
    </section>
  );
};

export default Hero;
