import React, { useEffect, useRef, useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import lottie from 'lottie-web';
import Modal from './Modal'; // Certifique-se de que o componente Modal está sendo importado corretamente

const Hero: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current, 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/a9a7d0f6-375d-4b7a-808d-1c9fdda2b796/XIOfL0BQam.json', 
      });
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-16 px-4 md:px-8">
        <div className="md:w-1/2">
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
              href="/solicitar-orcamento"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 relative h-96 overflow-hidden">
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
        videoUrl="https://www.youtube.com/embed/lg6uvLNv8zE?si=0RS9whDyi_JnnmUm"
      />
    </section>
  );
};

export default Hero;
