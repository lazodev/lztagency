import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'O que é gestão de tráfego?',
    answer: 'Gestão de tráfego envolve a otimização de campanhas publicitárias para direcionar o público certo para seu site ou landing page, maximizando as conversões.',
  },
  {
    question: 'Como funciona o desenvolvimento de bots?',
    answer: 'Desenvolvemos bots personalizados para automatizar processos de atendimento ao cliente, captura de leads e muito mais, aumentando a eficiência do seu negócio.',
  },
  {
    question: 'Quais serviços de automação vocês oferecem?',
    answer: 'Oferecemos automação de marketing, chatbots, automação de processos internos e muito mais para otimizar e escalar suas operações.',
  },
  // Adicione mais perguntas e respostas conforme necessário
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight text-center">
          Perguntas Frequentes
        </h2>
        <div className="mt-8 max-w-2xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 text-lg font-semibold text-gray-700 flex justify-between items-center focus:outline-none"
              >
                {item.question}
                <span className="ml-2">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="py-2 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
