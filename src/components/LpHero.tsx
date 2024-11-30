import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: StaticImageData;
  ctaLink: string;
  ctaText: string;
}

const LpHero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage, ctaLink, ctaText }) => {
  return (
    <div className="relative h-screen p-36">
        <Image src={backgroundImage} alt="Hero back" layout="fill" objectFit="cover" objectPosition="center" priority className="z-0" />
      <div className="absolute inset-0 bg-gray-900 bg-transparent"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-1/2 h-full text-left text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-lg mb-8">{subtitle}</p>
        <a href={ctaLink} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default LpHero;
