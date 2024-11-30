// components/CtaButton.tsx
import React from 'react';

interface CtaButtonProps {
  link: string;
  text: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ link, text }) => {
  return (
    <a href={link} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
      {text}
    </a>
  );
};

export default CtaButton;
