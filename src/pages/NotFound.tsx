import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/404.json';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 7000); // Redireciona após 7 segundos

    return () => clearTimeout(timer); // Limpa o timer caso o componente seja desmontado
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="w-72 h-72 md:w-96 md:h-96">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <h1 className="text-4xl font-bold mt-6">Página Não Encontrada</h1>
      <p className="mt-2 text-gray-600 text-lg">Você será redirecionado para a página inicial em alguns segundos.</p>
    </div>
  );
};

export default NotFound;
