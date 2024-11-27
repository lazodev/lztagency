import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
// Remover o Lottie apenas do lado do cliente
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });
import animationData from '../assets/404.json';

const NotFound: React.FC = () => {
  const [isClient, setIsClient] = useState(false); // Estado para verificar se está no cliente
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Definir como cliente quando o componente for montado
    const timer = setTimeout(() => {
      router.push('/'); // Redireciona para a página inicial após 5 segundos
    }, 5000);

    return () => clearTimeout(timer); // Limpar o timer
  }, [router]);

  if (!isClient) {
    return null; // Não renderiza nada até ter certeza de que está no lado do cliente
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-600">
          Página Não Encontrada
        </p>
        <p className="mt-2 text-lg text-gray-500">
          Você será redirecionado para a página inicial em alguns segundos...
        </p>
        {/* Lottie renderizado apenas no lado do cliente */}
        {isClient && (
          <div className="mt-8">
            <Lottie animationData={animationData} play loop />
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFound;
