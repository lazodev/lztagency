import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

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
      </div>
    </div>
  );
};

export default NotFound;
