import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { FaStar } from 'react-icons/fa';

type SocialProof = {
  image: string;
  alt: string;
  stars: number;
  comment: string;
};

const SocialProofCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de provas sociais com imagens, número de estrelas e comentários
  const socialProofs: SocialProof[] = [
    {
      image: '/assets/social-proof1.jpeg',
      alt: 'Prova Social 1',
      stars: 5,
      comment: 'Excelente serviço, super recomendo! A entrega foi rápida e o suporte incrível.',
    },
    {
      image: '/assets/social-proof2.jpeg',
      alt: 'Prova Social 2',
      stars: 4,
      comment: 'Boa experiência, mas a entrega demorou um pouco. No geral, gostei do produto.',
    },
    {
      image: '/assets/social-proof3.jpeg',
      alt: 'Prova Social 3',
      stars: 5,
      comment: 'A qualidade do produto superou minhas expectativas! Vou comprar novamente.',
    },
    {
      image: '/assets/social-proof4.jpeg',
      alt: 'Prova Social 4',
      stars: 4,
      comment: 'Atendimento bom, mas acho que poderia melhorar um pouco mais em alguns pontos.',
    },
    {
      image: '/assets/social-proof5.jpeg',
      alt: 'Prova Social 5',
      stars: 5,
      comment: 'Excelente experiência, a equipe foi muito atenciosa e a entrega foi rápida.',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? socialProofs.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === socialProofs.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Comentários de nossos clientes
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Botão Anterior */}
          <button
            onClick={handlePrev}
            className="absolute left-0 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* Carrossel de 3 Avaliações */}
          <div className="w-full flex overflow-x-scroll scroll-smooth space-x-4 max-w-4xl">
            {socialProofs.slice(currentIndex, currentIndex + 3).map((proof, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 p-4 bg-white rounded-lg shadow-lg">
                <div className="w-full h-40 overflow-hidden rounded-lg">
                  <img
                    src={proof.image}
                    alt={proof.alt}
                    className="w-full h-full object-contain" // Imagem proporcional
                  />
                </div>

                <div className="mt-4 text-center">
                  {/* Estrelas de avaliação */}
                  <div className="flex justify-center space-x-1 mb-2">
                    {Array.from({ length: 5 }, (_, index) => (
                      <FaStar
                        key={index}
                        className={`w-5 h-5 ${index < proof.stars ? 'text-yellow-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>

                  {/* Comentário */}
                  <p className="text-sm text-gray-700">{proof.comment}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Botão Próximo */}
          <button
            onClick={handleNext}
            className="absolute right-0 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Indicadores de Navegação do Carrossel */}
        <div className="flex justify-center mt-4">
          {socialProofs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofCarousel;
