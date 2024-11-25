import React, { useEffect } from 'react';
import { useRouter } from 'next/router'; // Usando o useRouter do Next.js
import Lottie from 'lottie-react';
import animationData from '../assets/404.json';

const NotFound: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/'); // Redireciona para a página inicial após 5 segundos
    }, 5000);

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, [router]);

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
