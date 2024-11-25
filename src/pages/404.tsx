import React from 'react';
import Lottie from 'react-lottie-player';
import animationData from '../assets/404.json';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="w-72 h-72 md:w-96 md:h-96">
        <Lottie animationData={animationData} play loop />
      </div>
      <h1 className="text-4xl font-bold mt-6">Página Não Encontrada</h1>
      <p className="mt-2 text-gray-600 text-lg">Você será redirecionado para a página inicial em alguns segundos.</p>
    </div>
  );
};

export default NotFound;
