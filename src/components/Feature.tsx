import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
}

const Feature: React.FC<FeatureProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-8">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6">
        <Image src={imageUrl} alt={title} layout="responsive" width={500} height={300} className="rounded-lg shadow-md" />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
