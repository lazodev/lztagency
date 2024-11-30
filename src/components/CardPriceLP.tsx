import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';
import CtaLP from '@/components/CtaLP';

interface CardPriceProps {
  title: string;
  subtitle: string;
  products: Array<{
    name: string;
    image: StaticImageData;
    installment: string;
    price: string;
    pixPrice: string;
    discount: string;
    ctaLink: string;
    ctaText: string;
  }>;
}

const CardPrice: React.FC<CardPriceProps> = ({ title, subtitle, products }) => {
  return (
    <div className="container mx-auto py-8 px-5">
      <h2 className="text-4xl font-bold text-center mb-4 text-white">{title}</h2>
      <p className="text-lg text-center mb-8 text-amber-400">{subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-xl p-6 bg-white shadow-md flex flex-col items-center text-center">
            <div className="bg-red-500 text-white py-2 px-4 rounded-full mb-4">
              Pacote Econômico
              <br />
              LEVE 3 PAGUE 2 (90 DIAS)
            </div>
            <Image src={product.image} alt={product.name} className="w-full h-auto mb-4 rounded" />
            <div className="text-xl font-bold mb-2">{product.name}</div>
            <div className="text-lg mb-2">Por 12x de</div>
            <div className="text-3xl font-bold text-green-500 mb-2">{product.installment}</div>
            <div className="text-lg mb-2">ou {product.pixPrice} à vista no pix</div>
            <div className="text-red-500 mb-4">Desconto de {product.discount}</div>
            <CtaLP checkoutLink='https://app.monetizze.com.br/r/AYM24949495/?u=VK81602'/>
            <div className="flex items-center mt-4">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 12h18m-6 9h6"></path>
              </svg>
              <span className="text-lg">Frete grátis para todo Brasil</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPrice;
