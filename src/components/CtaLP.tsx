import React from 'react';
import Link from 'next/link';

interface CtaLPProps {
  checkoutLink: string;
}

const CtaLP: React.FC<CtaLPProps> = ({ checkoutLink }) => {
  return (
    <Link href={checkoutLink} passHref
        className="
        bg-green-500 
        text-white 
        rounded-full 
        px-6 
        py-3 
        text-lg 
        font-semibold 
        transition 
        duration-300 
        ease-in-out 
        hover:bg-green-600 
        focus:outline-none 
        focus:ring-2 
        focus:ring-green-400 
        focus:ring-opacity-75
        "
        target='_blank'
        >
        QUERO COMPRAR AGORA
    </Link>
  );
};

export default CtaLP;
