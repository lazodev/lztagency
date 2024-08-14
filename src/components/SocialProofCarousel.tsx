import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const SocialProofCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de imagens das provas sociais
  const images = [
    '/images/social-proof1.jpg',
    '/images/social-proof2.jpg',
    '/images/social-proof3.jpg',
    '/images/social-proof4.jpg',
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          O que Nossos Clientes Dizem
        </h2>

        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <div className="w-full max-w-4xl overflow-hidden rounded-lg">
            <img
              src={images[currentIndex]}
              alt={`Prova Social ${currentIndex + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full ${
                currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofCarousel;
